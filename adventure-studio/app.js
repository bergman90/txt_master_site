const SKILLS = [
  { value: "", label: "Nessuna" },
  { value: "lore", label: "Sapienza / Lore" },
  { value: "survival", label: "Sopravvivenza" },
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
  { value: "defense_surge", label: "Impulso difensivo", family: "combat_defense", trigger: "passive", description: "Aumenta la difesa o offre una protezione passiva. Ideale su scudi, armature, elmi, mantelli, anelli e reliquie difensive.", categories: ["shield", "armor", "helm", "cloak", "ring", "relic"] },
  { value: "defense_potion", label: "Pozione difensiva", family: "combat_defense", trigger: "consumable", description: "Offre una protezione temporanea quando il consumabile viene usato in combattimento.", categories: ["consumable"] },
  { value: "bonus_damage", label: "Bonus danno", family: "combat_offense", trigger: "on_hit", description: "Aggiunge danno bonus ai colpi andati a segno. Ideale per armi o reliquie offensive.", categories: ["weapon", "relic", "ring"] },
  { value: "fatigue_relief", label: "Sollievo fatica", family: "combat_tempo", trigger: "passive", description: "Riduce il peso della fatica o migliora la gestione della stamina in modo passivo.", categories: ["utility", "consumable", "ring", "cloak", "boots", "relic"] },
  { value: "recover_boost", label: "Recupero potenziato", family: "survival_recovery", trigger: "on_recover", description: "Rende piu efficace l'azione di recupero fiato. Su bastoni rituali (stile=ritual) si attiva anche quando difendi.", categories: ["weapon", "consumable", "utility", "ring", "cloak", "boots", "relic"] },
  { value: "crit_guard", label: "Guardia anti-critico", family: "combat_defense", trigger: "passive", description: "Riduce il rischio o l'impatto dei colpi critici subiti.", categories: ["weapon", "shield", "armor", "helm", "cloak", "relic"] },
  { value: "ember_retaliation", label: "Ritorsione ardente", family: "combat_defense", trigger: "on_defend", description: "Restituisce una risposta offensiva o un contraccolpo quando difendi.", categories: ["shield", "armor", "helm", "boots", "relic"] },
  { value: "escape", label: "Ritirata rapida", family: "combat_tempo", trigger: "active_combat", description: "Aiuta la fuga o migliora la ritirata tattica in combattimento.", categories: ["boots", "cloak", "consumable", "utility", "relic"] },
  { value: "guaranteed_crit", label: "Critico assicurato", family: "combat_offense", trigger: "on_crit", description: "Garantisce o potenzia un colpo critico. Adatto ad armi rare e reliquie.", categories: ["weapon", "relic"] },
  { value: "apply_staggered", label: "Sbilancia il nemico", family: "combat_control", trigger: "on_crit", description: "Applica la condizione Sbilanciato al nemico su critico (o su colpo solido con armi pesanti). Riduce ATK e DEF nemico.", categories: ["weapon", "consumable", "relic"] },
  { value: "cleanse_exposed", label: "Pulisce Scoperto", family: "combat_tempo", trigger: "on_crit", description: "Rimuove la condizione Scoperto dal giocatore su critico (armi) o al recupero (mantelli/oggetti).", categories: ["weapon", "cloak", "consumable", "relic"] },
  { value: "focus_surge", label: "Picco di messa a fuoco", family: "combat_tempo", trigger: "on_defend", description: "Applica la condizione Messa a fuoco dopo una guardia pulita o un recupero. Migliora il prossimo attacco.", categories: ["weapon", "ring", "boots", "relic"] },
  { value: "guarded_surge", label: "Guardia rinforzata", family: "combat_defense", trigger: "on_defend", description: "Applica la condizione Guardia salda dopo aver difeso. Aumenta la difesa per 1-2 turni.", categories: ["weapon", "shield", "helm", "boots", "relic"] },
  { value: "key_access", label: "Accesso narrativo", family: "narrative_key", trigger: "on_choice", description: "Sblocca passaggi, porte o rami narrativi specifici.", categories: ["key", "relic", "quest"] },
  { value: "trade_value", label: "Valore commerciale", family: "economy_loot", trigger: "passive", description: "Aumenta il valore economico percepito dell'oggetto.", categories: ["treasure", "relic", "utility", "key", "quest"] },
  { value: "check_bonus", label: "Bonus alle prove", family: "skill_check", trigger: "passive", description: "Concede un bonus alle prove o ai check. Perfetto per pergamene, talismani e bastoni arcani.", categories: ["weapon", "treasure", "relic", "ring", "cloak", "utility", "consumable"] }
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
      { itemId: "rusted_blade", itemName: "Spada corrosa", quantity: 1, category: "weapon", rarity: "common", effectIds: [] },
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
      { itemId: "dagger", itemName: "Pugnale", quantity: 1, category: "weapon", rarity: "common", effectIds: [] },
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
    loot: [{ itemId: "wolf_pelt", itemName: "Pelle di lupo", quantity: 1, category: "treasure", rarity: "common", effectIds: ["trade_value"] }]
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
      { itemId: "rusted_blade", itemName: "Spada corrosa", quantity: 1, category: "weapon", rarity: "common", effectIds: [] },
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
    loot: [{ itemId: "wolf_pelt", itemName: "Pelle di lupo", quantity: 1, category: "treasure", rarity: "common", effectIds: ["trade_value"] }]
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
  { id: "wolf_pelt",      name: "Pelle di lupo",         category: "treasure",   rarity: "common",   effectIds: ["trade_value"] },
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
  { id: "gregario",        label: "Gregario",          icon: "👥", hint: "carne da macello",                    hitPoints:  7, attackBonus: 1, defense: 10, damageMin: 1, damageMax: 3, goldReward:  4, abilityIds: [],                                        hasBerserkerPhase: false },
  { id: "predatore",       label: "Predatore",         icon: "🐾", hint: "veloce, colpisce e scappa",           hitPoints: 10, attackBonus: 3, defense: 12, damageMin: 2, damageMax: 5, goldReward:  7, abilityIds: ["enemy_brutal_charge"],                   hasBerserkerPhase: false },
  { id: "soldato",         label: "Soldato",           icon: "⚔",  hint: "combattente equilibrato",            hitPoints: 14, attackBonus: 3, defense: 12, damageMin: 2, damageMax: 6, goldReward: 11, abilityIds: [],                                        hasBerserkerPhase: false },
  { id: "bruto",           label: "Bruto",             icon: "🪨", hint: "lento, corazzato, letale",            hitPoints: 20, attackBonus: 2, defense: 13, damageMin: 4, damageMax: 8, goldReward: 12, abilityIds: ["enemy_armor_break"],                     hasBerserkerPhase: false },
  { id: "assassino",       label: "Assassino",         icon: "🗡",  hint: "fragile ma letale",                  hitPoints:  9, attackBonus: 5, defense: 10, damageMin: 3, damageMax: 7, goldReward: 14, abilityIds: ["enemy_draining_claws"],                  hasBerserkerPhase: false },
  { id: "ritualista",      label: "Ritualista",        icon: "📜", hint: "caster oscuro, minaccia psicologica", hitPoints: 12, attackBonus: 4, defense: 11, damageMin: 2, damageMax: 6, goldReward: 16, abilityIds: ["enemy_howl_of_dread"],                   hasBerserkerPhase: false },
  { id: "guardiano_elite", label: "Guardiano d'Elite", icon: "🛡",  hint: "sub-boss tenace",                    hitPoints: 22, attackBonus: 4, defense: 13, damageMin: 3, damageMax: 7, goldReward: 18, abilityIds: ["enemy_enrage"],                          hasBerserkerPhase: false },
  { id: "boss",            label: "Boss",              icon: "💀", hint: "scontro finale, fase berserk",        hitPoints: 28, attackBonus: 5, defense: 14, damageMin: 4, damageMax: 9, goldReward: 25, abilityIds: ["enemy_howl_of_dread", "enemy_enrage"],    hasBerserkerPhase: true  }
];

const NODE_WIDTH = 280;
const NODE_HEIGHT = 130;
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
const LEGACY_LOCAL_PROJECT_KEY = "adventure_studio_project_v1";
const LOCAL_PROJECT_INDEX_KEY = "adventure_studio_project_index_v2";
const LOCAL_PROJECT_LAST_KEY = "adventure_studio_last_project_id_v2";
const LOCAL_PROJECT_PREFIX = "adventure_studio_project_v2_";
const TUTORIAL_SEEN_KEY = "adventure_studio_tutorial_seen_v1";

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
    descriptions: []
  },
  selectedDescriptionId: null,
  drag: null,
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
    descriptions: []
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
  state.linkDraft = null;
  state.ui.autosaveAt = null;
  state.ui.sceneDirty = false;
  state.ui.sceneSavedAt = null;
  state.ui.flowZoom = 1;
  state.ui.currentProjectId = null;
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
  state.selectedDescriptionId = selectedDescriptionId || state.adventure.startingDescriptionId || state.adventure.descriptions[0]?.id || null;
  state.drag = null;
  state.linkDraft = null;
  state.ui.autosaveAt = autosaveAt;
  state.ui.sceneDirty = false;
  state.ui.sceneSavedAt = null;
  state.ui.strictAlpha = strictAlpha;
  state.ui.flowZoom = Math.min(FLOW_ZOOM_MAX, Math.max(FLOW_ZOOM_MIN, Number(flowZoom || 1)));
  state.ui.currentProjectId = projectId;
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
  flowStage: document.getElementById("flow-stage"),
  flowViewport: document.getElementById("flow-viewport"),
  flowCanvas: document.getElementById("flow-canvas"),
  flowLinks: document.getElementById("flow-links"),
  flowZoomOutBtn: document.getElementById("flow-zoom-out-btn"),
  flowZoomInBtn: document.getElementById("flow-zoom-in-btn"),
  flowZoomLabel: document.getElementById("flow-zoom-label"),
  sceneEmpty: document.getElementById("scene-empty"),
  sceneEditor: document.getElementById("scene-editor"),
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
  els.deleteSceneBtn.addEventListener("click", deleteScene);
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
    if (!state.selectedDescriptionId) return;
    event.preventDefault();
    deleteScene();
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
    const scene = getSelectedScene();
    if (!scene) return;
    scene.title = e.target.value;
    markSceneDirty();
    scheduleFlowCardRefresh(scene.id);
    scheduleJsonRender();
  });

  els.sceneOpeningText.addEventListener("input", (e) => {
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
  const scene = getSelectedScene();
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
  const scene = getSelectedScene();
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
  const scene = getSelectedScene();
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

function onBoardPointerMove(event) {
  if (state.drag) {
    state.drag.pointerClientX = event.clientX;
    state.drag.pointerClientY = event.clientY;
    updateDraggedScenePosition(event.clientX, event.clientY);
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
  const targetSceneId = targetNode?.dataset.sceneId || null;
  const sourceSceneId = state.linkDraft.sceneId;
  state.linkDraft = null;

  if (targetSceneId && targetSceneId !== sourceSceneId) {
    const sourceScene = state.adventure.descriptions.find((d) => d.id === sourceSceneId);
    if (sourceScene) {
      addLinkedTargetToScene(sourceScene, targetSceneId);
      state.selectedDescriptionId = sourceSceneId;
      render();
    }
  } else if (!targetSceneId) {
    // Drag-to-create: il link è finito nel vuoto — mostra il picker alla posizione del puntatore
    const dropPoint = flowBoardPointFromClient({ clientX: event.clientX, clientY: event.clientY });
    showNodePicker({ mode: "drag", sourceSceneId, dropPoint, clientX: event.clientX, clientY: event.clientY });
  } else {
    renderFlowLinks();
  }
}

function updateDraggedScenePosition(clientX, clientY) {
  const drag = state.drag;
  if (!drag) return;
  const dragBounds = drag.bounds || getCurrentFlowBoardBounds();
  const point = flowBoardPointFromClient({ clientX, clientY }, dragBounds);
  const scene = state.adventure.descriptions.find((d) => d.id === drag.sceneId);
  if (!scene) return;
  scene.position.x = clamp(point.x - drag.offsetX, -FLOW_COORD_LIMIT, FLOW_COORD_LIMIT);
  scene.position.y = clamp(point.y - drag.offsetY, -FLOW_COORD_LIMIT, FLOW_COORD_LIMIT);
  updateFlowCardPosition(scene.id, dragBounds);
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
  renderFlowLinks(nextBounds);
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
    if (state.drag) updateDraggedScenePosition(clientX, clientY);
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

// ─── Node Picker ─────────────────────────────────────────────────────────────

// Stato del picker: null quando chiuso, altrimenti { mode, sourceSceneId, dropPoint }
let _nodePicker = null;

function showNodePicker({ mode = "toolbar", sourceSceneId = null, dropPoint = null, clientX = null, clientY = null } = {}) {
  _nodePicker = { mode, sourceSceneId, dropPoint };
  const picker = document.getElementById("node-picker");
  if (!picker) return;

  // Ripristina step 1
  document.getElementById("node-picker-step1")?.classList.remove("hidden");
  const step2 = document.getElementById("node-picker-step2");
  if (step2) { step2.classList.add("hidden"); step2.innerHTML = ""; }
  picker.style.maxWidth = "";

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
  picker.querySelector("[data-kind='description']")?.focus();
}

function hideNodePicker() {
  _nodePicker = null;
  const picker = document.getElementById("node-picker");
  if (picker) picker.classList.add("hidden");
}

function onNodePickerChoose(kind) {
  if (kind === "description" || kind === "final") {
    const { sourceSceneId = null, dropPoint = null } = _nodePicker || {};
    hideNodePicker();
    createSceneOfKind(kind, { position: dropPoint, sourceSceneId });
    return;
  }
  // Combat e check: mostra step 2
  const step1 = document.getElementById("node-picker-step1");
  const step2 = document.getElementById("node-picker-step2");
  if (!step1 || !step2) return;
  step1.classList.add("hidden");
  step2.classList.remove("hidden");
  step2.innerHTML = "";
  if (kind === "combat") renderNodePickerStep2Combat(step2);
  else if (kind === "check") renderNodePickerStep2Check(step2);
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

  // Ripulisce i targetId che puntano alla description eliminata
  state.adventure.descriptions.forEach((d) => {
    d.choices = (d.choices || []).map((choice) => {
      const cleaned = { ...choice };
      if (cleaned.targetId === deletedId) cleaned.targetId = null;
      if (cleaned.event) {
        const ev = cleaned.event;
        const clearBranch = (branch) => {
          if (branch && branch.targetId === deletedId) branch.targetId = null;
        };
        if (ev.victoryBranch) clearBranch(ev.victoryBranch);
        if (ev.defeatBranch) clearBranch(ev.defeatBranch);
        if (ev.retreatBranch) clearBranch(ev.retreatBranch);
        if (ev.successBranch) clearBranch(ev.successBranch);
        if (ev.failureBranch) clearBranch(ev.failureBranch);
        if (ev.metBranch) clearBranch(ev.metBranch);
        if (ev.unmetBranch) clearBranch(ev.unmetBranch);
        if (ev.branch) clearBranch(ev.branch);
      }
      return cleaned;
    });
  });

  if (state.adventure.startingDescriptionId === deletedId) {
    state.adventure.startingDescriptionId = state.adventure.descriptions[0]?.id || "";
  }
  state.selectedDescriptionId = state.adventure.descriptions[0]?.id || null;
  render();
}

// ─── Monster CRUD — dead code: i mostri sono ora inline nei CombatGroup ──────
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
    expanded: true
  }));
}

function buildMonsterLootFromPreset(preset) {
  const fixedLoot = clonePresetLoot(preset.loot || []);
  const variableLoot = generateVariableLootForMonster(preset);
  return mergeLootEntries([...fixedLoot, ...variableLoot]);
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

  const isBeast = /(lupo|segugio|ragno|sanguisuga|beast|hound|wolf|spider|leech)/.test(profile);
  const isUndead = /(scheletro|revenant|devoto|catacomba|crypt|grave|undead|custode del bronzo)/.test(profile);
  const isHumanoid = /(cult|cultista|goblin|guard|guardia|band|capobanda|magister|knight|cavaliere)/.test(profile);

  if (isBeast) {
    addLootChance(0.30, "travel_rations");
    addLootChance(0.18, "healing_potion");
    addLootChance(0.12, "coins", 2, 6);
    return drops;
  }

  if (isUndead) {
    addLootChance(0.30, "coins", 4, 12);
    addOneOfChance(0.30, ["rusted_blade", "miner_helm"]);
    addLootChance(0.14, "healing_potion");
    return drops;
  }

  if (isHumanoid) {
    addLootChance(0.30, "coins", 5, 14);
    addOneOfChance(0.30, ["dagger", "rusted_blade", "camp_buckler", "healing_potion"]);
    addOneOfChance(0.16, ["chain_mail", "warding_dust", "arcane_scroll"]);
    return drops;
  }

  addLootChance(0.20, "coins", 3, 8);
  addOneOfChance(0.30, ["healing_potion", "torch"]);
  return drops;
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
    icon = "🎒";
    label = "Kit aggiuntivo";
    body = "Gli oggetti del kit vengono dati al giocatore in aggiunta al suo equipaggiamento pregresso (se consentito dalle impostazioni dell'avventura).";
    mod = "";
  } else if (restore) {
    icon = "🔒";
    label = "Loadout forzato + ripristino";
    body = "All'avvio zaino ed equip vengono azzerati: il giocatore parte solo con il kit. Al termine dell'avventura l'equipaggiamento originale viene restituito automaticamente.";
    mod = "loadout-mode-summary--restore";
  } else {
    icon = "⚠️";
    label = "Loadout forzato";
    body = "All'avvio zaino ed equip vengono azzerati: il giocatore parte solo con il kit. L'equipaggiamento originale non viene salvato — assicurati che sia intenzionale.";
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
    choice.requiredLockId = normalizeString(card.querySelector('[data-field="requiredLockId"]')?.value) || "";
    choice.requiredLockLabel = card.querySelector('[data-field="requiredLockLabel"]')?.value ?? choice.requiredLockLabel;
    choice.requiredItemId = normalizeString(card.querySelector('[data-field="requiredItemIdCustom"]')?.value)
      || normalizeString(card.querySelector('[data-field="requiredItemId"]')?.value)
      || "";
    choice.requiredItemCategory = normalizeString(card.querySelector('[data-field="requiredItemCategory"]')?.value) || "";
    choice.requiredEffectId = normalizeString(card.querySelector('[data-field="requiredEffectId"]')?.value) || "";
    choice.consumeOnUse = Boolean(card.querySelector('[data-field="consumeOnUse"]')?.checked);

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
  const desc = getSelectedScene();
  if (!desc) return;
  desc.title = els.sceneTitle?.value ?? desc.title;
  desc.text = els.sceneOpeningText?.value ?? desc.text;
  desc.isEnding = els.sceneIsEnding?.checked ?? desc.isEnding;
  // Le scelte sono già sincronizzate live tramite i listener nei choice card
}

function saveCurrentDescription({ announce = false, renderFlow = true } = {}) {
  if (!state.selectedDescriptionId) return;
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
  els.sceneSaveStatus.textContent = !scene
    ? "Le modifiche del nodo vengono confermate quando salvi l'avventura o cambi evento."
    : state.ui.sceneDirty
      ? "Hai modifiche non salvate. Usa Salva avventura per confermarle."
      : `Nodo salvato${state.ui.sceneSavedAt ? ` alle ${formatSceneSaveTime(state.ui.sceneSavedAt)}` : ""}.`;
}

function switchSelectedScene(nextSceneId) {
  if (!nextSceneId || nextSceneId === state.selectedDescriptionId) return;
  const previousSceneId = state.selectedDescriptionId;
  saveCurrentScene({ renderFlow: false });
  state.selectedDescriptionId = nextSceneId;
  updateFlowCardSelection(previousSceneId, nextSceneId);
  renderSceneEditor();
}

function renderFlowBoard({ preserveCenter = false, logicalCenter = null } = {}) {
  const bounds = computeBoardBounds();
  state.ui.flowBoardBounds = bounds;
  renderFlowCards(bounds);
  renderFlowLinks(bounds);
  applyFlowZoom({ preserveCenter, rerenderOnModeChange: false, bounds, logicalCenter });
}

function renderFlowCards(bounds = computeBoardBounds()) {
  els.flowCanvas.innerHTML = "";
  state.ui.flowBoardBounds = bounds;
  els.flowCanvas.style.width = `${bounds.width}px`;
  els.flowCanvas.style.height = `${bounds.height}px`;
  const fragment = document.createDocumentFragment();

  state.adventure.descriptions.forEach((desc, index) => {
    fragment.appendChild(createFlowCard(desc, index, bounds));
  });

  els.flowCanvas.appendChild(fragment);
  renderFlowStats();
  renderMinimap();
}

function createFlowCard(desc, index, bounds = getCurrentFlowBoardBounds()) {
  const card = document.createElement("div");
  syncFlowCard(card, desc, index, bounds);

  card.addEventListener("click", (event) => {
    if (event.target.closest(".link-handle")) return;

    // Pulsante "+ scelta" (nel footer o nell'empty state delle scelte)
    if (event.target.closest('[data-action="add-choice"]')) {
      event.stopPropagation();
      switchSelectedScene(card.dataset.sceneId);
      addChoice();
      return;
    }

    // Click su una riga scelta → picker tipo evento
    const choiceRow = event.target.closest('[data-choice-id]');
    if (choiceRow) {
      switchSelectedScene(card.dataset.sceneId);
      showChoiceEventPicker(card.dataset.sceneId, choiceRow.dataset.choiceId, choiceRow.getBoundingClientRect());
      return;
    }

    switchSelectedScene(card.dataset.sceneId);
  });

  card.addEventListener("dblclick", (event) => {
    if (event.target.closest(".link-handle")) return;
    if (event.target.closest('[data-action="add-choice"]')) return;

    // Doppio clic sul titolo → modifica inline
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
    if (event.target.closest(".link-handle")) return;
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
    if (!event.target.closest(".link-handle")) return;
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
  card.className = [
    "flow-card node-card",
    desc.id === state.selectedDescriptionId ? "active" : "",
    metrics.compact ? "flow-card--compact" : "",
    isOrphanCard ? "flow-card--orphan" : "",
    desc.isEnding ? "flow-card--ending" : ""
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
      <button class="link-handle" title="Trascina per collegare"></button>
      <div class="flow-card-mini-index">${index + 1}</div>
      <div class="flow-card-mini-meta">
        <span>${desc.isEnding ? "FIN" : "DESC"}</span>
        <span>${isStart ? "IN" : ""}${isOrphan ? "!" : ""}</span>
      </div>
    `;
  }
  return `
    <button class="link-handle" title="Trascina per collegare"></button>
    <div class="flow-card-head">
      <strong class="flow-card-title" title="Doppio clic per modificare il titolo">${index + 1}. ${esc(desc.title || "Senza titolo")}</strong>
      <span class="flow-card-badges">
        ${isStart ? '<span class="flow-badge flow-badge--start">INIZIO</span>' : ""}
        ${desc.isEnding ? '<span class="flow-badge flow-badge--ending">FINE</span>' : ""}
        ${isOrphan ? '<span class="flow-badge flow-badge--orphan" title="Nessuna descrizione collega a questo nodo">&#x26A0; orfano</span>' : ""}
      </span>
    </div>
    <div class="flow-choices">
      ${renderFlowChoiceSummary(desc)}
    </div>
    ${!desc.isEnding ? `<div class="flow-card-footer"><button class="flow-add-btn" data-action="add-choice" title="Aggiungi scelta (Invio)">+ scelta</button></div>` : ""}
  `;
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
      resolveChoiceTargetIds(choice).forEach((id) => ids.add(id));
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
  els.flowLinks.innerHTML = buildLinkMarkup(bounds);
  updateFlowViewportMetrics(bounds);
}

function buildLinkMarkup(bounds = getCurrentFlowBoardBounds()) {
  const lines = [];
  const visibleBounds = shouldVirtualizeFlowLinks() ? getVisibleFlowBounds(bounds) : null;
  state.adventure.descriptions.forEach((desc) => {
    const source = nodeAnchor(desc, bounds);
    (desc.choices || []).forEach((choice) => {
      const color = choiceLinkColor(choice);
      appendDescriptionChoiceLinks(lines, source, choice, color, visibleBounds, bounds);
    });
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
  else                            { addBranch(ev.branch); }
  return ids;
}

function appendDescriptionChoiceLinks(lines, source, choice, color, visibleBounds = null, bounds = getCurrentFlowBoardBounds()) {
  if (choice.event) {
    const ev = choice.event;
    // Per eventi ramificati disegna una linea per ramo
    if (ev.type === "skillcheck") {
      appendBranchLink(lines, source, ev.successBranch, "#6f8a57", visibleBounds, bounds);
      appendBranchLink(lines, source, ev.failureBranch, "#b94a48", visibleBounds, bounds);
    } else if (ev.type === "combat") {
      appendBranchLink(lines, source, ev.victoryBranch, "#6f8a57", visibleBounds, bounds);
      appendBranchLink(lines, source, ev.defeatBranch, "#b94a48", visibleBounds, bounds);
      if (ev.retreatBranch) appendBranchLink(lines, source, ev.retreatBranch, "#6d84b5", visibleBounds, bounds, true);
    } else if (ev.type === "requirement") {
      appendBranchLink(lines, source, ev.metBranch, "#6f8a57", visibleBounds, bounds);
      appendBranchLink(lines, source, ev.unmetBranch, "#b94a48", visibleBounds, bounds);
    } else {
      const branch = ev.branch;
      if (branch) appendBranchLink(lines, source, branch, color, visibleBounds, bounds);
    }
  } else if (choice.targetId && choice.targetId !== DEATH_SENTINEL && choice.targetId !== STAY_SENTINEL) {
    const target = state.adventure.descriptions.find((d) => d.id === choice.targetId);
    if (target) {
      const targetEntry = nodeEntry(target, bounds);
      if (shouldRenderFlowLink(source, targetEntry, visibleBounds)) {
        lines.push(linkPath(source, targetEntry, color));
      }
    }
  }
}

function appendBranchLink(lines, source, branch, color, visibleBounds, bounds, dashed = false) {
  if (!branch?.targetId || branch.targetId === DEATH_SENTINEL || branch.targetId === STAY_SENTINEL) return;
  const target = state.adventure.descriptions.find((d) => d.id === branch.targetId);
  if (!target) return;
  const targetEntry = nodeEntry(target, bounds);
  if (shouldRenderFlowLink(source, targetEntry, visibleBounds)) {
    lines.push(linkPath(source, targetEntry, color, dashed));
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

function linkPath(source, target, color, dashed = false) {
  const dx = Math.max(80, Math.abs(target.x - source.x) * 0.4);
  const dash = dashed ? ' stroke-dasharray="7 6"' : "";
  return `<path d="M ${source.x} ${source.y} C ${source.x + dx} ${source.y}, ${target.x - dx} ${target.y}, ${target.x} ${target.y}" stroke="${color}" stroke-width="3" fill="none" marker-end="url(#arrow)" opacity="0.9"${dash} />`;
}

function computeBoardBounds() {
  const metrics = getFlowCardMetrics();
  const scenePositions = state.adventure.descriptions.map((d) => d.position || { x: 0, y: 0 });
  const minX = scenePositions.length ? Math.min(...scenePositions.map((point) => point.x), 0) : 0;
  const minY = scenePositions.length ? Math.min(...scenePositions.map((point) => point.y), 0) : 0;
  const maxX = scenePositions.length ? Math.max(...scenePositions.map((point) => point.x + metrics.width), metrics.width) : metrics.width;
  const maxY = scenePositions.length ? Math.max(...scenePositions.map((point) => point.y + metrics.height), metrics.height) : metrics.height;
  const contentWidth = Math.max(metrics.width, maxX - minX);
  const contentHeight = Math.max(metrics.height, maxY - minY);
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
  const offsetX = FLOW_WORKSPACE_PADDING - minX;
  const offsetY = FLOW_WORKSPACE_PADDING - minY;
  return { width, height, minX, minY, maxX, maxY, offsetX, offsetY };
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

// Helper: aggiungi pulsante → accanto a un select di destinazione scena
function attachNavigateBtn(container, selector) {
  const select = container.querySelector(selector);
  if (!select) return;
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "btn-navigate-node";
  btn.title = "Vai al nodo nel flusso";
  btn.textContent = "→";
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
  const count = state.adventure.descriptions.length;
  const endings = state.adventure.descriptions.filter((d) => d.isEnding).length;
  els.flowStats.textContent = endings > 0
    ? `${count} nodi · ${endings} fin${endings === 1 ? "e" : "i"}`
    : `${count} nodi`;
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
  if (!state.adventure.descriptions.length) return { minX: 0, maxX: 400, minY: 0, maxY: 300 };
  const xs = state.adventure.descriptions.map((d) => d.position?.x || 0);
  const ys = state.adventure.descriptions.map((d) => d.position?.y || 0);
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
  { type: null,         icon: "→",  label: "Solo navigazione" },
  { type: "combat",     icon: "⚔",  label: "Combattimento" },
  { type: "skillcheck", icon: "🎲", label: "Prova abilità" },
  { type: "requirement",icon: "🔑", label: "Requisito" },
  { type: "loot",       icon: "🗡", label: "Loot" },
  { type: "shop",       icon: "🏪", label: "Negozio" },
  { type: "dialogue",   icon: "💬", label: "Dialogo" },
  { type: "transition", icon: "🔗", label: "Transizione" },
];

function showChoiceEventPicker(descId, choiceId, anchorRect) {
  const desc = state.adventure.descriptions.find((d) => d.id === descId);
  const choice = desc?.choices?.find((c) => c.id === choiceId);
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
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "cep-btn" + (current === type ? " cep-btn--active" : "");
    btn.innerHTML = `<span class="cep-icon">${icon}</span><span class="cep-label">${label}</span>`;
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (type === null) {
        choice.event = null;
      } else if (!choice.event || choice.event.type !== type) {
        choice.event = createDefaultEvent(type);
        choice.targetId = null;
      }
      markSceneDirty();
      refreshFlowCard(descId);
      scheduleFlowLinksRender();
      scheduleJsonRender();
      closeChoiceEventPicker();
      if (type !== null) {
        // Apri il pannello per la configurazione avanzata
        switchSelectedScene(descId);
        requestAnimationFrame(() =>
          els.sceneEditor.scrollIntoView({ behavior: "smooth", block: "start" })
        );
      }
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

function refreshFlowCard(sceneId) {
  const sceneIndex = state.adventure.descriptions.findIndex((d) => d.id === sceneId);
  if (sceneIndex === -1) return;
  const current = flowCardElement(sceneId);
  const bounds = getCurrentFlowBoardBounds();
  if (!current) {
    els.flowCanvas.appendChild(createFlowCard(state.adventure.descriptions[sceneIndex], sceneIndex, bounds));
    return;
  }
  syncFlowCard(current, state.adventure.descriptions[sceneIndex], sceneIndex, bounds);
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

function renderSceneEditor() {
  const desc = getSelectedScene();
  const visible = Boolean(desc);
  els.sceneEmpty.classList.toggle("hidden", visible);
  els.sceneEditor.classList.toggle("hidden", !visible);
  updateSceneSaveStatus();
  if (!desc) return;

  els.sceneTitle.value = desc.title || "";
  els.sceneOpeningText.value = desc.text || "";
  if (els.sceneIsEnding) els.sceneIsEnding.checked = Boolean(desc.isEnding);

  renderSceneImagePreview(desc);

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
  if (els.sceneChoicesHint) els.sceneChoicesHint.textContent = "Ogni scelta può avere una navigazione diretta o un evento (combattimento, prova, requisito...).";
  if (els.addChoiceBtn) els.addChoiceBtn.textContent = "Aggiungi scelta";

  renderChoices(desc);
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
    loot: [{ itemId: "coins", itemName: "Monete", quantity: archetype.goldReward, category: "treasure", rarity: "common", effectIds: ["trade_value"] }],
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
  refreshFlowCard(desc.id);
  scheduleFlowLinksRender();
  scheduleJsonRender();
}

// Costruisce il DOM di un choice card per il nuovo modello
function buildChoiceCard(desc, choice, index) {
  const card = document.createElement("div");
  card.className = "choice-card";

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
  });

  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.className = "danger small";
  removeBtn.textContent = "✕";
  removeBtn.title = "Rimuovi scelta";
  removeBtn.addEventListener("click", () => {
    desc.choices.splice(index, 1);
    onChoiceChange(desc, choice);
    renderChoices(desc);
  });

  header.append(textInput, removeBtn);

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
  });
  hiddenLabel.append(hiddenChk, " Nascosta");

  const burnLabel = document.createElement("label");
  const burnChk = document.createElement("input");
  burnChk.type = "checkbox";
  burnChk.checked = Boolean(choice.burnAfterUse);
  burnChk.addEventListener("change", (e) => {
    choice.burnAfterUse = e.target.checked;
    onChoiceChange(desc, choice);
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
    { value: "condition", label: "Condizione" },
    { value: "transition", label: "Transizione" },
    { value: "dialogue", label: "Dialogo NPC" },
    { value: "shop", label: "Negozio" }
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

  function rebuildEventConfig() {
    eventConfig.innerHTML = "";
    const evType = eventSelect.value;
    if (!evType) {
      // Navigazione diretta: mostra target selector
      if (choice.event) { choice.event = null; onChoiceChange(desc, choice); }
      eventConfig.appendChild(buildTargetRow("Destinazione", choice.targetId || "", (v) => {
        choice.targetId = v || null;
        onChoiceChange(desc, choice);
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
        default:
          eventConfig.appendChild(makeHint(`Configurazione per "${evType}" in costruzione.`));
      }
    }
  }

  eventSelect.addEventListener("change", rebuildEventConfig);
  rebuildEventConfig();

  card.append(header, flagsRow, eventRow, eventConfig);
  return card;
}

// ── Helper: target selector ───────────────────────────────────────────────────

function buildTargetRow(labelText, currentValue, onChange) {
  const label = document.createElement("label");
  label.textContent = labelText + " ";
  const select = document.createElement("select");
  hydrateDescriptionTargetSelect(select, currentValue);
  select.addEventListener("change", (e) => { if (!e.target._hydrating) onChange(e.target.value); });
  label.appendChild(select);
  return label;
}

function buildBranchRow(labelText, branch, desc, choice, isRetreatable = false) {
  const wrap = document.createElement("div");
  wrap.className = "branch-row";
  wrap.appendChild(buildTargetRow(labelText, branch.targetId || "", (v) => {
    branch.targetId = v || null;
    onChoiceChange(desc, choice);
  }));
  const textInput = document.createElement("input");
  textInput.type = "text";
  textInput.placeholder = "Testo ramo (opzionale)";
  textInput.value = branch.text || "";
  textInput.addEventListener("input", (e) => {
    branch.text = e.target.value || null;
    onChoiceChange(desc, choice);
  });
  const burnLabel = document.createElement("label");
  const burnChk = document.createElement("input");
  burnChk.type = "checkbox";
  burnChk.checked = Boolean(branch.burnAfterUse);
  burnChk.addEventListener("change", (e) => {
    branch.burnAfterUse = e.target.checked;
    onChoiceChange(desc, choice);
  });
  burnLabel.append(burnChk, " Brucia scelta su questo esito");
  wrap.append(textInput, burnLabel);
  return wrap;
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
    buildBranchRow("→ Destinazione successo", ev.successBranch, desc, choice),
    makeHint("Fallimento:"),
    buildBranchRow("→ Destinazione fallimento", ev.failureBranch, desc, choice)
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
    buildBranchRow("→ Destinazione vittoria", ev.victoryBranch, desc, choice),
    makeHint("Sconfitta:"),
    buildBranchRow("→ Destinazione sconfitta", ev.defeatBranch, desc, choice)
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
      retreatSection.appendChild(buildBranchRow("→ Destinazione ritirata", ev.retreatBranch, desc, choice, true));
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
    buildBranchRow("→ Destinazione", ev.metBranch, desc, choice),
    makeHint("Requisito non soddisfatto:"),
    buildBranchRow("→ Destinazione", ev.unmetBranch, desc, choice)
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
    buildBranchRow("→ Destinazione", ev.branch, desc, choice)
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
    buildBranchRow("→ Destinazione", ev.branch, desc, choice)
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
    buildBranchRow("→ Destinazione", ev.branch, desc, choice)
  );
}

// ── Default event factories ───────────────────────────────────────────────────

function createDefaultEvent(type) {
  const emptyBranch = () => ({ text: null, loot: [], condition: null, unlockChoiceId: null, burnAfterUse: false, targetId: null, event: null });
  switch (type) {
    case "combat":      return { type: "combat", text: null, image: null, combatGroups: [createDefaultCombatGroup()], victoryBranch: emptyBranch(), defeatBranch: { ...emptyBranch(), targetId: DEATH_SENTINEL }, retreatBranch: null };
    case "skillcheck":  return { type: "skillcheck", text: null, attribute: "", difficulty: 12, successBranch: emptyBranch(), failureBranch: { ...emptyBranch(), targetId: STAY_SENTINEL }, burnOnFailure: false };
    case "requirement": return { type: "requirement", text: null, itemId: null, itemCategory: null, effectId: null, consumeOnMet: false, metBranch: emptyBranch(), unmetBranch: emptyBranch() };
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

// ─── Populate description target selects ──────────────────────────────────────

function hydrateDescriptionTargetSelect(select, currentValue) {
  select._hydrating = true;
  const sentinels = [
    { value: "", label: "— nessuna destinazione —" },
    { value: DEATH_SENTINEL, label: "☠ Morte" },
    { value: STAY_SENTINEL, label: "📍 Resta qui" }
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
    node.querySelector('[data-field="consumeOnUse"]').checked = Boolean(choice.consumeOnUse);
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
    const reqModeSelect   = node.querySelector('[data-field="reqMode"]');
    const reqSections     = node.querySelectorAll("[data-req-section]");
    const reqSummaryHint  = node.querySelector('[data-role="req-summary-hint"]');
    const reqKeyHint      = node.querySelector('[data-role="req-key-hint"]');
    const reqKeySelect    = node.querySelector('[data-field="requiredLockId"]');
    const reqItemSelect   = node.querySelector('[data-field="requiredItemId"]');
    const reqItemCustom   = node.querySelector('[data-field="requiredItemIdCustom"]');
    const reqCatSelect    = node.querySelector('[data-field="requiredItemCategory"]');
    const reqEffectSelect = node.querySelector('[data-field="requiredEffectId"]');

    function detectMode() {
      if (choice.requiredLockId)       return "key";
      if (choice.requiredItemId)       return "item";
      if (choice.requiredItemCategory) return "category";
      if (choice.requiredEffectId)     return "effect";
      return "";
    }

    function showSection(mode) {
      reqSections.forEach((s) => { s.style.display = s.dataset.reqSection === mode ? "" : "none"; });
    }

    function updateKeyHint() {
      if (!reqKeyHint) return;
      const lockId = choice.requiredLockId;
      if (!lockId) { reqKeyHint.textContent = ""; return; }
      const allLoot = [
        ...collectAllAdventureLoot()
      ];
      const match = allLoot.find((l) => normalizeString(l.lockId) === lockId);
      const preset = LOOT_PRESETS.find((p) => p.lockId === lockId);
      const name = match?.itemName || preset?.name;
      reqKeyHint.textContent = name
        ? `Chiave: "${name}" — lockId ${lockId}`
        : `⚠ Nessuna chiave con lockId "${lockId}" trovata nell'avventura.`;
    }

    function updateSummaryHint() {
      if (!reqSummaryHint) return;
      if (choice.requiredLockId) {
        const allLoot = collectAllAdventureLoot();
        const key = allLoot.find((l) => normalizeString(l.lockId) === choice.requiredLockId);
        const preset = LOOT_PRESETS.find((p) => p.lockId === choice.requiredLockId);
        reqSummaryHint.textContent = `🔑 ${key?.itemName || preset?.name || choice.requiredLockId}`;
      } else if (choice.requiredItemId) {
        reqSummaryHint.textContent = `📦 ${lootPresetById(choice.requiredItemId)?.name || choice.requiredItemId}`;
      } else if (choice.requiredItemCategory) {
        const cat = ITEM_CATEGORIES.find((c) => c.value === choice.requiredItemCategory);
        reqSummaryHint.textContent = `🗂 ${cat?.label || choice.requiredItemCategory}`;
      } else if (choice.requiredEffectId) {
        reqSummaryHint.textContent = `✨ ${effectPresetLabel(choice.requiredEffectId)}`;
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
    hydrateLootSelect(reqItemSelect, choice.requiredItemId || "");
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
        checkSummaryHint.textContent = `⚀ ${skillLabel} dif. ${choice.skillCheck.difficulty || 0}`;
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

// Stub — i mostri sono inline nei CombatGroup e non hanno più un pannello separato
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
    const armorTypeRow     = node.querySelector('[data-role="armor-type-row"]');
    const armorTypeSelect  = node.querySelector('[data-field="armorType"]');
    const questInline      = node.querySelector('[data-field="questItem"]');
    const customRow        = node.querySelector('[data-role="custom-row"]');
    const chipsContainer   = node.querySelector('[data-role="effect-chips"]');
    const effectHelp       = node.querySelector('[data-role="effect-help"]');
    const addEffectBtn     = node.querySelector('[data-action="add-effect"]');
    const quantityField    = node.querySelector('[data-field="quantity"]');

    const selectedPreset = findLootPresetId(loot.itemId || loot.itemName);
    hydrateLootSelect(select, selectedPreset);
    hydrateCategorySelect(categorySelect, loot.category || "");
    hydrateRaritySelect(raritySelect, loot.rarity || "common");
    if (armorTypeSelect) armorTypeSelect.value = loot.armorType || "light";
    customInput.value    = selectedPreset === "custom" ? loot.itemName || "" : "";
    customInput.disabled = selectedPreset !== "custom";
    lockIdInput.value    = loot.lockId || "";
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
          chip.innerHTML = `<span class="effect-chip-label">${preset?.label || effectId}</span><button type="button" class="effect-chip-remove" data-idx="${i}" title="Rimuovi effetto">×</button>`;
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
        effectHelp.textContent = `Effetti attivi: ${labels}. Passa il mouse sui chip per i dettagli.`;
      }
    }

    function updateLootError() {
      const errors = (loot.effectIds || []).filter((id) => !effectAllowedForCategory(id, loot.category || ""));
      if (errors.length > 0) {
        const labels = errors.map((id) => effectPresetById(id)?.label || id).join(", ");
        errorEl.textContent = `⚠ Effetto non compatibile con la categoria "${loot.category}": ${labels}. Rimuovilo o cambia categoria.`;
        errorEl.style.display = "";
      } else {
        errorEl.textContent = "";
        errorEl.style.display = "none";
      }
    }

    function updatePreview() {
      const preset = lootPresetById(selectedPreset === "custom" ? "custom" : select.value);
      if (preset && preset.id !== "custom") {
        const catLabel = ITEM_CATEGORIES.find((c) => c.value === preset.category)?.label || preset.category;
        const rarLabel = ITEM_RARITIES.find((r) => r.value === preset.rarity)?.label || preset.rarity;
        preview.textContent = `${catLabel} · ${rarLabel}`;
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
        (d.choices || []).filter((c) => c.event?.type === "requirement" && c.event?.itemId === id).map(() => d.title || d.id)
      );
      lockHint.textContent = matches.length
        ? `Collegato a: ${[...new Set(matches)].join(", ")}`
        : `Nessuna scelta usa ancora lockId "${id}".`;
    }

    function syncVisibility() {
      // lock row: solo se categoria key
      lockRow.style.display = loot.category === "key" ? "" : "none";
      // armor type row: solo se categoria armor
      if (armorTypeRow) armorTypeRow.style.display = loot.category === "armor" ? "" : "none";
      // custom row: solo se preset custom
      customRow.style.display = select.value === "custom" ? "" : "none";
    }

    function updateLootHeader() {
      title.textContent = loot.itemName || "Loot personalizzato";
      meta.textContent  = `Quantita ${loot.quantity ?? 1} | ${runtimeLootItemId(loot)}`;
      const rarityLabel = loot.rarity ? loot.rarity.charAt(0).toUpperCase() + loot.rarity.slice(1) : "Comune";
      tag.textContent   = loot.questItem ? `Quest · ${rarityLabel}` : rarityLabel;
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
    const lootAdvanced = node.querySelector(".loot-advanced");
    if (lootAdvanced && (loot.category === "key" || loot.category === "armor" || loot.questItem)) {
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
      loot.itemId    = preset?.id === "custom" ? "" : preset?.id || "";
      loot.itemName  = lootLabelFromPreset(nextPreset);
      loot.category  = preset?.category || loot.category || "";
      loot.rarity    = preset?.rarity   || loot.rarity   || "common";
      loot.effectIds = [...(preset?.effectIds || [])];
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
      if (lootAdvanced && (loot.category === "key" || loot.category === "armor")) {
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
      updateLootHeader();
      onChange();
    });

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
      placeholder.textContent = "— Scegli effetto —";
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

function renderJson({ syncScene = true } = {}) {
  if (syncScene) syncCurrentSceneEditorStateFromDom();
  const cleaned = cleanAdventure(state.adventure);
  const validation = validateAdventure(state.adventure, cleaned, { strictAlpha: state.ui.strictAlpha });
  els.jsonOutput.value = JSON.stringify(cleaned, null, 2);
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
  renderValidation(validation);
  if (validation.errors.length > 0) {
    window.alert(`Esportazione bloccata: ${validation.errors.length} errori da correggere.`);
    return;
  }
  const payload = JSON.stringify(cleaned, null, 2);
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
    category: normalizeString(loot.category),
    rarity: normalizeString(loot.rarity),
    armorType: loot.category === "armor" ? (loot.armorType || "light") : undefined,
    effectIds: (loot.effectIds || []).filter(Boolean)
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
    description: group.description || undefined,
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
          itemId: ev.itemId || undefined,
          itemCategory: ev.itemCategory || undefined,
          effectId: ev.effectId || undefined,
          consumeOnMet: ev.consumeOnMet ? true : undefined,
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
      descriptions
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
    descriptions
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
    requiredLockId: normalizeString(choice.requiredLockId),
    requiredLockLabel: normalizeString(choice.requiredLockLabel),
    requiredItemId: normalizeString(choice.requiredItemId),
    requiredItemCategory: normalizeString(choice.requiredItemCategory),
    requiredEffectId: normalizeString(choice.requiredEffectId),
    consumeOnUse: Boolean(choice.consumeOnUse),
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
  select._hydrating = false;
}

// Variante per esiti di sconfitta: aggiunge l'opzione "Morte" (sentinel)
// che bypassa la navigazione a scena e attiva direttamente la schermata di game over.
function hydrateDefeatTargetSelect(select, value = "") {
  hydrateSceneTargetSelect(select, value);
  const deathOpt = document.createElement("option");
  deathOpt.value = DEATH_SENTINEL;
  deathOpt.textContent = "☠ Morte — schermata game over";
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
  stayOpt.textContent = "📦 Resta qui — assegna loot al successo";
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
  retryOpt.textContent = "🔄 Ritenta — ripete la prova";
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
  noEscapeOpt.textContent = "⚔ Non hai alcuna via di fuga. — il combattimento continua";
  if (value === NO_ESCAPE_SENTINEL) noEscapeOpt.selected = true;
  select.insertBefore(noEscapeOpt, select.options[1] || null);
  const deathOpt = document.createElement("option");
  deathOpt.value = DEATH_SENTINEL;
  deathOpt.textContent = "☠ Morte — schermata game over";
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
  placeholder.textContent = "— Nessuna prova —";
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
  noneOpt.textContent = "— Seleziona chiave —";
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
    opt.textContent = `${value} ⚠ chiave non trovata nell'avventura`;
    opt.selected = true;
    select.appendChild(opt);
  }
}

function hydrateLootSelect(select, value = "") {
  select.innerHTML = "";
  const noneOpt = document.createElement("option");
  noneOpt.value = "";
  noneOpt.textContent = "— Nessuno —";
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
  hydrateLootSelect(els.lootPresetSelect, "coins");
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

function getSelectedMonster() { return null; } // no more separate monster model

function sceneTitleById(sceneId, fallback = "nessuna destinazione") {
  if (!sceneId) return fallback;
  if (sceneId === DEATH_SENTINEL) return "☠ Morte";
  if (sceneId === STAY_SENTINEL) return "📍 Resta qui";
  const target = state.adventure.descriptions.find((d) => d.id === sceneId);
  return target ? target.title : fallback;
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
      { key: "defeat", title: "Se il combattimento finisce in sconfitta", hint: "Caduta, cattura o ultima scelta prima del memoriale. Scegli ☠ Morte per andare direttamente alla schermata game over senza passare per una scena intermedia." },
      { key: "retreat", title: "Se il giocatore si ritira", hint: "Fuga, ripiego o bivio di emergenza. Scegli ☠ Morte per game over immediato, oppure ⚔ Non hai alcuna via di fuga. per bloccare la ritirata e far continuare il combattimento. Se vuoto, il runtime ricade sulla sconfitta." }
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
  normalized.category = snapshot.category || "";
  normalized.rarity = snapshot.rarity || "common";
  normalized.armorType = snapshot.category === "armor" ? (snapshot.armorType || "light") : "light";
  normalized.effectIds = Array.isArray(snapshot.effectIds) ? snapshot.effectIds.filter(Boolean) : [];
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
  normalized.requiredLockId = snapshot.requiredLockId || defaults.requiredLockId;
  normalized.requiredLockLabel = snapshot.requiredLockLabel || defaults.requiredLockLabel;
  // backward compat: if lockId is set, clear requiredItemId to avoid "multiple requirements" error
  if (normalized.requiredLockId) {
    normalized.requiredItemId = "";
    normalized.requiredItemCategory = "";
    normalized.requiredEffectId = "";
  } else {
    normalized.requiredItemId = snapshot.requiredItemId || defaults.requiredItemId;
    normalized.requiredItemCategory = snapshot.requiredItemCategory || defaults.requiredItemCategory;
    normalized.requiredEffectId = snapshot.requiredEffectId || defaults.requiredEffectId;
  }
  normalized.consumeOnUse = Boolean(snapshot.consumeOnUse);
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
    return descriptionIds.has(id);
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
    if (loot.rarity && !validRarities.has(loot.rarity)) {
      errors.push(`${ownerLabel}: rarita non valida (${loot.rarity}).`);
    }
    (loot.effectIds || []).forEach((effectId) => {
      if (!validEffects.has(effectId)) {
        errors.push(`${ownerLabel}: effectId non valido (${effectId}).`);
      } else if (!effectAllowedForCategory(effectId, loot.category)) {
        errors.push(`${ownerLabel}: effetto ${effectId} incompatibile con categoria ${loot.category || "—"}.`);
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
        if (!ev.itemId && !ev.itemCategory && !ev.effectId) {
          errors.push(`${label} in ${descId}: evento requisito senza alcun requisito specificato.`);
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
      case "dialogue":
        validateBranch(ev.branch, `branch di ${label}`, descId);
        break;
    }
  }

  // — Validazione testata avventura
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

  // — Raccogli tutti gli ID
  cleaned.descriptions.forEach((desc) => {
    if (descriptionIds.has(desc.id)) {
      errors.push(`ID duplicato: ${desc.id}.`);
    } else {
      descriptionIds.add(desc.id);
    }
  });

  // — Starter kit loot
  (cleaned.starterKitItems || []).forEach((loot) => validateLoot(loot, "Starter kit"));

  // — ID iniziale
  if (!cleaned.startingDescriptionId) {
    errors.push("Imposta una descrizione iniziale valida.");
  } else if (!descriptionIds.has(cleaned.startingDescriptionId)) {
    errors.push(`La descrizione iniziale ${cleaned.startingDescriptionId} non esiste.`);
  }

  // — Validazione nodi
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

  // — Raggiungibilita
  const reachable = new Set();
  if (descriptionIds.has(cleaned.startingDescriptionId)) {
    const queue = [cleaned.startingDescriptionId];
    const collectTargets = (branch) => {
      if (!branch) return;
      if (branch.targetId && descriptionIds.has(branch.targetId)) queue.push(branch.targetId);
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
      if (!desc) continue;
      (desc.choices || []).forEach((choice) => {
        if (choice.targetId && descriptionIds.has(choice.targetId)) queue.push(choice.targetId);
        if (choice.event) collectEventTargets(choice.event);
      });
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

bootstrap();
