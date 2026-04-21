# Claude Worklog

Diario operativo condiviso per riprendere il lavoro su sito pubblico e Adventure Studio sincronizzato.
Formato consigliato:
- data
- area toccata
- cosa è stato cambiato
- problemi aperti
- prossimo passo naturale

## 2026-04-21

### Adventure Studio quick menu combat
- Nella versione di lavoro privata è stato rifinito il quick menu `combattimento` della flow board:
  - quantità mostri con stepper `- / +` più evidente
  - `Loot mostro` senza più `Aggiungi` rapido
  - nuovo bottone `Modifica` per entrare nelle opzioni avanzate del nodo
- Quando questo pass viene sincronizzato sul pubblico, il quick menu del combattimento sarà più leggibile e meno ambiguo.
- Sempre nella repo privata, il testo statico del quick menu evento è stato sostituito con un campo `Testo iniziale della scena`, così la board diventa ancora più editabile senza scendere subito nelle avanzate.
- Sempre nella repo privata, anche i nodi scena ora hanno un quick menu diretto con titolo, testo iniziale e bottone `+ Scelta`.

### Adventure Studio sincronizzato sul sito
- La versione sincronizzata di Adventure Studio in questa repo sta ricevendo il nuovo pass sul loot ordinato e sulla flow board.
- Direzione del lavoro in corso:
  - accessori scelti come `set + slot + stelle`
  - picker loot con `tier + famiglia + ricerca testuale`
  - più editing rapido direttamente dalla mappa di flusso

### Obiettivo UX corrente
- Ridurre la dipendenza dal pannello avanzato sotto la board.
- Portare più operazioni dentro il quick menu del nodo evento:
  - `combattimento`: mostro, quantità, loot
  - `skillcheck`: attributo, difficoltà, esiti

### Problemi aperti
- La flow board va ancora rifinita lato quick menu, così il click sul nodo non spinge verso l’editor avanzato se non richiesto esplicitamente.
- Questa repo pubblica va considerata come mirror operativo del frontend/site: quando si chiude un pass utile di Adventure Studio, conviene riportarlo qui in sync.

### Prossimo passo naturale
- Sincronizzare il pass “map-first” di Adventure Studio anche qui una volta stabilizzato nella repo privata.
- Continuare a usare questo file come diario incrementale per Claude o altri agenti.
