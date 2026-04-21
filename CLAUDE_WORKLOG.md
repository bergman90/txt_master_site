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
- Sempre nella repo privata, la mini-card evento è stata rifinita:
  - niente più `Apri collegamenti e rami`
  - CTA `Vai a opzioni avanzate` più evidente
  - persistenza automatica dei campi attivi quando il quick menu si chiude
- Sempre nella repo privata, anche il popover target/rami è stato riallineato alla stessa CTA `Vai a opzioni avanzate`.

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

## 2026-04-21 — pass loot family-first

- Pulita la card avanzata del gruppo combattimento:
  - rimosso `Descrizione breve`
  - spostata `Fase furia` fuori dal blocco loot
- Normalizzato il catalogo armi dello Studio sul modello:
  - famiglia
  - 3 varianti nominali
  - tier `1 / 2 / 3` condivisi per stats ed effetti all'interno della famiglia
- Riallineati i picker e le liste loot in modo che non mostrino più tier spezzati su nomi casuali.
- Il prossimo pass naturale resta lo stesso: applicare la stessa pulizia forte ad armature e scudi e poi sincronizzare il frontend pubblico quando il pass è stabile.
