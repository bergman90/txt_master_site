# Diario di sviluppo — txt_master_site

## 2026-04-24

### Push: 5 commit → origin/main (`7e25e78..80247f5`)

**`80247f5` fix: crash minicard requisito (responsesWrap undefined) + layout combobox in ctp-row**
- Rimossa riga `responsesWrap.className = "flow-dialogue-quick"` nel blocco `requirement` della quick menu (era un residuo del blocco `dialogue`, causava TypeError che impediva l'apertura della minicard)
- Aggiunto CSS `.ctp-row .searchable-combobox` e `.ctp-row .key-req-control` per layout corretto nella quick menu

**`e79a305` feat: requirement — combobox ricercabile per oggetti, dual-control lockId per chiavi**
- `createItemSearchCombobox(currentValue, onChange)`: combobox con input testo filtrante, dropdown con opzioni nome+categoria, navigazione tastiera (frecce, Enter, Esc)
- `buildKeyRequirementControl(currentLockId, onChange)`: select con le chiavi dell'avventura + campo testo `lockId` sincronizzati bidirezionalmente
- Quick menu requisiti: usa i due nuovi controlli al posto del select generico
- `buildRequirementConfig`: refactor — `valueSlot` (div) separato da `valueLabelText` (span) per evitare che `textContent=` distrugga il controllo figlio

**`14e4dcd` fix: validazione requisito itemCategory, sentinelle __retry__/__no_escape__, trade_value+material**
- `isValidTargetId`: aggiunto `__retry__` e `__no_escape__` alle sentinelle riconosciute
- `EFFECT_PRESETS.trade_value`: aggiunta categoria `material` alle categorie compatibili

**`d3c11ba` compiler v2: output descriptions/inline events, allinea con Adventure.kt v2**
- `runtime-compiler.js`: compilatore produce struttura v2 con `descriptions[]` e eventi inline — compatibile con `Adventure.kt`

**`3677041` fix: bonifica mojibake + compilatore burnAfterUse/unlockChoiceId**
- Rimozione warning `burnAfterUse` obsoleto dal compilatore
- Fix encoding caratteri italiani

**`7e25e78` Sincronizza compilatore runtime dello Studio**
- Allineamento iniziale runtime-compiler.js

---
