# Adventure Runtime Compiler v1

## Obiettivo
Portare il compilatore `graph -> runtime` in uscita da Adventure Studio, lasciando l'app Android sul formato runtime stabile:

- `Adventure`
- `Scene`
- `Choice`
- `SkillCheck`
- `CombatEncounter`
- `ChoiceEvent` solo per `requirement`

## Input
Il compilatore legge il payload editoriale v2:

- `descriptions[]`
- `eventNodes[]`
- `startingDescriptionId`
- metadata editoriali come `chapterGroups[]`

## Output
Il compilatore produce un payload runtime compatibile con l'app:

- `startingSceneId`
- `scenes[]`
- `encounters[]`
- `starterKitItems[]`

I metadata editoriali non vengono esportati nel runtime.

## Strategia
La regola chiave di v1 e:

- ogni `description` diventa una `Scene` runtime
- ogni `eventNode` detached diventa una `Scene` runtime sintetica
- ogni `choice.event` inline viene abbassato a una `Scene` runtime sintetica intermedia

In pratica il compilatore trasforma il grafo in una rete di scene compatibili con il motore app.

## Mapping dei nodi

### Description
- `description.id -> scene.id`
- `description.title -> scene.title`
- `description.text -> scene.text`
- `description.image -> scene.image`
- `choices[]` compilate in:
  - `nextSceneId` diretto
  - oppure scena sintetica per eventi inline

### Transition
Compila in una scena sintetica con:

- `scene.text = event.text`
- una sola choice `Continua`
- `nextSceneId` verso target o scena sintetica di branch

### Loot
Compila in una scena sintetica con:

- `scene.text = event.text`
- `scene.sceneLoot = event.loot`
- choice `Continua` verso il branch successivo

### Requirement
Compila in una scena sintetica con:

- `scene.text = event.text`
- una choice con `event.type = "requirement"`
- `metBranch/unmetBranch` puntano a scene runtime gia compilate

### Skillcheck
Compila in una scena sintetica con:

- `scene.text = event.text`
- una choice con `skillCheck`
- `successSceneId/failureSceneId` compilati sui target del grafo
- quando il branch usa `__stay__`, il compilatore porta nel runtime:
  - `successLoot/failureLoot`
  - `successText/failureText`
  - `successCondition/failureCondition`
  - `successUnlockChoiceId/failureUnlockChoiceId`

### Combat
Compila in una scena sintetica con:

- `scene.text = event.text`
- `scene.encounterId`
- `scene.encounterCount`
- `victorySceneId/defeatSceneId/retreatSceneId`

e in un `CombatEncounter` runtime dedicato.

### Dialogue
Compila in una scena sintetica con:

- `scene.text = event.text + npcText`
- ogni risposta diventa una `Choice`
- `hiddenUntilUnlocked -> hidden`

`gateType/gateRefId` restano metadata di authoring e per ora non cambiano la logica runtime.

## Branch intermedi
Quando un branch contiene contenuto proprio:

- `text`
- `loot`
- oppure un `branch.event`

il compilatore crea una scena sintetica intermedia, cosi il runtime non perde il passaggio narrativo.

## Limitazioni note v1

### Combat multigruppo
Il runtime app supporta un solo profilo nemico per scena.

Quindi in v1:
- il compilatore usa il primo `combatGroup` come profilo di combattimento
- segnala warning se ci sono piu gruppi

### Condition
Il nodo `condition` non e ancora migrato come meccanica runtime.
Per ora viene degradato a transizione narrativa con warning.

### Shop
Il nodo `shop` non viene piu compilato come meccanica runtime.
Il negozio globale dell'app resta separato.

### Dialogue advanced gating
`gateType`, `gateRefId`, `once` non hanno ancora una controparte runtime piena.

## Prossimo passo naturale
Dopo questo compiler v1, il lavoro lato app non e piu "capire il grafo", ma:

1. usare i JSON compilati in import/export reale
2. rifinire i warning di compilazione
3. decidere se migrare in futuro l'app al grafo nativo oppure restare su pipeline compilata
