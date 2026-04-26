# claude_workload — .txt-Master Adventure Studio

> File di handoff condiviso tra Claude e Codex.
> Aggiornare ad ogni sessione/commit con stato corrente, decisioni prese e prossimi passi.

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

### Prossimi passi pre-release 0.1.7-alpha

- [ ] Build AAB versionCode 12 / 0.1.7-alpha
- [ ] Push txt_master_site (crafting.html + wiki.html aggiornata)
- [ ] Rimuovere dead code: `GameAppState.craft()` a riga ~415 (non più chiamata)

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
