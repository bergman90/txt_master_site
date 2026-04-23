const SKILLS = [
  { value: "", label: "Nessuna" },
  { value: "lore", label: "Sapienza / Lore" },
  { value: "survival", label: "Sopravvivenza" },
  { value: "athletics", label: "Atletica" },
  { value: "perception", label: "Percezione" },
  { value: "deception", label: "Arte dell'inganno" },
  { value: "melee", label: "Mischia" },
  { value: "strength", label: "Forza" },
  { value: "dexterity", label: "Destrezza" },
  { value: "intelligence", label: "Intelligenza" },
  { value: "wisdom", label: "Saggezza" },
  { value: "charisma", label: "Carisma" }
];

const ITEM_CATEGORIES = [
  { value: "", label: "Nessuna" },
  { value: "weapon", label: "Arma" },
  { value: "armor", label: "Armatura" },
  { value: "shield", label: "Scudo" },
  { value: "ring", label: "Anello" },
  { value: "cloak", label: "Mantello" },
  { value: "helm", label: "Elmo" },
  { value: "boots", label: "Stivali" },
  { value: "consumable", label: "Consumabile" },
  { value: "material", label: "Materiale" },
  { value: "key", label: "Chiave" },
  { value: "quest", label: "Quest" },
  { value: "treasure", label: "Tesoro" },
  { value: "utility", label: "Utilita" },
  { value: "relic", label: "Reliquia" }
];

const ITEM_RARITIES = [
  { value: "common", label: "Comune" },
  { value: "uncommon", label: "Non comune" },
  { value: "rare", label: "Rara" },
  { value: "mythic", label: "Mitica" },
  { value: "unique", label: "Unica" },
  { value: "epic", label: "Epica" },
  { value: "legendary", label: "Leggendaria" }
];

const EFFECT_FAMILIES = [
  { value: "", label: "Nessuna" },
  { value: "combat_offense", label: "Offesa in combattimento" },
  { value: "combat_defense", label: "Difesa in combattimento" },
  { value: "combat_tempo", label: "Tempo di combattimento" },
  { value: "combat_control", label: "Controllo in combattimento" },
  { value: "survival_recovery", label: "Recupero e sopravvivenza" },
  { value: "skill_check", label: "Prove / skill check" },
  { value: "economy_loot", label: "Economia e bottino" },
  { value: "narrative_key", label: "Chiave narrativa" }
];

const EFFECT_TRIGGERS = [
  { value: "", label: "Nessuno" },
  { value: "passive", label: "Passivo" },
  { value: "active_combat", label: "Attivo in combattimento" },
  { value: "active_exploration", label: "Attivo in esplorazione" },
  { value: "consumable", label: "Consumabile" },
  { value: "on_hit", label: "Quando colpisce" },
  { value: "on_crit", label: "Su critico" },
  { value: "on_defend", label: "Quando difende" },
  { value: "on_recover", label: "Quando recupera fiato" },
  { value: "on_choice", label: "Su scelta/evento" }
];

const EFFECT_PRESETS = [
  { value: "", label: "Nessun effetto", family: "", trigger: "", description: "Oggetto senza effetto speciale runtime.", categories: [] },
  { value: "restore_hp", label: "Cura", family: "survival_recovery", trigger: "consumable", description: "Recupera una parte degli HP quando l'oggetto viene usato.", categories: ["consumable"] },
  { value: "restore_all", label: "Rigenerazione totale", family: "survival_recovery", trigger: "consumable", description: "Ripristina completamente vita e stamina. Pensato per consumabili rari o reliquie attivabili.", categories: ["consumable", "relic"] },
  { value: "direct_damage", label: "Danno diretto", family: "combat_offense", trigger: "consumable", description: "Infligge danno immediato quando l'oggetto viene usato in combattimento.", categories: ["consumable", "utility"] },
  { value: "defense_surge", label: "Impulso difensivo", family: "combat_defense", trigger: "passive", description: "Aumenta la difesa o offre una protezione passiva. Ideale su scudi, armature, accessori e reliquie difensive.", categories: ["shield", "armor", "helm", "cloak", "ring", "boots", "relic"] },
  { value: "defense_potion", label: "Pozione difensiva", family: "combat_defense", trigger: "consumable", description: "Offre una protezione temporanea quando il consumabile viene usato in combattimento.", categories: ["consumable"] },
  { value: "bonus_damage", label: "Bonus danno", family: "combat_offense", trigger: "on_hit", description: "Aggiunge danno bonus ai colpi andati a segno. Ideale per armi, accessori speciali o reliquie offensive.", categories: ["weapon", "helm", "cloak", "ring", "boots", "relic"] },
  { value: "fatigue_relief", label: "Sollievo fatica", family: "combat_tempo", trigger: "passive", description: "Riduce il peso della fatica o migliora la gestione della stamina in modo passivo.", categories: ["utility", "consumable", "helm", "ring", "cloak", "boots", "relic"] },
  { value: "recover_boost", label: "Recupero potenziato", family: "survival_recovery", trigger: "on_recover", description: "Rende piu efficace l'azione di recupero fiato. Su bastoni rituali (stile=ritual) si attiva anche quando difendi.", categories: ["weapon", "consumable", "utility", "helm", "ring", "cloak", "boots", "relic"] },
  { value: "crit_guard", label: "Guardia anti-critico", family: "combat_defense", trigger: "passive", description: "Riduce il rischio o l'impatto dei colpi critici subiti.", categories: ["weapon", "shield", "armor", "helm", "cloak", "ring", "boots", "relic"] },
  { value: "ember_retaliation", label: "Ritorsione ardente", family: "combat_defense", trigger: "on_defend", description: "Restituisce una risposta offensiva o un contraccolpo quando difendi.", categories: ["shield", "armor", "helm", "boots", "cloak", "ring", "relic"] },
  { value: "escape", label: "Ritirata rapida", family: "combat_tempo", trigger: "active_combat", description: "Aiuta la fuga o migliora la ritirata tattica in combattimento.", categories: ["helm", "ring", "boots", "cloak", "consumable", "utility", "relic"] },
  { value: "guaranteed_crit", label: "Critico assicurato", family: "combat_offense", trigger: "on_crit", description: "Garantisce o potenzia un colpo critico. Adatto ad armi rare, accessori speciali e reliquie.", categories: ["weapon", "helm", "cloak", "ring", "boots", "relic"] },
  { value: "apply_staggered", label: "Sbilancia il nemico", family: "combat_control", trigger: "on_crit", description: "Applica la condizione Sbilanciato al nemico su critico (o su colpo solido con armi pesanti). Riduce ATK e DEF nemico.", categories: ["weapon", "consumable", "helm", "cloak", "ring", "boots", "relic"] },
  { value: "cleanse_exposed", label: "Pulisce Scoperto", family: "combat_tempo", trigger: "on_crit", description: "Rimuove la condizione Scoperto dal giocatore su critico (armi) o al recupero (mantelli/oggetti).", categories: ["weapon", "helm", "cloak", "ring", "boots", "consumable", "relic"] },
  { value: "focus_surge", label: "Picco di messa a fuoco", family: "combat_tempo", trigger: "on_defend", description: "Applica la condizione Messa a fuoco dopo una guardia pulita o un recupero. Migliora il prossimo attacco.", categories: ["weapon", "helm", "ring", "cloak", "boots", "relic"] },
  { value: "guarded_surge", label: "Guardia rinforzata", family: "combat_defense", trigger: "on_defend", description: "Applica la condizione Guardia salda dopo aver difeso. Aumenta la difesa per 1-2 turni.", categories: ["weapon", "shield", "helm", "ring", "cloak", "boots", "relic"] },
  { value: "key_access", label: "Accesso narrativo", family: "narrative_key", trigger: "on_choice", description: "Sblocca passaggi, porte o rami narrativi specifici.", categories: ["key", "helm", "cloak", "ring", "boots", "relic", "quest"] },
  { value: "trade_value", label: "Valore commerciale", family: "economy_loot", trigger: "passive", description: "Aumenta il valore economico percepito dell'oggetto.", categories: ["treasure", "helm", "cloak", "ring", "boots", "relic", "utility", "key", "quest"] },
  { value: "check_bonus", label: "Bonus alle prove", family: "skill_check", trigger: "passive", description: "Concede un bonus alle prove o ai check. Perfetto per pergamene, talismani, accessori e bastoni arcani.", categories: ["weapon", "treasure", "relic", "helm", "ring", "cloak", "boots", "utility", "consumable"] }
];

// Valore sentinel usato per indicare "morte immediata" al runtime Android
// (bypassa la navigazione a una scena e attiva direttamente la schermata di game over)
const DEATH_SENTINEL = "__death__";

// Valore sentinel usato per indicare "nessuna via di fuga" nella ritirata:
// il tentativo di ritirata è bloccato e il combattimento continua.
const NO_ESCAPE_SENTINEL = "__no_escape__";

// Valore sentinel per l'esito fallimento di una prova:
// ri-entra nella stessa scena senza bruciare la scelta (ritenta la prova).
const RETRY_SENTINEL = "__retry__";

// Valore sentinel per successSceneId/failureSceneId di una prova:
// resta sulla scena corrente senza navigare. Su successo assegna successLoot
// e brucia la scelta (non ripetibile). Su fallimento la scelta rimane disponibile.
const STAY_SENTINEL = "__stay__";

const MONSTER_PRESETS = [
  {
    id: "skeleton_guard",
    name: "Scheletro Guardiano",
    description: "Un antico guerriero rianimato che difende tombe e reliquie.",
    hitPoints: 14,
    attackBonus: 3,
    defense: 12,
    damageMin: 2,
    damageMax: 6,
    goldReward: 11,
    loot: [
      { itemId: "spada_1", itemName: "Spada \u2605", quantity: 1, category: "weapon", rarity: "common", effectIds: [] },
      { itemId: "coins", itemName: "Monete", quantity: 11, category: "treasure", rarity: "common", effectIds: ["trade_value"] }
    ]
  },
  {
    id: "goblin_raider",
    name: "Goblin Predone",
    description: "Rapido, sporco e opportunista, attacca in piccoli branchi.",
    hitPoints: 9,
    attackBonus: 2,
    defense: 11,
    damageMin: 1,
    damageMax: 4,
    goldReward: 6,
    loot: [
      { itemId: "pugnale_1", itemName: "Pugnale \u2605", quantity: 1, category: "weapon", rarity: "common", effectIds: [] },
      { itemId: "coins", itemName: "Monete", quantity: 6, category: "treasure", rarity: "common", effectIds: ["trade_value"] }
    ]
  },
  {
    id: "cultist_adept",
    name: "Adepto del Culto",
    description: "Fanatico ritualista protetto da simboli e formule proibite.",
    hitPoints: 12,
    attackBonus: 4,
    defense: 10,
    damageMin: 2,
    damageMax: 5,
    goldReward: 14,
    loot: [
      { itemId: "arcane_scroll", itemName: "Pergamena arcana", quantity: 1, category: "treasure", rarity: "rare", effectIds: ["check_bonus"] },
      { itemId: "coins", itemName: "Monete", quantity: 14, category: "treasure", rarity: "common", effectIds: ["trade_value"] }
    ]
  },
  {
    id: "cave_wolf",
    name: "Lupo delle Grotte",
    description: "Predatore nervoso e feroce, ottimo in imboscata.",
    hitPoints: 11,
    attackBonus: 3,
    defense: 12,
    damageMin: 2,
    damageMax: 5,
    goldReward: 3,
    loot: [{ itemId: "wolf_pelt", itemName: "Pelle di lupo", quantity: 1, category: "material", familyId: "leather", variantId: "wolf_pelt", rarity: "common", effectIds: ["trade_value"] }]
  },
  {
    id: "swamp_leech",
    name: "Sanguisuga di Torbiera",
    description: "Massa viscida che si aggrappa agli stivali e logora lentamente le risorse.",
    hitPoints: 8,
    attackBonus: 1,
    defense: 10,
    damageMin: 1,
    damageMax: 3,
    goldReward: 2,
    loot: [{ itemId: "leech_gland", itemName: "Ghiandola di sanguisuga", quantity: 1, category: "utility", rarity: "common", effectIds: [] }]
  },
  {
    id: "ash_cultist",
    name: "Cultista della Brace",
    description: "Fanatico segnato dal fumo, usa polveri e lame rituali.",
    hitPoints: 13,
    attackBonus: 4,
    defense: 11,
    damageMin: 2,
    damageMax: 6,
    goldReward: 13,
    loot: [{ itemId: "warding_dust", itemName: "Polvere di guardia", quantity: 1, category: "consumable", rarity: "rare", effectIds: ["defense_potion"] }]
  },
  {
    id: "grave_devotee",
    name: "Devoto Annegato",
    description: "Cadavere rituale emerso dal fango, legato a piccoli campanelli di rame.",
    hitPoints: 12,
    attackBonus: 3,
    defense: 11,
    damageMin: 2,
    damageMax: 5,
    goldReward: 7,
    loot: [{ itemId: "coins", itemName: "Monete", quantity: 7, category: "treasure", rarity: "common", effectIds: ["trade_value"] }]
  },
  {
    id: "mud_revenant",
    name: "Revenant del Chiostro",
    description: "Un morto gravato da catene bronzee e rancore antico.",
    hitPoints: 16,
    attackBonus: 4,
    defense: 12,
    damageMin: 3,
    damageMax: 6,
    goldReward: 9,
    loot: [{ itemId: "coins", itemName: "Monete", quantity: 9, category: "treasure", rarity: "common", effectIds: ["trade_value"] }]
  },
  {
    id: "bell_warden",
    name: "Custode del Bronzo",
    description: "Guardiano boss lento ma inesorabile, armato di catena e colpa.",
    hitPoints: 24,
    attackBonus: 5,
    defense: 13,
    damageMin: 4,
    damageMax: 8,
    goldReward: 20,
    loot: [{ itemId: "ritual_gem", itemName: "Gemma rituale", quantity: 1, category: "relic", rarity: "rare", effectIds: ["trade_value"] }]
  },
  {
    id: "tower_goblin",
    name: "Goblin delle Cancellate",
    description: "Piccolo predone nervoso, adatto ai primi scontri di ingresso.",
    hitPoints: 12,
    attackBonus: 1,
    defense: 10,
    damageMin: 1,
    damageMax: 3,
    goldReward: 7,
    loot: [{ itemId: "healing_potion", itemName: "Pozione curativa", quantity: 1, category: "consumable", rarity: "common", effectIds: ["restore_hp"] }]
  },
  {
    id: "mud_guardian",
    name: "Guardiano delle Cantine",
    description: "Creatura deforme delle fondamenta, pesante ma tenace.",
    hitPoints: 16,
    attackBonus: 2,
    defense: 11,
    damageMin: 2,
    damageMax: 4,
    goldReward: 10,
    loot: [{ itemId: "healing_potion", itemName: "Pozione curativa", quantity: 1, category: "consumable", rarity: "common", effectIds: ["restore_hp"] }]
  },
  {
    id: "obsidian_guard",
    name: "Guardia d'Ossidiana",
    description: "Statua animata che presidia osservatori e soglie rituali.",
    hitPoints: 22,
    attackBonus: 3,
    defense: 13,
    damageMin: 3,
    damageMax: 5,
    goldReward: 15,
    loot: [{ itemId: "miner_helm", itemName: "Elmo da minatore", quantity: 1, category: "helm", rarity: "common", effectIds: ["crit_guard"] }]
  },
  {
    id: "ash_magister",
    name: "Magister di Cenere",
    description: "Boss ritualista che chiude l'avventura con una sfida pesante.",
    hitPoints: 26,
    attackBonus: 4,
    defense: 13,
    damageMin: 3,
    damageMax: 7,
    goldReward: 25,
    loot: [
      { itemId: "spada_2", itemName: "Spada \u2605\u2605", quantity: 1, category: "weapon", rarity: "uncommon", effectIds: [] },
      { itemId: "chain_mail", itemName: "Cotta di maglia rinforzata", quantity: 1, category: "armor", rarity: "uncommon", effectIds: ["defense_surge"] }
    ]
  },
  {
    id: "crypt_spider",
    name: "Ragno di Cripta",
    description: "Ragno pallido e veloce, ottimo per minacce improvvise nei corridoi.",
    hitPoints: 10,
    attackBonus: 3,
    defense: 12,
    damageMin: 1,
    damageMax: 4,
    goldReward: 5,
    loot: [{ itemId: "venom_sac", itemName: "Sacca di veleno", quantity: 1, category: "utility", rarity: "uncommon", effectIds: [] }]
  },
  {
    id: "bandit_captain",
    name: "Capobanda dell'Argine",
    description: "Combattente umano aggressivo, piu forte di un semplice predone.",
    hitPoints: 18,
    attackBonus: 4,
    defense: 12,
    damageMin: 3,
    damageMax: 6,
    goldReward: 18,
    loot: [{ itemId: "camp_buckler", itemName: "Buckler da campo", quantity: 1, category: "shield", rarity: "common", effectIds: ["defense_surge"] }]
  },
  {
    id: "fen_hag",
    name: "Maga della Torbiera",
    description: "Avversario raro e maledetto, abile nel logorare e controllare il ritmo.",
    hitPoints: 19,
    attackBonus: 5,
    defense: 12,
    damageMin: 2,
    damageMax: 7,
    goldReward: 22,
    loot: [{ itemId: "arcane_scroll", itemName: "Pergamena arcana", quantity: 1, category: "treasure", rarity: "rare", effectIds: ["check_bonus"] }]
  },
  {
    id: "catacomb_knight",
    name: "Cavaliere di Catacomba",
    description: "Non-morto corazzato, difensivo e adatto a scontri da midgame.",
    hitPoints: 21,
    attackBonus: 4,
    defense: 14,
    damageMin: 3,
    damageMax: 6,
    goldReward: 19,
    loot: [{ itemId: "chain_mail", itemName: "Cotta di maglia rinforzata", quantity: 1, category: "armor", rarity: "uncommon", effectIds: ["defense_surge"] }]
  },
  {
    id: "moon_hound",
    name: "Segugio Lunare",
    description: "Bestia rapida da inseguimento, perfetta per scene di fuga o imboscata.",
    hitPoints: 14,
    attackBonus: 4,
    defense: 13,
    damageMin: 2,
    damageMax: 5,
    goldReward: 8,
    loot: [{ itemId: "wolf_pelt", itemName: "Pelle di lupo", quantity: 1, category: "material", familyId: "leather", variantId: "wolf_pelt", rarity: "common", effectIds: ["trade_value"] }]
  }
];

const LOOT_PRESETS = [
  // ── consumabili / utensili ───────────────────────────────────────────────
  { id: "coins",          name: "Monete",                category: "treasure",   rarity: "common",   effectIds: ["trade_value"] },
  { id: "healing_potion", name: "Pozione curativa",      category: "consumable", rarity: "common",   effectIds: ["restore_hp"] },
  { id: "alchemic_fire",  name: "Fuoco alchemico",       category: "consumable", rarity: "rare",     effectIds: ["direct_damage", "apply_staggered"] },
  { id: "warding_dust",   name: "Polvere di guardia",    category: "consumable", rarity: "rare",     effectIds: ["defense_potion"] },
  { id: "phoenix_tear",   name: "Lacrima della Fenice",  category: "consumable", rarity: "mythic",   effectIds: ["restore_all"] },
  { id: "torch",          name: "Torcia",                category: "utility",    rarity: "common",   effectIds: [] },
  { id: "travel_rations", name: "Razioni da viaggio",    category: "utility",    rarity: "common",   effectIds: [] },
  // ── armi light ──────────────────────────────────────────────────────────
  { id: "dagger",         name: "Pugnale",               category: "weapon",     rarity: "common",   effectIds: [] },
  { id: "long_dagger",    name: "Pugnale lungo",         category: "weapon",     rarity: "uncommon", effectIds: ["cleanse_exposed"] },
  { id: "shadow_blade",   name: "Lama d'ombra",          category: "weapon",     rarity: "rare",     effectIds: ["crit_guard", "apply_staggered"] },
  { id: "viper_fang",     name: "Zanna del Vipera",      category: "weapon",     rarity: "mythic",   effectIds: ["guaranteed_crit", "apply_staggered"] },
  // ── armi balanced ───────────────────────────────────────────────────────
  { id: "rusted_blade",   name: "Spada corrosa",         category: "weapon",     rarity: "common",   effectIds: [] },
  { id: "short_sword",    name: "Spada corta",           category: "weapon",     rarity: "uncommon", effectIds: [] },
  { id: "longsword",      name: "Spada lunga",           category: "weapon",     rarity: "rare",     effectIds: ["cleanse_exposed"] },
  { id: "ancestor_blade", name: "Lama degli Antenati",   category: "weapon",     rarity: "mythic",   effectIds: ["focus_surge", "bonus_damage"] },
  // ── armi heavy ──────────────────────────────────────────────────────────
  { id: "hatchet",        name: "Accetta",               category: "weapon",     rarity: "common",   effectIds: [] },
  { id: "battle_axe",     name: "Ascia da guerra",       category: "weapon",     rarity: "uncommon", effectIds: [] },
  { id: "war_axe",        name: "Ascia pesante",         category: "weapon",     rarity: "rare",     effectIds: ["apply_staggered"] },
  { id: "great_axe",      name: "Grande ascia",          category: "weapon",     rarity: "mythic",   effectIds: ["apply_staggered", "bonus_damage"] },
  // ── armi ranged ─────────────────────────────────────────────────────────
  { id: "shortbow",       name: "Arco leggero",          category: "weapon",     rarity: "common",   effectIds: [] },
  { id: "short_bow",      name: "Arco corto",            category: "weapon",     rarity: "uncommon", effectIds: [] },
  { id: "hunter_bow",     name: "Arco del cacciatore",   category: "weapon",     rarity: "rare",     effectIds: ["guaranteed_crit"] },
  { id: "war_bow",        name: "Arco da guerra",        category: "weapon",     rarity: "mythic",   effectIds: ["apply_staggered", "bonus_damage"] },
  // ── armi ritual ─────────────────────────────────────────────────────────
  { id: "walking_staff",  name: "Bastone da viaggio",    category: "weapon",     rarity: "common",   effectIds: ["recover_boost"] },
  { id: "iron_staff",     name: "Bastone ferrato",       category: "weapon",     rarity: "uncommon", effectIds: ["recover_boost"] },
  { id: "elder_staff",    name: "Bastone degli Anziani", category: "weapon",     rarity: "rare",     effectIds: ["recover_boost", "check_bonus"] },
  { id: "void_staff",     name: "Bastone del Vuoto",     category: "weapon",     rarity: "mythic",   effectIds: ["recover_boost", "focus_surge"] },
  // ── armature / protezioni ───────────────────────────────────────────────
  { id: "camp_buckler",   name: "Buckler da campo",      category: "shield",     rarity: "common",   effectIds: [] },
  { id: "iron_shield",    name: "Scudo di ferro",        category: "shield",     rarity: "uncommon", effectIds: ["guarded_surge"] },
  { id: "tower_shield",   name: "Scudo a torre",         category: "shield",     rarity: "rare",     effectIds: ["guarded_surge", "crit_guard"] },
  { id: "obsidian_aegis", name: "Egida di Ossidiana",    category: "shield",     rarity: "mythic",   effectIds: ["ember_retaliation", "guarded_surge", "crit_guard"] },
  { id: "miner_helm",     name: "Elmo da minatore",      category: "helm",       rarity: "common",   effectIds: ["crit_guard"] },
  { id: "bronze_helm",    name: "Elmo di bronzo",        category: "helm",       rarity: "uncommon", effectIds: ["crit_guard"] },
  { id: "war_helm",       name: "Elmo da guerra",        category: "helm",       rarity: "rare",     effectIds: ["crit_guard", "guarded_surge"] },
  { id: "hobnail_boots",  name: "Stivali chiodati",      category: "boots",      rarity: "uncommon", effectIds: ["fatigue_relief", "guarded_surge"] },
  { id: "trail_boots",    name: "Stivali da pista",      category: "boots",      rarity: "uncommon", effectIds: ["fatigue_relief", "focus_surge"] },
  { id: "iron_boots",     name: "Stivali ferrati",       category: "boots",      rarity: "rare",     effectIds: ["fatigue_relief", "guarded_surge"] },
  { id: "forge_boots",    name: "Stivali della Forgia",  category: "boots",      rarity: "mythic",   effectIds: ["fatigue_relief", "guarded_surge", "ember_retaliation"] },
  { id: "traveler_cloak", name: "Mantello del viandante",category: "cloak",      rarity: "uncommon", effectIds: ["recover_boost", "cleanse_exposed"] },
  { id: "shadow_cloak",   name: "Mantello d'ombra",      category: "cloak",      rarity: "rare",     effectIds: ["recover_boost", "cleanse_exposed", "escape"] },
  { id: "veil_of_ashes",  name: "Velo delle Ceneri",     category: "cloak",      rarity: "mythic",   effectIds: ["recover_boost", "cleanse_exposed", "escape"] },
  { id: "silver_ring",    name: "Anello d'argento",      category: "ring",       rarity: "uncommon", effectIds: ["defense_surge", "focus_surge"] },
  { id: "seal_ring",      name: "Anello del sigillo",    category: "ring",       rarity: "rare",     effectIds: ["check_bonus"] },
  { id: "void_ring",      name: "Anello del Vuoto",      category: "ring",       rarity: "mythic",   effectIds: ["defense_surge", "recover_boost", "focus_surge"] },
  // ── chiavi / tesori / reliquie ───────────────────────────────────────────
  { id: "ancient_key",    name: "Chiave antica",         category: "key",        rarity: "uncommon", effectIds: ["key_access"], lockId: "magister_archive" },
  { id: "arcane_scroll",  name: "Pergamena arcana",      category: "treasure",   rarity: "rare",     effectIds: ["check_bonus", "trade_value"] },
  { id: "ritual_gem",     name: "Gemma rituale",         category: "relic",      rarity: "rare",     effectIds: ["trade_value"] },
  { id: "wolf_pelt",      name: "Pelle di lupo",         category: "material",   rarity: "common",   familyId: "leather", variantId: "wolf_pelt", effectIds: ["trade_value"] },
  { id: "eclipse_blade",  name: "Lama dell'Eclisse",     category: "relic",      rarity: "unique",   effectIds: ["bonus_damage", "guaranteed_crit", "apply_staggered"] },
  { id: "crown_of_embers",name: "Corona delle Braci",    category: "relic",      rarity: "mythic",   effectIds: ["ember_retaliation", "crit_guard", "guarded_surge"] },
  { id: "custom",         name: "Personalizzato",        category: "",           rarity: "common",   effectIds: [] }
];

const EXAMPLE_ADVENTURES = [
  {
    value: "",
    label: "Nessuna"
  },
  {
    value: "il-pozzo-nero",
    label: "Il Pozzo Nero",
    path: "./examples/il-pozzo-nero.json"
  },
  {
    value: "la-campana-sepolta",
    label: "La Campana Sepolta",
    path: "./examples/la-campana-sepolta.json"
  }
];

const MONSTER_STAT_ARCHETYPES = [
  { id: "gregario",        label: "Gregario",          icon: "", hint: "carne da macello",                    hitPoints:  7, attackBonus: 1, defense: 10, damageMin: 1, damageMax: 3, goldReward:  4, abilityIds: [],                                        hasBerserkerPhase: false },
  { id: "predatore",       label: "Predatore",         icon: "", hint: "veloce, colpisce e scappa",           hitPoints: 10, attackBonus: 3, defense: 12, damageMin: 2, damageMax: 5, goldReward:  7, abilityIds: ["enemy_brutal_charge"],                   hasBerserkerPhase: false },
  { id: "soldato",         label: "Soldato",           icon: "",  hint: "combattente equilibrato",            hitPoints: 14, attackBonus: 3, defense: 12, damageMin: 2, damageMax: 6, goldReward: 11, abilityIds: [],                                        hasBerserkerPhase: false },
  { id: "bruto",           label: "Bruto",             icon: "", hint: "lento, corazzato, letale",            hitPoints: 20, attackBonus: 2, defense: 13, damageMin: 4, damageMax: 8, goldReward: 12, abilityIds: ["enemy_armor_break"],                     hasBerserkerPhase: false },
  { id: "assassino",       label: "Assassino",         icon: "",  hint: "fragile ma letale",                  hitPoints:  9, attackBonus: 5, defense: 10, damageMin: 3, damageMax: 7, goldReward: 14, abilityIds: ["enemy_draining_claws"],                  hasBerserkerPhase: false },
  { id: "ritualista",      label: "Ritualista",        icon: "", hint: "caster oscuro, minaccia psicologica", hitPoints: 12, attackBonus: 4, defense: 11, damageMin: 2, damageMax: 6, goldReward: 16, abilityIds: ["enemy_howl_of_dread"],                   hasBerserkerPhase: false },
  { id: "guardiano_elite", label: "Guardiano d'Elite", icon: "",  hint: "sub-boss tenace",                    hitPoints: 22, attackBonus: 4, defense: 13, damageMin: 3, damageMax: 7, goldReward: 18, abilityIds: ["enemy_enrage"],                          hasBerserkerPhase: false },
  { id: "boss",            label: "Boss",              icon: "", hint: "scontro finale, fase berserk",        hitPoints: 28, attackBonus: 5, defense: 14, damageMin: 4, damageMax: 9, goldReward: 25, abilityIds: ["enemy_howl_of_dread", "enemy_enrage"],    hasBerserkerPhase: true  }
];

const NODE_WIDTH = 138;
const NODE_HEIGHT = 34;
const CHOICE_BUS_GAP = 72;    // board px from scene right edge to event node center
const CHOICE_SPACING = 44;    // board px vertical spacing between event nodes
const CHOICE_NODE_R = 13;     // compact mode radius
const FLOW_EVENT_NODE_WIDTH = 138;
const FLOW_EVENT_NODE_HEIGHT = 34;
const FLOW_EVENT_ADD_NODE_WIDTH = 82;
const FLOW_EVENT_ADD_NODE_HEIGHT = 28;
const CHAPTER_GROUP_CARD_WIDTH = 168;
const CHAPTER_GROUP_CARD_HEIGHT = 56;
const CREATE_MONSTER_OPTION = "__create_new__";
const SCENE_IMAGE_ASPECT_RATIO = 2.48;
const SCENE_IMAGE_TARGET_WIDTH = 1200;
const SCENE_IMAGE_TARGET_HEIGHT = Math.round(SCENE_IMAGE_TARGET_WIDTH / SCENE_IMAGE_ASPECT_RATIO);
const FLOW_ZOOM_MIN = 0.2;
const FLOW_ZOOM_MAX = 1.8;
const FLOW_ZOOM_STEP = 0.1;
const FLOW_LINK_VIEWPORT_MARGIN = 260;
const FLOW_LINK_VIRTUALIZE_SCENE_THRESHOLD = 12;
const FLOW_LINK_VIRTUALIZE_COUNT_THRESHOLD = 22;
const FLOW_LINK_DRAG_THROTTLE_MS = 16;
const FLOW_COMPACT_ZOOM_THRESHOLD = 0.38;
const FLOW_WORKSPACE_MIN_WIDTH = 760;
const FLOW_WORKSPACE_MIN_HEIGHT = 480;
const FLOW_WORKSPACE_PADDING = 32;
const FLOW_COORD_LIMIT = 200000;
const SCENE_SPAWN_STEP_X = 320;
const SCENE_SPAWN_STEP_Y = 220;
const FLOW_AUTO_SCROLL_EDGE = 72;
const FLOW_AUTO_SCROLL_MAX_SPEED = 18;
const FLOW_DRAG_START_THRESHOLD = 6;
const LEGACY_LOCAL_PROJECT_KEY = "adventure_studio_project_v1";
const LOCAL_PROJECT_INDEX_KEY = "adventure_studio_project_index_v2";
const LOCAL_PROJECT_LAST_KEY = "adventure_studio_last_project_id_v2";
const LOCAL_PROJECT_PREFIX = "adventure_studio_project_v2_";
const TUTORIAL_SEEN_KEY = "adventure_studio_tutorial_seen_v1";
const BOARD_EVENT_NODE_KINDS = new Set([
  "transition",
  "combat",
  "skillcheck",
  "requirement",
  "loot",
  "condition",
  "shop",
  "dialogue"
]);

const state = {
  adventure: {
    id: "new-adventure",
    version: 2,
    title: "Nuova Avventura",
    description: "",
    tags: [],
    adaptivePowerMultiplier: 0.12,
    startingDescriptionId: "",
    allowCarryOverLoadout: true,
    allowFreshStart: true,
    forceLoadout: false,
    restoreLoadoutOnEnd: false,
    starterKitItems: [],
    descriptions: [],
    eventNodes: [],
    chapterGroups: []
  },
  selectedDescriptionId: null,
  drag: null,
  dragCandidate: null,
  linkDraft: null,
  ui: {
    strictAlpha: true,
    autosaveAt: null,
    sceneDirty: false,
    sceneSavedAt: null,
    jsonRenderTimer: null,
    jsonRenderOptions: { syncScene: true },
    flowCardRefreshTimer: null,
    flowLinksFrame: null,
    lastFlowLinksDragRenderAt: 0,
    flowAutoScrollFrame: null,
    sceneImageFrameTimer: null,
    saveAdventureFeedbackTimer: null,
    flowZoom: 1,
    currentProjectId: null,
    projectPickerOpen: false,
    flowBoardBounds: null,
    selectedEventRef: null,
    selectedGraphNodeIds: [],
    selectionBox: null,
    copiedDescriptionPayload: null,
    lastCreatedDescriptionId: null
  }
};

function createEmptyAdventure() {
  return {
    id: "new-adventure",
    version: 2,
    title: "Nuova Avventura",
    description: "",
    tags: [],
    adaptivePowerMultiplier: 0.12,
    startingDescriptionId: "",
    allowCarryOverLoadout: true,
    allowFreshStart: true,
    forceLoadout: false,
    restoreLoadoutOnEnd: false,
    starterKitItems: [],
    descriptions: [],
    eventNodes: [],
    chapterGroups: []
  };
}

function createProjectId() {
  return `project_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

function projectStorageKey(projectId) {
  return `${LOCAL_PROJECT_PREFIX}${projectId}`;
}

function readProjectIndex() {
  try {
    const raw = window.localStorage.getItem(LOCAL_PROJECT_INDEX_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function writeProjectIndex(index) {
  window.localStorage.setItem(LOCAL_PROJECT_INDEX_KEY, JSON.stringify(index));
}

function setLastProjectId(projectId) {
  if (!projectId) return;
  window.localStorage.setItem(LOCAL_PROJECT_LAST_KEY, projectId);
}

function getLastProjectId() {
  try {
    return window.localStorage.getItem(LOCAL_PROJECT_LAST_KEY);
  } catch (error) {
    return null;
  }
}

function projectSummaryFromPayload(projectId, payload) {
  const adventure = payload?.adventure || createEmptyAdventure();
  return {
    projectId,
    title: normalizeString(adventure.title) || "Nuova Avventura",
    description: normalizeString(adventure.description) || "",
    sceneCount: Array.isArray(adventure.descriptions) ? adventure.descriptions.length : 0,
    updatedAt: payload?.ui?.autosaveAt || new Date().toISOString()
  };
}

function upsertProjectSummary(summary) {
  const index = readProjectIndex().filter((entry) => entry?.projectId !== summary.projectId);
  index.push(summary);
  index.sort((left, right) => String(right.updatedAt || "").localeCompare(String(left.updatedAt || "")));
  writeProjectIndex(index);
}

function removeProjectSummary(projectId) {
  const index = readProjectIndex().filter((entry) => entry?.projectId !== projectId);
  writeProjectIndex(index);
  if (getLastProjectId() === projectId) {
    const nextProjectId = index[0]?.projectId || "";
    window.localStorage.setItem(LOCAL_PROJECT_LAST_KEY, nextProjectId);
  }
}

function initializeEmptyWorkspace() {
  state.adventure = createEmptyAdventure();
  state.selectedDescriptionId = null;
  state.selectedDescriptionId = null;
  state.drag = null;
  state.dragCandidate = null;
  state.linkDraft = null;
  state.ui.autosaveAt = null;
  state.ui.sceneDirty = false;
  state.ui.sceneSavedAt = null;
  state.ui.flowZoom = 1;
  state.ui.currentProjectId = null;
  state.ui.selectedEventRef = null;
  state.ui.selectedGraphNodeIds = [];
  state.ui.selectionBox = null;
  state.ui.lastCreatedDescriptionId = null;
}

function openAdventureProject(payload, {
  projectId = createProjectId(),
  autosaveAt = null,
  strictAlpha = true,
  flowZoom = 1,
  selectedDescriptionId = null,
  persist = true
} = {}) {
  state.adventure = normalizeAdventureImport(payload);
  promoteInlineEventsToDetachedGraph(state.adventure);
  cleanupChapterGroups();
  state.selectedDescriptionId = selectedDescriptionId || state.adventure.startingDescriptionId || state.adventure.descriptions[0]?.id || null;
  state.drag = null;
  state.dragCandidate = null;
  state.linkDraft = null;
  state.ui.autosaveAt = autosaveAt;
  state.ui.sceneDirty = false;
  state.ui.sceneSavedAt = null;
  state.ui.strictAlpha = strictAlpha;
  state.ui.flowZoom = Math.min(FLOW_ZOOM_MAX, Math.max(FLOW_ZOOM_MIN, Number(flowZoom || 1)));
  state.ui.selectedGraphNodeIds = [];
  state.ui.selectionBox = null;
  state.ui.currentProjectId = projectId;
  state.ui.selectedEventRef = null;
  state.ui.lastCreatedDescriptionId = state.adventure.descriptions[state.adventure.descriptions.length - 1]?.id || null;
  if (persist) {
    persistLocalProject({ syncScene: false });
  }
  updateDocumentTitle();
  render();
  renderProjectPicker();
  showProjectPicker(false);
}

function updateDocumentTitle() {
  const title = state.adventure?.title?.trim();
  document.title = title
    ? `${title} — Adventure Studio`
    : "Adventure Studio — .txt-Master";
}

function restoreProjectById(projectId) {
  if (!projectId) return false;
  try {
    const raw = window.localStorage.getItem(projectStorageKey(projectId));
    if (!raw) return false;
    const payload = JSON.parse(raw);
    if (!payload?.adventure) return false;
    openAdventureProject(payload.adventure, {
      projectId,
      autosaveAt: payload.ui?.autosaveAt || null,
      strictAlpha: payload.ui?.strictAlpha ?? true,
      flowZoom: payload.ui?.flowZoom || 1,
      selectedDescriptionId: payload.selectedDescriptionId || payload.selectedSceneId || null,
      persist: false
    });
    setLastProjectId(projectId);
    return true;
  } catch (error) {
    return false;
  }
}

function createFreshProjectFromScratch() {
  const shouldCreate = state.ui.currentProjectId
    ? window.confirm("Vuoi aprire un nuovo progetto separato? L'avventura corrente restera nell'archivio locale.")
    : true;
  if (!shouldCreate) return;
  const projectId = createProjectId();
  const baseAdventure = createEmptyAdventure();
  baseAdventure.id = projectId;
  baseAdventure.title = "Nuova Avventura";
  openAdventureProject(baseAdventure, { projectId, persist: false });
  createDescription();
  saveAdventureProject();
}

function duplicateProject(projectId) {
  try {
    const raw = window.localStorage.getItem(projectStorageKey(projectId));
    if (!raw) return;
    const payload = JSON.parse(raw);
    if (!payload?.adventure) return;
    const duplicatedAdventure = normalizeAdventureImport(payload.adventure);
    duplicatedAdventure.title = `${duplicatedAdventure.title || "Nuova Avventura"} (Copia)`;
    const nextProjectId = createProjectId();
    duplicatedAdventure.id = nextProjectId;
    openAdventureProject(duplicatedAdventure, {
      projectId: nextProjectId,
      strictAlpha: payload.ui?.strictAlpha ?? true,
      flowZoom: payload.ui?.flowZoom || 1,
      persist: true
    });
  } catch (error) {
    window.alert("Impossibile duplicare il progetto locale.");
  }
}

function deleteProject(projectId) {
  const summary = readProjectIndex().find((entry) => entry.projectId === projectId);
  const shouldDelete = window.confirm(`Vuoi davvero eliminare il progetto locale "${summary?.title || "senza titolo"}"?`);
  if (!shouldDelete) return;
  window.localStorage.removeItem(projectStorageKey(projectId));
  removeProjectSummary(projectId);
  if (state.ui.currentProjectId === projectId) {
    initializeEmptyWorkspace();
    render();
  }
  renderProjectPicker();
  showProjectPicker(true);
}

function migrateLegacyLocalProjectIfNeeded() {
  try {
    const raw = window.localStorage.getItem(LEGACY_LOCAL_PROJECT_KEY);
    if (!raw) return;
    const payload = JSON.parse(raw);
    if (!payload?.adventure) {
      window.localStorage.removeItem(LEGACY_LOCAL_PROJECT_KEY);
      return;
    }
    const projectId = createProjectId();
    const nextPayload = {
      adventure: normalizeAdventureImport(payload.adventure),
      selectedDescriptionId: payload.selectedDescriptionId || payload.selectedSceneId || null,
      ui: {
        strictAlpha: payload.ui?.strictAlpha ?? true,
        autosaveAt: payload.ui?.autosaveAt || new Date().toISOString(),
        flowZoom: payload.ui?.flowZoom || 1
      }
    };
    nextPayload.adventure.id = projectId;
    window.localStorage.setItem(projectStorageKey(projectId), JSON.stringify(nextPayload));
    upsertProjectSummary(projectSummaryFromPayload(projectId, nextPayload));
    setLastProjectId(projectId);
    window.localStorage.removeItem(LEGACY_LOCAL_PROJECT_KEY);
  } catch (error) {
    window.localStorage.removeItem(LEGACY_LOCAL_PROJECT_KEY);
  }
}

function renderProjectPicker() {
  if (!els.projectPickerList || !els.projectPickerEmpty) return;
  const index = readProjectIndex().sort((left, right) => String(right.updatedAt || "").localeCompare(String(left.updatedAt || "")));
  const lastProjectId = getLastProjectId();
  els.projectPickerList.innerHTML = "";
  els.projectPickerEmpty.classList.toggle("hidden", index.length > 0);
  if (!index.length) return;

  const fragment = document.createDocumentFragment();
  index.forEach((entry) => {
    const article = document.createElement("article");
    article.className = "project-picker-card";
    const isCurrent = entry.projectId === state.ui.currentProjectId;
    const isLast = entry.projectId === lastProjectId;
    article.innerHTML = `
      <div class="project-picker-card-head">
        <strong>${entry.title || "Nuova Avventura"}</strong>
        <small>${isCurrent ? "Aperto ora" : isLast ? "Ultimo aperto" : "Locale"}</small>
      </div>
      <p class="hint">${entry.description || "Nessuna descrizione ancora."}</p>
      <div class="project-picker-meta">
        <span>${entry.sceneCount || 0} nodi</span>
        <span>Aggiornato ${formatAutosaveTime(entry.updatedAt)}</span>
      </div>
      <div class="project-picker-actions-row">
        <button type="button" data-action="open-project">Apri</button>
        <button type="button" data-action="duplicate-project" class="small">Duplica</button>
        <button type="button" data-action="delete-project" class="danger small">Elimina</button>
      </div>
    `;
    article.querySelector('[data-action="open-project"]').addEventListener("click", () => restoreProjectById(entry.projectId));
    article.querySelector('[data-action="duplicate-project"]').addEventListener("click", () => duplicateProject(entry.projectId));
    article.querySelector('[data-action="delete-project"]').addEventListener("click", () => deleteProject(entry.projectId));
    fragment.appendChild(article);
  });
  els.projectPickerList.appendChild(fragment);
}

function showProjectPicker(visible) {
  state.ui.projectPickerOpen = Boolean(visible);
  els.projectPickerOverlay?.classList.toggle("hidden", !visible);
  if (els.closeProjectPickerBtn) {
    els.closeProjectPickerBtn.disabled = !state.ui.currentProjectId;
  }
}

const els = {
  adventureTitle: document.getElementById("adventure-title"),
  adventureDescription: document.getElementById("adventure-description"),
  adventureTag1: document.getElementById("adventure-tag-1"),
  adventureTag2: document.getElementById("adventure-tag-2"),
  adventureTag3: document.getElementById("adventure-tag-3"),
  adventureAdaptiveMultiplier: document.getElementById("adventure-adaptive-multiplier"),
  exampleAdventureSelect: document.getElementById("example-adventure-select"),
  loadExampleBtn: document.getElementById("load-example-btn"),
  importJsonBtn: document.getElementById("import-json-btn"),
  importJsonInput: document.getElementById("import-json-input"),
  adventureCarryOver: document.getElementById("adventure-carry-over"),
  adventureFreshStart: document.getElementById("adventure-fresh-start"),
  adventureForceLoadout: document.getElementById("adventure-force-loadout"),
  adventureRestoreLoadout: document.getElementById("adventure-restore-loadout"),
  restoreLoadoutRow: document.getElementById("restore-loadout-row"),
  loadoutModeSummary: document.getElementById("loadout-mode-summary"),
  alphaStrictValidation: document.getElementById("alpha-strict-validation"),
  restoreLocalBtn: document.getElementById("restore-local-btn"),
  resetProjectBtn: document.getElementById("reset-project-btn"),
  autosaveIndicator: document.getElementById("autosave-indicator"),
  projectPickerOverlay: document.getElementById("project-picker-overlay"),
  projectPickerList: document.getElementById("project-picker-list"),
  projectPickerEmpty: document.getElementById("project-picker-empty"),
  createProjectBtn: document.getElementById("create-project-btn"),
  pickerImportJsonBtn: document.getElementById("picker-import-json-btn"),
  closeProjectPickerBtn: document.getElementById("close-project-picker-btn"),
  starterKitList: document.getElementById("starter-kit-list"),
  addStarterKitBtn: document.getElementById("add-starter-kit-btn"),
  addSceneBtn: document.getElementById("add-scene-btn"),
  validateAdventureBtn: document.getElementById("validate-adventure-btn"),
  exportJsonBtn: document.getElementById("export-json-btn"),
  saveAdventureBtn: document.getElementById("save-adventure-btn"),
  saveFab: document.getElementById("save-fab"),
  saveToast: document.getElementById("save-toast"),
  validationSummary: document.getElementById("validation-summary"),
  validationList: document.getElementById("validation-list"),
  monsterPresetSelect: document.getElementById("monster-preset-select"),
  addMonsterFromPresetBtn: document.getElementById("add-monster-from-preset-btn"),
  monsterEditorPresetSelect: document.getElementById("monster-editor-preset-select"),
  applyMonsterPresetBtn: document.getElementById("apply-monster-preset-btn"),
  monsterList: document.getElementById("monster-list"),
  lootPresetSelect: document.getElementById("loot-preset-select"),
  flowBoard: document.getElementById("flow-board"),
  choiceNodesLayer: document.getElementById("choice-nodes-layer"),
  flowStage: document.getElementById("flow-stage"),
  flowViewport: document.getElementById("flow-viewport"),
  flowCanvas: document.getElementById("flow-canvas"),
  flowLinks: document.getElementById("flow-links"),
  flowZoomOutBtn: document.getElementById("flow-zoom-out-btn"),
  flowZoomInBtn: document.getElementById("flow-zoom-in-btn"),
  flowZoomLabel: document.getElementById("flow-zoom-label"),
  groupChapterBtn: document.getElementById("group-chapter-btn"),
  sceneEmpty: document.getElementById("scene-empty"),
  sceneEditor: document.getElementById("scene-editor"),
  scenePanelTitle: document.getElementById("scene-panel-title"),
  sceneTypeBadge: document.getElementById("scene-type-badge"),
  addSceneImageBtn: document.getElementById("add-scene-image-btn"),
  sceneImageInput: document.getElementById("scene-image-input"),
  sceneSaveStatus: document.getElementById("scene-save-status"),
  deleteSceneBtn: document.getElementById("delete-scene-btn"),
  sceneKind: document.getElementById("scene-kind"),
  sceneTitle: document.getElementById("scene-title"),
  sceneOpeningText: document.getElementById("scene-opening-text"),
  sceneImagePreview: document.getElementById("scene-image-preview"),
  sceneImageThumb: document.getElementById("scene-image-thumb"),
  sceneImageName: document.getElementById("scene-image-name"),
  sceneImageZoom: document.getElementById("scene-image-zoom"),
  sceneImageFocusX: document.getElementById("scene-image-focus-x"),
  sceneImageFocusY: document.getElementById("scene-image-focus-y"),
  replaceSceneImageBtn: document.getElementById("replace-scene-image-btn"),
  removeSceneImageBtn: document.getElementById("remove-scene-image-btn"),
  sceneCombatConfig: document.getElementById("scene-combat-config"),
  combatGroupList: document.getElementById("combat-group-list"),
  addCombatGroupBtn: document.getElementById("add-combat-group-btn"),
  sceneOutcomesSection: document.getElementById("scene-outcomes-section"),
  sceneOutcomesSummary: document.getElementById("scene-outcomes-summary"),
  sceneOutcomesHint: document.getElementById("scene-outcomes-hint"),
  sceneOutcomesList: document.getElementById("scene-outcomes-list"),
  sceneLootList: document.getElementById("scene-loot-list"),
  addSceneLootBtn: document.getElementById("add-scene-loot-btn"),
  sceneChoicesSection: document.getElementById("scene-choices-section"),
  sceneChoicesSummary: document.getElementById("scene-choices-summary"),
  sceneChoicesHint: document.getElementById("scene-choices-hint"),
  choiceList: document.getElementById("choice-list"),
  addChoiceBtn: document.getElementById("add-choice-btn"),
  monsterEmpty: document.getElementById("monster-empty"),
  monsterEditor: document.getElementById("monster-editor"),
  deleteMonsterBtn: document.getElementById("delete-monster-btn"),
  monsterName: document.getElementById("monster-name"),
  monsterDescription: document.getElementById("monster-description"),
  monsterHp: document.getElementById("monster-hp"),
  monsterAttack: document.getElementById("monster-attack"),
  monsterDefense: document.getElementById("monster-defense"),
  monsterGold: document.getElementById("monster-gold"),
  monsterDamageMin: document.getElementById("monster-damage-min"),
  monsterDamageMax: document.getElementById("monster-damage-max"),
  monsterLootList: document.getElementById("monster-loot-list"),
  addMonsterLootBtn: document.getElementById("add-monster-loot-btn"),
  monsterAbilityCheckboxes: [
    document.getElementById("monster-ability-howl"),
    document.getElementById("monster-ability-charge"),
    document.getElementById("monster-ability-claws"),
    document.getElementById("monster-ability-regen"),
    document.getElementById("monster-ability-armorbreak"),
    document.getElementById("monster-ability-enrage")
  ],
  monsterBerserkerPhase: document.getElementById("monster-berserker-phase"),
  refreshJsonBtn: document.getElementById("refresh-json-btn"),
  toggleJsonBtn: document.getElementById("toggle-json-btn"),
  jsonOutput: document.getElementById("json-output"),
  flowSearch: document.getElementById("flow-search"),
  flowStats: document.getElementById("flow-stats"),
  minimapToggleBtn: document.getElementById("minimap-toggle-btn"),
  flowMinimapWrap: document.getElementById("flow-minimap-wrap"),
  flowMinimap: document.getElementById("flow-minimap"),
  duplicateSceneBtn: document.getElementById("duplicate-scene-btn"),
  sceneStatusDot: document.getElementById("scene-status-dot"),
  tutorialOverlay: document.getElementById("tutorial-overlay"),
  tutorialCloseBtn: document.getElementById("tutorial-close-btn"),
  tutorialSkipBtn: document.getElementById("tutorial-skip-btn"),
  hotkeyBadgeBtn: document.getElementById("hotkey-badge-btn"),
  hotkeyPanel: document.getElementById("hotkey-panel")
};

function bootstrap() {
  hydrateMonsterPresetSelect();
  hydrateLootPresetSelect();
  hydrateExampleAdventureSelect();
  bindMeta();
  bindSceneEditor();
  bindMonsterEditor();
  bindActions();
  bindKeyboardShortcuts();
  bindBoardPointerSystem();
  bindTutorial();
  bindHotkeyPanel();
  initMinimap();
  migrateLegacyLocalProjectIfNeeded();
  initializeEmptyWorkspace();
  render();
  renderProjectPicker();
  showProjectPicker(true);
}

function bindTutorial() {
  document.addEventListener("click", (e) => {
    if (e.target.id === "tutorial-close-btn") { closeTutorial(); return; }
    if (e.target.id === "tutorial-skip-btn") { skipTutorial(); return; }
    const overlay = document.getElementById("tutorial-overlay");
    if (overlay && e.target === overlay) skipTutorial();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    const overlay = document.getElementById("tutorial-overlay");
    if (overlay && !overlay.classList.contains("hidden")) skipTutorial();
  });
}

function maybeShowTutorial() {
  try {
    const seen = window.localStorage.getItem(TUTORIAL_SEEN_KEY);
    if (!seen) showTutorial();
  } catch (_) {}
}

function showTutorial() {
  const overlay = document.getElementById("tutorial-overlay");
  if (overlay) overlay.classList.remove("hidden");
}

function closeTutorial() {
  const overlay = document.getElementById("tutorial-overlay");
  if (!overlay) return;
  overlay.classList.add("hidden");
  try { window.localStorage.setItem(TUTORIAL_SEEN_KEY, "1"); } catch (_) {}
}

function skipTutorial() {
  const overlay = document.getElementById("tutorial-overlay");
  if (overlay) overlay.classList.add("hidden");
  try { window.localStorage.setItem(TUTORIAL_SEEN_KEY, "1"); } catch (_) {}
}

function bindHotkeyPanel() {
  document.addEventListener("click", (e) => {
    const badge = document.getElementById("hotkey-badge-btn");
    const panel = document.getElementById("hotkey-panel");
    if (!badge || !panel) return;
    if (e.target === badge || badge.contains(e.target)) {
      e.stopPropagation();
      panel.classList.toggle("hidden");
      return;
    }
    if (!panel.classList.contains("hidden") && !panel.contains(e.target)) {
      panel.classList.add("hidden");
    }
  });
}

function bindMeta() {
  els.adventureTitle.addEventListener("input", (e) => {
    state.adventure.title = e.target.value;
    if (!state.adventure.id) state.adventure.id = slugify(e.target.value || "new-adventure");
    updateDocumentTitle();
    scheduleJsonRender(280, { syncScene: false });
  });
  els.adventureDescription.addEventListener("input", (e) => {
    state.adventure.description = e.target.value;
    scheduleJsonRender(320, { syncScene: false });
  });
  [els.adventureTag1, els.adventureTag2, els.adventureTag3].forEach((input) => {
    input.addEventListener("input", () => {
      state.adventure.tags = normalizeAdventureTags([
        els.adventureTag1.value,
        els.adventureTag2.value,
        els.adventureTag3.value
      ]);
      scheduleJsonRender(280, { syncScene: false });
    });
  });
  els.adventureAdaptiveMultiplier.addEventListener("input", (e) => {
    state.adventure.adaptivePowerMultiplier = normalizeAdaptiveMultiplier(e.target.value);
    scheduleJsonRender(220, { syncScene: false });
  });
  els.adventureCarryOver.addEventListener("change", (e) => {
    state.adventure.allowCarryOverLoadout = Boolean(e.target.checked);
    scheduleJsonRender(90, { syncScene: false });
  });
  els.adventureFreshStart.addEventListener("change", (e) => {
    state.adventure.allowFreshStart = Boolean(e.target.checked);
    scheduleJsonRender(90, { syncScene: false });
  });
  els.adventureForceLoadout.addEventListener("change", (e) => {
    state.adventure.forceLoadout = Boolean(e.target.checked);
    syncForceLoadoutUI();
    scheduleJsonRender(90, { syncScene: false });
  });
  els.adventureRestoreLoadout.addEventListener("change", (e) => {
    state.adventure.restoreLoadoutOnEnd = Boolean(e.target.checked);
    syncForceLoadoutUI();
    scheduleJsonRender(90, { syncScene: false });
  });
  els.alphaStrictValidation.addEventListener("change", (e) => {
    state.ui.strictAlpha = Boolean(e.target.checked);
    scheduleJsonRender(90, { syncScene: false });
  });
}

function bindActions() {
  els.addSceneBtn.addEventListener("click", () => showNodePicker({ mode: "toolbar" }));
  els.addStarterKitBtn.addEventListener("click", addStarterKitLoot);
  els.validateAdventureBtn.addEventListener("click", renderJson);
  els.loadExampleBtn.addEventListener("click", loadSelectedExampleAdventure);
  els.importJsonBtn.addEventListener("click", () => els.importJsonInput.click());
  els.importJsonInput.addEventListener("change", onImportJson);
  els.restoreLocalBtn.addEventListener("click", () => {
    renderProjectPicker();
    showProjectPicker(true);
  });
  els.resetProjectBtn.addEventListener("click", createFreshProjectFromScratch);
  els.createProjectBtn?.addEventListener("click", createFreshProjectFromScratch);
  els.pickerImportJsonBtn?.addEventListener("click", () => els.importJsonInput.click());
  els.closeProjectPickerBtn?.addEventListener("click", () => {
    if (!state.ui.currentProjectId) {
      createFreshProjectFromScratch();
      return;
    }
    showProjectPicker(false);
  });
  els.addMonsterFromPresetBtn.addEventListener("click", createMonsterFromPreset);
  els.applyMonsterPresetBtn.addEventListener("click", applyPresetToSelectedMonster);
  els.addSceneImageBtn.addEventListener("click", () => els.sceneImageInput.click());
  els.replaceSceneImageBtn.addEventListener("click", () => els.sceneImageInput.click());
  els.sceneImageInput.addEventListener("change", onSceneImageSelected);
  els.removeSceneImageBtn.addEventListener("click", removeSceneImage);
  [els.sceneImageZoom, els.sceneImageFocusX, els.sceneImageFocusY].forEach((input) => {
    input.addEventListener("input", onSceneImageFrameInput);
  });
  els.deleteSceneBtn.addEventListener("click", deleteSelectedFlowNode);
  els.deleteMonsterBtn.addEventListener("click", deleteMonster);
  els.addChoiceBtn.addEventListener("click", addChoice);
  if (els.addSceneLootBtn) els.addSceneLootBtn.addEventListener("click", () => {}); // v2: il loot è sugli eventi delle scelte
  els.addMonsterLootBtn.addEventListener("click", addMonsterLoot);
  document.querySelectorAll("[data-quick-loot]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const monster = getSelectedMonster();
      if (!monster) return;
      monster.loot.push(createLootFromPreset(btn.dataset.quickLoot));
      markSceneDirty();
      renderMonsterLootEditor(monster);
      scheduleMonsterListRender();
      scheduleJsonRender(180);
    });
  });
  els.addCombatGroupBtn.addEventListener("click", addCombatGroup);


  els.saveAdventureBtn?.addEventListener("click", saveAdventureProject);
  els.saveFab?.addEventListener("click", saveAdventureProject);
  els.exportJsonBtn.addEventListener("click", exportJson);
  els.refreshJsonBtn.addEventListener("click", renderJson);
  els.groupChapterBtn?.addEventListener("click", createChapterGroupFromSelection);
  els.flowZoomOutBtn?.addEventListener("click", () => changeFlowZoom(-FLOW_ZOOM_STEP));
  els.flowZoomInBtn?.addEventListener("click", () => changeFlowZoom(FLOW_ZOOM_STEP));
  document.getElementById("tutorial-open-btn")?.addEventListener("click", showTutorial);

  // Toggle JSON output
  els.toggleJsonBtn?.addEventListener("click", () => {
    const isHidden = els.jsonOutput.classList.toggle("hidden");
    els.toggleJsonBtn.textContent = isHidden ? "Espandi" : "Comprimi";
  });

  // Duplica evento selezionato
  els.duplicateSceneBtn?.addEventListener("click", () => {
    if (!state.selectedDescriptionId) return;
    copySelectedSceneToClipboard();
    pasteCopiedScene();
  });

  // Ricerca nodi nel flow board
  els.flowSearch?.addEventListener("input", (e) => filterFlowCards(e.target.value));
  els.flowSearch?.addEventListener("search", (e) => filterFlowCards(e.target.value));

  // Minimap toggle
  els.minimapToggleBtn?.addEventListener("click", () => {
    const isHidden = els.flowMinimapWrap?.classList.toggle("hidden");
    if (els.minimapToggleBtn) els.minimapToggleBtn.classList.toggle("active", !isHidden);
    if (!isHidden) renderMinimap();
  });

  // Node picker: click sui bottoni tipo-nodo
  const picker = document.getElementById("node-picker");
  if (picker) {
    picker.querySelectorAll("[data-kind]").forEach((btn) => {
      btn.addEventListener("click", () => onNodePickerChoose(btn.dataset.kind));
    });
    // Chiudi cliccando fuori dal picker
    document.addEventListener("pointerdown", (e) => {
      if (_nodePicker && !picker.contains(e.target) && e.target.id !== "add-scene-btn") {
        hideNodePicker();
      }
    }, { capture: true });
  }
}

function bindKeyboardShortcuts() {
  window.addEventListener("keydown", handleGlobalHotkeys);
}

function handleGlobalHotkeys(event) {
  const key = String(event.key || "").toLowerCase();
  const hasModifier = event.ctrlKey || event.metaKey;

  if (hasModifier && key === "s") {
    event.preventDefault();
    saveAdventureProject();
    return;
  }

  if (shouldIgnoreGlobalHotkeys(event)) return;

  if (hasModifier && key === "c") {
    if (!state.selectedDescriptionId) return;
    event.preventDefault();
    copySelectedSceneToClipboard();
    return;
  }

  if (hasModifier && key === "v") {
    if (!state.ui.copiedScenePayload) return;
    event.preventDefault();
    pasteCopiedScene();
    return;
  }

  if (key === "delete") {
    if (!state.selectedDescriptionId && !state.ui.selectedEventRef) return;
    event.preventDefault();
    deleteSelectedFlowNode();
    return;
  }

  if (!hasModifier && key === "n") {
    event.preventDefault();
    showNodePicker({ mode: "keyboard" });
    return;
  }

  if (key === "escape") {
    if (_nodePicker) {
      event.preventDefault();
      hideNodePicker();
      return;
    }
    if (state.ui.selectedGraphNodeIds.length) {
      event.preventDefault();
      clearGraphNodeMultiSelection();
      return;
    }
    if (state.linkDraft) {
      event.preventDefault();
      state.linkDraft = null;
      renderFlowLinks();
    }
  }
}

function shouldIgnoreGlobalHotkeys(event) {
  if (event.defaultPrevented) return true;
  if (state.ui.projectPickerOpen) return true;
  const target = event.target;
  if (!(target instanceof Element)) return false;
  return Boolean(target.closest("input, textarea, select, [contenteditable='true'], [contenteditable='']"));
}

function bindSceneEditor() {
  // scene-kind selector è nascosto in v2: le Description non hanno un tipo esplicito.
  // Il listener è mantenuto come no-op per sicurezza (l'elemento esiste ancora nell'HTML).
  if (els.sceneKind) els.sceneKind.addEventListener("change", () => {});

  els.sceneTitle.addEventListener("input", (e) => {
    const eventContext = getSelectedEventContext();
    if (eventContext) {
      eventContext.choice.text = e.target.value;
      markSceneDirty();
      scheduleFlowCardRefresh(eventContext.description.id);
      scheduleJsonRender();
      return;
    }
    const scene = getSelectedScene();
    if (!scene) return;
    scene.title = e.target.value;
    markSceneDirty();
    scheduleFlowCardRefresh(scene.id);
    scheduleJsonRender();
  });

  els.sceneOpeningText.addEventListener("input", (e) => {
    const eventContext = getSelectedEventContext();
    if (eventContext) {
      if (eventContext.choice.event) {
        eventContext.choice.event.text = e.target.value;
        markSceneDirty();
        scheduleFlowCardRefresh(eventContext.description.id);
        scheduleJsonRender();
      }
      return;
    }
    const scene = getSelectedScene();
    if (!scene) return;
    scene.text = e.target.value;
    markSceneDirty();
    scheduleFlowCardRefresh(scene.id);
    scheduleJsonRender();
    updateSceneStatusDot();
  });

}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(reader.error || new Error("Impossibile leggere il file immagine."));
    reader.readAsDataURL(file);
  });
}

async function onSceneImageSelected(event) {
  const scene = getSelectedEventContext()?.choice?.event || getSelectedScene();
  const file = event.target.files?.[0];
  if (!scene || !file) return;
  try {
    const sourceDataUrl = await readFileAsDataUrl(file);
    const framedImage = await buildFramedSceneImage({
      name: file.name,
      type: file.type || "image/*",
      sourceDataUrl,
      zoom: 1,
      focusX: 50,
      focusY: 50
    });
    scene.eventImage = framedImage;
    scene.image = framedImage.dataUrl || null;
    markSceneDirty();
    renderSceneEditor();
    scheduleJsonRender(90);
  } catch (error) {
    window.alert("Impossibile caricare l'immagine evento.");
  } finally {
    els.sceneImageInput.value = "";
  }
}

async function onSceneImageFrameInput() {
  const scene = getSelectedEventContext()?.choice?.event || getSelectedScene();
  if (!scene?.eventImage?.sourceDataUrl) return;
  scene.eventImage.zoom = Number(els.sceneImageZoom.value || 1);
  scene.eventImage.focusX = Number(els.sceneImageFocusX.value || 50);
  scene.eventImage.focusY = Number(els.sceneImageFocusY.value || 50);
  scheduleSceneImageFrameUpdate(scene);
}

function scheduleSceneImageFrameUpdate(scene) {
  if (state.ui.sceneImageFrameTimer) {
    window.clearTimeout(state.ui.sceneImageFrameTimer);
  }
  state.ui.sceneImageFrameTimer = window.setTimeout(async () => {
    state.ui.sceneImageFrameTimer = null;
    const updated = await buildFramedSceneImage(scene.eventImage);
    scene.eventImage = updated;
    scene.image = updated.dataUrl || null;
    renderSceneImagePreview(scene);
    markSceneDirty();
    scheduleJsonRender();
  }, 90);
}

async function buildFramedSceneImage(imageConfig) {
  const framing = normalizeSceneImage(imageConfig);
  const {
    sourceDataUrl,
    zoom,
    focusX,
    focusY
  } = framing;
  const image = await loadImageElement(sourceDataUrl);
  const canvas = document.createElement("canvas");
  canvas.width = SCENE_IMAGE_TARGET_WIDTH;
  canvas.height = SCENE_IMAGE_TARGET_HEIGHT;
  const context = canvas.getContext("2d");
  if (!context) {
    return {
      ...framing,
      dataUrl: sourceDataUrl,
      width: image.naturalWidth,
      height: image.naturalHeight,
      sizeKb: Math.round((sourceDataUrl.length * 3 / 4) / 1024)
    };
  }
  const baseScale = Math.max(
    SCENE_IMAGE_TARGET_WIDTH / image.naturalWidth,
    SCENE_IMAGE_TARGET_HEIGHT / image.naturalHeight
  );
  const drawScale = baseScale * zoom;
  const drawWidth = Math.round(image.naturalWidth * drawScale);
  const drawHeight = Math.round(image.naturalHeight * drawScale);
  const minOffsetX = Math.min(0, SCENE_IMAGE_TARGET_WIDTH - drawWidth);
  const minOffsetY = Math.min(0, SCENE_IMAGE_TARGET_HEIGHT - drawHeight);
  const offsetX = Math.round(minOffsetX * (focusX / 100));
  const offsetY = Math.round(minOffsetY * (focusY / 100));
  context.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);

  const preferredType = canvasSupportsType("image/webp") ? "image/webp" : "image/jpeg";
  const qualitySteps = [0.78, 0.68, 0.58, 0.48];
  let dataUrl = sourceDataUrl;
  let outputType = preferredType;

  for (const quality of qualitySteps) {
    const candidate = canvas.toDataURL(preferredType, quality);
    if (candidate.length < dataUrl.length || dataUrl === sourceDataUrl) {
      dataUrl = candidate;
      outputType = preferredType;
    }
    if (estimateDataUrlSizeKb(candidate) <= 280) {
      dataUrl = candidate;
      outputType = preferredType;
      break;
    }
  }

  return {
    ...framing,
    dataUrl,
    type: outputType,
    width: canvas.width,
    height: canvas.height,
    sizeKb: estimateDataUrlSizeKb(dataUrl)
  };
}

function loadImageElement(dataUrl) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("Impossibile processare l'immagine scelta."));
    image.src = dataUrl;
  });
}

function canvasSupportsType(type) {
  const canvas = document.createElement("canvas");
  return canvas.toDataURL(type).startsWith(`data:${type}`);
}

function estimateDataUrlSizeKb(dataUrl) {
  const payload = dataUrl.split(",")[1] || "";
  return Math.max(1, Math.round((payload.length * 3 / 4) / 1024));
}

function normalizeSceneImage(imageConfig) {
  return {
    name: imageConfig?.name || "Immagine evento",
    type: imageConfig?.type || "image/webp",
    sourceDataUrl: imageConfig?.sourceDataUrl || imageConfig?.dataUrl || "",
    dataUrl: imageConfig?.dataUrl || "",
    width: Number(imageConfig?.width || 0),
    height: Number(imageConfig?.height || 0),
    sizeKb: Number(imageConfig?.sizeKb || 0),
    zoom: Math.min(2.5, Math.max(1, Number(imageConfig?.zoom || 1))),
    focusX: Math.min(100, Math.max(0, Number(imageConfig?.focusX ?? 50))),
    focusY: Math.min(100, Math.max(0, Number(imageConfig?.focusY ?? 50)))
  };
}

function removeSceneImage() {
  const scene = getSelectedEventContext()?.choice?.event || getSelectedScene();
  if (!scene) return;
  scene.eventImage = null;
  scene.image = null;
  markSceneDirty();
  renderSceneEditor();
  scheduleJsonRender(90);
}

function hydrateExampleAdventureSelect() {
  els.exampleAdventureSelect.innerHTML = "";
  EXAMPLE_ADVENTURES.forEach((entry) => {
    const option = document.createElement("option");
    option.value = entry.value;
    option.textContent = entry.label;
    els.exampleAdventureSelect.appendChild(option);
  });
}

async function loadSelectedExampleAdventure() {
  const preset = EXAMPLE_ADVENTURES.find((entry) => entry.value === els.exampleAdventureSelect.value);
  if (!preset?.path) {
    window.alert("Scegli prima un'avventura preconfezionata.");
    return;
  }

  try {
    const response = await fetch(preset.path);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const payload = await response.json();
    const projectId = createProjectId();
    payload.id = projectId;
    openAdventureProject(payload, { projectId, persist: true });
  } catch (error) {
    window.alert(
      `Questo browser non riesce ad aprire automaticamente l'esempio da file locale.\n\n` +
      `Usa il pulsante "Importa JSON" e scegli il file:\n` +
      `${preset.path.replace("./", "adventure-studio/")}`
    );
  }
}

function onImportJson(event) {
  const [file] = event.target.files || [];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const payload = JSON.parse(String(reader.result || "{}"));
      const projectId = createProjectId();
      payload.id = projectId;
      if (!normalizeString(payload.title) && file.name) {
        payload.title = file.name.replace(/\.json$/i, "");
      }
      openAdventureProject(payload, { projectId, persist: true });
    } catch (error) {
      window.alert("Il file scelto non contiene un JSON valido.");
    } finally {
      els.importJsonInput.value = "";
    }
  };
  reader.readAsText(file);
}

function loadAdventureIntoEditor(payload) {
  const projectId = createProjectId();
  payload.id = projectId;
  openAdventureProject(payload, { projectId, persist: true });
}

function resetProjectWorkspace() {
  createFreshProjectFromScratch();
}

function bindMonsterEditor() {
  [
    ["monsterName", "name", false],
    ["monsterDescription", "description", false],
    ["monsterHp", "hitPoints", true],
    ["monsterAttack", "attackBonus", true],
    ["monsterDefense", "defense", true],
    ["monsterGold", "goldReward", true],
    ["monsterDamageMin", "damageMin", true],
    ["monsterDamageMax", "damageMax", true]
  ].forEach(([id, field, numeric]) => {
    els[id].addEventListener("input", (e) => {
      const monster = getSelectedMonster();
      if (!monster) return;
      monster[field] = numeric ? Number(e.target.value || 0) : e.target.value;
      scheduleMonsterListRender();
      scheduleJsonRender();
    });
  });
}

function bindBoardPointerSystem() {
  els.flowBoard.addEventListener("pointerdown", onBoardPointerDown);
  window.addEventListener("pointermove", onBoardPointerMove);
  els.flowBoard.addEventListener("scroll", () => scheduleFlowLinksRender("scroll"), { passive: true });
  window.addEventListener("resize", onFlowBoardResize, { passive: true });
  window.addEventListener("pointerup", onBoardPointerUp);
  window.addEventListener("pointercancel", onBoardPointerUp);
}

function onFlowBoardResize() {
  if (!els.flowBoard) return;
  renderFlowBoard({ preserveCenter: true });
}

function flowBoardPointFromClient(event, bounds = getCurrentFlowBoardBounds()) {
  const boardRect = els.flowBoard.getBoundingClientRect();
  const zoom = state.ui.flowZoom || 1;
  return boardToLogicalPoint({
    x: (event.clientX - boardRect.left + els.flowBoard.scrollLeft) / zoom,
    y: (event.clientY - boardRect.top + els.flowBoard.scrollTop) / zoom
  }, bounds);
}

function isGraphNodeMultiSelected(nodeId) {
  return !!nodeId && state.ui.selectedGraphNodeIds.includes(nodeId);
}

function setGraphNodeMultiSelection(nodeIds, { additive = false } = {}) {
  const normalized = Array.from(new Set((nodeIds || []).filter(Boolean)));
  state.ui.selectedGraphNodeIds = additive
    ? Array.from(new Set([...state.ui.selectedGraphNodeIds, ...normalized]))
    : normalized;
  updateGraphNodeMultiSelection();
}

function toggleGraphNodeMultiSelection(nodeId) {
  if (!nodeId) return;
  if (isGraphNodeMultiSelected(nodeId)) {
    state.ui.selectedGraphNodeIds = state.ui.selectedGraphNodeIds.filter((id) => id !== nodeId);
  } else {
    state.ui.selectedGraphNodeIds = [...state.ui.selectedGraphNodeIds, nodeId];
  }
  updateGraphNodeMultiSelection();
}

function clearGraphNodeMultiSelection() {
  if (!state.ui.selectedGraphNodeIds.length) return;
  state.ui.selectedGraphNodeIds = [];
  updateGraphNodeMultiSelection();
}

function updateGraphNodeMultiSelection() {
  els.flowCanvas?.querySelectorAll(".node-card[data-scene-id]").forEach((node) => {
    const sceneId = node.dataset.sceneId || "";
    node.classList.toggle("is-multi-selected", isGraphNodeMultiSelected(sceneId));
  });
  els.choiceNodesLayer?.querySelectorAll(".choice-node[data-choice-id]").forEach((node) => {
    const choiceId = node.dataset.choiceId || "";
    node.classList.toggle("is-multi-selected", isGraphNodeMultiSelected(choiceId));
  });
  renderChapterGroupingUi();
}

function selectionBoxRectClient(selectionBox) {
  if (!selectionBox || !els.flowBoard) return null;
  const boardRect = els.flowBoard.getBoundingClientRect();
  const left = Math.max(Math.min(selectionBox.startClientX, selectionBox.currentClientX), boardRect.left);
  const right = Math.min(Math.max(selectionBox.startClientX, selectionBox.currentClientX), boardRect.right);
  const top = Math.max(Math.min(selectionBox.startClientY, selectionBox.currentClientY), boardRect.top);
  const bottom = Math.min(Math.max(selectionBox.startClientY, selectionBox.currentClientY), boardRect.bottom);
  return {
    left,
    right,
    top,
    bottom,
    width: Math.max(0, right - left),
    height: Math.max(0, bottom - top)
  };
}

function renderFlowMarquee() {
  const existing = document.getElementById("flow-selection-marquee");
  if (!state.ui.selectionBox || !els.flowBoard) {
    existing?.remove();
    return;
  }
  const rect = selectionBoxRectClient(state.ui.selectionBox);
  if (!rect) {
    existing?.remove();
    return;
  }
  const boardRect = els.flowBoard.getBoundingClientRect();
  const marquee = existing || document.createElement("div");
  marquee.id = "flow-selection-marquee";
  marquee.className = "flow-board__marquee";
  marquee.style.left = `${rect.left - boardRect.left + els.flowBoard.scrollLeft}px`;
  marquee.style.top = `${rect.top - boardRect.top + els.flowBoard.scrollTop}px`;
  marquee.style.width = `${rect.width}px`;
  marquee.style.height = `${rect.height}px`;
  if (!existing) els.flowBoard.appendChild(marquee);
}

function finalizeFlowMarqueeSelection() {
  const rect = selectionBoxRectClient(state.ui.selectionBox);
  const additive = !!state.ui.selectionBox?.additive;
  state.ui.selectionBox = null;
  renderFlowMarquee();
  if (!rect) return;
  if (rect.width < 6 && rect.height < 6) {
    if (!additive) clearGraphNodeMultiSelection();
    return;
  }
  const selectedIds = [];
  els.flowCanvas?.querySelectorAll(".node-card[data-scene-id]").forEach((node) => {
    const nodeRect = node.getBoundingClientRect();
    const intersects = rect.left <= nodeRect.right
      && rect.right >= nodeRect.left
      && rect.top <= nodeRect.bottom
      && rect.bottom >= nodeRect.top;
    if (intersects) selectedIds.push(node.dataset.sceneId);
  });
  els.choiceNodesLayer?.querySelectorAll(".choice-node[data-choice-id]").forEach((node) => {
    const nodeRect = node.getBoundingClientRect();
    const intersects = rect.left <= nodeRect.right
      && rect.right >= nodeRect.left
      && rect.top <= nodeRect.bottom
      && rect.bottom >= nodeRect.top;
    if (intersects) selectedIds.push(node.dataset.choiceId);
  });
  if (!selectedIds.length) {
    if (!additive) clearGraphNodeMultiSelection();
    return;
  }
  setGraphNodeMultiSelection(selectedIds, { additive });
}

function shouldStartFlowMarquee(event) {
  if (!els.flowBoard || event.button !== 0) return false;
  if (state.drag || state.dragCandidate || state.linkDraft) return false;
  if (!event.target.closest("#flow-board")) return false;
  if (event.target.closest(".node-card, .choice-node, .node-picker, .choice-targets-popover")) return false;
  if (event.target.closest("button, input, select, textarea, [contenteditable]")) return false;
  return true;
}

function onBoardPointerDown(event) {
  if (!shouldStartFlowMarquee(event)) return;
  state.ui.selectionBox = {
    startClientX: event.clientX,
    startClientY: event.clientY,
    currentClientX: event.clientX,
    currentClientY: event.clientY,
    additive: event.shiftKey,
    pointerId: event.pointerId
  };
  renderFlowMarquee();
}

function onBoardPointerMove(event) {
  if (state.ui.selectionBox) {
    state.ui.selectionBox.currentClientX = event.clientX;
    state.ui.selectionBox.currentClientY = event.clientY;
    renderFlowMarquee();
    return;
  }

  if (!state.drag && state.dragCandidate) {
    const dx = event.clientX - state.dragCandidate.startClientX;
    const dy = event.clientY - state.dragCandidate.startClientY;
    if (Math.hypot(dx, dy) >= FLOW_DRAG_START_THRESHOLD) {
      startPendingFlowDrag(event);
    }
  }

  if (state.drag) {
    state.drag.pointerClientX = event.clientX;
    state.drag.pointerClientY = event.clientY;
    updateDraggedFlowNodePosition(event.clientX, event.clientY);
    ensureFlowAutoScrollLoop();
    return;
  }

  if (state.linkDraft) {
    state.linkDraft.pointerClientX = event.clientX;
    state.linkDraft.pointerClientY = event.clientY;
    updateLinkDraftPosition(event.clientX, event.clientY);
    ensureFlowAutoScrollLoop();
  }
}

function onBoardPointerUp(event) {
  if (state.ui.selectionBox) {
    finalizeFlowMarqueeSelection();
    return;
  }

  state.dragCandidate = null;

  if (state.drag) {
    stopFlowAutoScrollLoop();
    state.drag = null;
    finalizeFlowDrag();
    scheduleJsonRender(260, { syncScene: false });
    return;
  }

  if (state.linkDraft) {
    stopFlowAutoScrollLoop();
  }
  if (!state.linkDraft) return;

  const targetNode = event.target.closest(".node-card");
  const targetEventNode = event.target.closest(".choice-node[data-choice-id]");
  const targetSceneId = targetNode?.dataset.sceneId || null;
  const targetEventId = targetEventNode?.dataset.choiceId || null;
  const sourceSceneId = state.linkDraft.sceneId;
  const sourceChoiceId = state.linkDraft.choiceId || null;
  const sourcePortId = state.linkDraft.portId || null;
  state.linkDraft = null;

  const resolvedTargetId = targetEventId || targetSceneId || null;
  const isSelfLink = resolvedTargetId && (resolvedTargetId === sourceSceneId || resolvedTargetId === sourceChoiceId);

  if (resolvedTargetId && !isSelfLink) {
    const sourceScene = state.adventure.descriptions.find((d) => d.id === sourceSceneId);
    const sourceContext = sourceChoiceId ? getGraphChoiceContext(sourceSceneId || sourceChoiceId, sourceChoiceId) : null;
    if (sourceScene) {
      if (sourceChoiceId && sourceContext) {
        setBranchTargetByPort(sourceContext.choice, sourcePortId, resolvedTargetId);
        markSceneDirty();
        if (!sourceContext.detached) refreshFlowCard(sourceSceneId);
        renderChoiceNodes();
        scheduleFlowLinksRender();
        scheduleJsonRender();
        refreshFlowLinkMutationUi(sourceSceneId, sourceChoiceId);
      } else {
        addLinkedTargetToScene(sourceScene, resolvedTargetId);
        state.selectedDescriptionId = sourceSceneId;
        render();
      }
    } else if (sourceContext) {
      setBranchTargetByPort(sourceContext.choice, sourcePortId, resolvedTargetId);
      markSceneDirty();
      renderChoiceNodes();
      scheduleFlowLinksRender();
      scheduleJsonRender();
      refreshFlowLinkMutationUi(sourceSceneId, sourceChoiceId);
    }
  } else if (!targetSceneId && !targetEventId) {
    // Drag-to-create: il link è finito nel vuoto → mostra il picker alla posizione del puntatore
    const dropPoint = flowBoardPointFromClient({ clientX: event.clientX, clientY: event.clientY });
    showNodePicker({
      mode: "drag",
      sourceSceneId,
      sourceChoiceId,
      sourcePortId,
      dropPoint,
      clientX: event.clientX,
      clientY: event.clientY
    });
  } else {
    renderFlowLinks();
  }
}

function startPendingFlowDrag(event) {
  const pending = state.dragCandidate;
  if (!pending) return;
  state.dragCandidate = null;
  const pointerPoint = flowBoardPointFromClient(event, pending.bounds || getCurrentFlowBoardBounds());

  if (pending.kind === "chapter") {
    const group = getAdventureChapterGroups().find((entry) => entry.id === pending.chapterGroupId);
    if (!group) return;
    const initialNodePositions = Object.fromEntries(
      (group.nodeIds || []).map((nodeId) => {
        const scene = state.adventure.descriptions.find((desc) => desc.id === nodeId);
        if (scene) return [nodeId, { x: scene.position?.x || 0, y: scene.position?.y || 0, kind: "scene" }];
        const eventNode = getStandaloneEventNodeById(nodeId);
        if (eventNode) return [nodeId, { x: eventNode.position?.x || 0, y: eventNode.position?.y || 0, kind: "event" }];
        return null;
      }).filter(Boolean)
    );
    state.drag = {
      kind: "chapter",
      chapterGroupId: group.id,
      collapsed: Boolean(group.collapsed),
      offsetX: pointerPoint.x - (Number(group.position?.x) || 0),
      offsetY: pointerPoint.y - (Number(group.position?.y) || 0),
      initialGroupPosition: {
        x: Number(group.position?.x) || 0,
        y: Number(group.position?.y) || 0
      },
      initialNodePositions,
      bounds: pending.bounds || getCurrentFlowBoardBounds(),
      pointerId: event.pointerId
    };
    pending.element?.setPointerCapture?.(event.pointerId);
    return;
  }

  if (pending.kind === "event") {
    const eventNode = getStandaloneEventNodeById(pending.choiceId);
    if (!eventNode) return;
    state.drag = {
      kind: "event",
      sceneId: pending.choiceId,
      choiceId: pending.choiceId,
      offsetX: pointerPoint.x - (eventNode.position?.x || 0),
      offsetY: pointerPoint.y - (eventNode.position?.y || 0),
      bounds: pending.bounds || getCurrentFlowBoardBounds(),
      pointerId: event.pointerId
    };
    pending.element?.setPointerCapture?.(event.pointerId);
  }
}

function updateDraggedFlowNodePosition(clientX, clientY) {
  const drag = state.drag;
  if (!drag) return;
  const dragBounds = drag.bounds || getCurrentFlowBoardBounds();
  const point = flowBoardPointFromClient({ clientX, clientY }, dragBounds);
  if (drag.kind === "chapter") {
    const group = getAdventureChapterGroups().find((entry) => entry.id === drag.chapterGroupId);
    if (!group) return;
    const nextX = clamp(point.x - drag.offsetX, -FLOW_COORD_LIMIT, FLOW_COORD_LIMIT);
    const nextY = clamp(point.y - drag.offsetY, -FLOW_COORD_LIMIT, FLOW_COORD_LIMIT);
    if (drag.collapsed) {
      group.position = { x: nextX, y: nextY };
      renderChapterGroupFrames(dragBounds);
      scheduleFlowLinksRender("drag");
      return;
    }
    const deltaX = nextX - drag.initialGroupPosition.x;
    const deltaY = nextY - drag.initialGroupPosition.y;
    (group.nodeIds || []).forEach((nodeId) => {
      const snapshot = drag.initialNodePositions?.[nodeId];
      if (!snapshot) return;
      if (snapshot.kind === "scene") {
        const scene = state.adventure.descriptions.find((desc) => desc.id === nodeId);
        if (!scene) return;
        scene.position.x = clamp(snapshot.x + deltaX, -FLOW_COORD_LIMIT, FLOW_COORD_LIMIT);
        scene.position.y = clamp(snapshot.y + deltaY, -FLOW_COORD_LIMIT, FLOW_COORD_LIMIT);
        updateFlowCardPosition(scene.id, dragBounds);
        updateChoiceNodePositions(scene.id, dragBounds);
        return;
      }
      const eventNode = getStandaloneEventNodeById(nodeId);
      if (!eventNode) return;
      eventNode.position = {
        x: clamp(snapshot.x + deltaX, -FLOW_COORD_LIMIT, FLOW_COORD_LIMIT),
        y: clamp(snapshot.y + deltaY, -FLOW_COORD_LIMIT, FLOW_COORD_LIMIT)
      };
      updateChoiceNodePositions(eventNode.id, dragBounds);
    });
    group.position = { x: nextX, y: nextY };
    renderChapterGroupFrames(dragBounds);
    scheduleFlowLinksRender("drag");
    return;
  }
  if (drag.kind === "event") {
    const eventNode = getStandaloneEventNodeById(drag.choiceId || drag.sceneId);
    if (!eventNode) return;
    eventNode.position = {
      x: clamp(point.x - drag.offsetX, -FLOW_COORD_LIMIT, FLOW_COORD_LIMIT),
      y: clamp(point.y - drag.offsetY, -FLOW_COORD_LIMIT, FLOW_COORD_LIMIT)
    };
    updateChoiceNodePositions(eventNode.id, dragBounds);
    scheduleFlowLinksRender("drag");
    return;
  }
  const scene = state.adventure.descriptions.find((d) => d.id === drag.sceneId);
  if (!scene) return;
  scene.position.x = clamp(point.x - drag.offsetX, -FLOW_COORD_LIMIT, FLOW_COORD_LIMIT);
  scene.position.y = clamp(point.y - drag.offsetY, -FLOW_COORD_LIMIT, FLOW_COORD_LIMIT);
  updateFlowCardPosition(scene.id, dragBounds);
  updateChoiceNodePositions(scene.id, dragBounds);
  scheduleFlowLinksRender("drag");
}

function updateLinkDraftPosition(clientX, clientY) {
  if (!state.linkDraft) return;
  const point = flowBoardPointFromClient({ clientX, clientY });
  state.linkDraft.current = {
    x: point.x,
    y: point.y
  };
  scheduleFlowLinksRender("drag");
}

function finalizeFlowDrag() {
  const nextBounds = computeBoardBounds();
  const previousBounds = state.ui.flowBoardBounds || nextBounds;
  state.ui.flowBoardBounds = nextBounds;
  if (
    previousBounds.width !== nextBounds.width
    || previousBounds.height !== nextBounds.height
    || previousBounds.offsetX !== nextBounds.offsetX
    || previousBounds.offsetY !== nextBounds.offsetY
  ) {
    updateAllFlowCardPositions(nextBounds);
  }
  renderChapterGroupFrames(nextBounds);
  renderFlowLinks(nextBounds);
  renderChoiceNodes(nextBounds);
}

function ensureFlowAutoScrollLoop() {
  if (state.ui.flowAutoScrollFrame) return;
  state.ui.flowAutoScrollFrame = window.requestAnimationFrame(stepFlowAutoScroll);
}

function stopFlowAutoScrollLoop() {
  if (!state.ui.flowAutoScrollFrame) return;
  window.cancelAnimationFrame(state.ui.flowAutoScrollFrame);
  state.ui.flowAutoScrollFrame = null;
}

function stepFlowAutoScroll() {
  state.ui.flowAutoScrollFrame = null;
  if ((!state.drag && !state.linkDraft) || !els.flowBoard) return;

  const board = els.flowBoard;
  const rect = board.getBoundingClientRect();
  const pointerSource = state.drag || state.linkDraft;
  const clientX = pointerSource?.pointerClientX;
  const clientY = pointerSource?.pointerClientY;
  if (typeof clientX !== "number" || typeof clientY !== "number") return;

  const deltaX = computeFlowAutoScrollDelta(clientX - rect.left, rect.width);
  const deltaY = computeFlowAutoScrollDelta(clientY - rect.top, rect.height);

  if (deltaX !== 0 || deltaY !== 0) {
    board.scrollLeft += deltaX;
    board.scrollTop += deltaY;
  if (state.drag) updateDraggedFlowNodePosition(clientX, clientY);
    if (state.linkDraft) updateLinkDraftPosition(clientX, clientY);
  }

  if (state.drag || state.linkDraft) {
    state.ui.flowAutoScrollFrame = window.requestAnimationFrame(stepFlowAutoScroll);
  }
}

function computeFlowAutoScrollDelta(pointerOffset, size) {
  if (pointerOffset < FLOW_AUTO_SCROLL_EDGE) {
    const ratio = (FLOW_AUTO_SCROLL_EDGE - pointerOffset) / FLOW_AUTO_SCROLL_EDGE;
    return -Math.ceil(FLOW_AUTO_SCROLL_MAX_SPEED * Math.min(1, Math.max(0, ratio)));
  }
  if (pointerOffset > size - FLOW_AUTO_SCROLL_EDGE) {
    const ratio = (pointerOffset - (size - FLOW_AUTO_SCROLL_EDGE)) / FLOW_AUTO_SCROLL_EDGE;
    return Math.ceil(FLOW_AUTO_SCROLL_MAX_SPEED * Math.min(1, Math.max(0, ratio)));
  }
  return 0;
}

// Dato il titolo di una description sorgente, restituisce il prossimo titolo disponibile
// nella forma "<base> <n>". Strappa il numero finale per trovare la base, poi cerca
// il massimo numero gia usato tra tutte le descriptions con quella base.
function deriveChildTitle(sourceTitle) {
  const base = (sourceTitle || "").replace(/\s+\d+$/, "").trim() || sourceTitle || "Scena";
  let max = 1;
  state.adventure.descriptions.forEach((d) => {
    if (!d.title) return;
    if (d.title === base) {
      max = Math.max(max, 1);
    } else {
      const lastSpace = d.title.lastIndexOf(" ");
      if (lastSpace !== -1 && d.title.slice(0, lastSpace) === base) {
        const num = parseInt(d.title.slice(lastSpace + 1), 10);
        if (!isNaN(num)) max = Math.max(max, num);
      }
    }
  });
  return `${base} ${max + 1}`;
}

// Crea una nuova Description (nodo narrativo puro).
// Opzionalmente collegata a una description sorgente (drag-to-create) e/o marcata come ending.
function createDescription({ position = null, sourceDescriptionId = null, isEnding = false } = {}) {
  saveCurrentDescription();
  const index = state.adventure.descriptions.length + 1;
  const spawnPosition = position || findNextScenePosition();
  const sourceDesc = sourceDescriptionId
    ? state.adventure.descriptions.find((d) => d.id === sourceDescriptionId) : null;
  const currentDesc = !sourceDescriptionId && state.selectedDescriptionId
    ? state.adventure.descriptions.find((d) => d.id === state.selectedDescriptionId) : null;
  const titleSource = sourceDesc || currentDesc;
  const defaultTitle = isEnding
    ? "Epilogo"
    : titleSource ? deriveChildTitle(titleSource.title) : `Scena ${index}`;
  const desc = {
    id: createUniqueSceneId(),
    title: defaultTitle,
    text: "",
    image: null,
    isEnding,
    choices: [],
    position: spawnPosition
  };

  state.adventure.descriptions.push(desc);
  state.selectedDescriptionId = desc.id;
  state.ui.lastCreatedDescriptionId = desc.id;
  if (!state.adventure.startingDescriptionId) state.adventure.startingDescriptionId = desc.id;

  // Collega automaticamente alla description sorgente se arriva da drag-to-create
  if (sourceDescriptionId) {
    const src = state.adventure.descriptions.find((d) => d.id === sourceDescriptionId);
    if (src) addLinkedTarget(src, desc.id);
  }

  state.ui.sceneDirty = true;
  renderWorkspace({ skipJson: true });
  scheduleJsonRender(320, { syncScene: false });
  setTimeout(() => { if (els.sceneTitle) { els.sceneTitle.focus(); els.sceneTitle.select(); } }, 80);
  return desc;
}

// Wrapper retrocompatibile usato da hotkey N e toolbar
function createScene() {
  createDescription();
}

function isBoardEventKind(kind) {
  return BOARD_EVENT_NODE_KINDS.has(normalizeString(kind));
}

function nodePickerKindLabel(kind) {
  const entry = CHOICE_EVENT_PICKER_TYPES.find((item) => item.type === kind);
  return entry?.label || "Evento";
}

function clampFlowPoint(point) {
  if (!point) return null;
  return {
    x: clamp(Number(point.x) || 0, -FLOW_COORD_LIMIT, FLOW_COORD_LIMIT),
    y: clamp(Number(point.y) || 0, -FLOW_COORD_LIMIT, FLOW_COORD_LIMIT)
  };
}

function getAdventureEventNodes() {
  state.adventure.eventNodes = Array.isArray(state.adventure.eventNodes) ? state.adventure.eventNodes : [];
  return state.adventure.eventNodes;
}

function createUniqueEventNodeId() {
  const existingIds = new Set(getAdventureEventNodes().map((node) => node.id));
  let index = getAdventureEventNodes().length + 1;
  let candidate = `event_node_${index}`;
  while (existingIds.has(candidate)) {
    index += 1;
    candidate = `event_node_${index}`;
  }
  return candidate;
}

function createUniqueEventNodeIdIn(adventure) {
  const eventNodes = Array.isArray(adventure?.eventNodes) ? adventure.eventNodes : [];
  const existingIds = new Set(eventNodes.map((node) => node.id));
  let index = eventNodes.length + 1;
  let candidate = `event_node_${index}`;
  while (existingIds.has(candidate)) {
    index += 1;
    candidate = `event_node_${index}`;
  }
  return candidate;
}

function createStandaloneEventNode(type, position = null) {
  const node = {
    id: createUniqueEventNodeId(),
    text: nodePickerKindLabel(type),
    hidden: false,
    burnAfterUse: false,
    targetId: null,
    event: createDefaultEvent(type),
    position: clampFlowPoint(position) || findNextScenePosition()
  };
  getAdventureEventNodes().push(node);
  return node;
}

function getStandaloneEventNodeById(nodeId) {
  if (!nodeId) return null;
  return getAdventureEventNodes().find((node) => node.id === nodeId) || null;
}

function getAdventureChapterGroups() {
  state.adventure.chapterGroups = Array.isArray(state.adventure.chapterGroups) ? state.adventure.chapterGroups : [];
  return state.adventure.chapterGroups;
}

function createUniqueChapterGroupId(adventure = state.adventure) {
  const groups = Array.isArray(adventure?.chapterGroups) ? adventure.chapterGroups : [];
  const existingIds = new Set(groups.map((group) => group.id));
  let index = groups.length + 1;
  let candidate = `chapter_${index}`;
  while (existingIds.has(candidate)) {
    index += 1;
    candidate = `chapter_${index}`;
  }
  return candidate;
}

function getChapterGroupByNodeId(nodeId) {
  if (!nodeId) return null;
  return getAdventureChapterGroups().find((group) => (group.nodeIds || []).includes(nodeId)) || null;
}

function getCollapsedChapterGroupByNodeId(nodeId) {
  const group = getChapterGroupByNodeId(nodeId);
  return group?.collapsed ? group : null;
}

function isNodeHiddenByCollapsedChapter(nodeId) {
  return Boolean(getCollapsedChapterGroupByNodeId(nodeId));
}

function normalizeChapterRole(value) {
  return value === "entry" || value === "exit" ? value : "none";
}

function chapterRoleForNode(group, nodeId) {
  return normalizeChapterRole(group?.nodeRoles?.[nodeId]);
}

function setChapterRoleForNode(nodeId, role) {
  const group = getChapterGroupByNodeId(nodeId);
  if (!group) return;
  group.nodeRoles = group.nodeRoles && typeof group.nodeRoles === "object" ? { ...group.nodeRoles } : {};
  const normalized = normalizeChapterRole(role);
  if (normalized === "none") delete group.nodeRoles[nodeId];
  else group.nodeRoles[nodeId] = normalized;
  markSceneDirty();
  renderFlowBoard({ preserveCenter: true });
  renderSceneEditor();
  scheduleJsonRender(140, { syncScene: false });
}

function nodeLabelForChapter(nodeId) {
  const scene = state.adventure.descriptions.find((desc) => desc.id === nodeId);
  if (scene) return scene.title || "Scena";
  const eventNode = getStandaloneEventNodeById(nodeId);
  if (eventNode) return eventNode.text || nodePickerKindLabel(eventNode.event?.type);
  return nodeId || "Nodo";
}

function toggleChapterGroupCollapsed(groupId) {
  const group = getAdventureChapterGroups().find((entry) => entry.id === groupId);
  if (!group) return;
  group.collapsed = !group.collapsed;
  markSceneDirty();
  renderFlowBoard({ preserveCenter: true });
  scheduleJsonRender(160, { syncScene: false });
}

function deleteChapterGroup(groupId) {
  const groups = getAdventureChapterGroups();
  const nextGroups = groups.filter((group) => group.id !== groupId);
  if (nextGroups.length === groups.length) return;
  state.adventure.chapterGroups = nextGroups;
  markSceneDirty();
  renderFlowBoard({ preserveCenter: true });
  renderSceneEditor();
  scheduleJsonRender(160, { syncScene: false });
}

function cleanupChapterGroups() {
  const validNodeIds = new Set([
    ...(state.adventure.descriptions || []).map((desc) => desc.id),
    ...getAdventureEventNodes().map((node) => node.id)
  ]);
  const claimedNodeIds = new Set();
  state.adventure.chapterGroups = getAdventureChapterGroups()
    .map((group) => {
      const nodeIds = (group.nodeIds || []).filter((nodeId) => {
        if (!validNodeIds.has(nodeId) || claimedNodeIds.has(nodeId)) return false;
        claimedNodeIds.add(nodeId);
        return true;
      });
      return nodeIds.length
        ? {
            id: normalizeString(group.id) || createUniqueChapterGroupId(),
            type: "chapterGroup",
            title: group.title || "Nuovo capitolo",
            collapsed: Boolean(group.collapsed),
            nodeIds,
            position: clampFlowPoint(group.position || { x: 0, y: 0 }),
            size: {
              w: Math.max(220, Number(group.size?.w) || 280),
              h: Math.max(120, Number(group.size?.h) || 150)
            },
            color: group.color || "amber",
            portLabels: group.portLabels && typeof group.portLabels === "object" ? { ...group.portLabels } : {},
            nodeRoles: Object.fromEntries(
              Object.entries(group.nodeRoles && typeof group.nodeRoles === "object" ? group.nodeRoles : {})
                .filter(([nodeId]) => nodeIds.includes(nodeId))
                .map(([nodeId, role]) => [nodeId, normalizeChapterRole(role)])
                .filter(([, role]) => role !== "none")
            )
          }
        : null;
    })
    .filter(Boolean);
}

function removeNodesFromChapterGroups(nodeIds) {
  const targetIds = new Set((nodeIds || []).filter(Boolean));
  if (!targetIds.size) return;
  getAdventureChapterGroups().forEach((group) => {
    group.nodeIds = (group.nodeIds || []).filter((nodeId) => !targetIds.has(nodeId));
  });
  cleanupChapterGroups();
}

function chapterGroupBounds(group, bounds = getCurrentFlowBoardBounds()) {
  const nodeIds = group?.nodeIds || [];
  const metrics = getFlowCardMetrics();
  const eventFrame = choiceNodeFrame(false);
  const rects = nodeIds.map((nodeId) => {
    const scene = state.adventure.descriptions.find((desc) => desc.id === nodeId);
    if (scene) {
      const point = logicalToBoardPoint(scene.position, bounds);
      return {
        left: point.x,
        top: point.y,
        right: point.x + metrics.width,
        bottom: point.y + metrics.height
      };
    }
    const eventNode = getStandaloneEventNodeById(nodeId);
    if (eventNode) {
      const point = logicalToBoardPoint(eventNode.position || { x: 0, y: 0 }, bounds);
      return {
        left: point.x - eventFrame.width / 2,
        top: point.y - eventFrame.height / 2,
        right: point.x + eventFrame.width / 2,
        bottom: point.y + eventFrame.height / 2
      };
    }
    return null;
  }).filter(Boolean);
  if (!rects.length) return null;
  const paddingX = 26;
  const paddingTop = 36;
  const paddingBottom = 22;
  const left = Math.min(...rects.map((rect) => rect.left)) - paddingX;
  const top = Math.min(...rects.map((rect) => rect.top)) - paddingTop;
  const right = Math.max(...rects.map((rect) => rect.right)) + paddingX;
  const bottom = Math.max(...rects.map((rect) => rect.bottom)) + paddingBottom;
  return {
    left,
    top,
    width: Math.max(220, right - left),
    height: Math.max(120, bottom - top)
  };
}

function chapterGroupCollapsedFrame(group, bounds = getCurrentFlowBoardBounds()) {
  const point = logicalToBoardPoint(group.position || { x: 0, y: 0 }, bounds);
  return {
    left: point.x,
    top: point.y,
    width: CHAPTER_GROUP_CARD_WIDTH,
    height: CHAPTER_GROUP_CARD_HEIGHT
  };
}

function collectGraphEdges(bounds = getCurrentFlowBoardBounds()) {
  const edges = [];
  const addEdge = ({ sourceNodeId, sourcePoint, targetId, color, dashed = false, label = "", portId = null }) => {
    if (!targetId || targetId === DEATH_SENTINEL || targetId === STAY_SENTINEL || targetId === NO_ESCAPE_SENTINEL || targetId === RETRY_SENTINEL) return;
    edges.push({ sourceNodeId, sourcePoint, targetId, color, dashed, label, portId });
  };
  const collectChoiceEdges = (choice, sourceNodeId, sourcePoint, color) => {
    if (choice.event) {
      const ev = choice.event;
      const icon = ev.type === "combat" ? "\u2694" : ev.type === "skillcheck" ? "\u25C7"
        : ev.type === "requirement" ? "R" : ev.type === "shop" ? "$"
        : ev.type === "loot" ? "L" : ev.type === "dialogue" ? "D" : "";
      if (ev.type === "skillcheck") {
        addEdge({ sourceNodeId, sourcePoint, targetId: ev.successBranch?.targetId, color: "#6f8a57", portId: "success", label: icon });
        addEdge({ sourceNodeId, sourcePoint, targetId: ev.failureBranch?.targetId, color: "#b94a48", portId: "failure" });
      } else if (ev.type === "combat") {
        addEdge({ sourceNodeId, sourcePoint, targetId: ev.victoryBranch?.targetId, color: "#6f8a57", portId: "victory", label: icon });
        addEdge({ sourceNodeId, sourcePoint, targetId: ev.defeatBranch?.targetId, color: "#b94a48", portId: "defeat" });
        if (ev.retreatBranch) addEdge({ sourceNodeId, sourcePoint, targetId: ev.retreatBranch?.targetId, color: "#6d84b5", portId: "retreat", dashed: true });
      } else if (ev.type === "requirement") {
        addEdge({ sourceNodeId, sourcePoint, targetId: ev.metBranch?.targetId, color: "#6f8a57", portId: "met", label: icon });
        addEdge({ sourceNodeId, sourcePoint, targetId: ev.unmetBranch?.targetId, color: "#b94a48", portId: "unmet" });
      } else if (ev.type === "dialogue") {
        const responses = Array.isArray(ev.root?.responses) ? ev.root.responses : [];
        if (responses.length) {
          responses.forEach((response, index) => {
            addEdge({
              sourceNodeId,
              sourcePoint,
              targetId: response?.targetId,
              color: "#8b78b8",
              portId: dialogueResponsePortId(response.id),
              label: index === 0 ? icon : ""
            });
          });
        } else {
          const branch = ev.branch || ev.root?.branch;
          addEdge({ sourceNodeId, sourcePoint, targetId: branch?.targetId, color, portId: "branch", label: icon });
        }
      } else {
        const branch = ev.branch;
        addEdge({ sourceNodeId, sourcePoint, targetId: branch?.targetId, color, portId: "branch", label: icon });
      }
      return;
    }
    addEdge({ sourceNodeId, sourcePoint, targetId: choice.targetId, color, portId: null });
  };

  state.adventure.descriptions.forEach((desc) => {
    const choicePositions = choiceNodesBoardPositions(desc, bounds);
    choicePositions.forEach(({ choice, x, y }) => {
      collectChoiceEdges(choice, desc.id, { x, y }, choiceLinkColor(choice));
    });
  });

  getAdventureEventNodes().forEach((eventNode) => {
    collectChoiceEdges(eventNode, eventNode.id, eventNodeAnchor(eventNode, bounds), choiceLinkColor(eventNode));
  });

  return edges;
}

function buildCollapsedChapterPortMaps(bounds = getCurrentFlowBoardBounds()) {
  const collapsedGroups = getAdventureChapterGroups().filter((group) => group.collapsed);
  const portsByGroup = new Map();
  const ensure = (groupId) => {
    if (!portsByGroup.has(groupId)) portsByGroup.set(groupId, { entries: [], exits: [], hiddenIncomingCount: 0, hiddenOutgoingCount: 0 });
    return portsByGroup.get(groupId);
  };
  const edges = collectGraphEdges(bounds);
  collapsedGroups.forEach((group) => {
    const bucket = ensure(group.id);
    const entryNodeIds = (group.nodeIds || []).filter((nodeId) => chapterRoleForNode(group, nodeId) === "entry");
    const exitNodeIds = (group.nodeIds || []).filter((nodeId) => chapterRoleForNode(group, nodeId) === "exit");
    bucket.entries = entryNodeIds.map((nodeId, index) => ({
      key: `entry:${nodeId}`,
      nodeId,
      label: `IN ${index + 1}`,
      title: nodeLabelForChapter(nodeId),
      color: "#5f86c9"
    }));
    bucket.exits = exitNodeIds.map((nodeId, index) => ({
      key: `exit:${nodeId}`,
      nodeId,
      label: `OUT ${index + 1}`,
      title: nodeLabelForChapter(nodeId),
      color: "#c8823a"
    }));
  });
  edges.forEach((edge) => {
    const sourceGroup = getCollapsedChapterGroupByNodeId(edge.sourceNodeId);
    const targetGroup = getCollapsedChapterGroupByNodeId(edge.targetId);
    if (sourceGroup && targetGroup && sourceGroup.id === targetGroup.id) return;
    if (targetGroup && (!sourceGroup || sourceGroup.id !== targetGroup.id)) {
      const bucket = ensure(targetGroup.id);
      if (!bucket.entries.some((port) => port.nodeId === edge.targetId)) {
        bucket.hiddenIncomingCount += 1;
      }
    }
    if (sourceGroup && (!targetGroup || targetGroup.id !== sourceGroup.id)) {
      const bucket = ensure(sourceGroup.id);
      if (!bucket.exits.some((port) => port.nodeId === edge.sourceNodeId)) {
        bucket.hiddenOutgoingCount += 1;
      }
    }
  });
  const pointForPort = (frame, side, index, total) => {
    const usableHeight = Math.max(36, frame.height - 28);
    const spacing = total <= 1 ? usableHeight / 2 : usableHeight / Math.max(1, total - 1);
    const y = frame.top + 14 + (total <= 1 ? usableHeight / 2 : spacing * index);
    const x = side === "entry" ? frame.left : frame.left + frame.width;
    return { x, y };
  };
  collapsedGroups.forEach((group) => {
    const bucket = ensure(group.id);
    const frame = chapterGroupCollapsedFrame(group, bounds);
    bucket.frame = frame;
    bucket.entries = bucket.entries.map((port, index) => ({
      ...port,
      label: group.portLabels?.[port.key] || port.label,
      point: pointForPort(frame, "entry", index, bucket.entries.length || 1)
    }));
    bucket.exits = bucket.exits.map((port, index) => ({
      ...port,
      label: group.portLabels?.[port.key] || port.label,
      point: pointForPort(frame, "exit", index, bucket.exits.length || 1)
    }));
  });
  return { portsByGroup };
}

function renderChapterGroupFrames(bounds = getCurrentFlowBoardBounds()) {
  els.flowCanvas?.querySelectorAll(".chapter-group-frame").forEach((frame) => frame.remove());
  els.flowCanvas?.querySelectorAll(".chapter-group-card").forEach((card) => card.remove());
  const fragment = document.createDocumentFragment();
  const { portsByGroup } = buildCollapsedChapterPortMaps(bounds);
  getAdventureChapterGroups().forEach((group) => {
    const ports = portsByGroup.get(group.id) || { entries: [], exits: [] };
    if (group.collapsed) {
      const frame = chapterGroupCollapsedFrame(group, bounds);
      const card = document.createElement("div");
      card.className = `chapter-group-card chapter-group-card--${group.color || "amber"}`;
      card.dataset.chapterGroupId = group.id;
      card.style.left = `${frame.left}px`;
      card.style.top = `${frame.top}px`;
      card.style.width = `${frame.width}px`;
      card.style.height = `${frame.height}px`;
      card.innerHTML = `
        <div class="chapter-group-card__header">
          <div class="chapter-group-card__titles">
            <strong>${esc(group.title || "Nuovo capitolo")}</strong>
            <span>${(group.nodeIds || []).length} nodi | ${ports.entries.length} in | ${ports.exits.length} fin${(ports.hiddenIncomingCount || ports.hiddenOutgoingCount) ? ` | !${ports.hiddenIncomingCount + ports.hiddenOutgoingCount}` : ""}</span>
          </div>
          <div class="chapter-group-card__actions">
            <button type="button" class="chapter-group-card__delete" data-action="delete-chapter" title="Elimina solo il capitolo">Elimina</button>
            <button type="button" class="chapter-group-card__toggle" data-action="toggle-collapse" title="Espandi capitolo">Apri</button>
          </div>
        </div>
      `;
      if (ports.hiddenIncomingCount || ports.hiddenOutgoingCount) {
        const chunks = [];
        if (ports.hiddenIncomingCount) chunks.push(`${ports.hiddenIncomingCount} ingressi non marcati`);
        if (ports.hiddenOutgoingCount) chunks.push(`${ports.hiddenOutgoingCount} uscite non marcate`);
        card.title = chunks.join(" | ");
      }
      ports.entries.forEach((port) => {
        const wrap = document.createElement("div");
        wrap.className = "chapter-group-port-wrap chapter-group-port-wrap--entry";
        wrap.style.left = "-10px";
        wrap.style.top = `${port.point.y - frame.top - 11}px`;
        wrap.title = `${port.title} | inizio capitolo`;
        const handle = document.createElement("span");
        handle.className = "chapter-group-port chapter-group-port--entry";
        handle.style.background = port.color || "#6d84b5";
        wrap.append(handle);
        card.appendChild(wrap);
      });
      ports.exits.forEach((port) => {
        const wrap = document.createElement("div");
        wrap.className = "chapter-group-port-wrap chapter-group-port-wrap--exit";
        wrap.style.right = "-10px";
        wrap.style.top = `${port.point.y - frame.top - 11}px`;
        wrap.title = `${port.title} | fine capitolo`;
        const handle = document.createElement("span");
        handle.className = "chapter-group-port chapter-group-port--exit";
        handle.style.background = port.color || "#b56d39";
        wrap.append(handle);
        card.appendChild(wrap);
      });
      card.querySelector('[data-action="delete-chapter"]')?.addEventListener("click", (event) => {
        event.stopPropagation();
        deleteChapterGroup(group.id);
      });
      bindChapterGroupDrag(group.id, card.querySelector(".chapter-group-card__header"), card);
      card.querySelector('[data-action="toggle-collapse"]')?.addEventListener("click", (event) => {
        event.stopPropagation();
        toggleChapterGroupCollapsed(group.id);
      });
      fragment.appendChild(card);
      return;
    }
    const frameBounds = chapterGroupBounds(group, bounds);
    if (!frameBounds) return;
    const frame = document.createElement("div");
    frame.className = `chapter-group-frame chapter-group-frame--${group.color || "amber"}`;
    frame.dataset.chapterGroupId = group.id;
    frame.style.left = `${frameBounds.left}px`;
    frame.style.top = `${frameBounds.top}px`;
    frame.style.width = `${frameBounds.width}px`;
    frame.style.height = `${frameBounds.height}px`;
    const roleCounts = {
      entry: (group.nodeIds || []).filter((nodeId) => chapterRoleForNode(group, nodeId) === "entry").length,
      exit: (group.nodeIds || []).filter((nodeId) => chapterRoleForNode(group, nodeId) === "exit").length
    };
    frame.innerHTML = `
      <div class="chapter-group-frame__header">
        <span class="chapter-group-frame__title">${esc(group.title || "Nuovo capitolo")}</span>
        <span class="chapter-group-frame__meta">${(group.nodeIds || []).length} nodi | ${roleCounts.entry} in | ${roleCounts.exit} fin</span>
        <div class="chapter-group-card__actions">
          <button type="button" class="chapter-group-card__delete" data-action="delete-chapter" title="Elimina solo il capitolo">Elimina</button>
          <button type="button" class="chapter-group-frame__toggle" data-action="toggle-collapse" title="Collassa capitolo">Riduci</button>
        </div>
      </div>
    `;
    frame.querySelector('[data-action="delete-chapter"]')?.addEventListener("click", (event) => {
      event.stopPropagation();
      deleteChapterGroup(group.id);
    });
    frame.querySelector('[data-action="toggle-collapse"]')?.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleChapterGroupCollapsed(group.id);
    });
    bindChapterGroupDrag(group.id, frame.querySelector(".chapter-group-frame__header"), frame);
    fragment.appendChild(frame);
  });
  els.flowCanvas.appendChild(fragment);
}

function createChapterRoleControl(nodeId) {
  const group = getChapterGroupByNodeId(nodeId);
  if (!group) return null;
  const wrap = document.createElement("div");
  wrap.className = "flow-event-quick-summary";
  const title = document.createElement("strong");
  title.textContent = `Capitolo: ${group.title || "Nuovo capitolo"}`;
  const hint = document.createElement("span");
  hint.textContent = "Segna questo nodo come inizio o fine canonica del capitolo collassato.";
  const row = document.createElement("div");
  row.className = "flow-event-quick-row";
  const rowLabel = document.createElement("span");
  rowLabel.textContent = "Ruolo nel capitolo";
  const select = document.createElement("select");
  select.className = "ctp-scene-select";
  [
    { value: "none", label: "Nessun ruolo" },
    { value: "entry", label: "Inizio capitolo" },
    { value: "exit", label: "Fine capitolo" }
  ].forEach((optionConfig) => {
    const option = document.createElement("option");
    option.value = optionConfig.value;
    option.textContent = optionConfig.label;
    if (chapterRoleForNode(group, nodeId) === optionConfig.value) option.selected = true;
    select.appendChild(option);
  });
  select.addEventListener("change", (event) => setChapterRoleForNode(nodeId, event.target.value));
  row.append(rowLabel, select);
  wrap.append(title, hint, row);
  return wrap;
}

function renderChapterGroupingUi() {
  if (!els.groupChapterBtn) return;
  const count = state.ui.selectedGraphNodeIds.length;
  els.groupChapterBtn.classList.toggle("hidden", count < 2);
  els.groupChapterBtn.textContent = count >= 2
    ? `Raggruppa in capitolo (${count})`
    : "Raggruppa in capitolo";
}

function createChapterGroupFromSelection() {
  const nodeIds = Array.from(new Set((state.ui.selectedGraphNodeIds || []).filter(Boolean)));
  if (nodeIds.length < 2) return;
  removeNodesFromChapterGroups(nodeIds);
      const group = {
        id: createUniqueChapterGroupId(),
        type: "chapterGroup",
        title: window.prompt("Nome del capitolo", "Nuovo capitolo")?.trim() || "Nuovo capitolo",
        collapsed: false,
        nodeIds,
        position: clampFlowPoint({ x: 0, y: 0 }),
        size: { w: 280, h: 150 },
        color: "amber",
        portLabels: {},
        nodeRoles: {}
      };
  getAdventureChapterGroups().push(group);
  const frameBounds = chapterGroupBounds(group);
  if (frameBounds) {
    group.position = clampFlowPoint(boardToLogicalPoint({ x: frameBounds.left, y: frameBounds.top }));
    group.size = {
      w: Math.max(220, Math.round(frameBounds.width)),
      h: Math.max(120, Math.round(frameBounds.height))
    };
  }
  markSceneDirty();
  renderFlowBoard({ preserveCenter: true });
  scheduleJsonRender(160, { syncScene: false });
}

function bindChapterGroupDrag(groupId, handle, element) {
  if (!groupId || !handle || !element) return;
  handle.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    if (event.target.closest("button, input, select, textarea")) return;
    event.preventDefault();
    event.stopPropagation();
    state.dragCandidate = {
      kind: "chapter",
      chapterGroupId: groupId,
      startClientX: event.clientX,
      startClientY: event.clientY,
      bounds: getCurrentFlowBoardBounds(),
      element,
      pointerId: event.pointerId
    };
  });
}

function normalizeImportedEventNode(node, index = 0) {
  const snapshot = node && typeof node === "object" ? node : {};
  return {
    id: normalizeString(snapshot.id) || `event_node_${index + 1}`,
    text: snapshot.text || nodePickerKindLabel(snapshot.event?.type || "transition"),
    hidden: Boolean(snapshot.hidden),
    burnAfterUse: Boolean(snapshot.burnAfterUse),
    targetId: normalizeString(snapshot.targetId) || null,
    event: snapshot.event ? cloneValue(snapshot.event) : createDefaultEvent("transition"),
    position: clampFlowPoint(snapshot.position || snapshot._editor?.eventPosition || {
      x: 360 + (index % 4) * 220,
      y: 60 + Math.floor(index / 4) * 140
    })
  };
}

function setGraphTargetId(targetOwner, nodeId) {
  if (!targetOwner) return;
  targetOwner.targetId = normalizeString(nodeId) || null;
}

function getGraphTargetId(targetOwner) {
  return normalizeString(targetOwner?.targetId) || null;
}

function flowPortColor(portId) {
  switch (portId) {
    case "victory":
    case "success":
    case "met":
      return "#6f8a57";
    case "defeat":
    case "failure":
    case "unmet":
      return "#b94a48";
    case "retreat":
      return "#6d84b5";
    default:
      return "#b56d39";
  }
}

function setBranchTargetByPort(choice, portId, targetId) {
  if (!choice) return;
  if (!choice.event || !portId) {
    setFirstUnsetBranch(choice, targetId);
    return;
  }
  const branch = eventBranchByPortId(choice.event, portId);
  if (!branch) {
    setFirstUnsetBranch(choice, targetId);
    return;
  }
  branch.targetId = targetId || null;
}

function refreshFlowLinkMutationUi(descId, choiceId) {
  renderSceneEditor();
  const quickMenu = document.getElementById("flow-event-quick-menu");
  if (quickMenu?.dataset.descId !== String(descId) || quickMenu?.dataset.choiceId !== String(choiceId)) return;
  const nodeEl = els.choiceNodesLayer?.querySelector(
    `.choice-node[data-desc-id="${descId}"][data-choice-id="${choiceId}"]`
  );
  if (nodeEl) {
    showFlowEventQuickMenu(descId, choiceId, nodeEl.getBoundingClientRect());
  }
}

function getRequirementMode(ev) {
  return ev?.requirementMode || (ev?.lockId ? "key" : ev?.questItemId ? "questItem" : "presetItem");
}

function requirementModeMeta(mode) {
  if (mode === "key") {
    return {
      label: "Chiave",
      valueLabel: "Chiave richiesta",
      hint: "Controlla una chiave narrativa tramite lockId. Se il ramo soddisfatto parte, ne consuma una unita."
    };
  }
  if (mode === "questItem") {
    return {
      label: "Quest item",
      valueLabel: "Quest item richiesto",
      hint: "Controlla un oggetto unico referenziabile via questItemId. Sul ramo soddisfatto ne consuma una unita."
    };
  }
  return {
    label: "Oggetto",
    valueLabel: "Oggetto richiesto",
    hint: "Controlla un oggetto del catalogo o del loot runtime. Sul ramo soddisfatto ne consuma una unita."
  };
}

function requirementValueSummary(ev) {
  const mode = getRequirementMode(ev);
  if (mode === "key") {
    const lockId = normalizeString(ev?.lockId);
    if (!lockId) return "Nessuna chiave selezionata";
    const lootMatch = collectAllAdventureLoot().find((loot) => normalizeString(loot?.lockId) === lockId);
    const presetMatch = LOOT_PRESETS.find((preset) => normalizeString(preset?.lockId) === lockId);
    return lootMatch?.itemName || presetMatch?.name || lockId;
  }
  if (mode === "questItem") {
    const questItemId = normalizeString(ev?.questItemId);
    if (!questItemId) return "Nessun quest item selezionato";
    const lootMatch = collectAllAdventureLoot().find((loot) => normalizeString(loot?.questItemId) === questItemId);
    return lootMatch?.itemName || questItemId;
  }
  const itemId = normalizeString(ev?.itemId);
  if (!itemId) return "Nessun oggetto selezionato";
  return lootPresetById(itemId)?.name || itemId;
}

function promoteBranchInlineEventsToDetached(ownerChoice, basePosition = null) {
  const ports = getChoiceBranchConfigs(ownerChoice);
  ports.forEach((branchConfig, index) => {
    const branch = branchConfig.getBranch?.();
    if (!branch?.event) return;
    const childPosition = clampFlowPoint({
      x: Number(basePosition?.x || 0) + 260,
      y: Number(basePosition?.y || 0) + (index - Math.floor(ports.length / 2)) * 120
    });
    const childNode = createStandaloneEventNode(branch.event.type || "transition", childPosition);
    childNode.text = branch.text || nodePickerKindLabel(branch.event.type || "transition");
    childNode.event = branch.event;
    branch.event = null;
    setGraphTargetId(branch, childNode.id);
    promoteBranchInlineEventsToDetached(childNode, childNode.position);
  });
}

function promoteInlineEventsToDetachedGraph(adventure) {
  if (!adventure) return;
  adventure.eventNodes = Array.isArray(adventure.eventNodes) ? adventure.eventNodes : [];

  (adventure.descriptions || []).forEach((desc) => {
    (desc.choices || []).forEach((choice, choiceIndex) => {
      if (choice.event) {
        const existingDetachedTarget = getGraphTargetId(choice);
        let eventNode = existingDetachedTarget
          ? adventure.eventNodes.find((node) => node.id === existingDetachedTarget)
          : null;
        if (!eventNode) {
          eventNode = {
            id: createUniqueEventNodeIdIn(adventure),
            text: choice.text || nodePickerKindLabel(choice.event.type || "transition"),
            hidden: false,
            burnAfterUse: false,
            targetId: null,
            event: choice.event,
            position: clampFlowPoint(choice._editor?.eventPosition || {
              x: (desc.position?.x || 0) + 260,
              y: (desc.position?.y || 0) + choiceIndex * 110
            })
          };
          adventure.eventNodes.push(eventNode);
        }
        choice.event = null;
        setGraphTargetId(choice, eventNode.id);
        promoteBranchInlineEventsToDetached(eventNode, eventNode.position);
      } else if (getGraphTargetId(choice)) {
        const linkedEventNode = adventure.eventNodes.find((node) => node.id === getGraphTargetId(choice));
        if (linkedEventNode) promoteBranchInlineEventsToDetached(linkedEventNode, linkedEventNode.position);
      }
    });
  });

  adventure.eventNodes.forEach((node) => {
    promoteBranchInlineEventsToDetached(node, node.position);
  });
}

function getGraphChoiceContext(descriptionId, choiceId) {
  if (!descriptionId || !choiceId) return null;
  const eventNode = getStandaloneEventNodeById(choiceId);
  if (eventNode && descriptionId === choiceId) {
    return {
      description: {
        id: eventNode.id,
        title: eventNode.text || nodePickerKindLabel(eventNode.event?.type),
        isDetachedEventOwner: true,
        position: eventNode.position
      },
      choice: eventNode,
      choiceIndex: 0,
      detached: true,
      visual: choiceEventVisual(eventNode)
    };
  }
  const description = state.adventure.descriptions.find((desc) => desc.id === descriptionId) || null;
  if (!description) return null;
  const choiceIndex = (description.choices || []).findIndex((choice) => choice.id === choiceId);
  if (choiceIndex === -1) return null;
  const choice = description.choices[choiceIndex];
  return {
    description,
    choice,
    choiceIndex,
    detached: false,
    visual: choiceEventVisual(choice)
  };
}

function createEventNodeFromPicker({
  type,
  sourceSceneId = null,
  sourceChoiceId = null,
  sourcePortId = null,
  dropPoint = null
} = {}) {
  if (!isBoardEventKind(type)) return null;
  const sourceDesc = sourceSceneId
    ? state.adventure.descriptions.find((desc) => desc.id === sourceSceneId)
    : null;
  const sourceChoice = sourceDesc?.choices?.find((choice) => choice.id === sourceChoiceId) || null;
  const sourceContext = sourceChoiceId ? getGraphChoiceContext(sourceSceneId || sourceChoiceId, sourceChoiceId) : null;
  const createdNode = createStandaloneEventNode(type, dropPoint);
  if (!createdNode) return null;

  if (sourceDesc && sourceChoice) {
    setBranchTargetByPort(sourceChoice, sourcePortId, createdNode.id);
  } else if (sourceContext) {
    setBranchTargetByPort(sourceContext.choice, sourcePortId, createdNode.id);
  } else if (sourceDesc) {
    addLinkedTargetToScene(sourceDesc, createdNode.id);
  }

  markSceneDirty();
  if (sourceDesc) refreshFlowCard(sourceDesc.id);
  renderChoiceNodes();
  scheduleFlowLinksRender();
  scheduleJsonRender(120);
  selectEventNode(createdNode.id, createdNode.id, { scrollIntoView: false });
  return createdNode;
}

// ─── Node Picker ─────────────────────────────────────────────────────────────

// Stato del picker: null quando chiuso, altrimenti { mode, sourceSceneId, dropPoint }
let _nodePicker = null;

function showNodePicker({
  mode = "toolbar",
  sourceSceneId = null,
  sourceChoiceId = null,
  sourcePortId = null,
  dropPoint = null,
  clientX = null,
  clientY = null,
  kindFilter = "all"
} = {}) {
  _nodePicker = { mode, sourceSceneId, sourceChoiceId, sourcePortId, dropPoint, kindFilter };
  const picker = document.getElementById("node-picker");
  if (!picker) return;

  // Ripristina step 1
  document.getElementById("node-picker-step1")?.classList.remove("hidden");
  const step2 = document.getElementById("node-picker-step2");
  if (step2) { step2.classList.add("hidden"); step2.innerHTML = ""; }
  picker.style.maxWidth = "";
  picker.dataset.kindFilter = kindFilter;
  const title = picker.querySelector(".node-picker-title");
  if (title) {
    title.textContent = kindFilter === "event-only" ? "Aggiungi evento al grafo" : "Aggiungi nodo al grafo";
  }
  picker.querySelectorAll("[data-kind]").forEach((btn) => {
    const isEvent = isBoardEventKind(btn.dataset.kind);
    btn.classList.toggle("hidden", kindFilter === "event-only" && !isEvent);
  });

  // Posizionamento: vicino al pulsante toolbar o dove il mouse ha rilasciato il drag
  if (mode === "drag" && clientX != null && clientY != null) {
    picker.style.left = `${Math.min(clientX, window.innerWidth - 260)}px`;
    picker.style.top = `${Math.min(clientY + 8, window.innerHeight - 260)}px`;
    picker.style.position = "fixed";
  } else {
    // Centrato sotto il pulsante "Nuovo evento" o al centro della viewport
    const btn = document.getElementById("add-scene-btn");
    if (btn) {
      const r = btn.getBoundingClientRect();
      picker.style.left = `${r.left}px`;
      picker.style.top = `${r.bottom + 8}px`;
      picker.style.position = "fixed";
    } else {
      picker.style.left = "50%";
      picker.style.top = "50%";
      picker.style.transform = "translate(-50%, -50%)";
      picker.style.position = "fixed";
    }
  }

  picker.classList.remove("hidden");
  picker.querySelector("#node-picker-step1 [data-kind]:not(.hidden)")?.focus();
}

function hideNodePicker() {
  _nodePicker = null;
  const picker = document.getElementById("node-picker");
  if (picker) {
    picker.classList.add("hidden");
    picker.dataset.kindFilter = "all";
    picker.querySelectorAll("[data-kind]").forEach((btn) => btn.classList.remove("hidden"));
  }
}

function onNodePickerChoose(kind) {
  const { sourceSceneId = null, sourceChoiceId = null, sourcePortId = null, dropPoint = null } = _nodePicker || {};
  hideNodePicker();
  if (isBoardEventKind(kind)) {
    createEventNodeFromPicker({ type: kind, sourceSceneId, sourceChoiceId, sourcePortId, dropPoint });
    return;
  }
  if (sourceChoiceId && sourceSceneId) {
    // Crea la scena e collega il ramo specifico della scelta
    const newDesc = createDescription({ position: dropPoint, isEnding: kind === "final" });
    const sourceContext = getGraphChoiceContext(sourceSceneId, sourceChoiceId);
    if (sourceContext && newDesc) {
      setBranchTargetByPort(sourceContext.choice, sourcePortId, newDesc.id);
      markSceneDirty();
      scheduleFlowLinksRender();
      scheduleJsonRender(100);
      if (!sourceContext.detached) refreshFlowCard(sourceSceneId);
      renderChoiceNodes();
      refreshFlowLinkMutationUi(sourceSceneId, sourceChoiceId);
    }
  } else {
    createDescription({ position: dropPoint, sourceDescriptionId: sourceSceneId, isEnding: kind === "final" });
  }
}

function nodePickerGoBack() {
  const step2 = document.getElementById("node-picker-step2");
  if (step2) { step2.classList.add("hidden"); step2.innerHTML = ""; }
  document.getElementById("node-picker-step1")?.classList.remove("hidden");
  const picker = document.getElementById("node-picker");
  if (picker) picker.style.maxWidth = "";
}

function renderNodePickerStep2Combat(container) {
  const picker = document.getElementById("node-picker");
  if (picker) picker.style.maxWidth = "320px";

  const header = document.createElement("div");
  header.className = "node-picker-step2-header";
  header.innerHTML = `
    <button type="button" class="node-picker-back-btn">&#8592; Indietro</button>
    <span class="node-picker-title node-picker-title--step2">Scegli mostro iniziale</span>
  `;
  header.querySelector(".node-picker-back-btn").addEventListener("click", nodePickerGoBack);
  container.appendChild(header);

  const list = document.createElement("div");
  list.className = "node-picker-preset-list";

  MONSTER_PRESETS.forEach((preset) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "node-picker-preset-btn";
    btn.innerHTML = `<span class="node-picker-preset-name">${preset.name}</span><span class="node-picker-preset-stats">HP ${preset.hitPoints} &nbsp;ATK +${preset.attackBonus} &nbsp;DEF ${preset.defense}</span>`;
    btn.addEventListener("click", () => {
      const { sourceSceneId = null, dropPoint = null } = _nodePicker || {};
      hideNodePicker();
      createSceneOfKind("combat", { position: dropPoint, sourceSceneId, presetId: preset.id });
    });
    list.appendChild(btn);
  });

  const customBtn = document.createElement("button");
  customBtn.type = "button";
  customBtn.className = "node-picker-preset-btn node-picker-preset-btn--custom";
  customBtn.innerHTML = `<span class="node-picker-preset-name">+ Mostro custom</span><span class="node-picker-preset-stats">Scegli archetipo nell'editor</span>`;
  customBtn.addEventListener("click", () => {
    const { sourceSceneId = null, dropPoint = null } = _nodePicker || {};
    hideNodePicker();
    createSceneOfKind("combat", { position: dropPoint, sourceSceneId });
  });
  list.appendChild(customBtn);

  container.appendChild(list);
}

function renderNodePickerStep2Check(container) {
  const header = document.createElement("div");
  header.className = "node-picker-step2-header";
  header.innerHTML = `
    <button type="button" class="node-picker-back-btn">&#8592; Indietro</button>
    <span class="node-picker-title node-picker-title--step2">Configura la prova</span>
  `;
  header.querySelector(".node-picker-back-btn").addEventListener("click", nodePickerGoBack);
  container.appendChild(header);

  const body = document.createElement("div");
  body.className = "node-picker-check-step";
  body.innerHTML = `
    <label class="node-picker-check-label">Abilita<select id="node-picker-skill"></select></label>
    <div class="difficulty-pills node-picker-difficulty-pills">
      <span class="difficulty-pills-label">Difficolta</span>
      <button type="button" class="difficulty-pill" data-value="8">Facile 8</button>
      <button type="button" class="difficulty-pill difficulty-pill--active" data-value="12">Media 12</button>
      <button type="button" class="difficulty-pill" data-value="16">Difficile 16</button>
      <button type="button" class="difficulty-pill" data-value="20">Brutale 20</button>
    </div>
    <div class="node-picker-check-footer">
      <button type="button" id="node-picker-check-confirm" class="node-picker-check-confirm-btn">Crea prova &#8594;</button>
      <button type="button" id="node-picker-check-skip" class="button-ghost-small">Configura dopo</button>
    </div>
  `;
  container.appendChild(body);

  hydrateSkillSelect(body.querySelector("#node-picker-skill"), "");

  let selectedDifficulty = 12;
  body.querySelectorAll(".difficulty-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      selectedDifficulty = Number(pill.dataset.value);
      body.querySelectorAll(".difficulty-pill").forEach((p) => p.classList.remove("difficulty-pill--active"));
      pill.classList.add("difficulty-pill--active");
    });
  });

  body.querySelector("#node-picker-check-confirm").addEventListener("click", () => {
    const skill = normalizeString(body.querySelector("#node-picker-skill").value);
    const { sourceSceneId = null, dropPoint = null } = _nodePicker || {};
    hideNodePicker();
    createSceneOfKind("check", { position: dropPoint, sourceSceneId, checkConfig: { skill, difficulty: selectedDifficulty } });
  });

  body.querySelector("#node-picker-check-skip").addEventListener("click", () => {
    const { sourceSceneId = null, dropPoint = null } = _nodePicker || {};
    hideNodePicker();
    createSceneOfKind("check", { position: dropPoint, sourceSceneId });
  });
}

function findNextScenePosition() {
  const anchor = state.adventure.descriptions.find((d) => d.id === state.ui.lastCreatedDescriptionId)
    || state.adventure.descriptions[state.adventure.descriptions.length - 1]
    || null;
  if (!anchor) {
    return { x: 32, y: 32 };
  }

  for (let step = 1; step <= 64; step += 1) {
    const x = anchor.position.x + SCENE_SPAWN_STEP_X * step;
    const y = anchor.position.y;
    if (!isScenePositionOccupied(x, y)) {
      return {
        x: clamp(x, -FLOW_COORD_LIMIT, FLOW_COORD_LIMIT),
        y: clamp(y, -FLOW_COORD_LIMIT, FLOW_COORD_LIMIT)
      };
    }
  }

  return {
    x: clamp(anchor.position.x + SCENE_SPAWN_STEP_X, -FLOW_COORD_LIMIT, FLOW_COORD_LIMIT),
    y: clamp(anchor.position.y, -FLOW_COORD_LIMIT, FLOW_COORD_LIMIT)
  };
}

function isScenePositionOccupied(x, y) {
  return state.adventure.descriptions.some((d) =>
    Math.abs((d.position?.x || 0) - x) < 80
    && Math.abs((d.position?.y || 0) - y) < 80
  );
}

function copySelectedSceneToClipboard() {
  const scene = getSelectedScene();
  if (!scene) return;
  saveCurrentScene({ renderFlow: false });
  state.ui.copiedDescriptionPayload = cloneValue(scene);
  updateSceneSaveStatus();
}

function pasteCopiedScene() {
  if (!state.ui.copiedDescriptionPayload) return;
  saveCurrentDescription({ renderFlow: false });
  const desc = cloneValue(state.ui.copiedDescriptionPayload);
  const duplicated = preparePastedDescription(desc);
  state.adventure.descriptions.push(duplicated);
  const previousId = state.selectedDescriptionId;
  state.selectedDescriptionId = duplicated.id;
  state.ui.lastCreatedDescriptionId = duplicated.id;
  updateFlowCardSelection(previousId, duplicated.id);
  renderWorkspace({ skipJson: true });
  scheduleJsonRender(320, { syncScene: false });
}

function preparePastedDescription(desc) {
  const duplicated = cloneValue(desc);
  duplicated.id = createUniqueSceneId();
  duplicated.title = uniqueSceneCopyTitle(duplicated.title || "Scena");
  duplicated.position = {
    x: clamp((duplicated.position?.x || 0) + 72, -FLOW_COORD_LIMIT, FLOW_COORD_LIMIT),
    y: clamp((duplicated.position?.y || 0) + 72, -FLOW_COORD_LIMIT, FLOW_COORD_LIMIT)
  };
  // Rigenera ID scelte per evitare collisioni
  duplicated.choices = (duplicated.choices || []).map((choice, index) => ({
    ...choice,
    id: `${duplicated.id}_c${index + 1}`
  }));
  return duplicated;
}

// Stub retrocompatibile — la logica dei mostri è ora inline nei CombatGroup
function duplicateCombatMonstersForScene(_scene) {}

function deleteScene() {
  if (!state.selectedDescriptionId) return;
  const deletedId = state.selectedDescriptionId;
  state.adventure.descriptions = state.adventure.descriptions.filter((d) => d.id !== deletedId);
  removeNodesFromChapterGroups([deletedId]);
  clearGraphTargetReferences(deletedId);

  if (state.adventure.startingDescriptionId === deletedId) {
    state.adventure.startingDescriptionId = state.adventure.descriptions[0]?.id || "";
  }
  state.selectedDescriptionId = state.adventure.descriptions[0]?.id || null;
  state.ui.selectedEventRef = null;
  render();
}

function clearGraphTargetReferences(deletedId) {
  if (!deletedId) return;
  const clearBranchTarget = (branch) => {
    if (!branch) return;
    if (branch.targetId === deletedId) branch.targetId = null;
  };
  const clearEventTargets = (event) => {
    if (!event) return;
    clearBranchTarget(event.branch);
    clearBranchTarget(event.victoryBranch);
    clearBranchTarget(event.defeatBranch);
    clearBranchTarget(event.retreatBranch);
    clearBranchTarget(event.successBranch);
    clearBranchTarget(event.failureBranch);
    clearBranchTarget(event.metBranch);
    clearBranchTarget(event.unmetBranch);
    if (event.root?.branch) clearBranchTarget(event.root.branch);
    (event.root?.responses || []).forEach((response) => {
      if (response?.targetId === deletedId) response.targetId = null;
      if (response?.event) clearEventTargets(response.event);
    });
  };

  state.adventure.descriptions.forEach((desc) => {
    (desc.choices || []).forEach((choice) => {
      if (choice.targetId === deletedId) choice.targetId = null;
      if (choice.event) clearEventTargets(choice.event);
    });
  });
  getAdventureEventNodes().forEach((node) => {
    if (node.targetId === deletedId) node.targetId = null;
    if (node.event) clearEventTargets(node.event);
  });
}

function deleteSelectedEventNode() {
  const eventContext = getSelectedEventContext();
  if (!eventContext?.detached) return;
  const deletedId = eventContext.choice.id;
  state.adventure.eventNodes = getAdventureEventNodes().filter((node) => node.id !== deletedId);
  removeNodesFromChapterGroups([deletedId]);
  clearGraphTargetReferences(deletedId);
  state.ui.selectedEventRef = null;
  renderFlowBoard({ preserveCenter: true });
  renderSceneEditor();
  markSceneDirty();
  scheduleJsonRender(120, { syncScene: false });
}

function deleteSelectedFlowNode() {
  const eventContext = getSelectedEventContext();
  if (eventContext?.detached) {
    deleteSelectedEventNode();
    return;
  }
  deleteScene();
}

// ─── Monster CRUD è dead code: i mostri sono ora inline nei CombatGroup ──────
// Le funzioni seguenti sono stub per evitare crash da event listener legacy.

function createMonster({ renderAfter = true } = {}) { return null; }

function createMonsterForCombatScene(_scene) { return null; }
function createMonsterFromPreset() {}

function createMonsterFromPresetData(preset, fallbackId) {
  return {
    id: fallbackId,
    name: uniqueMonsterName(preset.name),
    description: preset.description,
    hitPoints: preset.hitPoints,
    attackBonus: preset.attackBonus,
    defense: preset.defense,
    damageMin: preset.damageMin,
    damageMax: preset.damageMax,
    goldReward: preset.goldReward,
    abilityIds: preset.abilityIds || [],
    hasBerserkerPhase: preset.hasBerserkerPhase || false,
    loot: buildMonsterLootFromPreset(preset),
    sourceType: "preset",
    presetId: preset.id
  };
}

function clonePresetLoot(lootList) {
  return lootList.map((loot) => ({
    itemId: loot.itemId || "",
    itemName: loot.itemName || "",
    quantity: loot.quantity ?? 1,
    lockId: loot.lockId || "",
    category: loot.category || "",
    rarity: loot.rarity || "common",
    armorType: loot.armorType || "light",
    effectIds: Array.isArray(loot.effectIds) ? [...loot.effectIds] : [],
    effectSetId: loot.effectSetId || "",
    tier: Number(loot.tier) || undefined,
    expanded: true
  }));
}

const MONSTER_LOOT_RARITY_DROP_CHANCE = {
  common: 0.3,
  uncommon: 0.125,
  rare: 0.05,
  epic: 0.02,
  mythic: 0.02,
  legendary: 0.005,
  unique: 0.005
};

function lootDropChanceForRarity(rarity = "common") {
  return MONSTER_LOOT_RARITY_DROP_CHANCE[normalizeString(rarity)] ?? MONSTER_LOOT_RARITY_DROP_CHANCE.common;
}

function cloneLootEntry(loot) {
  return {
    itemId: loot.itemId || "",
    itemName: loot.itemName || "",
    quantity: loot.quantity ?? 1,
    lockId: loot.lockId || "",
    category: loot.category || "",
    rarity: loot.rarity || "common",
    armorType: loot.armorType || "light",
    effectIds: Array.isArray(loot.effectIds) ? [...loot.effectIds] : [],
    effectSetId: loot.effectSetId || "",
    tier: Number(loot.tier) || undefined,
    expanded: true
  };
}

function rollSignatureLootDrops(lootList) {
  return clonePresetLoot(lootList).filter((loot) => Math.random() < lootDropChanceForRarity(loot.rarity));
}

function monsterLootProfileKind(monsterLike) {
  const profile = `${monsterLike?.id || ""} ${monsterLike?.name || monsterLike?.label || ""} ${monsterLike?.description || monsterLike?.hint || ""}`.toLowerCase();
  if (/(lupo|segugio|ragno|sanguisuga|beast|hound|wolf|spider|leech|predatore|serpente|serpent|rettile|reptile|drake|lucertola|squame)/.test(profile)) return "beast";
  if (/(scheletro|revenant|devoto|catacomba|crypt|grave|undead|custode del bronzo)/.test(profile)) return "undead";
  if (/(guardiano_elite|elite|boss|capobanda|magister|knight|ritualista)/.test(profile)) return "elite";
  if (/(cult|cultista|goblin|guard|guardia|band|soldato|assassino|gregario|bruto|cavaliere|humanoid)/.test(profile)) return "humanoid";
  return "default";
}

function buildFallbackRandomLootForMonster(monsterLike) {
  const drops = [];
  const profileKind = monsterLootProfileKind(monsterLike);
  const goldMax = Math.max(4, Number(monsterLike?.goldReward) || 4);
  const profile = `${monsterLike?.id || ""} ${monsterLike?.name || monsterLike?.label || ""} ${monsterLike?.description || monsterLike?.hint || ""}`.toLowerCase();
  const isScaled = /(serpente|serpent|rettile|reptile|drake|lucertola|squame)/.test(profile);
  const isPredator = /(lupo|segugio|hound|wolf|predatore|ragno|spider|sanguisuga|leech)/.test(profile);

  function addPresetLoot(presetId, quantityMin = 1, quantityMax = quantityMin) {
    const loot = createLootFromPreset(presetId);
    loot.quantity = randomInt(quantityMin, quantityMax);
    loot.expanded = true;
    drops.push(loot);
  }

  function addOneMaterial(presetIds) {
    if (!presetIds.length) return;
    const selectedId = presetIds[randomInt(0, presetIds.length - 1)];
    addPresetLoot(selectedId);
  }

  if (profileKind === "beast") {
    if (isScaled) addOneMaterial(["scale_fragment", "crystal_shard"]);
    else if (isPredator) addOneMaterial(["wolf_pelt", "leather_strip", "herb_bundle"]);
    else addOneMaterial(["leather_strip", "herb_bundle", "wood_bundle"]);
    if (Math.random() < 0.2) addPresetLoot("coins", 2, goldMax);
  } else if (profileKind === "undead") {
    addOneMaterial(["cloth_scrap", "raw_iron"]);
    if (Math.random() < 0.35) addPresetLoot("coins", 3, goldMax + 2);
  } else if (profileKind === "elite") {
    addOneMaterial(["raw_iron", "crystal_shard", "cloth_scrap"]);
    if (Math.random() < 0.35) addPresetLoot("coins", 6, goldMax + 6);
    else if (Math.random() < 0.4) addPresetLoot("arcane_scroll");
    else addPresetLoot("warding_dust");
  } else if (profileKind === "humanoid") {
    addOneMaterial(["raw_iron", "wood_bundle", "cloth_scrap"]);
    if (Math.random() < 0.35) addPresetLoot("coins", 4, goldMax + 3);
    else if (Math.random() < 0.4) addPresetLoot("healing_potion");
    else addPresetLoot("camp_buckler");
  } else {
    addOneMaterial(["wood_bundle", "herb_bundle", "cloth_scrap"]);
    if (Math.random() < 0.3) addPresetLoot("coins", 2, goldMax);
  }

  return drops.map(cloneLootEntry);
}

function buildMonsterLootFromPreset(preset) {
  const fixedLoot = rollSignatureLootDrops(preset.loot || []);
  const variableLoot = generateVariableLootForMonster(preset);
  const merged = mergeLootEntries([...fixedLoot, ...variableLoot]);
  return merged.length ? merged : mergeLootEntries(buildFallbackRandomLootForMonster(preset));
}

function buildMonsterLootFromArchetype(archetype) {
  const monsterLike = {
    id: archetype?.id || "",
    name: archetype?.label || "",
    description: archetype?.hint || "",
    goldReward: archetype?.goldReward || 0
  };
  const variableLoot = generateVariableLootForMonster(monsterLike);
  const merged = mergeLootEntries(variableLoot);
  return merged.length ? merged : mergeLootEntries(buildFallbackRandomLootForMonster(monsterLike));
}

function regenerateLootForCombatGroup(group) {
  if (!group) return [];
  if (group.monsterId) {
    const preset = MONSTER_PRESETS.find((entry) => entry.id === group.monsterId) || null;
    if (preset) return cloneLootDraft(buildMonsterLootFromPreset(preset));
  }
  if (group.archetypeId) {
    const archetype = MONSTER_STAT_ARCHETYPES.find((entry) => entry.id === group.archetypeId) || null;
    if (archetype) return cloneLootDraft(buildMonsterLootFromArchetype(archetype));
  }
  return cloneLootDraft(mergeLootEntries(buildFallbackRandomLootForMonster({
    id: group.monsterId || group.archetypeId || "",
    name: group.name || "",
    label: group.name || "",
    description: group.description || "",
    hint: group.description || "",
    goldReward: group.goldReward || 0
  })));
}

function ensureGeneratedLootForCombatGroup(group) {
  if (!group || !Array.isArray(group.loot)) {
    if (group) group.loot = [];
  }
  if (!group || group.loot.length) return;
  group.loot = regenerateLootForCombatGroup(group);
}

function generateVariableLootForMonster(preset) {
  const profile = `${preset.id} ${preset.name} ${preset.description}`.toLowerCase();
  const drops = [];

  function addLootChance(chance, presetId, quantityMin = 1, quantityMax = quantityMin) {
    if (Math.random() >= chance) return;
    const loot = createLootFromPreset(presetId);
    loot.quantity = randomInt(quantityMin, quantityMax);
    loot.expanded = true;
    drops.push(loot);
  }

  function addOneOfChance(chance, presetIds) {
    if (!presetIds.length || Math.random() >= chance) return;
    const selectedId = presetIds[randomInt(0, presetIds.length - 1)];
    addLootChance(1, selectedId);
  }

  const isBeast = /(lupo|segugio|ragno|sanguisuga|beast|hound|wolf|spider|leech|serpente|serpent|rettile|reptile|drake|lucertola)/.test(profile);
  const isScaled = /(serpente|serpent|rettile|reptile|drake|lucertola|squame)/.test(profile);
  const isUndead = /(scheletro|revenant|devoto|catacomba|crypt|grave|undead|custode del bronzo)/.test(profile);
  const isHumanoid = /(cult|cultista|goblin|guard|guardia|band|capobanda|magister|knight|cavaliere)/.test(profile);

  if (isBeast) {
    addOneOfChance(0.62, isScaled ? ["scale_fragment", "crystal_shard"] : ["wolf_pelt", "leather_strip", "herb_bundle"]);
    addLootChance(0.24, "travel_rations");
    addLootChance(0.12, "coins", 2, 6);
    return drops;
  }

  if (isUndead) {
    addOneOfChance(0.55, ["cloth_scrap", "raw_iron"]);
    addLootChance(0.30, "coins", 4, 12);
    addOneOfChance(0.22, ["rusted_blade", "miner_helm"]);
    addLootChance(0.14, "healing_potion");
    return drops;
  }

  if (isHumanoid) {
    addOneOfChance(0.58, ["raw_iron", "wood_bundle", "cloth_scrap"]);
    addLootChance(0.30, "coins", 5, 14);
    addOneOfChance(0.26, ["dagger", "rusted_blade", "camp_buckler", "healing_potion"]);
    addOneOfChance(0.14, ["chain_mail", "warding_dust", "arcane_scroll"]);
    return drops;
  }

  addOneOfChance(0.45, ["wood_bundle", "herb_bundle", "cloth_scrap"]);
  addLootChance(0.20, "coins", 3, 8);
  addOneOfChance(0.20, ["healing_potion", "torch"]);
  return drops;
}

const RANDOM_EVENT_LOOT_RARITY_WEIGHTS = [
  { value: "common", weight: 54 },
  { value: "uncommon", weight: 24 },
  { value: "rare", weight: 13 },
  { value: "epic", weight: 6 },
  { value: "mythic", weight: 3 }
];

const RANDOM_EVENT_LOOT_CATEGORY_WEIGHTS = [
  { value: "coins", weight: 30 },
  { value: "consumable", weight: 24 },
  { value: "equipment", weight: 22 },
  { value: "defense", weight: 11 },
  { value: "accessory", weight: 7 },
  { value: "treasure", weight: 6 }
];

function weightedRandomValue(weightedEntries) {
  const total = weightedEntries.reduce((sum, entry) => sum + Math.max(0, Number(entry.weight) || 0), 0);
  if (total <= 0) return weightedEntries[0]?.value ?? null;
  let roll = Math.random() * total;
  for (const entry of weightedEntries) {
    roll -= Math.max(0, Number(entry.weight) || 0);
    if (roll <= 0) return entry.value;
  }
  return weightedEntries[weightedEntries.length - 1]?.value ?? null;
}

function createRandomEventLootEntry(preferredCategory = null, preferredRarity = null) {
  const pool = allLootPresetsForLookup().filter((preset) => {
    if (!preset || preset.id === "custom" || preset.accessoryPicker) return false;
    if (preset.category === "key" || preset.category === "quest") return false;
    if (preset.rarity === "unique" || preset.rarity === "legendary") return false;
    return true;
  });
  const rarity = preferredRarity || weightedRandomValue(RANDOM_EVENT_LOOT_RARITY_WEIGHTS) || "common";
  const categoryKey = preferredCategory || weightedRandomValue(RANDOM_EVENT_LOOT_CATEGORY_WEIGHTS) || "coins";

  if (categoryKey === "coins") {
    const coins = createLootFromPreset("coins");
    const rangeByRarity = {
      common: [4, 12],
      uncommon: [8, 18],
      rare: [12, 26],
      epic: [18, 34],
      mythic: [24, 42]
    };
    const [minQty, maxQty] = rangeByRarity[rarity] || rangeByRarity.common;
    coins.quantity = randomInt(minQty, maxQty);
    return coins;
  }

  const categoryFilter = (preset) => {
    if (categoryKey === "consumable") return ["consumable", "utility"].includes(preset.category);
    if (categoryKey === "equipment") return preset.category === "weapon";
    if (categoryKey === "defense") return ["armor", "shield"].includes(preset.category);
    if (categoryKey === "accessory") return ACCESSORY_CATEGORY_VALUES.includes(preset.category);
    if (categoryKey === "treasure") return ["treasure", "relic"].includes(preset.category);
    return true;
  };

  let filtered = pool.filter((preset) => categoryFilter(preset) && normalizeString(preset.rarity) === rarity);
  if (!filtered.length) filtered = pool.filter(categoryFilter);
  if (!filtered.length) filtered = pool;
  const preset = filtered[randomInt(0, filtered.length - 1)];
  const loot = createLootFromPreset(preset.id);
  if (loot.category === "consumable" || loot.category === "utility") {
    loot.quantity = randomInt(1, rarity === "common" ? 2 : 1);
  } else {
    loot.quantity = 1;
  }
  return loot;
}

function generateRandomEventLootBundle() {
  const drops = [];
  const includeCoins = Math.random() < 0.45;
  if (includeCoins) drops.push(createRandomEventLootEntry("coins"));
  drops.push(createRandomEventLootEntry());
  if (Math.random() < 0.18) {
    const bonusCategory = weightedRandomValue([
      { value: "consumable", weight: 40 },
      { value: "treasure", weight: 28 },
      { value: "equipment", weight: 20 },
      { value: "accessory", weight: 12 }
    ]);
    drops.push(createRandomEventLootEntry(bonusCategory));
  }
  return cloneLootDraft(mergeLootEntries(drops));
}

function mergeLootEntries(lootList) {
  const merged = new Map();
  lootList.forEach((loot) => {
    const key = `${loot.itemId || loot.itemName}|${loot.lockId || ""}|${loot.category || ""}`;
    if (!merged.has(key)) {
      merged.set(key, { ...loot });
      return;
    }
    const current = merged.get(key);
    current.quantity = (current.quantity || 1) + (loot.quantity || 1);
  });
  return [...merged.values()];
}

function randomInt(min, max) {
  if (max <= min) return min;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function applyPresetToSelectedMonster() {}
function deleteMonster() {}

function addChoice() {
  const desc = getSelectedScene();
  if (!desc) return;
  desc.choices = desc.choices || [];
  desc.choices.push({
    id: createUniqueChoiceId(desc),
    text: `Scelta ${desc.choices.length + 1}`,
    hidden: false,
    burnAfterUse: false,
    targetId: null,
    event: null
  });
  markSceneDirty();
  renderSceneEditor();
  refreshFlowCard(desc.id);
  refreshChoiceNodes(desc.id);
  scheduleJsonRender(180);
}

function addStarterKitLoot() {
  state.adventure.starterKitItems.push(createLootFromPreset(els.lootPresetSelect.value));
  render();
}

function addMonsterLoot() {}
function addCombatGroup() {}

function render() {
  return renderWorkspace();
}

function renderWorkspace({ skipJson = false } = {}) {
  renderAdventureSetup();
  renderFlowBoard();
  renderSceneEditor();
  if (!skipJson) renderJson();
}

function syncForceLoadoutUI() {
  const forced = Boolean(state.adventure.forceLoadout);
  const restore = forced && Boolean(state.adventure.restoreLoadoutOnEnd);
  els.restoreLoadoutRow.classList.toggle("hidden", !forced);
  if (!forced) {
    state.adventure.restoreLoadoutOnEnd = false;
    els.adventureRestoreLoadout.checked = false;
  }

  let icon, label, body, mod;
  if (!forced) {
    icon = "+";
    label = "Kit aggiuntivo";
    body = "Gli oggetti del kit vengono dati al giocatore in aggiunta al suo equipaggiamento pregresso (se consentito dalle impostazioni dell'avventura).";
    mod = "";
  } else if (restore) {
    icon = "+";
    label = "Loadout forzato + ripristino";
    body = "All'avvio zaino ed equip vengono azzerati: il giocatore parte solo con il kit. Al termine dell'avventura l'equipaggiamento originale viene restituito automaticamente.";
    mod = "loadout-mode-summary--restore";
  } else {
    icon = "?️";
    label = "Loadout forzato";
    body = "All'avvio zaino ed equip vengono azzerati: il giocatore parte solo con il kit. L'equipaggiamento originale non viene salvato: assicurati che sia intenzionale.";
    mod = "loadout-mode-summary--warn";
  }

  els.loadoutModeSummary.className = `loadout-mode-summary${mod ? " " + mod : ""}`;
  els.loadoutModeSummary.innerHTML = `<span class="loadout-mode-icon">${icon}</span><span><strong>${label}</strong><br><span class="loadout-mode-body">${body}</span></span>`;
}

function renderAdventureSetup() {
  els.adventureTitle.value = state.adventure.title || "";
  els.adventureDescription.value = state.adventure.description || "";
  els.adventureTag1.value = state.adventure.tags?.[0] || "";
  els.adventureTag2.value = state.adventure.tags?.[1] || "";
  els.adventureTag3.value = state.adventure.tags?.[2] || "";
  els.adventureAdaptiveMultiplier.value = Number(state.adventure.adaptivePowerMultiplier ?? 0.12).toFixed(2);
  els.adventureCarryOver.checked = Boolean(state.adventure.allowCarryOverLoadout);
  els.adventureFreshStart.checked = Boolean(state.adventure.allowFreshStart);
  els.adventureForceLoadout.checked = Boolean(state.adventure.forceLoadout);
  els.adventureRestoreLoadout.checked = Boolean(state.adventure.restoreLoadoutOnEnd);
  syncForceLoadoutUI();
  els.alphaStrictValidation.checked = Boolean(state.ui.strictAlpha);
  updateFlowZoomLabel();
  els.autosaveIndicator.textContent = state.ui.currentProjectId
    ? state.ui.autosaveAt
      ? `Progetto locale attivo | ultimo salvataggio ${formatAutosaveTime(state.ui.autosaveAt)}`
      : "Progetto locale attivo | in attesa del primo salvataggio."
    : "Nessun progetto aperto. Scegli o crea un progetto dall'archivio locale.";
  renderLootList(els.starterKitList, state.adventure.starterKitItems, {
    rerender: () => renderLootList(els.starterKitList, state.adventure.starterKitItems, {
      rerender: () => renderAdventureSetup(),
      onChange: () => { scheduleJsonRender(140, { syncScene: false }); }
    }),
    onChange: () => { scheduleJsonRender(140, { syncScene: false }); }
  });
}

function persistLocalProject({ syncScene = true } = {}) {
  try {
    if (!state.ui.currentProjectId) return;
    if (syncScene) syncCurrentSceneEditorStateFromDom();
    const payload = {
      adventure: state.adventure,
      selectedDescriptionId: state.selectedDescriptionId,
      ui: {
        strictAlpha: Boolean(state.ui.strictAlpha),
        autosaveAt: new Date().toISOString(),
        flowZoom: state.ui.flowZoom || 1
      }
    };
    window.localStorage.setItem(projectStorageKey(state.ui.currentProjectId), JSON.stringify(payload));
    state.ui.autosaveAt = payload.ui.autosaveAt;
    upsertProjectSummary(projectSummaryFromPayload(state.ui.currentProjectId, payload));
    setLastProjectId(state.ui.currentProjectId);
    if (state.ui.projectPickerOpen) {
      renderProjectPicker();
    }
    if (els.autosaveIndicator) {
      els.autosaveIndicator.textContent = `Progetto locale attivo | ultimo salvataggio ${formatAutosaveTime(state.ui.autosaveAt)}`;
    }
  } catch (error) {
    state.ui.autosaveAt = null;
  }
}

function restoreLocalProject() {
  const lastProjectId = getLastProjectId();
  if (lastProjectId && restoreProjectById(lastProjectId)) return true;
  const firstProjectId = readProjectIndex()[0]?.projectId || null;
  return restoreProjectById(firstProjectId);
}

function formatAutosaveTime(isoString) {
  try {
    return new Date(isoString).toLocaleString("it-IT", {
      day: "2-digit",
      month: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    });
  } catch (error) {
    return "non disponibile";
  }
}

function formatSceneSaveTime(isoString) {
  try {
    return new Date(isoString).toLocaleTimeString("it-IT", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  } catch (error) {
    return "ora non disponibile";
  }
}

function markSceneDirty() {
  state.ui.sceneDirty = true;
  updateSceneSaveStatus();
}

function syncChoiceCollectionFromContainer(container, choices) {
  if (!container || !Array.isArray(choices)) return;
  const choiceCards = Array.from(container.children).filter((node) =>
    node.classList?.contains("choice-card") &&
    !node.classList.contains("outcome-card") &&
    !node.classList.contains("combat-group-card")
  );

  choiceCards.forEach((card, index) => {
    const choice = choices[index];
    if (!choice) return;

    choice.text = card.querySelector('[data-field="text"]')?.value ?? choice.text;
    choice.endingText = card.querySelector('[data-field="endingText"]')?.value ?? choice.endingText;
    const attribute = normalizeString(card.querySelector('[data-field="checkAttribute"]')?.value);
    const successSceneId = normalizeString(card.querySelector('[data-field="checkSuccess"]')?.value);
    const failureSceneId = normalizeString(card.querySelector('[data-field="checkFailure"]')?.value)
      || state.selectedDescriptionId || "";
    const difficulty = Number(card.querySelector('[data-field="checkDifficulty"]')?.value || 0);

    if (attribute && successSceneId) {
      const burnOnFailure = Boolean(card.querySelector('[data-field="burnOnFailure"]')?.checked);
      choice.skillCheck = {
        attribute,
        difficulty,
        successSceneId,
        failureSceneId,
        successLoot: choice._successLootDraft || [],
        burnOnFailure: burnOnFailure || undefined
      };
      choice.targetSceneId = "";
    } else {
      delete choice.skillCheck;
      choice.targetSceneId = normalizeString(card.querySelector('[data-field="targetSceneId"]')?.value);
    }
  });
}

function syncCurrentSceneEditorStateFromDom() {
  const eventContext = getSelectedEventContext();
  if (eventContext) {
    eventContext.choice.text = els.sceneTitle?.value ?? eventContext.choice.text;
    if (eventContext.choice.event) {
      eventContext.choice.event.text = els.sceneOpeningText?.value ?? eventContext.choice.event.text;
    }
    return;
  }
  const desc = getSelectedScene();
  if (!desc) return;
  desc.title = els.sceneTitle?.value ?? desc.title;
  desc.text = els.sceneOpeningText?.value ?? desc.text;
  desc.isEnding = els.sceneIsEnding?.checked ?? desc.isEnding;
  // Le scelte sono già sincronizzate live tramite i listener nei choice card
}

function saveCurrentDescription({ announce = false, renderFlow = true } = {}) {
  if (!state.selectedDescriptionId && !getSelectedEventContext()) return;
  syncCurrentSceneEditorStateFromDom();
  if (state.ui.jsonRenderTimer) {
    window.clearTimeout(state.ui.jsonRenderTimer);
    state.ui.jsonRenderTimer = null;
  }
  state.ui.sceneDirty = false;
  state.ui.sceneSavedAt = new Date().toISOString();
  updateSceneSaveStatus();
  if (renderFlow) renderFlowBoard();
  renderJson();
}

// Alias usato in molti punti del codice
function saveCurrentScene(opts) { saveCurrentDescription(opts); }

function saveAdventureProject() {
  saveCurrentScene({ announce: true, renderFlow: true });
  persistLocalProject();
  if (els.autosaveIndicator) {
    const savedAt = new Date().toISOString();
    state.ui.autosaveAt = savedAt;
    els.autosaveIndicator.textContent = `Progetto salvato | ultimo salvataggio ${formatAutosaveTime(savedAt)}`;
  }
  flashSaveAdventureButton();
}

function flashSaveAdventureButton() {
  if (state.ui.saveAdventureFeedbackTimer) {
    window.clearTimeout(state.ui.saveAdventureFeedbackTimer);
    state.ui.saveAdventureFeedbackTimer = null;
  }

  // FAB pulse
  els.saveFab?.classList.add("is-saved");

  // Toast centrale
  if (els.saveToast) {
    els.saveToast.classList.add("visible");
  }

  state.ui.saveAdventureFeedbackTimer = window.setTimeout(() => {
    els.saveFab?.classList.remove("is-saved");
    if (els.saveToast) {
      els.saveToast.classList.remove("visible");
    }
    state.ui.saveAdventureFeedbackTimer = null;
  }, 2000);
}

function updateSceneSaveStatus() {
  if (!els.sceneSaveStatus) return;
  const scene = getSelectedScene();
  const eventContext = getSelectedEventContext();
  const subject = eventContext ? "Il nodo evento" : "Il nodo";
  els.sceneSaveStatus.textContent = !scene
    ? "Le modifiche del nodo vengono confermate quando salvi l'avventura o cambi evento."
    : state.ui.sceneDirty
      ? `Hai modifiche non salvate. Usa Salva avventura per confermare.`
      : `${subject} è salvato${state.ui.sceneSavedAt ? ` alle ${formatSceneSaveTime(state.ui.sceneSavedAt)}` : ""}.`;
}

function switchSelectedScene(nextSceneId) {
  if (!nextSceneId) return;
  const previousSceneId = state.selectedDescriptionId;
  saveCurrentScene({ renderFlow: false });
  state.selectedDescriptionId = nextSceneId;
  state.ui.selectedEventRef = null;
  updateFlowCardSelection(previousSceneId, nextSceneId);
  updateChoiceNodeSelection();
  renderSceneEditor();
}

function renderFlowBoard({ preserveCenter = false, logicalCenter = null } = {}) {
  const bounds = computeBoardBounds();
  state.ui.flowBoardBounds = bounds;
  renderFlowCards(bounds);
  renderFlowLinks(bounds);
  applyFlowZoom({ preserveCenter, rerenderOnModeChange: false, bounds, logicalCenter });
  refreshOpenTargetsPopover();
}

function renderFlowCards(bounds = computeBoardBounds()) {
  els.flowCanvas.innerHTML = "";
  state.ui.flowBoardBounds = bounds;
  els.flowCanvas.style.width = `${bounds.width}px`;
  els.flowCanvas.style.height = `${bounds.height}px`;
  renderChapterGroupFrames(bounds);
  const fragment = document.createDocumentFragment();

  state.adventure.descriptions.forEach((desc, index) => {
    if (isNodeHiddenByCollapsedChapter(desc.id)) return;
    fragment.appendChild(createFlowCard(desc, index, bounds));
  });

  els.flowCanvas.appendChild(fragment);
  renderChoiceNodes(bounds);
  updateChoiceNodeSelection();
  updateGraphNodeMultiSelection();
  renderFlowStats();
  renderMinimap();
}

function createFlowCard(desc, index, bounds = getCurrentFlowBoardBounds()) {
  const card = document.createElement("div");
  syncFlowCard(card, desc, index, bounds);

  card.addEventListener("click", (event) => {
    if (event.target.closest(".node-connector")) return;
    if (event.shiftKey) {
      event.stopPropagation();
      toggleGraphNodeMultiSelection(card.dataset.sceneId);
      return;
    }
    setGraphNodeMultiSelection([card.dataset.sceneId]);
    closeFlowQuickMenus();

    // Pulsante "+ scelta" (nel footer o nell'empty state delle scelte)
    if (event.target.closest('[data-action="add-choice"]')) {
      event.stopPropagation();
      addChoiceAndPickEvent(card.dataset.sceneId);
      return;
    }

    // Click su una riga scelta ? picker tipo evento
    const choiceRow = event.target.closest('[data-choice-id]');
    if (choiceRow) {
      switchSelectedScene(card.dataset.sceneId);
      showChoiceEventPicker(card.dataset.sceneId, choiceRow.dataset.choiceId, choiceRow.getBoundingClientRect());
      return;
    }

    switchSelectedScene(card.dataset.sceneId);
    showFlowSceneQuickMenu(card.dataset.sceneId, card.getBoundingClientRect());
  });

  card.addEventListener("dblclick", (event) => {
    if (event.target.closest(".node-connector")) return;
    if (event.target.closest('[data-action="add-choice"]')) return;

    // Doppio clic sul titolo ? modifica inline
    if (event.target.closest(".flow-card-title")) {
      event.stopPropagation();
      startInlineTitleEdit(card, desc);
      return;
    }

    switchSelectedScene(card.dataset.sceneId);
    els.sceneEditor.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  card.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    if (event.target.closest(".node-connector")) return;
    if (event.target.closest("button, input, select, textarea, [contenteditable]")) return;
    event.preventDefault();
    const sceneId = card.dataset.sceneId;
    const currentDesc = state.adventure.descriptions.find((d) => d.id === sceneId);
    if (!currentDesc) return;
    card.setPointerCapture?.(event.pointerId);
    const point = flowBoardPointFromClient(event);
    state.drag = {
      sceneId,
      offsetX: point.x - currentDesc.position.x,
      offsetY: point.y - currentDesc.position.y,
      bounds: getCurrentFlowBoardBounds(),
      pointerId: event.pointerId
    };
  });

  bindLinkHandle(card, desc);

  return card;
}

function bindLinkHandle(card, desc) {
  card.addEventListener("pointerdown", (event) => {
    if (!event.target.closest(".node-connector--out")) return;
    event.stopPropagation();
    const sceneId = card.dataset.sceneId;
    const currentDesc = state.adventure.descriptions.find((d) => d.id === sceneId);
    if (!currentDesc) return;
    const start = nodeAnchor(currentDesc);
    state.linkDraft = {
      sceneId,
      start,
      current: { ...start },
      pointerClientX: event.clientX,
      pointerClientY: event.clientY
    };
    scheduleFlowLinksRender("drag");
  }, { capture: false });
}

function syncFlowCard(card, desc, index, bounds = getCurrentFlowBoardBounds()) {
  if (card.dataset.editing === "title") return; // non ricostruire durante edit inline
  const metrics = getFlowCardMetrics();
  const boardPoint = logicalToBoardPoint(desc.position, bounds);
  const isOrphanCard = desc.id !== state.adventure.startingDescriptionId
    && state.adventure.descriptions.length > 1
    && !getConnectedSceneIds().has(desc.id);
  const sceneIndex = state.adventure.descriptions.findIndex((d) => d.id === desc.id);
  card.className = [
    "flow-card node-card",
    desc.id === state.selectedDescriptionId ? "active" : "",
    isGraphNodeMultiSelected(desc.id) ? "is-multi-selected" : "",
    metrics.compact ? "flow-card--compact" : "",
    isOrphanCard ? "flow-card--orphan" : "",
    desc.isEnding ? "flow-card--ending" : "",
    metrics.compact ? "" : `flow-card--c${sceneIndex % 8}`
  ].filter(Boolean).join(" ");
  card.dataset.sceneId = desc.id;
  card.style.left = `${boardPoint.x}px`;
  card.style.top = `${boardPoint.y}px`;
  card.style.width = `${metrics.width}px`;
  card.style.height = metrics.compact ? `${metrics.height}px` : "";
  card.style.minHeight = metrics.compact ? "" : `${metrics.height}px`;
  card.title = `${index + 1}. ${desc.title || "Senza titolo"}`;
  card.innerHTML = buildFlowCardMarkup(desc, index);
}

function buildFlowCardMarkup(desc, index) {
  const metrics = getFlowCardMetrics();
  const connectedIds = getConnectedSceneIds();
  const isStart = desc.id === state.adventure.startingDescriptionId;
  const isOrphan = !isStart && state.adventure.descriptions.length > 1 && !connectedIds.has(desc.id);
  if (metrics.compact) {
    return `
      <span class="node-connector node-connector--in" title="Ingresso nodo"></span>
      <button class="link-handle node-connector node-connector--out" title="Trascina per collegare"></button>
      <div class="flow-card-mini-index">${index + 1}</div>
      <div class="flow-card-mini-meta">
        <span>${desc.isEnding ? "FIN" : "SC"}</span>
        <span>${isStart ? "?" : ""}${isOrphan ? "!" : ""}</span>
      </div>
    `;
  }
  const choiceCount = (desc.choices || []).length;
  return `
    <span class="node-connector node-connector--in" title="Ingresso nodo"></span>
    <button class="link-handle node-connector node-connector--out" title="Trascina per collegare"></button>
    <div class="flow-card-head">
      <strong class="flow-card-title" title="Doppio clic per modificare il titolo">${index + 1}. ${esc(desc.title || "Senza titolo")}</strong>
      <span class="flow-card-badges">
        ${isStart ? '<span class="flow-badge flow-badge--start">IN</span>' : ""}
        ${desc.isEnding ? '<span class="flow-badge flow-badge--ending">FIN</span>' : ""}
        ${isOrphan ? '<span class="flow-badge flow-badge--orphan" title="Nessun nodo collega qui">!</span>' : ""}
        ${choiceCount > 0 ? `<span class="flow-badge flow-badge--choices" title="${choiceCount} scelta/e">${choiceCount}</span>` : ""}
      </span>
    </div>
  `;
}

function buildExitChip(choice, index) {
  const ev = choice.event;
  const type = ev?.type;
  const icon = type === "combat"      ? "\u2694"
    : type === "skillcheck"           ? "\u25C7"
    : type === "requirement"          ? "R"
    : type === "dialogue"             ? "D"
    : type === "shop"                 ? "$"
    : type === "loot"                 ? "L"
    : type === "transition"           ? ">"
    : "+";
  const label = choice.text || `Scelta ${index + 1}`;
  const isLinked = Boolean(choice.targetId || ev);
  const colorClass = type === "combat" ? "chip--combat"
    : type === "skillcheck"           ? "chip--check"
    : type === "requirement"          ? "chip--req"
    : isLinked                        ? "chip--nav"
    : "chip--empty";
  return `<div class="flow-exit-chip ${colorClass}" data-choice-id="${esc(choice.id)}" title="${esc(label)}">
    <span class="chip-icon">${icon}</span><span class="chip-label">${esc(truncate(label, 16))}</span>
  </div>`;
}

function renderFlowChoiceSummary(desc) {
  const choices = desc.choices || [];
  return choices.length
    ? choices.map((choice, index) => {
        const eventType = choice.event?.type;
        const icon = eventType === "combat" ? "&#x2694;"
          : eventType === "skillcheck" ? "&#x1F3B2;"
          : eventType === "requirement" ? "&#x1F511;"
          : eventType === "dialogue" ? "&#x1F4AC;"
          : eventType === "shop" ? "&#x1F6D2;"
          : "&#x2192;";
        const dest = resolveChoiceDisplayTarget(choice);
        return `<div class="flow-choice-row" data-choice-id="${esc(choice.id)}">${choiceLabel(index)} ${icon} <span class="flow-choice-dest">${dest}</span></div>`;
      }).join("")
    : '<div class="flow-empty" data-action="add-choice">+ aggiungi scelta</div>';
}

function getConnectedSceneIds() {
  const ids = new Set();
  state.adventure.descriptions.forEach((desc) => {
    (desc.choices || []).forEach((choice) => {
      resolveChoiceTargetIds(choice).forEach((id) => {
        if (state.adventure.descriptions.some((entry) => entry.id === id)) ids.add(id);
      });
    });
  });
  getAdventureEventNodes().forEach((eventNode) => {
    resolveChoiceTargetIds(eventNode).forEach((id) => {
      if (state.adventure.descriptions.some((entry) => entry.id === id)) ids.add(id);
    });
  });
  return ids;
}

function renderFlowLinks(bounds = computeBoardBounds()) {
  state.ui.flowBoardBounds = bounds;
  els.flowCanvas.style.width = `${bounds.width}px`;
  els.flowCanvas.style.height = `${bounds.height}px`;
  els.flowLinks.setAttribute("width", bounds.width);
  els.flowLinks.setAttribute("height", bounds.height);
  els.flowLinks.setAttribute("viewBox", `0 0 ${bounds.width} ${bounds.height}`);
  els.flowLinks.innerHTML = buildGraphLinkMarkup(bounds);
  updateFlowViewportMetrics(bounds);
}

function resolveGraphNodeEntry(targetId, bounds = getCurrentFlowBoardBounds()) {
  if (!targetId) return null;
  const sceneTarget = state.adventure.descriptions.find((d) => d.id === targetId);
  if (sceneTarget) return nodeEntry(sceneTarget, bounds);
  const eventTarget = getStandaloneEventNodeById(targetId);
  if (eventTarget) return eventNodeEntry(eventTarget, bounds);
  return null;
}

function buildGraphLinkMarkup(bounds = getCurrentFlowBoardBounds()) {
  const lines = [];
  const visibleBounds = shouldVirtualizeFlowLinks() ? getVisibleFlowBounds(bounds) : null;
  const { portsByGroup } = buildCollapsedChapterPortMaps(bounds);

  state.adventure.descriptions.forEach((desc) => {
    if (isNodeHiddenByCollapsedChapter(desc.id)) return;
    const choices = desc.choices || [];
    if (choices.length === 0) return;

    // Draw trunk (scene ? bus) + bus (vertical connecting choice nodes)
    lines.push(buildTrunkBusPath(desc, bounds));
  });

  collectGraphEdges(bounds).forEach((edge) => {
    const sourceGroup = getCollapsedChapterGroupByNodeId(edge.sourceNodeId);
    const targetGroup = getCollapsedChapterGroupByNodeId(edge.targetId);
    if (sourceGroup && targetGroup && sourceGroup.id === targetGroup.id) return;
    const source = sourceGroup
      ? (portsByGroup.get(sourceGroup.id)?.exits || []).find((port) =>
          port.nodeId === edge.sourceNodeId
        )?.point
      : edge.sourcePoint;
    const target = targetGroup
      ? (portsByGroup.get(targetGroup.id)?.entries || []).find((port) =>
          port.nodeId === edge.targetId
        )?.point
      : resolveGraphNodeEntry(edge.targetId, bounds);
    if (!source || !target) return;
    if (shouldRenderFlowLink(source, target, visibleBounds)) {
      lines.push(linkPath(source, target, edge.color, edge.dashed, edge.label));
    }
  });

  if (state.linkDraft) {
    lines.push(linkPath(state.linkDraft.start, state.linkDraft.current, "#f5e9d0", true));
  }

  return `
    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,6 L9,3 z" fill="#c7b396"></path>
      </marker>
    </defs>
    ${lines.join("")}
  `;
}

function renderOutcomeSummary(scene) {
  const definitions = outcomeDefinitionsForScene(scene);
  if (!definitions.length) return '<div class="flow-empty">Nessun esito ancora.</div>';
  return definitions.map((definition) => {
    const branch = getOutcomeBranch(scene, definition.key);
    const label = outcomeShortLabel(definition.key);
    const value = branch.choices.length
      ? `${branch.choices.length} scelta/e`
      : sceneTitleById(branch.targetSceneId, definition.key === "retreat" ? "fallback sconfitta" : "non impostato");
    return `<div class="flow-choice-row">${label} -> ${value}</div>`;
  }).join("");
}

// Colore del link in base al tipo di evento sulla scelta
function choiceLinkColor(choice) {
  const type = choice.event?.type;
  if (type === "combat")     return "#b94a48"; // rosso
  if (type === "skillcheck") return "#c8a84b"; // giallo
  if (type === "requirement") return "#6d84b5"; // blu
  if (type === "dialogue")   return "#7a5fa0"; // viola
  if (type === "shop")       return "#5a9e6a"; // verde scuro
  if (type === "loot")       return "#6f8a57"; // verde
  if (type === "condition")  return "#8a6d5a"; // marrone caldo
  if (type === "transition") return "#888";    // grigio
  return "#b56d39"; // arancione default (navigazione diretta)
}

// Restituisce il/i target visibili di una choice per la card summary
function resolveChoiceDisplayTarget(choice) {
  if (!choice.event) return sceneTitleById(choice.targetId);
  const ev = choice.event;
  if (ev.type === "skillcheck")
    return `${sceneTitleById(ev.successBranch?.targetId, "?")} / ${sceneTitleById(ev.failureBranch?.targetId, "?")}`;
  if (ev.type === "combat")
    return `${sceneTitleById(ev.victoryBranch?.targetId, "V?")} / ${sceneTitleById(ev.defeatBranch?.targetId, "D?")}`;
  if (ev.type === "requirement")
    return `${sceneTitleById(ev.metBranch?.targetId, "Si")} / ${sceneTitleById(ev.unmetBranch?.targetId, "No")}`;
  const branch = ev.branch || ev.victoryBranch;
  return sceneTitleById(branch?.targetId);
}

// Raccoglie i targetId di una choice (tutti i rami di un evento)
function resolveChoiceTargetIds(choice) {
  if (!choice.event) return choice.targetId ? [choice.targetId] : [];
  const ev = choice.event;
  const ids = [];
  const addBranch = (b) => { if (b?.targetId && b.targetId !== DEATH_SENTINEL && b.targetId !== STAY_SENTINEL) ids.push(b.targetId); };
  if (ev.type === "skillcheck")  { addBranch(ev.successBranch); addBranch(ev.failureBranch); }
  else if (ev.type === "combat") { addBranch(ev.victoryBranch); addBranch(ev.defeatBranch); if (ev.retreatBranch) addBranch(ev.retreatBranch); }
  else if (ev.type === "requirement") { addBranch(ev.metBranch); addBranch(ev.unmetBranch); }
  else if (ev.type === "dialogue") {
    const responses = Array.isArray(ev.root?.responses) ? ev.root.responses : [];
    if (responses.length) responses.forEach((response) => addBranch(response));
    else addBranch(ev.branch || ev.root?.branch);
  }
  else                            { addBranch(ev.branch); }
  return ids;
}

function appendDescriptionChoiceLinks(lines, source, choice, color, visibleBounds = null, bounds = getCurrentFlowBoardBounds()) {
  if (choice.event) {
    const ev = choice.event;
    const icon = ev.type === "combat" ? "\u2694" : ev.type === "skillcheck" ? "\u25C7"
      : ev.type === "requirement" ? "R" : ev.type === "shop" ? "$"
      : ev.type === "loot" ? "L" : ev.type === "dialogue" ? "D" : "";
    if (ev.type === "skillcheck") {
      appendBranchLink(lines, source, ev.successBranch, "#6f8a57", visibleBounds, bounds, false, icon);
      appendBranchLink(lines, source, ev.failureBranch, "#b94a48", visibleBounds, bounds, false, "");
    } else if (ev.type === "combat") {
      appendBranchLink(lines, source, ev.victoryBranch, "#6f8a57", visibleBounds, bounds, false, icon);
      appendBranchLink(lines, source, ev.defeatBranch, "#b94a48", visibleBounds, bounds, false, "");
      if (ev.retreatBranch) appendBranchLink(lines, source, ev.retreatBranch, "#6d84b5", visibleBounds, bounds, true, "");
    } else if (ev.type === "requirement") {
      appendBranchLink(lines, source, ev.metBranch, "#6f8a57", visibleBounds, bounds, false, icon);
      appendBranchLink(lines, source, ev.unmetBranch, "#b94a48", visibleBounds, bounds, false, "");
    } else if (ev.type === "dialogue") {
      const responses = Array.isArray(ev.root?.responses) ? ev.root.responses : [];
      if (responses.length) {
        responses.forEach((response, index) => {
          appendBranchLink(lines, source, response, "#8b78b8", visibleBounds, bounds, false, index === 0 ? icon : "");
        });
      } else {
        const branch = ev.branch || ev.root?.branch;
        if (branch) appendBranchLink(lines, source, branch, color, visibleBounds, bounds, false, icon);
      }
    } else {
      const branch = ev.branch;
      if (branch) appendBranchLink(lines, source, branch, color, visibleBounds, bounds, false, icon);
    }
  } else if (choice.targetId && choice.targetId !== DEATH_SENTINEL && choice.targetId !== STAY_SENTINEL) {
    const targetEntry = resolveGraphNodeEntry(choice.targetId, bounds);
    if (targetEntry && shouldRenderFlowLink(source, targetEntry, visibleBounds)) {
      lines.push(linkPath(source, targetEntry, color));
    }
  }
}

function appendBranchLink(lines, source, branch, color, visibleBounds, bounds, dashed = false, label = "") {
  if (!branch?.targetId || branch.targetId === DEATH_SENTINEL || branch.targetId === STAY_SENTINEL) return;
  const targetEntry = resolveGraphNodeEntry(branch.targetId, bounds);
  if (!targetEntry) return;
  if (shouldRenderFlowLink(source, targetEntry, visibleBounds)) {
    lines.push(linkPath(source, targetEntry, color, dashed, label));
  }
}

function outcomeShortLabel(key) {
  if (key === "success") return "Riuscita";
  if (key === "failure") return "Fallimento";
  if (key === "victory") return "Vittoria";
  if (key === "defeat") return "Sconfitta";
  if (key === "retreat") return "Ritirata";
  return key;
}

function outcomeLinkColor(key) {
  if (key === "success" || key === "victory") return "#6f8a57";
  if (key === "failure" || key === "defeat") return "#b94a48";
  if (key === "retreat") return "#6d84b5";
  return "#b56d39";
}

function linkPath(source, target, color, dashed = false, label = "") {
  const dx = Math.max(80, Math.abs(target.x - source.x) * 0.4);
  const dash = dashed ? ' stroke-dasharray="7 6"' : "";
  const path = `<path d="M ${source.x} ${source.y} C ${source.x + dx} ${source.y}, ${target.x - dx} ${target.y}, ${target.x} ${target.y}" stroke="${color}" stroke-width="3" fill="none" marker-end="url(#arrow)" opacity="0.9"${dash} />`;
  if (!label) return path;
  // Midpoint approssimato della cubica a t=0.5
  const mx = Math.round((source.x + target.x) / 2);
  const my = Math.round((source.y + target.y) / 2);
  const badge = `<g transform="translate(${mx},${my})" class="flow-link-badge" pointer-events="none">
    <circle r="9" fill="${color}" opacity="0.85"/>
    <text text-anchor="middle" dominant-baseline="central" font-size="11" fill="white">${label}</text>
  </g>`;
  return path + badge;
}

function computeBoardBounds() {
  const metrics = getFlowCardMetrics();
  const scenePositions = state.adventure.descriptions
    .filter((desc) => !isNodeHiddenByCollapsedChapter(desc.id))
    .map((d) => d.position || { x: 0, y: 0 });
  const eventPositions = getAdventureEventNodes()
    .filter((node) => !isNodeHiddenByCollapsedChapter(node.id))
    .map((node) => node.position || { x: 0, y: 0 });
  const chapterFrames = getAdventureChapterGroups()
    .filter((group) => group.collapsed)
    .map((group) => {
      const frame = chapterGroupCollapsedFrame(group, { offsetX: 0, offsetY: 0 });
      return {
        x: frame.left,
        y: frame.top,
        width: frame.width,
        height: frame.height
      };
    });
  const allPositions = scenePositions.concat(eventPositions);
  const minX = allPositions.length ? Math.min(...allPositions.map((point) => point.x), 0) : 0;
  const minY = allPositions.length ? Math.min(...allPositions.map((point) => point.y), 0) : 0;
  // Choice nodes extend beyond the scene card right edge
  const choiceNodeExtra = metrics.compact
    ? CHOICE_BUS_GAP + CHOICE_NODE_R + 4
    : CHOICE_BUS_GAP + Math.ceil(FLOW_EVENT_NODE_WIDTH / 2) + 10;
  const maxSceneX = scenePositions.length ? Math.max(...scenePositions.map((point) => point.x + metrics.width + choiceNodeExtra), metrics.width) : metrics.width;
  const maxSceneY = scenePositions.length ? Math.max(...scenePositions.map((point) => point.y + metrics.height), metrics.height) : metrics.height;
  const maxEventX = eventPositions.length ? Math.max(...eventPositions.map((point) => point.x + FLOW_EVENT_NODE_WIDTH / 2 + 32), 0) : 0;
  const maxEventY = eventPositions.length ? Math.max(...eventPositions.map((point) => point.y + FLOW_EVENT_NODE_HEIGHT / 2 + 32), 0) : 0;
  const maxChapterX = chapterFrames.length ? Math.max(...chapterFrames.map((frame) => frame.x + frame.width), 0) : 0;
  const maxChapterY = chapterFrames.length ? Math.max(...chapterFrames.map((frame) => frame.y + frame.height), 0) : 0;
  const minChapterX = chapterFrames.length ? Math.min(...chapterFrames.map((frame) => frame.x), 0) : 0;
  const minChapterY = chapterFrames.length ? Math.min(...chapterFrames.map((frame) => frame.y), 0) : 0;
  const finalMinX = Math.min(minX, minChapterX);
  const finalMinY = Math.min(minY, minChapterY);
  const maxX = Math.max(maxSceneX, maxEventX, maxChapterX, metrics.width);
  const maxY = Math.max(maxSceneY, maxEventY, maxChapterY, metrics.height);
  const contentWidth = Math.max(metrics.width, maxX - finalMinX);
  const contentHeight = Math.max(metrics.height, maxY - finalMinY);
  const zoom = state.ui.flowZoom || 1;
  const viewportLogicalWidth = Math.ceil((els.flowBoard?.clientWidth || FLOW_WORKSPACE_MIN_WIDTH) / zoom);
  const viewportLogicalHeight = Math.ceil((els.flowBoard?.clientHeight || FLOW_WORKSPACE_MIN_HEIGHT) / zoom);
  const width = Math.max(
    Math.max(FLOW_WORKSPACE_MIN_WIDTH, viewportLogicalWidth),
    Math.ceil(contentWidth + FLOW_WORKSPACE_PADDING * 2)
  );
  const height = Math.max(
    Math.max(FLOW_WORKSPACE_MIN_HEIGHT, viewportLogicalHeight),
    Math.ceil(contentHeight + FLOW_WORKSPACE_PADDING * 2)
  );
  const offsetX = FLOW_WORKSPACE_PADDING - finalMinX;
  const offsetY = FLOW_WORKSPACE_PADDING - finalMinY;
  return { width, height, minX: finalMinX, minY: finalMinY, maxX, maxY, offsetX, offsetY };
}

function getCurrentFlowBoardBounds() {
  return state.ui.flowBoardBounds || computeBoardBounds();
}

function isCompactFlowZoom(zoom = state.ui.flowZoom || 1) {
  return Number(zoom || 1) <= FLOW_COMPACT_ZOOM_THRESHOLD;
}

function getFlowCardMetrics(zoom = state.ui.flowZoom || 1) {
  if (isCompactFlowZoom(zoom)) {
    return { width: 88, height: 72, compact: true };
  }
  return { width: NODE_WIDTH, height: NODE_HEIGHT, compact: false };
}

function logicalToBoardPoint(point, bounds = getCurrentFlowBoardBounds()) {
  return {
    x: point.x + bounds.offsetX,
    y: point.y + bounds.offsetY
  };
}

function boardToLogicalPoint(point, bounds = getCurrentFlowBoardBounds()) {
  return {
    x: point.x - bounds.offsetX,
    y: point.y - bounds.offsetY
  };
}

function estimateFlowLinkCount() {
  return state.adventure.descriptions.reduce((total, desc) => {
    return total + (desc.choices?.length || 0);
  }, state.linkDraft ? 1 : 0);
}

function shouldVirtualizeFlowLinks() {
  return state.adventure.descriptions.length >= FLOW_LINK_VIRTUALIZE_SCENE_THRESHOLD
    || estimateFlowLinkCount() >= FLOW_LINK_VIRTUALIZE_COUNT_THRESHOLD;
}

function getVisibleFlowBounds(bounds = getCurrentFlowBoardBounds(), margin = FLOW_LINK_VIEWPORT_MARGIN) {
  const zoom = state.ui.flowZoom || 1;
  const topLeft = boardToLogicalPoint({
    x: els.flowBoard.scrollLeft / zoom,
    y: els.flowBoard.scrollTop / zoom
  }, bounds);
  const bottomRight = boardToLogicalPoint({
    x: (els.flowBoard.scrollLeft + els.flowBoard.clientWidth) / zoom,
    y: (els.flowBoard.scrollTop + els.flowBoard.clientHeight) / zoom
  }, bounds);
  return {
    left: topLeft.x - margin,
    top: topLeft.y - margin,
    right: bottomRight.x + margin,
    bottom: bottomRight.y + margin
  };
}

function shouldRenderFlowLink(source, target, visibleBounds) {
  if (!visibleBounds) return true;
  const dx = Math.max(80, Math.abs(target.x - source.x) * 0.4);
  const minX = Math.min(source.x, target.x, source.x + dx, target.x - dx) - 48;
  const maxX = Math.max(source.x, target.x, source.x + dx, target.x - dx) + 48;
  const minY = Math.min(source.y, target.y) - 64;
  const maxY = Math.max(source.y, target.y) + 64;
  return !(
    maxX < visibleBounds.left
    || minX > visibleBounds.right
    || maxY < visibleBounds.top
    || minY > visibleBounds.bottom
  );
}

function choiceEventType(choice) {
  return choice?.event?.type || (choice?.targetId ? "transition" : "empty");
}

function choiceEventVisual(choice) {
  const type = choiceEventType(choice);
  const map = {
    combat: { icon: "", label: "Combattimento", className: "choice-node--combat", cardClass: "choice-card--combat" },
    skillcheck: { icon: "", label: "Prova", className: "choice-node--check", cardClass: "choice-card--skillcheck" },
    requirement: { icon: "", label: "Requisito", className: "choice-node--req", cardClass: "choice-card--requirement" },
    shop: { icon: "", label: "Negozio", className: "choice-node--shop", cardClass: "choice-card--shop" },
    loot: { icon: "", label: "Loot", className: "choice-node--loot", cardClass: "choice-card--loot" },
    condition: { icon: "", label: "Condizione", className: "choice-node--condition", cardClass: "choice-card--condition" },
    dialogue: { icon: "", label: "Dialogo", className: "choice-node--dialogue", cardClass: "choice-card--dialogue" },
    transition: { icon: "", label: "Transizione", className: "choice-node--nav", cardClass: "choice-card--transition" },
    empty: { icon: "○", label: "Evento", className: "choice-node--empty", cardClass: "choice-card--empty" }
  };
  return map[type] || map.empty;
}

function dialogueResponsePortId(responseId) {
  return `response:${responseId}`;
}

function eventPortsForType(eventOrType) {
  const event = typeof eventOrType === "string" ? null : eventOrType;
  const eventType = typeof eventOrType === "string" ? eventOrType : eventOrType?.type;
  if (eventType === "combat") return [
    { id: "victory", label: "Vittoria" },
    { id: "defeat", label: "Sconfitta" },
    { id: "retreat", label: "Ritirata" }
  ];
  if (eventType === "skillcheck") return [
    { id: "success", label: "Riuscita" },
    { id: "failure", label: "Fallimento" }
  ];
  if (eventType === "requirement") return [
    { id: "met", label: "Soddisfatto" },
    { id: "unmet", label: "Non soddisfatto" }
  ];
  if (eventType === "dialogue") {
    ensureDialogueEventDefaults(event);
    const responses = Array.isArray(event?.root?.responses) ? event.root.responses : [];
    if (responses.length) {
      return responses.map((response, index) => ({
        id: dialogueResponsePortId(response.id),
        label: `R${index + 1}`
      }));
    }
  }
  return [{ id: "next", label: "Continua" }];
}

function eventBranchByPortId(event, portId) {
  if (!event) return null;
  if (event.type === "combat") return portId === "victory"
    ? event.victoryBranch
    : portId === "defeat"
      ? event.defeatBranch
      : event.retreatBranch;
  if (event.type === "skillcheck") return portId === "success" ? event.successBranch : event.failureBranch;
  if (event.type === "requirement") return portId === "met" ? event.metBranch : event.unmetBranch;
  if (event.type === "dialogue") {
    ensureDialogueEventDefaults(event);
    if (portId?.startsWith("response:")) {
      const responseId = portId.slice("response:".length);
      return (event.root?.responses || []).find((response) => response.id === responseId) || null;
    }
    return event.branch || event.root?.branch || null;
  }
  return event.branch || null;
}

function summarizeChoiceFlow(choice) {
  const visual = choiceEventVisual(choice);
  if (choice?.event) {
    const ports = eventPortsForType(choice.event);
    const linked = ports.filter((port) => {
      const branch = eventBranchByPortId(choice.event, port.id);
      return Boolean(branch?.targetId || branch?.event);
    });
    if (!linked.length) return `${visual.label} | da collegare nella mappa`;
    return `${visual.label} | ${linked.map((port) => port.label).join(" / ")}`;
  }
  if (choice?.targetId) {
    return `${visual.label} | ${sceneTitleById(choice.targetId, "destinazione")}`;
  }
  return "Evento ancora da definire";
}

function buildAdventureGraphProjection(adventure = state.adventure) {
  const graph = {
    startNodeId: adventure.startingDescriptionId || "",
    nodes: [],
    edges: []
  };
  const nodeIndex = new Set();
  const edgeIndex = new Set();

  function addNode(node) {
    if (nodeIndex.has(node.id)) return;
    nodeIndex.add(node.id);
    graph.nodes.push(node);
  }

  function addEdge(edge) {
    const key = `${edge.fromNodeId}:${edge.fromPortId || ""}->${edge.toNodeId}`;
    if (edgeIndex.has(key)) return;
    edgeIndex.add(key);
    graph.edges.push(edge);
  }

  function ensureEventNode(choice, event, ownerNodeId, ownerPortId, chainKey, options = {}) {
    if (!event) return null;
    const visual = choiceEventVisual({ ...choice, event, targetId: null });
    const eventNodeId = options.eventNodeId || `${ownerNodeId}__${ownerPortId || "next"}__${chainKey}`;
    addNode({
      id: eventNodeId,
      nodeType: "event",
      eventType: event.type || "transition",
      label: options.label || choice?.text || visual.label,
      ports: eventPortsForType(event),
      ref: {
        descriptionId: options.descriptionId || null,
        choiceId: choice?.id || null,
        ownerNodeId,
        ownerPortId: ownerPortId || null
      }
    });
    addEdge({
      id: `${ownerNodeId}__${ownerPortId || "next"}__edge`,
      fromNodeId: ownerNodeId,
      fromPortId: ownerPortId || null,
      toNodeId: eventNodeId
    });

    eventPortsForType(event).forEach((port) => {
      const branch = eventBranchByPortId(event, port.id);
      if (!branch) return;
      if (branch.event) {
        ensureEventNode(choice, branch.event, eventNodeId, port.id, `${port.id}__event`, {
          label: `${visual.label} — ${port.label}`,
          descriptionId: options.descriptionId || null
        });
        return;
      }
      if (branch.targetId && ![DEATH_SENTINEL, STAY_SENTINEL, RETRY_SENTINEL, NO_ESCAPE_SENTINEL].includes(branch.targetId)) {
        addEdge({
          id: `${eventNodeId}__${port.id}__${branch.targetId}`,
          fromNodeId: eventNodeId,
          fromPortId: port.id,
          toNodeId: branch.targetId
        });
      }
    });

    return eventNodeId;
  }

  (adventure.descriptions || []).forEach((desc, descIndex) => {
    addNode({
      id: desc.id,
      nodeType: "description",
      title: desc.title || `Scena ${descIndex + 1}`,
      ports: (desc.choices || []).map((choice, index) => ({
        id: choice.id || `${desc.id}__choice_${index + 1}`,
        portType: "choice",
        label: choice.text || `Scelta ${index + 1}`
      }))
    });

    (desc.choices || []).forEach((choice, index) => {
      const portId = choice.id || `${desc.id}__choice_${index + 1}`;
      if (choice.event) {
        ensureEventNode(choice, choice.event, desc.id, portId, "event", {
          descriptionId: desc.id
        });
      } else {
        const syntheticTransition = {
          type: "transition",
          branch: { targetId: choice.targetId || null }
        };
        ensureEventNode(choice, syntheticTransition, desc.id, portId, "transition", {
          label: choice.text || `Scelta ${index + 1}`,
          descriptionId: desc.id
        });
      }
    });
  });

  return graph;
}

function updateFlowViewportMetrics(bounds = computeBoardBounds()) {
  const zoom = state.ui.flowZoom || 1;
  if (els.flowViewport) {
    els.flowViewport.style.width = `${bounds.width}px`;
    els.flowViewport.style.height = `${bounds.height}px`;
    els.flowViewport.style.transform = `scale(${zoom})`;
  }
  if (els.flowStage) {
    els.flowStage.style.width = `${Math.ceil(bounds.width * zoom)}px`;
    els.flowStage.style.height = `${Math.ceil(bounds.height * zoom)}px`;
  }
  updateFlowZoomLabel();
}

function updateFlowZoomLabel() {
  if (!els.flowZoomLabel) return;
  els.flowZoomLabel.textContent = `${Math.round((state.ui.flowZoom || 1) * 100)}%`;
}

function applyFlowZoom({ preserveCenter = true, rerenderOnModeChange = true, bounds = null, logicalCenter = null } = {}) {
  const nextZoom = Math.min(FLOW_ZOOM_MAX, Math.max(FLOW_ZOOM_MIN, Number(state.ui.flowZoom || 1)));
  const previousZoom = Number(els.flowViewport?.dataset.zoom || 1);
  const board = els.flowBoard;
  const previousCompact = isCompactFlowZoom(previousZoom);
  const nextCompact = isCompactFlowZoom(nextZoom);
  let logicalCenterX = 0;
  let logicalCenterY = 0;
  if (logicalCenter) {
    logicalCenterX = logicalCenter.x;
    logicalCenterY = logicalCenter.y;
  } else if (board && preserveCenter) {
    const previousBounds = getCurrentFlowBoardBounds();
    const previousCenter = boardToLogicalPoint({
      x: (board.scrollLeft + board.clientWidth / 2) / previousZoom,
      y: (board.scrollTop + board.clientHeight / 2) / previousZoom
    }, previousBounds);
    logicalCenterX = previousCenter.x;
    logicalCenterY = previousCenter.y;
  }
  state.ui.flowZoom = nextZoom;
  if (rerenderOnModeChange && previousCompact !== nextCompact) {
    renderFlowBoard({
      preserveCenter,
      logicalCenter: { x: logicalCenterX, y: logicalCenterY }
    });
    return;
  }
  const effectiveBounds = bounds || computeBoardBounds();
  state.ui.flowBoardBounds = effectiveBounds;
  updateFlowViewportMetrics(effectiveBounds);
  if (els.flowViewport) {
    els.flowViewport.dataset.zoom = String(nextZoom);
  }
  if (board && preserveCenter) {
    const nextCenter = logicalToBoardPoint({ x: logicalCenterX, y: logicalCenterY }, effectiveBounds);
    board.scrollLeft = Math.max(0, nextCenter.x * nextZoom - board.clientWidth / 2);
    board.scrollTop = Math.max(0, nextCenter.y * nextZoom - board.clientHeight / 2);
  }
  if (Math.abs(previousZoom - nextZoom) > 0.001) {
    scheduleFlowLinksRender("zoom");
  }
}

function changeFlowZoom(delta) {
  state.ui.flowZoom = Math.round((state.ui.flowZoom + delta) * 100) / 100;
  applyFlowZoom({ preserveCenter: true });
}

// ─── Scroll flow board to a given scene ──────────────────────────────────────

function scrollFlowBoardToScene(sceneId) {
  const scene = state.adventure.descriptions.find((d) => d.id === sceneId);
  if (!scene || !els.flowBoard) return;
  const bounds = getCurrentFlowBoardBounds();
  const zoom = state.ui.flowZoom || 1;
  const bp = logicalToBoardPoint(scene.position, bounds);
  const metrics = getFlowCardMetrics();
  els.flowBoard.scrollTo({
    left: Math.max(0, bp.x * zoom - els.flowBoard.clientWidth / 2 + (metrics.width * zoom) / 2),
    top: Math.max(0, bp.y * zoom - els.flowBoard.clientHeight / 2 + (metrics.height * zoom) / 2),
    behavior: "smooth"
  });
}

// Helper: aggiungi pulsante ? accanto a un select di destinazione scena
function attachNavigateBtn(container, selector) {
  const select = container.querySelector(selector);
  if (!select) return;
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "btn-navigate-node";
  btn.title = "Vai al nodo nel flusso";
  btn.textContent = "?";
  btn.addEventListener("click", () => {
    const sceneId = select.value;
    if (!sceneId) return;
    switchSelectedScene(sceneId);
    scrollFlowBoardToScene(sceneId);
  });
  const parent = select.closest("label") || select.parentElement;
  parent.after(btn);
}

// ─── Flow stats counter ───────────────────────────────────────────────────────

function renderFlowStats() {
  if (!els.flowStats) return;
  const descriptionCount = state.adventure.descriptions.length;
  const eventCount = getAdventureEventNodes().length;
  const chapterCount = getAdventureChapterGroups().length;
  const endings = state.adventure.descriptions.filter((d) => d.isEnding).length;
  const baseLabel = `${descriptionCount} descr. | ${eventCount} eventi${chapterCount ? ` | ${chapterCount} capitol${chapterCount === 1 ? "o" : "i"}` : ""}`;
  els.flowStats.textContent = endings > 0
    ? `${baseLabel} | ${endings} fin${endings === 1 ? "e" : "i"}`
    : baseLabel;
  renderChapterGroupingUi();
}

// ─── Flow search / filter ─────────────────────────────────────────────────────

function filterFlowCards(query) {
  const q = (query || "").trim().toLowerCase();
  els.flowCanvas.querySelectorAll(".node-card").forEach((card) => {
    const descId = card.dataset.sceneId;
    const desc = state.adventure.descriptions.find((d) => d.id === descId);
    if (!q) {
      card.classList.remove("flow-card--dim", "flow-card--match");
      return;
    }
    const matches = desc && (
      desc.title.toLowerCase().includes(q) ||
      (desc.text || "").toLowerCase().includes(q)
    );
    card.classList.toggle("flow-card--dim", !matches);
    card.classList.toggle("flow-card--match", matches);
  });
}

// ─── Minimap ──────────────────────────────────────────────────────────────────

function minimapLogicalBounds() {
  const points = state.adventure.descriptions.map((d) => d.position || { x: 0, y: 0 })
    .concat(getAdventureEventNodes().map((node) => node.position || { x: 0, y: 0 }));
  if (!points.length) return { minX: 0, maxX: 400, minY: 0, maxY: 300 };
  const xs = points.map((point) => point.x || 0);
  const ys = points.map((point) => point.y || 0);
  return {
    minX: Math.min(...xs) - 80,
    maxX: Math.max(...xs) + 280,
    minY: Math.min(...ys) - 60,
    maxY: Math.max(...ys) + 160
  };
}

function renderMinimap() {
  const canvas = els.flowMinimap;
  if (!canvas || !els.flowMinimapWrap || els.flowMinimapWrap.classList.contains("hidden")) return;
  const ctx = canvas.getContext("2d");
  const W = canvas.width;
  const H = canvas.height;
  ctx.clearRect(0, 0, W, H);
  if (!state.adventure.descriptions.length) return;
  const { minX, maxX, minY, maxY } = minimapLogicalBounds();
  const rangeX = maxX - minX;
  const rangeY = maxY - minY;
  const toMX = (x) => ((x - minX) / rangeX) * W;
  const toMY = (y) => ((y - minY) / rangeY) * H;
  const connectedIds = getConnectedSceneIds();
  state.adventure.descriptions.forEach((desc) => {
    const mx = toMX(desc.position?.x || 0);
    const my = toMY(desc.position?.y || 0);
    const isSelected = desc.id === state.selectedDescriptionId;
    const isStart = desc.id === state.adventure.startingDescriptionId;
    const isEnding = desc.isEnding;
    const isOrphan = !isStart && state.adventure.descriptions.length > 1 && !connectedIds.has(desc.id);
    ctx.fillStyle = isSelected ? "#c89a3a" : isStart ? "#74a475" : isEnding ? "#9b74a4" : isOrphan ? "#ca655b" : "#4a6280";
    ctx.fillRect(mx - 4, my - 3, 10, 6);
  });
  getAdventureEventNodes().forEach((node) => {
    const mx = toMX(node.position?.x || 0);
    const my = toMY(node.position?.y || 0);
    const isSelected = isEventNodeSelected(node.id, node.id);
    ctx.fillStyle = isSelected ? "#c89a3a" : "#a96b43";
    ctx.fillRect(mx - 3, my - 3, 7, 7);
  });
  // Rettangolo viewport
  const zoom = state.ui.flowZoom || 1;
  const bounds = getCurrentFlowBoardBounds();
  const board = els.flowBoard;
  if (board) {
    const vpLeft = boardToLogicalPoint({ x: board.scrollLeft / zoom, y: board.scrollTop / zoom }, bounds);
    const vpRight = boardToLogicalPoint({ x: (board.scrollLeft + board.clientWidth) / zoom, y: (board.scrollTop + board.clientHeight) / zoom }, bounds);
    ctx.strokeStyle = "rgba(200,154,58,0.55)";
    ctx.lineWidth = 1;
    ctx.strokeRect(
      toMX(vpLeft.x), toMY(vpLeft.y),
      toMX(vpRight.x) - toMX(vpLeft.x),
      toMY(vpRight.y) - toMY(vpLeft.y)
    );
  }
}

function initMinimap() {
  const canvas = els.flowMinimap;
  if (!canvas) return;
  canvas.addEventListener("click", (e) => {
    if (!state.adventure.descriptions.length) return;
    const rect = canvas.getBoundingClientRect();
    const { minX, maxX, minY, maxY } = minimapLogicalBounds();
    const logX = ((e.clientX - rect.left) / canvas.width) * (maxX - minX) + minX;
    const logY = ((e.clientY - rect.top) / canvas.height) * (maxY - minY) + minY;
    let nearest = null;
    let nearestDist = Infinity;
    state.adventure.descriptions.forEach((desc) => {
      const dx = (desc.position?.x || 0) - logX;
      const dy = (desc.position?.y || 0) - logY;
      const dist = Math.hypot(dx, dy);
      if (dist < nearestDist) { nearestDist = dist; nearest = desc; }
    });
    if (nearest) {
      switchSelectedScene(nearest.id);
      scrollFlowBoardToScene(nearest.id);
    }
  });
  // Aggiorna viewport rect durante lo scroll
  els.flowBoard?.addEventListener("scroll", () => renderMinimap(), { passive: true });
}

// ─── Scene status dot (validazione live) ─────────────────────────────────────

function computeSceneStatus(desc) {
  if (!desc) return null;
  const hasText = Boolean(desc.text?.trim());
  const choices = desc.choices || [];
  if (desc.isEnding) {
    if (!hasText) return { level: "warn", msg: "Nessun testo di chiusura." };
    return { level: "ok", msg: "Epilogo completo." };
  }
  const hasLinkedChoice = choices.some((c) => c.targetId || c.event);
  if (!hasText) return { level: "warn", msg: "Nessun testo ancora." };
  if (choices.length === 0) return { level: "warn", msg: "Nessuna scelta." };
  if (!hasLinkedChoice) return { level: "warn", msg: "Nessuna scelta collegata." };
  return { level: "ok", msg: "Nodo completo." };
}

function updateSceneStatusDot() {
  const dot = els.sceneStatusDot;
  if (!dot) return;
  const scene = getSelectedScene();
  const status = computeSceneStatus(scene);
  if (!status) { dot.classList.add("hidden"); return; }
  dot.classList.remove("hidden", "scene-status-dot--ok", "scene-status-dot--warn", "scene-status-dot--error");
  dot.classList.add(`scene-status-dot--${status.level}`);
  dot.title = status.msg;
}

function flowCardElement(sceneId) {
  return els.flowCanvas.querySelector(`.node-card[data-scene-id="${sceneId}"]`);
}

function updateFlowCardPosition(sceneId, bounds = getCurrentFlowBoardBounds()) {
  const desc = state.adventure.descriptions.find((d) => d.id === sceneId);
  const card = flowCardElement(sceneId);
  if (!desc || !card) return;
  const boardPoint = logicalToBoardPoint(desc.position, bounds);
  card.style.left = `${boardPoint.x}px`;
  card.style.top = `${boardPoint.y}px`;
}

function updateAllFlowCardPositions(bounds = getCurrentFlowBoardBounds()) {
  state.adventure.descriptions.forEach((desc) => updateFlowCardPosition(desc.id, bounds));
}

// ── Inline title editing ─────────────────────────────────────────────────────

function startInlineTitleEdit(card, desc) {
  if (card.dataset.editing === "title") return;
  const titleEl = card.querySelector(".flow-card-title");
  if (!titleEl) return;
  card.dataset.editing = "title";

  const input = document.createElement("input");
  input.type = "text";
  input.className = "flow-card-title-input";
  input.value = desc.title || "";
  input.placeholder = "Senza titolo";

  const commit = () => {
    const newTitle = input.value.trim();
    if (newTitle !== (desc.title || "")) {
      desc.title = newTitle;
      markSceneDirty();
      scheduleJsonRender();
    }
    delete card.dataset.editing;
    refreshFlowCard(desc.id);
    scheduleFlowLinksRender();
  };

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") { e.preventDefault(); input.blur(); }
    if (e.key === "Escape") { input.value = desc.title || ""; input.blur(); }
    e.stopPropagation();
  });
  input.addEventListener("blur", commit, { once: true });
  input.addEventListener("pointerdown", (e) => e.stopPropagation());
  input.addEventListener("click", (e) => e.stopPropagation());

  titleEl.replaceWith(input);
  input.focus();
  input.select();
}

// ── Choice event-type quick-picker ───────────────────────────────────────────

const CHOICE_EVENT_PICKER_TYPES = [
  { type: null,         icon: "",  label: "Solo navigazione" },
  { type: "combat",     icon: "",  label: "Combattimento" },
  { type: "skillcheck", icon: "", label: "Prova abilità" },
  { type: "requirement",icon: "", label: "Requisito" },
  { type: "loot",       icon: "", label: "Loot" },
  { type: "dialogue",   icon: "", label: "Dialogo" },
  { type: "transition", icon: "", label: "Transizione" },
];

function showChoiceEventPicker(descId, choiceId, anchorRect) {
  closeFlowSceneQuickMenu();
  const context = getGraphChoiceContext(descId, choiceId);
  const desc = context?.description;
  const choice = context?.choice;
  if (!desc || !choice) return;

  closeChoiceEventPicker();

  const picker = document.createElement("div");
  picker.id = "choice-event-picker";
  picker.className = "choice-event-picker";

  // Posizionamento vicino alla riga scelta
  const left = Math.min(anchorRect.left, window.innerWidth - 220);
  const top = anchorRect.bottom + 4;
  picker.style.left = `${left}px`;
  picker.style.top = `${Math.min(top, window.innerHeight - 280)}px`;

  const current = choice.event?.type ?? null;

  CHOICE_EVENT_PICKER_TYPES.forEach(({ type, icon, label }) => {
    if (context.detached && type === null) return;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "cep-btn" + (current === type ? " cep-btn--active" : "");
    btn.innerHTML = `<span class="cep-icon">${icon}</span><span class="cep-label">${label}</span>`;
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (type === null) {
        choice.event = null;
      } else if (context.detached) {
        choice.event = createDefaultEvent(type);
        choice.text = choice.text || label;
      } else {
        let eventNode = getStandaloneEventNodeById(choice.targetId);
        if (!eventNode) {
          eventNode = createStandaloneEventNode(type, {
            x: (state.adventure.descriptions.find((d) => d.id === desc.id)?.position?.x || 0) + 260,
            y: (state.adventure.descriptions.find((d) => d.id === desc.id)?.position?.y || 0) + 20
          });
        }
        eventNode.event = createDefaultEvent(type);
        eventNode.text = choice.text || label;
        choice.event = null;
        choice.targetId = eventNode.id;
      }
      markSceneDirty();
      refreshFlowCard(descId);
      renderChoiceNodes();
      scheduleFlowLinksRender();
      scheduleJsonRender();
      closeChoiceEventPicker();
      if (context.detached) selectEventNode(descId, choice.id, { scrollIntoView: false });
      else if (choice.targetId && getStandaloneEventNodeById(choice.targetId)) selectEventNode(choice.targetId, choice.targetId, { scrollIntoView: false });
    });
    picker.appendChild(btn);
  });

  const handleOutside = (e) => {
    if (!picker.contains(e.target)) closeChoiceEventPicker();
  };
  setTimeout(() => document.addEventListener("pointerdown", handleOutside, { once: true }), 0);

  document.body.appendChild(picker);
}

function closeChoiceEventPicker() {
  document.getElementById("choice-event-picker")?.remove();
}

let _flowEventQuickMenuCleanup = null;
let _flowSceneQuickMenuCleanup = null;

function flushQuickMenuDraft(menuId) {
  const menu = document.getElementById(menuId);
  if (!menu) return;
  const active = document.activeElement;
  const controls = [...menu.querySelectorAll("input, textarea, select")];
  controls.forEach((control) => {
    control.dispatchEvent(new Event("input", { bubbles: true }));
    control.dispatchEvent(new Event("change", { bubbles: true }));
  });
  if (active && menu.contains(active) && active.matches("input, textarea, select")) {
    active.blur();
  }
}

function getGraphContextOpeningText(context) {
  if (!context) return "";
  if (context.detached) {
    return context.choice?.event?.text || "";
  }
  return context.description?.text || "";
}

function setGraphContextOpeningText(context, nextText) {
  if (!context) return;
  if (context.detached) {
    if (!context.choice?.event) return;
    context.choice.event.text = nextText;
    return;
  }
  if (context.description) {
    context.description.text = nextText;
  }
}

function closeFlowEventQuickMenu() {
  flushQuickMenuDraft("flow-event-quick-menu");
  document.getElementById("flow-event-quick-menu")?.remove();
  if (_flowEventQuickMenuCleanup) {
    document.removeEventListener("pointerdown", _flowEventQuickMenuCleanup, true);
    _flowEventQuickMenuCleanup = null;
  }
}

function closeFlowSceneQuickMenu() {
  flushQuickMenuDraft("flow-scene-quick-menu");
  document.getElementById("flow-scene-quick-menu")?.remove();
  if (_flowSceneQuickMenuCleanup) {
    document.removeEventListener("pointerdown", _flowSceneQuickMenuCleanup, true);
    _flowSceneQuickMenuCleanup = null;
  }
}

function closeFlowQuickMenus() {
  closeFlowEventQuickMenu();
  closeFlowSceneQuickMenu();
}

function appendQuickMenuRow(menu, labelText, control) {
  const row = document.createElement("div");
  row.className = "ctp-row";
  const label = document.createElement("span");
  label.className = "ctp-branch-lbl";
  label.textContent = labelText;
  row.append(label, control);
  menu.appendChild(row);
  return control;
}

function clampFloatingMenuPosition(menu, left, top, padding = 8) {
  const width = menu.offsetWidth || parseInt(menu.style.maxWidth, 10) || 320;
  const height = menu.offsetHeight || 360;
  return {
    left: clamp(left, padding, Math.max(padding, window.innerWidth - width - padding)),
    top: clamp(top, padding, Math.max(padding, window.innerHeight - height - padding))
  };
}

function setFloatingMenuPosition(menu, left, top) {
  const next = clampFloatingMenuPosition(menu, left, top);
  menu.style.left = `${next.left}px`;
  menu.style.top = `${next.top}px`;
}

function makeFloatingMenuDraggable(menu, handle) {
  if (!menu || !handle) return;
  menu.classList.add("choice-targets-popover--draggable");
  handle.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    if (event.target.closest("button, input, textarea, select, summary, a")) return;
    const startLeft = parseFloat(menu.style.left || "0");
    const startTop = parseFloat(menu.style.top || "0");
    const startX = event.clientX;
    const startY = event.clientY;
    menu.classList.add("choice-targets-popover--dragging");
    handle.setPointerCapture?.(event.pointerId);
    event.preventDefault();

    const onMove = (moveEvent) => {
      setFloatingMenuPosition(
        menu,
        startLeft + (moveEvent.clientX - startX),
        startTop + (moveEvent.clientY - startY)
      );
    };
    const stopDrag = () => {
      menu.classList.remove("choice-targets-popover--dragging");
      document.removeEventListener("pointermove", onMove, true);
      document.removeEventListener("pointerup", stopDrag, true);
      document.removeEventListener("pointercancel", stopDrag, true);
    };

    document.addEventListener("pointermove", onMove, true);
    document.addEventListener("pointerup", stopDrag, true);
    document.addEventListener("pointercancel", stopDrag, true);
  });
}

function appendQuickMenuCloseButton(header, onClose) {
  const closeBtn = document.createElement("button");
  closeBtn.type = "button";
  closeBtn.className = "ctp-close-btn";
  closeBtn.setAttribute("aria-label", "Chiudi card");
  closeBtn.textContent = "✕";
  closeBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    onClose?.();
  });
  header.appendChild(closeBtn);
  return closeBtn;
}

function showFlowSceneQuickMenu(sceneId, anchorRect) {
  const desc = state.adventure.descriptions.find((entry) => entry.id === sceneId);
  if (!desc) return;

  closeFlowSceneQuickMenu();
  const menu = document.createElement("div");
  menu.id = "flow-scene-quick-menu";
  menu.className = "choice-targets-popover flow-event-quick-menu flow-scene-quick-menu";
  const left = Math.min(anchorRect.right + 10, window.innerWidth - 340);
  const top = Math.min(Math.max(8, anchorRect.top - 6), window.innerHeight - 440);
  menu.style.left = `${left}px`;
  menu.style.top = `${top}px`;

  const rebuild = () => {
    const liveDesc = state.adventure.descriptions.find((entry) => entry.id === sceneId);
    if (!liveDesc) {
      closeFlowSceneQuickMenu();
      return;
    }
    menu.innerHTML = "";

    const header = document.createElement("div");
    header.className = "ctp-header";
    header.innerHTML = `<span class="ctp-type-badge">Scena</span>`;

    const advancedBtn = document.createElement("button");
    advancedBtn.type = "button";
    advancedBtn.className = "ctp-change-btn";
    advancedBtn.textContent = "Apri avanzate";
    advancedBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      switchSelectedScene(sceneId);
      closeFlowSceneQuickMenu();
      els.sceneEditor.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    header.appendChild(advancedBtn);
    header.innerHTML = "";
    const sceneBadge = document.createElement("span");
    sceneBadge.className = "ctp-type-badge";
    sceneBadge.textContent = "Scena";
    const sceneActions = document.createElement("div");
    sceneActions.className = "ctp-header-actions";
    sceneActions.appendChild(advancedBtn);
    appendQuickMenuCloseButton(sceneActions, closeFlowSceneQuickMenu);
    header.append(sceneBadge, sceneActions);
    menu.appendChild(header);

    const titleWrap = document.createElement("div");
    titleWrap.className = "flow-event-quick-scene-copy";
    const titleLabel = document.createElement("label");
    titleLabel.className = "flow-event-quick-scene-copy__label";
    titleLabel.textContent = "Titolo scena";
    const titleInput = createQuickMenuTextInput(liveDesc.title || "", "Titolo della scena");
    titleInput.addEventListener("input", (event) => {
      liveDesc.title = event.target.value;
      markSceneDirty();
      refreshFlowCard(sceneId);
      scheduleJsonRender();
      renderSceneEditor();
    });
    titleLabel.appendChild(titleInput);
    titleWrap.appendChild(titleLabel);

    const textWrap = document.createElement("div");
    textWrap.className = "flow-event-quick-scene-copy";
    const textLabel = document.createElement("label");
    textLabel.className = "flow-event-quick-scene-copy__label";
    textLabel.textContent = "Testo iniziale della scena";
    const textInput = createQuickMenuTextarea(liveDesc.text || "", 5, "Scrivi qui l'apertura narrativa della scena...");
    textInput.addEventListener("input", (event) => {
      liveDesc.text = event.target.value;
      markSceneDirty();
      refreshFlowCard(sceneId);
      scheduleJsonRender();
      renderSceneEditor();
    });
    textLabel.appendChild(textInput);
    textWrap.appendChild(textLabel);

    const actions = document.createElement("div");
    actions.className = "flow-event-quick-row flow-scene-quick-menu__actions";
    const addChoiceBtn = document.createElement("button");
    addChoiceBtn.type = "button";
    addChoiceBtn.className = "small";
    addChoiceBtn.textContent = "+ Scelta";
    addChoiceBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      addChoiceAndPickEvent(sceneId);
      closeFlowSceneQuickMenu();
    });
    actions.appendChild(addChoiceBtn);

    const chapterRoleControl = createChapterRoleControl(sceneId);
    if (chapterRoleControl) {
      menu.append(titleWrap, textWrap, chapterRoleControl, actions);
    } else {
      menu.append(titleWrap, textWrap, actions);
    }
  };

  rebuild();
  document.body.appendChild(menu);
  setFloatingMenuPosition(menu, left, top);
  makeFloatingMenuDraggable(menu, menu.querySelector(".ctp-header"));
  requestAnimationFrame(() => {
    _flowSceneQuickMenuCleanup = (event) => {
      if (menu.contains(event.target)) return;
      const sameCard = event.target.closest(`.flow-card[data-scene-id="${sceneId}"]`);
      if (sameCard) return;
      closeFlowSceneQuickMenu();
    };
    document.addEventListener("pointerdown", _flowSceneQuickMenuCleanup, true);
  });
}

function createQuickMenuTextInput(value = "", placeholder = "") {
  const input = document.createElement("input");
  input.type = "text";
  input.className = "ctp-scene-select flow-event-quick-menu__text";
  input.value = value || "";
  input.placeholder = placeholder;
  return input;
}

function createQuickMenuNumberInput(value = "", min = 0, max = 999) {
  const input = document.createElement("input");
  input.type = "number";
  input.min = String(min);
  input.max = String(max);
  input.className = "ctp-scene-select flow-event-quick-menu__number";
  input.value = String(value ?? "");
  return input;
}

function createQuickMenuTextarea(value = "", rows = 3, placeholder = "") {
  const input = document.createElement("textarea");
  input.className = "ctp-scene-select flow-event-quick-menu__textarea";
  input.rows = rows;
  input.value = value || "";
  input.placeholder = placeholder;
  return input;
}

function createQuickMenuSelect(hydrator, value = "") {
  const select = document.createElement("select");
  select.className = "ctp-scene-select";
  hydrator(select, value);
  return select;
}

const DIALOGUE_RESPONSE_INTENTS = [
  { value: "ask", label: "Chiedi" },
  { value: "insist", label: "Insisti" },
  { value: "threaten", label: "Minaccia" },
  { value: "lie", label: "Menti" },
  { value: "show", label: "Mostra" },
  { value: "leave", label: "Congedati" }
];

const DIALOGUE_GATE_OPTIONS = [
  { value: "none", label: "Nessun gate" },
  { value: "requirement", label: "Requisito" },
  { value: "skillcheck", label: "Prova" },
  { value: "unlock", label: "Sbloccata" }
];

function createDialogueResponse() {
  return {
    id: `dlg_resp_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`,
    text: "",
    intent: "ask",
    targetId: null,
    gateType: "none",
    gateRefId: "",
    once: false,
    hiddenUntilUnlocked: false
  };
}

function ensureDialogueEventDefaults(ev) {
  if (!ev) return;
  ev.root = ev.root || { npcText: "", responses: [], branch: createEmptyEventBranch() };
  ev.root.responses = Array.isArray(ev.root.responses) ? ev.root.responses : [];
  ev.branch = ev.branch || ev.root.branch || createEmptyEventBranch();
  ev.root.branch = ev.branch;
  ev.root.responses = ev.root.responses.map((response) => ({
    id: response?.id || createDialogueResponse().id,
    text: response?.text || "",
    intent: response?.intent || "ask",
    targetId: normalizeString(response?.targetId) || null,
    gateType: response?.gateType || "none",
    gateRefId: response?.gateRefId || "",
    once: Boolean(response?.once),
    hiddenUntilUnlocked: Boolean(response?.hiddenUntilUnlocked)
  }));
}

function dialogueIntentLabel(value = "") {
  return DIALOGUE_RESPONSE_INTENTS.find((entry) => entry.value === value)?.label || "Risposta";
}

function dialogueGateLabel(value = "") {
  return DIALOGUE_GATE_OPTIONS.find((entry) => entry.value === value)?.label || "Gate";
}

function showFlowEventQuickMenu(descId, choiceId, anchorRect) {
  const context = getGraphChoiceContext(descId, choiceId);
  const desc = context?.description;
  const choice = context?.choice;
  if (!desc || !choice) return;

  closeFlowQuickMenus();
  const menu = document.createElement("div");
  menu.id = "flow-event-quick-menu";
  menu.className = "choice-targets-popover flow-event-quick-menu";
  menu.dataset.descId = descId;
  menu.dataset.choiceId = choiceId;
  const left = Math.min(anchorRect.right + 10, window.innerWidth - 320);
  const top = Math.min(Math.max(8, anchorRect.top - 6), window.innerHeight - 420);
  menu.style.left = `${left}px`;
  menu.style.top = `${top}px`;

  const rebuild = () => {
    const liveContext = getGraphChoiceContext(descId, choiceId);
    const liveChoice = liveContext?.choice;
    if (!liveChoice) {
      closeFlowEventQuickMenu();
      return;
    }
    menu.innerHTML = "";
    const visual = choiceEventVisual(liveChoice);
    const header = document.createElement("div");
    header.className = "ctp-header";
    header.innerHTML = `<span class="ctp-type-badge">${visual.icon} ${esc(liveChoice.text || visual.label)}</span>`;

    const changeBtn = document.createElement("button");
    changeBtn.type = "button";
    changeBtn.className = "ctp-change-btn";
    changeBtn.textContent = "Cambia tipo";
    changeBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      closeFlowEventQuickMenu();
      showChoiceEventPicker(descId, choiceId, anchorRect);
    });
    header.appendChild(changeBtn);
    header.innerHTML = "";
    const eventBadge = document.createElement("span");
    eventBadge.className = "ctp-type-badge";
    eventBadge.textContent = `${visual.icon} ${liveChoice.text || visual.label}`;
    const eventActions = document.createElement("div");
    eventActions.className = "ctp-header-actions";
    eventActions.appendChild(changeBtn);
    appendQuickMenuCloseButton(eventActions, closeFlowEventQuickMenu);
    header.append(eventBadge, eventActions);
    menu.appendChild(header);

    const sceneTextWrap = document.createElement("div");
    sceneTextWrap.className = "flow-event-quick-scene-copy";
    const sceneTextLabel = document.createElement("label");
    sceneTextLabel.className = "flow-event-quick-scene-copy__label";
    sceneTextLabel.textContent = "Testo iniziale della scena";
    const sceneTextInput = createQuickMenuTextarea(getGraphContextOpeningText(liveContext), 4, "Scrivi qui l'apertura narrativa della scena...");
    sceneTextInput.addEventListener("input", (event) => {
      const nextContext = getGraphChoiceContext(descId, choiceId);
      if (!nextContext) return;
      setGraphContextOpeningText(nextContext, event.target.value);
      markSceneDirty();
      refreshFlowCard(descId);
      renderChoiceNodes();
      scheduleJsonRender();
      renderSceneEditor();
    });
    sceneTextLabel.appendChild(sceneTextInput);
    sceneTextWrap.appendChild(sceneTextLabel);
    menu.appendChild(sceneTextWrap);

    const chapterRoleControl = createChapterRoleControl(choiceId);
    if (chapterRoleControl) menu.appendChild(chapterRoleControl);

    const eventPayload = liveChoice.event;
    if (!eventPayload) {
      const noEvent = document.createElement("button");
      noEvent.type = "button";
      noEvent.className = "ctp-details-btn";
      noEvent.textContent = "Scegli tipo evento";
      noEvent.addEventListener("click", (event) => {
        event.stopPropagation();
        closeFlowEventQuickMenu();
        showChoiceEventPicker(descId, choiceId, anchorRect);
      });
      menu.appendChild(noEvent);
      return;
    }

    const persistQuickMenu = ({ rebuildMenu = false } = {}) => {
      onChoiceChange(desc, liveChoice);
      renderSceneEditor();
      if (rebuildMenu) rebuild();
    };

    const buildQuickTargetControl = (hydrator, value, onValueChange) => {
      const control = createQuickMenuSelect(hydrator, value || "");
      control.addEventListener("change", (event) => {
        onValueChange(event.target.value || "");
        persistQuickMenu();
      });
      return control;
    };

    const buildCompactLootManager = (items, onMutate, emptyLabel = "Nessun loot ancora.") => {
      const wrap = document.createElement("div");
      wrap.className = "flow-event-quick-inline";

      const controlsRow = document.createElement("div");
      controlsRow.className = "flow-event-quick-row flow-event-quick-row--end";
      const editBtn = document.createElement("button");
      editBtn.type = "button";
      editBtn.className = "small";
      editBtn.textContent = "Modifica";
      editBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        selectEventNode(descId, choiceId);
        closeFlowEventQuickMenu();
      });
      controlsRow.appendChild(editBtn);
      wrap.appendChild(controlsRow);

      if (!items.length) {
        const hint = document.createElement("p");
        hint.className = "hint flow-event-quick-menu__hint";
        hint.textContent = emptyLabel;
        wrap.appendChild(hint);
        return wrap;
      }

      const list = document.createElement("div");
      list.className = "flow-event-quick-list flow-event-quick-list--sub";
      items.forEach((loot, index) => {
        const item = document.createElement("div");
        item.className = "flow-event-quick-list__item flow-event-quick-list__item--sub";
        const label = document.createElement("span");
        label.textContent = `${loot.itemName || lootLabelFromPreset(loot.itemId) || loot.itemId || `Loot ${index + 1}`} ×${loot.quantity || 1}`;
        const removeBtn = document.createElement("button");
        removeBtn.type = "button";
        removeBtn.className = "danger small";
        removeBtn.textContent = "Rimuovi";
        removeBtn.addEventListener("click", (event) => {
          event.stopPropagation();
          items.splice(index, 1);
          onMutate();
        });
        item.append(label, removeBtn);
        list.appendChild(item);
      });
      wrap.appendChild(list);
      return wrap;
    };

    if (eventPayload.type === "combat") {
      const buildQuickStepper = (value, onChange, min = 1, max = 12) => {
        const wrap = document.createElement("div");
        wrap.className = "flow-event-quick-stepper";

        const minusBtn = document.createElement("button");
        minusBtn.type = "button";
        minusBtn.className = "flow-event-quick-stepper__btn";
        minusBtn.textContent = "-";

        const input = createQuickMenuNumberInput(value, min, max);
        input.classList.add("flow-event-quick-stepper__input");

        const plusBtn = document.createElement("button");
        plusBtn.type = "button";
        plusBtn.className = "flow-event-quick-stepper__btn";
        plusBtn.textContent = "+";

        const applyValue = (nextValue) => {
          const normalized = Math.max(min, Math.min(max, parseInt(nextValue, 10) || min));
          input.value = String(normalized);
          onChange(normalized);
        };

        minusBtn.addEventListener("click", (event) => {
          event.stopPropagation();
          applyValue((parseInt(input.value, 10) || min) - 1);
        });
        plusBtn.addEventListener("click", (event) => {
          event.stopPropagation();
          applyValue((parseInt(input.value, 10) || min) + 1);
        });
        input.addEventListener("input", (event) => applyValue(event.target.value));

        wrap.append(minusBtn, input, plusBtn);
        return wrap;
      };

      const row = document.createElement("div");
      row.className = "flow-event-quick-row";
      const presetSelect = document.createElement("select");
      presetSelect.className = "ctp-scene-select";
      const placeholder = document.createElement("option");
      placeholder.value = "";
      placeholder.textContent = "Aggiungi mostro preset...";
      presetSelect.appendChild(placeholder);
      MONSTER_PRESETS.forEach((preset) => {
        const option = document.createElement("option");
        option.value = preset.id;
        option.textContent = preset.name;
        presetSelect.appendChild(option);
      });
      const countInput = createQuickMenuNumberInput(1, 1, 12);
      const addBtn = document.createElement("button");
      addBtn.type = "button";
      addBtn.className = "small";
      addBtn.textContent = "Aggiungi";
      addBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        const preset = MONSTER_PRESETS.find((entry) => entry.id === presetSelect.value);
        if (!preset) return;
        const group = createDefaultCombatGroup();
        applyPresetToCombatGroup(group, preset);
        group.count = Math.max(1, parseInt(countInput.value, 10) || 1);
        eventPayload.combatGroups = eventPayload.combatGroups || [];
        eventPayload.combatGroups.push(group);
        persistQuickMenu({ rebuildMenu: true });
      });
      row.append(presetSelect, countInput, addBtn);
      menu.appendChild(row);

      const summary = document.createElement("div");
      summary.className = "flow-event-quick-list";
      (eventPayload.combatGroups || []).forEach((group, index) => {
        const item = document.createElement("div");
        item.className = "flow-event-quick-list__item";
        const left = document.createElement("div");
        left.className = "flow-event-quick-list__stack";
        const label = document.createElement("strong");
        label.textContent = group.name || `Gruppo ${index + 1}`;
        const meta = document.createElement("span");
        meta.className = "hint";
        meta.textContent = `Quantità ${group.count || 1} | HP ${group.hitPoints || 0} | Loot ${(group.loot || []).length}`;
        left.append(label, meta);

        const actions = document.createElement("div");
        actions.className = "flow-event-quick-inline-actions";
        const qtyStepper = buildQuickStepper(group.count || 1, (nextValue) => {
          group.count = nextValue;
          persistQuickMenu({ rebuildMenu: true });
        });
        const removeBtn = document.createElement("button");
        removeBtn.type = "button";
        removeBtn.className = "danger small";
        removeBtn.textContent = "Rimuovi";
        removeBtn.addEventListener("click", (event) => {
          event.stopPropagation();
          eventPayload.combatGroups.splice(index, 1);
          persistQuickMenu({ rebuildMenu: true });
        });
        actions.append(qtyStepper, removeBtn);
        item.append(left, actions);

        const lootDetails = document.createElement("details");
        lootDetails.className = "flow-event-quick-details";
        const lootSummary = document.createElement("summary");
        lootSummary.textContent = `Loot mostro (${(group.loot || []).length})`;
        lootDetails.appendChild(lootSummary);
        lootDetails.appendChild(
          buildCompactLootManager(group.loot || (group.loot = []), () => persistQuickMenu({ rebuildMenu: true }), "Questo mostro non lascia ancora alcun loot.")
        );
        item.appendChild(lootDetails);
        summary.appendChild(item);
      });
      menu.appendChild(summary);
    } else if (eventPayload.type === "skillcheck") {
      const attrSel = document.createElement("select");
      attrSel.className = "ctp-scene-select";
      SKILLS.forEach(({ value, label }) => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = label;
        attrSel.appendChild(option);
      });
      attrSel.value = eventPayload.attribute || "";
      attrSel.addEventListener("change", (event) => {
        eventPayload.attribute = event.target.value;
        persistQuickMenu();
      });
      appendQuickMenuRow(menu, "Attributo", attrSel);

      const diffInput = createQuickMenuNumberInput(eventPayload.difficulty || 12, 1, 30);
      diffInput.value = String(eventPayload.difficulty || 12);
      diffInput.addEventListener("input", (event) => {
        eventPayload.difficulty = Math.max(1, parseInt(event.target.value, 10) || 12);
        persistQuickMenu();
      });
      appendQuickMenuRow(menu, "Difficoltà", diffInput);

      eventPayload.successBranch = eventPayload.successBranch || {};
      eventPayload.failureBranch = eventPayload.failureBranch || { targetId: STAY_SENTINEL };
      appendQuickMenuRow(
        menu,
        "Riuscita",
        buildQuickTargetControl(hydrateSuccessTargetSelect, eventPayload.successBranch.targetId || "", (nextValue) => {
          eventPayload.successBranch = eventPayload.successBranch || {};
          eventPayload.successBranch.targetId = nextValue || null;
        })
      );
      appendQuickMenuRow(
        menu,
        "Fallimento",
        buildQuickTargetControl(hydrateFailureTargetSelect, eventPayload.failureBranch.targetId || STAY_SENTINEL, (nextValue) => {
          eventPayload.failureBranch = eventPayload.failureBranch || {};
          eventPayload.failureBranch.targetId = nextValue || STAY_SENTINEL;
        })
      );

      const burnLabel = document.createElement("label");
      burnLabel.className = "flow-event-quick-menu__check";
      const burnInput = document.createElement("input");
      burnInput.type = "checkbox";
      burnInput.checked = Boolean(eventPayload.burnOnFailure);
      burnInput.addEventListener("change", (event) => {
        eventPayload.burnOnFailure = Boolean(event.target.checked);
        persistQuickMenu();
      });
      burnLabel.append(burnInput, " Brucia scelta anche su fallimento");
      menu.appendChild(burnLabel);
    } else 
    if (eventPayload.type === "combat") {
      const row = document.createElement("div");
      row.className = "flow-event-quick-row";
      const presetSelect = document.createElement("select");
      presetSelect.className = "ctp-scene-select";
      const placeholder = document.createElement("option");
      placeholder.value = "";
      placeholder.textContent = "Aggiungi mostro preset...";
      presetSelect.appendChild(placeholder);
      MONSTER_PRESETS.forEach((preset) => {
        const option = document.createElement("option");
        option.value = preset.id;
        option.textContent = preset.name;
        presetSelect.appendChild(option);
      });
      const countInput = createQuickMenuNumberInput(1, 1, 12);
      const addBtn = document.createElement("button");
      addBtn.type = "button";
      addBtn.className = "small";
      addBtn.textContent = "Aggiungi";
      addBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        const preset = MONSTER_PRESETS.find((entry) => entry.id === presetSelect.value);
        if (!preset) return;
        const group = createDefaultCombatGroup();
        applyPresetToCombatGroup(group, preset);
        group.count = Math.max(1, parseInt(countInput.value, 10) || 1);
        eventPayload.combatGroups = eventPayload.combatGroups || [];
        eventPayload.combatGroups.push(group);
        persistQuickMenu({ rebuildMenu: true });
      });
      row.append(presetSelect, countInput, addBtn);
      menu.appendChild(row);

      const summary = document.createElement("div");
      summary.className = "flow-event-quick-list";
      (eventPayload.combatGroups || []).forEach((group, index) => {
        const item = document.createElement("div");
        item.className = "flow-event-quick-list__item";
        const label = document.createElement("span");
        label.textContent = `${group.name || `Gruppo ${index + 1}`} ×${group.count || 1}`;
        const removeBtn = document.createElement("button");
        removeBtn.type = "button";
        removeBtn.className = "danger small";
        removeBtn.textContent = "Rimuovi";
        removeBtn.addEventListener("click", (event) => {
          event.stopPropagation();
          eventPayload.combatGroups.splice(index, 1);
          onChoiceChange(desc, liveChoice);
          renderSceneEditor();
          rebuild();
        });
        item.append(label, removeBtn);
        summary.appendChild(item);
      });
      menu.appendChild(summary);
    } else if (eventPayload.type === "skillcheck") {
      const attrSel = document.createElement("select");
      attrSel.className = "ctp-scene-select";
      SKILLS.forEach(({ value, label }) => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = label;
        attrSel.appendChild(option);
      });
      attrSel.value = eventPayload.attribute || "";
      attrSel.addEventListener("change", (event) => {
        eventPayload.attribute = event.target.value;
        onChoiceChange(desc, liveChoice);
        renderSceneEditor();
      });
      appendQuickMenuRow(menu, "Attributo", attrSel);

      const diffInput = createQuickMenuNumberInput(eventPayload.difficulty || 12, 1, 30);
      diffInput.value = String(eventPayload.difficulty || 12);
      diffInput.addEventListener("input", (event) => {
        eventPayload.difficulty = Math.max(1, parseInt(event.target.value, 10) || 12);
        onChoiceChange(desc, liveChoice);
        renderSceneEditor();
      });
      appendQuickMenuRow(menu, "Difficoltà", diffInput);

      const burnLabel = document.createElement("label");
      burnLabel.className = "flow-event-quick-menu__check";
      const burnInput = document.createElement("input");
      burnInput.type = "checkbox";
      burnInput.checked = Boolean(eventPayload.burnOnFailure);
      burnInput.addEventListener("change", (event) => {
        eventPayload.burnOnFailure = Boolean(event.target.checked);
        onChoiceChange(desc, liveChoice);
        renderSceneEditor();
      });
      burnLabel.append(burnInput, " Brucia scelta anche su fallimento");
      menu.appendChild(burnLabel);
    } else if (eventPayload.type === "requirement") {
      const modeSelect = document.createElement("select");
      modeSelect.className = "ctp-scene-select";
      [
        { value: "presetItem", label: "Oggetto dal catalogo" },
        { value: "key", label: "Chiave" },
        { value: "questItem", label: "Quest item unico" }
      ].forEach(({ value, label }) => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = label;
        modeSelect.appendChild(option);
      });
      const currentMode = getRequirementMode(eventPayload);
      modeSelect.value = currentMode;
      const summary = document.createElement("div");
      summary.className = "flow-event-quick-summary";
      const summaryTitle = document.createElement("strong");
      summaryTitle.textContent = `${requirementModeMeta(currentMode).label}: ${requirementValueSummary(eventPayload)}`;
      const summaryMeta = document.createElement("span");
      summaryMeta.textContent = requirementModeMeta(currentMode).hint;
      summary.append(summaryTitle, summaryMeta);
      menu.appendChild(summary);
      appendQuickMenuRow(menu, "Controlla", modeSelect);

      const syncRequirementValue = () => {
        const mode = modeSelect.value;
        const meta = requirementModeMeta(mode);
        let control = null;
        const onValueChange = (nextValue) => {
          eventPayload.requirementMode = mode;
          eventPayload.itemId = mode === "presetItem" ? (nextValue || null) : null;
          eventPayload.lockId = mode === "key" ? (nextValue || null) : null;
          eventPayload.questItemId = mode === "questItem" ? (nextValue || null) : null;
          onChoiceChange(desc, liveChoice);
          renderSceneEditor();
        };

        if (mode === "key") {
          control = createQuickMenuSelect(hydrateKeySelect, eventPayload.lockId || "");
          control.addEventListener("change", (event) => onValueChange(event.target.value));
        } else if (mode === "questItem") {
          control = createQuickMenuSelect(hydrateQuestItemSelect, eventPayload.questItemId || "");
          control.addEventListener("change", (event) => onValueChange(event.target.value));
        } else {
          control = createQuickMenuSelect((select, value) => hydrateLootSelect(select, value, {
            includeCustom: false,
            compact: true,
            noneLabel: "Seleziona oggetto"
          }), eventPayload.itemId || "");
          control.addEventListener("change", (event) => onValueChange(event.target.value));
        }

        appendQuickMenuRow(menu, meta.valueLabel, control);
      };

      modeSelect.addEventListener("change", () => {
        const mode = modeSelect.value;
        eventPayload.requirementMode = mode;
        eventPayload.itemId = mode === "presetItem" ? (eventPayload.itemId || "") : null;
        eventPayload.lockId = mode === "key" ? (eventPayload.lockId || "") : null;
        eventPayload.questItemId = mode === "questItem" ? (eventPayload.questItemId || "") : null;
        onChoiceChange(desc, liveChoice);
        renderSceneEditor();
        rebuild();
      });

      syncRequirementValue();
      eventPayload.metBranch = eventPayload.metBranch || {};
      eventPayload.unmetBranch = eventPayload.unmetBranch || {};
      appendQuickMenuRow(
        menu,
        "Soddisfatto",
        buildQuickTargetControl(hydrateSceneTargetSelect, eventPayload.metBranch.targetId || "", (nextValue) => {
          eventPayload.metBranch = eventPayload.metBranch || {};
          eventPayload.metBranch.targetId = nextValue || null;
        })
      );
      appendQuickMenuRow(
        menu,
        "Non soddisfatto",
        buildQuickTargetControl(hydrateSceneTargetSelect, eventPayload.unmetBranch.targetId || "", (nextValue) => {
          eventPayload.unmetBranch = eventPayload.unmetBranch || {};
          eventPayload.unmetBranch.targetId = nextValue || null;
        })
      );
      const responseInfo = document.createElement("div");
      responsesWrap.className = "flow-dialogue-quick";
      responseInfo.textContent = "Se il requisito e presente, il ramo soddisfatto consuma sempre 1 unita dell'oggetto richiesto.";
      menu.appendChild(responseInfo);
      const consumeLabel = document.createElement("div");
      consumeLabel.style.display = "none";
      const consumeInput = document.createComment("requirement consumption is implicit");
      consumeLabel.append(consumeInput, " Consuma oggetto se il requisito è soddisfatto");
      menu.appendChild(consumeLabel);
    } else if (eventPayload.type === "loot") {
      const intro = document.createElement("div");
      intro.className = "flow-event-quick-summary";
      const introTitle = document.createElement("strong");
      introTitle.textContent = "Ricompense del nodo";
      const introMeta = document.createElement("span");
      introMeta.textContent = "Filtra per tier o famiglia, oppure scrivi il nome dell'oggetto. Poi aggiungilo al nodo.";
      intro.append(introTitle, introMeta);
      menu.appendChild(intro);

      const addWrap = document.createElement("div");
      addWrap.className = "flow-event-quick-loot-builder";
      const presetSelect = document.createElement("select");
      presetSelect.className = "ctp-scene-select";
      const pickerShell = document.createElement("div");
      pickerShell.className = "flow-event-quick-loot-picker";
      pickerShell.appendChild(presetSelect);
      hydrateLootSelect(presetSelect, "", {
        includeCustom: false,
        compact: true,
        noneLabel: "Seleziona loot",
        searchPlaceholder: "Scrivi per cercare loot..."
      });
      const addBtn = document.createElement("button");
      addBtn.type = "button";
      addBtn.className = "small";
      addBtn.textContent = "Aggiungi loot";
      addBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        const presetId = presetSelect.value || "";
        if (!presetId) return;
        eventPayload.loot = eventPayload.loot || [];
        eventPayload.loot.push(createLootFromPreset(presetId));
        onChoiceChange(desc, liveChoice);
        renderSceneEditor();
        rebuild();
      });
      addWrap.append(pickerShell, addBtn);
      menu.appendChild(addWrap);

      const summary = document.createElement("div");
      summary.className = "flow-event-quick-list";
      (eventPayload.loot || []).forEach((loot, index) => {
        const item = document.createElement("div");
        item.className = "flow-event-quick-list__item";
        const label = document.createElement("span");
        const lootName = loot.itemName || lootLabelFromPreset(loot.itemId) || loot.itemId || `Loot ${index + 1}`;
        label.textContent = `${lootName} ×${loot.quantity || 1}`;
        const removeBtn = document.createElement("button");
        removeBtn.type = "button";
        removeBtn.className = "danger small";
        removeBtn.textContent = "Rimuovi";
        removeBtn.addEventListener("click", (event) => {
          event.stopPropagation();
          eventPayload.loot.splice(index, 1);
          onChoiceChange(desc, liveChoice);
          renderSceneEditor();
          rebuild();
        });
        item.append(label, removeBtn);
        summary.appendChild(item);
      });
      menu.appendChild(summary);
    } else if (eventPayload.type === "condition") {
      const condSel = createQuickMenuSelect(hydrateConditionSelect, eventPayload.conditionId || "");
      condSel.addEventListener("change", (event) => {
        eventPayload.conditionId = event.target.value;
        onChoiceChange(desc, liveChoice);
        renderSceneEditor();
      });
      appendQuickMenuRow(menu, "Condizione", condSel);
    } else if (eventPayload.type === "transition") {
      const textArea = createQuickMenuTextarea(eventPayload.text || "", 4, "Testo breve di transizione");
      textArea.addEventListener("input", (event) => {
        eventPayload.text = event.target.value;
        onChoiceChange(desc, liveChoice);
        renderSceneEditor();
      });
      appendQuickMenuRow(menu, "Testo", textArea);
    } else if (eventPayload.type === "shop") {
      const presetSelect = document.createElement("select");
      presetSelect.className = "ctp-scene-select";
      hydrateLootSelect(presetSelect, "", { includeCustom: false, compact: true });
      presetSelect.addEventListener("change", (event) => {
        const preset = lootPresetById(event.target.value);
        if (!preset) return;
        eventPayload.items = eventPayload.items || [];
        eventPayload.items.push({
          itemId: preset.id,
          itemName: preset.name,
          price: 10,
          category: preset.category || "",
          rarity: preset.rarity || "common",
          effectIds: [...(preset.effectIds || [])]
        });
        onChoiceChange(desc, liveChoice);
        renderSceneEditor();
        rebuild();
      });
      appendQuickMenuRow(menu, "Aggiungi item", presetSelect);

      const summary = document.createElement("div");
      summary.className = "flow-event-quick-list";
      (eventPayload.items || []).forEach((itemData, index) => {
        const item = document.createElement("div");
        item.className = "flow-event-quick-list__item";
        const left = document.createElement("div");
        left.className = "flow-event-quick-list__stack";
        const label = document.createElement("span");
        label.textContent = itemData.itemName || lootLabelFromPreset(itemData.itemId) || `Oggetto ${index + 1}`;
        const priceInput = createQuickMenuNumberInput(itemData.price || 0, 0, 9999);
        priceInput.addEventListener("input", (event) => {
          itemData.price = Math.max(0, parseInt(event.target.value, 10) || 0);
          onChoiceChange(desc, liveChoice);
          renderSceneEditor();
        });
        left.append(label, priceInput);
        const removeBtn = document.createElement("button");
        removeBtn.type = "button";
        removeBtn.className = "danger small";
        removeBtn.textContent = "Rimuovi";
        removeBtn.addEventListener("click", (event) => {
          event.stopPropagation();
          eventPayload.items.splice(index, 1);
          onChoiceChange(desc, liveChoice);
          renderSceneEditor();
          rebuild();
        });
        item.append(left, removeBtn);
        summary.appendChild(item);
      });
      menu.appendChild(summary);
    } else if (eventPayload.type === "dialogue") {
      ensureDialogueEventDefaults(eventPayload);
      const npcInput = createQuickMenuTextInput(eventPayload.npcName || "", "Nome PNG");
      npcInput.addEventListener("input", (event) => {
        eventPayload.npcName = event.target.value;
        persistQuickMenu();
      });
      appendQuickMenuRow(menu, "NPC", npcInput);

      const npcText = createQuickMenuTextarea(eventPayload.root.npcText || "", 4, "Battuta o apertura del dialogo");
      npcText.addEventListener("input", (event) => {
        eventPayload.root.npcText = event.target.value;
        persistQuickMenu();
      });
      appendQuickMenuRow(menu, "Battuta", npcText);

      const responsesWrap = document.createElement("div");
      responsesWrap.className = "flow-dialogue-quick";

      const responsesHead = document.createElement("div");
      responsesHead.className = "flow-dialogue-quick__header";
      const responsesTitle = document.createElement("strong");
      responsesTitle.textContent = "Risposte del giocatore";
      const responsesMeta = document.createElement("span");
      responsesMeta.textContent = eventPayload.root.responses.length
        ? `${eventPayload.root.responses.length}/4 risposte attive`
        : "Aggiungi fino a 4 risposte";
      responsesHead.append(responsesTitle, responsesMeta);
      responsesWrap.appendChild(responsesHead);

      const responsesList = document.createElement("div");
      responsesList.className = "flow-dialogue-quick__list";
      (eventPayload.root.responses || []).forEach((response, index) => {
        const item = document.createElement("div");
        item.className = "flow-dialogue-response";

        const top = document.createElement("div");
        top.className = "flow-dialogue-response__top";
        const badgeRow = document.createElement("div");
        badgeRow.className = "flow-dialogue-response__badges";

        const intentBadge = document.createElement("span");
        intentBadge.className = "flow-dialogue-response__badge";
        intentBadge.textContent = dialogueIntentLabel(response.intent);
        badgeRow.appendChild(intentBadge);

        if (response.gateType && response.gateType !== "none") {
          const gateBadge = document.createElement("span");
          gateBadge.className = "flow-dialogue-response__badge flow-dialogue-response__badge--gate";
          gateBadge.textContent = dialogueGateLabel(response.gateType);
          badgeRow.appendChild(gateBadge);
        }
        if (response.once) {
          const onceBadge = document.createElement("span");
          onceBadge.className = "flow-dialogue-response__badge flow-dialogue-response__badge--muted";
          onceBadge.textContent = "Una volta";
          badgeRow.appendChild(onceBadge);
        }
        if (response.hiddenUntilUnlocked) {
          const hiddenBadge = document.createElement("span");
          hiddenBadge.className = "flow-dialogue-response__badge flow-dialogue-response__badge--muted";
          hiddenBadge.textContent = "Nascosta";
          badgeRow.appendChild(hiddenBadge);
        }

        const removeBtn = document.createElement("button");
        removeBtn.type = "button";
        removeBtn.className = "danger small";
        removeBtn.textContent = "Rimuovi";
        removeBtn.addEventListener("click", (event) => {
          event.stopPropagation();
          eventPayload.root.responses.splice(index, 1);
          persistQuickMenu({ rebuildMenu: true });
        });
        top.append(badgeRow, removeBtn);
        item.appendChild(top);

        const textInput = createQuickMenuTextInput(response.text || "", "Testo risposta");
        textInput.addEventListener("input", (event) => {
          response.text = event.target.value;
          persistQuickMenu();
        });
        item.appendChild(textInput);

        const controls = document.createElement("div");
        controls.className = "flow-dialogue-response__controls";

        const intentSelect = document.createElement("select");
        intentSelect.className = "ctp-scene-select";
        DIALOGUE_RESPONSE_INTENTS.forEach(({ value, label }) => {
          const option = document.createElement("option");
          option.value = value;
          option.textContent = label;
          if (response.intent === value) option.selected = true;
          intentSelect.appendChild(option);
        });
        intentSelect.addEventListener("change", (event) => {
          response.intent = event.target.value || "ask";
          persistQuickMenu({ rebuildMenu: true });
        });
        controls.appendChild(intentSelect);

        const gateSelect = document.createElement("select");
        gateSelect.className = "ctp-scene-select";
        DIALOGUE_GATE_OPTIONS.forEach(({ value, label }) => {
          const option = document.createElement("option");
          option.value = value;
          option.textContent = label;
          if ((response.gateType || "none") === value) option.selected = true;
          gateSelect.appendChild(option);
        });
        gateSelect.addEventListener("change", (event) => {
          response.gateType = event.target.value || "none";
          if (response.gateType === "none") response.gateRefId = "";
          persistQuickMenu({ rebuildMenu: true });
        });
        controls.appendChild(gateSelect);
        item.appendChild(controls);

        if (response.gateType && response.gateType !== "none") {
          const gateRef = createQuickMenuTextInput(response.gateRefId || "", "ID gate o nodo di supporto");
          gateRef.addEventListener("input", (event) => {
            response.gateRefId = event.target.value;
            persistQuickMenu();
          });
          item.appendChild(gateRef);
        }

        appendQuickMenuRow(
          item,
          "Destinazione",
          buildQuickTargetControl(hydrateSceneTargetSelect, response.targetId || "", (nextValue) => {
            response.targetId = nextValue || null;
          })
        );

        const targetHint = document.createElement("div");
        targetHint.className = "hint flow-event-quick-menu__hint";
        targetHint.textContent = response.targetId
          ? `Collegata a: ${sceneTitleById(response.targetId, "destinazione mancante")}`
          : "Collega questa risposta a una scena o a un altro nodo evento.";
        item.appendChild(targetHint);

        responsesList.appendChild(item);
      });

      if (!eventPayload.root.responses.length) {
        const empty = document.createElement("p");
        empty.className = "hint flow-event-quick-menu__hint";
        empty.textContent = "Nessuna risposta ancora definita. Usa il bottone sotto per creare il primo scambio del giocatore.";
        responsesList.appendChild(empty);
      }
      responsesWrap.appendChild(responsesList);

      const actions = document.createElement("div");
      actions.className = "flow-dialogue-quick__actions";
      const addResponseBtn = document.createElement("button");
      addResponseBtn.type = "button";
      addResponseBtn.className = "small";
      addResponseBtn.textContent = "+ Aggiungi risposta";
      addResponseBtn.disabled = eventPayload.root.responses.length >= 4;
      addResponseBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        if ((eventPayload.root.responses || []).length >= 4) return;
        eventPayload.root.responses.push(createDialogueResponse());
        persistQuickMenu({ rebuildMenu: true });
      });
      actions.appendChild(addResponseBtn);
      responsesWrap.appendChild(actions);

      if (!eventPayload.root.responses.length) {
        eventPayload.branch = eventPayload.branch || eventPayload.root.branch || createEmptyEventBranch();
        eventPayload.root.branch = eventPayload.branch;
        appendQuickMenuRow(
          responsesWrap,
          "Uscita lineare",
          buildQuickTargetControl(hydrateSceneTargetSelect, eventPayload.branch.targetId || "", (nextValue) => {
            eventPayload.branch = eventPayload.branch || createEmptyEventBranch();
            eventPayload.root.branch = eventPayload.branch;
            eventPayload.branch.targetId = nextValue || null;
          })
        );
      }

      menu.appendChild(responsesWrap);
    }

    const footer = document.createElement("div");
    footer.className = "ctp-footer";

    const advancedBtn = document.createElement("button");
    advancedBtn.type = "button";
    advancedBtn.className = "ctp-details-btn ctp-details-btn--primary";
    advancedBtn.textContent = "Vai a opzioni avanzate";
    advancedBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      selectEventNode(descId, choiceId);
      closeFlowEventQuickMenu();
    });
    footer.appendChild(advancedBtn);
    menu.appendChild(footer);
  };

  rebuild();
  document.body.appendChild(menu);
  setFloatingMenuPosition(menu, left, top);
  makeFloatingMenuDraggable(menu, menu.querySelector(".ctp-header"));
  requestAnimationFrame(() => {
    _flowEventQuickMenuCleanup = (event) => {
      if (menu.contains(event.target)) return;
      const sameNode = event.target.closest(`.choice-node[data-desc-id="${descId}"][data-choice-id="${choiceId}"]`);
      if (sameNode) return;
      closeFlowEventQuickMenu();
    };
    document.addEventListener("pointerdown", _flowEventQuickMenuCleanup, true);
  });
}

// ── Choice targets popover (collega rami a scene direttamente dalla mappa) ───

function showChoiceTargetsPopover(descId, choiceId, anchorRect) {
  closeFlowSceneQuickMenu();
  const desc = state.adventure.descriptions.find((d) => d.id === descId);
  const choice = desc?.choices?.find((c) => c.id === choiceId);
  if (!desc || !choice) return;
  closeChoiceTargetsPopover();

  const pop = document.createElement("div");
  pop.id = "choice-targets-popover";
  pop.className = "choice-targets-popover";
  // Salva i riferimenti per il refresh automatico al cambio di stato
  pop.dataset.descId = descId;
  pop.dataset.choiceId = choiceId;
  // Posizionamento: a destra del nodo, evita i bordi finestra
  const left = Math.min(anchorRect.right + 10, window.innerWidth - 270);
  const top  = Math.min(Math.max(4, anchorRect.top - 8), window.innerHeight - 320);
  pop.style.left = `${left}px`;
  pop.style.top  = `${top}px`;

  // Header: tipo + pulsante "cambia tipo"
  const ev = choice.event;
  const typeEntry = CHOICE_EVENT_PICKER_TYPES.find((t) => t.type === (ev?.type ?? null))
    || CHOICE_EVENT_PICKER_TYPES[0];
  const header = document.createElement("div");
  header.className = "ctp-header";
  header.innerHTML = `<span class="ctp-type-badge">${typeEntry.icon} ${typeEntry.label}</span>`;
  const changeBtn = document.createElement("button");
  changeBtn.type = "button";
  changeBtn.className = "ctp-change-btn";
  changeBtn.textContent = "Cambia tipo";
  changeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    closeChoiceTargetsPopover();
    showChoiceEventPicker(descId, choiceId, anchorRect);
  });
  header.appendChild(changeBtn);
  header.innerHTML = "";
  const targetBadge = document.createElement("span");
  targetBadge.className = "ctp-type-badge";
  targetBadge.textContent = `${typeEntry.icon} ${typeEntry.label}`;
  const targetActions = document.createElement("div");
  targetActions.className = "ctp-header-actions";
  targetActions.appendChild(changeBtn);
  appendQuickMenuCloseButton(targetActions, closeChoiceTargetsPopover);
  header.append(targetBadge, targetActions);
  pop.appendChild(header);

  // Righe rami: label colorata + select scene
  const branches = getChoiceBranchConfigs(choice);
  branches.forEach(({ label, color, getTarget, setTarget }) => {
    const row = document.createElement("div");
    row.className = "ctp-row";
    const lbl = document.createElement("span");
    lbl.className = "ctp-branch-lbl";
    lbl.style.color = color;
    lbl.textContent = label;
    const sel = buildChoiceTargetSelect(desc.id, getTarget());
    sel.addEventListener("change", () => {
      setTarget(sel.value || null);
      markSceneDirty();
      refreshFlowCard(descId);
      scheduleFlowLinksRender();
      scheduleJsonRender();
    });
    row.append(lbl, sel);
    pop.appendChild(row);
  });

  // Footer: link editor avanzato
  const footer = document.createElement("div");
  footer.className = "ctp-footer";
  const detBtn = document.createElement("button");
  detBtn.type = "button";
  detBtn.className = "ctp-details-btn ctp-details-btn--primary";
  detBtn.textContent = "Vai a opzioni avanzate";
  detBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    closeChoiceTargetsPopover();
    selectEventNode(descId, choiceId);
  });
  footer.appendChild(detBtn);
  pop.appendChild(footer);

  const handleOutside = (e) => {
    if (!pop.contains(e.target)) closeChoiceTargetsPopover();
  };
  setTimeout(() => document.addEventListener("pointerdown", handleOutside, { once: true }), 0);
  document.body.appendChild(pop);
  setFloatingMenuPosition(pop, left, top);
  makeFloatingMenuDraggable(pop, pop.querySelector(".ctp-header"));
}

function closeChoiceTargetsPopover() {
  document.getElementById("choice-targets-popover")?.remove();
}

/** Aggiorna il popover destinazioni se aperto (es. dopo aver creato una nuova scena). */
function refreshOpenTargetsPopover() {
  const pop = document.getElementById("choice-targets-popover");
  if (!pop) return;
  const descId = pop.dataset.descId;
  const choiceId = pop.dataset.choiceId;
  if (!descId || !choiceId) return;
  const nodeEl = els.choiceNodesLayer?.querySelector(
    `.choice-node[data-desc-id="${descId}"][data-choice-id="${choiceId}"]`
  );
  if (!nodeEl) { closeChoiceTargetsPopover(); return; }
  showChoiceTargetsPopover(descId, choiceId, nodeEl.getBoundingClientRect());
}

/**
 * Imposta il primo ramo non ancora collegato della scelta a targetId.
 * Per eventi multi-ramo (combat, skillcheck, requirement) segue l'ordine naturale.
 */
function setFirstUnsetBranch(choice, targetId) {
  const ev = choice.event;
  if (!ev) {
    choice.targetId = targetId;
    return;
  }
  switch (ev.type) {
    case "combat":
      if (!ev.victoryBranch?.targetId) {
        ev.victoryBranch = ev.victoryBranch || {}; ev.victoryBranch.targetId = targetId;
      } else {
        ev.defeatBranch = ev.defeatBranch || {}; ev.defeatBranch.targetId = targetId;
      }
      break;
    case "skillcheck":
      if (!ev.successBranch?.targetId) {
        ev.successBranch = ev.successBranch || {}; ev.successBranch.targetId = targetId;
      } else {
        ev.failureBranch = ev.failureBranch || {}; ev.failureBranch.targetId = targetId;
      }
      break;
    case "requirement":
      if (!ev.metBranch?.targetId) {
        ev.metBranch = ev.metBranch || {}; ev.metBranch.targetId = targetId;
      } else {
        ev.unmetBranch = ev.unmetBranch || {}; ev.unmetBranch.targetId = targetId;
      }
      break;
    default:
      ev.branch = ev.branch || {}; ev.branch.targetId = targetId;
  }
}

/** Restituisce la configurazione dei rami per una scelta (quale branch, label, colore). */
function getChoiceBranchConfigs(choice) {
  const ev = choice.event;
  if (!ev) {
    return [{
      label: "Destinazione",
      color: "#b56d39",
      getTarget: () => choice.targetId,
      setTarget: (id) => { choice.targetId = id || null; },
      getBranch: () => choice
    }];
  }
  switch (ev.type) {
    case "combat":
      return [
        { label: "Vittoria", color: "#6f8a57",
          getTarget: () => ev.victoryBranch?.targetId,
          setTarget: (id) => { ev.victoryBranch = ev.victoryBranch || {}; ev.victoryBranch.targetId = id || null; },
          getBranch: () => ev.victoryBranch },
        { label: "Sconfitta", color: "#b94a48",
          getTarget: () => ev.defeatBranch?.targetId,
          setTarget: (id) => { ev.defeatBranch = ev.defeatBranch || {}; ev.defeatBranch.targetId = id || null; },
          getBranch: () => ev.defeatBranch },
        { label: "Ritirata", color: "#6d84b5",
          getTarget: () => ev.retreatBranch?.targetId,
          setTarget: (id) => {
            ev.retreatBranch = ev.retreatBranch || { text: null, loot: [], condition: null, unlockChoiceId: null, burnAfterUse: false, targetId: null, event: null };
            ev.retreatBranch.targetId = id || null;
          },
          getBranch: () => ev.retreatBranch }
      ];
    case "skillcheck":
      return [
        { label: "Successo", color: "#6f8a57",
          getTarget: () => ev.successBranch?.targetId,
          setTarget: (id) => { ev.successBranch = ev.successBranch || {}; ev.successBranch.targetId = id || null; },
          getBranch: () => ev.successBranch },
        { label: "Fallimento", color: "#b94a48",
          getTarget: () => ev.failureBranch?.targetId,
          setTarget: (id) => { ev.failureBranch = ev.failureBranch || {}; ev.failureBranch.targetId = id || null; },
          getBranch: () => ev.failureBranch },
      ];
    case "requirement":
      return [
        { label: "Soddisfatto", color: "#6f8a57",
          getTarget: () => ev.metBranch?.targetId,
          setTarget: (id) => { ev.metBranch = ev.metBranch || {}; ev.metBranch.targetId = id || null; },
          getBranch: () => ev.metBranch },
        { label: "Non soddisfatto", color: "#b94a48",
          getTarget: () => ev.unmetBranch?.targetId,
          setTarget: (id) => { ev.unmetBranch = ev.unmetBranch || {}; ev.unmetBranch.targetId = id || null; },
          getBranch: () => ev.unmetBranch },
      ];
    case "dialogue": {
      ensureDialogueEventDefaults(ev);
      const responses = Array.isArray(ev.root?.responses) ? ev.root.responses : [];
      if (responses.length) {
        return responses.map((response, index) => ({
          label: `Risposta ${index + 1}`,
          color: "#8b78b8",
          getTarget: () => response.targetId,
          setTarget: (id) => { response.targetId = id || null; },
          getBranch: () => response
        }));
      }
      return [{
        label: "Uscita lineare",
        color: "#8b78b8",
        getTarget: () => ev.branch?.targetId,
        setTarget: (id) => { ev.branch = ev.branch || {}; ev.branch.targetId = id || null; },
        getBranch: () => ev.branch
      }];
    }
    default:
      // loot, shop, dialogue, transition — single branch
      return [{
        label: "Destinazione",
        color: "#b56d39",
        getTarget: () => ev.branch?.targetId,
        setTarget: (id) => { ev.branch = ev.branch || {}; ev.branch.targetId = id || null; },
        getBranch: () => ev.branch
      }];
  }
}

/** Costruisce una <select> con tutte le scene + sentinelle per una scelta di destinazione. */
function buildChoiceTargetSelect(currentDescId, currentValue) {
  const sel = document.createElement("select");
  sel.className = "ctp-scene-select";
  const opts = [
    { value: "",              label: "— non impostata —" },
    { value: DEATH_SENTINEL,  label: "Morte immediata" },
    { value: STAY_SENTINEL,   label: "Resta qui" },
  ];
  opts.forEach(({ value, label }) => {
    const o = document.createElement("option"); o.value = value; o.textContent = label;
    sel.appendChild(o);
  });
  state.adventure.descriptions.forEach((d, i) => {
    const o = document.createElement("option");
    o.value = d.id;
    o.textContent = `${i + 1}. ${d.title || "Senza titolo"}`;
    sel.appendChild(o);
  });
  getAdventureEventNodes().forEach((node, index) => {
    const o = document.createElement("option");
    o.value = node.id;
    o.textContent = `E${index + 1}. ${node.text || nodePickerKindLabel(node.event?.type)}`;
    sel.appendChild(o);
  });
  sel.value = currentValue || "";
  return sel;
}

function refreshFlowCard(sceneId) {
  if (getStandaloneEventNodeById(sceneId)) {
    refreshChoiceNodes(sceneId, getCurrentFlowBoardBounds());
    updateChoiceNodeSelection();
    return;
  }
  const sceneIndex = state.adventure.descriptions.findIndex((d) => d.id === sceneId);
  if (sceneIndex === -1) return;
  const current = flowCardElement(sceneId);
  const bounds = getCurrentFlowBoardBounds();
  if (!current) {
    els.flowCanvas.appendChild(createFlowCard(state.adventure.descriptions[sceneIndex], sceneIndex, bounds));
  } else {
    syncFlowCard(current, state.adventure.descriptions[sceneIndex], sceneIndex, bounds);
  }
  refreshChoiceNodes(sceneId, bounds);
  updateChoiceNodeSelection();
}

function scheduleFlowCardRefresh(sceneId, delay = 300) {
  if (state.ui.flowCardRefreshTimer) {
    window.clearTimeout(state.ui.flowCardRefreshTimer);
  }
  state.ui.flowCardRefreshTimer = window.setTimeout(() => {
    state.ui.flowCardRefreshTimer = null;
    refreshFlowCard(sceneId);
  }, delay);
}

function updateFlowCardSelection(previousSceneId, nextSceneId) {
  if (previousSceneId) flowCardElement(previousSceneId)?.classList.remove("active");
  if (nextSceneId) flowCardElement(nextSceneId)?.classList.add("active");
}

function updateChoiceNodeSelection() {
  const layer = els.choiceNodesLayer;
  if (!layer) return;
  layer.querySelectorAll(".choice-node[data-choice-id]").forEach((node) => {
    const descId = node.dataset.descId || "";
    const choiceId = node.dataset.choiceId || "";
    node.classList.toggle("is-selected", isEventNodeSelected(descId, choiceId));
    node.classList.toggle("is-multi-selected", isGraphNodeMultiSelected(choiceId));
  });
}

function scheduleFlowLinksRender(reason = "general") {
  if (reason === "drag") {
    const now = window.performance?.now?.() || Date.now();
    if (now - state.ui.lastFlowLinksDragRenderAt < FLOW_LINK_DRAG_THROTTLE_MS) return;
    state.ui.lastFlowLinksDragRenderAt = now;
  }
  if (state.ui.flowLinksFrame) return;
  state.ui.flowLinksFrame = window.requestAnimationFrame(() => {
    state.ui.flowLinksFrame = null;
    const bounds = state.drag?.bounds || state.ui.flowBoardBounds || computeBoardBounds();
    renderFlowLinks(bounds);
    // Sync choice nodes: cheap positional update during drag, full rebuild otherwise
    if (state.drag) {
      updateChoiceNodePositions(state.drag.sceneId, bounds);
    } else {
      renderChoiceNodes(bounds);
    }
  });
}

function nodeAnchor(scene, bounds = getCurrentFlowBoardBounds()) {
  const metrics = getFlowCardMetrics();
  const boardPoint = logicalToBoardPoint(scene.position, bounds);
  return { x: boardPoint.x + metrics.width, y: boardPoint.y + metrics.height / 2 };
}

function nodeEntry(scene, bounds = getCurrentFlowBoardBounds()) {
  const metrics = getFlowCardMetrics();
  const boardPoint = logicalToBoardPoint(scene.position, bounds);
  return { x: boardPoint.x, y: boardPoint.y + metrics.height / 2 };
}

function eventNodeAnchor(eventNode, bounds = getCurrentFlowBoardBounds()) {
  const frame = choiceNodeFrame(false);
  const boardPoint = logicalToBoardPoint(eventNode.position || { x: 0, y: 0 }, bounds);
  return { x: boardPoint.x + frame.width / 2, y: boardPoint.y };
}

function eventNodeEntry(eventNode, bounds = getCurrentFlowBoardBounds()) {
  const frame = choiceNodeFrame(false);
  const boardPoint = logicalToBoardPoint(eventNode.position || { x: 0, y: 0 }, bounds);
  return { x: boardPoint.x - frame.width / 2, y: boardPoint.y };
}

// ── Choice node geometry helpers ─────────────────────────────────────────────

/** Returns board-space {choice, x, y} for each choice of desc. */
function choiceNodesBoardPositions(desc, bounds = getCurrentFlowBoardBounds()) {
  const anchor = nodeAnchor(desc, bounds);
  const choices = desc.choices || [];
  const n = choices.length;
  const busX = anchor.x + CHOICE_BUS_GAP;
  const totalSpan = Math.max(0, n - 1) * CHOICE_SPACING;
  const startY = anchor.y - totalSpan / 2;
  return choices.map((choice, i) => ({
    choice,
    x: busX,
    y: startY + i * CHOICE_SPACING
  }));
}

/** Returns board-space {x, y} of the "add choice" button for desc. */
function choiceAddNodeBoardPos(desc, bounds = getCurrentFlowBoardBounds()) {
  const anchor = nodeAnchor(desc, bounds);
  const n = (desc.choices || []).length;
  const busX = anchor.x + CHOICE_BUS_GAP;
  const totalSpan = Math.max(0, n - 1) * CHOICE_SPACING;
  const lastY = n === 0 ? anchor.y : anchor.y - totalSpan / 2 + (n - 1) * CHOICE_SPACING;
  return { x: busX, y: n === 0 ? lastY : lastY + CHOICE_SPACING };
}

/** SVG path for the horizontal trunk + vertical bus connecting scene to choice nodes. */
function buildTrunkBusPath(desc, bounds = getCurrentFlowBoardBounds()) {
  const anchor = nodeAnchor(desc, bounds);
  const choices = desc.choices || [];
  const n = choices.length;
  if (n === 0) return "";
  const busX = anchor.x + CHOICE_BUS_GAP;
  const totalSpan = Math.max(0, n - 1) * CHOICE_SPACING;
  const topY = anchor.y - totalSpan / 2;
  const botY = anchor.y + totalSpan / 2;
  const stroke = "rgba(120,140,165,0.32)";
  let d = `M ${anchor.x} ${anchor.y} H ${busX}`;
  if (topY !== botY) d += ` M ${busX} ${topY} V ${botY}`;
  return `<path d="${d}" stroke="${stroke}" stroke-width="1.5" fill="none" pointer-events="none"/>`;
}

// ── Choice nodes DOM layer ───────────────────────────────────────────────────

/** Full rebuild of all choice node DOM elements. */
function renderChoiceNodes(bounds = getCurrentFlowBoardBounds()) {
  const layer = els.choiceNodesLayer;
  if (!layer) return;
  layer.innerHTML = "";
  layer.style.width = `${bounds.width}px`;
  layer.style.height = `${bounds.height}px`;
  getAdventureEventNodes().forEach((eventNode) => {
    if (isNodeHiddenByCollapsedChapter(eventNode.id)) return;
    const point = logicalToBoardPoint(eventNode.position || { x: 0, y: 0 }, bounds);
    layer.appendChild(createChoiceNodeEl({
      id: eventNode.id,
      title: eventNode.text || nodePickerKindLabel(eventNode.event?.type),
      isDetachedEventOwner: true
    }, eventNode, point.x, point.y));
  });
}

/** Rebuild choice nodes for a single desc (used after addChoice/deleteChoice). */
function refreshChoiceNodes(descId, bounds = getCurrentFlowBoardBounds()) {
  const layer = els.choiceNodesLayer;
  if (!layer) return;
  const eventNode = getStandaloneEventNodeById(descId);
  if (eventNode) {
    layer.querySelectorAll(`.choice-node[data-desc-id="${descId}"]`).forEach((el) => el.remove());
    const point = logicalToBoardPoint(eventNode.position || { x: 0, y: 0 }, bounds);
    layer.appendChild(createChoiceNodeEl({
      id: eventNode.id,
      title: eventNode.text || nodePickerKindLabel(eventNode.event?.type),
      isDetachedEventOwner: true
    }, eventNode, point.x, point.y));
    return;
  }
  renderChoiceNodes(bounds);
}

/** Move choice nodes during drag without full DOM rebuild. */
function updateChoiceNodePositions(descId, bounds = getCurrentFlowBoardBounds()) {
  const layer = els.choiceNodesLayer;
  if (!layer) return;
  const eventNode = getStandaloneEventNodeById(descId);
  if (!eventNode) return;
  const el = layer.querySelector(`.choice-node[data-desc-id="${descId}"][data-choice-id="${eventNode.id}"]`);
  if (!el) return;
  const point = logicalToBoardPoint(eventNode.position || { x: 0, y: 0 }, bounds);
  applyChoiceNodeFrame(el, point.x, point.y, false);
}

function choiceNodeFrame(isAdd = false) {
  const compact = isCompactFlowZoom();
  if (isAdd) {
    return compact
      ? { width: CHOICE_NODE_R * 2, height: CHOICE_NODE_R * 2, compact: true }
      : { width: FLOW_EVENT_ADD_NODE_WIDTH, height: FLOW_EVENT_ADD_NODE_HEIGHT, compact: false };
  }
  return compact
    ? { width: CHOICE_NODE_R * 2, height: CHOICE_NODE_R * 2, compact: true }
    : { width: FLOW_EVENT_NODE_WIDTH, height: FLOW_EVENT_NODE_HEIGHT, compact: false };
}

function applyChoiceNodeFrame(el, x, y, isAdd = false) {
  const frame = choiceNodeFrame(isAdd);
  el.style.left = `${x - frame.width / 2}px`;
  el.style.top = `${y - frame.height / 2}px`;
  el.style.width = `${frame.width}px`;
  el.style.height = `${frame.height}px`;
  el.classList.toggle("choice-node--compact", frame.compact);
}

function createChoiceNodeEl(desc, choice, x, y) {
  const el = document.createElement("button");
  el.type = "button";
  el.dataset.descId = desc.id;
  el.dataset.choiceId = choice.id;
  el.title = choice.text || `Scelta ${(desc.choices || []).indexOf(choice) + 1}`;
  const visual = choiceEventVisual(choice);
  const label = choice.text || visual.label;
  el.className = `choice-node ${visual.className}`;
  el.classList.toggle("is-selected", isEventNodeSelected(desc.id, choice.id));
  el.classList.toggle("is-multi-selected", isGraphNodeMultiSelected(choice.id));
  el.innerHTML = `
    <span class="choice-node__icon">${visual.icon}</span>
    <span class="choice-node__label">${esc(truncate(label, 18))}</span>
    <span class="choice-node__meta">${esc(visual.label)}</span>
  `;
  applyChoiceNodeFrame(el, x, y, false);
  el.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    if (event.target.closest(".node-connector")) return;
    state.dragCandidate = {
      kind: "event",
      descId: desc.id,
      choiceId: choice.id,
      startClientX: event.clientX,
      startClientY: event.clientY,
      bounds: getCurrentFlowBoardBounds(),
      element: el
    };
  });
  el.addEventListener("click", (e) => {
    e.stopPropagation();
    if (e.shiftKey) {
      toggleGraphNodeMultiSelection(choice.id);
      return;
    }
    setGraphNodeMultiSelection([choice.id]);
    closeChoiceTargetsPopover();
    closeChoiceEventPicker();
    closeFlowQuickMenus();
    selectEventNode(desc.id, choice.id, { scrollIntoView: false });
    showFlowEventQuickMenu(desc.id, choice.id, el.getBoundingClientRect());
  });
  el.addEventListener("dblclick", (e) => {
    e.stopPropagation();
    const targetChoice = desc.choices?.find((x) => x.id === choice.id) || choice;
    if (targetChoice?.event || targetChoice?.targetId) {
      showChoiceTargetsPopover(desc.id, choice.id, el.getBoundingClientRect());
    } else {
      showChoiceEventPicker(desc.id, choice.id, el.getBoundingClientRect());
    }
  });

  // Drag handle — appare al hover, permette di collegare la scelta a una scena trascinando
  const inputHandle = document.createElement("span");
  inputHandle.className = "node-connector node-connector--in choice-node-anchor";
  inputHandle.title = "Ingresso nodo evento";
  el.appendChild(inputHandle);

  const buildOutHandle = (portId = null, portLabel = "Continua", index = 0, total = 1) => {
    const handle = document.createElement("span");
    handle.className = "choice-node-link node-connector node-connector--out";
    handle.title = portId
      ? `Trascina il ramo "${portLabel}" verso una scena o un altro evento`
      : "Trascina per collegare a una scena o a un altro evento";
    if (total > 1) {
      const top = total === 2
        ? (index === 0 ? 34 : 66)
        : 24 + (52 / Math.max(1, total - 1)) * index;
      handle.style.top = `${top}%`;
    }
    handle.style.background = flowPortColor(portId);
    handle.style.borderColor = "rgba(245,233,208,0.88)";
    handle.addEventListener("pointerdown", (e) => {
      e.stopPropagation();
      e.preventDefault();
      const bounds = getCurrentFlowBoardBounds();
      const start = eventNodeAnchor(choice, bounds);
      closeChoiceTargetsPopover();
      closeChoiceEventPicker();
      state.linkDraft = {
        sceneId: choice.id,
        choiceId: choice.id,
        portId,
        start: { ...start },
        current: { ...start },
        pointerClientX: e.clientX,
        pointerClientY: e.clientY
      };
      scheduleFlowLinksRender("drag");
      ensureFlowAutoScrollLoop();
    });
    return handle;
  };

      const ports = choice.event ? eventPortsForType(choice.event) : [{ id: null, label: "Continua" }];
  ports.forEach((port, index) => {
    el.appendChild(buildOutHandle(port.id, port.label, index, ports.length));
  });
  return el;
}

function createChoiceAddNodeEl(desc, x, y) {
  const el = document.createElement("button");
  el.type = "button";
  el.className = "choice-node choice-node--add";
  el.dataset.descId = desc.id;
  el.innerHTML = `
    <span class="choice-node__icon">+</span>
    <span class="choice-node__label">Nuovo evento</span>
  `;
  applyChoiceNodeFrame(el, x, y, true);
  el.title = "Aggiungi scelta";
  el.addEventListener("click", (e) => {
    e.stopPropagation();
    addChoiceAndPickEvent(desc.id);
  });
  return el;
}

/** Adds a new choice to desc and immediately opens the event picker for it. */
function addChoiceAndPickEvent(descId) {
  switchSelectedScene(descId);
  const desc = state.adventure.descriptions.find((d) => d.id === descId);
  if (!desc) return;
  desc.choices = desc.choices || [];
  const newChoice = {
    id: createUniqueChoiceId(desc),
    text: `Scelta ${desc.choices.length + 1}`,
    hidden: false,
    burnAfterUse: false,
    targetId: null,
    event: null
  };
  desc.choices.push(newChoice);
  markSceneDirty();
  renderSceneEditor();
  scheduleJsonRender(180);
  scheduleFlowLinksRender();
  requestAnimationFrame(() => {
    const card = flowCardElement(descId);
    const cardRect = card?.getBoundingClientRect?.();
    showNodePicker({
      mode: "drag",
      sourceSceneId: descId,
      sourceChoiceId: newChoice.id,
      dropPoint: {
        x: (desc.position?.x || 0) + 260,
        y: (desc.position?.y || 0) + 20 + (desc.choices.length - 1) * 100
      },
      clientX: cardRect ? Math.min(cardRect.right + 24, window.innerWidth - 260) : null,
      clientY: cardRect ? Math.min(cardRect.top + 40, window.innerHeight - 260) : null,
      kindFilter: "event-only"
    });
  });
}

function setSceneTypeBadge(label, modifier = "description") {
  if (!els.sceneTypeBadge) return;
  els.sceneTypeBadge.textContent = label;
  els.sceneTypeBadge.className = `scene-type-badge scene-type-badge--${modifier}`;
  els.sceneTypeBadge.classList.remove("hidden");
}

function renderDescriptionEditor(desc) {
  if (els.scenePanelTitle) els.scenePanelTitle.textContent = "Descrizione selezionata";
  els.sceneTitle.disabled = false;
  els.sceneTitle.value = desc.title || "";
  els.sceneOpeningText.disabled = false;
  els.sceneOpeningText.value = desc.text || "";
  els.sceneOpeningText.placeholder = "";
  if (els.sceneIsEnding) els.sceneIsEnding.checked = Boolean(desc.isEnding);

  renderSceneImagePreview(desc);
  setSceneTypeBadge("Descrizione", "description");
  if (els.duplicateSceneBtn) els.duplicateSceneBtn.disabled = false;
  if (els.deleteSceneBtn) {
    els.deleteSceneBtn.disabled = false;
    els.deleteSceneBtn.textContent = "Elimina scena";
  }
  if (els.addSceneImageBtn) els.addSceneImageBtn.disabled = false;
  if (els.replaceSceneImageBtn) els.replaceSceneImageBtn.disabled = false;
  if (els.removeSceneImageBtn) els.removeSceneImageBtn.disabled = false;

  // Nascondi sezioni v1 non più presenti nel modello v2
  if (els.sceneKind) els.sceneKind.closest("label")?.classList.add("hidden");
  if (els.sceneCombatConfig)  els.sceneCombatConfig.classList.add("hidden");
  if (els.sceneOutcomesSection) els.sceneOutcomesSection.classList.add("hidden");
  document.getElementById("scene-loot-section")?.classList.add("hidden"); // v2: loot è sugli eventi
  if (els.sceneChoicesSection) {
    els.sceneChoicesSection.classList.remove("hidden");
    els.sceneChoicesSection.open = true;
  }
  if (els.sceneChoicesSummary) els.sceneChoicesSummary.textContent = "Scelte";
  if (els.sceneChoicesHint) els.sceneChoicesHint.textContent = "Lavora prima nella mappa: ogni scelta genera un nodo evento. Qui rifinisci solo payload, requisiti e opzioni avanzate.";
  if (els.addChoiceBtn) {
    els.addChoiceBtn.textContent = "Aggiungi scelta";
    els.addChoiceBtn.classList.remove("hidden");
  }

  renderChoices(desc);
}

function buildBehaviorToggleCard({ title, description, checked, onToggle, tone = "neutral" }) {
  const label = document.createElement("label");
  label.className = `setting-card setting-card--${tone}`;

  const body = document.createElement("span");
  body.className = "setting-card__body";

  const heading = document.createElement("span");
  heading.className = "setting-card__title";
  heading.textContent = title;

  const copy = document.createElement("span");
  copy.className = "setting-card__desc";
  copy.textContent = description;

  body.append(heading, copy);

  const toggle = document.createElement("span");
  toggle.className = "setting-switch";

  const input = document.createElement("input");
  input.type = "checkbox";
  input.checked = Boolean(checked);
  input.setAttribute("aria-label", title);
  input.addEventListener("change", (event) => onToggle(event.target.checked));

  const track = document.createElement("span");
  track.className = "setting-switch__track";

  toggle.append(input, track);
  label.append(body, toggle);
  return label;
}

function buildChoiceBehaviorSettings(desc, choice, onRefresh = () => {}) {
  const block = document.createElement("div");
  block.className = "choice-settings-block";

  const title = document.createElement("div");
  title.className = "choice-settings-block__title";
  title.textContent = "Comportamento della scelta";

  const grid = document.createElement("div");
  grid.className = "choice-settings-grid";

  grid.append(
    buildBehaviorToggleCard({
      title: "Scelta nascosta",
      description: "Non compare subito al lettore. Utile per rami che si sbloccano con condizioni o altri esiti.",
      checked: choice.hidden,
      onToggle: (value) => {
        choice.hidden = value;
        onChoiceChange(desc, choice);
        onRefresh();
      },
      tone: "stealth"
    }),
    buildBehaviorToggleCard({
      title: "Uso singolo",
      description: "Dopo essere stata usata una volta, questa scelta si consuma e non compare piu.",
      checked: choice.burnAfterUse,
      onToggle: (value) => {
        choice.burnAfterUse = value;
        onChoiceChange(desc, choice);
        onRefresh();
      },
      tone: "burn"
    })
  );

  block.append(title, grid);
  return block;
}

function buildEventTypeField(eventSelect) {
  const wrap = document.createElement("div");
  wrap.className = "choice-event-row";

  const copy = document.createElement("div");
  copy.className = "choice-event-row__copy";

  const title = document.createElement("strong");
  title.className = "choice-event-row__title";
  title.textContent = "Tipo di evento";

  copy.append(title);

  const control = document.createElement("div");
  control.className = "choice-event-row__control";
  control.appendChild(eventSelect);

  wrap.append(copy, control);
  return wrap;
}

function buildSelectedEventPayloadCard(desc, choice) {
  const visual = choiceEventVisual(choice);
  const detached = Boolean(desc?.isDetachedEventOwner);
  const card = document.createElement("div");
  card.className = `choice-card event-focus-card ${visual.cardClass}`;

  const top = document.createElement("div");
  top.className = "choice-card-summary";
  const badge = document.createElement("span");
  badge.className = `choice-card-summary-badge ${visual.className}`;
  badge.innerHTML = `<span class="choice-card-summary-icon">${visual.icon}</span><span class="choice-card-summary-label">${esc(visual.label)}</span>`;
  const meta = document.createElement("span");
  meta.className = "choice-card-summary-hint";
  meta.textContent = detached
    ? ""
    : `Scelta in: ${desc.title || "Descrizione senza titolo"}`;
  top.append(badge);
  if (meta.textContent) top.append(meta);

  const eventSelect = document.createElement("select");
  [
    { value: "", label: "Navigazione diretta" },
    { value: "combat", label: "Combattimento" },
    { value: "skillcheck", label: "Prova (skill check)" },
    { value: "requirement", label: "Requisito oggetto" },
    { value: "loot", label: "Loot" },
    { value: "transition", label: "Transizione" },
    { value: "dialogue", label: "Dialogo NPC" },
  ].forEach(({ value, label }) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    eventSelect.appendChild(option);
  });
  eventSelect.value = choice.event?.type || "";
  const typeRow = buildEventTypeField(eventSelect);

  const config = document.createElement("div");
  config.className = "choice-event-config";

  function setDirectNavigationFallback() {
    if (!choice.event) return;
    if (!choice.targetId) {
      const fallbackTarget = choice.event.branch?.targetId
        || choice.event.successBranch?.targetId
        || choice.event.victoryBranch?.targetId
        || choice.event.metBranch?.targetId
        || null;
      if (fallbackTarget) choice.targetId = fallbackTarget;
    }
    choice.event = null;
  }

  function rebuildConfig() {
    config.innerHTML = "";
    const eventType = eventSelect.value;
    if (!eventType) {
      setDirectNavigationFallback();
      config.appendChild(buildTargetRow("Destinazione", choice.targetId || "", (value) => {
        choice.targetId = value || null;
        onChoiceChange(desc, choice);
      }));
      onChoiceChange(desc, choice);
      return;
    }
    if (!choice.event || choice.event.type !== eventType) {
      choice.event = createDefaultEvent(eventType);
      choice.targetId = null;
      onChoiceChange(desc, choice);
    }
    const ev = choice.event;
    switch (eventType) {
      case "skillcheck":  buildSkillCheckConfig(config, ev, desc, choice); break;
      case "combat":      buildCombatConfig(config, ev, desc, choice); break;
      case "requirement": buildRequirementConfig(config, ev, desc, choice); break;
      case "loot":        buildLootEventConfig(config, ev, desc, choice); break;
      case "condition":   buildConditionConfig(config, ev, desc, choice); break;
      case "transition":  buildTransitionConfig(config, ev, desc, choice); break;
      case "shop":        buildShopEventConfig(config, ev, desc, choice); break;
      case "dialogue":    buildDialogueEventConfig(config, ev, desc, choice); break;
      default:
        config.appendChild(makeHint(`Configurazione per "${eventType}" in costruzione.`));
    }
  }

  eventSelect.addEventListener("change", () => {
    rebuildConfig();
    renderSceneEditor();
  });
  rebuildConfig();

  const behaviorBlock = buildChoiceBehaviorSettings(desc, choice);

  card.append(top, typeRow, behaviorBlock, config);
  return card;
}

function renderEventEditor(eventContext) {
  const { description: desc, choice, visual, detached } = eventContext;
  const eventPayload = choice.event || null;

  if (els.scenePanelTitle) els.scenePanelTitle.textContent = "Nodo evento selezionato";
  els.sceneTitle.disabled = false;
  els.sceneTitle.value = choice.text || "";
  els.sceneOpeningText.disabled = !eventPayload;
  els.sceneOpeningText.value = eventPayload?.text || "";
  els.sceneOpeningText.placeholder = eventPayload
    ? "Testo interno del nodo evento"
    : "La navigazione diretta non ha un testo evento separato.";
  if (els.sceneIsEnding) els.sceneIsEnding.checked = false;

  setSceneTypeBadge(visual.label, choice.event?.type || "transition");

  const supportsImage = Boolean(choice.event && ["combat", "loot", "shop", "transition", "dialogue"].includes(choice.event.type));
  if (!supportsImage) {
    els.sceneImagePreview.classList.add("hidden");
    els.sceneImageThumb.removeAttribute("src");
    els.sceneImageName.textContent = "Immagine evento";
  } else {
    renderSceneImagePreview(choice.event);
  }

  if (els.addSceneImageBtn) els.addSceneImageBtn.disabled = !supportsImage;
  if (els.replaceSceneImageBtn) els.replaceSceneImageBtn.disabled = !supportsImage;
  if (els.removeSceneImageBtn) els.removeSceneImageBtn.disabled = !supportsImage;
  if (els.duplicateSceneBtn) els.duplicateSceneBtn.disabled = true;
  if (els.deleteSceneBtn) {
    els.deleteSceneBtn.disabled = !detached;
    els.deleteSceneBtn.textContent = detached ? "Cancella evento" : "Elimina scena";
  }

  if (els.sceneKind) els.sceneKind.closest("label")?.classList.add("hidden");
  if (els.sceneCombatConfig)  els.sceneCombatConfig.classList.add("hidden");
  if (els.sceneOutcomesSection) els.sceneOutcomesSection.classList.add("hidden");
  document.getElementById("scene-loot-section")?.classList.add("hidden");

  if (els.sceneChoicesSection) {
    els.sceneChoicesSection.classList.remove("hidden");
    els.sceneChoicesSection.open = true;
  }
  if (els.sceneChoicesSummary) {
    els.sceneChoicesSummary.textContent = `${visual.label} — payload`;
  }
  if (els.sceneChoicesHint) {
    const hintText = detached
      ? ""
      : `Evento della scelta in "${desc.title || "Descrizione senza titolo"}".`;
    els.sceneChoicesHint.textContent = hintText;
    els.sceneChoicesHint.classList.toggle("hidden", !hintText);
  }
  if (els.addChoiceBtn) {
    els.addChoiceBtn.classList.add("hidden");
  }
  els.choiceList.innerHTML = "";
  els.choiceList.appendChild(buildSelectedEventPayloadCard(desc, choice));
}

function renderSceneEditor() {
  const desc = getSelectedScene();
  const eventContext = getSelectedEventContext();
  const visible = Boolean(desc || eventContext);
  els.sceneEmpty.classList.toggle("hidden", visible);
  els.sceneEditor.classList.toggle("hidden", !visible);
  if (!visible) {
    if (els.scenePanelTitle) els.scenePanelTitle.textContent = "Evento selezionato";
    els.sceneTypeBadge?.classList.add("hidden");
  }
  updateSceneSaveStatus();
  if (eventContext) {
    renderEventEditor(eventContext);
  } else if (desc) {
    renderDescriptionEditor(desc);
  } else {
    closeFlowEventQuickMenu();
    return;
  }
  updateSceneStatusDot();
}

function createMonsterFromArchetype(archetype) {
  return {
    id: createUniqueMonsterId(),
    name: "",
    description: "",
    hitPoints: archetype.hitPoints,
    attackBonus: archetype.attackBonus,
    defense: archetype.defense,
    damageMin: archetype.damageMin,
    damageMax: archetype.damageMax,
    goldReward: archetype.goldReward,
    abilityIds: [...archetype.abilityIds],
    hasBerserkerPhase: archetype.hasBerserkerPhase,
    loot: buildMonsterLootFromArchetype(archetype),
    sourceType: "archetype",
    archetypeId: archetype.id
  };
}

function buildArchetypePicker(onSelect) {
  const wrapper = document.createElement("div");
  wrapper.className = "archetype-picker";

  const title = document.createElement("p");
  title.className = "archetype-picker-title";
  title.textContent = "Scegli il ruolo del mostro";
  wrapper.appendChild(title);

  const grid = document.createElement("div");
  grid.className = "archetype-grid";
  MONSTER_STAT_ARCHETYPES.forEach((arch) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "archetype-card";
    btn.innerHTML = `
      <span class="archetype-card-icon">${arch.icon}</span>
      <span class="archetype-card-label">${arch.label}</span>
      <span class="archetype-card-hint">${arch.hint}</span>
      <span class="archetype-card-stats">HP ${arch.hitPoints} &nbsp;ATK +${arch.attackBonus} &nbsp;DEF ${arch.defense}</span>
    `;
    btn.addEventListener("click", () => onSelect(arch.id));
    grid.appendChild(btn);
  });
  wrapper.appendChild(grid);

  const footer = document.createElement("div");
  footer.className = "archetype-picker-footer";
  const customBtn = document.createElement("button");
  customBtn.type = "button";
  customBtn.className = "button-ghost-small";
  customBtn.textContent = "Personalizza da zero";
  customBtn.addEventListener("click", () => onSelect("__custom__"));
  footer.appendChild(customBtn);
  wrapper.appendChild(footer);

  return wrapper;
}

function renderSceneLoot(scene) {
  renderLootList(els.sceneLootList, scene.sceneLoot, {
    rerender: () => renderSceneLoot(scene)
  });
  const lootSummary = document.getElementById("scene-loot-summary");
  if (lootSummary) {
    const n = (scene.sceneLoot || []).length;
    lootSummary.textContent = n > 0 ? `${n} oggett${n === 1 ? "o" : "i"}` : "Ricompense e oggetti";
  }
}

function renderSceneImagePreview(scene) {
  // Supporta sia v2 (desc.image = URL/dataUrl) sia il caso in cui l'editor
  // ha già caricato un'immagine (scene.eventImage = oggetto con dataUrl + metadati).
  const normalizedImage = scene.eventImage ? normalizeSceneImage(scene.eventImage) : null;
  if (normalizedImage) scene.eventImage = normalizedImage;
  const previewUrl = normalizedImage?.dataUrl || (typeof scene.image === "string" ? scene.image : null);
  const hasSceneImage = Boolean(previewUrl);
  els.sceneImagePreview.classList.toggle("hidden", !hasSceneImage);
  if (!hasSceneImage) {
    els.sceneImageThumb.removeAttribute("src");
    els.sceneImageName.textContent = "Immagine evento";
    return;
  }
  els.sceneImageThumb.src = previewUrl;
  els.sceneImageZoom.value = String(normalizedImage?.zoom ?? 1);
  els.sceneImageFocusX.value = String(normalizedImage?.focusX ?? 50);
  els.sceneImageFocusY.value = String(normalizedImage?.focusY ?? 50);
  const imageMeta = [
    normalizedImage?.name || "Immagine evento",
    normalizedImage?.width && normalizedImage?.height ? `${normalizedImage.width}x${normalizedImage.height}` : "",
    normalizedImage?.sizeKb ? `${normalizedImage.sizeKb} KB` : "",
    normalizedImage ? `zoom ${normalizedImage.zoom.toFixed(2)}x` : ""
  ].filter(Boolean).join(" | ");
  els.sceneImageName.textContent = imageMeta || "Immagine evento";
}

function renderChoices(desc) {
  const container = els.choiceList;
  if (!container) return;
  container.innerHTML = "";
  (desc.choices || []).forEach((choice, index) => {
    container.appendChild(buildChoiceCard(desc, choice, index));
  });
  if (els.sceneChoicesSummary) {
    const n = (desc.choices || []).length;
    els.sceneChoicesSummary.textContent = n > 0 ? `${n} scelt${n === 1 ? "a" : "e"}` : "Scelte";
  }
}

function onChoiceChange(desc, choice) {
  markSceneDirty();
  refreshFlowCard(desc.id);  // also calls refreshChoiceNodes internally
  scheduleFlowLinksRender();
  scheduleJsonRender();
}

// Costruisce il DOM di un choice card per il nuovo modello
function buildChoiceCard(desc, choice, index) {
  const card = document.createElement("div");
  const initialVisual = choiceEventVisual(choice);
  card.className = `choice-card ${initialVisual.cardClass}`;

  // ── Header ────────────────────────────────────────────────────────────────
  const header = document.createElement("div");
  header.className = "choice-card-header";

  const textInput = document.createElement("input");
  textInput.type = "text";
  textInput.placeholder = "Testo scelta...";
  textInput.value = choice.text || "";
  textInput.addEventListener("input", (e) => {
    choice.text = e.target.value;
    onChoiceChange(desc, choice);
    refreshCardSummary();
  });

  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.className = "danger small";
  removeBtn.textContent = "?";
  removeBtn.title = "Rimuovi scelta";
  removeBtn.addEventListener("click", () => {
    desc.choices.splice(index, 1);
    onChoiceChange(desc, choice);
    renderChoices(desc);
  });

  header.append(textInput, removeBtn);

  const summary = document.createElement("div");
  summary.className = "choice-card-summary";
  const summaryBadge = document.createElement("span");
  const summaryIcon = document.createElement("span");
  summaryIcon.className = "choice-card-summary-icon";
  const summaryLabel = document.createElement("span");
  summaryLabel.className = "choice-card-summary-label";
  const summaryHint = document.createElement("span");
  summaryHint.className = "choice-card-summary-hint";
  summaryBadge.append(summaryIcon, summaryLabel);
  summary.append(summaryBadge, summaryHint);

  const advanced = document.createElement("details");
  advanced.className = "choice-card-advanced";
  if (!choice.event && !choice.targetId) advanced.open = true;
  const advancedSummary = document.createElement("summary");
  advancedSummary.textContent = "Dettagli avanzati";

  // ── Flags ─────────────────────────────────────────────────────────────────
  const flagsRow = document.createElement("div");
  flagsRow.className = "choice-flags-row";

  const hiddenLabel = document.createElement("label");
  const hiddenChk = document.createElement("input");
  hiddenChk.type = "checkbox";
  hiddenChk.checked = Boolean(choice.hidden);
  hiddenChk.addEventListener("change", (e) => {
    choice.hidden = e.target.checked;
    onChoiceChange(desc, choice);
    refreshCardSummary();
  });
  hiddenLabel.append(hiddenChk, " Nascosta");

  const burnLabel = document.createElement("label");
  const burnChk = document.createElement("input");
  burnChk.type = "checkbox";
  burnChk.checked = Boolean(choice.burnAfterUse);
  burnChk.addEventListener("change", (e) => {
    choice.burnAfterUse = e.target.checked;
    onChoiceChange(desc, choice);
    refreshCardSummary();
  });
  burnLabel.append(burnChk, " Brucia dopo uso");

  flagsRow.append(hiddenLabel, burnLabel);

  // ── Event type selector ───────────────────────────────────────────────────
  const eventRow = document.createElement("div");
  eventRow.className = "choice-event-row";

  const eventLabel = document.createElement("label");
  eventLabel.textContent = "Tipo evento ";
  const eventSelect = document.createElement("select");
  const eventTypes = [
    { value: "", label: "Navigazione diretta" },
    { value: "combat", label: "Combattimento" },
    { value: "skillcheck", label: "Prova (skill check)" },
    { value: "requirement", label: "Requisito oggetto" },
    { value: "loot", label: "Loot" },
    { value: "transition", label: "Transizione" },
    { value: "dialogue", label: "Dialogo NPC" },
  ];
  eventTypes.forEach(({ value, label }) => {
    const opt = document.createElement("option");
    opt.value = value;
    opt.textContent = label;
    eventSelect.appendChild(opt);
  });
  eventSelect.value = choice.event?.type || "";
  eventLabel.appendChild(eventSelect);
  eventRow.appendChild(eventLabel);

  // ── Event config section (rebuilds on change) ─────────────────────────────
  const eventConfig = document.createElement("div");
  eventConfig.className = "choice-event-config";

  const mapHint = document.createElement("p");
  mapHint.className = "hint choice-card-map-hint";
  mapHint.textContent = "Usa la mappa per collegare gli esiti. Qui rifinisci solo i dettagli avanzati.";

  function refreshCardSummary() {
    const visual = choiceEventVisual(choice);
    card.className = `choice-card ${visual.cardClass}`;
    summaryBadge.className = `choice-card-summary-badge ${visual.className}`;
    summaryIcon.textContent = visual.icon;
    summaryLabel.textContent = visual.label;
    const notes = [summarizeChoiceFlow(choice)];
    if (choice.hidden) notes.push("Scelta nascosta");
    if (choice.burnAfterUse) notes.push("Uso singolo");
    summaryHint.textContent = notes.join(" | ");
  }

  function rebuildEventConfig() {
    eventConfig.innerHTML = "";
    const evType = eventSelect.value;
    if (!evType) {
      // Navigazione diretta: mostra target selector
      if (choice.event) { choice.event = null; onChoiceChange(desc, choice); }
      eventConfig.appendChild(buildTargetRow("Destinazione", choice.targetId || "", (v) => {
        choice.targetId = v || null;
        onChoiceChange(desc, choice);
        refreshCardSummary();
      }));
    } else {
      // Assicura che event esista e abbia il tipo giusto
      if (!choice.event || choice.event.type !== evType) {
        choice.event = createDefaultEvent(evType);
        choice.targetId = null;
        onChoiceChange(desc, choice);
      }
      const ev = choice.event;
      switch (evType) {
        case "skillcheck":  buildSkillCheckConfig(eventConfig, ev, desc, choice); break;
        case "combat":      buildCombatConfig(eventConfig, ev, desc, choice); break;
        case "requirement": buildRequirementConfig(eventConfig, ev, desc, choice); break;
        case "loot":        buildLootEventConfig(eventConfig, ev, desc, choice); break;
        case "condition":   buildConditionConfig(eventConfig, ev, desc, choice); break;
        case "transition":  buildTransitionConfig(eventConfig, ev, desc, choice); break;
        case "shop":        buildShopEventConfig(eventConfig, ev, desc, choice); break;
        case "dialogue":    buildDialogueEventConfig(eventConfig, ev, desc, choice); break;
        default:
          eventConfig.appendChild(makeHint(`Configurazione per "${evType}" in costruzione.`));
      }
    }
    refreshCardSummary();
  }

  eventSelect.addEventListener("change", rebuildEventConfig);
  rebuildEventConfig();

  advanced.append(advancedSummary, flagsRow, eventRow, mapHint, eventConfig);
  refreshCardSummary();

  card.append(header, summary, advanced);
  return card;
}

// ── Helper: target selector ───────────────────────────────────────────────────

function buildTargetRow(labelText, currentValue, onChange, options = {}) {
  const label = document.createElement("label");
  label.textContent = labelText + " ";
  const select = document.createElement("select");
  const hydrateTargetSelect = typeof options.hydrateTargetSelect === "function"
    ? options.hydrateTargetSelect
    : hydrateDescriptionTargetSelectAdvanced;
  hydrateTargetSelect(select, currentValue, options);
  select.addEventListener("change", (e) => { if (!e.target._hydrating) onChange(e.target.value); });
  label.appendChild(select);
  return label;
}

function hydrateDescriptionTargetSelectAdvanced(select, currentValue, options = {}) {
  const includeEmpty = options.includeEmpty !== false;
  if (includeEmpty) {
    hydrateDescriptionTargetSelect(select, currentValue);
    return;
  }
  select._hydrating = true;
  select.innerHTML = "";
  [
    { value: DEATH_SENTINEL, label: "Morte immediata" },
    { value: STAY_SENTINEL, label: "Resta qui" }
  ].forEach(({ value, label }) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    select.appendChild(option);
  });
  state.adventure.descriptions.forEach((description) => {
    const option = document.createElement("option");
    option.value = description.id;
    option.textContent = description.title || description.id;
    select.appendChild(option);
  });
  getAdventureEventNodes().forEach((node, index) => {
    const option = document.createElement("option");
    option.value = node.id;
    option.textContent = `[Evento ${index + 1}] ${node.text || nodePickerKindLabel(node.event?.type)}`;
    select.appendChild(option);
  });
  select.value = currentValue || DEATH_SENTINEL;
  select._hydrating = false;
}

function buildBranchRow(labelText, branch, desc, choice, options = {}) {
  if (typeof options === "boolean") options = {};
  const defaultTargetId = options.defaultTargetId || null;
  if (defaultTargetId && !branch.targetId) branch.targetId = defaultTargetId;
  const wrap = document.createElement("div");
  wrap.className = "branch-row";
  wrap.appendChild(buildTargetRow(labelText, branch.targetId || "", (v) => {
    branch.targetId = v || defaultTargetId || null;
    onChoiceChange(desc, choice);
  }, {
    includeEmpty: options.includeEmptyTarget !== false,
    hydrateTargetSelect: options.hydrateTargetSelect
  }));
  const textInput = document.createElement("input");
  textInput.type = "text";
  textInput.placeholder = options.textPlaceholder || "Testo ramo (opzionale)";
  textInput.value = branch.text || "";
  textInput.addEventListener("input", (e) => {
    branch.text = e.target.value || null;
    onChoiceChange(desc, choice);
  });
  const burnToggle = buildBehaviorToggleCard({
    title: "Consuma questo ramo",
    description: "Quando il lettore attraversa questo esito, il ramo si esaurisce e non puo essere riusato.",
    checked: Boolean(branch.burnAfterUse),
    onToggle: (value) => {
      branch.burnAfterUse = value;
      onChoiceChange(desc, choice);
    },
    tone: "burn"
  });
  wrap.append(textInput, burnToggle);
  if (options.caption) {
    const caption = makeHint(options.caption);
    caption.classList.add("branch-row-caption");
    wrap.appendChild(caption);
  }
  return wrap;
}

function hydrateDescriptionTargetSelectAdvanced(select, currentValue, options = {}) {
  const includeEmpty = options.includeEmpty !== false;
  if (includeEmpty) {
    hydrateDescriptionTargetSelect(select, currentValue);
    return;
  }
  select._hydrating = true;
  select.innerHTML = "";
  [
    { value: DEATH_SENTINEL, label: "Morte" },
    { value: STAY_SENTINEL, label: "Resta qui" }
  ].forEach(({ value, label }) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    select.appendChild(option);
  });
  state.adventure.descriptions.forEach((description) => {
    const option = document.createElement("option");
    option.value = description.id;
    option.textContent = description.title || description.id;
    select.appendChild(option);
  });
  getAdventureEventNodes().forEach((node, index) => {
    const option = document.createElement("option");
    option.value = node.id;
    option.textContent = `[Evento ${index + 1}] ${node.text || nodePickerKindLabel(node.event?.type)}`;
    select.appendChild(option);
  });
  select.value = currentValue || DEATH_SENTINEL;
  select._hydrating = false;
}

function makeHint(text) {
  const p = document.createElement("p");
  p.className = "hint";
  p.textContent = text;
  return p;
}

// ── SkillCheck config ─────────────────────────────────────────────────────────

function buildSkillCheckConfig(container, ev, desc, choice) {
  // Attributo
  const attrLabel = document.createElement("label");
  attrLabel.textContent = "Attributo ";
  const attrSel = document.createElement("select");
  SKILLS.forEach(({ value, label }) => {
    const opt = document.createElement("option");
    opt.value = value; opt.textContent = label;
    attrSel.appendChild(opt);
  });
  attrSel.value = ev.attribute || "";
  attrSel.addEventListener("change", (e) => { ev.attribute = e.target.value; onChoiceChange(desc, choice); });
  attrLabel.appendChild(attrSel);

  // Difficoltà
  const diffLabel = document.createElement("label");
  diffLabel.textContent = " Difficoltà ";
  const diffInput = document.createElement("input");
  diffInput.type = "number"; diffInput.min = 1; diffInput.max = 30;
  diffInput.value = ev.difficulty || 12;
  diffInput.style.width = "60px";
  diffInput.addEventListener("input", (e) => { ev.difficulty = parseInt(e.target.value) || 12; onChoiceChange(desc, choice); });
  diffLabel.appendChild(diffInput);

  // burnOnFailure
  const burnLabel = document.createElement("label");
  const burnChk = document.createElement("input");
  burnChk.type = "checkbox"; burnChk.checked = Boolean(ev.burnOnFailure);
  burnChk.addEventListener("change", (e) => { ev.burnOnFailure = e.target.checked; onChoiceChange(desc, choice); });
  burnLabel.append(burnChk, " Brucia scelta anche su fallimento");

  container.append(attrLabel, diffLabel, burnLabel,
    document.createElement("br"),
    makeHint("Riuscita:"),
    buildBranchRow("Destinazione successo", ev.successBranch, desc, choice),
    makeHint("Fallimento:"),
    buildBranchRow("Destinazione fallimento", ev.failureBranch, desc, choice, {
      hydrateTargetSelect: hydrateFailureTargetSelect
    })
  );
}

// ── Combat config ─────────────────────────────────────────────────────────────

function buildCombatConfig(container, ev, desc, choice) {
  container.appendChild(makeHint("Combattimento — gruppi nemici"));

  const groupList = document.createElement("div");
  groupList.className = "combat-group-list";

  function rerenderGroups() {
    groupList.innerHTML = "";
    (ev.combatGroups || []).forEach((group, gi) => {
      const row = buildCombatGroupRow(group, gi, ev, desc, choice, rerenderGroups);
      groupList.appendChild(row);
    });
  }
  rerenderGroups();

  const addGroupBtn = document.createElement("button");
  addGroupBtn.type = "button"; addGroupBtn.textContent = "Aggiungi gruppo";
  addGroupBtn.addEventListener("click", () => {
    ev.combatGroups.push(createDefaultCombatGroup());
    rerenderGroups();
    onChoiceChange(desc, choice);
  });

  container.append(groupList, addGroupBtn,
    document.createElement("br"),
    makeHint("Vittoria:"),
    buildBranchRow("Destinazione vittoria", ev.victoryBranch, desc, choice),
    makeHint("Sconfitta:"),
    buildBranchRow("Destinazione sconfitta", ev.defeatBranch, desc, choice)
  );

  // Ritirata (opzionale)
  const retreatToggle = document.createElement("label");
  const retreatChk = document.createElement("input");
  retreatChk.type = "checkbox"; retreatChk.checked = Boolean(ev.retreatBranch);
  retreatChk.addEventListener("change", (e) => {
    ev.retreatBranch = e.target.checked ? { targetId: null, text: null, loot: [], burnAfterUse: false } : null;
    onChoiceChange(desc, choice);
    rerenderRetreat();
  });
  retreatToggle.append(retreatChk, " Abilita ritirata");
  container.appendChild(retreatToggle);

  const retreatSection = document.createElement("div");
  function rerenderRetreat() {
    retreatSection.innerHTML = "";
    if (ev.retreatBranch) {
      retreatSection.appendChild(buildBranchRow("Destinazione ritirata", ev.retreatBranch, desc, choice, true));
    }
  }
  rerenderRetreat();
  container.appendChild(retreatSection);
}

function buildCombatGroupRow(group, gi, ev, desc, choice, rerender) {
  const row = document.createElement("div");
  row.className = "combat-group-row";

  // Selezione preset mostro
  const presetSel = document.createElement("select");
  const noneOpt = document.createElement("option"); noneOpt.value = ""; noneOpt.textContent = "— scegli mostro —";
  presetSel.appendChild(noneOpt);
  MONSTER_PRESETS.forEach((p) => {
    const opt = document.createElement("option");
    opt.value = p.id; opt.textContent = p.name;
    presetSel.appendChild(opt);
  });
  presetSel.value = group.monsterId || "";
  presetSel.addEventListener("change", (e) => {
    const preset = MONSTER_PRESETS.find((p) => p.id === e.target.value);
    if (preset) Object.assign(group, {
      monsterId: preset.id, name: preset.name, description: preset.description || "",
      hitPoints: preset.hitPoints, attackBonus: preset.attackBonus, defense: preset.defense,
      damageMin: preset.damageMin, damageMax: preset.damageMax,
      goldReward: preset.goldReward, abilityIds: [...(preset.abilityIds || [])],
      hasBerserkerPhase: Boolean(preset.hasBerserkerPhase),
      loot: (preset.loot || []).map((l) => ({ ...l }))
    });
    onChoiceChange(desc, choice);
    rerender();
  });

  // Nome custom
  const nameInput = document.createElement("input");
  nameInput.type = "text"; nameInput.placeholder = "Nome mostro"; nameInput.value = group.name || "";
  nameInput.addEventListener("input", (e) => { group.name = e.target.value; onChoiceChange(desc, choice); });

  // Stats compatti
  const statsRow = document.createElement("div");
  statsRow.className = "two-col";
  [
    ["HP", "hitPoints", 1], ["ATK", "attackBonus", 0], ["DEF", "defense", 1],
    ["Min", "damageMin", 1], ["Max", "damageMax", 1], ["Oro", "goldReward", 0]
  ].forEach(([lbl, field, min]) => {
    const l = document.createElement("label");
    l.textContent = lbl + " ";
    const inp = document.createElement("input");
    inp.type = "number"; inp.min = min; inp.value = group[field] ?? 1; inp.style.width = "55px";
    inp.addEventListener("input", (e) => { group[field] = parseInt(e.target.value) || 0; onChoiceChange(desc, choice); });
    l.appendChild(inp); statsRow.appendChild(l);
  });

  const removeBtn = document.createElement("button");
  removeBtn.type = "button"; removeBtn.className = "danger small"; removeBtn.textContent = "Rimuovi";
  removeBtn.addEventListener("click", () => {
    ev.combatGroups.splice(gi, 1);
    onChoiceChange(desc, choice); rerender();
  });

  row.append(presetSel, nameInput, statsRow, removeBtn);
  return row;
}

// ── Requirement config ────────────────────────────────────────────────────────

function buildRequirementConfig(container, ev, desc, choice) {
  const modeLabel = document.createElement("label");
  modeLabel.textContent = "Tipo requisito ";
  const modeSel = document.createElement("select");
  [
    { value: "itemId", label: "ID oggetto specifico" },
    { value: "itemCategory", label: "Categoria oggetto" },
    { value: "effectId", label: "Effetto oggetto" }
  ].forEach(({ value, label }) => {
    const opt = document.createElement("option"); opt.value = value; opt.textContent = label;
    modeSel.appendChild(opt);
  });
  const currentMode = ev.itemId ? "itemId" : ev.itemCategory ? "itemCategory" : "effectId";
  modeSel.value = currentMode;
  modeLabel.appendChild(modeSel);

  const valueLabel = document.createElement("label");
  valueLabel.textContent = "Valore ";
  const valueInput = document.createElement("input");
  valueInput.type = "text";
  valueInput.value = ev.itemId || ev.itemCategory || ev.effectId || "";
  function syncReqValue() {
    const mode = modeSel.value;
    ev.itemId = mode === "itemId" ? (valueInput.value || null) : null;
    ev.itemCategory = mode === "itemCategory" ? (valueInput.value || null) : null;
    ev.effectId = mode === "effectId" ? (valueInput.value || null) : null;
    onChoiceChange(desc, choice);
  }
  modeSel.addEventListener("change", syncReqValue);
  valueInput.addEventListener("input", syncReqValue);
  valueLabel.appendChild(valueInput);

  const consumeLabel = document.createElement("label");
  const consumeChk = document.createElement("input");
  consumeChk.type = "checkbox"; consumeChk.checked = Boolean(ev.consumeOnMet);
  consumeChk.addEventListener("change", (e) => { ev.consumeOnMet = e.target.checked; onChoiceChange(desc, choice); });
  consumeLabel.append(consumeChk, " Consuma l'oggetto se requisito soddisfatto");

  container.append(modeLabel, valueLabel, consumeLabel,
    makeHint("Requisito soddisfatto:"),
    buildBranchRow("Destinazione", ev.metBranch, desc, choice),
    makeHint("Requisito non soddisfatto:"),
    buildBranchRow("Destinazione", ev.unmetBranch, desc, choice)
  );
}

// ── Loot event config ─────────────────────────────────────────────────────────

function buildLootEventConfig(container, ev, desc, choice) {
  const lootSection = document.createElement("div");
  function rerenderLoot() {
    renderLootList(lootSection, ev.loot, {
      rerender: rerenderLoot,
      onChange: () => onChoiceChange(desc, choice)
    });
  }
  rerenderLoot();
  const addLootBtn = document.createElement("button");
  addLootBtn.type = "button"; addLootBtn.textContent = "Aggiungi loot";
  addLootBtn.addEventListener("click", () => {
    ev.loot.push(createLootFromPreset("coins"));
    rerenderLoot(); onChoiceChange(desc, choice);
  });
  container.append(lootSection, addLootBtn,
    makeHint("Continua verso:"),
    buildBranchRow("Destinazione", ev.branch, desc, choice)
  );
}

// ── Condition event config ────────────────────────────────────────────────────

function buildConditionConfig(container, ev, desc, choice) {
  const condLabel = document.createElement("label");
  condLabel.textContent = "Condizione ";
  const condSel = document.createElement("select");
  hydrateConditionSelect(condSel, ev.conditionId || "");
  condSel.addEventListener("change", (e) => { ev.conditionId = e.target.value; onChoiceChange(desc, choice); });
  condLabel.appendChild(condSel);
  container.append(condLabel,
    makeHint("Continua verso:"),
    buildBranchRow("Destinazione", ev.branch, desc, choice)
  );
}

// ── Transition event config ───────────────────────────────────────────────────

function buildTransitionConfig(container, ev, desc, choice) {
  const textLabel = document.createElement("label");
  textLabel.textContent = "Testo transizione";
  const textArea = document.createElement("textarea");
  textArea.rows = 3; textArea.value = ev.text || "";
  textArea.addEventListener("input", (e) => { ev.text = e.target.value; onChoiceChange(desc, choice); });
  textLabel.appendChild(textArea);
  container.append(textLabel,
    makeHint("Continua verso:"),
    buildBranchRow("Destinazione", ev.branch, desc, choice)
  );
}

// ── Default event factories ───────────────────────────────────────────────────

function createDefaultEvent(type) {
  const emptyBranch = () => ({ text: null, loot: [], condition: null, unlockChoiceId: null, burnAfterUse: false, targetId: null, event: null });
  switch (type) {
    case "combat":      return { type: "combat", text: null, image: null, combatGroups: [], victoryBranch: emptyBranch(), defeatBranch: { ...emptyBranch(), targetId: DEATH_SENTINEL }, retreatBranch: null };
    case "skillcheck":  return { type: "skillcheck", text: null, attribute: "", difficulty: 12, successBranch: emptyBranch(), failureBranch: { ...emptyBranch(), targetId: STAY_SENTINEL }, burnOnFailure: false };
    case "requirement": return { type: "requirement", text: null, requirementMode: "presetItem", itemId: null, lockId: null, questItemId: null, metBranch: emptyBranch(), unmetBranch: emptyBranch() };
    case "loot":        return { type: "loot", text: null, image: null, loot: [], branch: emptyBranch() };
    case "condition":   return { type: "condition", text: null, conditionId: "", branch: emptyBranch() };
    case "shop":        return { type: "shop", text: null, image: null, items: [], branch: emptyBranch() };
    case "transition":  return { type: "transition", text: "", image: null, branch: emptyBranch() };
    case "dialogue":    return { type: "dialogue", text: null, npcName: "", npcImage: null, root: { npcText: "", responses: [], branch: emptyBranch() } };
    default:            return null;
  }
}

function createDefaultCombatGroup() {
  return { monsterId: "", count: 1, name: "", description: "", hitPoints: 10, attackBonus: 2, defense: 11, damageMin: 1, damageMax: 4, goldReward: 5, abilityIds: [], hasBerserkerPhase: false, loot: [] };
}

function cloneLootDraft(items) {
  return (items || []).map((item) => ({
    ...item,
    effectIds: [...(item.effectIds || [])]
  }));
}

function createEmptyEventBranch() {
  return {
    text: null,
    loot: [],
    condition: null,
    unlockChoiceId: null,
    burnAfterUse: false,
    targetId: null,
    event: null
  };
}

function ensureCombatEventDefaults(ev) {
  ev.combatGroups = Array.isArray(ev.combatGroups) ? ev.combatGroups : [];
  ev.combatGroups.forEach((group) => ensureGeneratedLootForCombatGroup(group));
  ev.victoryBranch = ev.victoryBranch || createEmptyEventBranch();
  ev.defeatBranch = ev.defeatBranch || createEmptyEventBranch();
  if (!ev.defeatBranch.targetId) ev.defeatBranch.targetId = DEATH_SENTINEL;
}

function applyPresetToCombatGroup(group, preset) {
  if (!preset) return;
  Object.assign(group, {
    monsterId: preset.id,
    sourceType: "preset",
    archetypeId: "",
    name: preset.name,
    description: preset.description || "",
    hitPoints: preset.hitPoints,
    attackBonus: preset.attackBonus,
    defense: preset.defense,
    damageMin: preset.damageMin,
    damageMax: preset.damageMax,
    goldReward: preset.goldReward,
    abilityIds: [...(preset.abilityIds || [])],
    hasBerserkerPhase: Boolean(preset.hasBerserkerPhase),
    loot: cloneLootDraft(buildMonsterLootFromPreset(preset))
  });
}

function applyArchetypeToCombatGroup(group, archetype) {
  if (!archetype) return;
  const template = createMonsterFromArchetype(archetype);
  Object.assign(group, {
    monsterId: "",
    sourceType: "archetype",
    archetypeId: archetype.id,
    name: group.name || "",
    description: group.description || "",
    hitPoints: template.hitPoints,
    attackBonus: template.attackBonus,
    defense: template.defense,
    damageMin: template.damageMin,
    damageMax: template.damageMax,
    goldReward: template.goldReward,
    abilityIds: [...(template.abilityIds || [])],
    hasBerserkerPhase: Boolean(template.hasBerserkerPhase),
    loot: cloneLootDraft(template.loot || [])
  });
}

function createCombatGroupFromPreset(presetId) {
  const group = createDefaultCombatGroup();
  const preset = MONSTER_PRESETS.find((entry) => entry.id === presetId) || MONSTER_PRESETS[0] || null;
  applyPresetToCombatGroup(group, preset);
  return group;
}

function createCombatGroupFromArchetypeId(archetypeId) {
  const group = createDefaultCombatGroup();
  const archetype = MONSTER_STAT_ARCHETYPES.find((entry) => entry.id === archetypeId) || null;
  if (archetype) applyArchetypeToCombatGroup(group, archetype);
  return group;
}

function combatGroupSourceLabel(group) {
  if (group.monsterId) return "Preset";
  if (group.archetypeId) return "Archetipo";
  return "Custom";
}

function summarizeCombatGroup(group) {
  const quantity = Math.max(1, parseInt(group.count, 10) || 1);
  const lootCount = (group.loot || []).length;
  const abilityCount = (group.abilityIds || []).filter(Boolean).length;
  return [
    `Quantita ${quantity}`,
    `HP ${group.hitPoints || 0}`,
    `ATK +${group.attackBonus || 0}`,
    `DEF ${group.defense || 0}`,
    `DMG ${group.damageMin || 0}-${group.damageMax || 0}`,
    lootCount ? `${lootCount} loot` : "Senza loot",
    abilityCount ? `${abilityCount} abilita` : null,
    group.hasBerserkerPhase ? "Fase furia" : null
  ].filter(Boolean).join(" | ");
}

function buildCombatStatField(labelText, group, field, min, desc, choice, onAfterInput = null) {
  const label = document.createElement("label");
  label.className = "combat-stat-field";
  label.textContent = labelText;
  const input = document.createElement("input");
  input.type = "number";
  input.min = min;
  input.value = group[field] ?? min;
  input.addEventListener("input", (event) => {
    group[field] = parseInt(event.target.value, 10) || 0;
    onChoiceChange(desc, choice);
    onAfterInput?.();
  });
  label.appendChild(input);
  return label;
}

function buildCombatConfig(container, ev, desc, choice) {
  ensureCombatEventDefaults(ev);

  const overview = document.createElement("div");
  overview.className = "combat-event-overview";
  function refreshOverview() {
    const totalEnemies = (ev.combatGroups || []).reduce((sum, group) => sum + Math.max(1, parseInt(group.count, 10) || 1), 0);
    overview.innerHTML = `
      <strong>Gruppi nemici: ${(ev.combatGroups || []).length}</strong>
      <span>${totalEnemies} nemic${totalEnemies === 1 ? "o" : "i"} totali</span>
      <span>Sconfitta predefinita: Morte</span>
    `;
  }
  refreshOverview();

  const addBar = document.createElement("div");
  addBar.className = "combat-group-toolbar";

  const presetLabel = document.createElement("label");
  presetLabel.textContent = "Aggiungi preset ";
  const presetSelect = document.createElement("select");
  MONSTER_PRESETS.forEach((preset) => {
    const option = document.createElement("option");
    option.value = preset.id;
    option.textContent = `${preset.name} | HP ${preset.hitPoints} | DEF ${preset.defense}`;
    presetSelect.appendChild(option);
  });
  presetLabel.appendChild(presetSelect);

  const addPresetBtn = document.createElement("button");
  addPresetBtn.type = "button";
  addPresetBtn.textContent = "Inserisci preset";
  addPresetBtn.addEventListener("click", () => {
    ev.combatGroups.push(createCombatGroupFromPreset(presetSelect.value));
    onChoiceChange(desc, choice);
    rerenderGroups();
  });

  const archetypeLabel = document.createElement("label");
  archetypeLabel.textContent = "Nuovo mostro da archetipo ";
  const archetypeSelect = document.createElement("select");
  MONSTER_STAT_ARCHETYPES.forEach((archetype) => {
    const option = document.createElement("option");
    option.value = archetype.id;
    option.textContent = `${archetype.label} | HP ${archetype.hitPoints} | DEF ${archetype.defense}`;
    archetypeSelect.appendChild(option);
  });
  archetypeLabel.appendChild(archetypeSelect);

  const addArchetypeBtn = document.createElement("button");
  addArchetypeBtn.type = "button";
  addArchetypeBtn.textContent = "Nuovo mostro";
  addArchetypeBtn.addEventListener("click", () => {
    ev.combatGroups.push(createCombatGroupFromArchetypeId(archetypeSelect.value));
    onChoiceChange(desc, choice);
    rerenderGroups();
  });

  const addCustomBtn = document.createElement("button");
  addCustomBtn.type = "button";
  addCustomBtn.className = "button-ghost-small";
  addCustomBtn.textContent = "Da zero";
  addCustomBtn.addEventListener("click", () => {
    ev.combatGroups.push(createDefaultCombatGroup());
    onChoiceChange(desc, choice);
    rerenderGroups();
  });

  addBar.append(presetLabel, addPresetBtn, archetypeLabel, addArchetypeBtn, addCustomBtn);

  const groupList = document.createElement("div");
  groupList.className = "combat-group-list";

  function rerenderGroups() {
    groupList.innerHTML = "";
    ensureCombatEventDefaults(ev);
    refreshOverview();
    ev.combatGroups.forEach((group, groupIndex) => {
      groupList.appendChild(buildCombatGroupRow(group, groupIndex, ev, desc, choice, rerenderGroups, refreshOverview));
    });
  }
  rerenderGroups();

  const branchSection = document.createElement("div");
  branchSection.className = "combat-branch-grid";
  branchSection.append(
    buildBranchRow("Vittoria", ev.victoryBranch, desc, choice),
    buildBranchRow("Sconfitta", ev.defeatBranch, desc, choice, {
      includeEmptyTarget: false,
      defaultTargetId: DEATH_SENTINEL,
      caption: "La sconfitta parte sempre da Morte, a meno che tu la reindirizzi in modo esplicito."
    })
  );

  const retreatToggle = document.createElement("label");
  retreatToggle.className = "combat-retreat-toggle";
  const retreatCheckbox = document.createElement("input");
  retreatCheckbox.type = "checkbox";
  retreatCheckbox.checked = Boolean(ev.retreatBranch);
  retreatCheckbox.addEventListener("change", (event) => {
    ev.retreatBranch = event.target.checked ? createEmptyEventBranch() : null;
    onChoiceChange(desc, choice);
    rerenderRetreat();
  });
  retreatToggle.append(retreatCheckbox, " Abilita ramo di ritirata");

  const retreatSection = document.createElement("div");
  function rerenderRetreat() {
    retreatSection.innerHTML = "";
    if (!ev.retreatBranch) return;
    retreatSection.appendChild(buildBranchRow("Ritirata", ev.retreatBranch, desc, choice));
  }
  rerenderRetreat();

  container.append(overview, addBar, groupList, branchSection, retreatToggle, retreatSection);
}

function buildCombatGroupRow(group, gi, ev, desc, choice, rerender, refreshOverview = null) {
  group.loot = Array.isArray(group.loot) ? group.loot : [];
  group.abilityIds = Array.isArray(group.abilityIds) ? group.abilityIds : [];
  ensureGeneratedLootForCombatGroup(group);

  const card = document.createElement("section");
  card.className = "choice-card combat-group-card";

  const header = document.createElement("div");
  header.className = "combat-group-card-header";

  const titleBlock = document.createElement("div");
  const title = document.createElement("strong");
  const subtitle = document.createElement("div");
  subtitle.className = "combat-group-card-subtitle";
  titleBlock.append(title, subtitle);

  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.className = "danger small";
  removeBtn.textContent = "Rimuovi gruppo";
  removeBtn.addEventListener("click", () => {
    ev.combatGroups.splice(gi, 1);
    onChoiceChange(desc, choice);
    rerender();
  });

  header.append(titleBlock, removeBtn);

  const summary = document.createElement("div");
  summary.className = "combat-group-summary-line";

  const notes = document.createElement("p");
  notes.className = "monster-card-hint";

  function refreshNotes() {
    const parts = [];
    if (group.abilityIds.length) parts.push(`Abilita preset: ${group.abilityIds.join(", ")}`);
    if (group.hasBerserkerPhase) parts.push("Ha una fase furia.");
    notes.textContent = parts.join(" | ") || "Preset per mostri pronti, archetipi per crearne uno da zero con statistiche di base.";
  }

  function refreshSummary() {
    title.textContent = group.name || `Gruppo ${gi + 1}`;
    subtitle.textContent = `${combatGroupSourceLabel(group)}${group.monsterId ? ` — ${group.monsterId}` : group.archetypeId ? ` — ${group.archetypeId}` : ""}`;
    summary.textContent = summarizeCombatGroup(group);
    refreshNotes();
    refreshOverview?.();
  }
  refreshSummary();

  const sourceGrid = document.createElement("div");
  sourceGrid.className = "two-col combat-group-source-grid";

  const presetLabel = document.createElement("label");
  presetLabel.textContent = "Preset pronto ";
  const presetSelect = document.createElement("select");
  const emptyPreset = document.createElement("option");
  emptyPreset.value = "";
  emptyPreset.textContent = "Nessun preset";
  presetSelect.appendChild(emptyPreset);
  MONSTER_PRESETS.forEach((preset) => {
    const option = document.createElement("option");
    option.value = preset.id;
    option.textContent = preset.name;
    presetSelect.appendChild(option);
  });
  presetSelect.value = group.monsterId || "";
  presetSelect.addEventListener("change", (event) => {
    const preset = MONSTER_PRESETS.find((entry) => entry.id === event.target.value) || null;
    if (!preset) return;
    applyPresetToCombatGroup(group, preset);
    onChoiceChange(desc, choice);
    rerender();
  });
  presetLabel.appendChild(presetSelect);

  const archetypeLabel = document.createElement("label");
  archetypeLabel.textContent = "Archetipo di partenza ";
  const archetypeSelect = document.createElement("select");
  const emptyArchetype = document.createElement("option");
  emptyArchetype.value = "";
  emptyArchetype.textContent = "Nessun archetipo";
  archetypeSelect.appendChild(emptyArchetype);
  MONSTER_STAT_ARCHETYPES.forEach((archetype) => {
    const option = document.createElement("option");
    option.value = archetype.id;
    option.textContent = `${archetype.label} | ${archetype.hint}`;
    archetypeSelect.appendChild(option);
  });
  archetypeSelect.value = group.archetypeId || "";
  archetypeSelect.addEventListener("change", (event) => {
    const archetype = MONSTER_STAT_ARCHETYPES.find((entry) => entry.id === event.target.value) || null;
    if (!archetype) return;
    applyArchetypeToCombatGroup(group, archetype);
    onChoiceChange(desc, choice);
    rerender();
  });
  archetypeLabel.appendChild(archetypeSelect);
  sourceGrid.append(presetLabel, archetypeLabel);

  const identityGrid = document.createElement("div");
  identityGrid.className = "two-col combat-group-identity-grid";

  const nameLabel = document.createElement("label");
  nameLabel.textContent = "Nome in scena ";
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.placeholder = "Nome mostro";
  nameInput.value = group.name || "";
  nameInput.addEventListener("input", (event) => {
    group.name = event.target.value;
    onChoiceChange(desc, choice);
    refreshSummary();
  });
  nameLabel.appendChild(nameInput);

  const countLabel = document.createElement("label");
  countLabel.textContent = "Quantita ";
  const countInput = document.createElement("input");
  countInput.type = "number";
  countInput.min = 1;
  countInput.value = Math.max(1, parseInt(group.count, 10) || 1);
  countInput.addEventListener("input", (event) => {
    group.count = Math.max(1, parseInt(event.target.value, 10) || 1);
    onChoiceChange(desc, choice);
    refreshSummary();
  });
  countLabel.appendChild(countInput);

  const berserkLabel = document.createElement("label");
  berserkLabel.className = "combat-group-toggle";
  berserkLabel.textContent = "Fase furia ";
  const berserkCheckbox = document.createElement("input");
  berserkCheckbox.type = "checkbox";
  berserkCheckbox.checked = Boolean(group.hasBerserkerPhase);
  berserkCheckbox.addEventListener("change", (event) => {
    group.hasBerserkerPhase = event.target.checked;
    onChoiceChange(desc, choice);
    refreshSummary();
  });
  berserkLabel.appendChild(berserkCheckbox);
  identityGrid.append(nameLabel, countLabel, berserkLabel);

  const statsGrid = document.createElement("div");
  statsGrid.className = "combat-group-stats-grid";
  [
    ["HP", "hitPoints", 1],
    ["ATK", "attackBonus", 0],
    ["DEF", "defense", 1],
    ["DMG min", "damageMin", 1],
    ["DMG max", "damageMax", 1],
    ["Oro", "goldReward", 0]
  ].forEach(([labelText, field, min]) => {
    statsGrid.appendChild(buildCombatStatField(labelText, group, field, min, desc, choice, refreshSummary));
  });

  const advanced = document.createElement("details");
  advanced.className = "combat-group-advanced";
  const advancedSummary = document.createElement("summary");
  advancedSummary.textContent = "Modifica loot e dettagli avanzati";
  advanced.appendChild(advancedSummary);

  const generateRandomLootBtn = document.createElement("button");
  generateRandomLootBtn.type = "button";
  generateRandomLootBtn.className = "advanced-secondary-btn";
  generateRandomLootBtn.textContent = "Genera loot casuale";
  generateRandomLootBtn.addEventListener("click", () => {
    group.loot = regenerateLootForCombatGroup(group);
    rerenderLoot();
    onChoiceChange(desc, choice);
    refreshSummary();
    advanced.open = true;
  });
  advanced.appendChild(generateRandomLootBtn);

  const lootWrap = document.createElement("div");
  lootWrap.className = "combat-group-loot";
  const lootHeader = document.createElement("div");
  lootHeader.className = "combat-group-loot-header";
  const lootTitle = document.createElement("strong");
  lootTitle.textContent = "Loot del mostro";
  const addLootBtn = document.createElement("button");
  addLootBtn.type = "button";
  addLootBtn.textContent = "Aggiungi loot";
  addLootBtn.addEventListener("click", () => {
    group.loot.push(createLootFromPreset("coins"));
    rerenderLoot();
    onChoiceChange(desc, choice);
    refreshSummary();
  });
  lootHeader.append(lootTitle, addLootBtn);

  const lootList = document.createElement("div");
  function rerenderLoot() {
    renderLootList(lootList, group.loot, {
      rerender: rerenderLoot,
      onChange: () => {
        onChoiceChange(desc, choice);
        refreshSummary();
      }
    });
  }
  rerenderLoot();
  lootWrap.append(lootHeader, lootList);

  advanced.append(lootWrap);
  card.append(header, summary, sourceGrid, identityGrid, statsGrid, notes, advanced);
  return card;
}

function createDefaultEvent(type) {
  switch (type) {
    case "combat":      return { type: "combat", text: null, image: null, combatGroups: [], victoryBranch: createEmptyEventBranch(), defeatBranch: { ...createEmptyEventBranch(), targetId: DEATH_SENTINEL }, retreatBranch: null };
    case "skillcheck":  return { type: "skillcheck", text: null, attribute: "", difficulty: 12, successBranch: createEmptyEventBranch(), failureBranch: { ...createEmptyEventBranch(), targetId: STAY_SENTINEL }, burnOnFailure: false };
    case "requirement": return { type: "requirement", text: null, requirementMode: "presetItem", itemId: null, lockId: null, questItemId: null, metBranch: createEmptyEventBranch(), unmetBranch: createEmptyEventBranch() };
    case "loot":        return { type: "loot", text: null, image: null, loot: [], branch: createEmptyEventBranch() };
    case "condition":   return { type: "condition", text: null, conditionId: "", branch: createEmptyEventBranch() };
    case "shop":        return { type: "shop", text: null, image: null, items: [], branch: createEmptyEventBranch() };
    case "transition":  return { type: "transition", text: "", image: null, branch: createEmptyEventBranch() };
    case "dialogue":    return { type: "dialogue", text: null, npcName: "", npcImage: null, root: { npcText: "", responses: [], branch: createEmptyEventBranch() } };
    default:            return null;
  }
}

function createDefaultCombatGroup() {
  return {
    monsterId: "",
    sourceType: "custom",
    archetypeId: "",
    count: 1,
    name: "",
    description: "",
    hitPoints: 10,
    attackBonus: 2,
    defense: 11,
    damageMin: 1,
    damageMax: 4,
    goldReward: 5,
    abilityIds: [],
    hasBerserkerPhase: false,
    loot: []
  };
}

// ─── Populate description target selects ──────────────────────────────────────

function hydrateDescriptionTargetSelect(select, currentValue) {
  select._hydrating = true;
  const sentinels = [
    { value: "", label: "Nessuna destinazione" },
    { value: DEATH_SENTINEL, label: "Morte immediata" },
    { value: STAY_SENTINEL, label: "Resta qui" }
  ];
  select.innerHTML = "";
  sentinels.forEach(({ value, label }) => {
    const opt = document.createElement("option"); opt.value = value; opt.textContent = label;
    select.appendChild(opt);
  });
  state.adventure.descriptions.forEach((d) => {
    const opt = document.createElement("option");
    opt.value = d.id; opt.textContent = d.title || d.id;
    select.appendChild(opt);
  });
  getAdventureEventNodes().forEach((node, index) => {
    const opt = document.createElement("option");
    opt.value = node.id;
    opt.textContent = `[Evento ${index + 1}] ${node.text || nodePickerKindLabel(node.event?.type)}`;
    select.appendChild(opt);
  });
  select.value = currentValue || "";
  select._hydrating = false;
}

// ─── DEAD CODE from old model — kept as stubs so old call sites don't crash ───

function renderChoiceCards(container, choices, handlers) {
  // old model, not used — renderChoices replaces this entirely
  (choices || []).forEach((choice, index) => {
    const node = document.createElement("div"); // stub: no template in v2
    node.querySelector('[data-field="text"]').value = choice.text || "";
    node.querySelector('[data-field="endingText"]').value = choice.endingText || "";
    const targetLabel = node.querySelector('[data-field="targetSceneId"]').closest("label");
    hydrateSceneTargetSelect(node.querySelector('[data-field="targetSceneId"]'), choice.targetSceneId || "");
    attachNavigateBtn(node, '[data-field="targetSceneId"]');
    hydrateSkillSelect(node.querySelector('[data-field="checkAttribute"]'), choice.skillCheck?.attribute || "");
    hydrateSuccessTargetSelect(node.querySelector('[data-field="checkSuccess"]'), choice.skillCheck?.successSceneId || "");
    attachNavigateBtn(node, '[data-field="checkSuccess"]');
    hydrateFailureTargetSelect(node.querySelector('[data-field="checkFailure"]'), choice.skillCheck?.failureSceneId || "");
    attachNavigateBtn(node, '[data-field="checkFailure"]');
    node.querySelector('[data-field="checkDifficulty"]').value = choice.skillCheck?.difficulty ?? "";
    node.querySelector('[data-field="burnOnFailure"]').checked = Boolean(choice.skillCheck?.burnOnFailure);
    node.querySelector('[data-field="hidden"]').checked = Boolean(choice.hidden);

    // ── nascondi "Collega a evento" quando il skill check è attivo ────────────
    function syncTargetVisibility() {
      const hasCheck = Boolean(choice.skillCheck?.attribute && choice.skillCheck?.successSceneId);
      if (targetLabel) targetLabel.style.display = hasCheck ? "none" : "";
    }
    syncTargetVisibility();

    // ── sezioni inline (visibili solo con "Resta qui" sul ramo corrispondente) ─
    // I draft vivono sull'oggetto choice per sopravvivere ai rerender.
    const successInlineSection = node.querySelector('[data-role="success-inline-section"]');
    const failureInlineSection = node.querySelector('[data-role="failure-inline-section"]');
    const successLootList      = node.querySelector('[data-role="success-loot-list"]');
    const failureLootList      = node.querySelector('[data-role="failure-loot-list"]');

    if (!choice._successLootDraft) {
      choice._successLootDraft = Array.isArray(choice.skillCheck?.successLoot)
        ? choice.skillCheck.successLoot : [];
    }
    if (!choice._failureLootDraft) {
      choice._failureLootDraft = Array.isArray(choice.skillCheck?.failureLoot)
        ? choice.skillCheck.failureLoot : [];
    }

    function syncInlineSections() {
      const successVal = node.querySelector('[data-field="checkSuccess"]').value;
      const failureVal = node.querySelector('[data-field="checkFailure"]').value;
      const isSuccessStay = successVal === STAY_SENTINEL;
      const isFailureStay = failureVal === STAY_SENTINEL || failureVal === "";
      successInlineSection.style.display = isSuccessStay ? "" : "none";
      failureInlineSection.style.display = isFailureStay ? "" : "none";
    }
    syncInlineSections();

    // Idrata campi success inline
    node.querySelector('[data-field="successText"]').value = choice.skillCheck?.successText || "";
    hydrateEncounterSelect(node.querySelector('[data-field="successEncounterId"]'), choice.skillCheck?.successEncounterId || "");
    hydrateConditionSelect(node.querySelector('[data-field="successCondition"]'), choice.skillCheck?.successCondition || "");
    node.querySelector('[data-field="successUnlockChoiceId"]').value = choice.skillCheck?.successUnlockChoiceId || "";

    // Idrata campi failure inline
    node.querySelector('[data-field="failureText"]').value = choice.skillCheck?.failureText || "";
    hydrateEncounterSelect(node.querySelector('[data-field="failureEncounterId"]'), choice.skillCheck?.failureEncounterId || "");
    hydrateConditionSelect(node.querySelector('[data-field="failureCondition"]'), choice.skillCheck?.failureCondition || "");
    node.querySelector('[data-field="failureUnlockChoiceId"]').value = choice.skillCheck?.failureUnlockChoiceId || "";

    function rerenderSuccessLoot() {
      renderLootList(successLootList, choice._successLootDraft, {
        rerender: rerenderSuccessLoot,
        onChange: () => { markSceneDirty(); scheduleJsonRender(); }
      });
    }
    rerenderSuccessLoot();

    function rerenderFailureLoot() {
      renderLootList(failureLootList, choice._failureLootDraft, {
        rerender: rerenderFailureLoot,
        onChange: () => { markSceneDirty(); scheduleJsonRender(); }
      });
    }
    rerenderFailureLoot();

    node.querySelector('[data-field="checkSuccess"]').addEventListener("change", () => {
      syncInlineSections();
    });
    node.querySelector('[data-field="checkFailure"]').addEventListener("change", () => {
      syncInlineSections();
    });

    node.querySelector('[data-action="add-success-loot"]').addEventListener("click", () => {
      choice._successLootDraft.push(createLootFromPreset("coins"));
      rerenderSuccessLoot();
      markSceneDirty();
      scheduleJsonRender();
    });

    node.querySelector('[data-action="add-failure-loot"]').addEventListener("click", () => {
      choice._failureLootDraft.push(createLootFromPreset("coins"));
      rerenderFailureLoot();
      markSceneDirty();
      scheduleJsonRender();
    });

    // ── requirements: mode-switch UI ─────────────────────────────────────────
    if (false) {
      const lockId = "";
      const name = "";
      reqKeyHint.textContent = name
        ? `Chiave: "${name}" — lockId ${lockId}`
        : `? Nessuna chiave con lockId "${lockId}" trovata nell'avventura.`;
    }

    function updateKeyHint() {
      if (!reqKeyHint) return;
      const lockId = normalizeString(choice.requiredLockId);
      const allLoot = collectAllAdventureLoot();
      const key = allLoot.find((l) => normalizeString(l.lockId) === lockId);
      const preset = LOOT_PRESETS.find((p) => p.lockId === lockId);
      const name = key?.itemName || preset?.name || choice.requiredLockLabel || "";
      reqKeyHint.textContent = lockId
        ? (name
          ? `Chiave: "${name}" — lockId ${lockId}`
          : `? Nessuna chiave con lockId "${lockId}" trovata nell'avventura.`)
        : "Seleziona una chiave gia presente nell'avventura.";
    }

    function updateSummaryHint() {
      if (!reqSummaryHint) return;
      if (choice.requiredLockId) {
        const allLoot = collectAllAdventureLoot();
        const key = allLoot.find((l) => normalizeString(l.lockId) === choice.requiredLockId);
        const preset = LOOT_PRESETS.find((p) => p.lockId === choice.requiredLockId);
        reqSummaryHint.textContent = `${key?.itemName || preset?.name || choice.requiredLockId}`;
      } else if (choice.requiredItemId) {
        reqSummaryHint.textContent = `${lootPresetById(choice.requiredItemId)?.name || choice.requiredItemId}`;
      } else if (choice.requiredItemCategory) {
        const cat = ITEM_CATEGORIES.find((c) => c.value === choice.requiredItemCategory);
        reqSummaryHint.textContent = `${cat?.label || choice.requiredItemCategory}`;
      } else if (choice.requiredEffectId) {
        reqSummaryHint.textContent = `? ${effectPresetLabel(choice.requiredEffectId)}`;
      } else {
        reqSummaryHint.textContent = "Nessuno";
      }
    }

    function clearAllReqFields() {
      choice.requiredLockId = "";
      choice.requiredLockLabel = "";
      choice.requiredItemId = "";
      choice.requiredItemCategory = "";
      choice.requiredEffectId = "";
    }

    // initial hydration
    const initialMode = detectMode();
    reqModeSelect.value = initialMode;
    showSection(initialMode);
    hydrateKeySelect(reqKeySelect, choice.requiredLockId || "");
    hydrateLootSelect(reqItemSelect, choice.requiredItemId || "", { includeCustom: false });
    reqItemCustom.value = choice.requiredItemId || "";
    hydrateCategorySelect(reqCatSelect, choice.requiredItemCategory || "");
    hydrateEffectSelect(reqEffectSelect, choice.requiredEffectId || "");
    updateKeyHint();
    updateSummaryHint();

    node.querySelector('[data-field="text"]').addEventListener("input", (event) => {
      choice.text = event.target.value;
      handlers.onChange();
    });

    node.querySelector('[data-field="endingText"]').addEventListener("input", (event) => {
      choice.endingText = event.target.value;
      handlers.onChange();
    });

    node.querySelector('[data-field="targetSceneId"]').addEventListener("change", (event) => {
      if (event.target._hydrating) return;
      const val = normalizeString(event.target.value);
      choice.targetSceneId = val;
      if (val) delete choice.skillCheck;
      syncTargetVisibility();
      handlers.onChange();
    });

    // ── requirement event listeners ───────────────────────────────────────────
    reqModeSelect.addEventListener("change", (event) => {
      const mode = event.target.value;
      clearAllReqFields();
      // reset all selects/inputs to blank
      reqKeySelect.value = "";
      reqItemSelect.value = "";
      reqItemCustom.value = "";
      reqCatSelect.value = "";
      reqEffectSelect.value = "";
      // re-hydrate key select when switching to key mode (may have new items)
      if (mode === "key") hydrateKeySelect(reqKeySelect, "");
      showSection(mode);
      updateKeyHint();
      updateSummaryHint();
      handlers.onChange();
    });

    reqKeySelect.addEventListener("change", (event) => {
      choice.requiredLockId = normalizeString(event.target.value) || "";
      // auto-fill lockLabel from key name for export annotation
      const allLoot = [
        ...collectAllAdventureLoot()
      ];
      const key = allLoot.find((l) => normalizeString(l.lockId) === choice.requiredLockId);
      const preset = LOOT_PRESETS.find((p) => p.lockId === choice.requiredLockId);
      choice.requiredLockLabel = key?.itemName || preset?.name || "";
      updateKeyHint();
      updateSummaryHint();
      handlers.onChange();
    });

    reqItemSelect.addEventListener("change", (event) => {
      choice.requiredItemId = normalizeString(event.target.value) || "";
      reqItemCustom.value = choice.requiredItemId;
      updateSummaryHint();
      handlers.onChange();
    });

    reqItemCustom.addEventListener("input", (event) => {
      choice.requiredItemId = normalizeString(event.target.value) || "";
      reqItemSelect.value = "";
      updateSummaryHint();
      handlers.onChange();
    });

    reqCatSelect.addEventListener("change", (event) => {
      choice.requiredItemCategory = normalizeString(event.target.value) || "";
      updateSummaryHint();
      handlers.onChange();
    });

    reqEffectSelect.addEventListener("change", (event) => {
      choice.requiredEffectId = normalizeString(event.target.value) || "";
      updateSummaryHint();
      handlers.onChange();
    });

    node.querySelector('[data-field="consumeOnUse"]').addEventListener("change", (event) => {
      choice.consumeOnUse = Boolean(event.target.checked);
      handlers.onChange();
    });

    // ── skill check summary badge ─────────────────────────────────────────────
    const checkSummaryHint = node.querySelector('[data-role="check-summary-hint"]');
    function updateCheckSummaryHint() {
      if (!checkSummaryHint) return;
      if (choice.skillCheck?.attribute && choice.skillCheck?.successSceneId) {
        const skillLabel = SKILLS.find((s) => s.value === choice.skillCheck.attribute)?.label || choice.skillCheck.attribute;
        checkSummaryHint.textContent = `${skillLabel} dif. ${choice.skillCheck.difficulty || 0}`;
      } else {
        checkSummaryHint.textContent = "Solo se serve";
      }
    }
    updateCheckSummaryHint();

    function syncCheck() {
      updateChoiceCheck(choice, node, handlers.onChange);
      updateCheckSummaryHint();
      syncTargetVisibility();
    }

    node.querySelector('[data-field="checkAttribute"]').addEventListener("change", (e) => { if (!e.target._hydrating) syncCheck(); });
    node.querySelector('[data-field="checkDifficulty"]').addEventListener("input", () => syncCheck());
    node.querySelector('[data-field="checkSuccess"]').addEventListener("change", (e) => { if (!e.target._hydrating) syncCheck(); });
    node.querySelector('[data-field="checkFailure"]').addEventListener("change", (e) => { if (!e.target._hydrating) syncCheck(); });
    node.querySelector('[data-field="burnOnFailure"]').addEventListener("change", () => syncCheck());
    node.querySelector('[data-field="hidden"]').addEventListener("change", (e) => {
      choice.hidden = Boolean(e.target.checked);
      handlers.onChange();
    });
    // Campi inline successo
    node.querySelector('[data-field="successText"]').addEventListener("input", () => syncCheck());
    node.querySelector('[data-field="successEncounterId"]').addEventListener("change", (e) => { if (!e.target._hydrating) syncCheck(); });
    node.querySelector('[data-field="successCondition"]').addEventListener("change", (e) => { if (!e.target._hydrating) syncCheck(); });
    node.querySelector('[data-field="successUnlockChoiceId"]').addEventListener("input", () => syncCheck());
    // Campi inline fallimento
    node.querySelector('[data-field="failureText"]').addEventListener("input", () => syncCheck());
    node.querySelector('[data-field="failureEncounterId"]').addEventListener("change", (e) => { if (!e.target._hydrating) syncCheck(); });
    node.querySelector('[data-field="failureCondition"]').addEventListener("change", (e) => { if (!e.target._hydrating) syncCheck(); });
    node.querySelector('[data-field="failureUnlockChoiceId"]').addEventListener("input", () => syncCheck());

    node.querySelector('[data-action="remove-choice"]').addEventListener("click", () => {
      handlers.onRemove(index);
    });

    container.appendChild(node);
  });
}

function renderOutcomeEditor(scene) {
  els.sceneOutcomesList.innerHTML = "";
  outcomeDefinitionsForScene(scene).forEach((definition) => {
    const branch = getOutcomeBranch(scene, definition.key);
    const wrapper = document.createElement("details");
    wrapper.className = "choice-card outcome-card";
    wrapper.open = true;
    const directLabel = branch.targetSceneId ? sceneTitleById(branch.targetSceneId) : "nessuna destinazione diretta";
    const summaryMeta = branch.choices.length
      ? `${branch.choices.length} scelta/e di esito`
      : directLabel;
    const hasTransitionText = Boolean(branch.transitionText);
    wrapper.innerHTML = `
      <summary class="panel-summary compact-summary combat-group-summary">
        <span>${definition.title}</span>
        <small>${summaryMeta}</small>
      </summary>
      <label>Vai direttamente a evento<select data-role="outcome-target"></select></label>
      <p class="hint">${definition.hint}</p>
      <div class="outcome-transition">
        <button type="button" data-action="toggle-transition-text" class="button-ghost-small outcome-transition-btn">${hasTransitionText ? "Modifica testo transizione" : "+ Testo di transizione"}</button>
        <textarea data-role="transition-text" class="outcome-transition-textarea${hasTransitionText ? "" : " hidden"}" placeholder="Testo mostrato al giocatore prima di passare all'evento collegato..."></textarea>
      </div>
      <div class="subsection-header">
        <button type="button" data-action="add-outcome-choice">Aggiungi scelta di esito</button>
      </div>
      <div data-role="outcome-choice-list"></div>
    `;

    const targetSelect = wrapper.querySelector('[data-role="outcome-target"]');
    if (definition.key === "defeat") {
      hydrateDefeatTargetSelect(targetSelect, branch.targetSceneId || "");
    } else if (definition.key === "retreat") {
      hydrateRetreatTargetSelect(targetSelect, branch.targetSceneId || "");
    } else if (definition.key === "failure") {
      hydrateFailureTargetSelect(targetSelect, branch.targetSceneId || "");
    } else {
      hydrateSceneTargetSelect(targetSelect, branch.targetSceneId || "");
    }
    const isSentinelTarget = branch.targetSceneId === DEATH_SENTINEL || branch.targetSceneId === NO_ESCAPE_SENTINEL || branch.targetSceneId === RETRY_SENTINEL;
    if (!isSentinelTarget) attachNavigateBtn(wrapper, '[data-role="outcome-target"]');
    targetSelect.addEventListener("change", (event) => {
      setOutcomeTarget(scene, definition.key, event.target.value);
      renderOutcomeEditor(scene);
      refreshFlowCard(scene.id);
      scheduleFlowLinksRender();
      scheduleJsonRender();
      updateSceneStatusDot();
    });

    const transitionTextarea = wrapper.querySelector('[data-role="transition-text"]');
    transitionTextarea.value = branch.transitionText || "";
    transitionTextarea.addEventListener("input", () => {
      branch.transitionText = transitionTextarea.value;
      markSceneDirty();
      scheduleJsonRender();
    });

    wrapper.querySelector('[data-action="toggle-transition-text"]').addEventListener("click", (event) => {
      const isHidden = transitionTextarea.classList.toggle("hidden");
      event.currentTarget.textContent = isHidden ? "+ Testo di transizione" : "Modifica testo transizione";
      if (!isHidden) transitionTextarea.focus();
    });

    wrapper.querySelector('[data-action="add-outcome-choice"]').addEventListener("click", () => {
      branch.choices.push(createEmptyChoice(branch.choices.length + 1));
      renderOutcomeEditor(scene);
      refreshFlowCard(scene.id);
      scheduleFlowLinksRender();
      scheduleJsonRender();
    });

    renderChoiceCards(wrapper.querySelector('[data-role="outcome-choice-list"]'), branch.choices, {
      onChange: () => {
        markSceneDirty();
        refreshFlowCard(scene.id);
        scheduleFlowLinksRender();
        scheduleJsonRender();
      },
      onRemove: (index) => {
        branch.choices.splice(index, 1);
        markSceneDirty();
        renderOutcomeEditor(scene);
        refreshFlowCard(scene.id);
        scheduleFlowLinksRender();
        scheduleJsonRender();
      }
    });

    if (branch.choices.length > 0) {
      const precedence = document.createElement("p");
      precedence.className = "hint outcome-precedence";
      precedence.textContent = "Se qui sotto aggiungi scelte, questo esito usera prima il bivio di esito. La destinazione diretta resta solo come fallback di authoring.";
      wrapper.insertBefore(precedence, wrapper.querySelector('[data-role="outcome-choice-list"]'));
    }

    els.sceneOutcomesList.appendChild(wrapper);
  });
}

function updateChoiceCheck(choice, node, onChange) {
  const attribute  = normalizeString(node.querySelector('[data-field="checkAttribute"]').value);
  const success    = normalizeString(node.querySelector('[data-field="checkSuccess"]').value);
  const failure    = normalizeString(node.querySelector('[data-field="checkFailure"]').value)
    || state.selectedDescriptionId || "";
  const difficulty = Number(node.querySelector('[data-field="checkDifficulty"]').value || 0);

  if (attribute && success) {
    const burnOnFailure     = Boolean(node.querySelector('[data-field="burnOnFailure"]')?.checked);
    const successText       = node.querySelector('[data-field="successText"]')?.value?.trim() || undefined;
    const successEncId      = normalizeString(node.querySelector('[data-field="successEncounterId"]')?.value) || undefined;
    const successCond       = normalizeString(node.querySelector('[data-field="successCondition"]')?.value) || undefined;
    const successUnlockId   = node.querySelector('[data-field="successUnlockChoiceId"]')?.value?.trim() || undefined;
    const failureText       = node.querySelector('[data-field="failureText"]')?.value?.trim() || undefined;
    const failureEncId      = normalizeString(node.querySelector('[data-field="failureEncounterId"]')?.value) || undefined;
    const failureCond       = normalizeString(node.querySelector('[data-field="failureCondition"]')?.value) || undefined;
    const failureUnlockId   = node.querySelector('[data-field="failureUnlockChoiceId"]')?.value?.trim() || undefined;

    choice.skillCheck = {
      attribute,
      difficulty,
      successSceneId: success,
      failureSceneId: failure,
      ...(choice._successLootDraft?.length && { successLoot: choice._successLootDraft }),
      ...(successText     && { successText }),
      ...(successEncId    && { successEncounterId: successEncId }),
      ...(successCond     && { successCondition: successCond }),
      ...(successUnlockId && { successUnlockChoiceId: successUnlockId }),
      ...(choice._failureLootDraft?.length && { failureLoot: choice._failureLootDraft }),
      ...(failureText     && { failureText }),
      ...(failureEncId    && { failureEncounterId: failureEncId }),
      ...(failureCond     && { failureCondition: failureCond }),
      ...(failureUnlockId && { failureUnlockChoiceId: failureUnlockId }),
      ...(burnOnFailure   && { burnOnFailure: true }),
    };
    choice.targetSceneId = null;
  } else {
    delete choice.skillCheck;
  }

  onChange();
}

function renderCombatGroups(_scene) {} // stub — rimosso: i gruppi combattimento si editano nel pannello scelta

// Stub — i mostri sono inline nei CombatGroup e non hanno pi\u00F9 un pannello separato
function renderMonsterList() {}
function renderMonsterEditor() {}

function renderMonsterLootEditor(monster) {
  renderLootList(els.monsterLootList, monster.loot, {
    rerender: () => renderMonsterLootEditor(monster),
    onChange: () => {
      markSceneDirty();
      scheduleMonsterListRender();
      scheduleJsonRender();
    }
  });
}

function renderLootList(container, items, options = {}) {
  const normalizedOptions = typeof options === "function" ? { rerender: options } : (options || {});
  const rerender = normalizedOptions.rerender || (() => {});
  const onChange = normalizedOptions.onChange || (() => {
    markSceneDirty();
    scheduleJsonRender();
  });
  container.innerHTML = "";
  items.forEach((loot, index) => {
    const node = document.getElementById("loot-template").content.firstElementChild.cloneNode(true);
    const title      = node.querySelector('[data-role="loot-title"]');
    const meta       = node.querySelector('[data-role="loot-meta"]');
    const tag        = node.querySelector('[data-role="loot-tag"]');
    const action     = node.querySelector('[data-role="loot-action"]');
    const preview    = node.querySelector('[data-role="loot-preview"]');
    const errorEl    = node.querySelector('[data-role="loot-error"]');
    const select     = node.querySelector('[data-field="itemName"]');
    const customInput      = node.querySelector('[data-field="customName"]');
    const categorySelect   = node.querySelector('[data-field="category"]');
    const raritySelect     = node.querySelector('[data-field="rarity"]');
    const lockIdInput      = node.querySelector('[data-field="lockId"]');
    const lockHint         = node.querySelector('[data-role="lock-hint"]');
    const lockRow          = node.querySelector('[data-role="lock-row"]');
    const questItemIdInput = node.querySelector('[data-field="questItemId"]');
    const questItemIdRow   = node.querySelector('[data-role="quest-item-id-row"]');
    const armorTypeRow     = node.querySelector('[data-role="armor-type-row"]');
    const armorTypeSelect  = node.querySelector('[data-field="armorType"]');
    const questInline      = node.querySelector('[data-field="questItem"]');
    const customRow        = node.querySelector('[data-role="custom-row"]');
    const categoryRow      = categorySelect?.closest("label");
    const rarityRow        = raritySelect?.closest("label");
    const accessoryConfig  = node.querySelector('[data-role="accessory-config"]');
    const chipsContainer   = node.querySelector('[data-role="effect-chips"]');
    const effectHelp       = node.querySelector('[data-role="effect-help"]');
    const addEffectBtn     = node.querySelector('[data-action="add-effect"]');
    const quantityField    = node.querySelector('[data-field="quantity"]');
    const lootAdvanced     = node.querySelector(".loot-advanced");

    const selectedPreset = lootPresetById(runtimeLootItemId(loot))
      ? runtimeLootItemId(loot)
      : findLootPresetId(loot.itemId || loot.itemName);
    let accessoryState = deriveAccessoryStateFromLoot(loot);
    hydrateLootSelect(select, selectedPreset, { includeCustom: true });
    hydrateCategorySelect(categorySelect, loot.category || "");
    hydrateRaritySelect(raritySelect, loot.rarity || "common");
    if (armorTypeSelect) armorTypeSelect.value = loot.armorType || "light";
    customInput.value    = selectedPreset === "custom" ? loot.itemName || "" : "";
    customInput.disabled = selectedPreset !== "custom";
    lockIdInput.value    = loot.lockId || "";
    if (questItemIdInput) questItemIdInput.value = loot.questItemId || "";
    questInline.checked  = Boolean(loot.questItem);
    quantityField.value  = loot.quantity ?? 1;

    // ── helpers ──────────────────────────────────────────────────────────────

    function renderEffectChips() {
      chipsContainer.innerHTML = "";
      const ids = loot.effectIds || [];
      if (ids.length === 0) {
        const empty = document.createElement("span");
        empty.className = "effect-chip effect-chip--empty";
        empty.textContent = "Nessun effetto";
        chipsContainer.appendChild(empty);
      } else {
        ids.forEach((effectId, i) => {
          const preset = effectPresetById(effectId);
          const chip = document.createElement("span");
          chip.className = "effect-chip";
          chip.title = preset ? `${preset.description} — trigger: ${effectTriggerLabel(preset.trigger)} — famiglia: ${effectFamilyLabel(preset.family)}` : effectId;
          chip.innerHTML = `<span class="effect-chip-label">${preset?.label || effectId}</span><button type="button" class="effect-chip-remove" data-idx="${i}" title="Rimuovi effetto">✕</button>`;
          chip.querySelector(".effect-chip-remove").addEventListener("click", (e) => {
            e.stopPropagation();
            loot.effectIds = ids.filter((_, j) => j !== i);
            renderEffectChips();
            updateEffectHelp();
            updateLootError();
            onChange();
          });
          chipsContainer.appendChild(chip);
        });
      }
      updateAddEffectBtn();
    }

    function updateAddEffectBtn() {
      const allowed = effectPresetsForCategory(loot.category || "").filter((e) => e.value && !(loot.effectIds || []).includes(e.value));
      addEffectBtn.disabled = allowed.length === 0;
      addEffectBtn.title = allowed.length === 0 ? "Tutti gli effetti compatibili sono già stati aggiunti" : "Aggiungi un effetto compatibile con questa categoria";
    }

    function updateEffectHelp() {
      const ids = loot.effectIds || [];
      if (ids.length === 0) {
        effectHelp.textContent = loot.category
          ? `Nessun effetto. Clicca "+ Effetto" per aggiungerne uno compatibile con ${ITEM_CATEGORIES.find((c) => c.value === loot.category)?.label || loot.category}.`
          : "Scegli prima un tipo di loot per vedere gli effetti compatibili.";
      } else {
        const labels = ids.map((id) => effectPresetById(id)?.label || id).join(", ");
        effectHelp.textContent = `Effetti attivi: ${labels}. Passa il mouse sui tag per i dettagli.`;
      }
    }

    function updateLootError() {
      const errors = (loot.effectIds || []).filter((id) => !effectAllowedForCategory(id, loot.category || ""));
      if (errors.length > 0) {
        const labels = errors.map((id) => effectPresetById(id)?.label || id).join(", ");
        errorEl.textContent = `Effetto non compatibile con la categoria "${loot.category}": ${labels}. Rimuovilo o cambia categoria.`;
        errorEl.style.display = "";
      } else {
        errorEl.textContent = "";
        errorEl.style.display = "none";
      }
    }

    function renderAccessoryConfig() {
      if (!accessoryConfig) return;
      const isAccessory = select.value.startsWith("accessory_") || isAccessoryCategory(loot.category);
      accessoryConfig.innerHTML = "";
      accessoryConfig.style.display = isAccessory ? "" : "none";
      if (!isAccessory) return;

      if (!accessoryState) {
        const slotOption = accessorySlotOptionByValue(loot.category || "helm") || ACCESSORY_SLOT_OPTIONS[0];
        accessoryState = deriveAccessoryStateFromLoot(loot) || { slot: slotOption.value, effectSetId: slotOption.defaultSetId || "guardia", tier: 1 };
      }

      const grid = document.createElement("div");
      grid.className = "choice-settings-grid";

      const slotLabel = document.createElement("label");
      slotLabel.textContent = "Slot accessorio";
      const slotSelect = document.createElement("select");
      ACCESSORY_SLOT_OPTIONS.forEach((optionData) => {
        const option = document.createElement("option");
        option.value = optionData.value;
        option.textContent = optionData.label;
        if (optionData.value === accessoryState.slot) option.selected = true;
        slotSelect.appendChild(option);
      });
      slotLabel.appendChild(slotSelect);

      const setLabel = document.createElement("label");
      setLabel.textContent = "Set effetto";
      const setSelect = document.createElement("select");
      ACCESSORY_SET_OPTIONS.forEach((optionData) => {
        const option = document.createElement("option");
        option.value = optionData.value;
        option.textContent = optionData.label;
        if (optionData.value === accessoryState.effectSetId) option.selected = true;
        setSelect.appendChild(option);
      });
      setLabel.appendChild(setSelect);

      const tierLabel = document.createElement("label");
      tierLabel.textContent = "Tier";
      const tierSelect = document.createElement("select");
      [1, 2, 3].forEach((tierValue) => {
        const option = document.createElement("option");
        option.value = String(tierValue);
        option.textContent = `${"\u2605".repeat(tierValue)} (${tierValue})`;
        if (tierValue === accessoryState.tier) option.selected = true;
        tierSelect.appendChild(option);
      });
      tierLabel.appendChild(tierSelect);

      const note = document.createElement("p");
      note.className = "hint";
      note.textContent = "Gli accessori ora si scelgono per set, slot e stelle. Il runtime riceve comunque l'itemId concreto corretto.";

      function syncAccessory() {
        accessoryState = {
          slot: slotSelect.value,
          effectSetId: setSelect.value,
          tier: Math.min(3, Math.max(1, parseInt(tierSelect.value, 10) || 1))
        };
        applyAccessoryPresetToLoot(loot, accessoryState.slot, accessoryState.effectSetId, accessoryState.tier);
        select.value = accessoryPickerPresetId(accessoryState.slot);
        hydrateCategorySelect(categorySelect, loot.category || "");
        hydrateRaritySelect(raritySelect, loot.rarity || "common");
        renderEffectChips();
        updateEffectHelp();
        updateLootError();
        updatePreview();
        updateLootHeader();
        onChange();
      }

      slotSelect.addEventListener("change", syncAccessory);
      setSelect.addEventListener("change", syncAccessory);
      tierSelect.addEventListener("change", syncAccessory);

      grid.append(slotLabel, setLabel, tierLabel);
      accessoryConfig.append(grid, note);
    }

    function updatePreview() {
      const preset = isAccessoryCategory(loot.category) && accessoryState
        ? accessoryPreset(accessoryState.slot, accessoryState.effectSetId, accessoryState.tier)
        : lootPresetById(select.value === "custom" ? "custom" : select.value);
      if (preset && preset.id !== "custom") {
        const catLabel = ITEM_CATEGORIES.find((c) => c.value === preset.category)?.label || preset.category;
        const rarLabel = ITEM_RARITIES.find((r) => r.value === preset.rarity)?.label || preset.rarity;
        preview.textContent = isAccessoryCategory(preset.category)
          ? `${catLabel} | ${rarLabel} | ${accessorySetOptionByValue(preset.effectSetId)?.label || preset.effectSetId || "set"} ${"\u2605".repeat(preset.tier || 1)}`
          : `${catLabel} | ${rarLabel}`;
        preview.style.display = "";
      } else {
        preview.textContent = "";
        preview.style.display = "none";
      }
    }

    function updateLockHint() {
      const id = loot.lockId?.trim();
      if (!id) { lockHint.textContent = ""; return; }
      // lockId è ora usato nei Requirement event; cerca nelle choices
      const matches = (state.adventure.descriptions || []).flatMap((d) =>
        (d.choices || []).filter((c) => c.event?.type === "requirement" && c.event?.lockId === id).map(() => d.title || d.id)
      );
      lockHint.textContent = matches.length
        ? `Collegato a: ${[...new Set(matches)].join(", ")}`
        : `Nessuna scelta usa ancora lockId "${id}".`;
    }

    function syncVisibility() {
      const isCustomLoot = select.value === "custom";
      const isAccessoryLoot = isAccessoryCategory(loot.category);
      const needsArmorType = loot.category === "armor";
      const needsLockId = loot.category === "key";
      const needsQuestItemId = Boolean(questInline?.checked);
      const showAdvanced = isCustomLoot || needsArmorType || needsLockId || needsQuestItemId;
      if (categoryRow) categoryRow.style.display = isCustomLoot ? "" : "none";
      if (rarityRow) rarityRow.style.display = isCustomLoot ? "" : "none";
      // lock row: solo se categoria key
      lockRow.style.display = needsLockId ? "" : "none";
      if (questItemIdRow) questItemIdRow.style.display = needsQuestItemId ? "" : "none";
      // armor type row: solo se categoria armor
      if (armorTypeRow) armorTypeRow.style.display = needsArmorType ? "" : "none";
      // custom row: solo se preset custom
      customRow.style.display = isCustomLoot ? "" : "none";
      if (categorySelect) categorySelect.disabled = !isCustomLoot || isAccessoryLoot;
      if (raritySelect) raritySelect.disabled = !isCustomLoot || isAccessoryLoot;
      if (lootAdvanced) {
        lootAdvanced.style.display = showAdvanced ? "" : "none";
        if (!showAdvanced) lootAdvanced.open = false;
      }
      renderAccessoryConfig();
    }

    function updateLootHeader() {
      title.textContent = loot.itemName || "Loot personalizzato";
      meta.textContent  = `Quantita ${loot.quantity ?? 1} | ${runtimeLootItemId(loot)}`;
      const rarityLabel = loot.rarity ? loot.rarity.charAt(0).toUpperCase() + loot.rarity.slice(1) : "Comune";
      const accessoryBadge = isAccessoryCategory(loot.category) && accessoryState
        ? `${accessorySetOptionByValue(accessoryState.effectSetId)?.label || accessoryState.effectSetId} ${"\u2605".repeat(accessoryState.tier || 1)}`
        : rarityLabel;
      tag.textContent   = loot.questItem ? `Quest | ${accessoryBadge}` : accessoryBadge;
      action.textContent = node.open ? "Approva" : "Modifica";
    }

    // ── initial render ────────────────────────────────────────────────────────
    renderEffectChips();
    updateEffectHelp();
    updateLootError();
    updatePreview();
    updateLockHint();
    syncVisibility();
    node.open = loot.expanded !== false;
    updateLootHeader();
    // Auto-espandi opzioni avanzate per categorie che le richiedono
    if (lootAdvanced && (loot.category === "key" || loot.category === "armor" || select.value === "custom" || questInline.checked)) {
      lootAdvanced.open = true;
    }

    // ── events ────────────────────────────────────────────────────────────────
    node.addEventListener("toggle", () => {
      loot.expanded = node.open;
      updateLootHeader();
    });

    node.querySelector('[data-action="approve-loot"]').addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      loot.expanded = false;
      rerender();
    });

    select.addEventListener("change", (event) => {
      const nextPreset = event.target.value;
      const preset = lootPresetById(nextPreset);
      if (preset?.accessoryPicker) {
        accessoryState = {
          slot: preset.category || "helm",
          effectSetId: loot.effectSetId || preset.effectSetId || "guardia",
          tier: Number(loot.tier) || preset.tier || 1
        };
        applyAccessoryPresetToLoot(loot, accessoryState.slot, accessoryState.effectSetId, accessoryState.tier);
      } else {
        loot.itemId    = preset?.id === "custom" ? "" : preset?.id || "";
        loot.itemName  = lootLabelFromPreset(nextPreset);
        loot.category  = preset?.category || loot.category || "";
        loot.rarity    = preset?.rarity   || loot.rarity   || "common";
        loot.effectIds = [...(preset?.effectIds || [])];
        loot.effectSetId = preset?.effectSetId || "";
        loot.tier = preset?.tier || undefined;
        accessoryState = deriveAccessoryStateFromLoot(loot);
      }
      if (preset?.lockId) {
        loot.lockId = preset.lockId;
      } else if (loot.category === "key" && !loot.lockId) {
        const base = slugify(loot.itemName || "key");
        const usedIds = new Set(
          (state.adventure?.starterKitItems || [])
            .concat((state.adventure?.descriptions || []).flatMap((d) =>
              (d.choices || []).flatMap((c) => c.event?.loot || [])
            ))
            .map((l) => normalizeString(l.lockId)).filter(Boolean)
        );
        let candidate = base; let n = 1;
        while (usedIds.has(candidate)) { candidate = `${base}_${n}`; n++; }
        loot.lockId = candidate;
        lockIdInput.value = loot.lockId;
      }
      hydrateCategorySelect(categorySelect, loot.category || "");
      hydrateRaritySelect(raritySelect, loot.rarity || "common");
      customInput.disabled = nextPreset !== "custom";
      if (nextPreset !== "custom") customInput.value = "";
      renderEffectChips();
      updateEffectHelp();
      updateLootError();
      updatePreview();
      updateLockHint();
      syncVisibility();
      updateLootHeader();
      onChange();
    });

    customInput.addEventListener("input", (event) => {
      if (select.value !== "custom") return;
      loot.itemName = event.target.value;
      loot.itemId   = slugify(event.target.value || "custom_loot");
      updateLootHeader();
      onChange();
    });

    categorySelect.addEventListener("change", (event) => {
      loot.category  = normalizeString(event.target.value) || "";
      if (isAccessoryCategory(loot.category)) {
        const slotOption = accessorySlotOptionByValue(loot.category);
        accessoryState = {
          slot: loot.category,
          effectSetId: loot.effectSetId || slotOption?.defaultSetId || "guardia",
          tier: Number(loot.tier) || 1
        };
        applyAccessoryPresetToLoot(loot, accessoryState.slot, accessoryState.effectSetId, accessoryState.tier);
        select.value = accessoryPickerPresetId(accessoryState.slot);
      } else {
        loot.effectSetId = "";
        loot.tier = undefined;
      }
      loot.effectIds = (loot.effectIds || []).filter((id) => effectAllowedForCategory(id, loot.category));
      // auto-generate lockId when switching to key and none is set
      if (loot.category === "key" && !loot.lockId) {
        const base = slugify(loot.itemName || loot.itemId || "key");
        const usedIds = new Set(
          (state.adventure?.starterKitItems || [])
            .concat((state.adventure?.descriptions || []).flatMap((d) =>
              (d.choices || []).flatMap((c) => c.event?.loot || [])
            ))
            .map((l) => normalizeString(l.lockId)).filter(Boolean)
        );
        let candidate = base; let n = 1;
        while (usedIds.has(candidate)) { candidate = `${base}_${n}`; n++; }
        loot.lockId = candidate;
        lockIdInput.value = loot.lockId;
      }
      renderEffectChips();
      updateEffectHelp();
      updateLootError();
      syncVisibility();
      updateLockHint();
      // Auto-espandi opzioni avanzate quando si seleziona key o armor
      if (lootAdvanced && (loot.category === "key" || loot.category === "armor" || select.value === "custom" || questInline.checked)) {
        lootAdvanced.open = true;
      }
      onChange();
    });

    raritySelect.addEventListener("change", (event) => {
      loot.rarity = normalizeString(event.target.value) || "common";
      updateLootHeader();
      onChange();
    });

    if (armorTypeSelect) {
      armorTypeSelect.addEventListener("change", (event) => {
        loot.armorType = event.target.value || "light";
        onChange();
      });
    }

    lockIdInput.addEventListener("input", (event) => {
      loot.lockId = normalizeString(event.target.value) || "";
      updateLockHint();
      onChange();
    });

    questInline.addEventListener("change", (event) => {
      loot.questItem = Boolean(event.target.checked);
      if (!loot.questItem) {
        loot.questItemId = "";
        if (questItemIdInput) questItemIdInput.value = "";
      }
      syncVisibility();
      updateLootHeader();
      onChange();
    });

    if (questItemIdInput) {
      questItemIdInput.addEventListener("input", (event) => {
        loot.questItemId = normalizeString(event.target.value) || "";
        onChange();
      });
    }

    quantityField.addEventListener("input", (event) => {
      loot.quantity = Number(event.target.value || 1);
      updateLootHeader();
      onChange();
    });

    // "+ Effetto" button — inline select that appears, picks one, then disappears
    addEffectBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      if (node.querySelector(".effect-add-select")) return; // already open
      const allowed = effectPresetsForCategory(loot.category || "").filter((e) => e.value && !(loot.effectIds || []).includes(e.value));
      if (allowed.length === 0) return;
      const sel = document.createElement("select");
      sel.className = "effect-add-select";
      const placeholder = document.createElement("option");
      placeholder.value = "";
      placeholder.textContent = "Scegli effetto";
      sel.appendChild(placeholder);
      allowed.forEach((e) => {
        const opt = document.createElement("option");
        opt.value = e.value;
        opt.textContent = e.label;
        opt.title = e.description;
        sel.appendChild(opt);
      });
      sel.addEventListener("change", () => {
        if (!sel.value) return;
        loot.effectIds = [...(loot.effectIds || []), sel.value];
        sel.remove();
        renderEffectChips();
        updateEffectHelp();
        updateLootError();
        onChange();
      });
      sel.addEventListener("blur", () => sel.remove());
      addEffectBtn.insertAdjacentElement("afterend", sel);
      sel.focus();
    });

    node.querySelector('[data-action="remove-loot"]').addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      items.splice(index, 1);
      onChange();
      rerender();
    });

    container.appendChild(node);
  });
}

function buildCompiledRuntimePayload(cleaned, validation) {
  const compiler = window.TxtMasterRuntimeCompiler;
  if (!compiler || typeof compiler.compileAdventureGraphToRuntime !== "function") {
    validation.errors.push("Compilatore runtime non disponibile nello Studio.");
    return null;
  }
  try {
    const result = compiler.compileAdventureGraphToRuntime(cleaned);
    if (Array.isArray(result?.warnings) && result.warnings.length) {
      validation.warnings.push(...result.warnings);
    }
    if (Array.isArray(result?.errors) && result.errors.length) {
      validation.errors.push(...result.errors);
    }
    return result?.adventure || null;
  } catch (error) {
    validation.errors.push(`Compilatore runtime: ${error?.message || error}`);
    return null;
  }
}

function renderJson({ syncScene = true } = {}) {
  if (syncScene) syncCurrentSceneEditorStateFromDom();
  const cleaned = cleanAdventure(state.adventure);
  const validation = validateAdventure(state.adventure, cleaned, { strictAlpha: state.ui.strictAlpha });
  const compiled = buildCompiledRuntimePayload(cleaned, validation);
  els.jsonOutput.value = JSON.stringify(compiled || cleaned, null, 2);
  renderValidation(validation);
  persistLocalProject({ syncScene: false });
}

function scheduleJsonRender(delay = 140, options = {}) {
  if (state.ui.jsonRenderTimer) {
    window.clearTimeout(state.ui.jsonRenderTimer);
  }
  state.ui.jsonRenderOptions = {
    syncScene: true,
    ...options
  };
  state.ui.jsonRenderTimer = window.setTimeout(() => {
    state.ui.jsonRenderTimer = null;
    renderJson(state.ui.jsonRenderOptions);
  }, delay);
}

function scheduleMonsterListRender() {} // stub — no more separate monster panel

async function exportJson() {
  const cleaned = cleanAdventure(state.adventure);
  const validation = validateAdventure(state.adventure, cleaned, { strictAlpha: state.ui.strictAlpha });
  const compiled = buildCompiledRuntimePayload(cleaned, validation);
  renderValidation(validation);
  if (validation.errors.length > 0 || !compiled) {
    window.alert(`Esportazione bloccata: ${validation.errors.length} errori da correggere.`);
    return;
  }
  const payload = JSON.stringify(compiled, null, 2);
  const suggestedName = `${slugify(state.adventure.title || "adventure")}.json`;

  if (typeof window.showSaveFilePicker === "function") {
    try {
      const handle = await window.showSaveFilePicker({
        suggestedName,
        types: [
          {
            description: "Adventure Studio JSON",
            accept: {
              "application/json": [".json"]
            }
          }
        ]
      });
      const writable = await handle.createWritable();
      await writable.write(payload);
      await writable.close();
      window.alert("JSON esportato con successo.");
      return;
    } catch (error) {
      if (error?.name === "AbortError") return;
      window.alert("Esportazione con finestra di salvataggio non riuscita. Provo con il download classico.");
    }
  }

  const blob = new Blob([payload], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = suggestedName;
  anchor.click();
  URL.revokeObjectURL(url);
}

function cleanAdventure(adventure) {
  const serializeLoot = (loot) => pruneEmpty({
    itemId: runtimeLootItemId(loot),
    itemName: loot.itemName,
    quantity: loot.quantity,
    lockId: normalizeString(loot.lockId),
    questItem: loot.questItem ? true : undefined,
    questItemId: normalizeString(loot.questItemId),
    category: normalizeString(loot.category),
    rarity: normalizeString(loot.rarity),
    armorType: loot.category === "armor" ? (loot.armorType || "light") : undefined,
    effectIds: (loot.effectIds || []).filter(Boolean),
    effectSetId: normalizeString(loot.effectSetId),
    tier: Number(loot.tier) || undefined
  });

  const serializeBranch = (branch) => {
    if (!branch) return null;
    const out = {};
    if (branch.text) out.text = branch.text;
    if (branch.condition) out.condition = branch.condition;
    if (branch.unlockChoiceId) out.unlockChoiceId = branch.unlockChoiceId;
    if (branch.burnAfterUse) out.burnAfterUse = true;
    const loot = (branch.loot || []).filter((l) => l.itemName).map(serializeLoot);
    if (loot.length) out.loot = loot;
    if (branch.event) out.event = serializeEvent(branch.event);
    else if (branch.targetId) out.targetId = branch.targetId;
    return Object.keys(out).length ? out : null;
  };

  const serializeCombatGroup = (group) => pruneEmpty({
    monsterId: group.monsterId || undefined,
    count: (group.count > 1) ? group.count : undefined,
    name: group.name || undefined,
    hitPoints: group.hitPoints || 0,
    attackBonus: group.attackBonus || 0,
    defense: group.defense || 0,
    damageMin: group.damageMin || 0,
    damageMax: group.damageMax || 0,
    goldReward: group.goldReward || undefined,
    abilityIds: (group.abilityIds || []).filter(Boolean),
    hasBerserkerPhase: Boolean(group.hasBerserkerPhase) || undefined,
    loot: (group.loot || []).filter((l) => l.itemName).map(serializeLoot)
  });

  function serializeEvent(ev) {
    if (!ev) return null;
    switch (ev.type) {
      case "combat":
        return pruneEmpty({
          type: "combat",
          text: ev.text || undefined,
          image: ev.image || undefined,
          combatGroups: (ev.combatGroups || []).map(serializeCombatGroup),
          victoryBranch: serializeBranch(ev.victoryBranch) || {},
          defeatBranch: serializeBranch(ev.defeatBranch) || { targetId: "__death__" },
          retreatBranch: ev.retreatBranch ? (serializeBranch(ev.retreatBranch) || null) : undefined
        });
      case "skillcheck":
        return pruneEmpty({
          type: "skillcheck",
          text: ev.text || undefined,
          attribute: ev.attribute || "",
          difficulty: ev.difficulty != null ? ev.difficulty : 12,
          successBranch: serializeBranch(ev.successBranch) || {},
          failureBranch: serializeBranch(ev.failureBranch) || { targetId: "__stay__" },
          burnOnFailure: ev.burnOnFailure ? true : undefined
        });
      case "requirement":
        return pruneEmpty({
          type: "requirement",
          text: ev.text || undefined,
          requirementMode: ev.requirementMode || (ev.lockId ? "key" : ev.questItemId ? "questItem" : "presetItem"),
          itemId: ev.itemId || undefined,
          lockId: ev.lockId || undefined,
          questItemId: ev.questItemId || undefined,
          metBranch: serializeBranch(ev.metBranch) || {},
          unmetBranch: serializeBranch(ev.unmetBranch) || {}
        });
      case "loot":
        return pruneEmpty({
          type: "loot",
          text: ev.text || undefined,
          image: ev.image || undefined,
          loot: (ev.loot || []).filter((l) => l.itemName).map(serializeLoot),
          branch: serializeBranch(ev.branch) || {}
        });
      case "condition":
        return pruneEmpty({
          type: "condition",
          text: ev.text || undefined,
          conditionId: ev.conditionId || "",
          branch: serializeBranch(ev.branch) || {}
        });
      case "shop":
        return pruneEmpty({
          type: "shop",
          text: ev.text || undefined,
          image: ev.image || undefined,
          items: (ev.items || []).map((item) => pruneEmpty({
            itemId: item.itemId || "",
            itemName: item.itemName || "",
            price: item.price || 0,
            category: item.category || "",
            rarity: item.rarity || "common",
            effectIds: (item.effectIds || []).filter(Boolean)
          })),
          branch: serializeBranch(ev.branch) || {}
        });
      case "transition":
        return pruneEmpty({
          type: "transition",
          text: ev.text || "",
          image: ev.image || undefined,
          branch: serializeBranch(ev.branch) || {}
        });
      case "dialogue":
        return pruneEmpty({
          type: "dialogue",
          text: ev.text || undefined,
          npcName: ev.npcName || "",
          npcImage: ev.npcImage || undefined,
          root: ev.root || { npcText: "", responses: [] }
        });
      default: return { type: ev.type };
    }
  }

  const serializeChoice = (choice) => {
    const out = { id: choice.id, text: choice.text || "" };
    if (choice.hidden) out.hidden = true;
    if (choice.burnAfterUse) out.burnAfterUse = true;
    if (choice.event) out.event = serializeEvent(choice.event);
    else if (choice.targetId) out.targetId = choice.targetId;
    return out;
  };

  const serializeEventNode = (node) => {
    const out = serializeChoice(node);
    if (node.position) {
      out.position = {
        x: clamp(Number(node.position.x) || 0, -FLOW_COORD_LIMIT, FLOW_COORD_LIMIT),
        y: clamp(Number(node.position.y) || 0, -FLOW_COORD_LIMIT, FLOW_COORD_LIMIT)
      };
    }
    return out;
  };

  const serializeChapterGroup = (group) => pruneEmpty({
    id: group.id,
    type: "chapterGroup",
    title: group.title || "Nuovo capitolo",
    collapsed: Boolean(group.collapsed) || undefined,
    nodeIds: Array.from(new Set((group.nodeIds || []).filter(Boolean))),
    position: group.position ? {
      x: clamp(Number(group.position.x) || 0, -FLOW_COORD_LIMIT, FLOW_COORD_LIMIT),
      y: clamp(Number(group.position.y) || 0, -FLOW_COORD_LIMIT, FLOW_COORD_LIMIT)
    } : undefined,
    size: group.size ? {
      w: Math.max(220, Number(group.size.w) || 280),
      h: Math.max(120, Number(group.size.h) || 150)
    } : undefined,
    color: group.color || "amber",
    portLabels: group.portLabels && Object.keys(group.portLabels).length ? { ...group.portLabels } : undefined,
    nodeRoles: group.nodeRoles && Object.keys(group.nodeRoles).length
      ? Object.fromEntries(
          Object.entries(group.nodeRoles)
            .map(([nodeId, role]) => [nodeId, normalizeChapterRole(role)])
            .filter(([, role]) => role !== "none")
        )
      : undefined
  });

  return {
    id: slugify(adventure.title || "new-adventure"),
    version: 2,
    title: adventure.title || "",
    description: adventure.description || "",
    tags: normalizeAdventureTags(adventure.tags),
    adaptivePowerMultiplier: normalizeAdaptiveMultiplier(adventure.adaptivePowerMultiplier),
    startingDescriptionId: adventure.startingDescriptionId || "",
    allowCarryOverLoadout: adventure.allowCarryOverLoadout !== false,
    allowFreshStart: adventure.allowFreshStart !== false,
    forceLoadout: Boolean(adventure.forceLoadout) || undefined,
    restoreLoadoutOnEnd: Boolean(adventure.restoreLoadoutOnEnd) || undefined,
    starterKitItems: (adventure.starterKitItems || []).filter((l) => l.itemName).map(serializeLoot),
    eventNodes: (adventure.eventNodes || []).map(serializeEventNode),
    chapterGroups: (adventure.chapterGroups || []).map(serializeChapterGroup),
    descriptions: (adventure.descriptions || []).map((desc) => {
      const out = {
        id: desc.id,
        title: desc.title || "",
        text: desc.text || ""
      };
      if (desc.image) out.image = desc.image;
      if (desc.isEnding) out.isEnding = true;
      out.choices = (desc.choices || []).map(serializeChoice);
      if (desc.position) out._editor = { position: desc.position };
      return out;
    })
  };
}

// normalizeScene rimosso: le Description non hanno la stessa struttura delle vecchie Scene

function normalizeAdventureImport(adventure) {
  const isV2 = adventure.version === 2 || Array.isArray(adventure.descriptions);

  if (isV2) {
    const descriptions = (adventure.descriptions || []).map((desc, i) => normalizeImportedDescription(desc, i));
    const eventNodes = (adventure.eventNodes || []).map((node, index) => normalizeImportedEventNode(node, index));
    const startingDescriptionId = normalizeString(adventure.startingDescriptionId) || descriptions[0]?.id || "";
    return {
      id: normalizeString(adventure.id) || slugify(adventure.title || "new-adventure"),
      version: 2,
      title: adventure.title || "Nuova Avventura",
      description: adventure.description || "",
      tags: normalizeAdventureTags(adventure.tags),
      adaptivePowerMultiplier: normalizeAdaptiveMultiplier(adventure.adaptivePowerMultiplier),
      startingDescriptionId,
      allowCarryOverLoadout: adventure.allowCarryOverLoadout !== false,
      allowFreshStart: adventure.allowFreshStart !== false,
      forceLoadout: Boolean(adventure.forceLoadout),
      restoreLoadoutOnEnd: Boolean(adventure.restoreLoadoutOnEnd),
      starterKitItems: (adventure.starterKitItems || []).map((loot) => normalizeLoot(loot)),
      descriptions,
      eventNodes,
      chapterGroups: normalizeImportedChapterGroups(adventure.chapterGroups, descriptions, eventNodes)
    };
  }

  // v1 fallback: importa scenes come Description senza meccaniche
  const descriptions = (adventure.scenes || []).map((scene, i) => {
    const editor = scene._editor || {};
    const position = editor.position || { x: 40 + (i % 4) * 340, y: 40 + Math.floor(i / 4) * 240 };
    return {
      id: normalizeString(scene.id) || ("scene_" + (i + 1)),
      title: scene.title || ("Scena " + (i + 1)),
      text: scene.openingText || scene.text || "",
      image: null,
      isEnding: false,
      choices: (scene.choices || []).map((choice, ci) => ({
        id: normalizeString(choice.id) || ("choice_" + (ci + 1)),
        text: choice.text || "",
        hidden: Boolean(choice.hidden),
        burnAfterUse: false,
        targetId: normalizeString(choice.nextSceneId || choice.targetSceneId) || null,
        event: null
      })),
      position
    };
  });
  const startingDescriptionId = normalizeString(adventure.startingSceneId) || descriptions[0]?.id || "";
  return {
    id: normalizeString(adventure.id) || slugify(adventure.title || "new-adventure"),
    version: 2,
    title: adventure.title || "Nuova Avventura",
    description: adventure.description || "",
    tags: normalizeAdventureTags(adventure.tags),
    adaptivePowerMultiplier: normalizeAdaptiveMultiplier(adventure.adaptivePowerMultiplier),
    startingDescriptionId,
    allowCarryOverLoadout: adventure.allowCarryOverLoadout !== false,
    allowFreshStart: adventure.allowFreshStart !== false,
    forceLoadout: Boolean(adventure.forceLoadout),
    restoreLoadoutOnEnd: Boolean(adventure.restoreLoadoutOnEnd),
    starterKitItems: (adventure.starterKitItems || []).map((loot) => normalizeLoot(loot)),
    descriptions,
    eventNodes: [],
    chapterGroups: []
  };
}

function normalizeImportedDescription(desc, index) {
  const editor = desc._editor || {};
  const position = editor.position || { x: 40 + (index % 4) * 340, y: 40 + Math.floor(index / 4) * 240 };
  return {
    id: normalizeString(desc.id) || ("scene_" + (index + 1)),
    title: desc.title || ("Scena " + (index + 1)),
    text: desc.text || "",
    image: desc.image || null,
    isEnding: Boolean(desc.isEnding),
    choices: (desc.choices || []).map((choice, ci) => ({
      id: normalizeString(choice.id) || ("choice_" + (ci + 1)),
      text: choice.text || "",
      hidden: Boolean(choice.hidden),
      burnAfterUse: Boolean(choice.burnAfterUse),
      targetId: normalizeString(choice.targetId) || null,
      event: choice.event || null
    })),
    position
  };
}

function normalizeImportedChapterGroups(groups, descriptions = [], eventNodes = []) {
  const source = Array.isArray(groups) ? groups : [];
  const validNodeIds = new Set([
    ...descriptions.map((desc) => desc.id),
    ...eventNodes.map((node) => node.id)
  ]);
  const claimedNodeIds = new Set();
  return source.map((group, index) => {
    const nodeIds = Array.from(new Set((group?.nodeIds || []).filter((nodeId) => validNodeIds.has(nodeId) && !claimedNodeIds.has(nodeId))));
    nodeIds.forEach((nodeId) => claimedNodeIds.add(nodeId));
    if (!nodeIds.length) return null;
    return {
      id: normalizeString(group?.id) || `chapter_${index + 1}`,
      type: "chapterGroup",
      title: group?.title || `Capitolo ${index + 1}`,
      collapsed: Boolean(group?.collapsed),
      nodeIds,
      position: clampFlowPoint(group?.position || { x: 0, y: 0 }),
      size: {
        w: Math.max(220, Number(group?.size?.w) || 280),
        h: Math.max(120, Number(group?.size?.h) || 150)
      },
      color: group?.color || "amber",
      portLabels: group?.portLabels && typeof group.portLabels === "object" ? { ...group.portLabels } : {},
      nodeRoles: Object.fromEntries(
        Object.entries(group?.nodeRoles && typeof group.nodeRoles === "object" ? group.nodeRoles : {})
          .filter(([nodeId]) => nodeIds.includes(nodeId))
          .map(([nodeId, role]) => [nodeId, normalizeChapterRole(role)])
          .filter(([, role]) => role !== "none")
      )
    };
  }).filter(Boolean);
}


function normalizeImportedChoice(choice, index) {
  return {
    id: normalizeString(choice.id) || `choice_${index + 1}`,
    text: choice.text || "",
    endingText: choice.endingText || choice._editor?.endingText || "",
    targetSceneId: normalizeString(choice.targetSceneId || choice.nextSceneId),
    skillCheck: choice.skillCheck ? {
      attribute: normalizeString(choice.skillCheck.attribute),
      difficulty: Number(choice.skillCheck.difficulty || 0),
      successSceneId: normalizeString(choice.skillCheck.successSceneId),
      failureSceneId: normalizeString(choice.skillCheck.failureSceneId),
      successLoot: (choice.skillCheck.successLoot || []).map((l) => normalizeLoot(l)),
      ...(choice.skillCheck.successText       && { successText: choice.skillCheck.successText }),
      ...(choice.skillCheck.successEncounterId && { successEncounterId: normalizeString(choice.skillCheck.successEncounterId) }),
      ...(choice.skillCheck.successCondition  && { successCondition: normalizeString(choice.skillCheck.successCondition) }),
      ...(choice.skillCheck.successUnlockChoiceId && { successUnlockChoiceId: normalizeString(choice.skillCheck.successUnlockChoiceId) }),
      failureLoot: (choice.skillCheck.failureLoot || []).map((l) => normalizeLoot(l)),
      ...(choice.skillCheck.failureText       && { failureText: choice.skillCheck.failureText }),
      ...(choice.skillCheck.failureEncounterId && { failureEncounterId: normalizeString(choice.skillCheck.failureEncounterId) }),
      ...(choice.skillCheck.failureCondition  && { failureCondition: normalizeString(choice.skillCheck.failureCondition) }),
      ...(choice.skillCheck.failureUnlockChoiceId && { failureUnlockChoiceId: normalizeString(choice.skillCheck.failureUnlockChoiceId) }),
      burnOnFailure: Boolean(choice.skillCheck.burnOnFailure) || undefined
    } : null,
    _successLootDraft: choice.skillCheck?.successLoot
      ? (choice.skillCheck.successLoot || []).map((l) => normalizeLoot(l))
      : [],
    _failureLootDraft: choice.skillCheck?.failureLoot
      ? (choice.skillCheck.failureLoot || []).map((l) => normalizeLoot(l))
      : [],
    hidden: Boolean(choice.hidden) || undefined,
    generatedCheckGate: Boolean(choice.generatedCheckGate || choice._editor?.generatedCheckGate)
  };
}

function normalizeImportedEncounter(monster) {
  return {
    id: normalizeString(monster.id) || slugify(monster.name || "monster"),
    name: monster.name || "Nuovo mostro",
    description: monster.description || "",
    hitPoints: Number(monster.hitPoints || 1),
    attackBonus: Number(monster.attackBonus || 0),
    defense: Number(monster.defense || 0),
    damageMin: Number(monster.damageMin || 0),
    damageMax: Number(monster.damageMax || 0),
    goldReward: Number(monster.goldReward || 0),
    loot: (monster.loot || []).map((loot) => normalizeLoot(loot))
  };
}

function normalizeImportedOutcomes(outcomes, scene) {
  const normalized = createEmptySceneOutcomes();
  Object.entries(outcomes || {}).forEach(([key, branch]) => {
    if (!normalized[key]) return;
    normalized[key] = {
      targetSceneId: normalizeString(branch?.targetSceneId),
      choices: (branch?.choices || []).map((choice, index) => normalizeImportedChoice(choice, index)),
      transitionText: branch?.transitionText || ""
    };
  });

  if (scene.victorySceneId) normalized.victory.targetSceneId = normalizeString(scene.victorySceneId);
  if (scene.victoryTransitionText) normalized.victory.transitionText = scene.victoryTransitionText;
  if (scene.defeatSceneId) normalized.defeat.targetSceneId = normalizeString(scene.defeatSceneId);
  if (scene.defeatTransitionText) normalized.defeat.transitionText = scene.defeatTransitionText;
  if (scene.retreatSceneId) normalized.retreat.targetSceneId = normalizeString(scene.retreatSceneId);
  if (scene.retreatTransitionText) normalized.retreat.transitionText = scene.retreatTransitionText;

  return normalized;
}

function migrateLegacyCheckGate(scene) {
  // Formato nuovo: una check scene ha già un choice con isCheckGate/generatedCheckGate.
  // Formato vecchio (pre-refactor): checkConfig + outcomes, nessun choice gate.
  // Questo migrator converte il vecchio nel nuovo.

  const isLegacyCheck = scene._legacyKind === "check" ||
    (!isCheckScene(scene) && !isCombatScene(scene) && scene.checkConfig?.skill);
  if (!isLegacyCheck) return;

  // Cerca un gate già generato (da import di JSON vecchio con la choice sintetica)
  const generatedGate = scene.choices.find((c) => c.generatedCheckGate && c.skillCheck);
  if (generatedGate) {
    generatedGate.isCheckGate = true;
    delete generatedGate.generatedCheckGate;
    return;
  }

  // Crea la gate choice dal vecchio checkConfig + outcomes
  if (!scene.checkConfig?.skill) return;
  const gateChoice = {
    id: `${scene.id}__gate`,
    text: "Affronta la prova",
    isCheckGate: true,
    skillCheck: {
      attribute: normalizeString(scene.checkConfig.skill),
      difficulty: Number(scene.checkConfig.difficulty || 10),
      successSceneId: normalizeString(getOutcomeBranch(scene, "success").targetSceneId) || "",
      failureSceneId: normalizeString(getOutcomeBranch(scene, "failure").targetSceneId) || scene.id
    }
  };
  scene.choices = [gateChoice, ...scene.choices.filter((c) => !c.generatedCheckGate)];
  delete scene.checkConfig;
}

function inferCheckKind(scene) {
  return Boolean(scene.choices?.some((choice) => choice.skillCheck));
}

function buildFallbackCombatGroups(scene) {
  if (!scene.encounterId) return [];
  return [{ monsterId: scene.encounterId, count: 1 }];
}

function buildFallbackCheckConfig(scene) {
  const firstCheck = scene.choices?.find((choice) => choice.skillCheck)?.skillCheck;
  if (!firstCheck) return { skill: "", difficulty: 10 };
  return {
    skill: normalizeString(firstCheck.attribute),
    difficulty: Number(firstCheck.difficulty || 10)
  };
}

function hydrateSceneTargetSelect(select, value = "") {
  select._hydrating = true;
  select.innerHTML = "";
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "Nessun collegamento";
  select.appendChild(placeholder);
  state.adventure.descriptions.forEach((desc, index) => {
    const option = document.createElement("option");
    option.value = desc.id;
    option.textContent = `${index + 1}. ${desc.title || desc.id}`;
    if (desc.id === value) option.selected = true;
    select.appendChild(option);
  });
  getAdventureEventNodes().forEach((node, index) => {
    const option = document.createElement("option");
    option.value = node.id;
    option.textContent = `[Evento ${index + 1}] ${node.text || nodePickerKindLabel(node.event?.type)}`;
    if (node.id === value) option.selected = true;
    select.appendChild(option);
  });
  select._hydrating = false;
}

// Variante per esiti di sconfitta: aggiunge l'opzione "Morte" (sentinel)
// che bypassa la navigazione a scena e attiva direttamente la schermata di game over.
function hydrateDefeatTargetSelect(select, value = "") {
  hydrateSceneTargetSelect(select, value);
  const deathOpt = document.createElement("option");
  deathOpt.value = DEATH_SENTINEL;
  deathOpt.textContent = "Morte immediata - schermata game over";
  if (value === DEATH_SENTINEL) deathOpt.selected = true;
  // Inserisci dopo il placeholder (posizione 1)
  select.insertBefore(deathOpt, select.options[1] || null);
  if (value === DEATH_SENTINEL) select.value = DEATH_SENTINEL;
}

// Variante per esito successo prova: aggiunge l'opzione "Resta qui" (sentinel)
// che assegna loot e brucia la scelta senza navigare a un'altra scena.
function hydrateSuccessTargetSelect(select, value = "") {
  hydrateSceneTargetSelect(select, value);
  const stayOpt = document.createElement("option");
  stayOpt.value = STAY_SENTINEL;
  stayOpt.textContent = "Resta qui - assegna loot al successo";
  if (value === STAY_SENTINEL) stayOpt.selected = true;
  select.insertBefore(stayOpt, select.options[1] || null);
  if (value === STAY_SENTINEL) select.value = STAY_SENTINEL;
}

// Variante per esiti di fallimento prova: aggiunge l'opzione "Ritenta" (sentinel)
// che ri-entra nella stessa scena senza bruciare la scelta.
function hydrateFailureTargetSelect(select, value = "") {
  hydrateSceneTargetSelect(select, value);
  const retryOpt = document.createElement("option");
  retryOpt.value = RETRY_SENTINEL;
  retryOpt.textContent = "Ritenta - ripete la prova";
  if (value === RETRY_SENTINEL) retryOpt.selected = true;
  select.insertBefore(retryOpt, select.options[1] || null);
  if (value === RETRY_SENTINEL) select.value = RETRY_SENTINEL;
}

// Variante per esiti di ritirata: aggiunge sia "Morte" che "Nessuna via di fuga"
// (sentinel che blocca la ritirata e fa continuare il combattimento).
function hydrateRetreatTargetSelect(select, value = "") {
  hydrateSceneTargetSelect(select, value);
  const noEscapeOpt = document.createElement("option");
  noEscapeOpt.value = NO_ESCAPE_SENTINEL;
  noEscapeOpt.textContent = "Nessuna via di fuga - il combattimento continua";
  if (value === NO_ESCAPE_SENTINEL) noEscapeOpt.selected = true;
  select.insertBefore(noEscapeOpt, select.options[1] || null);
  const deathOpt = document.createElement("option");
  deathOpt.value = DEATH_SENTINEL;
  deathOpt.textContent = "Morte immediata - schermata game over";
  if (value === DEATH_SENTINEL) deathOpt.selected = true;
  select.insertBefore(deathOpt, select.options[1] || null);
  if (value === DEATH_SENTINEL) select.value = DEATH_SENTINEL;
  else if (value === NO_ESCAPE_SENTINEL) select.value = NO_ESCAPE_SENTINEL;
}

function hydrateSkillSelect(select, value = "") {
  select._hydrating = true;
  select.innerHTML = "";
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "Nessuna prova";
  if (!value) placeholder.selected = true;
  select.appendChild(placeholder);
  SKILLS.forEach((skill) => {
    const option = document.createElement("option");
    option.value = skill.value;
    option.textContent = skill.label;
    if (skill.value === value) option.selected = true;
    select.appendChild(option);
  });
  select._hydrating = false;
}

/** Raccoglie tutti i LootDrop presenti nell'avventura v2 corrente (starterKit + eventi sulle scelte). */
function collectAllAdventureLoot() {
  const adv = state?.adventure;
  if (!adv) return [];
  return [
    ...(adv.starterKitItems || []),
    ...(adv.descriptions || []).flatMap((d) =>
      (d.choices || []).flatMap((c) => {
        const ev = c.event;
        if (!ev) return [];
        const loot = ev.loot || [];
        const branchLoot = (ev.branches || []).flatMap((b) => b.loot || []);
        const combatLoot = (ev.combatGroups || []).flatMap((g) => g.loot || []);
        return [...loot, ...branchLoot, ...combatLoot];
      })
    )
  ];
}

function hydrateKeySelect(select, value = "") {
  select.innerHTML = "";
  const noneOpt = document.createElement("option");
  noneOpt.value = "";
  noneOpt.textContent = "Seleziona chiave";
  if (!value) noneOpt.selected = true;
  select.appendChild(noneOpt);

  // collect all keys: presets + adventure custom loot
  const seen = new Set();
  const addOption = (lockId, label) => {
    if (!lockId || seen.has(lockId)) return;
    seen.add(lockId);
    const opt = document.createElement("option");
    opt.value = lockId;
    opt.textContent = `${label} (${lockId})`;
    if (lockId === value) opt.selected = true;
    select.appendChild(opt);
  };

  LOOT_PRESETS.filter((p) => p.category === "key" && p.lockId).forEach((p) => addOption(p.lockId, p.name));

  if (state?.adventure) {
    const allLoot = collectAllAdventureLoot();
    allLoot.filter((l) => l.category === "key" && l.lockId).forEach((l) => {
      addOption(normalizeString(l.lockId), l.itemName || l.itemId || l.lockId);
    });
  }

  // if current value not in list, add it as orphan
  if (value && !seen.has(value)) {
    const opt = document.createElement("option");
    opt.value = value;
    opt.textContent = `${value} | chiave non trovata nell'avventura`;
    opt.selected = true;
    select.appendChild(opt);
  }
}

function hydrateLootSelect(select, value = "") {
  select.innerHTML = "";
  const noneOpt = document.createElement("option");
  noneOpt.value = "";
  noneOpt.textContent = "Nessuno";
  if (!value) noneOpt.selected = true;
  select.appendChild(noneOpt);
  LOOT_PRESETS.forEach((loot) => {
    const option = document.createElement("option");
    option.value = loot.id;
    option.textContent = loot.name;
    if (loot.id === value) option.selected = true;
    select.appendChild(option);
  });
}

function hydrateCategorySelect(select, value = "") {
  select.innerHTML = "";
  ITEM_CATEGORIES.forEach((category) => {
    const option = document.createElement("option");
    option.value = category.value;
    option.textContent = category.label;
    if (category.value === value) option.selected = true;
    select.appendChild(option);
  });
}

function hydrateRaritySelect(select, value = "common") {
  select.innerHTML = "";
  ITEM_RARITIES.forEach((rarity) => {
    const option = document.createElement("option");
    option.value = rarity.value;
    option.textContent = rarity.label;
    if (rarity.value === value) option.selected = true;
    select.appendChild(option);
  });
}

function hydrateEffectSelect(select, value = "", category = "") {
  select.innerHTML = "";
  effectPresetsForCategory(category).forEach((effect) => {
    const option = document.createElement("option");
    option.value = effect.value;
    option.textContent = effect.label;
    if (effect.value === value) option.selected = true;
    select.appendChild(option);
  });
  if (!select.value && select.options.length > 0) {
    select.value = "";
  }
}

function syncLootEffectMeta(effectId, familyField, triggerField) {
  const preset = EFFECT_PRESETS.find((entry) => entry.value === effectId);
  familyField.value = preset?.family ? effectFamilyLabel(preset.family) : "Nessuna";
  triggerField.value = preset?.trigger ? effectTriggerLabel(preset.trigger) : "Nessuno";
}

function effectPresetById(effectId) {
  return EFFECT_PRESETS.find((entry) => entry.value === effectId) || null;
}

function effectPresetsForCategory(category = "") {
  const normalizedCategory = normalizeString(category) || "";
  return EFFECT_PRESETS.filter((effect) => {
    if (!effect.value) return true;
    const categories = Array.isArray(effect.categories) ? effect.categories : [];
    if (!categories.length) return true;
    return normalizedCategory ? categories.includes(normalizedCategory) : true;
  });
}

function effectCategoryLabelList(effect) {
  const categories = Array.isArray(effect?.categories) ? effect.categories : [];
  if (!categories.length) return "qualsiasi tipo";
  return categories
    .map((value) => ITEM_CATEGORIES.find((entry) => entry.value === value)?.label || value)
    .join(", ");
}

function effectHelpText(effectId, category = "") {
  const normalizedCategory = normalizeString(category) || "";
  const effect = effectPresetById(effectId);
  if (!effect?.value) {
    return normalizedCategory
      ? `Nessun effetto speciale. Per la categoria ${effectCategoryLabelList({ categories: [normalizedCategory] })} puoi scegliere solo effetti davvero compatibili.`
      : "Nessun effetto speciale. Scegli prima una categoria per vedere gli effetti sensati per quel tipo di loot.";
  }
  return `${effect.description} Tipi compatibili: ${effectCategoryLabelList(effect)}.`;
}

function effectAllowedForCategory(effectId, category = "") {
  if (!effectId) return true;
  const effect = effectPresetById(effectId);
  if (!effect) return false;
  const categories = Array.isArray(effect.categories) ? effect.categories : [];
  if (!categories.length) return true;
  const normalizedCategory = normalizeString(category) || "";
  return normalizedCategory ? categories.includes(normalizedCategory) : true;
}

function hydrateMonsterPresetSelect(select = els.monsterPresetSelect) {
  select.innerHTML = "";

  const customOption = document.createElement("option");
  customOption.value = "custom";
  customOption.textContent = "Nuovo mostro da zero";
  select.appendChild(customOption);

  MONSTER_PRESETS.forEach((preset) => {
    const option = document.createElement("option");
    option.value = preset.id;
    option.textContent = `${preset.name} | HP ${preset.hitPoints} | DEF ${preset.defense}`;
    select.appendChild(option);
  });
}

function hydrateLootPresetSelect() {
  hydrateLootSelect(els.lootPresetSelect, "coins", { noPicker: true });
}

function monsterPresetById(presetId) {
  return MONSTER_PRESETS.find((entry) => entry.id === presetId) || null;
}

// Select per encounter esistenti (usata nei branch inline di skill check)
function hydrateEncounterSelect(select, value = "") {
  select._hydrating = true;
  select.innerHTML = "";
  const none = document.createElement("option");
  none.value = "";
  none.textContent = "— Nessuno —";
  select.appendChild(none);
  // encounters non esiste nel modello v2 — select rimane vuota
  select.value = value || "";
  select._hydrating = false;
}

const CONDITION_OPTIONS = [
  { value: "", label: "— Nessuna —" },
  { value: "focused",   label: "Concentrato (focused)" },
  { value: "guarded",   label: "In Guardia (guarded)" },
  { value: "staggered", label: "Stordito (staggered)" },
  { value: "exposed",   label: "Scoperto (exposed)" },
  { value: "weakened",  label: "Indebolito (weakened)" },
];

function hydrateConditionSelect(select, value = "") {
  select._hydrating = true;
  select.innerHTML = "";
  CONDITION_OPTIONS.forEach(({ value: v, label }) => {
    const opt = document.createElement("option");
    opt.value = v;
    opt.textContent = label;
    if (v === value) opt.selected = true;
    select.appendChild(opt);
  });
  select.value = value || "";
  select._hydrating = false;
}

function hydrateMonsterSelect(select, value = "") {
  select.innerHTML = "";
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "Scegli mostro";
  select.appendChild(placeholder);

  MONSTER_PRESETS.forEach((preset) => {
    const option = document.createElement("option");
    option.value = `__preset__:${preset.id}`;
    option.textContent = `Preset: ${preset.name} | HP ${preset.hitPoints} | DEF ${preset.defense}`;
    select.appendChild(option);
  });

  const createOption = document.createElement("option");
  createOption.value = CREATE_MONSTER_OPTION;
  createOption.textContent = "+ Crea nuovo mostro";
  select.appendChild(createOption);

  if (value === CREATE_MONSTER_OPTION) createOption.selected = true;
}
// hydrateMonsterSelect stub — encounters non esistono nel modello v2

function getSelectedScene() {
  return state.adventure.descriptions.find((d) => d.id === state.selectedDescriptionId) || null;
}

function getSelectedEventContext() {
  const ref = state.ui.selectedEventRef;
  if (!ref?.descriptionId || !ref?.choiceId) return null;
  return getGraphChoiceContext(ref.descriptionId, ref.choiceId);
}

function isEventNodeSelected(descId, choiceId) {
  return state.ui.selectedEventRef?.descriptionId === descId
    && state.ui.selectedEventRef?.choiceId === choiceId;
}

function selectEventNode(descId, choiceId, { scrollIntoView = true } = {}) {
  if (!descId || !choiceId) return;
  const context = getGraphChoiceContext(descId, choiceId);
  if (!context) return;
  const previousSceneId = state.selectedDescriptionId;
  saveCurrentScene({ renderFlow: false });
  if (!context.detached) {
    state.selectedDescriptionId = descId;
  }
  state.ui.selectedEventRef = { descriptionId: descId, choiceId };
  updateFlowCardSelection(previousSceneId, context.detached ? previousSceneId : descId);
  updateChoiceNodeSelection();
  renderSceneEditor();
  if (scrollIntoView) {
    requestAnimationFrame(() => els.sceneEditor?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }
}

function getSelectedMonster() { return null; } // no more separate monster model

function sceneTitleById(sceneId, fallback = "nessuna destinazione") {
  if (!sceneId) return fallback;
  if (sceneId === DEATH_SENTINEL) return "Morte immediata";
  if (sceneId === STAY_SENTINEL) return "Resta qui";
  const target = state.adventure.descriptions.find((d) => d.id === sceneId);
  if (target) return target.title;
  const eventNode = getStandaloneEventNodeById(sceneId);
  return eventNode ? `[Evento] ${eventNode.text || nodePickerKindLabel(eventNode.event?.type)}` : fallback;
}

function targetLabel(choice) {
  if (choice.skillCheck) return `check ${choice.skillCheck.attribute || "?"}`;
  return sceneTitleById(choice.targetSceneId);
}

function sceneLabel(kind) {
  if (kind === "check") return "prova";
  if (kind === "combat") return "combattimento";
  return "descrizione";
}

function sceneKindShortLabel(kind) {
  if (kind === "check") return "PR";
  if (kind === "combat") return "CO";
  return "DE";
}

function choiceLabel(index) {
  return String.fromCharCode(65 + index) + ".";
}

function createEmptyChoice(index = 1) {
  // v2 format: no requirement fields, event is on the edge
  return {
    id: `choice_${index}`,
    text: "",
    hidden: false,
    burnAfterUse: false,
    targetId: null,
    event: null
  };
}

function createEmptyOutcomeBranch() {
  return {
    targetSceneId: "",
    choices: [],
    transitionText: ""
  };
}

function createEmptySceneOutcomes() {
  return {
    success: createEmptyOutcomeBranch(),
    failure: createEmptyOutcomeBranch(),
    victory: createEmptyOutcomeBranch(),
    defeat: createEmptyOutcomeBranch(),
    retreat: createEmptyOutcomeBranch()
  };
}

function outcomeKeysForScene(scene) {
  if (isCombatScene(scene)) return ["victory", "defeat", "retreat"];
  return [];
}

function outcomeDefinitionsForScene(scene) {
  if (isCombatScene(scene)) {
    return [
      { key: "victory", title: "Se il combattimento finisce in vittoria", hint: "Premio, svolta o scelta successiva alla vittoria." },
      { key: "defeat", title: "Se il combattimento finisce in sconfitta", hint: "Caduta, cattura o ultima scelta prima del memoriale. Scegli Morte immediata per andare direttamente alla schermata game over senza passare per una scena intermedia." },
      { key: "retreat", title: "Se il giocatore si ritira", hint: "Fuga, ripiego o bivio di emergenza. Scegli Morte immediata per game over immediato, oppure Nessuna via di fuga. per bloccare la ritirata e far continuare il combattimento. Se vuoto, il runtime ricade sulla sconfitta." }
    ];
  }
  return [];
}

function getOutcomeBranch(scene, key) {
  scene.outcomes = scene.outcomes || createEmptySceneOutcomes();
  if (!scene.outcomes[key]) scene.outcomes[key] = createEmptyOutcomeBranch();
  scene.outcomes[key].choices = (scene.outcomes[key].choices || []).map((choice, index) => ({
    ...createEmptyChoice(index + 1),
    ...choice
  }));
  scene.outcomes[key].targetSceneId = normalizeString(scene.outcomes[key].targetSceneId) || "";
  return scene.outcomes[key];
}

function setOutcomeTarget(scene, key, targetSceneId) {
  const branch = getOutcomeBranch(scene, key);
  branch.targetSceneId = normalizeString(targetSceneId) || "";
}

// Aggiunge una choice di navigazione diretta a targetId sulla description.
// Se esiste già una choice senza destinazione, la riutilizza.
function addLinkedTarget(desc, targetId) {
  desc.choices = desc.choices || [];
  const emptyChoice = desc.choices.find((c) => !c.targetId && !c.event);
  if (emptyChoice) {
    emptyChoice.targetId = targetId;
  } else {
    desc.choices.push({
      id: createUniqueChoiceId(desc),
      text: `Scelta ${desc.choices.length + 1}`,
      hidden: false,
      burnAfterUse: false,
      targetId,
      event: null
    });
  }
}

// Alias per compatibilità interna (drag-to-create usa ancora questo nome in alcuni punti)
function addLinkedTargetToScene(desc, targetId) {
  addLinkedTarget(desc, targetId);
}

function createUniqueChoiceId(desc) {
  return `${desc.id}_c${(desc.choices?.length || 0) + 1}_${Date.now().toString(36).slice(-4)}`;
}

function createLootFromPreset(presetId) {
  const preset = lootPresetById(presetId) || lootPresetById("coins");
  return {
    itemId: preset.id === "custom" ? "" : preset.id,
    itemName: preset.id === "custom" ? "" : preset.name,
    quantity: 1,
    lockId: preset.lockId || "",
    category: preset.category || "",
    rarity: preset.rarity || "common",
    armorType: preset.category === "armor" ? (preset.armorType || "light") : "light",
    effectIds: [...(preset.effectIds || [])],
    expanded: true
  };
}

function lootLabelFromPreset(presetId) {
  const preset = lootPresetById(presetId);
  if (!preset) return presetId || "";
  return preset.id === "custom" ? "" : preset.name;
}

function findLootPresetId(itemName) {
  const preset = LOOT_PRESETS.find((entry) => entry.name === itemName || entry.id === itemName);
  return preset?.id || "custom";
}

function lootPresetById(presetId) {
  return LOOT_PRESETS.find((entry) => entry.id === presetId) || null;
}

function runtimeLootItemId(loot) {
  return normalizeString(loot.itemId) || slugify(loot.itemName || "custom_loot");
}

function resolveRuntimeItemLabel(adventure, itemId) {
  const normalizedId = normalizeString(itemId);
  if (!normalizedId) return null;
  const presetLabel = lootLabelFromPreset(normalizedId);
  if (presetLabel) return presetLabel;
  const allLoot = [
    ...(adventure.starterKitItems || []),
    ...(adventure.descriptions || []).flatMap((d) =>
      (d.choices || []).flatMap((c) => [...(c.event?.loot || []), ...((c.event?.combatGroups || []).flatMap((g) => g.loot || []))])
    )
  ];
  const matched = allLoot.find((loot) => runtimeLootItemId(loot) === normalizedId);
  return matched?.itemName || normalizedId;
}

function effectPresetLabel(effectId) {
  return EFFECT_PRESETS.find((entry) => entry.value === effectId)?.label || effectId || "";
}

function effectFamilyLabel(value) {
  return EFFECT_FAMILIES.find((entry) => entry.value === value)?.label || value || "Nessuna";
}

function effectTriggerLabel(value) {
  return EFFECT_TRIGGERS.find((entry) => entry.value === value)?.label || value || "Nessuno";
}

function uniqueMonsterName(baseName) { return baseName; } // stub

function uniqueSceneCopyTitle(baseName) {
  const normalizedBase = normalizeString(baseName) || "Scena";
  const existingTitles = new Set(state.adventure.descriptions.map((d) => d.title));
  const initialCopyTitle = `${normalizedBase} copia`;
  if (!existingTitles.has(initialCopyTitle)) return initialCopyTitle;

  let copyIndex = 2;
  while (existingTitles.has(`${initialCopyTitle} ${copyIndex}`)) {
    copyIndex += 1;
  }
  return `${initialCopyTitle} ${copyIndex}`;
}

function createUniqueSceneId() {
  const existingIds = new Set(state.adventure.descriptions.map((d) => d.id));
  let index = Math.max(1, state.adventure.descriptions.length + 1);
  while (existingIds.has(createSceneId(index))) {
    index += 1;
  }
  return createSceneId(index);
}

function createUniqueMonsterId() {
  // Genera un ID per un gruppo combattimento inline
  return `monster_${Date.now().toString(36).slice(-6)}`;
}

function createSceneId(index) {
  return `scene_${index}`;
}

function cloneValue(value) {
  if (typeof structuredClone === "function") {
    return structuredClone(value);
  }
  return JSON.parse(JSON.stringify(value));
}

function slugify(text) {
  return String(text).toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

function truncate(text, max) {
  if (!text || text.length <= max) return text || "";
  return text.slice(0, max).trimEnd() + "...";
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function normalizeString(value) {
  return value && value.trim() ? value.trim() : null;
}

function normalizeLoot(loot) {
  const normalized = loot && typeof loot === "object" ? loot : {};
  const snapshot = { ...normalized };
  normalized.itemId = snapshot.itemId || "";
  normalized.itemName = snapshot.itemName || "";
  normalized.quantity = snapshot.quantity ?? 1;
  normalized.lockId = snapshot.lockId || "";
  normalized.questItem = Boolean(snapshot.questItem);
  normalized.questItemId = snapshot.questItemId || "";
  normalized.category = snapshot.category || "";
  normalized.rarity = snapshot.rarity || "common";
  normalized.armorType = snapshot.category === "armor" ? (snapshot.armorType || "light") : "light";
  normalized.effectIds = Array.isArray(snapshot.effectIds) ? snapshot.effectIds.filter(Boolean) : [];
  normalized.effectSetId = snapshot.effectSetId || "";
  normalized.tier = Number(snapshot.tier) || undefined;
  normalized.expanded = snapshot.expanded !== false;
  return normalized;
}

function normalizeChoice(choice, index = 1) {
  const normalized = choice && typeof choice === "object" ? choice : {};
  const snapshot = { ...normalized };
  const defaults = createEmptyChoice(index);
  normalized.id = normalizeString(snapshot.id) || defaults.id;
  normalized.text = snapshot.text ?? defaults.text;
  normalized.endingText = snapshot.endingText ?? defaults.endingText;
  normalized.targetSceneId = normalizeString(snapshot.targetSceneId) || null;
  normalized.hidden = Boolean(snapshot.hidden) || undefined;
  if (snapshot.skillCheck) {
    const sc = snapshot.skillCheck;
    normalized.skillCheck = {
      attribute: normalizeString(sc.attribute),
      difficulty: Number(sc.difficulty || 0),
      successSceneId: normalizeString(sc.successSceneId),
      failureSceneId: normalizeString(sc.failureSceneId),
      ...(sc.successText           && { successText: sc.successText }),
      ...(sc.successEncounterId    && { successEncounterId: normalizeString(sc.successEncounterId) }),
      ...(sc.successCondition      && { successCondition: normalizeString(sc.successCondition) }),
      ...(sc.successUnlockChoiceId && { successUnlockChoiceId: normalizeString(sc.successUnlockChoiceId) }),
      ...(sc.failureLoot?.length   && { failureLoot: sc.failureLoot }),
      ...(sc.failureText           && { failureText: sc.failureText }),
      ...(sc.failureEncounterId    && { failureEncounterId: normalizeString(sc.failureEncounterId) }),
      ...(sc.failureCondition      && { failureCondition: normalizeString(sc.failureCondition) }),
      ...(sc.failureUnlockChoiceId && { failureUnlockChoiceId: normalizeString(sc.failureUnlockChoiceId) }),
      ...(sc.burnOnFailure         && { burnOnFailure: true })
    };
    normalized._successLootDraft = (sc.successLoot || []).map((l) => normalizeLoot(l));
    normalized._failureLootDraft = (sc.failureLoot || []).map((l) => normalizeLoot(l));
  } else {
    delete normalized.skillCheck;
  }
  return normalized;
}

function normalizeAdaptiveMultiplier(value) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return 0.12;
  return Math.min(0.35, Math.max(0, parsed));
}

function normalizeAdventureTags(value) {
  const raw = Array.isArray(value)
    ? value
    : String(value || "").split(",");
  return raw
    .map((entry) => String(entry || "").trim())
    .filter(Boolean)
    .slice(0, 3);
}

function renderValidation(validation) {
  const issues = [
    ...validation.errors.map((message) => ({ severity: "error", message })),
    ...validation.warnings.map((message) => ({ severity: "warning", message }))
  ];
  els.exportJsonBtn.disabled = validation.errors.length > 0;

  if (!issues.length) {
    els.validationSummary.textContent = validation.strictAlpha
      ? "Modalita alpha severa attiva | nessun blocco trovato."
      : "Nessun problema bloccante trovato. Runtime pulito, metadata di authoring confinati in _editor.";
    els.validationList.innerHTML = '<li class="validation-item ok">Contratto runtime/editor coerente per l\'export corrente.</li>';
    return;
  }

  els.validationSummary.textContent = validation.errors.length > 0
    ? `Export bloccato${validation.strictAlpha ? " | alpha severa" : ""} | Errori: ${validation.errors.length} | Warning: ${validation.warnings.length}`
    : `Export consentito con warning | Errori: 0 | Warning: ${validation.warnings.length}`;
  els.validationList.innerHTML = issues
    .map((issue) => `<li class="validation-item ${issue.severity}">${issue.message}</li>`)
    .join("");
}

function validateAdventure(adventure, cleaned = cleanAdventure(adventure), options = {}) {
  const strictAlpha = Boolean(options.strictAlpha);
  const errors = [];
  const warnings = [];
  const descriptionIds = new Set();
  const eventNodeIds = new Set();
  const validCategories = new Set(ITEM_CATEGORIES.map((e) => e.value).filter(Boolean));
  const validRarities = new Set(ITEM_RARITIES.map((e) => e.value));
  const validEffects = new Set(EFFECT_PRESETS.map((e) => e.value).filter(Boolean));

  function pushWarning(message, { alphaBlocking = false } = {}) {
    if (strictAlpha && alphaBlocking) { errors.push(message); return; }
    warnings.push(message);
  }

  function isValidTargetId(id) {
    if (!id) return false;
    if (id === "__death__" || id === "__stay__") return true;
    return descriptionIds.has(id) || eventNodeIds.has(id);
  }

  function validateLoot(loot, ownerLabel) {
    if (!loot.itemName?.trim()) {
      errors.push(`${ownerLabel}: loot senza itemName.`);
    }
    if (!Number.isFinite(Number(loot.quantity)) || Number(loot.quantity) < 1) {
      errors.push(`${ownerLabel}: il loot ${loot.itemName || loot.itemId} deve avere quantita >= 1.`);
    }
    if (!loot.category) {
      pushWarning(`${ownerLabel}: il loot ${loot.itemName || loot.itemId} non ha una categoria.`, { alphaBlocking: true });
    } else if (!validCategories.has(loot.category)) {
      errors.push(`${ownerLabel}: categoria non valida (${loot.category}).`);
    }
    if (loot.category === "key" && !normalizeString(loot.lockId)) {
      errors.push(`${ownerLabel}: il loot ${loot.itemName || loot.itemId} e una chiave ma non ha lockId.`);
    }
    if (loot.questItemId && !loot.questItem) {
      errors.push(`${ownerLabel}: il loot ${loot.itemName || loot.itemId} ha questItemId ma non e marcato come quest item.`);
    }
    if (loot.rarity && !validRarities.has(loot.rarity)) {
      errors.push(`${ownerLabel}: rarita non valida (${loot.rarity}).`);
    }
    (loot.effectIds || []).forEach((effectId) => {
      if (!validEffects.has(effectId)) {
        errors.push(`${ownerLabel}: effectId non valido (${effectId}).`);
      } else if (!effectAllowedForCategory(effectId, loot.category)) {
        errors.push(`${ownerLabel}: effetto ${effectId} incompatibile con categoria ${loot.category || "?"}.`);
      }
    });
  }

  function validateBranch(branch, label, descId) {
    if (!branch) return;
    if (branch.targetId && !isValidTargetId(branch.targetId)) {
      errors.push(`${label} nella desc ${descId} punta a ID inesistente: ${branch.targetId}.`);
    }
    (branch.loot || []).forEach((loot) => validateLoot(loot, label));
    if (branch.event) validateEvent(branch.event, label, descId);
  }

  function validateCombatGroup(group, label) {
    if (!group.hitPoints || group.hitPoints < 1) {
      pushWarning(`${label}: gruppo combattimento senza HP validi.`, { alphaBlocking: true });
    }
    if ((group.damageMax || 0) < (group.damageMin || 0)) {
      errors.push(`${label}: dannoMax < dannoMin.`);
    }
    (group.loot || []).forEach((loot) => validateLoot(loot, label));
  }

  function validateEvent(ev, label, descId) {
    if (!ev || !ev.type) return;
    switch (ev.type) {
      case "combat":
        if (!ev.combatGroups?.length) {
          pushWarning(`${label} in ${descId}: evento combattimento senza gruppi.`, { alphaBlocking: true });
        }
        (ev.combatGroups || []).forEach((g) => validateCombatGroup(g, label));
        validateBranch(ev.victoryBranch, `vittoria di ${label}`, descId);
        validateBranch(ev.defeatBranch, `sconfitta di ${label}`, descId);
        if (ev.retreatBranch) validateBranch(ev.retreatBranch, `ritirata di ${label}`, descId);
        break;
      case "skillcheck":
        if (!ev.attribute) errors.push(`${label} in ${descId}: skill check senza attributo.`);
        validateBranch(ev.successBranch, `successo di ${label}`, descId);
        validateBranch(ev.failureBranch, `fallimento di ${label}`, descId);
        break;
      case "requirement":
        if (ev.requirementMode === "key") {
          if (!ev.lockId) errors.push(`${label} in ${descId}: requirement key senza lockId.`);
        } else if (ev.requirementMode === "questItem") {
          if (!ev.questItemId) errors.push(`${label} in ${descId}: requirement quest item senza questItemId.`);
        } else if (!ev.itemId) {
          errors.push(`${label} in ${descId}: requirement preset item senza itemId.`);
        }
        validateBranch(ev.metBranch, `soddisfatto di ${label}`, descId);
        validateBranch(ev.unmetBranch, `non soddisfatto di ${label}`, descId);
        break;
      case "loot":
        (ev.loot || []).forEach((loot) => validateLoot(loot, label));
        validateBranch(ev.branch, `branch di ${label}`, descId);
        break;
      case "condition":
        if (!ev.conditionId) errors.push(`${label} in ${descId}: evento condizione senza conditionId.`);
        validateBranch(ev.branch, `branch di ${label}`, descId);
        break;
      case "shop":
      case "transition":
        validateBranch(ev.branch, `branch di ${label}`, descId);
        break;
      case "dialogue": {
        ensureDialogueEventDefaults(ev);
        const responses = Array.isArray(ev.root?.responses) ? ev.root.responses : [];
        if (responses.length > 4) {
          errors.push(`${label} in ${descId}: il dialogo supera il limite di 4 risposte visibili.`);
        }
        if (responses.length) {
          responses.forEach((response, index) => {
            if (!response.text?.trim()) {
              pushWarning(`${label} in ${descId}: risposta ${index + 1} senza testo.`, { alphaBlocking: true });
            }
            if (!response.targetId) {
              pushWarning(`${label} in ${descId}: risposta ${index + 1} senza destinazione.`, { alphaBlocking: true });
            } else if (!isValidTargetId(response.targetId)) {
              errors.push(`${label} in ${descId}: risposta ${index + 1} punta a un target inesistente (${response.targetId}).`);
            }
          });
        } else {
          validateBranch(ev.branch || ev.root?.branch, `uscita lineare di ${label}`, descId);
        }
        break;
      }
    }
  }

  // ► Validazione testata avventura
  if (!cleaned.title?.trim()) {
    pushWarning("L'avventura non ha ancora un titolo leggibile.", { alphaBlocking: true });
  }
  if ((cleaned.tags || []).length > 3) {
    errors.push("L'avventura puo avere massimo 3 tag.");
  }
  (cleaned.tags || []).forEach((tag) => {
    if (/\s/.test(tag)) errors.push(`Il tag "${tag}" deve essere una parola sola.`);
  });
  if (!cleaned.descriptions?.length) {
    errors.push("Aggiungi almeno una descrizione prima di esportare.");
    return { errors, warnings, strictAlpha };
  }

  // ► Raccogli tutti gli ID
  cleaned.descriptions.forEach((desc) => {
    if (descriptionIds.has(desc.id)) {
      errors.push(`ID duplicato: ${desc.id}.`);
    } else {
      descriptionIds.add(desc.id);
    }
  });
  (cleaned.eventNodes || []).forEach((node) => {
    if (eventNodeIds.has(node.id) || descriptionIds.has(node.id)) {
      errors.push(`ID duplicato: ${node.id}.`);
    } else {
      eventNodeIds.add(node.id);
    }
  });

  // ► Starter kit loot
  (cleaned.starterKitItems || []).forEach((loot) => validateLoot(loot, "Starter kit"));

  // ► ID iniziale
  if (!cleaned.startingDescriptionId) {
    errors.push("Imposta una descrizione iniziale valida.");
  } else if (!descriptionIds.has(cleaned.startingDescriptionId)) {
    errors.push(`La descrizione iniziale ${cleaned.startingDescriptionId} non esiste.`);
  }

  // ► Validazione nodi
  cleaned.descriptions.forEach((desc) => {
    if (!desc.title?.trim()) {
      pushWarning(`La descrizione ${desc.id} non ha titolo.`, { alphaBlocking: true });
    }
    if (!desc.text?.trim()) {
      pushWarning(`La descrizione ${desc.id} non ha testo.`, { alphaBlocking: true });
    }
    if (!desc.isEnding && (!desc.choices || desc.choices.length === 0)) {
      pushWarning(`La descrizione ${desc.id} non ha scelte e non e marcata come epilogo.`, { alphaBlocking: true });
    }
    (desc.choices || []).forEach((choice) => {
      if (!choice.text?.trim()) {
        errors.push(`Scelta in ${desc.id} senza testo.`);
      }
      if (choice.event) {
        validateEvent(choice.event, `Scelta "${choice.text}"`, desc.id);
      } else if (choice.targetId) {
        if (!isValidTargetId(choice.targetId)) {
          errors.push(`Scelta "${choice.text}" in ${desc.id} punta a ID inesistente: ${choice.targetId}.`);
        }
      } else if (!desc.isEnding) {
        pushWarning(`Scelta "${choice.text}" in ${desc.id} non ha destinazione ne evento.`, { alphaBlocking: true });
      }
    });
  });
  (cleaned.eventNodes || []).forEach((node) => {
    if (!node.text?.trim()) {
      pushWarning(`Il nodo evento ${node.id} non ha etichetta.`, { alphaBlocking: true });
    }
    if (!node.event?.type) {
      errors.push(`Il nodo evento ${node.id} non ha un payload evento valido.`);
      return;
    }
    validateEvent(node.event, `Nodo evento "${node.text || node.id}"`, node.id);
  });

  const allLootEntries = [
    ...(cleaned.starterKitItems || []),
    ...(cleaned.descriptions || []).flatMap((desc) =>
      (desc.choices || []).flatMap((choice) => choice.event?.loot || [])
    ),
    ...(cleaned.eventNodes || []).flatMap((node) => {
      const ev = node.event;
      if (!ev) return [];
      if (ev.type === "loot") return ev.loot || [];
      if (ev.type === "combat") {
        return (ev.combatGroups || []).flatMap((group) => group.loot || []);
      }
      return [];
    })
  ];
  const knownLockIds = new Set(allLootEntries.map((loot) => normalizeString(loot?.lockId)).filter(Boolean));
  const knownQuestItemIds = new Set();
  allLootEntries.forEach((loot) => {
    const questItemId = normalizeString(loot?.questItemId);
    if (!questItemId) return;
    if (knownQuestItemIds.has(questItemId)) {
      errors.push(`Quest item ID duplicato: "${questItemId}". Ogni quest item referenziabile deve avere un ID univoco.`);
      return;
    }
    knownQuestItemIds.add(questItemId);
  });
  const validateRequirementReferences = (ev, label, descId) => {
    if (!ev) return;
    if (ev.type === "requirement") {
      const mode = ev.requirementMode || (ev.lockId ? "key" : ev.questItemId ? "questItem" : "presetItem");
      if (mode === "key" && ev.lockId && !knownLockIds.has(normalizeString(ev.lockId))) {
        errors.push(`${label} in ${descId}: requirement key punta a lockId inesistente (${ev.lockId}).`);
      }
      if (mode === "questItem" && ev.questItemId && !knownQuestItemIds.has(normalizeString(ev.questItemId))) {
        errors.push(`${label} in ${descId}: requirement quest item punta a questItemId inesistente (${ev.questItemId}).`);
      }
    }
    ["victoryBranch", "defeatBranch", "retreatBranch", "successBranch", "failureBranch", "metBranch", "unmetBranch", "branch"].forEach((branchKey) => {
      if (ev?.[branchKey]?.event) validateRequirementReferences(ev[branchKey].event, label, descId);
    });
  };
  (cleaned.descriptions || []).forEach((desc) => {
    (desc.choices || []).forEach((choice) => validateRequirementReferences(choice.event, `Scelta "${choice.text || desc.id}"`, desc.id));
  });
  (cleaned.eventNodes || []).forEach((node) => {
    validateRequirementReferences(node.event, `Nodo evento "${node.text || node.id}"`, node.id);
  });

  // ► Raggiungibilita
  const reachable = new Set();
  if (descriptionIds.has(cleaned.startingDescriptionId)) {
    const queue = [cleaned.startingDescriptionId];
    const collectTargets = (branch) => {
      if (!branch) return;
      if (branch.targetId && (descriptionIds.has(branch.targetId) || eventNodeIds.has(branch.targetId))) queue.push(branch.targetId);
      if (branch.event) collectEventTargets(branch.event);
    };
    const collectEventTargets = (ev) => {
      if (!ev) return;
      ["victoryBranch","defeatBranch","retreatBranch","successBranch","failureBranch","metBranch","unmetBranch","branch"].forEach((k) => {
        if (ev[k]) collectTargets(ev[k]);
      });
    };
    while (queue.length) {
      const id = queue.shift();
      if (!id || reachable.has(id)) continue;
      reachable.add(id);
      const desc = cleaned.descriptions.find((d) => d.id === id);
      if (desc) {
        (desc.choices || []).forEach((choice) => {
          if (choice.targetId && (descriptionIds.has(choice.targetId) || eventNodeIds.has(choice.targetId))) queue.push(choice.targetId);
          if (choice.event) collectEventTargets(choice.event);
        });
        continue;
      }
      const eventNode = (cleaned.eventNodes || []).find((node) => node.id === id);
      if (eventNode?.event) {
        collectEventTargets(eventNode.event);
      }
    }
  }
  cleaned.descriptions
    .filter((d) => !reachable.has(d.id))
    .forEach((d) => pushWarning(`La descrizione ${d.id} non e raggiungibile dall'inizio.`, { alphaBlocking: true }));

  return { errors, warnings, strictAlpha };
}


// ── Predicati tipo-scena (v2: tutte le Description sono narrative, il tipo è negli Event sulle Choice) ──
// Mantenuti come stub per non rompere chiamate residue nel codice v1 non ancora rimosso.
function isCombatScene(_scene) { return false; }
function isCheckScene(_scene) { return false; }
function derivedSceneKind(_scene) { return "description"; }

function buildSceneEditorMetadata(desc) {
  // In v2 l'unico metadato editor-only di una Description è la posizione sulla flow board.
  // L'immagine è un campo dati diretto (desc.image), non un metadato editor.
  if (!desc.position) return null;
  return { position: desc.position };
}

// buildChoiceEditorMetadata rimosso: endingText è già flat sulla choice.
// Mantenuto come stub per compatibilità con chiamate esistenti.
function buildChoiceEditorMetadata(_choice) {
  return null;
}

function esc(str) {
  return String(str || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function truncate(str, max) {
  str = String(str || "");
  return str.length > max ? str.slice(0, max - 1) + "…" : str;
}

function pruneEmpty(object) {
  return Object.fromEntries(
    Object.entries(object).filter(([, value]) => {
      if (value === null || value === undefined || value === "") return false;
      if (Array.isArray(value) && value.length === 0) return false;
      if (typeof value === "object" && !Array.isArray(value) && Object.keys(value).length === 0) return false;
      return true;
    })
  );
}

const ARMOR_FAMILY_SPECS = [
  {
    familyId: "light_armor",
    armorType: "light",
    label: "Armature leggere",
    rarityByTier: ["common", "uncommon", "rare"],
    effectIdsByTier: [[], [], ["check_bonus"]],
    variants: [
      { id: "cuoio", name: "Cuoio" },
      { id: "giaco_di_cuoio", name: "Giaco di cuoio" },
      { id: "cuoio_borchiato", name: "Cuoio borchiato" }
    ]
  },
  {
    familyId: "medium_armor",
    armorType: "medium",
    label: "Armature medie",
    rarityByTier: ["uncommon", "rare", "mythic"],
    effectIdsByTier: [[], ["crit_guard"], ["crit_guard", "guarded_surge"]],
    variants: [
      { id: "cotta_di_maglia", name: "Cotta di maglia" },
      { id: "corazza_a_scaglie", name: "Corazza a scaglie" },
      { id: "brigantina", name: "Brigantina" }
    ]
  },
  {
    familyId: "heavy_armor",
    armorType: "heavy",
    label: "Armature pesanti",
    rarityByTier: ["uncommon", "rare", "mythic"],
    effectIdsByTier: [[], ["crit_guard"], ["crit_guard", "guarded_surge"]],
    variants: [
      { id: "armatura_a_bande", name: "Armatura a bande" },
      { id: "armatura_completa", name: "Armatura completa" },
      { id: "corazza_di_piastre", name: "Corazza di piastre" }
    ]
  }
];

const SHIELD_FAMILY_SPECS = [
  {
    familyId: "light_shield",
    label: "Scudi leggeri",
    rarityByTier: ["common", "uncommon", "rare"],
    effectIdsByTier: [["guarded_surge"], ["guarded_surge", "crit_guard"], ["guarded_surge", "crit_guard", "cleanse_exposed"]],
    variants: [
      { id: "buckler", name: "Buckler" },
      { id: "scudo_rotondo", name: "Scudo rotondo" },
      { id: "targa", name: "Targa" }
    ]
  },
  {
    familyId: "heavy_shield",
    label: "Scudi pesanti",
    rarityByTier: ["uncommon", "rare", "mythic"],
    effectIdsByTier: [["guarded_surge"], ["guarded_surge", "crit_guard"], ["guarded_surge", "crit_guard", "ember_retaliation"]],
    variants: [
      { id: "scudo_pesante", name: "Scudo pesante" },
      { id: "scudo_a_torre", name: "Scudo a torre" },
      { id: "pavese", name: "Pavese" }
    ]
  }
];

function buildArmorTierPresets() {
  return ARMOR_FAMILY_SPECS.flatMap((family) =>
    family.variants.flatMap((variant) =>
      [1, 2, 3].map((tier) => ({
        id: `${variant.id}_${tier}`,
        name: `${variant.name} ${"\u2605".repeat(tier)}`,
        category: "armor",
        rarity: family.rarityByTier[tier - 1],
        familyId: family.familyId,
        armorType: family.armorType,
        tier,
        effectIds: [...(family.effectIdsByTier[tier - 1] || [])]
      }))
    )
  );
}

function buildShieldTierPresets() {
  return SHIELD_FAMILY_SPECS.flatMap((family) =>
    family.variants.flatMap((variant) =>
      [1, 2, 3].map((tier) => ({
        id: `${variant.id}_${tier}`,
        name: `${variant.name} ${"\u2605".repeat(tier)}`,
        category: "shield",
        rarity: family.rarityByTier[tier - 1],
        familyId: family.familyId,
        tier,
        effectIds: [...(family.effectIdsByTier[tier - 1] || [])]
      }))
    )
  );
}

const BASE_TIER_LOOT_PRESETS = [
  { id: "coins", name: "Monete", category: "treasure", rarity: "common", effectIds: ["trade_value"] },
  { id: "healing_potion", name: "Pozione curativa \u2605", category: "consumable", rarity: "common", tier: 1, effectIds: ["restore_hp"] },
  { id: "healing_potion_2", name: "Pozione curativa \u2605\u2605", category: "consumable", rarity: "uncommon", tier: 2, effectIds: ["restore_hp"] },
  { id: "healing_potion_3", name: "Pozione curativa \u2605\u2605\u2605", category: "consumable", rarity: "rare", tier: 3, effectIds: ["restore_hp"] },
  { id: "travel_rations", name: "Razioni da viaggio \u2605", category: "consumable", rarity: "common", tier: 1, effectIds: ["restore_hp", "recover_boost"] },
  { id: "travel_rations_2", name: "Razioni da viaggio \u2605\u2605", category: "consumable", rarity: "uncommon", tier: 2, effectIds: ["restore_hp", "recover_boost"] },
  { id: "travel_rations_3", name: "Razioni da viaggio \u2605\u2605\u2605", category: "consumable", rarity: "rare", tier: 3, effectIds: ["restore_hp", "recover_boost"] },
  { id: "alchemic_fire", name: "Fuoco alchemico \u2605", category: "consumable", rarity: "common", tier: 1, effectIds: ["direct_damage"] },
  { id: "alchemic_fire_2", name: "Fuoco alchemico \u2605\u2605", category: "consumable", rarity: "uncommon", tier: 2, effectIds: ["direct_damage", "apply_staggered"] },
  { id: "alchemic_fire_3", name: "Fuoco alchemico \u2605\u2605\u2605", category: "consumable", rarity: "rare", tier: 3, effectIds: ["direct_damage", "apply_staggered", "bonus_damage"] },
  { id: "warding_dust", name: "Polvere di guardia \u2605", category: "consumable", rarity: "common", tier: 1, effectIds: ["defense_potion"] },
  { id: "warding_dust_2", name: "Polvere di guardia \u2605\u2605", category: "consumable", rarity: "uncommon", tier: 2, effectIds: ["defense_potion", "guarded_surge"] },
  { id: "warding_dust_3", name: "Polvere di guardia \u2605\u2605\u2605", category: "consumable", rarity: "rare", tier: 3, effectIds: ["defense_potion", "guarded_surge", "crit_guard"] },
  { id: "phoenix_tear", name: "Lacrima della Fenice \u2605", category: "consumable", rarity: "uncommon", tier: 1, effectIds: ["restore_all"] },
  { id: "phoenix_tear_2", name: "Lacrima della Fenice \u2605\u2605", category: "consumable", rarity: "rare", tier: 2, effectIds: ["restore_all", "recover_boost"] },
  { id: "phoenix_tear_3", name: "Lacrima della Fenice \u2605\u2605\u2605", category: "consumable", rarity: "mythic", tier: 3, effectIds: ["restore_all", "recover_boost", "focus_surge"] },
  { id: "torch", name: "Torcia", category: "utility", rarity: "common", effectIds: [] },
  { id: "rope", name: "Corda", category: "utility", rarity: "common", effectIds: [] },
  { id: "flint_and_steel", name: "Acciarino e Pietra Focaia", category: "utility", rarity: "common", effectIds: [] },
  { id: "wood_bundle", name: "Legno", category: "material", rarity: "common", familyId: "wood", variantId: "wood_bundle", effectIds: ["trade_value"] },
  { id: "raw_iron", name: "Ferro grezzo", category: "material", rarity: "common", familyId: "raw_iron", variantId: "raw_iron", effectIds: ["trade_value"] },
  { id: "leather_strip", name: "Pelle", category: "material", rarity: "common", familyId: "leather", variantId: "leather_strip", effectIds: ["trade_value"] },
  { id: "cloth_scrap", name: "Stoffa", category: "material", rarity: "common", familyId: "cloth", variantId: "cloth_scrap", effectIds: ["trade_value"] },
  { id: "herb_bundle", name: "Erbe", category: "material", rarity: "common", familyId: "herbs", variantId: "herb_bundle", effectIds: ["trade_value"] },
  { id: "crystal_shard", name: "Cristalli", category: "material", rarity: "common", familyId: "crystals", variantId: "crystal_shard", effectIds: ["trade_value"] },
  { id: "scale_fragment", name: "Squame", category: "material", rarity: "common", familyId: "scales", variantId: "scale_fragment", effectIds: ["trade_value"] },
  { id: "grappling_hook", name: "Rampino", category: "utility", rarity: "uncommon", effectIds: [] },
  { id: "daga_1", name: "Daga \u2605", category: "weapon", rarity: "common", familyId: "dagger", tier: 1, effectIds: [] },
  { id: "daga_2", name: "Daga \u2605\u2605", category: "weapon", rarity: "uncommon", familyId: "dagger", tier: 2, effectIds: ["bonus_damage"] },
  { id: "daga_3", name: "Daga \u2605\u2605\u2605", category: "weapon", rarity: "rare", familyId: "dagger", tier: 3, effectIds: ["bonus_damage", "cleanse_exposed"] },
  { id: "stiletto_1", name: "Stiletto \u2605", category: "weapon", rarity: "common", familyId: "dagger", tier: 1, effectIds: [] },
  { id: "stiletto_2", name: "Stiletto \u2605\u2605", category: "weapon", rarity: "uncommon", familyId: "dagger", tier: 2, effectIds: ["bonus_damage"] },
  { id: "stiletto_3", name: "Stiletto \u2605\u2605\u2605", category: "weapon", rarity: "rare", familyId: "dagger", tier: 3, effectIds: ["bonus_damage", "cleanse_exposed"] },
  { id: "kryss_1", name: "Kryss \u2605", category: "weapon", rarity: "common", familyId: "dagger", tier: 1, effectIds: [] },
  { id: "kryss_2", name: "Kryss \u2605\u2605", category: "weapon", rarity: "uncommon", familyId: "dagger", tier: 2, effectIds: ["bonus_damage"] },
  { id: "kryss_3", name: "Kryss \u2605\u2605\u2605", category: "weapon", rarity: "rare", familyId: "dagger", tier: 3, effectIds: ["bonus_damage", "cleanse_exposed"] },
  { id: "spada_1", name: "Spada \u2605", category: "weapon", rarity: "common", familyId: "blade_1h", tier: 1, effectIds: [] },
  { id: "spada_2", name: "Spada \u2605\u2605", category: "weapon", rarity: "uncommon", familyId: "blade_1h", tier: 2, effectIds: [] },
  { id: "spada_3", name: "Spada \u2605\u2605\u2605", category: "weapon", rarity: "rare", familyId: "blade_1h", tier: 3, effectIds: ["cleanse_exposed"] },
  { id: "gladio_1", name: "Gladio \u2605", category: "weapon", rarity: "common", familyId: "blade_1h", tier: 1, effectIds: [] },
  { id: "gladio_2", name: "Gladio \u2605\u2605", category: "weapon", rarity: "uncommon", familyId: "blade_1h", tier: 2, effectIds: [] },
  { id: "gladio_3", name: "Gladio \u2605\u2605\u2605", category: "weapon", rarity: "rare", familyId: "blade_1h", tier: 3, effectIds: ["cleanse_exposed"] },
  { id: "scimitarra_1", name: "Scimitarra \u2605", category: "weapon", rarity: "common", familyId: "blade_1h", tier: 1, effectIds: [] },
  { id: "scimitarra_2", name: "Scimitarra \u2605\u2605", category: "weapon", rarity: "uncommon", familyId: "blade_1h", tier: 2, effectIds: [] },
  { id: "scimitarra_3", name: "Scimitarra \u2605\u2605\u2605", category: "weapon", rarity: "rare", familyId: "blade_1h", tier: 3, effectIds: ["cleanse_exposed"] },
  { id: "zweihander_1", name: "Zweihänder \u2605", category: "weapon", rarity: "uncommon", familyId: "blade_2h", tier: 1, effectIds: [] },
  { id: "zweihander_2", name: "Zweihänder \u2605\u2605", category: "weapon", rarity: "rare", familyId: "blade_2h", tier: 2, effectIds: ["apply_staggered"] },
  { id: "zweihander_3", name: "Zweihänder \u2605\u2605\u2605", category: "weapon", rarity: "mythic", familyId: "blade_2h", tier: 3, effectIds: ["apply_staggered", "bonus_damage"] },
  { id: "flamberga_1", name: "Flamberga \u2605", category: "weapon", rarity: "uncommon", familyId: "blade_2h", tier: 1, effectIds: [] },
  { id: "flamberga_2", name: "Flamberga \u2605\u2605", category: "weapon", rarity: "rare", familyId: "blade_2h", tier: 2, effectIds: ["apply_staggered"] },
  { id: "flamberga_3", name: "Flamberga \u2605\u2605\u2605", category: "weapon", rarity: "mythic", familyId: "blade_2h", tier: 3, effectIds: ["apply_staggered", "bonus_damage"] },
  { id: "claymore_1", name: "Claymore \u2605", category: "weapon", rarity: "uncommon", familyId: "blade_2h", tier: 1, effectIds: [] },
  { id: "claymore_2", name: "Claymore \u2605\u2605", category: "weapon", rarity: "rare", familyId: "blade_2h", tier: 2, effectIds: ["apply_staggered"] },
  { id: "claymore_3", name: "Claymore \u2605\u2605\u2605", category: "weapon", rarity: "mythic", familyId: "blade_2h", tier: 3, effectIds: ["apply_staggered", "bonus_damage"] },
  { id: "randello_1", name: "Randello \u2605", category: "weapon", rarity: "common", familyId: "blunt_1h", tier: 1, effectIds: [] },
  { id: "randello_2", name: "Randello \u2605\u2605", category: "weapon", rarity: "uncommon", familyId: "blunt_1h", tier: 2, effectIds: ["apply_staggered"] },
  { id: "randello_3", name: "Randello \u2605\u2605\u2605", category: "weapon", rarity: "rare", familyId: "blunt_1h", tier: 3, effectIds: ["apply_staggered"] },
  { id: "mazza_1", name: "Mazza \u2605", category: "weapon", rarity: "common", familyId: "blunt_1h", tier: 1, effectIds: [] },
  { id: "mazza_2", name: "Mazza \u2605\u2605", category: "weapon", rarity: "uncommon", familyId: "blunt_1h", tier: 2, effectIds: ["apply_staggered"] },
  { id: "mazza_3", name: "Mazza \u2605\u2605\u2605", category: "weapon", rarity: "rare", familyId: "blunt_1h", tier: 3, effectIds: ["apply_staggered"] },
  { id: "martello_da_guerra_1", name: "Martello da guerra \u2605", category: "weapon", rarity: "common", familyId: "blunt_1h", tier: 1, effectIds: [] },
  { id: "martello_da_guerra_2", name: "Martello da guerra \u2605\u2605", category: "weapon", rarity: "uncommon", familyId: "blunt_1h", tier: 2, effectIds: ["apply_staggered"] },
  { id: "martello_da_guerra_3", name: "Martello da guerra \u2605\u2605\u2605", category: "weapon", rarity: "rare", familyId: "blunt_1h", tier: 3, effectIds: ["apply_staggered"] },
  { id: "grande_mazza_1", name: "Grande mazza \u2605", category: "weapon", rarity: "uncommon", familyId: "blunt_2h", tier: 1, effectIds: ["apply_staggered"] },
  { id: "grande_mazza_2", name: "Grande mazza \u2605\u2605", category: "weapon", rarity: "rare", familyId: "blunt_2h", tier: 2, effectIds: ["apply_staggered"] },
  { id: "grande_mazza_3", name: "Grande mazza \u2605\u2605\u2605", category: "weapon", rarity: "mythic", familyId: "blunt_2h", tier: 3, effectIds: ["apply_staggered", "bonus_damage"] },
  { id: "maglio_1", name: "Maglio \u2605", category: "weapon", rarity: "uncommon", familyId: "blunt_2h", tier: 1, effectIds: ["apply_staggered"] },
  { id: "maglio_2", name: "Maglio \u2605\u2605", category: "weapon", rarity: "rare", familyId: "blunt_2h", tier: 2, effectIds: ["apply_staggered"] },
  { id: "maglio_3", name: "Maglio \u2605\u2605\u2605", category: "weapon", rarity: "mythic", familyId: "blunt_2h", tier: 3, effectIds: ["apply_staggered", "bonus_damage"] },
  { id: "maul_1", name: "Maul \u2605", category: "weapon", rarity: "uncommon", familyId: "blunt_2h", tier: 1, effectIds: ["apply_staggered"] },
  { id: "maul_2", name: "Maul \u2605\u2605", category: "weapon", rarity: "rare", familyId: "blunt_2h", tier: 2, effectIds: ["apply_staggered"] },
  { id: "maul_3", name: "Maul \u2605\u2605\u2605", category: "weapon", rarity: "mythic", familyId: "blunt_2h", tier: 3, effectIds: ["apply_staggered", "bonus_damage"] },
  { id: "arco_leggero_1", name: "Arco leggero \u2605", category: "weapon", rarity: "common", familyId: "bow", tier: 1, effectIds: [] },
  { id: "arco_leggero_2", name: "Arco leggero \u2605\u2605", category: "weapon", rarity: "uncommon", familyId: "bow", tier: 2, effectIds: [] },
  { id: "arco_leggero_3", name: "Arco leggero \u2605\u2605\u2605", category: "weapon", rarity: "rare", familyId: "bow", tier: 3, effectIds: ["guaranteed_crit"] },
  { id: "arco_corto_1", name: "Arco corto \u2605", category: "weapon", rarity: "common", familyId: "bow", tier: 1, effectIds: [] },
  { id: "arco_corto_2", name: "Arco corto \u2605\u2605", category: "weapon", rarity: "uncommon", familyId: "bow", tier: 2, effectIds: [] },
  { id: "arco_corto_3", name: "Arco corto \u2605\u2605\u2605", category: "weapon", rarity: "rare", familyId: "bow", tier: 3, effectIds: ["guaranteed_crit"] },
  { id: "arco_del_cacciatore_1", name: "Arco del cacciatore \u2605", category: "weapon", rarity: "common", familyId: "bow", tier: 1, effectIds: [] },
  { id: "arco_del_cacciatore_2", name: "Arco del cacciatore \u2605\u2605", category: "weapon", rarity: "uncommon", familyId: "bow", tier: 2, effectIds: [] },
  { id: "arco_del_cacciatore_3", name: "Arco del cacciatore \u2605\u2605\u2605", category: "weapon", rarity: "rare", familyId: "bow", tier: 3, effectIds: ["guaranteed_crit"] },
  { id: "bastone_da_viaggio_1", name: "Bastone da viaggio \u2605", category: "weapon", rarity: "common", familyId: "staff", tier: 1, effectIds: ["recover_boost"] },
  { id: "bastone_da_viaggio_2", name: "Bastone da viaggio \u2605\u2605", category: "weapon", rarity: "uncommon", familyId: "staff", tier: 2, effectIds: ["recover_boost"] },
  { id: "bastone_da_viaggio_3", name: "Bastone da viaggio \u2605\u2605\u2605", category: "weapon", rarity: "rare", familyId: "staff", tier: 3, effectIds: ["recover_boost", "check_bonus"] },
  { id: "bastone_ferrato_1", name: "Bastone ferrato \u2605", category: "weapon", rarity: "common", familyId: "staff", tier: 1, effectIds: ["recover_boost"] },
  { id: "bastone_ferrato_2", name: "Bastone ferrato \u2605\u2605", category: "weapon", rarity: "uncommon", familyId: "staff", tier: 2, effectIds: ["recover_boost"] },
  { id: "bastone_ferrato_3", name: "Bastone ferrato \u2605\u2605\u2605", category: "weapon", rarity: "rare", familyId: "staff", tier: 3, effectIds: ["recover_boost", "check_bonus"] },
  { id: "bastone_degli_anziani_1", name: "Bastone degli Anziani \u2605", category: "weapon", rarity: "common", familyId: "staff", tier: 1, effectIds: ["recover_boost"] },
  { id: "bastone_degli_anziani_2", name: "Bastone degli Anziani \u2605\u2605", category: "weapon", rarity: "uncommon", familyId: "staff", tier: 2, effectIds: ["recover_boost"] },
  { id: "bastone_degli_anziani_3", name: "Bastone degli Anziani \u2605\u2605\u2605", category: "weapon", rarity: "rare", familyId: "staff", tier: 3, effectIds: ["recover_boost", "check_bonus"] },
  ...buildArmorTierPresets(),
  ...buildShieldTierPresets(),
  { id: "elmo_guardia_1", name: "Elmo della Guardia \u2605", category: "helm", rarity: "rare", effectIds: ["crit_guard"] },
  { id: "mantello_ombra_2", name: "Mantello dell'Ombra \u2605\u2605", category: "cloak", rarity: "mythic", effectIds: ["cleanse_exposed", "recover_boost"] },
  { id: "road_boots", name: "Stivali da viaggio", category: "boots", rarity: "common", effectIds: [] },
  { id: "trail_boots", name: "Stivali da pista", category: "boots", rarity: "uncommon", effectIds: ["fatigue_relief", "focus_surge"] },
  { id: "iron_boots", name: "Stivali ferrati", category: "boots", rarity: "rare", effectIds: ["fatigue_relief", "guarded_surge"] },
  { id: "forge_boots", name: "Stivali della Forgia", category: "boots", rarity: "mythic", effectIds: ["fatigue_relief", "guarded_surge", "ember_retaliation"] },
  { id: "anello_difesa_1", name: "Anello della Difesa \u2605", category: "ring", rarity: "rare", effectIds: ["defense_surge"] },
  { id: "anello_lama_2", name: "Anello della Lama \u2605\u2605", category: "ring", rarity: "mythic", effectIds: ["bonus_damage", "focus_surge"] },
  { id: "anello_sapere_3", name: "Anello del Sapere \u2605\u2605\u2605", category: "ring", rarity: "legendary", effectIds: ["check_bonus", "focus_surge", "recover_boost"] },
  { id: "ancient_key", name: "Chiave antica", category: "key", rarity: "uncommon", effectIds: ["key_access"], lockId: "magister_archive" },
  { id: "arcane_scroll", name: "Pergamena arcana", category: "treasure", rarity: "rare", effectIds: ["check_bonus", "trade_value"] },
  { id: "ritual_gem", name: "Gemma rituale", category: "relic", rarity: "rare", effectIds: ["trade_value"] },
  { id: "wolf_pelt", name: "Pelle di lupo", category: "material", rarity: "common", familyId: "leather", variantId: "wolf_pelt", effectIds: ["trade_value"] },
  { id: "eclipse_blade", name: "Lama dell'Eclisse", category: "relic", rarity: "unique", effectIds: ["bonus_damage", "guaranteed_crit", "apply_staggered"] },
  { id: "crown_of_embers", name: "Corona delle Braci", category: "relic", rarity: "mythic", effectIds: ["ember_retaliation", "crit_guard", "guarded_surge"] },
  { id: "lama_del_silenzio", name: "Lama del Silenzio", category: "relic", rarity: "unique", effectIds: ["guaranteed_crit", "apply_staggered", "bonus_damage"] },
  { id: "scudo_del_re_morto", name: "Scudo del Re Morto", category: "relic", rarity: "unique", effectIds: ["guarded_surge", "crit_guard", "ember_retaliation"] },
  { id: "custom", name: "Personalizzato", category: "", rarity: "common", effectIds: [] }
];

const ACCESSORY_CATEGORY_VALUES = ["helm", "cloak", "ring", "boots"];

const ACCESSORY_SLOT_OPTIONS = [
  { value: "helm", label: "Elmo", pickerId: "accessory_helm", prefix: "elmo", defaultSetId: "guardia" },
  { value: "cloak", label: "Mantello", pickerId: "accessory_cloak", prefix: "mantello", defaultSetId: "ombra" },
  { value: "ring", label: "Anello", pickerId: "accessory_ring", prefix: "anello", defaultSetId: "difesa" },
  { value: "boots", label: "Stivali", pickerId: "accessory_boots", prefix: "stivali", defaultSetId: "passo" }
];

const ACCESSORY_SET_OPTIONS = [
  { value: "guardia", label: "Guardia", suffix: "della Guardia", rarityByTier: ["uncommon", "rare", "mythic"], effectIdsByTier: [["crit_guard"], ["crit_guard"], ["crit_guard"]] },
  { value: "baluardo", label: "Baluardo", suffix: "del Baluardo", rarityByTier: ["uncommon", "rare", "mythic"], effectIdsByTier: [["guarded_surge"], ["guarded_surge"], ["guarded_surge"]] },
  { value: "mente", label: "Mente", suffix: "della Mente", rarityByTier: ["uncommon", "rare", "mythic"], effectIdsByTier: [["focus_surge"], ["focus_surge"], ["focus_surge"]] },
  { value: "respiro", label: "Respiro", suffix: "del Respiro", rarityByTier: ["uncommon", "rare", "mythic"], effectIdsByTier: [["recover_boost"], ["recover_boost"], ["recover_boost"]] },
  { value: "ombra", label: "Ombra", suffix: "dell'Ombra", rarityByTier: ["uncommon", "rare", "mythic"], effectIdsByTier: [["cleanse_exposed"], ["cleanse_exposed"], ["cleanse_exposed"]] },
  { value: "fuga", label: "Fuga", suffix: "della Fuga", rarityByTier: ["uncommon", "rare", "mythic"], effectIdsByTier: [["escape"], ["escape"], ["escape"]] },
  { value: "passo", label: "Passo", suffix: "del Passo", rarityByTier: ["uncommon", "rare", "mythic"], effectIdsByTier: [["fatigue_relief"], ["fatigue_relief"], ["fatigue_relief"]] },
  { value: "difesa", label: "Difesa", suffix: "della Difesa", rarityByTier: ["uncommon", "rare", "mythic"], effectIdsByTier: [["defense_surge"], ["defense_surge"], ["defense_surge"]] },
  { value: "lama", label: "Lama", suffix: "della Lama", rarityByTier: ["uncommon", "rare", "mythic"], effectIdsByTier: [["bonus_damage"], ["bonus_damage"], ["bonus_damage"]] },
  { value: "sapere", label: "Sapere", suffix: "del Sapere", rarityByTier: ["uncommon", "rare", "mythic"], effectIdsByTier: [["check_bonus"], ["check_bonus"], ["check_bonus"]] },
  { value: "preda", label: "Preda", suffix: "della Preda", rarityByTier: ["uncommon", "rare", "mythic"], effectIdsByTier: [["guaranteed_crit"], ["guaranteed_crit"], ["guaranteed_crit"]] },
  { value: "impatto", label: "Impatto", suffix: "dell'Impatto", rarityByTier: ["uncommon", "rare", "mythic"], effectIdsByTier: [["apply_staggered"], ["apply_staggered"], ["apply_staggered"]] },
  { value: "brace", label: "Brace", suffix: "della Brace", rarityByTier: ["uncommon", "rare", "mythic"], effectIdsByTier: [["ember_retaliation"], ["ember_retaliation"], ["ember_retaliation"]] },
  { value: "sigillo", label: "Sigillo", suffix: "del Sigillo", rarityByTier: ["uncommon", "rare", "mythic"], effectIdsByTier: [["key_access"], ["key_access"], ["key_access"]] },
  { value: "mercato", label: "Mercato", suffix: "del Mercato", rarityByTier: ["uncommon", "rare", "mythic"], effectIdsByTier: [["trade_value"], ["trade_value"], ["trade_value"]] }
];

const ACCESSORY_PICKER_PRESETS = ACCESSORY_SLOT_OPTIONS.map((slot) => ({
  id: slot.pickerId,
  name: `Accessorio: ${slot.label}`,
  category: slot.value,
  rarity: "uncommon",
  effectIds: [],
  accessoryPicker: true,
  effectSetId: slot.defaultSetId,
  tier: 1
}));

const ACCESSORY_LOOT_PRESETS = ACCESSORY_SLOT_OPTIONS.flatMap((slot) =>
  ACCESSORY_SET_OPTIONS.flatMap((setOption) =>
    [1, 2, 3].map((tier) => ({
      id: `${slot.prefix}_${setOption.value}_${tier}`,
      name: `${slot.label} ${setOption.suffix} ${"\u2605".repeat(tier)}`,
      category: slot.value,
      rarity: setOption.rarityByTier[tier - 1],
      effectIds: [...(setOption.effectIdsByTier[tier - 1] || [])],
      effectSetId: setOption.value,
      tier,
      slot: slot.value,
      accessoryConcrete: true
    }))
  )
);

const TIER_LOOT_PRESETS = [
  ...BASE_TIER_LOOT_PRESETS.filter((entry) => !ACCESSORY_CATEGORY_VALUES.includes(entry.category)),
  ...ACCESSORY_PICKER_PRESETS
];

LOOT_PRESETS.splice(0, LOOT_PRESETS.length, ...BASE_TIER_LOOT_PRESETS, ...ACCESSORY_LOOT_PRESETS);

const LEGACY_LOOT_PRESET_ALIASES = {
  dagger: "daga_1",
  pugnale: "daga_1",
  pugnale_1: "daga_1",
  pugnale_2: "daga_2",
  pugnale_3: "daga_3",
  "spada corta": "gladio_1",
  long_dagger: "daga_2",
  shadow_blade: "daga_3",
  spada_corta_1: "gladio_1",
  spada_corta_2: "gladio_2",
  spada_corta_3: "gladio_3",
  spadone: "zweihander_1",
  ascia_da_guerra_1: "spada_1",
  ascia_da_guerra_2: "spada_2",
  ascia_da_guerra_3: "spada_3",
  rusted_blade: "spada_1",
  short_sword: "gladio_2",
  longsword: "spada_3",
  ancestor_blade: "spada_3",
  hatchet: "spada_1",
  battle_axe: "zweihander_2",
  spadone_1: "zweihander_1",
  spadone_2: "zweihander_2",
  spadone_3: "zweihander_3",
  "ascia a due mani": "flamberga_1",
  ascia_2h_1: "flamberga_1",
  ascia_2h_2: "flamberga_2",
  ascia_2h_3: "flamberga_3",
  alabarda: "claymore_1",
  alabarda_1: "claymore_1",
  alabarda_2: "claymore_2",
  alabarda_3: "claymore_3",
  war_axe: "flamberga_2",
  great_axe: "claymore_3",
  flagello_1: "maglio_1",
  flagello_2: "maglio_2",
  flagello_3: "maglio_3",
  shortbow: "arco_leggero_1",
  short_bow: "arco_corto_2",
  hunter_bow: "arco_del_cacciatore_3",
  war_bow: "arco_del_cacciatore_3",
  walking_staff: "bastone_da_viaggio_1",
  iron_staff: "bastone_ferrato_2",
  elder_staff: "bastone_degli_anziani_3",
  void_staff: "bastone_degli_anziani_3",
  camp_buckler: "buckler_1",
  iron_shield: "scudo_rotondo_1",
  tower_shield: "scudo_a_torre_1",
  miner_helm: "elmo_guardia_1",
  bronze_helm: "elmo_guardia_1",
  war_helm: "elmo_guardia_1",
  hobnail_boots: "stivali_baluardo_1",
  traveler_cloak: "mantello_ombra_2",
  shadow_cloak: "mantello_ombra_2",
  veil_of_ashes: "mantello_ombra_3",
  road_boots: "stivali_passo_1",
  trail_boots: "stivali_passo_2",
  iron_boots: "stivali_baluardo_2",
  forge_boots: "stivali_brace_3",
  silver_ring: "anello_difesa_1",
  seal_ring: "anello_sapere_3",
  void_ring: "anello_lama_2",
  chain_mail: "cotta_di_maglia_1"
};

function activeLootPresets() {
  return TIER_LOOT_PRESETS;
}

function selectableLootPresets({ includeCustom = true, includeAccessoryPickers = false } = {}) {
  const seen = new Map();
  allLootPresetsForLookup().forEach((preset) => {
    if (!includeCustom && preset.id === "custom") return;
    if (!includeAccessoryPickers && preset.accessoryPicker) return;
    if (!seen.has(preset.id)) seen.set(preset.id, preset);
  });
  return [...seen.values()];
}

function lootPresetTierInfo(preset) {
  if (!preset) return { value: "all", label: "Tutti i tier", sort: 0 };
  const explicitTier = Number(preset.tier) || ((preset.name.match(/\u2605/g) || []).length);
  if (explicitTier >= 1 && explicitTier <= 3) {
    return { value: `tier_${explicitTier}`, label: "\u2605".repeat(explicitTier), sort: explicitTier };
  }
  if (preset.category === "relic" || ["mythic", "legendary", "unique"].includes(preset.rarity)) {
    return { value: "special", label: "Speciale", sort: 4 };
  }
  return { value: "base", label: "Base", sort: 0 };
}

const ACCESSORY_SET_TOOLTIP_TEXT = {
  guardia: "Riduce l'impatto dei critici subiti.",
  baluardo: "Rafforza la difesa dopo una guardia efficace.",
  mente: "Migliora il colpo successivo dopo difesa o concentrazione.",
  respiro: "Potenzia recupero di stamina e recupero fiato.",
  ombra: "Pulisce Scoperto e protegge l'esposizione.",
  fuga: "Migliora ritirata e uscita dal combattimento.",
  passo: "Riduce la fatica e sostiene la stamina.",
  difesa: "Aumenta la difesa passiva.",
  lama: "Aumenta il danno inflitto.",
  sapere: "Aumenta le prove e i check.",
  preda: "Aumenta pressione offensiva e precisione letale.",
  impatto: "Può sbilanciare il nemico.",
  brace: "Infligge ritorsione quando difendi.",
  sigillo: "Aiuta ad aprire passaggi e rami narrativi.",
  mercato: "Aumenta valore di vendita e resa economica."
};

function lootPresetFamilyInfo(preset) {
  if (!preset) return { value: "misc", label: "Altro", sort: 999 };
  if (preset.accessoryConcrete) {
    const setLabel = accessorySetOptionByValue(preset.effectSetId)?.label || preset.effectSetId || "Accessorio";
    return {
      value: `accessory_${preset.effectSetId}`,
      label: `Set ${setLabel}`,
      sort: 50,
      tooltip: ACCESSORY_SET_TOOLTIP_TEXT[preset.effectSetId] || "Bonus passivo del set accessorio."
    };
  }
  if (preset.category === "weapon") {
    if (preset.familyId === "dagger") return { value: "dagger", label: "Pugnali", sort: 9 };
    if (preset.familyId === "blade_1h") return { value: "blade_1h", label: "Lame 1 mano", sort: 10 };
    if (preset.familyId === "blade_2h") return { value: "blade_2h", label: "Lame 2 mani", sort: 11 };
    if (preset.familyId === "blunt_1h") return { value: "blunt_1h", label: "Mazze 1 mano", sort: 12 };
    if (preset.familyId === "blunt_2h") return { value: "blunt_2h", label: "Mazze 2 mani", sort: 13 };
    if (preset.familyId === "bow") return { value: "bow", label: "Archi", sort: 14 };
    if (preset.familyId === "staff") return { value: "staff", label: "Bastoni", sort: 15 };
    if (/^(daga|stiletto|kryss|pugnale)/.test(preset.id)) return { value: "dagger", label: "Pugnali", sort: 9 };
    if (/^(spada_|gladio|scimitarra)/.test(preset.id)) return { value: "blade_1h", label: "Lame 1 mano", sort: 10 };
    if (/^(zweihander|flamberga|claymore|spadone|ascia_2h|alabarda)/.test(preset.id)) return { value: "blade_2h", label: "Lame 2 mani", sort: 11 };
    if (/^(randello|mazza_|martello_da_guerra)/.test(preset.id)) return { value: "blunt_1h", label: "Mazze 1 mano", sort: 12 };
    if (/^(grande_mazza|maglio|maul)/.test(preset.id)) return { value: "blunt_2h", label: "Mazze 2 mani", sort: 13 };
    if (/^arco_/.test(preset.id)) return { value: "bow", label: "Archi", sort: 14 };
    if (/^bastone_/.test(preset.id)) return { value: "staff", label: "Bastoni", sort: 15 };
    return { value: "weapon_misc", label: "Armi", sort: 19 };
  }
  if (preset.category === "armor") {
    if (preset.familyId === "light_armor") return { value: "armor_light", label: "Armature leggere", sort: 30 };
    if (preset.familyId === "medium_armor") return { value: "armor_medium", label: "Armature medie", sort: 31 };
    if (preset.familyId === "heavy_armor") return { value: "armor_heavy", label: "Armature pesanti", sort: 32 };
    if (preset.armorType === "light") return { value: "armor_light", label: "Armature leggere", sort: 30 };
    if (preset.armorType === "medium") return { value: "armor_medium", label: "Armature medie", sort: 31 };
    if (preset.armorType === "heavy") return { value: "armor_heavy", label: "Armature pesanti", sort: 32 };
    return { value: "armor_misc", label: "Armature", sort: 39 };
  }
  if (preset.category === "shield") {
    if (preset.familyId === "heavy_shield") return { value: "shield_heavy", label: "Scudi pesanti", sort: 34 };
    if (preset.familyId === "light_shield") return { value: "shield_light", label: "Scudi leggeri", sort: 33 };
    return /^scudo_pesante|^scudo_a_torre|^pavese/.test(preset.id)
      ? { value: "shield_heavy", label: "Scudi pesanti", sort: 34 }
      : { value: "shield_light", label: "Scudi leggeri", sort: 33 };
  }
  if (preset.category === "material") {
    if (preset.familyId === "wood") return { value: "material_wood", label: "Materiali | Legno", sort: 60 };
    if (preset.familyId === "raw_iron") return { value: "material_raw_iron", label: "Materiali | Ferro grezzo", sort: 61 };
    if (preset.familyId === "leather") return { value: "material_leather", label: "Materiali | Pelle", sort: 62 };
    if (preset.familyId === "cloth") return { value: "material_cloth", label: "Materiali | Stoffa", sort: 63 };
    if (preset.familyId === "herbs") return { value: "material_herbs", label: "Materiali | Erbe", sort: 64 };
    if (preset.familyId === "crystals") return { value: "material_crystals", label: "Materiali | Cristalli", sort: 65 };
    if (preset.familyId === "scales") return { value: "material_scales", label: "Materiali | Squame", sort: 66 };
    return { value: "material_misc", label: "Materiali", sort: 69 };
  }
  if (preset.category === "consumable") return { value: "consumable", label: "Consumabili", sort: 70 };
  if (preset.category === "utility") return { value: "utility", label: "Strumenti", sort: 74 };
  if (preset.category === "key") return { value: "key", label: "Chiavi narrative", sort: 75 };
  if (preset.category === "treasure") {
    if ((preset.effectIds || []).includes("check_bonus")) return { value: "treasure_arcane", label: "Arcani e documenti", sort: 76 };
    return { value: "treasure", label: "Tesori", sort: 77 };
  }
  if (preset.category === "relic") return { value: "relic", label: "Reliquie", sort: 78 };
  if (preset.id === "custom") return { value: "custom", label: "Personalizzato", sort: 90 };
  const categoryLabel = ITEM_CATEGORIES.find((entry) => entry.value === preset.category)?.label || preset.category || "Altro";
  return { value: `category_${preset.category || "misc"}`, label: categoryLabel, sort: 95 };
}

function compareLootPresets(a, b) {
  const familyA = lootPresetFamilyInfo(a);
  const familyB = lootPresetFamilyInfo(b);
  return familyA.sort - familyB.sort
    || familyA.label.localeCompare(familyB.label, "it")
    || a.name.localeCompare(b.name, "it")
    || a.id.localeCompare(b.id, "it");
}

function lootPresetSearchText(preset) {
  const tierInfo = lootPresetTierInfo(preset);
  const familyInfo = lootPresetFamilyInfo(preset);
  const categoryLabel = ITEM_CATEGORIES.find((entry) => entry.value === preset.category)?.label || preset.category || "Altro";
  return normalizeLootLookupKey([
    preset.id,
    preset.name,
    categoryLabel,
    familyInfo.label,
    tierInfo.label,
    accessorySetOptionByValue(preset.effectSetId)?.label || "",
    ...(preset.effectIds || []).map((effectId) => effectPresetLabel(effectId))
  ].join(" "));
}

function lootPresetPrimarySearchText(preset) {
  const tierInfo = lootPresetTierInfo(preset);
  const familyInfo = lootPresetFamilyInfo(preset);
  const categoryLabel = ITEM_CATEGORIES.find((entry) => entry.value === preset.category)?.label || preset.category || "Altro";
  return normalizeLootLookupKey([
    preset.id,
    preset.name,
    categoryLabel,
    familyInfo.label,
    tierInfo.label,
    accessorySetOptionByValue(preset.effectSetId)?.label || ""
  ].join(" "));
}

function mountLootPicker(select, value = "", options = {}) {
  if (!select) return null;

  const settings = {
    includeCustom: options.includeCustom !== false,
    includeNone: options.includeNone !== false,
    includeAccessoryPickers: Boolean(options.includeAccessoryPickers),
    compact: Boolean(options.compact),
    searchPlaceholder: options.searchPlaceholder || "Cerca item...",
    noneLabel: options.noneLabel || "— Nessuno —"
  };

  let api = select._lootPickerApi || null;
  if (!api) {
    const root = document.createElement("div");
    root.className = `loot-picker ${settings.compact ? "loot-picker--compact" : ""}`.trim();

    const filters = document.createElement("div");
    filters.className = "loot-picker-filters";

    const tierField = document.createElement("label");
    tierField.className = "loot-picker-field";
    const tierLabel = document.createElement("span");
    tierLabel.className = "loot-picker-field__label";
    tierLabel.textContent = "Tier";
    const tierSelect = document.createElement("select");
    tierSelect.className = "loot-picker-control";

    const familyField = document.createElement("label");
    familyField.className = "loot-picker-field";
    const familyLabel = document.createElement("span");
    familyLabel.className = "loot-picker-field__label";
    familyLabel.textContent = "Famiglia";
    const familySelect = document.createElement("select");
    familySelect.className = "loot-picker-control";

    const searchField = document.createElement("label");
    searchField.className = "loot-picker-field loot-picker-field--search";
    const searchLabel = document.createElement("span");
    searchLabel.className = "loot-picker-field__label";
    searchLabel.textContent = settings.compact ? "Ricerca live" : "Cerca loot";
    const searchInput = document.createElement("input");
    searchInput.className = "loot-picker-control";
    searchInput.type = "search";
    searchInput.placeholder = settings.searchPlaceholder;
    searchInput.autocomplete = "off";
    const familyHint = document.createElement("p");
    familyHint.className = "loot-picker-family-hint";
    const suggestions = document.createElement("div");
    suggestions.className = "loot-picker-suggestions";
    const itemSelect = document.createElement("select");
    itemSelect.className = "loot-picker-control loot-picker-control--item";

    tierField.append(tierLabel, tierSelect);
    familyField.append(familyLabel, familySelect);
    searchField.append(searchLabel, searchInput);
    filters.append(tierField, familyField, searchField);
    root.append(filters, familyHint, suggestions);
    if (!settings.compact) root.appendChild(itemSelect);
    select.style.display = "none";
    select.insertAdjacentElement("afterend", root);

    let syncing = false;
    const state = { tier: "all", family: "all", search: "", value: value || "" };

    function presets() {
      return selectableLootPresets({
        includeCustom: settings.includeCustom,
        includeAccessoryPickers: settings.includeAccessoryPickers
      }).sort(compareLootPresets);
    }

    function renderTierOptions(allPresets) {
      const map = new Map([["all", { value: "all", label: "Tutti i tier", sort: -1 }]]);
      allPresets.forEach((preset) => {
        const info = lootPresetTierInfo(preset);
        if (!map.has(info.value)) map.set(info.value, info);
      });
      const optionsData = [...map.values()].sort((a, b) => a.sort - b.sort || a.label.localeCompare(b.label, "it"));
      tierSelect.innerHTML = "";
      optionsData.forEach((optionData) => {
        const option = document.createElement("option");
        option.value = optionData.value;
        option.textContent = optionData.label;
        if (optionData.value === state.tier) option.selected = true;
        tierSelect.appendChild(option);
      });
      if (![...map.keys()].includes(state.tier)) state.tier = "all";
    }

    function renderFamilyOptions(allPresets) {
      const tierFiltered = state.tier === "all"
        ? allPresets
        : allPresets.filter((preset) => lootPresetTierInfo(preset).value === state.tier);
      const map = new Map([["all", { value: "all", label: "Tutte le famiglie" }]]);
      tierFiltered.forEach((preset) => {
        const info = lootPresetFamilyInfo(preset);
        if (!map.has(info.value)) map.set(info.value, info);
      });
      const optionsData = [...map.values()].sort((a, b) =>
        a.value === "all" ? -1
          : b.value === "all" ? 1
          : (a.sort ?? 999) - (b.sort ?? 999) || a.label.localeCompare(b.label, "it")
      );
      familySelect.innerHTML = "";
      optionsData.forEach((optionData) => {
        const option = document.createElement("option");
        option.value = optionData.value;
        option.textContent = optionData.label;
        if (optionData.tooltip) option.title = optionData.tooltip;
        if (optionData.value === state.family) option.selected = true;
        familySelect.appendChild(option);
      });
      if (!optionsData.some((entry) => entry.value === state.family)) state.family = "all";
      const activeFamily = optionsData.find((entry) => entry.value === state.family) || optionsData[0] || null;
      familySelect.title = activeFamily?.tooltip || "";
      familyHint.textContent = activeFamily?.tooltip || "";
      familyHint.style.display = activeFamily?.tooltip ? "" : "none";
    }

    function visiblePresets(allPresets) {
      const query = normalizeLootLookupKey(state.search);
      return allPresets.filter((preset) => {
        if (state.tier !== "all" && lootPresetTierInfo(preset).value !== state.tier) return false;
        if (state.family !== "all" && lootPresetFamilyInfo(preset).value !== state.family) return false;
        if (query && !lootPresetPrimarySearchText(preset).includes(query)) return false;
        return true;
      }).sort(compareLootPresets);
    }

    function applyPresetSelection(presetId = "") {
      syncing = true;
      select.value = presetId || "";
      select.dispatchEvent(new Event("change", { bubbles: true }));
      syncing = false;
      syncFromSelect({ preserveFilters: true });
    }

    function renderSuggestions(filtered) {
      const query = normalizeLootLookupKey(state.search);
      suggestions.innerHTML = "";
      if (!query) {
        suggestions.style.display = "none";
        itemSelect.classList.remove("loot-picker-control--muted");
        return;
      }
      const topMatches = filtered.slice(0, 8);
      if (!topMatches.length) {
        const empty = document.createElement("div");
        empty.className = "loot-picker-suggestions__empty";
        empty.textContent = "Nessun item corrisponde a questa ricerca.";
        suggestions.appendChild(empty);
        suggestions.style.display = "grid";
        itemSelect.classList.add("loot-picker-control--muted");
        return;
      }
      topMatches.forEach((preset) => {
        const option = document.createElement("button");
        option.type = "button";
        option.className = "loot-picker-suggestion";
        const familyInfo = lootPresetFamilyInfo(preset);
        option.title = familyInfo.tooltip || "";
        option.innerHTML = `<strong>${esc(preset.name)}</strong><span>${esc(familyInfo.label)}</span>`;
        option.addEventListener("click", () => {
          state.value = preset.id;
          searchInput.value = "";
          state.search = "";
          applyPresetSelection(preset.id);
        });
        suggestions.appendChild(option);
      });
      suggestions.style.display = "grid";
      itemSelect.classList.add("loot-picker-control--muted");
    }

    function render() {
      const allPresets = presets();
      renderTierOptions(allPresets);
      renderFamilyOptions(allPresets);
      const filtered = visiblePresets(allPresets);
      renderSuggestions(filtered);
      itemSelect.innerHTML = "";
      if (settings.includeNone) {
        const noneOpt = document.createElement("option");
        noneOpt.value = "";
        noneOpt.textContent = settings.noneLabel;
        if (!state.value) noneOpt.selected = true;
        itemSelect.appendChild(noneOpt);
      }
      filtered.forEach((preset) => {
        const option = document.createElement("option");
        option.value = preset.id;
        option.textContent = `${preset.name} — ${lootPresetFamilyInfo(preset).label}`;
        if (preset.id === state.value) option.selected = true;
        itemSelect.appendChild(option);
      });
      if (!filtered.some((preset) => preset.id === state.value) && settings.includeNone) {
        itemSelect.value = "";
      }
    }

    function syncFromSelect({ preserveFilters = false } = {}) {
      state.value = select.value || "";
      const preset = lootPresetById(state.value);
      if (!preserveFilters && preset) {
        state.tier = lootPresetTierInfo(preset).value;
        state.family = lootPresetFamilyInfo(preset).value;
        state.search = "";
        searchInput.value = "";
      }
      render();
    }

    tierSelect.addEventListener("change", (event) => {
      state.tier = event.target.value || "all";
      render();
    });
    familySelect.addEventListener("change", (event) => {
      state.family = event.target.value || "all";
      render();
    });
      searchInput.addEventListener("input", (event) => {
      state.search = event.target.value || "";
      render();
    });
    searchInput.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      const firstSuggestion = suggestions.querySelector(".loot-picker-suggestion");
      if (!firstSuggestion) return;
      event.preventDefault();
      firstSuggestion.click();
    });
    itemSelect.addEventListener("change", (event) => {
      applyPresetSelection(event.target.value || "");
    });
    select.addEventListener("change", () => {
      if (syncing) return;
      syncFromSelect();
    });

    api = {
      root,
      itemSelect,
      setValue(nextValue = "", { preserveFilters = false } = {}) {
        state.value = nextValue || "";
        select.value = state.value;
        syncFromSelect({ preserveFilters });
      }
    };
    select._lootPickerApi = api;
  }

  api.root.classList.toggle("loot-picker--compact", settings.compact);
  if (api.itemSelect) {
    if (settings.compact) {
      api.itemSelect.remove();
    } else if (!api.itemSelect.isConnected) {
      api.root.appendChild(api.itemSelect);
    }
  }
  api.setValue(value || "", { preserveFilters: false });
  return api;
}

function accessorySlotOptionByValue(value) {
  return ACCESSORY_SLOT_OPTIONS.find((entry) => entry.value === value || entry.pickerId === value) || null;
}

function accessorySetOptionByValue(value) {
  return ACCESSORY_SET_OPTIONS.find((entry) => entry.value === value) || null;
}

function isAccessoryCategory(category = "") {
  return ACCESSORY_CATEGORY_VALUES.includes(normalizeString(category) || "");
}

function accessoryPickerPresetId(slot) {
  return accessorySlotOptionByValue(slot)?.pickerId || "";
}

function accessoryPreset(slot, effectSetId, tier = 1) {
  const normalizedTier = Math.min(3, Math.max(1, Number(tier) || 1));
  const slotOption = accessorySlotOptionByValue(slot);
  if (!slotOption) return null;
  return ACCESSORY_LOOT_PRESETS.find((entry) =>
    entry.slot === slotOption.value
    && entry.effectSetId === effectSetId
    && entry.tier === normalizedTier
  ) || null;
}

function allLootPresetsForLookup() {
  return [...activeLootPresets(), ...ACCESSORY_LOOT_PRESETS];
}

function normalizeLootLookupKey(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/\s*[?]+/g, "")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function deriveAccessoryStateFromLoot(loot) {
  const directSlot = accessorySlotOptionByValue(loot?.category || "");
  const directSet = accessorySetOptionByValue(loot?.effectSetId || "");
  const directTier = Number(loot?.tier) || 1;
  if (directSlot && directSet) {
    return { slot: directSlot.value, effectSetId: directSet.value, tier: Math.min(3, Math.max(1, directTier)) };
  }

  const preset = lootPresetById(loot?.itemId || loot?.itemName || "");
  if (preset?.accessoryConcrete) {
    return { slot: preset.slot, effectSetId: preset.effectSetId, tier: preset.tier };
  }

  if (directSlot) {
    return { slot: directSlot.value, effectSetId: directSlot.defaultSetId || "guardia", tier: 1 };
  }
  return null;
}

function applyAccessoryPresetToLoot(loot, slot, effectSetId, tier = 1) {
  const slotOption = accessorySlotOptionByValue(slot);
  const fallbackSetId = slotOption?.defaultSetId || "guardia";
  const preset = accessoryPreset(slot, effectSetId, tier) || accessoryPreset(slot, fallbackSetId, 1);
  if (!preset) return;
  loot.itemId = preset.id;
  loot.itemName = preset.name;
  loot.category = preset.category;
  loot.rarity = preset.rarity || "rare";
  loot.effectIds = [...(preset.effectIds || [])];
  loot.effectSetId = preset.effectSetId;
  loot.tier = preset.tier;
}

function lootPresetById(presetId) {
  const normalizedId = normalizeString(presetId);
  const aliasedId = LEGACY_LOOT_PRESET_ALIASES[normalizedId] || normalizedId;
  return allLootPresetsForLookup().find((entry) => entry.id === aliasedId) || null;
}

function lootLabelFromPreset(presetId) {
  const preset = lootPresetById(presetId);
  if (!preset) return presetId || "";
  return preset.id === "custom" ? "" : preset.name;
}

function findLootPresetId(itemName) {
  const rawValue = normalizeString(itemName);
  const aliasedId = LEGACY_LOOT_PRESET_ALIASES[rawValue] || rawValue;
  const normalizedLookup = normalizeLootLookupKey(itemName);
  const preset = allLootPresetsForLookup().find((entry) =>
    entry.id === aliasedId
    || entry.name === itemName
    || normalizeLootLookupKey(entry.name) === normalizedLookup
    || normalizeLootLookupKey(entry.id) === normalizedLookup
  );
  if (preset?.accessoryConcrete) {
    return accessoryPickerPresetId(preset.slot) || "custom";
  }
  return preset?.id || "custom";
}

function createLootFromPreset(presetId) {
  const preset = lootPresetById(presetId) || lootPresetById("coins");
  const loot = {
    itemId: preset.id === "custom" ? "" : preset.id,
    itemName: preset.id === "custom" ? "" : preset.name,
    quantity: 1,
    lockId: preset.lockId || "",
    category: preset.category || "",
    rarity: preset.rarity || "common",
    armorType: preset.category === "armor" ? (preset.armorType || "light") : "light",
    effectIds: [...(preset.effectIds || [])],
    expanded: true
  };
  if (preset?.accessoryPicker) {
    applyAccessoryPresetToLoot(loot, preset.category, preset.effectSetId || "guardia", preset.tier || 1);
  } else if (preset?.accessoryConcrete) {
    loot.effectSetId = preset.effectSetId;
    loot.tier = preset.tier;
  }
  return loot;
}

function hydrateLootSelect(select, value = "") {
  select.innerHTML = "";
  const noneOpt = document.createElement("option");
  noneOpt.value = "";
  noneOpt.textContent = "Nessuno";
  if (!value) noneOpt.selected = true;
  select.appendChild(noneOpt);
  activeLootPresets().forEach((loot) => {
    const option = document.createElement("option");
    option.value = loot.id;
    const categoryLabel = ITEM_CATEGORIES.find((entry) => entry.value === loot.category)?.label || loot.category || "Altro";
    const rarityLabel = ITEM_RARITIES.find((entry) => entry.value === loot.rarity)?.label || loot.rarity || "Comune";
    option.textContent = loot.id === "custom"
      ? loot.name
      : `${loot.name} | ${categoryLabel} | ${rarityLabel}`;
    if (loot.id === value) option.selected = true;
    select.appendChild(option);
  });
}

function hydrateLootSelect(select, value = "") {
  select.innerHTML = "";
  const noneOpt = document.createElement("option");
  noneOpt.value = "";
  noneOpt.textContent = "Nessuno";
  if (!value) noneOpt.selected = true;
  select.appendChild(noneOpt);
  activeLootPresets().forEach((loot) => {
    const option = document.createElement("option");
    option.value = loot.id;
    const categoryLabel = ITEM_CATEGORIES.find((entry) => entry.value === loot.category)?.label || loot.category || "Altro";
    const rarityLabel = ITEM_RARITIES.find((entry) => entry.value === loot.rarity)?.label || loot.rarity || "Comune";
    option.textContent = loot.accessoryPicker
      ? `${loot.name} | scegli set e stelle`
      : loot.id === "custom"
        ? loot.name
        : `${loot.name} | ${categoryLabel} | ${rarityLabel}`;
    if (loot.id === value) option.selected = true;
    select.appendChild(option);
  });
}

function hydrateLootSelect(select, value = "", options = {}) {
  const presets = selectableLootPresets({
    includeCustom: options.includeCustom !== false,
    includeAccessoryPickers: Boolean(options.includeAccessoryPickers)
  });
  select.innerHTML = "";
  const noneOpt = document.createElement("option");
  noneOpt.value = "";
  noneOpt.textContent = options.noneLabel || "Nessuno";
  if (!value) noneOpt.selected = true;
  select.appendChild(noneOpt);
  presets.forEach((loot) => {
    const option = document.createElement("option");
    option.value = loot.id;
    const categoryLabel = ITEM_CATEGORIES.find((entry) => entry.value === loot.category)?.label || loot.category || "Altro";
    const rarityLabel = ITEM_RARITIES.find((entry) => entry.value === loot.rarity)?.label || loot.rarity || "Comune";
    option.textContent = loot.id === "custom"
      ? loot.name
      : `${loot.name} | ${categoryLabel} | ${rarityLabel}`;
    if (loot.id === value) option.selected = true;
    select.appendChild(option);
  });
  if (!options.noPicker) mountLootPicker(select, value, options);
}

function hydrateKeySelect(select, value = "") {
  select.innerHTML = "";
  const noneOpt = document.createElement("option");
  noneOpt.value = "";
  noneOpt.textContent = "Seleziona chiave";
  if (!value) noneOpt.selected = true;
  select.appendChild(noneOpt);

  const seen = new Set();
  const addOption = (lockId, label) => {
    if (!lockId || seen.has(lockId)) return;
    seen.add(lockId);
    const opt = document.createElement("option");
    opt.value = lockId;
    opt.textContent = `${label} (${lockId})`;
    if (lockId === value) opt.selected = true;
    select.appendChild(opt);
  };

  activeLootPresets()
    .filter((preset) => preset.category === "key" && preset.lockId)
    .forEach((preset) => addOption(preset.lockId, preset.name));

  if (state?.adventure) {
    const allLoot = collectAllAdventureLoot();
    allLoot
      .filter((loot) => loot.category === "key" && loot.lockId)
      .forEach((loot) => addOption(normalizeString(loot.lockId), loot.itemName || loot.itemId || loot.lockId));
  }

  if (value && !seen.has(value)) {
    const opt = document.createElement("option");
    opt.value = value;
    opt.textContent = `${value} | chiave non trovata nell'avventura`;
    opt.selected = true;
    select.appendChild(opt);
  }
}

function collectAdventureKeyOptions() {
  if (!state?.adventure) return [];
  const seen = new Set();
  return collectAllAdventureLoot()
    .filter((loot) => loot.category === "key" && normalizeString(loot.lockId))
    .reduce((acc, loot) => {
      const lockId = normalizeString(loot.lockId);
      if (!lockId || seen.has(lockId)) return acc;
      seen.add(lockId);
      acc.push({
        lockId,
        label: loot.itemName || loot.itemId || lockId
      });
      return acc;
    }, []);
}

function hydrateKeySelect(select, value = "") {
  select.innerHTML = "";
  const keys = collectAdventureKeyOptions();

  const noneOpt = document.createElement("option");
  noneOpt.value = "";
  noneOpt.textContent = keys.length
    ? "Seleziona chiave"
    : "Non ci sono chiavi nella tua avventura";
  noneOpt.disabled = !keys.length;
  if (!value) noneOpt.selected = true;
  select.appendChild(noneOpt);

  keys.forEach(({ lockId, label }) => {
    const opt = document.createElement("option");
    opt.value = lockId;
    opt.textContent = `${label} (${lockId})`;
    if (lockId === value) opt.selected = true;
    select.appendChild(opt);
  });

  if (value && !keys.some((entry) => entry.lockId === value)) {
    const opt = document.createElement("option");
    opt.value = value;
    opt.textContent = `${value} | chiave non trovata nell'avventura`;
    opt.selected = true;
    select.appendChild(opt);
  }
}

function hydrateQuestItemSelect(select, value = "") {
  select.innerHTML = "";
  const noneOpt = document.createElement("option");
  noneOpt.value = "";
  noneOpt.textContent = "Seleziona quest item";
  if (!value) noneOpt.selected = true;
  select.appendChild(noneOpt);

  const seen = new Set();
  const addOption = (questItemId, label) => {
    if (!questItemId || seen.has(questItemId)) return;
    seen.add(questItemId);
    const opt = document.createElement("option");
    opt.value = questItemId;
    opt.textContent = `${label} (${questItemId})`;
    if (questItemId === value) opt.selected = true;
    select.appendChild(opt);
  };

  if (state?.adventure) {
    collectAllAdventureLoot()
      .filter((loot) => loot.questItem && loot.questItemId)
      .forEach((loot) => addOption(normalizeString(loot.questItemId), loot.itemName || loot.itemId || loot.questItemId));
  }

  if (value && !seen.has(value)) {
    const opt = document.createElement("option");
    opt.value = value;
    opt.textContent = `${value} ? quest item non trovato nell'avventura`;
    opt.selected = true;
    select.appendChild(opt);
  }
}

function normalizeLootDraftToTierCatalog(loot) {
  if (!loot) return loot;
  const preset = lootPresetById(loot.itemId || loot.itemName);
  if (!preset || preset.id === "custom") return loot;
  const normalizedPreset = normalizeLootPresetRarityByTier(preset);
  return {
    ...loot,
    itemId: normalizedPreset.id,
    itemName: normalizedPreset.name,
    category: normalizedPreset.category || loot.category || "",
    rarity: normalizedPreset.rarity || loot.rarity || "common",
    armorType: normalizedPreset.category === "armor" ? (normalizedPreset.armorType || loot.armorType || "light") : (loot.armorType || "light"),
    effectIds: [...(normalizedPreset.effectIds || loot.effectIds || [])],
    effectSetId: normalizedPreset.effectSetId || loot.effectSetId || "",
    tier: normalizedPreset.tier || loot.tier
  };
}

const TIER_ALLOWED_RARITIES = {
  1: ["common", "uncommon"],
  2: ["uncommon", "rare"],
  3: ["rare", "mythic"]
};

const RARITY_PROGRESS_ORDER = ["common", "uncommon", "rare", "epic", "mythic", "legendary", "unique"];

function inferLootTierValue(snapshot) {
  const explicitTier = Number(snapshot?.tier);
  if (explicitTier >= 1 && explicitTier <= 3) return explicitTier;
  const starTier = (snapshot?.name?.match(/\u2605/g) || []).length;
  return starTier >= 1 && starTier <= 3 ? starTier : null;
}

function normalizeRarityForTier(rarity = "common", tier = null) {
  const normalizedRarity = normalizeString(rarity) || "common";
  if (normalizedRarity === "unique" || !tier || !TIER_ALLOWED_RARITIES[tier]) return normalizedRarity;
  if (TIER_ALLOWED_RARITIES[tier].includes(normalizedRarity)) return normalizedRarity;
  const allowed = TIER_ALLOWED_RARITIES[tier];
  const rarityIndex = RARITY_PROGRESS_ORDER.indexOf(normalizedRarity);
  const minIndex = RARITY_PROGRESS_ORDER.indexOf(allowed[0]);
  const maxIndex = RARITY_PROGRESS_ORDER.indexOf(allowed[allowed.length - 1]);
  if (rarityIndex !== -1 && rarityIndex < minIndex) return allowed[0];
  return allowed[allowed.length - 1];
}

function normalizeLootPresetRarityByTier(preset) {
  if (!preset || preset.id === "custom") return preset;
  const tier = inferLootTierValue(preset);
  if (!tier) return preset;
  return {
    ...preset,
    rarity: normalizeRarityForTier(preset.rarity || "common", tier)
  };
}

function applyTierRarityRuleToPresetList(list) {
  list.forEach((preset) => {
    Object.assign(preset, normalizeLootPresetRarityByTier(preset));
  });
}

applyTierRarityRuleToPresetList(BASE_TIER_LOOT_PRESETS);
applyTierRarityRuleToPresetList(ACCESSORY_PICKER_PRESETS);
applyTierRarityRuleToPresetList(ACCESSORY_LOOT_PRESETS);

MONSTER_PRESETS.forEach((preset) => {
  preset.loot = (preset.loot || []).map((loot) => normalizeLootDraftToTierCatalog(loot));
});

function buildSkillCheckConfig(container, ev, desc, choice) {
  const basics = document.createElement("div");
  basics.className = "choice-settings-grid";

  const attrLabel = document.createElement("label");
  attrLabel.textContent = "Attributo";
  const attrSel = document.createElement("select");
  SKILLS.forEach(({ value, label }) => {
    const opt = document.createElement("option");
    opt.value = value;
    opt.textContent = label;
    attrSel.appendChild(opt);
  });
  attrSel.value = ev.attribute || "";
  attrSel.addEventListener("change", (e) => {
    ev.attribute = e.target.value;
    onChoiceChange(desc, choice);
  });
  attrLabel.appendChild(attrSel);

  const diffLabel = document.createElement("label");
  diffLabel.textContent = "Difficolta";
  const diffInput = document.createElement("input");
  diffInput.type = "number";
  diffInput.min = 1;
  diffInput.max = 30;
  diffInput.value = ev.difficulty || 12;
  diffInput.style.width = "60px";
  diffInput.addEventListener("input", (e) => {
    ev.difficulty = parseInt(e.target.value) || 12;
    onChoiceChange(desc, choice);
  });
  diffLabel.appendChild(diffInput);
  basics.append(attrLabel, diffLabel);

  const burnToggle = buildBehaviorToggleCard({
    title: "Consuma la prova anche se fallisce",
    description: "Se attiva, il lettore non puo ritentare questo skill check dopo un fallimento.",
    checked: Boolean(ev.burnOnFailure),
    onToggle: (value) => {
      ev.burnOnFailure = value;
      onChoiceChange(desc, choice);
    },
    tone: "burn"
  });

  container.append(
    basics,
    burnToggle,
    makeHint("Riuscita:"),
    buildBranchRow("Destinazione successo", ev.successBranch, desc, choice),
    makeHint("Fallimento:"),
    buildBranchRow("Destinazione fallimento", ev.failureBranch, desc, choice)
  );
}

function buildEventFieldRow(titleText, hintText, control) {
  const wrap = document.createElement("div");
  wrap.className = "choice-event-row event-config-field";

  const copy = document.createElement("div");
  copy.className = "choice-event-row__copy";

  const title = document.createElement("strong");
  title.className = "choice-event-row__title";
  title.textContent = titleText;

  const hint = document.createElement("span");
  hint.className = "choice-event-row__hint";
  hint.textContent = hintText;

  copy.append(title, hint);

  const slot = document.createElement("div");
  slot.className = "choice-event-row__control";
  if (control) slot.appendChild(control);

  wrap.append(copy, slot);
  return wrap;
}

function buildEventSection(titleText, hintText, ...children) {
  const section = document.createElement("section");
  section.className = "event-config-section";

  const heading = document.createElement("div");
  heading.className = "event-config-section__heading";

  const title = document.createElement("h4");
  title.className = "event-config-section__title";
  title.textContent = titleText;

  const hint = document.createElement("p");
  hint.className = "event-config-section__hint";
  hint.textContent = hintText;

  heading.append(title, hint);

  const body = document.createElement("div");
  body.className = "event-config-section__body";
  children.filter(Boolean).forEach((child) => body.appendChild(child));

  section.append(heading, body);
  return section;
}

function buildSkillCheckConfig(container, ev, desc, choice) {
  const basics = document.createElement("div");
  basics.className = "choice-settings-grid";

  const attrLabel = document.createElement("label");
  attrLabel.textContent = "Attributo";
  const attrSel = document.createElement("select");
  SKILLS.forEach(({ value, label }) => {
    const opt = document.createElement("option");
    opt.value = value;
    opt.textContent = label;
    attrSel.appendChild(opt);
  });
  attrSel.value = ev.attribute || "";
  attrSel.addEventListener("change", (event) => {
    ev.attribute = event.target.value;
    onChoiceChange(desc, choice);
  });
  attrLabel.appendChild(attrSel);

  const diffLabel = document.createElement("label");
  diffLabel.textContent = "Difficolta";
  const diffInput = document.createElement("input");
  diffInput.type = "number";
  diffInput.min = 1;
  diffInput.max = 30;
  diffInput.value = ev.difficulty || 12;
  diffInput.addEventListener("input", (event) => {
    ev.difficulty = parseInt(event.target.value, 10) || 12;
    onChoiceChange(desc, choice);
  });
  diffLabel.appendChild(diffInput);

  basics.append(attrLabel, diffLabel);

  const burnToggle = buildBehaviorToggleCard({
    title: "Consuma la prova anche se fallisce",
    description: "Se attiva, il lettore non puo ritentare questo skill check dopo un fallimento.",
    checked: Boolean(ev.burnOnFailure),
    onToggle: (value) => {
      ev.burnOnFailure = value;
      onChoiceChange(desc, choice);
    },
    tone: "burn"
  });

  container.append(
    buildEventSection(
      "Impostazioni della prova",
      "Scegli l'attributo coinvolto e la soglia da raggiungere.",
      basics,
      burnToggle
    ),
    buildEventSection(
      "Ramo di riuscita",
      "Decidi dove porta la prova quando il controllo viene superato.",
      buildBranchRow("Destinazione successo", ev.successBranch, desc, choice)
    ),
    buildEventSection(
      "Ramo di fallimento",
      "Decidi cosa accade quando la prova viene mancata.",
      buildBranchRow("Destinazione fallimento", ev.failureBranch, desc, choice, {
        hydrateTargetSelect: hydrateFailureTargetSelect
      })
    )
  );
}

function buildRequirementConfig(container, ev, desc, choice) {
  const currentMode = getRequirementMode(ev);
  const summaryCard = document.createElement("div");
  summaryCard.className = "event-config-mini-card event-config-mini-card--requirement";
  const modeSelect = document.createElement("select");
  [
    { value: "presetItem", label: "Oggetto dal catalogo" },
    { value: "key", label: "Chiave" },
    { value: "questItem", label: "Quest item unico" }
  ].forEach(({ value, label }) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    modeSelect.appendChild(option);
  });
  modeSelect.value = currentMode;

  const valueControl = document.createElement("select");

  function syncRequirement() {
    const mode = modeSelect.value;
    ev.requirementMode = mode;
    ev.itemId = mode === "presetItem" ? (valueControl.value || null) : null;
    ev.lockId = mode === "key" ? (valueControl.value || null) : null;
    ev.questItemId = mode === "questItem" ? (valueControl.value || null) : null;
    onChoiceChange(desc, choice);
  }

  function hydrateRequirementValueControl() {
    const mode = modeSelect.value;
    if (mode === "key") {
      hydrateKeySelect(valueControl, ev.lockId || "");
    } else if (mode === "questItem") {
      hydrateQuestItemSelect(valueControl, ev.questItemId || "");
    } else {
      hydrateLootSelect(valueControl, ev.itemId || "", {
        includeCustom: false,
        compact: true,
        noneLabel: "Seleziona oggetto"
      });
    }
  }

  const refreshRequirementSummary = () => {
    const meta = requirementModeMeta(modeSelect.value);
    valueLabel.textContent = meta.valueLabel;
    summaryCard.innerHTML = `
      <div class="event-config-mini-card__head">
        <strong>${esc(meta.label)}: ${esc(requirementValueSummary(ev))}</strong>
        <span class="event-config-mini-card__meta">${esc(meta.hint)}</span>
      </div>
    `;
  };

  modeSelect.addEventListener("change", () => {
    hydrateRequirementValueControl();
    syncRequirement();
    refreshRequirementSummary();
  });
  valueControl.addEventListener("change", () => {
    syncRequirement();
    refreshRequirementSummary();
  });
  hydrateRequirementValueControl();

  const grid = document.createElement("div");
  grid.className = "choice-settings-grid";

  const modeLabel = document.createElement("label");
  modeLabel.textContent = "Controlla";
  modeLabel.appendChild(modeSelect);

  const valueLabel = document.createElement("label");
  valueLabel.textContent = requirementModeMeta(currentMode).valueLabel;
  valueLabel.appendChild(valueControl);

  grid.append(modeLabel, valueLabel);
  refreshRequirementSummary();

  container.append(
    buildEventSection(
      "Controllo di requisito",
      "Decidi cosa deve possedere il lettore. Se il requisito e soddisfatto, il ramo positivo consuma sempre una unita dell'oggetto richiesto.",
      summaryCard,
      grid
    ),
    buildEventSection(
      "Requisito soddisfatto",
      "Questo ramo parte quando il lettore possiede davvero l'oggetto, la chiave o il quest item richiesto.",
      buildBranchRow("Destinazione soddisfatto", ev.metBranch, desc, choice)
    ),
    buildEventSection(
      "Requisito non soddisfatto",
      "Usa questo ramo per blocchi, deviazioni, messaggi di rifiuto o alternative narrative.",
      buildBranchRow("Destinazione non soddisfatto", ev.unmetBranch, desc, choice)
    )
  );
}

function buildLootEventConfig(container, ev, desc, choice) {
  ev.loot = Array.isArray(ev.loot) ? ev.loot : [];

  const lootList = document.createElement("div");
  const summary = document.createElement("div");
  summary.className = "event-config-inline-note";

  function rerenderLoot() {
    summary.textContent = ev.loot.length
      ? `${ev.loot.length} ricompens${ev.loot.length === 1 ? "a" : "e"} configurat${ev.loot.length === 1 ? "a" : "e"} nel nodo.`
      : "Nessun loot configurato: puoi aggiungere monete, consumabili, equipaggiamento o oggetti chiave.";
    renderLootList(lootList, ev.loot, {
      rerender: rerenderLoot,
      onChange: () => onChoiceChange(desc, choice)
    });
  }

  const addBar = document.createElement("div");
  addBar.className = "event-config-actions";
  const presetSelect = document.createElement("select");
  hydrateLootSelect(presetSelect, "coins", { includeCustom: false, compact: true });
  const addLootBtn = document.createElement("button");
  addLootBtn.type = "button";
  addLootBtn.textContent = "Aggiungi loot";
  addLootBtn.addEventListener("click", () => {
    ev.loot.push(createLootFromPreset(presetSelect.value || "coins"));
    rerenderLoot();
    onChoiceChange(desc, choice);
  });
  const generateRandomLootBtn = document.createElement("button");
  generateRandomLootBtn.type = "button";
  generateRandomLootBtn.className = "advanced-secondary-btn";
  generateRandomLootBtn.textContent = "Genera loot casuale";
  generateRandomLootBtn.addEventListener("click", () => {
    ev.loot = mergeLootEntries([...(ev.loot || []), ...generateRandomEventLootBundle()]);
    rerenderLoot();
    onChoiceChange(desc, choice);
  });
  addBar.append(presetSelect, addLootBtn, generateRandomLootBtn);

  rerenderLoot();

  container.append(
    buildEventSection(
      "Contenuto del nodo loot",
      "Qui imposti cosa riceve il lettore quando entra in questo evento.",
      summary,
      addBar,
      lootList
    ),
    buildEventSection(
      "Uscita del nodo",
      "Dopo aver assegnato il loot, il flusso prosegue lungo questo ramo.",
      buildBranchRow("Destinazione continua", ev.branch, desc, choice)
    )
  );
}

function buildConditionConfig(container, ev, desc, choice) {
  const conditionSelect = document.createElement("select");
  hydrateConditionSelect(conditionSelect, ev.conditionId || "");
  conditionSelect.addEventListener("change", (event) => {
    ev.conditionId = event.target.value;
    onChoiceChange(desc, choice);
  });

  container.append(
    buildEventSection(
      "Condizione richiesta",
      "Usa questo nodo per verificare un flag o uno stato gia ottenuto dal lettore.",
      buildEventFieldRow(
        "Condition ID",
        "Scegli la condizione che deve risultare attiva nel runtime.",
        conditionSelect
      )
    ),
    buildEventSection(
      "Uscita del nodo",
      "Se la condizione e soddisfatta, il lettore prosegue lungo questo ramo.",
      buildBranchRow("Destinazione continua", ev.branch, desc, choice)
    )
  );
}

function buildTransitionConfig(container, ev, desc, choice) {
  const textArea = document.createElement("textarea");
  textArea.rows = 4;
  textArea.value = ev.text || "";
  textArea.placeholder = "Testo breve di passaggio, stacco o raccordo narrativo";
  textArea.addEventListener("input", (event) => {
    ev.text = event.target.value;
    onChoiceChange(desc, choice);
  });

  container.append(
    buildEventSection(
      "Testo di transizione",
      "Usalo per un breve passaggio intermedio senza aprire una vera scena descrittiva.",
      textArea
    ),
    buildEventSection(
      "Uscita del nodo",
      "La transizione porta il lettore al prossimo nodo della mappa.",
      buildBranchRow("Destinazione continua", ev.branch, desc, choice)
    )
  );
}

function buildShopEventConfig(container, ev, desc, choice) {
  ev.items = Array.isArray(ev.items) ? ev.items : [];

  const picker = document.createElement("select");
  hydrateLootSelect(picker, "", { includeCustom: false, compact: true });

  const addBtn = document.createElement("button");
  addBtn.type = "button";
  addBtn.textContent = "Aggiungi item al negozio";

  const addBar = document.createElement("div");
  addBar.className = "event-config-actions";
  addBar.append(picker, addBtn);

  const list = document.createElement("div");
  list.className = "event-config-list";

  function rerenderItems() {
    list.innerHTML = "";
    if (!ev.items.length) {
      const empty = document.createElement("p");
      empty.className = "event-config-inline-note";
      empty.textContent = "Il negozio e ancora vuoto. Aggiungi un oggetto dal catalogo sopra.";
      list.appendChild(empty);
      return;
    }

    ev.items.forEach((item, index) => {
      const row = document.createElement("div");
      row.className = "event-config-mini-card";

      const head = document.createElement("div");
      head.className = "event-config-mini-card__head";

      const title = document.createElement("strong");
      title.textContent = item.itemName || lootLabelFromPreset(item.itemId) || `Oggetto ${index + 1}`;
      const meta = document.createElement("span");
      meta.className = "event-config-mini-card__meta";
      meta.textContent = [item.category || "categoria libera", item.rarity || "common"].join(" | ");
      head.append(title, meta);

      const fields = document.createElement("div");
      fields.className = "choice-settings-grid";

      const priceLabel = document.createElement("label");
      priceLabel.textContent = "Prezzo";
      const priceInput = document.createElement("input");
      priceInput.type = "number";
      priceInput.min = 0;
      priceInput.value = item.price || 0;
      priceInput.addEventListener("input", (event) => {
        item.price = Math.max(0, parseInt(event.target.value, 10) || 0);
        onChoiceChange(desc, choice);
      });
      priceLabel.appendChild(priceInput);

      const nameLabel = document.createElement("label");
      nameLabel.textContent = "Nome mostrato";
      const nameInput = document.createElement("input");
      nameInput.type = "text";
      nameInput.value = item.itemName || "";
      nameInput.addEventListener("input", (event) => {
        item.itemName = event.target.value;
        onChoiceChange(desc, choice);
      });
      nameLabel.appendChild(nameInput);

      fields.append(priceLabel, nameLabel);

      const removeBtn = document.createElement("button");
      removeBtn.type = "button";
      removeBtn.className = "danger small";
      removeBtn.textContent = "Rimuovi item";
      removeBtn.addEventListener("click", () => {
        ev.items.splice(index, 1);
        onChoiceChange(desc, choice);
        rerenderItems();
      });

      row.append(head, fields, removeBtn);
      list.appendChild(row);
    });
  }

  addBtn.addEventListener("click", () => {
    const preset = lootPresetById(picker.value);
    if (!preset) return;
    ev.items.push({
      itemId: preset.id,
      itemName: preset.name,
      price: 10,
      category: preset.category || "",
      rarity: preset.rarity || "common",
      effectIds: [...(preset.effectIds || [])]
    });
    onChoiceChange(desc, choice);
    rerenderItems();
  });

  rerenderItems();

  container.append(
    buildEventSection(
      "Offerta del negozio",
      "Seleziona gli oggetti venduti e rifinisci prezzo e nome mostrato al lettore.",
      addBar,
      list
    ),
    buildEventSection(
      "Uscita del nodo",
      "Dopo l'interazione col negozio, il flusso continua lungo questo ramo.",
      buildBranchRow("Destinazione continua", ev.branch, desc, choice)
    )
  );
}

function buildDialogueEventConfig(container, ev, desc, choice) {
  ensureDialogueEventDefaults(ev);

  const basics = document.createElement("div");
  basics.className = "choice-settings-grid";

  const npcLabel = document.createElement("label");
  npcLabel.textContent = "Nome del PNG";
  const npcInput = document.createElement("input");
  npcInput.type = "text";
  npcInput.placeholder = "Es. Custode del Sepolcro";
  npcInput.value = ev.npcName || "";
  npcInput.addEventListener("input", (event) => {
    ev.npcName = event.target.value;
    onChoiceChange(desc, choice);
  });
  npcLabel.appendChild(npcInput);

  const responseInfo = document.createElement("div");
  responseInfo.className = "event-config-inline-note";
  const responseCount = Array.isArray(ev.root.responses) ? ev.root.responses.length : 0;
  responseInfo.textContent = responseCount
    ? `Risposte presenti nel nodo: ${responseCount}/4.`
    : "Nessuna risposta ancora definita: il dialogo usera l'uscita lineare.";

  basics.append(npcLabel, responseInfo);

  const speech = document.createElement("textarea");
  speech.rows = 5;
  speech.placeholder = "Battuta iniziale del PNG o apertura del dialogo";
  speech.value = ev.root.npcText || "";
  speech.addEventListener("input", (event) => {
    ev.root.npcText = event.target.value;
    onChoiceChange(desc, choice);
  });

  const responseCards = document.createElement("div");
  responseCards.className = "event-config-list";
  const responses = Array.isArray(ev.root.responses) ? ev.root.responses : [];
  if (!responses.length) {
    const emptyNote = document.createElement("p");
    emptyNote.className = "event-config-inline-note";
    emptyNote.textContent = "Il nodo non ha ancora risposte multiple. In questo caso usa l'uscita lineare qui sotto.";
    responseCards.appendChild(emptyNote);
  } else {
    responses.forEach((response, index) => {
      const card = document.createElement("div");
      card.className = "event-config-mini-card";

      const head = document.createElement("div");
      head.className = "event-config-mini-card__head";
      const title = document.createElement("strong");
      title.textContent = `Risposta ${index + 1}`;
      const meta = document.createElement("span");
      const intentText = dialogueIntentLabel(response.intent);
      const gateText = response.gateType && response.gateType !== "none"
        ? ` — gate: ${dialogueGateLabel(response.gateType)}`
        : "";
      meta.className = "event-config-mini-card__meta";
      meta.textContent = `${intentText}${gateText}`;
      head.append(title, meta);
      card.appendChild(head);

      const textLabel = document.createElement("label");
      textLabel.textContent = "Testo risposta";
      const textInput = document.createElement("input");
      textInput.type = "text";
      textInput.placeholder = "Es. Chi sei davvero?";
      textInput.value = response.text || "";
      textInput.addEventListener("input", (event) => {
        response.text = event.target.value;
        onChoiceChange(desc, choice);
      });
      textLabel.appendChild(textInput);
      card.appendChild(textLabel);

      const controlGrid = document.createElement("div");
      controlGrid.className = "choice-settings-grid";

      const intentLabel = document.createElement("label");
      intentLabel.textContent = "Intento";
      const intentSelect = document.createElement("select");
      DIALOGUE_RESPONSE_INTENTS.forEach(({ value, label }) => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = label;
        if (response.intent === value) option.selected = true;
        intentSelect.appendChild(option);
      });
      intentSelect.addEventListener("change", (event) => {
        response.intent = event.target.value || "ask";
        onChoiceChange(desc, choice);
      });
      intentLabel.appendChild(intentSelect);
      controlGrid.appendChild(intentLabel);

      const gateLabel = document.createElement("label");
      gateLabel.textContent = "Gate";
      const gateSelect = document.createElement("select");
      DIALOGUE_GATE_OPTIONS.forEach(({ value, label }) => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = label;
        if ((response.gateType || "none") === value) option.selected = true;
        gateSelect.appendChild(option);
      });
      gateSelect.addEventListener("change", (event) => {
        response.gateType = event.target.value || "none";
        if (response.gateType === "none") response.gateRefId = "";
        onChoiceChange(desc, choice);
        renderSceneEditor();
      });
      gateLabel.appendChild(gateSelect);
      controlGrid.appendChild(gateLabel);
      card.appendChild(controlGrid);

      if (response.gateType && response.gateType !== "none") {
        const gateRefLabel = document.createElement("label");
        gateRefLabel.textContent = "Riferimento gate";
        const gateRefInput = document.createElement("input");
        gateRefInput.type = "text";
        gateRefInput.placeholder = "ID nodo o chiave di sblocco";
        gateRefInput.value = response.gateRefId || "";
        gateRefInput.addEventListener("input", (event) => {
          response.gateRefId = event.target.value;
          onChoiceChange(desc, choice);
        });
        gateRefLabel.appendChild(gateRefInput);
        card.appendChild(gateRefLabel);
      }

      card.appendChild(buildTargetRow("Destinazione", response.targetId || "", (value) => {
        response.targetId = value || null;
        onChoiceChange(desc, choice);
      }));

      const toggles = document.createElement("div");
      toggles.className = "event-config-list";
      toggles.appendChild(buildBehaviorToggleCard({
        title: "Mostra solo quando sbloccata",
        description: "La risposta resta nascosta finche il giocatore non sblocca la condizione narrativa adatta.",
        checked: Boolean(response.hiddenUntilUnlocked),
        onToggle: (value) => {
          response.hiddenUntilUnlocked = value;
          onChoiceChange(desc, choice);
        },
        tone: "stealth"
      }));
      toggles.appendChild(buildBehaviorToggleCard({
        title: "Usa una sola volta",
        description: "Dopo essere stata scelta, questa risposta viene consumata e non puo riapparire.",
        checked: Boolean(response.once),
        onToggle: (value) => {
          response.once = value;
          onChoiceChange(desc, choice);
        },
        tone: "burn"
      }));
      card.appendChild(toggles);

      const actions = document.createElement("div");
      actions.className = "event-config-actions";
      const removeBtn = document.createElement("button");
      removeBtn.type = "button";
      removeBtn.className = "danger";
      removeBtn.textContent = "Rimuovi risposta";
      removeBtn.addEventListener("click", () => {
        ev.root.responses.splice(index, 1);
        onChoiceChange(desc, choice);
        renderSceneEditor();
      });
      actions.appendChild(removeBtn);
      card.appendChild(actions);

      responseCards.appendChild(card);
    });
  }

  const responseActions = document.createElement("div");
  responseActions.className = "event-config-actions";
  const addResponseBtn = document.createElement("button");
  addResponseBtn.type = "button";
  addResponseBtn.className = "small";
  addResponseBtn.textContent = "+ Aggiungi risposta";
  addResponseBtn.disabled = responses.length >= 4;
  addResponseBtn.addEventListener("click", () => {
    if ((ev.root.responses || []).length >= 4) return;
    ev.root.responses.push(createDialogueResponse());
    onChoiceChange(desc, choice);
    renderSceneEditor();
  });
  responseActions.appendChild(addResponseBtn);

  container.append(
    buildEventSection(
      "Battuta del dialogo",
      "Qui definisci il PNG e la sua apertura. Dalla mappa puoi gia costruire le risposte principali del dialogo.",
      basics,
      speech
    ),
    buildEventSection(
      "Risposte del giocatore",
      "Mantieni il nodo asciutto: massimo 4 risposte visibili e un solo gate principale per ciascuna.",
      responseCards,
      responseActions
    ),
    buildEventSection(
      "Uscita del nodo",
      "Se il dialogo non ha ancora risposte multiple, usa questa uscita lineare come ramo principale.",
      buildBranchRow("Destinazione continua", ev.branch, desc, choice)
    )
  );
}

bootstrap();




