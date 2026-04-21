# Claude Worklog

Diario operativo condiviso per riprendere il lavoro su sito pubblico e Adventure Studio sincronizzato.
Formato consigliato:
- data
- area toccata
- cosa è stato cambiato
- problemi aperti
- prossimo passo naturale

## 2026-04-21

### Adventure Studio random monster loot
- Sincronizzato anche qui il pass sul loot casuale dei mostri:
  - i preset mostro non usano piu solo loot fisso
  - il loot firma viene rollato in base alla rarita
  - esiste sempre un fallback casuale se i roll non producono nulla
- Anche i mostri da archetipo usano ora loot casuale invece di partire con una ricompensa statica di sole monete.
- Annotata nel codice una curva base per rarita dimezzata rispetto al primo pass:
  - `common` 30%
  - `uncommon` 12.5%
  - `rare` 5%
  - `mythic/epic` 2%
  - `legendary/unique` 0.5%

### Adventure Studio tier-rarity rule
- Sincronizzata anche qui la regola generale `tier -> rarity`:
  - `tier 1` = `common / uncommon`
  - `tier 2` = `uncommon / rare`
  - `tier 3` = `rare / mythic`
  - `unique` resta dedicato agli oggetti unici gia esistenti
- Introdotta normalizzazione automatica dei preset tiered e riallineati gli accessori-set alla curva `uncommon -> rare -> mythic`.

### Adventure Studio floating quick cards
- Sincronizzato anche qui il pass UX sulle card flottanti della flow board:
  - `x` esplicita in alto a destra
  - drag dal solo header
  - chiusura automatica confermata cliccando fuori
- Anche il popover target/rami usa ora la stessa logica di header trascinabile e chiusura coerente.

### Adventure Studio quick menu follow-up
- Sincronizzato anche qui il fix visuale della quick card `Combattimento`:
  - il bottone `Rimuovi` del gruppo mostro non deve piu uscire dalla card
  - il blocco azioni gestisce meglio stepper e wrap in spazi stretti
- Sincronizzato anche il fix di persistenza del campo `Testo iniziale della scena` nel quick menu nodo:
  - il binding usa ora il payload corretto anche per i nodi evento detached
  - la chiusura del quick menu forza un flush piu affidabile dei controlli, cosi il testo non si perde

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
- 
## 2026-04-21 â€” pass unificazione consumabili

- Unificata la famiglia picker dei consumabili:
  - rimossi i sottogruppi `Recupero`, `Difesa`, `Offensivi`
  - tutti gli item `category: "consumable"` rientrano ora nella sola famiglia `Consumabili`
- Portato il catalogo consumabili a un modello coerente `tier 1 / 2 / 3`:
  - `Pozione curativa`
  - `Razioni da viaggio`
  - `Fuoco alchemico`
  - `Polvere di guardia`
  - `Lacrima della Fenice`
- Aggiunti `tier` espliciti ai consumabili del catalogo canonico, cosi` filtro, ricerca, normalizzazione e generazione loot leggono la stessa struttura.
- Riallineata anche la progressione di rarita` al canone gia` deciso:
  - `tier 1 -> common/uncommon`
  - `tier 2 -> uncommon/rare`
  - `tier 3 -> rare/mythic`

## 2026-04-21 â€” pass semplificazione opzioni avanzate loot

- Reso `Categoria` modificabile solo per loot `custom`.
- Reso `Rarita` derivata e bloccata per tutti i preset canonici e tiered.
- La sezione `Opzioni avanzate` non resta piu visibile quando non serve:
  - si mostra per `custom`
  - si mostra per `key` quando serve `lockId`
  - si mostra per `armor` quando serve `armorType`
- Il flag `Quest` resta rapido nella testata della card, fuori dal pannello avanzato.
