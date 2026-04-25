# Claude Worklog

Diario operativo condiviso per riprendere il lavoro su sito pubblico e Adventure Studio sincronizzato.
Formato consigliato:
- data
- area toccata
- cosa è stato cambiato
- problemi aperti
- prossimo passo naturale

## 2026-04-21

### Adventure Studio / tassonomia equip - armature e scudi
- Nella repo privata e nel runtime app e stato chiuso il pass `family-first` anche per armature e scudi.
- Struttura canonica fissata:
  - armature:
    - `light_armor`
    - `medium_armor`
    - `heavy_armor`
  - scudi:
    - `light_shield`
    - `heavy_shield`
- Varianti nominali decise:
  - armature leggere: `Cuoio`, `Giaco di cuoio`, `Cuoio borchiato`
  - armature medie: `Cotta di maglia`, `Corazza a scaglie`, `Brigantina`
  - armature pesanti: `Armatura a bande`, `Armatura completa`, `Corazza di piastre`
  - scudi leggeri: `Buckler`, `Scudo rotondo`, `Targa`
  - scudi pesanti: `Scudo pesante`, `Scudo a torre`, `Pavese`
- Nota importante per il proseguimento:
  - `buckler` e `scudo_rotondo` non vanno piu trattati come curve meccaniche separate
  - sono solo varianti nominali della stessa famiglia `light_shield`
- Questa repo pubblica non e ancora stata sincronizzata col codice di questo pass: per ora il diario serve come ponte operativo per il prossimo sync del frontend Adventure Studio.

## 2026-04-22

### Tassonomia armi + shop authoring
- Nella repo privata e stato aggiornato anche il blocco famiglie arma:
  - `blade_1h`: `Spada`, `Gladio`, `Scimitarra`
  - `blade_2h`: `Zweihänder`, `Flamberga`, `Claymore`
  - nuova famiglia `dagger`: `Daga`, `Stiletto`, `Kryss`
- La nuova famiglia `dagger` e stata impostata in modo prudente ma gia coerente col runtime:
  - T1 = precisione alta, danno basso
  - T2 = extra danno su critico
  - T3 = extra danno su critico + recupero di assetto (`cleanse_exposed`)
- Sempre nella repo privata:
  - `shop` non e piu proponibile dai menu authoring dei nodi evento in Adventure Studio
  - il supporto legacy resta nel codice per non rompere eventuali vecchi grafi
  - il negozio globale dell'app non cambia e continua a rigenerarsi ogni 3 scene
- Questa repo pubblica non e ancora stata sincronizzata con quel codice: il diario viene aggiornato subito per lasciare continuita a Claude e alle altre postazioni.

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

## 2026-04-21 â€” pass pulizia copy UI evento

- Ripulita la schermata evento avanzata da copy ridondante che spiegava la stessa cosa piu volte.
- Rimossi i testi di contesto troppo verbosi in:
  - `Comportamento della scelta`
  - `Tipo di evento`
  - area `Combattimento`
- Tolto anche il meta testo del nodo detached quando non aggiunge orientamento reale.
- Lasciato solo un hint sintetico per i casi agganciati a una scena, cosi` la schermata resta piu leggibile e focalizzata sui controlli.

## 2026-04-21 â€” pass combattimento senza gruppo predefinito

- Il nodo evento `Combattimento` non nasce piu con un `Gruppo 1` auto-generato.
- Rimossa anche la forzatura che reinseriva un gruppo vuoto quando `combatGroups` era una lista vuota.
- Ora la flow card parte pulita e i gruppi si aggiungono solo dal picker o dal pulsante esplicito.

## 2026-04-21 â€” micro pass pulizia caption rami combattimento

- Rimossi i caption descrittivi sotto i rami `Vittoria` e `Ritirata` nel blocco combattimento.
- Lasciato per ora il testo di `Sconfitta`, che spiega ancora un default strutturale (`Morte`).

## 2026-04-21 â€” pass allineamento ritenta skill check

- Allineato il ramo di fallimento dello skill check tra quick card e pannello avanzato.
- Il selector avanzato usa ora la stessa hydrator del quick menu, quindi mostra anche l'opzione `Ritenta`.
- Centralizzato il supporto a hydrator target custom dentro `buildTargetRow` / `buildBranchRow`, cosi` altri rami speciali possono riusare lo stesso pattern.

## 2026-04-21 â€” pass scene card compatte sulla flow board

- Ridotte le dimensioni base dei nodi scena sulla flow board per avvicinarle ai nodi prova/evento.
- Rimossa la preview del testo scena dal corpo della card, cosi` la board resta piu ordinata.
- Confermato il quick menu scena come punto di editing rapido da click singolo:
  - titolo
  - testo iniziale della scena
- Rifinito anche il CSS della scena-card per il nuovo formato compatto:
  - padding piu stretto
  - titolo ellittico su una riga
  - badge che non spingono il layout fuori asse

## 2026-04-22 — sync note loot mostri + regole negozio

- Allineato il diario con il pass sulla repo privata:
  - Adventure Studio rigenera il loot casuale dei gruppi mostro se manca.
  - App: negozio chiuso durante i combattimenti, highlight al refresh ogni 3 scene, stock limitato a `epic`, vendita al 35% del valore di mercato.

### Nota di continuita`

- Questa repo pubblica contiene qui soprattutto il checkpoint editoriale del pass.
- Il codice effettivamente modificato in questo giro e` nella repo privata `New project`.
- Se riprendi da un'altra postazione, controlla prima nella repo privata:
  - `adventure-studio/app.js`
  - `app/src/main/java/com/bergman90/txtmaster/ui/AdventureScreens.kt`
  - `app/src/main/java/com/bergman90/txtmaster/engine/GameEngine.kt`
  - `app/src/main/java/com/bergman90/txtmaster/engine/EquipmentCatalog.kt`
- In questo pass non e` stato fatto commit/push finale.

## 2026-04-22 - sync note audit requirement legacy

- Allineato il diario con il pass di audit sui requirement nella repo privata:
  - confermata la separazione tra requirement event-node nell'editor e requirement legacy nel runtime Android
  - rimossi dai percorsi vivi dell'editor `v2` i campi legacy `required*` e `consumeOnUse`
  - il frontend pubblico resta allineato alla direzione nuova: requirement come nodo-evento, non come vecchio gating inline sulle choice
- Nota:
  - nel codice resta ancora un blocco dead code storico relativo a `renderChoiceCards(...)` con riferimenti legacy requirement; non e` il renderer usato dal flusso corrente

## 2026-04-22 - sync note handoff requirement editor

- Allineato il mirror pubblico al pass requirement della repo privata:
  - quick menu requirement portato alle tre modalita` `presetItem / key / questItem`
  - serializzazione requirement aggiornata a `requirementMode + itemId/lockId/questItemId`
  - loot editor esteso con `questItemId` per i quest item unici referenziabili
  - validazioni aggiunte per `lockId` mancanti, `questItemId` incoerenti e requirement che puntano a riferimenti inesistenti
- Stato:
  - frontend pubblico allineato al nuovo modello editoriale
  - runtime Android resta ancora nella repo privata come lavoro successivo da completare
  - non eseguiti test browser automatici in questo pass

## 2026-04-22 - sync note runtime requirement app

- Aggiornato il diario con il pass fatto nella repo privata:
  - il runtime app ora supporta `choice.event.type = "requirement"`
  - aggiunti `ChoiceEvent` / `ChoiceEventBranch`
  - `Choice` deserializza `event`
  - `LootDrop` e `InventoryItem` mantengono anche `questItemId`
  - la UI dell'app mostra il requirement moderno come bivio vero (`met/unmet`), non solo come blocco legacy
- Nota di continuita`:
  - questo NON significa ancora che l'app importi gia` tutto il formato grafo `v2`
  - il supporto requirement runtime e il bridge completo graph->runtime restano due pass distinti

## 2026-04-22 - sync note flow board branch linking

- Nella repo privata e` stato fixato il linking dei rami veri dei nodi evento sulla flow board.
- Il drag ora conserva il `portId` del ramo (`success/failure`, `victory/defeat/retreat`, `met/unmet`) invece di usare solo il "primo ramo libero".
- La quick card del nodo evento viene riallineata subito dopo il drop, cosi` il collegamento appare coerente sia sulla mappa sia nel pannello avanzato.
- Nota:
  - il codice del fix e` nella repo privata (`adventure-studio/app.js`)
  - qui e` stato aggiornato solo il diario di continuita`

## 2026-04-22 - sync note requirement card pass

- Nella repo privata e` stato rifinito anche il nodo evento `requirement`.
- Il quick menu ora mostra:
  - riepilogo del controllo attivo
  - label piu` esplicite per il valore richiesto
  - rami `Soddisfatto` / `Non soddisfatto` direttamente dalla flow board
- Anche il pannello avanzato e` stato riallineato con una mini-card riassuntiva del requisito.
- Nota:
  - il codice del fix resta nella repo privata (`adventure-studio/app.js`, `adventure-studio/styles.css`)
  - qui e` aggiornato solo il diario di continuita`

## 2026-04-22 - sync note requirement key picker

- Nella repo privata e` stato allineato anche il picker `Chiave` del nodo `requirement`.
- Ora mostra solo chiavi realmente presenti nell'avventura.
- Se non esistono chiavi authored nel progetto, il menu mostra:
  - `Non ci sono chiavi nella tua avventura`
- Restano comunque leggibili eventuali riferimenti orphan a lockId non piu` trovati, per non perdere dati vecchi.

## 2026-04-22 - sync note picker loot compatto

- Nella repo privata e` stato rifinito anche il picker loot compatto della flow board.
- Ora mostra label piu` chiare:
  - `Tier`
  - `Famiglia`
  - `Ricerca live`
- In modalita` compatta non mostra piu` il dropdown finale degli item:
  - la scelta passa dai suggerimenti live sotto la ricerca
- Nota:
  - il codice del fix resta nella repo privata (`adventure-studio/app.js`)
  - qui e` aggiornato solo il diario di continuita`

## 2026-04-22 - sync note fix suggerimenti loot live

- Nella repo privata e stato corretto anche il picker loot compatto della flow board.
- I suggerimenti live sotto la ricerca adesso compaiono davvero quando ci sono corrispondenze.
- Nota:
  - il codice del fix resta nella repo privata (dventure-studio/app.js)
  - qui e aggiornato solo il diario di continuita`r


## 2026-04-22 - sync note fix suggerimenti loot live

- Nella repo privata e` stato corretto anche il picker loot compatto della flow board.
- I suggerimenti live sotto la ricerca adesso compaiono davvero quando ci sono corrispondenze.
- Nota:
  - il codice del fix resta nella repo privata (`adventure-studio/app.js`)
  - qui e` aggiornato solo il diario di continuita`

## 2026-04-22 - sync note ricerca loot live piu` fedele

- Nella repo privata e` stata corretta anche la ricerca live del picker loot.
- Il match non passa piu` dagli effetti del loot, quindi i risultati sono piu` aderenti al nome dell'item cercato.
- Esempio risolto:
  - scrivendo `pozione` non compare piu` `Polvere di guardia` solo perche` aveva un effetto chiamato `Pozione difensiva`

## 2026-04-22 - sync note condition e shop disabilitati

- Nella repo privata `Condizione` e `Negozio` sono stati tolti dai nodi evento selezionabili della flow board.
- Restano supportati in background solo per compatibilita` e rivalutazione futura.
- Nota:
  - la modifica UI sta in `adventure-studio/index.html` e `adventure-studio/app.js`
  - qui e` aggiornato solo il diario di continuita`

## 2026-04-22 - sync note specifica dialogue v1

- Nella repo privata e` stata aggiunta la specifica del nodo `dialogue`:
  - `docs/dialogue-node-v1-spec.md`
- La direzione fissata e` questa:
  - dialogo-snodo old school
  - poche risposte forti
  - gating semplice
  - quick card della flow board come interfaccia principale
- Nota:
  - qui e` aggiornato solo il diario di continuita`
  - l'implementazione UI del nuovo `dialogue` non e` ancora stata fatta in questo pass

## 2026-04-22 - sync note quick card dialogue completata

- Nella repo privata e stata completata la quick card del nodo dialogue su Adventure Studio.
- Ora il dialogo e authorabile davvero dalla flow board:
  - NPC
  - battuta
  - risposte multiple
  - intento
  - gate
  - destinazioni
- Il nodo dialogue espone anche porte dinamiche sulla board in base alle risposte presenti.
- Nota:
  - qui e aggiornato solo il diario di continuita`n  - la sincronizzazione del codice sulla repo pubblica non e ancora stata fatta in questo pass.

## 2026-04-22 - sync note pulizia testi mojibake flow board

- Nella repo privata e stato fatto un pass di pulizia sulle stringhe visibili corrotte da encoding in Adventure Studio.
- Sistemate icone, label e placeholder della flow board e dei quick menu.
- Nota:
  - qui e aggiornato solo il diario di continuita`n  - la sincronizzazione del codice sulla repo pubblica non e ancora stata fatta in questo pass.

## 2026-04-23 - sync note specifica chapter groups v1

- Nella repo privata e stata aggiunta la specifica dei chapterGroup:
  - docs/chapter-groups-v1-spec.md`r
- La direzione fissata e questa:
  - contenitore editoriale puro
  - nessun impatto runtime nella v1
  - porte aggregate calcolate dagli edge del grafo
  - flow board piu leggibile su avventure lunghe
- Nota:
  - qui e aggiornato solo il diario di continuita`r
  - l'implementazione tecnica non e ancora stata fatta in questo pass.

## 2026-04-23 - sync note marquee selection flow board

- Nella repo privata e stato implementato il primo pass tecnico dei chapter groups:
  - marquee selection sulla flow board
  - stato multi-select separato per scene e nodi evento
- Supportati:
  - selezione a rettangolo
  - Shift+click additivo sui nodi
  - highlight visivo dei nodi inclusi nella selezione multipla
- Nota:
  - qui e aggiornato solo il diario di continuita
  - il sync del codice sulla repo pubblica non e ancora stato fatto in questo pass.

## 2026-04-23 - sync note chapterGroup model e comando raggruppa

- Nella repo privata e stato implementato il secondo pass dei chapter groups:
  - modello dati `chapterGroups`
  - comando toolbar `Raggruppa in capitolo`
  - prima resa visiva del capitolo come cornice editoriale espansa sulla flow board
- I chapter groups sono ora persistiti anche su import/export JSON v2 e salvataggi locali.
- Nota:
  - qui e aggiornato solo il diario di continuita
  - il sync del codice sulla repo pubblica non e ancora stato fatto in questo pass.

## 2026-04-23 - sync note chapterGroup collapse e porte aggregate

- Nella repo privata e stato implementato il collasso dei chapter groups sulla flow board.
- Aggiunti:
  - macro-blocco capitolo collassato
  - porte aggregate entry / exit derivate dagli edge reali
  - reroute dei link esterni verso il blocco capitolo
- Nota:
  - qui e aggiornato solo il diario di continuita
  - il sync del codice sulla repo pubblica non e ancora stato fatto in questo pass.

## 2026-04-23 - sync note chapter roles inizio/fine capitolo

- Nella repo privata e stata aggiornata la logica dei chapter groups collassati.
- Le porte aggregate ora dipendono dai ruoli assegnati ai nodi interni:
  - inizio capitolo
  - fine capitolo
- Aggiunti warning sintetici quando il capitolo collassato nasconde collegamenti esterni non marcati.
- Nota:
  - qui e aggiornato solo il diario di continuita
  - il sync del codice sulla repo pubblica non e ancora stato fatto in questo pass.
## 2026-04-23 - sync note chapter groups compact + links fix

- Nella repo privata e stato fatto un pass sulla flow board dei chapter groups.
- Correzioni principali:
  - blocco capitolo collassato ridotto a una scala molto piu compatta
  - nodi scena ridotti alla stessa impronta dei nodi evento
  - fix del wiring dei link in entrata/uscita del capitolo collassato sui nodi marcati `inizio` / `fine`
- Nota:
  - qui e aggiornato solo il diario di continuita
  - il sync del codice sulla repo pubblica non e ancora stato fatto in questo pass.
## 2026-04-23 - sync note chapter card readability polish

- Nella repo privata e stato rifinito il blocco capitolo collassato.
- Miglioramenti principali:
  - testo piu leggibile
  - contrasto piu alto
  - toggle reso piu evidente con CTA testuali `Apri` / `Riduci`
- Nota:
  - qui e aggiornato solo il diario di continuita
  - il sync del codice sulla repo pubblica non e ancora stato fatto in questo pass.
## 2026-04-23 - sync note chapter groups floating drag

- Nella repo privata i chapter groups sono stati resi flottanti sulla flow board.
- Ora:
  - il blocco collassato si trascina come macro-card
  - il frame espanso trascina insieme i nodi del capitolo tramite header
- Nota:
  - qui e aggiornato solo il diario di continuita
  - il sync del codice sulla repo pubblica non e ancora stato fatto in questo pass.
## 2026-04-23 - sync note random loot buttons

- Nella repo privata sono stati aggiunti i bottoni `Genera loot casuale`.
- Copertura:
  - card avanzata del gruppo combattimento
  - nodo evento `loot`
- Nota:
  - gruppo combattimento = rigenera il loot del mostro secondo preset/archetipo
  - nodo loot = aggiunge un bundle casuale coerente dal catalogo tiered
- Qui e aggiornato solo il diario di continuita.
## 2026-04-23 - sync note delete chapter group

- Nella repo privata e stata aggiunta l'azione `Elimina capitolo` sui chapter groups.
- Il comportamento rimuove solo il gruppo editoriale e lascia intatti i nodi contenuti.
- Qui e aggiornato solo il diario di continuita.
## 2026-04-23 - Coerenza razza/classe/attributi/abilita
- Aggiunte tre abilita narrative vere al runtime personaggio: `athletics`, `perception`, `deception` (`Atletica`, `Percezione`, `Arte dell''inganno`).
- `CharacterSheet` ora include i tre nuovi valori, con default a 0 per retrocompatibilita dei salvataggi/JSON esistenti.
- `CharacterFactory` e stato reso piu coerente:
  - la classe ora fornisce bonus chiari alle abilita narrative (`Warrior -> Atletica/Sopravvivenza`, `Ranger -> Sopravvivenza/Percezione`, `Cultist -> Sapienza/Arte dell''inganno`);
  - l''ascendenza ora pesa in modo esplicito tramite profili dedicati, invece che solo in modo indiretto attraverso l''hash dei testi;
  - rimossa la doppia influenza nascosta dell''ascendenza su Saggezza/Costituzione dalle formule base;
  - i preset iniziali degli edge sono stati riallineati alle nuove abilita.
- `GameEngine` ora supporta i nuovi check `athletics`, `perception`, `deception` e li include in crescita passiva, etichette avanzamento e riepiloghi crescita.
- Le UI app (`AdventureScreens`, `HeroScreens`, `UiShared`, `CreationScreens`) mostrano le nuove abilita e i testi di build sono stati riallineati.
- Adventure Studio: aggiunte le nuove abilita all''elenco `SKILLS` per gli skillcheck authoring-side.
- Verifiche:
  - `java` / `JAVA_HOME` ancora assenti su questa macchina, quindi nessuna build Kotlin end-to-end.
  - `node --check adventure-studio/app.js` al momento fallisce per un bug JS preesistente/non legato a questo pass (`Invalid regular expression /?/g` attorno alla riga ~11173).
- Nota di design corrente:
  - Attributi = fondazione primaria
  - Classe = identita di combattimento + una direttrice narrativa
  - Ascendenza = bias esplicito su attributi e una predisposizione secondaria
  - Edge iniziale = specializzazione di partenza
  - Abilita narrative vere = Atletica, Percezione, Sapienza, Sopravvivenza, Arte dell''inganno
  - Discipline di combattimento = Mischia, Guardia, Precisione, Alchimia
- Sync note: il codice vivo di questo pass e nella repo privata; la repo pubblica riceve il diario per continuita operativa.

## 2026-04-23 - Handoff abilita avventurose coerenti
- Nella repo privata e nell'app e stato riallineato il sistema personaggio per includere Atletica, Percezione e Arte dell'inganno accanto a Sapienza e Sopravvivenza.
- Modello ora coerente: attributi come base, ascendenza come inclinazione, classe come specializzazione, edge iniziale come rifinitura.
- Adventure Studio mostra le nuove abilita nei menu delle prove.
- Nota: la build Android non e stata verificata su questa macchina per assenza di Java; `node --check adventure-studio/app.js` fallisce ancora per un bug regex preesistente non legato a questo pass.
## 2026-04-23 - Handoff fix bootstrap Adventure Studio
- Sistemato un errore di parse in `adventure-studio/app.js` che bloccava il caricamento dello script.
- Effetto visibile: `Nuovo progetto` e `Nuovo evento` risultavano non funzionanti.
- Correzione fatta normalizzando le stelline tier con `\u2605` nelle regex e nelle label.
- Check sintattico JS ora passato (`node --check`).
## 2026-04-23 - Handoff toolbar flow board
- Sistemata la toolbar della flow board lato testo e leggibilita: placeholder ricerca corretto, font piu grandi e controlli zoom piu chiari.
- Fix solo frontend Adventure Studio, senza modifiche di comportamento.
## 2026-04-23 - Handoff bonifica testi editor Adventure Studio
- Puliti molti testi corrotti nelle card/editor di Adventure Studio.
- Rimosse icone/prefissi a punti interrogativi non leggibili e riallineati placeholder/branch label.
- I tier oggetto nei picker ora tornano ad apparire con stelle vere.
- Check sintattico JS passato.
## 2026-04-23 - Secondo pass su mojibake e separatori UI
- Eseguito un secondo pass mirato sulle stringhe ancora fragili negli editor di Adventure Studio, concentrato solo sulle etichette realmente visibili.
- Normalizzati in formato robusto i meta della flow board e dei chapter group (`nodi | in | fin`) evitando separatori che rischiavano di rompersi con l'encoding del file.
- Ripuliti placeholder e select attivi: `Nessuna destinazione`, `Scegli effetto`, `Seleziona chiave`, `Seleziona quest item`, `Seleziona loot`, `Nessun preset`, `Nessun archetipo`.
- Uniformate diverse label dei quick menu e del loot editor con separatori `|` e con `�` per la quantita.
- Nota: il codice operativo e il fix stanno nella repo privata; qui il diario viene solo sincronizzato per continuita.
## 2026-04-23 - Handoff crafting groundwork e materiali
- Sincronizzato lato Adventure Studio il nuovo strato `material` per preparare il futuro crafting system.
- Aggiunti nel picker loot materiali canonici v1: Legno, Ferro grezzo, Pelle, Stoffa, Erbe, Cristalli, Squame.
- `Pelle di lupo` ora e trattata come materiale della famiglia `Pelle` anche nello Studio pubblico.
- I generatori loot dei mostri sono stati riallineati per far droppare materiali comuni in base al profilo del nemico.
- La documentazione completa su crafting, ricetta iniziale e audit dei candidati borderline resta nella repo privata; qui viene sincronizzato il diario per continuita.
- Verifica: `node --check adventure-studio/app.js` passato sul file sorgente sincronizzato dalla repo privata.
## 2026-04-23 - Prospetto handoff per Claude
### Adventure Studio
- La flow board e' ormai il centro dell'authoring.
- Il modello nuovo lavora su `description node` ed `event node` separati.
- Nodi attivi lato UI autore: `transition`, `combat`, `skillcheck`, `requirement`, `loot`, `dialogue`.
- `condition` e `shop` sono stati disattivati dalla UI e tenuti solo come compatibilita legacy.
- Esistono anche `chapterGroup` con multi-selezione, raggruppamento, collapse e nodi marcati `inizio capitolo` / `fine capitolo`.

### Migrazione futura verso l'app
- L'app Android non legge ancora nativamente il nuovo grafo v2 della board.
- La direzione condivisa resta: chiudere bene Adventure Studio e poi introdurre un compilatore `graph -> runtime` prima di toccare la migrazione completa lato app.

### Crafting
- E' nato il nuovo strato `material` con materiali canonici v1: Legno, Ferro grezzo, Pelle, Stoffa, Erbe, Cristalli, Squame.
- `Pelle di lupo` e' stata promossa a materiale della famiglia `Pelle`.
- I generatori loot mostro nello Studio possono gia far droppare materiali comuni.
- La base runtime completa del crafting e la documentazione dettagliata restano nella repo privata; qui viene lasciato il quadro sintetico per continuita.
## 2026-04-23 - Handoff seed ricette crafting
- Nella repo privata e stato fissato un primo seed di ricette per la futura forgia.
- Una sola ricetta resta pensata come esplicita all'inizio (`Pozione curativa T1`), le altre vengono mantenute come ricette da scoprire.
- Il dettaglio operativo delle ricette seed resta nella repo privata, insieme al catalogo runtime del crafting.
## 2026-04-23 - Sync runtime compiler v1
- Sincronizzato dal repo privato il nuovo compilatore graph -> runtime di Adventure Studio.
- Il portale carica ora dventure-studio/runtime-compiler.js prima di pp.js.
- JSON preview ed export nello Studio puntano al payload runtime compilato, non piu al solo modello editoriale v2.
- Documento di supporto sincronizzato: docs/adventure-runtime-compiler-v1.md.
- Questo pass e soprattutto architetturale: prepara la migrazione dal nuovo modello a nodi dello Studio al formato runtime che l'app sa gia leggere.## 2026-04-25 - Wiki sito: pass manuale combattimento e item
- Riscritta `wiki-combattimento.html` in chiave molto piu concreta e meno generica.
- La pagina combattimento ora spiega in dettaglio:
  - struttura del round
  - sei azioni base (`Attacca`, `Difendi`, `Riprendi fiato`, `Ritirata`, consumabili, talenti)
  - relazione fra precisione, danno, mitigazione ed effetti di stato
  - ruolo degli stili arma
  - stati reali e filosofia tattica del sistema
  - distinzione fra meccaniche gia vive nel runtime e spazio ancora in sviluppo
- Riscritta `wiki-loot.html` come vero manuale del sistema item.
- La pagina loot ora chiarisce:
  - differenza fra loot, drop chance, rarita, tier, famiglia e variante nominale
  - modello `familyId + tier + variantId`
  - famiglie canoniche di armi, armature e scudi
  - lettura delle stelle tier
  - rarita principali del sistema
  - set accessori, bonus 3+ pezzi e logica effetti
  - effetti item gia rilevanti nel runtime
  - fondazione materiali/crafting spiegata in chiave pubblica ma sintetica
- Rifinita anche `wiki.html` per riallineare l'indice wiki al tono nuovo: meno overview generica, piu manuale di sistema.
- Questo pass riguarda il sito pubblico. Nessun cambio runtime app in questo step.
- Prossimo step naturale lato wiki: portare lo stesso livello di precisione anche su `wiki-attributi.html`, `wiki-abilita.html` e `wiki-classi-razze.html`.

## 2026-04-25 - Flow board UX: marquee selection e chapter groups piu leggibili
- Migliorata la marquee selection nella flow board: durante il drag i nodi intercettati vengono evidenziati in tempo reale.
- Il rettangolo di selezione ora mostra anche un piccolo badge col conteggio nodi, cosi la selezione non sembra piu "vuota" mentre trascini.
- Aggiunto stato visivo dedicato per i nodi in preview marquee (`is-marquee-preview`).
- I chapter group ora riflettono meglio la selezione: se i loro nodi sono selezionati il gruppo si evidenzia, e se il marquee passa sopra nodi interni il gruppo mostra feedback visivo.
- Click sul capitolo: seleziona direttamente tutti i nodi contenuti (shift-click additivo), rendendo il grouping meno clunky.
- Nessun cambiamento al modello dati o al compilatore: e un pass UX puro sulla flow board.
- File toccati: `adventure-studio/app.js`, `adventure-studio/styles.css`.
- Verifica: `node --check adventure-studio/app.js` passato.
