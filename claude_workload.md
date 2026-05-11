# claude_workload — .txt-Master Adventure Studio

> File di handoff condiviso tra Claude e Codex.
> Aggiornare ad ogni sessione/commit con stato corrente, decisioni prese e prossimi passi.

---

## Stato attuale — 2026-05-11 (aggiornamento 9)

### RPG_PROJECT — Sistema Rank Mosse + Passive Tree rifinito

**Commit da pushare su `main` (non ancora pushato):**

#### 1. Sistema rank mosse (GameEngine.kt)
- Ogni attacco ha un rank (0–6) che scala gli effetti della mossa
- **Fonte rank**: `attackRank(level) = (level / 2).coerceIn(0, 3)` → rank 3 raggiunto a lv6, poi NON sale più con i livelli
- **Bonus nodo**: ogni nodo del ramo giusto nel passive tree aggiunge +1 rank (max +3, per 3 nodi per ramo)
- **Rank totale** = base livello (0–3) + nodi ramo (0–3), cap a 6
- `attackRank` aggiunto come private fun in GameEngine

Scaling per mossa:

| Mossa | Rank 3 | Rank 5 | Rank 6 (mastery) |
|---|---|---|---|
| **Bash** | stagger 64%, durata 3r | — | stagger garantito su hit |
| **Affondo** | acc -1, danno +3, EXPOSED 3r | acc 0, danno +4 | EXPOSED magnitude 2 |
| **Turbine** | weaken 64%, durata 3r | stamina 1 | weaken garantito, durata 4r, stamina 0 |
| **Taglio** | bleed 62%, durata 4r | bleed mag 2 | bleed garantito, durata 5r, mag 2 |
| **Tiro** | FOCUSED max 4 | FOCUSED max 5 | FOCUSED max 6, "Mira perfetta" +1 danno |
| **Doppio** | 3 colpi, bleed 45% | bleed 55% | bleed garantito, durata 5r |
| **Marchio** | bleed/danno +1 ogni 2 rank | — | cap bleed 7, danno cap 9 |
| **Lancia** | range danno allargato | — | danno max 12 |
| **Parola** | durata 3r, mag alta | — | durata 4r, magnitude massima |

#### 2. CharacterSheet — 9 nuovi campi rank bonus
```
bashRankBonus, affondoRankBonus, turbineRankBonus,
taglioRankBonus, tiroRankBonus, doppioRankBonus,
marchioRankBonus, lanciaRankBonus, parolaRankBonus
```
Tutti `Int = 0`, calcolati da `PassiveNodeResolver`.

#### 3. SkillTreeNode — campo `attackRankId: String?`
- Ogni nodo di colonna ha `attackRankId` = nome della mossa
- I nodi extra fuori dal conteggio di 3 per ramo hanno `attackRankId = null`
- Valori validi: `"bash"`, `"affondo"`, `"turbine"`, `"taglio"`, `"tiro"`, `"doppio"`, `"marchio"`, `"lancia"`, `"parola"`

#### 4. SkillTreeCatalog — attackRankId sui nodi di colonna
Ogni ramo ha esattamente **3 nodi con attackRankId** (regola uniforme per tutte le classi):

| Classe | Ramo | Nodi rank (3) | Nodi extra (attackRankId=null) |
|---|---|---|---|
| Warrior | Bash | g_bash1, g_bash2, pelle_d_acciaio | bastione_vivente, giuramento_del_ferro |
| Warrior | Affondo | g_aff1, g_aff2, contrattacco | — |
| Warrior | Turbine | g_turb1, g_turb2, carne_del_ferro | — |
| Ranger | Taglio | b_tag1, b_tag2, occhio_del_predatore | traccia_indelebile, passo_fantasma |
| Ranger | Tiro | b_tiro1, b_tiro2, istinto_di_sopravvivenza | — |
| Ranger | Doppio | b_dop1, b_dop2, colpo_decisivo | — |
| Cultist | Marchio | r_mar1, r_mar2, marchio_potenziato | — |
| Cultist | Lancia | r_lan1, r_lan2, corruzione_amplificata | patto_del_vuoto |
| Cultist | Parola | r_par1, r_par2, studio_arcano | — |

#### 5. PassiveNodeResolver — rank bonus calcolati
- Conta nodi allocati per `attackRankId` → scrive i 9 campi rank in `CharacterSheet`
- Il livello nascosto (stat growth: HP, stamina, meleeSkill, ecc.) è separato e indipendente dal rank

#### 6. Correzioni simulazione (sessione precedente)
- `HEAL_EVERY = 3` (era 5) — 3 incontri = 1 stanza reale = 1 checkpoint
- `SHOP_EVERY = 3` (era 4) — shop alla stessa cadenza del checkpoint

#### 7. PassiveNodeResolver — modello livello nascosto
- Ogni nodo non-START allocato = +1 livello nascosto sulle **sole stat** (HP, stamina, meleeSkill, ecc.)
- Il rank delle mosse NON sale con i livelli nascosti
- `perkGrowthLabel()` esposto per l'UI

---

## Istruzioni per Codex — Simulazioni rank mosse

### Obiettivo
Verificare che il sistema rank mosse produca progressione significativa e bilanciamento accettabile tra le classi e tra le scelte di build.

### File di riferimento
- Simulazione esistente: `app/src/test/java/com/bergman90/txtmaster/engine/ClassRunBalanceSimulationTest.kt`
- Engine: `app/src/main/java/com/bergman90/txtmaster/engine/GameEngine.kt`
- Funzione chiave: `attackRank(level)` e i campi `*RankBonus` in `CharacterSheet`

### Scenario 1 — Progressione rank per livello (sanity check)
**File**: aggiungi `AttackRankProgressionTest.kt` in `engine/`

Verifica che a parità di build e gear, un personaggio di livello superiore applichi più condizioni in media:
- Warrior lv1 (rank 0) vs lv6 (rank 3): Bash deve applicare stagger con frequenza significativamente maggiore a lv6
- Ranger lv1 vs lv6: Taglio deve applicare bleed con frequenza maggiore
- Simulare 200 combatti per configurazione, contare condizioni applicate

**Assertion**: surv% non deve calare con livelli più alti (ovvio), ma anche: `avgConditionsApplied(lv6) > avgConditionsApplied(lv1) * 1.3`

### Scenario 2 — Rank bonus nodi: specializzazione vs generalismo
**File**: estendi `ClassRunBalanceSimulationTest.kt` con nuovi test

Confronta due build Warrior a lv6 nella Torre (5 stanze early):
- **Generalista**: 3 nodi distribuiti (1 bash + 1 affondo + 1 turbine) → rank 4 su tutte
- **Specialista bash**: 3 nodi tutti in bash → rank 6 bash, rank 3 affondo/turbine
- **Specialista turbine**: 3 nodi tutti in turbine → rank 6 turbine, rank 3 bash/affondo

Idem per Ranger (taglio vs tiro vs doppio) e Cultist (marchio vs lancia vs parola).

**Assertion**: le tre build devono avere surv% comparabile (±15%) — nessuna dominante in modo schiacciante. Se una supera le altre di oltre 20%, segnalare nei log con `System.out.println`.

**Come settare il rank bonus**: creare il `CharacterSheet` con i campi `bashRankBonus = 3` ecc. direttamente (non passare per l'allocazione nodi — è una simulazione). Esempio:
```kotlin
val warriorBashSpec = CharacterFactory.createCharacter("warrior", "Test").copy(
    level = 6,
    bashRankBonus = 3   // 3 nodi bash → rank 6 totale
)
```

### Scenario 3 — Rank 6 mastery: effetti speciali attivi
**File**: aggiungi `AttackRankMasteryTest.kt` in `engine/`

Verifica che gli effetti rank 6 scattino correttamente:
- **Bash rank 6**: in 100 hit, stagger deve essere applicato ≥ 95 volte (garantito)
- **Taglio rank 6**: in 100 hit, bleed deve essere applicato ≥ 95 volte (garantito)
- **Doppio rank 6**: in 100 combat completi, bleed medio per hit deve essere > 80%
- **Turbine rank 6**: `staminaCost == 0` — verificare che non venga mai consumata stamina
- **Parola rank 6**: conditionDuration deve essere 4 su CONFUSED e WEAKENED

Questi sono test unitari su singola azione, non simulazioni complete. Usare `GameState` con nemico fittizio e chiamare direttamente `rangerAttack(state, "taglio_tendini")`.

### Scenario 4 — Cultist: scaling skill vs rank
Il Cultist scala già con `loreSkill`, `alchemySkill`, `deceptionSkill`. Verificare che il rank non si sovrapponga in modo eccessivo:
- Cultist lv6, 0 nodi: confronta marchio magnitude con cultist lv6, 3 nodi marchio
- Differenza attesa: bleedMagnitude dovrebbe differire di ~1-2, non di 5+

**Assertion**: `bleedMagWithNodes - bleedMagWithoutNodes <= 3`

### Come eseguire
```bash
JAVA_HOME="C:/Program Files/Android/Android Studio/jbr" ./gradlew test --tests "*.AttackRankProgressionTest" --rerun-tasks
JAVA_HOME="C:/Program Files/Android/Android Studio/jbr" ./gradlew test --tests "*.AttackRankMasteryTest" --rerun-tasks
JAVA_HOME="C:/Program Files/Android/Android Studio/jbr" ./gradlew test --rerun-tasks  # tutti
```

### Output atteso
Stampare tabelle comparabili a quelle di `ClassRunBalanceSimulationTest`:
```
──────────────────────────────────────────────────
  RANK PROGRESSION — Bash Warrior
──────────────────────────────────────────────────
  Build                    Stagger%   Surv%   Rooms
  ──────────────────────────────────────────────
  Warrior lv1 (rank 0)       40%       ...     ...
  Warrior lv6 (rank 3)       64%       ...     ...
  Warrior lv6 +3bash (rank6) 100%      ...     ...
──────────────────────────────────────────────────
```

---

## In sospeso / prossimi passi

- [ ] **Simulazioni rank** — Codex deve scrivere i test sopra e riportare i risultati
- [ ] **Keystone V2** — collegare `combatFlag` al GameEngine (`guard_on_low_hp`, `bleeding_chance_bonus`, `immune_first_round`, `guard_extend`, `ritual_bolt_bonus`)
- [ ] **Gear T4** — 12 nuovi item (4 per classe) per le Lande del Caos
- [ ] **Lande del Caos** — stanze 31+
- [ ] **Grimorio** — togliere le avventure elencate alla prossima release

---

## File critici (RPG_PROJECT)

| File | Scopo |
|------|-------|
| `engine/GameEngine.kt` | Logica combattimento, `warriorAttack`, `rangerAttack`, cultist attacks, `attackRank()` |
| `engine/PassiveNodeResolver.kt` | Calcola stat bonus + rank bonus dai nodi allocati |
| `engine/SkillTreeCatalog.kt` | 52 nodi, `attackRankId` sui nodi di colonna |
| `model/CharacterSheet.kt` | Scheda personaggio, inclusi `*RankBonus` e `passive*Bonus` |
| `model/SkillTreeNode.kt` | Modello nodo, campo `attackRankId` |
| `test/.../ClassRunBalanceSimulationTest.kt` | Simulazione bilanciamento classi (500 iter) |

---

## File critici (Adventure Studio)

| File | Scopo |
|------|-------|
| `adventure-studio/app.js` | Tutta la logica editor (~13000 righe) |
| `adventure-studio/runtime-compiler.js` | Compilatore grafo → JSON v2 |
| `adventure-studio/styles.css` | Stili editor |
| `adventures/catalog.json` | Indice avventure pubblicate |

---

_Ultimo aggiornamento: 2026-05-11 — Claude Sonnet 4.6_
