# txt_master_site — Portale .txt-Master

## Sviluppo locale
```bash
# Nessun build step. Apri direttamente nel browser:
# adventure-studio/index.html  → Adventure Studio
# index.html                   → homepage portale
# grimorio.html                → regole/lore
```
Sito statico su GitHub Pages. Zero dipendenze npm, zero bundler.

## Struttura
```
adventure-studio/
  index.html    → entry point editor
  app.js        → tutta la logica (~12700 righe, file unico)
  runtime-compiler.js → compilatore graph v2 → runtime v2 JSON
  styles.css    → stili editor
adventures/
  catalog.json                   → indice avventure pubblicate
  la_campana_sepolta.json        → avventura completa
  tutorial_del_focolare.json     → avventura tutorial
index.html          → homepage portale
grimorio.html       → regole/lore
service-worker.js   → PWA offline
```

## Adventure Studio — app.js

### Costanti e vocabolario (inizio file)
- `SKILLS` — attributi/skill usabili in skill check
- `ITEM_CATEGORIES` — categorie oggetti
- `ITEM_RARITIES` — rarità oggetti
- `EFFECT_FAMILIES` — famiglie effetto
- `EFFECT_TRIGGERS` — trigger effetto
- `EFFECT_PRESETS` — preset effetti con validazione categorie compatibili

### Funzionalità editor
- Flow board con nodi drag&drop, linking frecce, auto-scroll
- Due tipi di nodi: **Description** (testo + scelte) e **Event** (combattimento, skill check, requisito, loot, shop, dialogo, transizione, condizione)
- Chapter groups: contenitori editoriali per raggruppare nodi sulla board — collapse/expand, drag, label. **Solo metadati di authoring**: non vengono compilati nel runtime JSON.
- Pannello scena: testo, scelte, skill check, combattimento, loot, shop
- Hotkeys: `N` nuovo nodo, `Canc` elimina, `Ctrl+C/V` copia/incolla, `Ctrl+S` salva JSON, `Esc` chiudi pannello
- Export JSON compatibile col runtime Android v2 (Adventure.kt con descriptions[])
- Validazione combinazioni loot/effetti

### Formato JSON esportato (v2)
Output del compilatore (`runtime-compiler.js`) → compatibile con `Adventure.kt` v2:
- `id`, `title`, `description`, `version: 2`, `startingDescriptionId`
- `adaptivePowerMultiplier` (default 0.12)
- `allowCarryOverLoadout`, `allowFreshStart`
- `starterKitItems[]` → `LootDrop`
- `descriptions[]` → `Description` (id, title, text, image, isEnding, choices[])
- `choices[]` → `Choice` (id, text, hidden, burnAfterUse, targetId | event)
- `event` → `Event` sealed (type discriminator: combat/skillcheck/requirement/loot/transition/shop/dialogue/condition)
- `Branch` → (text, loot, condition, unlockChoiceId, burnAfterUse, targetId | event)
- Campi `_editor` sono metadati interni dell'editor: **non vengono parsati dal runtime Android**
- Chapter groups (`chapterGroups` nel JSON del grafo editor): **ignorati silenziosamente** dal compilatore runtime

### Vocabolario effetti — valori validi
Categorie: `weapon armor shield ring cloak helm boots consumable key quest treasure utility relic`
Rarità: `common uncommon rare mythic unique epic legendary`
Famiglie: `combat_offense combat_defense combat_tempo combat_control survival_recovery exploration skill_check economy_loot narrative_key`
Trigger: `passive active_combat active_exploration consumable on_hit on_crit on_defend on_recover on_low_hp on_choice on_scene_enter`
Effect IDs: `restore_hp restore_all direct_damage defense_surge bonus_damage fatigue_relief recover_boost crit_guard ember_retaliation escape guaranteed_crit apply_staggered cleanse_exposed focus_surge guarded_surge key_access trade_value check_bonus`

## Convenzioni JS
- Nessun framework, DOM manipulation diretta
- Stato editor in variabili globali/modulo
- Nessun processo di build: modifica app.js e ricarica il browser
- Per test: aprire adventure-studio/index.html localmente e verificare manualmente

## Deployment
```bash
git add <files>
git commit -m "messaggio"
git push  # GitHub Actions pubblica automaticamente su GitHub Pages
```
