# claude_workload — .txt-Master Adventure Studio

> File di handoff condiviso tra Claude e Codex.
> Aggiornare ad ogni sessione/commit con stato corrente, decisioni prese e prossimi passi.

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
