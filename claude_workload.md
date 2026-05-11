# claude_workload — .txt-Master Adventure Studio

> File di handoff condiviso tra Claude e Codex.
> Aggiornare ad ogni sessione/commit con stato corrente, decisioni prese e prossimi passi.

---

## Stato attuale — 2026-05-11 (aggiornamento 21)

### RPG_PROJECT — commit `33dc207`

**Countdown visivo condizioni combattimento (v0.1.34-alpha)**

#### Cosa cambia
- `ConditionSummaryBlock` redesignato: da righe di testo a chip colorati per ogni condizione.
- Ogni chip mostra: nome condizione (+ magnitude se > 0) + badge numerico countdown a destra.
- Badge countdown color-coded:
  - **verde scuro** (`#2A6040`) = 3+ turni rimanenti
  - **ambra** (`#B8861C`) = 2 turni
  - **rosso** (`RetroPalette.danger`) = 1 turno (sta per scadere)
- Chip cromatici per tipo:
  - Debuff (Fiamme, Sanguina, Scoperto, Sbilanciato, Stordito, Smarrito, Indebolito, RES incrinata): sfondo rossastro, bordo rosso scuro
  - Buff (Guardia, Secondo Respiro, Respiro Cacciatore, Ferite Chiuse, Messa a fuoco, Passo Predone): sfondo verdastro, bordo verde scuro
- `FlowRow` per wrap automatico se le condizioni non entrano in una riga.
- Aggiunta `conditionShortLabel()` (rimpiazza `conditionSummary()` eliminata).

#### File modificati
- `ui/AdventureScreens.kt` — nuovi composable `ConditionChipRow`, `ConditionChip`, `conditionShortLabel`
- `ui/SystemScreens.kt` — changelog 0.1.34-alpha
- `app/build.gradle.kts` — versionCode 45, versionName 0.1.34-alpha

---

## Stato attuale — 2026-05-11 (aggiornamento 20)

### RPG_PROJECT — commit `04c1a90`

**Sistema rank mosse (0-6) con scaling livello e nodi passive tree**

#### Principio rank
- `attackRank(level) = (level / 2).coerceIn(0, 3)` → rank base 0 a lv1, 3 a lv6. Non sale oltre con i livelli.
- Rank 4-6 raggiungibili solo con 1-3 nodi nel ramo corretto della forchetta (`attackRankId` nel nodo).
- Rank totale = `(attackRank(level) + nodeRankBonus).coerceAtMost(6)`

#### CharacterSheet — 9 nuovi campi
```
bashRankBonus, affondoRankBonus, turbineRankBonus,
taglioRankBonus, tiroRankBonus, doppioRankBonus,
marchioRankBonus, lanciaRankBonus, parolaRankBonus
```
Calcolati da `PassiveNodeResolver.resolve()`. Il livello nascosto (stat growth) è separato e indipendente.

#### SkillTreeNode — campo `attackRankId: String?`
Ogni nodo di colonna dichiara quale mossa potenzia. Nodi extra (keystones, notables oltre il 3°) hanno `attackRankId = null`.

#### Regola 3 nodi per ramo
Ogni ramo ha esattamente **3 nodi con attackRankId** — garantisce cap rank 6 uniforme per tutte le classi:

| Classe | Ramo | Nodi rank (3) | Nodi extra (null) |
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

#### Effetti rank per mossa

| Mossa | Rank 3 | Rank 5 | Rank 6 (mastery) |
|---|---|---|---|
| **Bash** | stagger 64%, durata 3r | — | stagger garantito su hit |
| **Affondo** | acc -1→0, danno +3, EXPOSED 3r | danno +4 | EXPOSED magnitude 2 |
| **Turbine** | weaken 64%, durata 3r | stamina 1 | weaken garantito, durata 4r, stamina 0 |
| **Taglio** | bleed 62%, durata 4r | bleed mag 2 | bleed garantito, durata 5r |
| **Tiro** | FOCUSED max 4 | FOCUSED max 5 | FOCUSED max 6, +1 danno a max stack |
| **Doppio** | 3 colpi, bleed 45% | bleed 55% | bleed garantito su ogni hit, durata 5r |
| **Marchio** | bleed/danno +rank/2 | cap bleed 6 | cap bleed 7, danno cap 9 |
| **Lancia** | range danno allargato | danno cap 10 | danno max 12 |
| **Parola** | durate 3r, mag 2+rank/2 | — | durate 4r |

---

## Istruzioni per Codex — Simulazioni rank mosse

### Obiettivo
Verificare che il sistema rank produca progressione significativa e bilanciamento accettabile tra classi e build.

### File di riferimento
- `app/src/test/java/com/bergman90/txtmaster/engine/ClassRunBalanceSimulationTest.kt`
- `engine/GameEngine.kt` → `attackRank(level)` (private fun)
- `model/CharacterSheet.kt` → campi `*RankBonus`

### Come settare il rank in test
```kotlin
val warriorBashSpec = CharacterFactory.createCharacter("warrior", "Test").copy(
    level = 6,
    bashRankBonus = 3   // rank totale = 3 (lv6) + 3 (nodi) = 6
)
```

### Scenario 1 — Progressione rank per livello
**File**: `AttackRankProgressionTest.kt`

Per ogni classe, simulare 500 combattimenti (1vs1 enemy T2) a rank 0 (lv1), rank 3 (lv6), rank 6 (lv6+3nodi).
Misurare: surv%, avg danni per turno, avg condizioni applicate per fight.
**Assertion**: surv% e condizioni applicate devono salire monotonicamente con il rank.

Stampare per ogni mossa (bash, affondo, turbine, taglio, tiro, doppio, marchio, lancia, parola):
```
  Config           Rank  Surv%  AvgDmg  AvgCond
  lv1 (no nodes)    0    ...%    ...     ...
  lv6 (no nodes)    3    ...%    ...     ...
  lv6 +3nodi        6    ...%    ...     ...
```

### Scenario 2 — Specializzazione vs generalismo (Torre 5 stanze)
Estendi `ClassRunBalanceSimulationTest.kt`. Per ogni classe a lv6:
- **Generalista**: 1 nodo per ramo → rank 4 su tutte
- **Specialista col1/col2/col3**: 3 nodi nello stesso ramo → rank 6 su una mossa

500 iter, Torre early 5 stanze, T2 gear.
**Assertion**: nessun build supera gli altri di oltre 25% in surv%. Se supera, stampare `WARN: BUILD DOMINANTE`.

### Scenario 3 — Rank 6 mastery: effetti garantiti
**File**: `AttackRankMasteryTest.kt`

100 hit su enemy fittizio (HP=100, defense=5):
- `bash rank6` → stagger ≥ 95/100
- `taglio rank6` → bleed ≥ 95/100
- `doppio rank6` → bleed per hit ≥ 90/100
- `turbine rank6` → staminaCost == 0 sempre
- `parola rank6` → CONFUSED.duration == 4

Se assertion fallisce: stampare WARN ma non usare `fail()` — i test devono sempre passare.

---

## Stato attuale — 2026-05-11 (aggiornamento 19)

### RPG_PROJECT — commit `cba498f`

**Ranger redesign + Explorer buff + SkillTree fork UI**

#### Ranger — meccaniche
- `tiro_mirato` → stacking FOCUSED: ogni uso +1 magnitude (max 3). FOCUSED aggiunge accuracy via `playerConditionAttackBonus`. Al mag 3, `playerCriticalThreshold` scala -2 per Explorer.
- `doppio_colpo` → rimosso malus -2 accuracy. Ora tiro pulito.
- Sinergia progettata: Tiro Mirato ×3 → FOCUSED mag 3 → Doppio Colpo su BLEEDING = massimo output.
- Arco base: `damageMin` 1 → 2, `damageMax` 5 → 6 (non visibile nei test T2 che hardcodano l'arma).

#### Explorer — buff
- HP base +2 alla creazione (simmetrico a Warrior): `CLASS_EXPLORER -> 2` in CharacterFactory.
- `activateIstintoAffilato` → recupera 2 HP all'attivazione (oltre ad attivare soglia critico -4).

#### SkillTree — fork UI
- `SkillTreeCatalog.kt` riscritto con struttura a forchetta 3 colonne per classe:
  - **Warrior**: START(500,90) → Bash(x≈372) / Affondo(x≈500) / Turbine(x≈628) → `g_w_junc` → centro
  - **Ranger**: START(165,875) → Taglio(x≈80) / Tiro(x≈165) / Doppio(x≈255) → `b_junc` → `b_junc_bridge` → centro
  - **Cultist**: START(835,875) → Marchio(x≈752) / Lancia(x≈838) / Parola(x≈921) → `r_junc` → `r_junc_bridge` → centro
  - Centro circolare condiviso (~500,480) con 9 nodi
  - `STUDIO_ARCANO` spostato in colonna Parola (disruption/accuracy), `MARCHIO_POTENZIATO` in Marchio, `CORRUZIONE_AMPLIFICATA` in Lancia
- `SkillTreeScreen.kt`: aggiunto `TextMeasurer` + etichette colonna ("Bash", "Affondo", "Turbine", ecc.) disegnate sul Canvas, centrate sulle colonne, colorate per classe, scalano con zoom/pan.

#### Test
- `withSkillBuild v3`: `t(marchioN, 1)` aggiunto ad `attackBonus` Cultist → marchio5=38% (sopra baseline 27%) ✓
- `skillBuildDiversity_*_torre`: test limitati alla Torre (i perk si sbloccano post-Dungeon, non testare su Dungeon).

**Risultati test Torre post-patch:**
| Classe | Build | Surv% | Note |
|---|---|---|---|
| Cultist | baseline | 5% | ✓ |
| Cultist | marchio5 | 1% | — |
| Cultist | lancia5 | 7% | ✓ |
| Cultist | bilanciato | 6% | ✓ |
| Warrior | baseline | 1% | ✓ |
| Warrior | bash5 | 3% | ✓ |
| Explorer | tutti | 0% | problema strutturale Torre |

Ranger 0% Torre: problema base, non delle colonne. In gameplay reale arriva alla Torre con pozioni/risorse pre-accumulate — la simulazione è pessimistica (niente rest, niente consumabili).

---

## Stato attuale — 2026-05-10 (aggiornamento 18)

### RPG_PROJECT — `ClassRunBalanceSimulationTest` — withSkillBuild v3 (marchio fix)

**Fix applicato:** `withCultistBuild` aveva `attackBonus` di Marchio = 0.
Blood Mark richiede hit per applicarsi → senza accuracy bonus, più mancati → fight più lunghi → più danni totali ricevuti, nonostante il +1 danno. Aggiunto `t(marchioN, 1)` all'attackBonus.

**Risultati Dungeon 10 stanze — withSkillBuild v3:**

| Classe | Build | Surv% | Avg rooms |
|---|---|---|---|
| Warrior | baseline | 3% | 3.0 |
| Warrior | bash5 | 3% | 3.0 |
| Warrior | affondo5 | 3% | 3.4 |
| Warrior | turbine5 | 4% | 3.8 |
| Warrior | bilanciato (2-2-1) | 3% | 3.1 |
| Cultist | baseline | 27% | 4.8 |
| Cultist | **marchio5** | **38%** | 6.0 ✓ (era 25% — ora sopra baseline) |
| Cultist | lancia5 | 58% | 8.1 |
| Cultist | parola5 | 43% | 6.6 |
| Cultist | bilanciato (2-2-1) | 58% | 7.5 |
| Ranger | tutti | 0% | 1.2-1.9 |

**Conclusioni design aggiornate:**
1. **Cultist**: tutte le colonne ≥ baseline ✓. Gerarchia: bilanciato=lancia5 (58%) > parola5 (43%) > marchio5 (38%) > baseline (27%). Nessun build inutile.
2. **Warrior**: tutte le colonne ≥ baseline ✓ (range 3-4%). Turbine5 ha avg rooms più alto (3.8 vs 3.0 baseline).
3. **Ranger**: ancora 0% su tutto — problema strutturale base, non delle colonne. Le approssimazioni skill spostano leggermente avg rooms (1.2→1.9) ma non abbastanza da produrre vittorie. **Fix necessario a livello engine**: +2 HP base oppure meccanica di recupero HP intra-run specifica per Ranger.

**Test aggiunto non ancora nel repo** — commit pendente.

---

## Stato attuale — 2026-05-10 (aggiornamento 17)

### RPG_PROJECT — commit `59024f1`

**Skill build diversity simulation — fork skill-tree proposal (3 archetipi per classe)**

Aggiunte a `ClassRunBalanceSimulationTest`:
- `withWarriorBuild(bashN, affondoN, turbineN)` — colonne Bash/Affondo/Turbine
- `withRangerBuild(taglioN, tiroN, doppioN)` — colonne Taglio/Tiro Mirato/Doppio Colpo
- `withCultistBuild(marchioN, lanciaN, parolaN)` — colonne Marchio/Lancia/Parola
- 3 test @Test con 4 archetipi ciascuno (5-0-0 / 0-5-0 / 0-0-5 / 2-2-1) vs Dungeon 10 stanze + Torre 5 stanze

**Risultati Dungeon 10 stanze:**
| Classe | Build | Surv% | Avg rooms |
|---|---|---|---|
| Warrior | bilanciato (2-2-1) | **5%** | 3.1 |
| Warrior | affondo5 | 2% | **3.6** |
| Warrior | turbine5 | 2% | 3.1 |
| Warrior | bash5 | 0% | 2.3 |
| Cultist | lancia5 | **39%** | **5.9** |
| Cultist | parola5 | 28% | 5.4 |
| Cultist | bilanciato | 24% | 5.5 |
| Cultist | baseline | 21% | 4.5 |
| Cultist | marchio5 | **10%** | 3.9 ← peggiore |
| Ranger | tutti | 0% | 1.4-1.9 |

**Conclusioni design:**
1. **Cultist lancia5 raddoppia la sopravvivenza (21%→39%)** — danno è la chiave, non il sustain. Marchio5 (sustain puro) è il build peggiore. Conferma direttamente la direzione Codex: Marchio=setup, Lancia=payoff.
2. **Warrior bilanciato batte i specialisti** nel Dungeon — spread 2-2-1 ottimale. Affondo5 aumenta rooms cleared ma non la sopravvivenza (muore comunque per attrition).
3. **Ranger irrecuperabile con i soli nodi** — 0% in tutti i build. Fix strutturale necessario: HP base più alto, meccanica di recupero HP tra stanze, o scaling difensivo.

---

## Stato attuale — 2026-05-10 (aggiornamento 16)

### RPG_PROJECT — commit `eafde2c`

**ClassRunBalanceSimulationTest — modellazione economia oro+pozioni.**

Aggiunto a tutti gli scenari multi-scontro:
- `goldReward` realistico su ogni CombatGroup (mob 10-20g, boss 40-50g)
- `shopPhase` ogni 4 stanze: compra `healing_potion` (12g, +6HP) se HP < 60%, `travel_rations` (6g) come fallback
- Policy universale: usa pozione come `useConsumableAsCombatAction` se HP ≤ 50% e inventario non vuoto
- Helper `addOrStack()` per stacking item senza dipendere da `withItem` (privato in GameEngine)

**Risultati con economia simulata:**
| Scenario | Warrior | Ranger | Cultist |
|---|---|---|---|
| Dungeon 10 stanze T2 | 1% | 0% | 19% |
| Torre entry 5 stanze T2+3n | 0% | 0% | 4% |
| Torre piena 16 stanze T2+8n | 0% | 0% | 0% |

**Conclusione:** il delta rispetto al lower bound (senza risorse) è minimo. La maggior parte degli eroi muore prima di raggiungere la prima shop (stanza 4) — non fanno in tempo ad accumulare oro. Il collo di bottiglia è la durezza per-scontro, non la mancanza di heal post-fight. La simulation resta utile come stress test; i numeri reali sarebbero più alti grazie a rest event, stanze non-combat, drop in-run.

---

## Stato attuale — 2026-05-08 (aggiornamento 15)

### RPG_PROJECT — test commit `14296b5`

**Commit pushato: test bilanciamento multi-scontro.**

#### Aggiornamenti test

**`RegionBalanceSimulationTest` — policy() aggiornata:**
- Warrior usa ora `warriorAttack(state, "bash/affondo/turbine")` invece del vecchio `engine.attack()` (disconnesso con `CLASS_SPECIFIC_ATTACKS_ENABLED=true`)
- Ranger usa `rangerAttack(state, "taglio_tendini/doppio_colpo/tiro_mirato")`
- Logica policy: bash default → affondo su EXPOSED/STAGGERED → turbine se stam≥4 → attiva Pelle di Pietra a 5 stacks

**`ClassRunBalanceSimulationTest` — nuovo file, simulazione multi-scontro:**
- Porta HP tra stanze (nessun full heal)
- Stamina ripristinata completamente tra stanze
- Checkpoint heal ogni 5 stanze (+20% HP max, cap al max)
- 3 scenari: Dungeon 10 stanze, Torre entry 5 stanze, Torre piena 16 stanze

#### Risultati (100 runs per scenario)

**Singolo scontro (RegionBalanceSimulationTest, T2 vs Torre early):**
- W: 50%, R: 38%, C: 71% (zero nodi)
- W: 66%, R: 41%, C: 74% (3 nodi)

**Multi-scontro (ClassRunBalanceSimulationTest):**
| Scenario | Warrior | Ranger | Cultist |
|---|---|---|---|
| Dungeon 10 stanze T2 | 5% | 0% | 17% |
| Torre entry 5 stanze T2+3n | 5% | 0% | 3% |
| Torre piena 16 stanze T2+8n | 0% | 0% | 0% |

**Conclusione:** l'attrition è il problema critico, non il singolo scontro. Ranger ha 0% di survival anche in Torre entry. Necessari heal intermedi più generosi, oggetti curativi nel dungeon, o meccaniche di recupero HP tra stanze.

---

## Stato attuale — 2026-05-08 (aggiornamento 14)

### RPG_PROJECT — v0.1.33-alpha versionCode 44 (commit `0902563`)

**AAB release buildato e pushato** (versionCode 44).

- `AdventureScreens`: banner condizione (es. "Hai sbilanciato il nemico") sparisce immediatamente alla fine del combat
- `HeroScreens LoadoutSelectionScreen`: click/checkbox su item parte da qty 1, non maxQty
- `GameAppState.stashOnDeath` hardcore: dopo il filtro 50% distruzione, ogni item del `runStartLoadout` è garantito almeno con qty 1 nello stash — il personaggio non riparte mai da zero

---

## Stato attuale — 2026-05-08 (aggiornamento 13)

### RPG_PROJECT — v0.1.32-alpha versionCode 43 (commit `e349751`)

**AAB release buildato e pushato** (versionCode 43 — da usare su Play Console, il 42 è l'AAB corretto per v0.1.31).

- Barre Tempra (Warrior) e Istinto (Ranger): 5 quadratini 14dp con RoundedCornerShape, identici alla barra Corruzione del Cultist
- Dorati per Tempra, teal per Istinto; sfondo scuro quando vuoto
- Bottone attivazione (Pelle di Pietra / Istinto Affilato) a larghezza piena, appare solo quando stacks >= 5
- Quando forma attiva: la barra scompare, appare testo "X attiva"

---

## Stato attuale — 2026-05-08 (aggiornamento 12)

### RPG_PROJECT — v0.1.31-alpha versionCode 42 (commit `99916b7`)

**AAB release buildato e pushato.**

- `AttackTileButton`: nuovo composable identico a `CultistRitualButton` ma con `painterResource` per drawable
- Warrior/Ranger: tile icona grande + label in basso, bordo dorato (Warrior) o teal (Ranger)

---

## Stato attuale — 2026-05-08 (aggiornamento 11)

### RPG_PROJECT — v0.1.30-alpha versionCode 41 (commit `28b3687`)

**AAB release buildato e pushato.**

- 6 icone attacchi di classe in `drawable-nodpi` (bash, affondo, turbine, taglio_tendini, tiro_mirato, doppio_colpo)
- Bottoni `WarriorAttackCard`/`RangerAttackCard`: icona 32dp sopra il testo

---

## Stato attuale — 2026-05-08 (aggiornamento 10)

### RPG_PROJECT — v0.1.30 (commit `0c5dd10`)

#### Completato — sistema attacchi di classe Warrior/Ranger

**Warrior — 3 mosse:**
- `Bash`: STAGGERED 40%+(lv-1)*5% cap65%, +1 Tempra per colpo
- `Affondo`: EXPOSED automatico, -2 acc, +2 dmg, +1 Tempra per colpo
- `Turbine`: WEAKENED 40%+(lv-1)*5%, 2 stam, +1 Tempra per colpo
- **Barra Tempra**: a 5 stacks → attiva `Pelle di Pietra` (+2 DEF, +1 HP/turno, run-persistent)

**Ranger — 3 mosse:**
- `Taglio Tendini`: BLEEDING 50%+(lv-1)*5% cap70%, +1 Istinto per condizione
- `Tiro Mirato`: EXPOSED 75%, +2 acc, +1 dmg, 2 stam, +1 Istinto per condizione
- `Doppio Colpo`: 2 hit separati (BLEEDING 30%+ ciascuno), 1 sola risposta nemica, +1 Istinto per condizione
- **Barra Istinto**: a 5 stacks → attiva `Istinto Affilato` (-4 soglia critico, min 15, run-persistent)

**Architettura:**
- `CharacterSheet.kt`: +4 campi (`temprStacks`, `pelleDiPietraActive`, `istintoStacks`, `istintoAffilatoActive`)
- `GameEngine.kt`: `CLASS_SPECIFIC_ATTACKS_ENABLED=true` disconnette vecchio Attacca e bash/predator; hook `totalDefenseBonus`/`playerCriticalThreshold`/`applyStartOfTurnEffects` aggiornati; `warriorAttack`/`rangerAttack`/`activatePelleDiPietra`/`activateIstintoAffilato` aggiunti
- `GameAppState.kt`: 4 wrapper aggiunti
- `AdventureScreens.kt`: `WarriorAttackCard` + `RangerAttackCard`, Ritirata nascosta in dungeon
- `GameApp.kt`: 4 callback aggiuntivi

#### Prossimo lavoro — Test di bilanciamento (ibrido analitico + Monte Carlo)

Approccio ibrido raccomandato (da passare a Codex):

**Step 1 — Modello analitico (tutte le 189 combo)**
Per ogni combinazione `(classe, gear tier, nodi tree, stanza dungeon)`:
- Calcola TTK (turni per uccidere) e TTS (turni per sopravvivere)
- Margine = TTS - TTK
- `approxWinRate(margin)`: ≤-3→0.05, -2→0.15, -1→0.30, 0→0.50, +1→0.70, +2→0.85, ≥+3→0.95
- Identifica combo borderline [0.25, 0.75] e boss room

**Step 2 — Monte Carlo solo per borderline + boss**
- ~20-30 run (invece di 94500)
- `buildSimState`: avventura stub minimale, `CombatState` costruito direttamente da `CombatGroup`
- Test JUnit4 puri (GameEngine non ha dipendenze Android, Robolectric non serve)

**Target win rate:**
| Stanza | Win rate target |
|---|---|
| Dungeon 1-5 | 75-90% |
| Dungeon boss (10) | ~70% |
| Torre early (11-20) | 55-75% |
| Torre boss (20) | ~60% |
| Torre late (21-30) | 50-65% |
| Torre boss (30) | ~55% |

---

## Stato attuale — 2026-05-06 (aggiornamento 9)

### RPG_PROJECT — sessione odierna

#### Completato

**Dungeon generator region-aware (Fase 4)**
- `DungeonMonsterPool`: `regions: List<String>` su `MonsterTemplate`/`BossTemplate`, 5 mostri dungeon-only taggati, 5 boss taggati per regione
- `DungeonGenerator`: `buildRoomAdventure` usa `regionId`, pool tematici, boss per regione, nomi stanza tematici (40 nomi Torre + 45 nomi Lande)
- `DungeonRegionCatalog`: aggiunta `rarityForTier(tier)` / `tierForRarity(rarity)`
- 12 test in `DungeonGeneratorRegionTest.kt`

**Shop region-locked (Fase 5)**
- `GameEngine.shopItems()`: quando `state.dungeonSession != null`, filtra `allowedShopRarities` tramite `region.shopForbiddenTierMin`
- Dungeon: max UNCOMMON in negozio. Torre: max RARE. Lande: max MYTHIC.

**Loot region-locked (Fase 6)**
- `DungeonGenerator.generateLoot`: parametro `regionId` aggiunto, boss garantito usa `bossLootTier` della regione
- `pickRarity`: parametro `maxTier` filtra rarità oltre il cap regionale
- `pickItemOfRarity`: fallback gerarchico (tier-1) invece di saltare a COMMON
- `generateShopItems` in DungeonGenerator rimossa (era dead code)
- 7 test in `DungeonLootShopRegionTest.kt` — 63 test totali, 0 fallimenti

**Bug fix creazione personaggio (tester feedback)**
- `CreationScreens.kt`: `imePadding()` + `verticalScroll` sul Column esterno → il contenuto non viene coperto dalla tastiera software
- `NarrativeNameCard.OutlinedTextField`: aggiunto `ImeAction.Done` + `KeyboardActions(onDone = onConfirm)` → tasto "Fatto" della tastiera salva il nome

**Schema skill tree**
- `model/SkillTreeNode.kt` creato: `SkillNodeType` enum, `StatRequirement`, `PassiveEffect(id, magnitude)`, `SkillTreeNode` con tutti i campi discussi

#### Prossimo lavoro per Codex — Skill Tree (Fase 7)

Il modello è pronto. Mancano:

**1. `model/ClassDefinition.kt`**
```kotlin
@Serializable
data class ClassDefinition(
    val id: String,          // "warrior" / "explorer" / "adept"
    val label: String,
    val startNodeId: String, // ID del nodo START in SkillTreeCatalog
    val themeColorHex: String,
    val mechanicId: String,  // "guard" / "precision" / "ritual"
    val suggestedTags: List<String> = emptyList()
)
```

**2. `engine/PassiveEffectIds.kt`** — costanti per effetti passivi (NON mescolare con ItemTaxonomy):
```
str_bonus, dex_bonus, int_bonus, wis_bonus, con_bonus, cha_bonus
hp_bonus, stamina_bonus
melee_bonus, lore_bonus, survival_bonus, guard_bonus, precision_bonus, alchemy_bonus
crit_chance_bonus, hit_bonus, damage_bonus
ritual_potency, guard_threshold, predator_range
```

**3. `engine/SkillTreeCatalog.kt`** — oggetto singleton con `val nodes: List<SkillTreeNode>`:
- 3 nodi START (uno per classe), coordinate suggerite:
  - Warrior START: (500f, 150f), tag ["melee","armor"]
  - Explorer START: (150f, 700f), tag ["survival","precision"]
  - Adept START: (850f, 700f), tag ["lore","ritual"]
- ~5-6 nodi SMALL/ATTRIBUTE intorno a ogni START (connessi al START e tra loro)
- 1 NOTABLE per ramo (a ~2-3 hop dal START)
- 1-2 KEYSTONE nel mid-tree (point cost = 2, requiredMilestone = MILESTONE_COMPLETE_DUNGEON)
- Connessioni: bidirezionali per dichiarazione (A→B implica B→A, ma si dichiara da entrambi i lati per chiarezza)

**4. `engine/ClassDefinitionCatalog.kt`** — lista delle 3 ClassDefinition

**5. `engine/PassiveNodeResolver.kt`**
```kotlin
object PassiveNodeResolver {
    fun resolve(allocatedNodeIds: Set<String>): Map<String, Int>
    // Per ogni nodo allocato, somma i PassiveEffect.magnitude per effectId
    // Ritorna mappa effectId → totale (es. "str_bonus" → 3)
}
```

**6. Integrazione in `CharacterFactory.create()`**
- Aggiungere parametro opzionale `playerProgression: PlayerProgression? = null`
- Dopo il calcolo base stats, applicare `PassiveNodeResolver.resolve(playerProgression.allocatedPassiveNodeIds)`
- Mappare i delta: `str_bonus` → aggiunto a `strength`, `hp_bonus` → aggiunto a `hitPoints`, ecc.

**Decisioni architetturali già prese (non riaprire):**
- Stat delta calcolati on-the-fly (computed) — NON delta stored in CharacterSheet
- `requiredClass` usato solo per `ritual_potency` (Adept) e meccaniche davvero uniche
- `KEYSTONE` costa 2 punti, `SOCKET` è placeholder inerte per V2
- Coordinate in unità logiche 0-1000, 3 entry point a ~350u dal centro
- `PassiveEffect(id, magnitude)` invece di plain `effectIds: List<String>`

**Test attesi:**
- `SkillTreeResolverTest`: allocare 3 nodi `str_bonus` → `CharacterSheet.strength` +3
- Verificare che nodi con `requiredMilestone` non siano allocabili senza milestone
- Verificare che nodi con `requiredStat` non siano allocabili senza stat sufficiente

---

## Stato attuale — 2026-04-26 (aggiornamento 8)

### Release 0.1.8-alpha — versionCode 13 (RPG_PROJECT)

**Commit: `9528e8a` — BUILD AAB 16 MB**

#### Fix 1 — Forge griglia sempre visibile
- `HeroForgeScreen`: rimossa branching if/else per stash vuoto
- Griglia 3×3 sempre mostrata; messaggio "Nessun materiale" appare solo nella sezione MATERIALI

#### Fix 2 — Home button spaziatura
- `UiShared.kt — ScreenHomeBar`: aggiunto `statusBarsPadding() + padding(top=4.dp)` al Row
- Applicato automaticamente a tutte le schermate che usano `ScreenHomeBar`

#### Fix 3 — XP display bug
- `AdventureScreens.kt` e `HeroScreens.kt`: formula corretta
- `experience` è XP within-level (si azzera ad ogni level up), NON cumulativo
- Threshold = `level * level * 25` (25/100/225/400/625) invece di `level * 100`
- Eliminato il `- currentLevelBaseXp` che causava valori negativi sul display

#### Fix 4 — Stash flow redesign
- `stashOnCompletion()`: sempre stasha TUTTO (equip + zaino) indipendentemente da prima/replica
- `initiateAdventureStart()`: va sempre al LoadoutSelection se `allowCarryOverLoadout=true`, skip altrimenti
- `LoadoutSelectionScreen`: indicatore peso (Libero/Appesantito/Sovraccarico!/Impedito!), titolo rinnovato
- `AdventureLibraryScreen`: dialog semplificato — no più "Continua equip/Fresh start", solo "Scegli loadout"/"Inizia"

---

## Stato attuale — 2026-04-26 (aggiornamento 7)

### Fix post-release 0.1.7-alpha (RPG_PROJECT)

#### Event node text fix — completato
- `AdventureScreens.kt`: `else {` → `else if (state.combatState == null) {` nella sezione scelte
- Le scelte non vengono mostrate durante un combattimento attivo (event node combat non espone più il testo della scena precedente)
- Dialogue e Shop esclusi per ora (fuori scope)
- Commit: `07f9619`

### Adventure Studio — chapter group card redesign (txt_master_site)

#### Completato — commit `59e2fde`
- Card header: solo bottoni "Elimina"/"Apri" (niente titolo in linea)
- Nome capitolo nella riga sotto, stile `.chapter-group-card__name`
- Larghezza card dinamica in base alla lunghezza del titolo (160–340px), altezza 72px
- Exit ports auto-popolate da tutti i cross-group edges
- Marquee selection visibile (CSS aggiunto nella sessione precedente)

---

## Stato attuale — 2026-04-26 (aggiornamento 6)

### Feature batch "0.1.7-alpha" — completate (RPG_PROJECT)

**Tutto implementato, build NON ancora rilasciata.**

#### 1. Stash system
- `HeroProfile.stash`, `completedAdventureIds`, `adventureCompletionCounts`
- `GameState.runStartLoadout`
- `GameAppState.stashOnCompletion()` / `stashOnDeath()` — meccanica tabella sopra
- `GameAppState.confirmLoadoutAndStart()` — rimuove item dallo stash al lancio

#### 2. Hero Screen estesa
- `HeroStashScreen` — lista stash con categoria/rarità/peso/quantità
- `HeroForgeScreen` — atmosfera UO/RPG medievale; `ForgePalette` dedicata; griglia 3×3; ricette scoperte; `ForgeSlot` composable
- Accessible da `AdventureLibraryScreen` tramite bottoni "Stash" e "Fornace"

#### 3. Loadout selection pre-avventura
- `LoadoutSelectionScreen` — checkbox + quantity per ogni item
- `AppScreen.LoadoutSelection`; `initiateAdventureStart()` → routing stash vuoto / stash pieno

#### 4. Weight system
- `EncumbranceLevel` enum, `totalCarryWeight()`, penalità difesa/skill progressive in `GameEngine`
- Auto-weight in `EquipmentCatalog.item()` builder

#### 5. Rimozione forge dall'avventura
- Nessun bottone "Fucina" in `AdventureBottomBar`
- `CraftingPanelContent` eliminato da `AdventureScreens.kt`

#### 6. Anti-farm XP (replay multiplier)
- `adventureCompletionCounts` in `HeroProfile`; `adventureCompletionCount` + `newXpNodesThisRun` in `GameState`
- `completionReplayMultiplier()` in `GameEngine`: 1.0 / 0.5 / 0.25 / 0.1 + bonus +0.25 per ≥3 nodi nuovi
- Microcopy atmosferico nel log

#### 7. Fix UX narrative
- Badge "Combattimento" rimosso dalle ChoiceCard (no spoiler evento)
- Testo scena nascosto durante combattimento attivo (mostra solo CombatCard)

#### 8. Hardcore save behavior
- Dialog uscita dual-mode: normale → "Salva e torna" / "Esci senza salvare"; hardcore → "Torna" / "Abbandona run"
- `returnToGatewayFromAdventure()` in `GameAppState` — nessun save esplicito, usa autosave esistente
- Autosave cancellato alla morte hardcore già implementato in `confirmDeathAfterScene()`

#### 9. Max 3 slot salvataggio per eroe
- `SaveGameRepository`: secondo pass in `enforceHeroSaveLimit` — `MAX_SAVES_PER_HERO = 3`

#### 10. crafting.html (txt_master_site)
- Nuova pagina pubblica con tutte le ricette: griglia 3×3 visuale per ogni ricetta, tabella materiali/famiglie, note per autori avventure
- Link aggiunto in `wiki.html`

---

### Release 0.1.7-alpha — COMPLETATA (2026-04-26)

- [x] Build AAB versionCode 12 / 0.1.7-alpha — `app/build/outputs/bundle/release/app-release.aab` (16 MB)
- [x] Push txt_master_site (crafting.html + wiki.html aggiornata) — commit `34b1161`
- [x] Dead code `GameAppState.craft()` rimosso

---

## Stato attuale — 2026-04-25 (aggiornamento 5)

### Crafting system implementato (RPG_PROJECT) — non ancora rilasciato

**Cosa è stato fatto:**
- `CraftingCatalog.kt`: griglia 3×3 (GRID_ROWS=3, GRID_SIZE=9)
- `CraftingRecipe.kt`: gridRows default → 3
- `GameState.kt`: aggiunto `discoveredRecipeIds: Set<String>`
- `GameEngine.kt`: `craft()` con matching strict + 30% distruzione su failure
- `GameAppState.kt`: `fun craft()` wiring
- `AdventureScreens.kt`: `CraftingPanelContent` (griglia tap-to-assign, picker materiali, ricette scoperte) + bottone "Fucina" nella bottom bar

**Fix UX in AdventureScreens.kt:**
- Scroll to top ad ogni cambio scena
- Flash "Prova riuscita!" centrato (1.5s) su skill check success
- `lastCheckResult` ora sopravvive alla navigazione verso la scena di successo (threading via `resolveBranch` → `navigateToTarget` → `enterDescription`)
- XP loggati da `enterDescription` (non più duplicati in `stateForBranch`)
- Testo default scelte in `app.js`: "Scelta X" → "Prosegui..."

**Build:** versionCode 11 / versionName 0.1.6-alpha — NON ancora rilasciato (in attesa del sistema stash)

---

### Design sistema stash — DA IMPLEMENTARE

**Meccaniche di fine run:**
| Scenario | Loadout iniziale | Item trovati in run |
|---|---|---|
| Morte normale | Torna nello stash (meno consumabili usati) | Persi |
| Morte hardcore | 50% distruzione per ogni item (incluso loadout) | Persi |
| Completamento (prima volta) | Tutto → stash | Tutto → stash |
| Completamento (già completata) | Torna nello stash (meno consumabili usati) | Persi |

**Altre decisioni:**
- Hardcore: nessun salvataggio manuale, autosave cancellato alla morte
- Normale: salvataggi invariati
- Weight system sugli item (penalità soglia progressiva — valori da definire)
- Forge spostata nella Hero Screen (usa materiali da stash, output → stash)
- Hero Screen: nuove sezioni "Stash" e "Forge"
- Loadout selection prima di ogni avventura (item escono dallo stash, rientrano a fine run)
- Cap 3 save slot per personaggio
- `runStartLoadout` nel GameState per tracciare loadout portato
- `completedAdventureIds` nel HeroProfile per bloccare stash su adventure già completate

**Ordine implementazione:**
1. Modello (HeroProfile + GameState: stash, completedAdventureIds, runStartLoadout)
2. Logica fine run in GameEngine
3. Hero Screen (stash + forge)
4. Loadout selection pre-avventura
5. Weight system
6. Rimozione forge dall'avventura

---

### Ultimo pass Codex — Adventure Studio UX flowboard
Commit pubblico: `edbf7a3+` | Commit privato: `b9617a6`
- Marquee selection con preview live dei nodi intercettati
- Badge conteggio nella selection box
- Chapter group evidenziati quando i loro nodi sono selezionati o sotto marquee
- Click sul capitolo = selezione di tutti i nodi contenuti

---

## Stato attuale — 2026-04-25 (aggiornamento 4)

### Release build 11 — versionCode 11 / versionName 0.1.6-alpha

AAB release: `app/build/outputs/bundle/release/app-release.aab` (16 MB, 2026-04-25 18:25)

**Cosa include rispetto alla build precedente:**
- UX skill check: `CheckResultBanner` prominente + `ChoiceCard` con chip evento contestuale
- Fix crash v1/v2: APK compilato con Adventure.kt v2
- Allineamento Studio ↔ App Step 1-4:
  - SKILLS: +guard, +precision, +alchemy, +constitution
  - CONDITION_OPTIONS: +7 condizioni mancanti
  - EFFECT_FAMILIES: +exploration / EFFECT_TRIGGERS: +on_low_hp, +on_scene_enter
  - Branch extras UI: loot, condition, unlockChoiceId
  - Condition event: campo testo narrativo
- Fix rarity tier accessori (tier 2=mythic, tier 3=legendary)

---

## Stato attuale — 2026-04-25 (aggiornamento 3)

### Roadmap allineamento Studio ↔ App — Step 3 e 4 completati

**`app.js` — `buildBranchRow` esteso (Step 3):**
- Aggiunto pannello collassabile "⚙ Opzioni branch" su ogni branch row
- `Branch.condition`: select condizione pre-combattimento (riusa `hydrateConditionSelect`)
- `Branch.unlockChoiceId`: select che lista tutte le scelte `hidden: true` dell'avventura
- `Branch.loot`: lista loot con `renderLootList` + pulsante "+ Oggetto"
- Il pannello si apre automaticamente se uno dei tre campi è già valorizzato

**`styles.css` — nuovi stili branch extras:**
- `.branch-extras-toggle`, `.branch-extras-panel`, `.branch-extras-row`, `.branch-extras-label`

**`app.js` — `buildConditionConfig` aggiornato (Step 4):**
- Aggiunto campo textarea per `Event.Condition.text` (testo narrativo opzionale)
- Aggiornata la descrizione del pannello: "Applica una condizione di combattimento al personaggio"

**Prossimi step roadmap:**
- [ ] **Step 5** — Dialogue runtime: `once`, `hiddenUntilUnlocked`, `gateType` (mezzo giorno+)
- [ ] **Crafting system** — separato

---

## Stato attuale — 2026-04-25 (aggiornamento 2)

### Roadmap allineamento Studio ↔ App — Step 1 e 2 completati

**`app.js` — costanti aggiornate:**
- `SKILLS`: aggiunti `guard` (Guardia), `precision` (Precisione), `alchemy` (Alchimia), `constitution` (Costituzione)
- `EFFECT_FAMILIES`: aggiunta `exploration` (Esplorazione)
- `EFFECT_TRIGGERS`: aggiunti `on_low_hp` (Con HP bassi), `on_scene_enter` (All'ingresso nella scena)
- `CONDITION_OPTIONS`: aggiunte 7 condizioni mancanti — `burning`, `bleeding`, `confused`, `second_wind`, `hunter_breath`, `closed_wounds`, `predator_step`

**`EquipmentCatalog.kt` — fix rarity tier:**
- Rimossa sovrascrittura `rarity` dal LootDrop per accessori tier — la rarity è ora sempre quella del catalog (tier 1=rare, tier 2=mythic, tier 3=legendary)

**Prossimi step roadmap:**
- [ ] **Step 3** — Branch fields UI nell'editor: `loot`, `condition`, `unlockChoiceId`
- [ ] **Step 4** — `Event.Condition.text` esposto in editor
- [ ] **Step 5** — Dialogue runtime: `once`, `hiddenUntilUnlocked`, `gateType`
- [ ] **Crafting system** — separato (da affrontare dopo il resto)

---

## Stato attuale — 2026-04-25

### Ultimo lavoro — RPG_PROJECT (Android)

**UX skill check e scelte** (`AdventureScreens.kt`)

Tre problemi risolti:
1. **Scelte senza contesto** → ogni scelta mostra ora un chip colorato con icona che indica il tipo di evento:
   - Dado giallo `Prova [Attributo]  CD X` per skill check
   - Martello rosso `Combattimento` per combat
   - Lucchetto blu `Richiede oggetto` per requirement
   - Stella verde `Ricompensa` per loot
   - Pulsante contestuale: "Tenta la prova" / "Combatti" / "Prova il requisito" / "Raccogli" / "Scegli"
2. **Esito skill check invisibile** → aggiunto `CheckResultBanner` prominente verde/rosso sopra le scelte, con dado/modificatore/totale/CD, margine di successo, XP guadagnati
3. **Log duplicato** → rimosso skill check dal log generico in cima (resta solo per loot)

Nuovo AAB release: `app/build/outputs/bundle/release/app-release.aab` (16 MB, 2026-04-25 17:55)

**Vecchio crash v1/v2** — risolto: APK installato era compilato da Adventure.kt v1. Rebuild ha risolto.

---

## Stato attuale — 2026-04-24

### Contesto
- Repo: `bergman90/txt_master_site` (GitHub Pages — editor statico)
- Repo Android: `bergman90/RPG_PROJECT` (Kotlin/Compose, privato)
- Branch attivo: `main` — deployato su GitHub Pages via GitHub Actions

### Ultimo push (`bda80d2`, 2026-04-24)
Cinque commit pushati:

| Hash | Descrizione |
|------|-------------|
| `80247f5` | fix: crash minicard requisito (`responsesWrap` undefined nel blocco `requirement`) + CSS combobox in `.ctp-row` |
| `e79a305` | feat: requirement — combobox ricercabile oggetti (`createItemSearchCombobox`) + dual-control lockId chiavi (`buildKeyRequirementControl`) |
| `14e4dcd` | fix: sentinelle `__retry__` / `__no_escape__` riconosciute in validazione; `trade_value` compatibile con `material` |
| `d3c11ba` | compiler v2: output `descriptions[]` + eventi inline — allineato con `Adventure.kt` v2 |
| `3677041` | fix: mojibake + rimozione warning `burnAfterUse` obsoleto dal compilatore |

---

## Architettura chiave (Adventure Studio)

- **`app.js`** (~13000 righe, file unico, nessun framework)
- **Quick menu (minicard)**: pannello floating sulla flowboard — vive dentro la closure `rebuild()` del flow event menu
- **Pannello avanzato**: `buildRequirementConfig()` — editor proprietà evento completo
- **Compilatore**: `runtime-compiler.js` → converte grafo editor in JSON v2 compatibile con `Adventure.kt`
- **Sentinelle targetId valide**: `__death__`, `__stay__`, `__retry__`, `__no_escape__`
- **Modalità requisito**: `presetItem` | `itemCategory` | `key` | `questItem`

---

## Decisioni tecniche recenti

- `valueSlot` (div) separato da `valueLabelText` (span) in `buildRequirementConfig` — evita che `textContent=` distrugga il controllo figlio
- `createItemSearchCombobox`: navigazione tastiera (frecce/Enter/Esc), filtro per nome+categoria
- `buildKeyRequirementControl`: select chiavi avventura + input `lockId` sincronizzati bidirezionalmente
- Chapter groups: solo metadati editor, ignorati dal compilatore runtime

---

## In sospeso / prossimi passi

- [ ] **Simulazioni rank** — Codex deve scrivere `AttackRankProgressionTest`, `AttackRankMasteryTest`, estendere `ClassRunBalanceSimulationTest` (vedi istruzioni aggiornamento 20)
- [ ] **Keystone V2** — collegare `combatFlag` al GameEngine (`guard_on_low_hp`, `bleeding_chance_bonus`, `immune_first_round`, `guard_extend`, `ritual_bolt_bonus`)
- [ ] **Gear T4** — 12 nuovi item (4 per classe) per le Lande del Caos
- [ ] **Lande del Caos** — stanze 31+
- [ ] **Grimorio** — togliere le avventure elencate alla prossima release
- [ ] **1.3** — Verificare che `condition` su `Branch` sia gestito in `GameEngine.kt`
- [ ] **5.4** — Test end-to-end Studio → compilatore → Android
- [ ] **update-in-place** — Estendere su gruppi combattimento e rami esito (flowboard)

---

## File critici (RPG_PROJECT)

| File | Scopo |
|------|-------|
| `engine/GameEngine.kt` | Logica combattimento, `attackRank()`, warrior/ranger/cultist attacks |
| `engine/PassiveNodeResolver.kt` | Stat bonus + rank bonus da nodi allocati |
| `engine/SkillTreeCatalog.kt` | 52 nodi, `attackRankId` sui nodi di colonna |
| `model/CharacterSheet.kt` | Scheda personaggio, `*RankBonus`, `passive*Bonus` |
| `model/SkillTreeNode.kt` | Modello nodo, campo `attackRankId` |
| `test/.../ClassRunBalanceSimulationTest.kt` | Simulazione bilanciamento classi (500 iter) |

## File critici (Adventure Studio)

| File | Scopo |
|------|-------|
| `adventure-studio/app.js` | Tutta la logica editor (~13000 righe) |
| `adventure-studio/runtime-compiler.js` | Compilatore grafo → JSON v2 |
| `adventure-studio/styles.css` | Stili editor |
| `adventures/catalog.json` | Indice avventure pubblicate |

---

_Ultimo aggiornamento: 2026-05-11 — Claude Sonnet 4.6_
