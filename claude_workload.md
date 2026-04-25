# claude_workload — .txt-Master Adventure Studio

> File di handoff condiviso tra Claude e Codex.
> Aggiornare ad ogni sessione/commit con stato corrente, decisioni prese e prossimi passi.

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

- [ ] **1.3** — Verificare che `condition` su `Branch` sia gestito in `GameEngine.kt`
- [ ] **5.3** — Verificare comportamento shop in `GameEngine.kt`
- [ ] **5.4** — Test end-to-end Studio → compilatore → Android
- [ ] **update-in-place** — Estendere su gruppi combattimento e rami esito (flowboard)
- [ ] **Pulizia editor** — Performance pannelli su avventure grandi

---

## File critici

| File | Scopo |
|------|-------|
| `adventure-studio/app.js` | Tutta la logica editor (~13000 righe) |
| `adventure-studio/runtime-compiler.js` | Compilatore grafo → JSON v2 |
| `adventure-studio/styles.css` | Stili editor |
| `adventures/catalog.json` | Indice avventure pubblicate |
| `CLAUDE.md` | Istruzioni progetto per Claude |

---

_Ultimo aggiornamento: 2026-04-24 — Claude Sonnet 4.6_
