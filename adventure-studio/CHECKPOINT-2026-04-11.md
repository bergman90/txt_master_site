# Checkpoint Adventure Studio - 2026-04-11

## Cosa e stato fatto

Questo checkpoint riassume le ultime rifiniture portate su Adventure Studio e sincronizzate nel sito pubblico.

### Flow board

- Mappa del flusso contenuta dentro il pannello con scrollbar interne.
- Spawn dei nuovi eventi ordinato accanto all'ultimo nodo creato.
- Drag dei nodi piu stabile e leggero.
- Auto-scroll ai bordi della mappa durante il trascinamento.
- Linking dal pallino laterale alleggerito.
- Hotkeys base da editor disponibili:
  - `Canc`
  - `Ctrl/Cmd+C`
  - `Ctrl/Cmd+V`
  - `Ctrl/Cmd+S`
  - `N`
  - `Esc`

### Editor scena

- Alcuni aggiornamenti dei pannelli sono ora piu locali e meno pesanti.
- Il loot evento non richiede piu sempre un rerender globale.
- Il bottone `Rimuovi loot` del loot evento e stato corretto.

### Mostri e loot

- Il loot si modifica direttamente anche dalla card del mostro nella scena.
- E stato aggiunto il bottone `Modifica loot` accanto al riepilogo del mostro.

### Effetti loot

- Gli effetti mostrano una spiegazione testuale.
- Gli effetti vengono filtrati in base alla categoria del loot.
- Le combinazioni non compatibili vengono segnalate in validazione.

## In cosa stiamo lavorando

Stiamo continuando un pass di rifinitura su:

1. performance dei pannelli scena
2. riduzione dei rerender completi
3. coerenza tra editor, export JSON e runtime app
4. semantica del sistema loot / effetti

## Prossimi passi probabili

- estendere ancora gli update in place su esiti e gruppi combattimento
- verificare lato runtime Android gli effetti loot realmente supportati
- continuare la pulizia delle interazioni dell'editor su avventure grandi

