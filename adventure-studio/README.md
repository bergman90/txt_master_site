# Adventure Studio

Editor locale iniziale per creare avventure compatibili con l'app RPG Android.

## Obiettivo

Permettere a un autore di:

- definire metadata avventura
- creare scene
- creare incontri
- collegare scene tramite scelte
- esportare il risultato in JSON
- importare e modificare avventure esistenti

## Stato attuale

Questa prima versione e una web app statica locale:

- nessuna dipendenza esterna
- nessun build step
- modificabile facilmente
- validazione export integrata

## Contratto dati

Adventure Studio puo esportare sia:
- campi runtime reali, consumati dall'app Android
- metadata di authoring confinati in `_editor`, tollerati dal runtime ma non usati direttamente nel gameplay

Riferimento principale:
- `../docs/adventure-data-contract.md`

Nota importante:
- una scena di combattimento valida deve esportare `encounterId`, `victorySceneId` e `defeatSceneId`
- `retreatSceneId` e facoltativo ma consigliato: se manca, il runtime usa `defeatSceneId` come fallback per la ritirata
- l'editor ora blocca l'export se mancano riferimenti runtime necessari e disabilita il bottone `Esporta JSON` finche restano errori bloccanti

## Avvio

Apri `index.html` nel browser.

Per caricare un'avventura esistente hai due strade:
- `Avventure preconfezionate -> Apri esempio`
- `Importa JSON` e seleziona un file dalla cartella `adventure-studio/examples`

## Roadmap consigliata

1. validazione schema
2. preview flowchart scene
3. editor visuale per choice links
4. editor loot/negozio
5. pubblicazione desktop con Tauri o Electron
