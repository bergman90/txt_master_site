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
  { value: "epic", label: "Mitica" },
  { value: "legendary", label: "Mitica" }
];

const EFFECT_FAMILIES = [
  { value: "", label: "Nessuna" },
  { value: "combat_offense", label: "Offesa in combattimento" },
  { value: "combat_defense", label: "Difesa in combattimento" },
  { value: "combat_tempo", label: "Tempo di combattimento" },
  { value: "combat_control", label: "Controllo in combattimento" },
  { value: "survival_recovery", label: "Recupero e sopravvivenza" },
  { value: "exploration", label: "Esplorazione" },
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
  { value: "on_low_hp", label: "Con HP bassi" },
  { value: "on_choice", label: "Su scelta/evento" },
  { value: "on_scene_enter", label: "Entrando in scena" }
];

const EFFECT_PRESETS = [
  { value: "", label: "Nessun effetto", family: "", trigger: "", description: "Oggetto senza effetto speciale runtime.", categories: [] },
  { value: "restore_hp", label: "Cura", family: "survival_recovery", trigger: "consumable", description: "Recupera una parte degli HP quando l'oggetto viene usato.", categories: ["consumable"] },
  { value: "restore_all", label: "Rigenerazione totale", family: "survival_recovery", trigger: "consumable", description: "Ripristina completamente vita e stamina. Pensato per consumabili rari o reliquie attivabili.", categories: ["consumable", "relic"] },
  { value: "direct_damage", label: "Danno diretto", family: "combat_offense", trigger: "consumable", description: "Infligge danno immediato quando l'oggetto viene usato in combattimento.", categories: ["consumable", "utility"] },
  { value: "defense_surge", label: "Impulso difensivo", family: "combat_defense", trigger: "consumable", description: "Aumenta la difesa o offre una protezione temporanea. Funziona bene su scudi, armature, reliquie o consumabili tattici.", categories: ["consumable", "shield", "armor", "helm", "cloak", "relic"] },
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
    loot: [{ itemId: "warding_dust", itemName: "Polvere di guardia", quantity: 1, category: "consumable", rarity: "rare", effectIds: ["defense_surge"] }]
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
  { id: "warding_dust",   name: "Polvere di guardia",    category: "consumable", rarity: "rare",     effectIds: ["defense_surge"] },
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

const NODE_WIDTH = 280;
const NODE_HEIGHT = 170;
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
    title: "Nuova Avventura",
    description: "",
    tags: [],
    adaptivePowerMultiplier: 0.12,
    startingSceneId: "",
    allowCarryOverLoadout: true,
    allowFreshStart: true,
    starterKitItems: [],
    scenes: [],
    encounters: []
  },
  selectedSceneId: null,
  selectedMonsterId: null,
  drag: null,
  linkDraft: null,
  ui: {
    strictAlpha: true,
    autosaveAt: null,
    sceneDirty: false,
    sceneSavedAt: null,
    jsonRenderTimer: null,
    jsonRenderOptions: { syncScene: true },
    monsterListRenderTimer: null,
    flowLinksFrame: null,
    lastFlowLinksDragRenderAt: 0,
    flowAutoScrollFrame: null,
    sceneImageFrameTimer: null,
    saveAdventureFeedbackTimer: null,
    flowZoom: 1,
    currentProjectId: null,
    projectPickerOpen: false,
    flowBoardBounds: null,
    copiedScenePayload: null,
    lastCreatedSceneId: null
  }
};

function createEmptyAdventure() {
  return {
    id: "new-adventure",
    title: "Nuova Avventura",
    description: "",
    tags: [],
    adaptivePowerMultiplier: 0.12,
    startingSceneId: "",
    allowCarryOverLoadout: true,
    allowFreshStart: true,
    starterKitItems: [],
    scenes: [],
    encounters: []
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
    sceneCount: Array.isArray(adventure.scenes) ? adventure.scenes.length : 0,
    encounterCount: Array.isArray(adventure.encounters) ? adventure.encounters.length : 0,
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
  state.selectedSceneId = null;
  state.selectedMonsterId = null;
  state.drag = null;
  state.linkDraft = null;
  state.ui.autosaveAt = null;
  state.ui.sceneDirty = false;
  state.ui.sceneSavedAt = null;
  state.ui.flowZoom = 1;
  state.ui.currentProjectId = null;
  state.ui.lastCreatedSceneId = null;
}

function openAdventureProject(payload, {
  projectId = createProjectId(),
  autosaveAt = null,
  strictAlpha = true,
  flowZoom = 1,
  selectedSceneId = null,
  selectedMonsterId = null,
  persist = true
} = {}) {
  state.adventure = normalizeAdventureImport(payload);
  state.selectedSceneId = selectedSceneId || state.adventure.startingSceneId || state.adventure.scenes[0]?.id || null;
  state.selectedMonsterId = selectedMonsterId || state.adventure.encounters[0]?.id || null;
  state.drag = null;
  state.linkDraft = null;
  state.ui.autosaveAt = autosaveAt;
  state.ui.sceneDirty = false;
  state.ui.sceneSavedAt = null;
  state.ui.strictAlpha = strictAlpha;
  state.ui.flowZoom = Math.min(FLOW_ZOOM_MAX, Math.max(FLOW_ZOOM_MIN, Number(flowZoom || 1)));
  state.ui.currentProjectId = projectId;
  state.ui.lastCreatedSceneId = state.adventure.scenes[state.adventure.scenes.length - 1]?.id || null;
  if (persist) {
    persistLocalProject({ syncScene: false });
  }
  updateDocumentTitle();
  render();
  renderProjectPicker();
  showProjectPicker(false);
  maybeShowTutorial();
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
      selectedSceneId: payload.selectedSceneId || null,
      selectedMonsterId: payload.selectedMonsterId || null,
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
  baseAdventure.scenes = [];
  openAdventureProject(baseAdventure, { projectId, persist: false });
  createScene();
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
      selectedSceneId: payload.selectedSceneId || null,
      selectedMonsterId: payload.selectedMonsterId || null,
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
        <span>${entry.encounterCount || 0} mostri</span>
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
  sceneCheckConfig: document.getElementById("scene-check-config"),
  sceneCheckSkill: document.getElementById("scene-check-skill"),
  sceneCheckDifficulty: document.getElementById("scene-check-difficulty"),
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
  jsonOutput: document.getElementById("json-output"),
  tutorialOverlay: document.getElementById("tutorial-overlay"),
  tutorialCloseBtn: document.getElementById("tutorial-close-btn"),
  tutorialSkipBtn: document.getElementById("tutorial-skip-btn"),
  hotkeyBadgeBtn: document.getElementById("hotkey-badge-btn"),
  hotkeyPanel: document.getElementById("hotkey-panel")
};

function bootstrap() {
  hydrateSkillSelect(els.sceneCheckSkill);
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
  migrateLegacyLocalProjectIfNeeded();
  initializeEmptyWorkspace();
  render();
  renderProjectPicker();
  showProjectPicker(true);
}

function bindTutorial() {
  if (!els.tutorialOverlay) return;
  els.tutorialCloseBtn?.addEventListener("click", closeTutorial);
  els.tutorialSkipBtn?.addEventListener("click", skipTutorial);
  els.tutorialOverlay.addEventListener("click", (e) => {
    if (e.target === els.tutorialOverlay) skipTutorial();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !els.tutorialOverlay.classList.contains("hidden")) {
      skipTutorial();
    }
  });
}

function maybeShowTutorial() {
  try {
    const seen = window.localStorage.getItem(TUTORIAL_SEEN_KEY);
    if (!seen) showTutorial();
  } catch (_) {
    // localStorage not available — skip tutorial
  }
}

function showTutorial() {
  if (!els.tutorialOverlay) return;
  els.tutorialOverlay.classList.remove("hidden");
}

function closeTutorial() {
  if (!els.tutorialOverlay) return;
  els.tutorialOverlay.classList.add("hidden");
  try {
    window.localStorage.setItem(TUTORIAL_SEEN_KEY, "1");
  } catch (_) {}
}

function skipTutorial() {
  if (!els.tutorialOverlay) return;
  els.tutorialOverlay.classList.add("hidden");
  // Non salva il flag: il tutorial riappare alla prossima visita
}

function bindHotkeyPanel() {
  if (!els.hotkeyBadgeBtn || !els.hotkeyPanel) return;
  els.hotkeyBadgeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    els.hotkeyPanel.classList.toggle("hidden");
  });
  document.addEventListener("click", (e) => {
    if (!els.hotkeyPanel.classList.contains("hidden") &&
        !els.hotkeyPanel.contains(e.target) &&
        e.target !== els.hotkeyBadgeBtn) {
      els.hotkeyPanel.classList.add("hidden");
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
  els.alphaStrictValidation.addEventListener("change", (e) => {
    state.ui.strictAlpha = Boolean(e.target.checked);
    scheduleJsonRender(90, { syncScene: false });
  });
}

function bindActions() {
  els.addSceneBtn.addEventListener("click", createScene);
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
    if (!state.ui.currentProjectId) return;
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
  els.addSceneLootBtn.addEventListener("click", addSceneLoot);
  els.addMonsterLootBtn.addEventListener("click", addMonsterLoot);
  els.addCombatGroupBtn.addEventListener("click", addCombatGroup);
  els.saveAdventureBtn.addEventListener("click", saveAdventureProject);
  els.exportJsonBtn.addEventListener("click", exportJson);
  els.refreshJsonBtn.addEventListener("click", renderJson);
  els.flowZoomOutBtn?.addEventListener("click", () => changeFlowZoom(-FLOW_ZOOM_STEP));
  els.flowZoomInBtn?.addEventListener("click", () => changeFlowZoom(FLOW_ZOOM_STEP));
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
    if (!state.selectedSceneId) return;
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
    if (!state.selectedSceneId) return;
    event.preventDefault();
    deleteScene();
    return;
  }

  if (!hasModifier && key === "n") {
    event.preventDefault();
    createScene();
    return;
  }

  if (key === "escape" && state.linkDraft) {
    event.preventDefault();
    state.linkDraft = null;
    renderFlowLinks();
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
  els.sceneKind.addEventListener("change", (e) => {
    const scene = getSelectedScene();
    if (!scene) return;
    scene.kind = e.target.value;
    normalizeScene(scene);
    markSceneDirty();
    render();
  });

  els.sceneTitle.addEventListener("input", (e) => {
    const scene = getSelectedScene();
    if (!scene) return;
    scene.title = e.target.value;
    markSceneDirty();
    refreshFlowCard(scene.id);
    scheduleJsonRender();
  });

  els.sceneOpeningText.addEventListener("input", (e) => {
    const scene = getSelectedScene();
    if (!scene) return;
    scene.openingText = e.target.value;
    markSceneDirty();
    refreshFlowCard(scene.id);
    scheduleJsonRender();
  });

  els.sceneCheckSkill.addEventListener("change", (e) => {
    const scene = getSelectedScene();
    if (!scene) return;
    scene.checkConfig.skill = normalizeString(e.target.value);
    markSceneDirty();
    renderJson();
  });

  els.sceneCheckDifficulty.addEventListener("input", (e) => {
    const scene = getSelectedScene();
    if (!scene) return;
    scene.checkConfig.difficulty = Number(e.target.value || 0);
    markSceneDirty();
    renderJson();
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
    markSceneDirty();
    renderSceneEditor();
    renderJson();
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
  markSceneDirty();
  renderSceneEditor();
  renderJson();
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
    const sourceScene = state.adventure.scenes.find((scene) => scene.id === sourceSceneId);
    if (sourceScene) {
      addLinkedTargetToScene(sourceScene, targetSceneId);
      state.selectedSceneId = sourceSceneId;
      render();
    }
  } else {
    renderFlowLinks();
  }
}

function updateDraggedScenePosition(clientX, clientY) {
  const drag = state.drag;
  if (!drag) return;
  const dragBounds = drag.bounds || getCurrentFlowBoardBounds();
  const point = flowBoardPointFromClient({ clientX, clientY }, dragBounds);
  const scene = state.adventure.scenes.find((entry) => entry.id === drag.sceneId);
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

function createScene() {
  saveCurrentScene();
  const index = state.adventure.scenes.length + 1;
  const spawnPosition = findNextScenePosition();
  const scene = {
    id: createUniqueSceneId(),
    kind: "description",
    title: `Evento ${index}`,
    openingText: "",
    eventImage: null,
    choices: [],
    outcomes: createEmptySceneOutcomes(),
    sceneLoot: [],
    position: spawnPosition
  };
  state.adventure.scenes.push(scene);
  state.selectedSceneId = scene.id;
  state.ui.lastCreatedSceneId = scene.id;
  if (!state.adventure.startingSceneId) state.adventure.startingSceneId = scene.id;
  state.ui.sceneDirty = true;
  renderWorkspace({ skipJson: true });
  scheduleJsonRender(320, { syncScene: false });
}

function findNextScenePosition() {
  const anchor = state.adventure.scenes.find((scene) => scene.id === state.ui.lastCreatedSceneId)
    || state.adventure.scenes[state.adventure.scenes.length - 1]
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
  return state.adventure.scenes.some((scene) =>
    Math.abs((scene.position?.x || 0) - x) < 80
    && Math.abs((scene.position?.y || 0) - y) < 80
  );
}

function copySelectedSceneToClipboard() {
  const scene = getSelectedScene();
  if (!scene) return;
  saveCurrentScene({ renderFlow: false });
  state.ui.copiedScenePayload = cloneValue(scene);
  updateSceneSaveStatus();
}

function pasteCopiedScene() {
  if (!state.ui.copiedScenePayload) return;
  saveCurrentScene({ renderFlow: false });
  const scene = cloneValue(state.ui.copiedScenePayload);
  const duplicated = preparePastedScene(scene);
  state.adventure.scenes.push(duplicated);
  const previousSceneId = state.selectedSceneId;
  state.selectedSceneId = duplicated.id;
  state.ui.lastCreatedSceneId = duplicated.id;
  updateFlowCardSelection(previousSceneId, duplicated.id);
  renderWorkspace({ skipJson: true });
  scheduleJsonRender(320, { syncScene: false });
}

function preparePastedScene(scene) {
  const duplicated = cloneValue(scene);
  normalizeScene(duplicated);
  duplicated.id = createUniqueSceneId();
  duplicated.title = uniqueSceneCopyTitle(duplicated.title || "Evento");
  duplicated.position = {
    x: clamp((duplicated.position?.x || 0) + 72, -FLOW_COORD_LIMIT, FLOW_COORD_LIMIT),
    y: clamp((duplicated.position?.y || 0) + 72, -FLOW_COORD_LIMIT, FLOW_COORD_LIMIT)
  };
  duplicated.choices = (duplicated.choices || []).map((choice, index) =>
    normalizeChoice({ ...choice, id: `choice_${index + 1}` }, index + 1)
  );
  outcomeKeysForScene(duplicated).forEach((key) => {
    const branch = getOutcomeBranch(duplicated, key);
    branch.choices = (branch.choices || []).map((choice, index) =>
      normalizeChoice({ ...choice, id: `choice_${index + 1}` }, index + 1)
    );
  });
  duplicateCombatMonstersForScene(duplicated);
  return duplicated;
}

function duplicateCombatMonstersForScene(scene) {
  if (!Array.isArray(scene.combatGroups) || !scene.combatGroups.length) return;
  const duplicatedMonsterIds = new Map();
  scene.combatGroups = scene.combatGroups.map((group) => {
    const monsterId = normalizeString(group.monsterId);
    if (!monsterId) return { ...group };
    if (!duplicatedMonsterIds.has(monsterId)) {
      const monster = state.adventure.encounters.find((entry) => entry.id === monsterId);
      if (!monster) {
        duplicatedMonsterIds.set(monsterId, monsterId);
      } else {
        const copy = cloneValue(monster);
        copy.id = createUniqueMonsterId();
        copy.name = uniqueMonsterName(monster.name);
        copy.loot = (copy.loot || []).map((loot) => normalizeLoot(loot));
        state.adventure.encounters.push(copy);
        duplicatedMonsterIds.set(monsterId, copy.id);
      }
    }
    return {
      ...group,
      monsterId: duplicatedMonsterIds.get(monsterId)
    };
  });
}

function deleteScene() {
  if (!state.selectedSceneId) return;
  state.adventure.scenes = state.adventure.scenes.filter((scene) => scene.id !== state.selectedSceneId);
  state.adventure.scenes.forEach((scene) => {
    scene.choices = scene.choices.filter((choice) =>
      choice.targetSceneId !== state.selectedSceneId &&
      choice.skillCheck?.successSceneId !== state.selectedSceneId &&
      choice.skillCheck?.failureSceneId !== state.selectedSceneId
    );
    normalizeScene(scene);
    outcomeKeysForScene(scene).forEach((key) => {
      const branch = getOutcomeBranch(scene, key);
      if (branch.targetSceneId === state.selectedSceneId) branch.targetSceneId = "";
      branch.choices = branch.choices.filter((choice) =>
        choice.targetSceneId !== state.selectedSceneId &&
        choice.skillCheck?.successSceneId !== state.selectedSceneId &&
        choice.skillCheck?.failureSceneId !== state.selectedSceneId
      );
    });
  });
  if (state.adventure.startingSceneId === state.selectedSceneId) {
    state.adventure.startingSceneId = state.adventure.scenes[0]?.id || "";
  }
  state.selectedSceneId = state.adventure.scenes[0]?.id || null;
  render();
}

function createMonster({ renderAfter = true } = {}) {
  const index = state.adventure.encounters.length + 1;
  const monster = {
    id: createUniqueMonsterId(),
    name: `Mostro ${index}`,
    description: "",
    hitPoints: 10,
    attackBonus: 2,
    defense: 10,
    damageMin: 1,
    damageMax: 4,
    goldReward: 0,
    abilityIds: [],
    hasBerserkerPhase: false,
    loot: [],
    sourceType: "custom"
  };
  state.adventure.encounters.push(monster);
  state.selectedMonsterId = monster.id;
  if (renderAfter) render();
  return monster;
}

function createMonsterForCombatScene(scene) {
  const monster = createMonster({ renderAfter: false });
  if (scene?.combatGroups) {
    const group = scene.combatGroups.find((entry) => !entry.monsterId);
    if (group) group.monsterId = monster.id;
  }
  state.selectedMonsterId = monster.id;
  return monster;
}

function createMonsterFromPreset() {
  const presetId = els.monsterPresetSelect.value;
  if (!presetId || presetId === "custom") {
    return createMonster();
  }

  const preset = monsterPresetById(presetId);
  if (!preset) {
    return createMonster();
  }

  const monster = createMonsterFromPresetData(preset, createUniqueMonsterId());
  state.adventure.encounters.push(monster);
  state.selectedMonsterId = monster.id;
  render();
  return monster;
}

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

function applyPresetToSelectedMonster() {
  const monster = getSelectedMonster();
  if (!monster) return;
  const presetId = els.monsterEditorPresetSelect.value;
  if (!presetId || presetId === "custom") return;
  const preset = monsterPresetById(presetId);
  if (!preset) return;

  monster.name = uniqueMonsterName(preset.name);
  monster.description = preset.description;
  monster.hitPoints = preset.hitPoints;
  monster.attackBonus = preset.attackBonus;
  monster.defense = preset.defense;
  monster.damageMin = preset.damageMin;
  monster.damageMax = preset.damageMax;
  monster.goldReward = preset.goldReward;
  monster.loot = buildMonsterLootFromPreset(preset);
  render();
}

function deleteMonster() {
  if (!state.selectedMonsterId) return;
  state.adventure.encounters = state.adventure.encounters.filter((monster) => monster.id !== state.selectedMonsterId);
  state.adventure.scenes.forEach((scene) => {
    if (scene.combatGroups) {
      scene.combatGroups = scene.combatGroups.filter((group) => group.monsterId !== state.selectedMonsterId);
    }
  });
  state.selectedMonsterId = state.adventure.encounters[0]?.id || null;
  render();
}

function addChoice() {
  const scene = getSelectedScene();
  if (!scene) return;
  if (scene.kind !== "description") return;
  scene.choices.push(createEmptyChoice(scene.choices.length + 1));
  render();
}

function addSceneLoot() {
  const scene = getSelectedScene();
  if (!scene) return;
  scene.sceneLoot.push(createLootFromPreset(els.lootPresetSelect.value));
  markSceneDirty();
  renderSceneLoot(scene);
  scheduleJsonRender(180);
}

function addStarterKitLoot() {
  state.adventure.starterKitItems.push(createLootFromPreset(els.lootPresetSelect.value));
  render();
}

function addMonsterLoot() {
  const monster = getSelectedMonster();
  if (!monster) return;
  monster.loot.push(createLootFromPreset(els.lootPresetSelect.value));
  markSceneDirty();
  renderMonsterLootEditor(monster);
  scheduleMonsterListRender();
  scheduleJsonRender(180);
}

function addCombatGroup() {
  const scene = getSelectedScene();
  if (!scene) return;
  scene.combatGroups = scene.combatGroups || [];
  scene.combatGroups.push({ monsterId: "", count: 1 });
  render();
}

function render() {
  return renderWorkspace();
}

function renderWorkspace({ skipJson = false } = {}) {
  renderAdventureSetup();
  renderFlowBoard();
  renderMonsterList();
  renderSceneEditor();
  renderMonsterEditor();
  if (!skipJson) renderJson();
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
  els.alphaStrictValidation.checked = Boolean(state.ui.strictAlpha);
  updateFlowZoomLabel();
  els.autosaveIndicator.textContent = state.ui.currentProjectId
    ? state.ui.autosaveAt
      ? `Progetto locale attivo | ultimo salvataggio ${formatAutosaveTime(state.ui.autosaveAt)}`
      : "Progetto locale attivo | in attesa del primo salvataggio."
    : "Nessun progetto aperto. Scegli o crea un progetto dall'archivio locale.";
  renderLootList(els.starterKitList, state.adventure.starterKitItems, render);
}

function persistLocalProject({ syncScene = true } = {}) {
  try {
    if (!state.ui.currentProjectId) return;
    if (syncScene) syncCurrentSceneEditorStateFromDom();
    const payload = {
      adventure: state.adventure,
      selectedSceneId: state.selectedSceneId,
      selectedMonsterId: state.selectedMonsterId,
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
    const failureSceneId = normalizeString(card.querySelector('[data-field="checkFailure"]')?.value);
    const difficulty = Number(card.querySelector('[data-field="checkDifficulty"]')?.value || 0);

    if (attribute && successSceneId && failureSceneId) {
      choice.skillCheck = {
        attribute,
        difficulty,
        successSceneId,
        failureSceneId
      };
      choice.targetSceneId = "";
    } else {
      delete choice.skillCheck;
      choice.targetSceneId = normalizeString(card.querySelector('[data-field="targetSceneId"]')?.value);
    }
  });
}

function syncCurrentSceneEditorStateFromDom() {
  const scene = getSelectedScene();
  if (!scene) return;

  normalizeScene(scene);
  scene.kind = normalizeString(els.sceneKind?.value) || scene.kind;
  scene.title = els.sceneTitle?.value ?? scene.title;
  scene.openingText = els.sceneOpeningText?.value ?? scene.openingText;

  if (scene.kind === "check") {
    scene.checkConfig = scene.checkConfig || { skill: "", difficulty: 10 };
    scene.checkConfig.skill = normalizeString(els.sceneCheckSkill?.value);
    scene.checkConfig.difficulty = Number(els.sceneCheckDifficulty?.value || 0);
  }

  if (scene.kind === "description") {
    syncChoiceCollectionFromContainer(els.choiceList, scene.choices);
    return;
  }

  outcomeDefinitionsForScene(scene).forEach((definition, index) => {
    const branch = getOutcomeBranch(scene, definition.key);
    const wrapper = els.sceneOutcomesList?.children[index];
    if (!wrapper) return;
    branch.targetSceneId = normalizeString(wrapper.querySelector('[data-role="outcome-target"]')?.value);
    syncChoiceCollectionFromContainer(wrapper.querySelector('[data-role="outcome-choice-list"]'), branch.choices);
  });
}

function saveCurrentScene({ announce = false, renderFlow = true } = {}) {
  if (!state.selectedSceneId) return;
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
  if (!els.saveAdventureBtn) return;
  if (state.ui.saveAdventureFeedbackTimer) {
    window.clearTimeout(state.ui.saveAdventureFeedbackTimer);
    state.ui.saveAdventureFeedbackTimer = null;
  }
  els.saveAdventureBtn.textContent = "Salvato";
  els.saveAdventureBtn.classList.add("is-saved");
  state.ui.saveAdventureFeedbackTimer = window.setTimeout(() => {
    els.saveAdventureBtn.textContent = "Salva avventura";
    els.saveAdventureBtn.classList.remove("is-saved");
    state.ui.saveAdventureFeedbackTimer = null;
  }, 1600);
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
  if (!nextSceneId || nextSceneId === state.selectedSceneId) return;
  const previousSceneId = state.selectedSceneId;
  saveCurrentScene({ renderFlow: false });
  state.selectedSceneId = nextSceneId;
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

  state.adventure.scenes.forEach((scene, index) => {
    fragment.appendChild(createFlowCard(scene, index, bounds));
  });

  els.flowCanvas.appendChild(fragment);
}

function createFlowCard(scene, index, bounds = getCurrentFlowBoardBounds()) {
  const card = document.createElement("div");
  syncFlowCard(card, scene, index, bounds);

  card.addEventListener("click", (event) => {
    if (event.target.closest(".link-handle")) return;
    switchSelectedScene(card.dataset.sceneId);
  });

  card.addEventListener("dblclick", () => {
    switchSelectedScene(card.dataset.sceneId);
    els.sceneEditor.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  card.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    if (event.target.closest(".link-handle")) return;
    event.preventDefault();
    const sceneId = card.dataset.sceneId;
    const currentScene = state.adventure.scenes.find((entry) => entry.id === sceneId);
    if (!currentScene) return;
    card.setPointerCapture?.(event.pointerId);
    const point = flowBoardPointFromClient(event);
    state.drag = {
      sceneId,
      offsetX: point.x - currentScene.position.x,
      offsetY: point.y - currentScene.position.y,
      bounds: getCurrentFlowBoardBounds(),
      pointerId: event.pointerId
    };
  });

  // Link-handle listener bound once per card creation, not on every sync
  bindLinkHandle(card, scene);

  return card;
}

function bindLinkHandle(card, scene) {
  card.addEventListener("pointerdown", (event) => {
    if (!event.target.closest(".link-handle")) return;
    event.stopPropagation();
    const sceneId = card.dataset.sceneId;
    const currentScene = state.adventure.scenes.find((entry) => entry.id === sceneId);
    if (!currentScene) return;
    const start = nodeAnchor(currentScene);
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

function syncFlowCard(card, scene, index, bounds = getCurrentFlowBoardBounds()) {
  const metrics = getFlowCardMetrics();
  const boardPoint = logicalToBoardPoint(scene.position, bounds);
  card.className = `flow-card node-card ${scene.id === state.selectedSceneId ? "active" : ""} ${metrics.compact ? "flow-card--compact" : ""}`;
  card.dataset.sceneId = scene.id;
  card.style.left = `${boardPoint.x}px`;
  card.style.top = `${boardPoint.y}px`;
  card.style.width = `${metrics.width}px`;
  card.style.height = metrics.compact ? `${metrics.height}px` : "";
  card.style.minHeight = metrics.compact ? "" : `${metrics.height}px`;
  card.title = `${index + 1}. ${scene.title || "Evento"} (${sceneLabel(scene.kind)})`;
  card.innerHTML = buildFlowCardMarkup(scene, index);
}

function buildFlowCardMarkup(scene, index) {
  const metrics = getFlowCardMetrics();
  if (metrics.compact) {
    return `
      <button class="link-handle" title="Trascina per collegare"></button>
      <div class="flow-card-mini-index">${index + 1}</div>
      <div class="flow-card-mini-meta">
        <span>${sceneKindShortLabel(scene.kind)}</span>
        <span>${scene.id === state.adventure.startingSceneId ? "IN" : ""}</span>
      </div>
    `;
  }
  return `
    <button class="link-handle" title="Trascina per collegare"></button>
    <div class="flow-card-head">
      <strong>${index + 1}. [${sceneLabel(scene.kind)}] ${scene.title}</strong>
      <span>${scene.id === state.adventure.startingSceneId ? "INIZIO" : ""}</span>
    </div>
    <p>${truncate(scene.openingText || "Nessun testo iniziale ancora.", 120)}</p>
    <div class="flow-choices">
      ${renderFlowChoiceSummary(scene)}
    </div>
  `;
}

function renderFlowChoiceSummary(scene) {
  if (scene.kind !== "description") return renderOutcomeSummary(scene);
  return scene.choices.length
    ? scene.choices.map((choice, idx) =>
      `<div class="flow-choice-row">${choiceLabel(idx)} ${choice.text || "(scelta senza testo)"} -> ${targetLabel(choice)}</div>`
    ).join("")
    : '<div class="flow-empty">Nessuna scelta ancora.</div>';
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
  state.adventure.scenes.forEach((scene) => {
    const source = nodeAnchor(scene, bounds);
    if (scene.kind === "description") {
      scene.choices.forEach((choice) => appendChoiceLinks(lines, source, choice, "#b56d39", visibleBounds, bounds));
    } else {
      outcomeDefinitionsForScene(scene).forEach((definition) => {
        const branch = getOutcomeBranch(scene, definition.key);
        const color = outcomeLinkColor(definition.key);
        if (branch.choices.length) {
          branch.choices.forEach((choice) => appendChoiceLinks(lines, source, choice, color, visibleBounds, bounds));
        } else if (branch.targetSceneId) {
          const target = state.adventure.scenes.find((entry) => entry.id === branch.targetSceneId);
          if (target) {
            const targetEntry = nodeEntry(target, bounds);
            if (shouldRenderFlowLink(source, targetEntry, visibleBounds)) {
              lines.push(linkPath(source, targetEntry, color, definition.key === "retreat"));
            }
          }
        }
      });
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

function appendChoiceLinks(lines, source, choice, defaultColor, visibleBounds = null, bounds = getCurrentFlowBoardBounds()) {
  if (choice.skillCheck) {
    const success = state.adventure.scenes.find((entry) => entry.id === choice.skillCheck.successSceneId);
    const failure = state.adventure.scenes.find((entry) => entry.id === choice.skillCheck.failureSceneId);
    if (success) {
      const successEntry = nodeEntry(success, bounds);
      if (shouldRenderFlowLink(source, successEntry, visibleBounds)) {
        lines.push(linkPath(source, successEntry, "#6f8a57"));
      }
    }
    if (failure) {
      const failureEntry = nodeEntry(failure, bounds);
      if (shouldRenderFlowLink(source, failureEntry, visibleBounds)) {
        lines.push(linkPath(source, failureEntry, "#b94a48"));
      }
    }
  } else if (choice.targetSceneId) {
    const target = state.adventure.scenes.find((entry) => entry.id === choice.targetSceneId);
    if (target) {
      const targetEntry = nodeEntry(target, bounds);
      if (shouldRenderFlowLink(source, targetEntry, visibleBounds)) {
        lines.push(linkPath(source, targetEntry, defaultColor));
      }
    }
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
  const scenePositions = state.adventure.scenes.map((scene) => scene.position || { x: 0, y: 0 });
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
  return state.adventure.scenes.reduce((total, scene) => {
    if (scene.kind === "description") {
      return total + (scene.choices?.length || 0);
    }
    return total + outcomeDefinitionsForScene(scene).reduce((branchTotal, definition) => {
      const branch = getOutcomeBranch(scene, definition.key);
      return branchTotal + (branch.choices?.length || 0) + (branch.targetSceneId ? 1 : 0);
    }, 0);
  }, state.linkDraft ? 1 : 0);
}

function shouldVirtualizeFlowLinks() {
  return state.adventure.scenes.length >= FLOW_LINK_VIRTUALIZE_SCENE_THRESHOLD
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

function flowCardElement(sceneId) {
  return els.flowCanvas.querySelector(`.node-card[data-scene-id="${sceneId}"]`);
}

function updateFlowCardPosition(sceneId, bounds = getCurrentFlowBoardBounds()) {
  const scene = state.adventure.scenes.find((entry) => entry.id === sceneId);
  const card = flowCardElement(sceneId);
  if (!scene || !card) return;
  const boardPoint = logicalToBoardPoint(scene.position, bounds);
  card.style.left = `${boardPoint.x}px`;
  card.style.top = `${boardPoint.y}px`;
}

function updateAllFlowCardPositions(bounds = getCurrentFlowBoardBounds()) {
  state.adventure.scenes.forEach((scene) => updateFlowCardPosition(scene.id, bounds));
}

function refreshFlowCard(sceneId) {
  const sceneIndex = state.adventure.scenes.findIndex((entry) => entry.id === sceneId);
  if (sceneIndex === -1) return;
  const current = flowCardElement(sceneId);
  const bounds = getCurrentFlowBoardBounds();
  if (!current) {
    els.flowCanvas.appendChild(createFlowCard(state.adventure.scenes[sceneIndex], sceneIndex, bounds));
    return;
  }
  syncFlowCard(current, state.adventure.scenes[sceneIndex], sceneIndex, bounds);
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
  const scene = getSelectedScene();
  const visible = Boolean(scene);
  els.sceneEmpty.classList.toggle("hidden", visible);
  els.sceneEditor.classList.toggle("hidden", !visible);
  updateSceneSaveStatus();
  if (!scene) return;

  normalizeScene(scene);
  els.sceneKind.value = scene.kind;
  els.sceneTitle.value = scene.title;
  els.sceneOpeningText.value = scene.openingText;
  renderSceneImagePreview(scene);
  els.sceneCheckConfig.classList.toggle("hidden", scene.kind !== "check");
  els.sceneCombatConfig.classList.toggle("hidden", scene.kind !== "combat");
  const useGenericChoices = scene.kind === "description";
  els.sceneChoicesSection.classList.toggle("hidden", !useGenericChoices);
  els.sceneOutcomesSection.classList.toggle("hidden", useGenericChoices);
  els.sceneChoicesSection.open = true;
  els.sceneChoicesSummary.textContent = "Scelte del nodo";
  els.sceneChoicesHint.textContent = "Le scelte guidano il nodo e i suoi rami principali.";
  els.addChoiceBtn.textContent = "Aggiungi scelta";
  els.sceneOutcomesSummary.textContent = scene.kind === "check" ? "Riuscita e fallimento" : "Vittoria, sconfitta e ritirata";
  const baseOutcomeHint = scene.kind === "check"
    ? "Ogni esito della prova puo portare subito a un altro evento oppure aprire una scelta successiva."
    : "Ogni esito del combattimento puo andare diretto a un evento oppure aprire un piccolo bivio successivo.";
  els.sceneOutcomesHint.textContent = scene.choices.length > 0
    ? `${baseOutcomeHint} Attenzione: questa scena ha ancora scelte generiche legacy. Spostale dentro gli esiti prima dell'export.`
    : baseOutcomeHint;
  hydrateSkillSelect(els.sceneCheckSkill, scene.checkConfig?.skill || "");
  els.sceneCheckDifficulty.value = scene.checkConfig?.difficulty ?? 10;

  renderSceneLoot(scene);
  if (useGenericChoices) renderChoices(scene);
  else renderOutcomeEditor(scene);
  renderCombatGroups(scene);
}

function renderSceneLoot(scene) {
  renderLootList(els.sceneLootList, scene.sceneLoot, {
    rerender: () => renderSceneLoot(scene)
  });
}

function renderSceneImagePreview(scene) {
  const normalizedImage = scene.eventImage ? normalizeSceneImage(scene.eventImage) : null;
  if (normalizedImage) {
    scene.eventImage = normalizedImage;
  }
  const hasSceneImage = Boolean(normalizedImage?.dataUrl);
  els.sceneImagePreview.classList.toggle("hidden", !hasSceneImage);
  if (!hasSceneImage) {
    els.sceneImageThumb.removeAttribute("src");
    els.sceneImageName.textContent = "Immagine evento";
    return;
  }
  els.sceneImageThumb.src = normalizedImage.dataUrl;
  els.sceneImageZoom.value = String(normalizedImage.zoom);
  els.sceneImageFocusX.value = String(normalizedImage.focusX);
  els.sceneImageFocusY.value = String(normalizedImage.focusY);
  const imageMeta = [
    normalizedImage.name || "Immagine evento",
    normalizedImage.width && normalizedImage.height ? `${normalizedImage.width}x${normalizedImage.height}` : "",
    normalizedImage.sizeKb ? `${normalizedImage.sizeKb} KB` : "",
    `zoom ${normalizedImage.zoom.toFixed(2)}x`
  ].filter(Boolean).join(" | ");
  els.sceneImageName.textContent = imageMeta || "Immagine evento";
}

function renderChoices(scene) {
  renderChoiceCards(els.choiceList, scene.choices, {
    onChange: () => {
      markSceneDirty();
      refreshFlowCard(scene.id);
      scheduleFlowLinksRender();
      scheduleJsonRender();
    },
    onRemove: (index) => {
      scene.choices.splice(index, 1);
      markSceneDirty();
      renderChoices(scene);
      refreshFlowCard(scene.id);
      scheduleFlowLinksRender();
      scheduleJsonRender();
    }
  });
}

function renderChoiceCards(container, choices, handlers) {
  container.innerHTML = "";
  choices.forEach((choice, index) => {
    const node = document.getElementById("choice-template").content.firstElementChild.cloneNode(true);
    node.querySelector('[data-field="text"]').value = choice.text || "";
    node.querySelector('[data-field="endingText"]').value = choice.endingText || "";
    node.querySelector('[data-field="requiredLockId"]').value = choice.requiredLockId || "";
    node.querySelector('[data-field="requiredLockLabel"]').value = choice.requiredLockLabel || "";
    hydrateSceneTargetSelect(node.querySelector('[data-field="targetSceneId"]'), choice.targetSceneId || "");
    hydrateSkillSelect(node.querySelector('[data-field="checkAttribute"]'), choice.skillCheck?.attribute || "");
    hydrateSceneTargetSelect(node.querySelector('[data-field="checkSuccess"]'), choice.skillCheck?.successSceneId || "");
    hydrateSceneTargetSelect(node.querySelector('[data-field="checkFailure"]'), choice.skillCheck?.failureSceneId || "");
    hydrateLootSelect(node.querySelector('[data-field="requiredItemId"]'), choice.requiredItemId || "");
    node.querySelector('[data-field="requiredItemIdCustom"]').value = choice.requiredItemId || "";
    hydrateCategorySelect(node.querySelector('[data-field="requiredItemCategory"]'), choice.requiredItemCategory || "");
    hydrateEffectSelect(node.querySelector('[data-field="requiredEffectId"]'), choice.requiredEffectId || "");
    node.querySelector('[data-field="checkDifficulty"]').value = choice.skillCheck?.difficulty ?? "";
    node.querySelector('[data-field="consumeOnUse"]').checked = Boolean(choice.consumeOnUse);

    node.querySelector('[data-field="text"]').addEventListener("input", (event) => {
      choice.text = event.target.value;
      handlers.onChange();
    });

    node.querySelector('[data-field="endingText"]').addEventListener("input", (event) => {
      choice.endingText = event.target.value;
      handlers.onChange();
    });

    node.querySelector('[data-field="targetSceneId"]').addEventListener("change", (event) => {
      choice.targetSceneId = normalizeString(event.target.value);
      delete choice.skillCheck;
      handlers.onChange();
    });

    node.querySelector('[data-field="requiredLockId"]').addEventListener("input", (event) => {
      choice.requiredLockId = normalizeString(event.target.value) || "";
      handlers.onChange();
    });

    node.querySelector('[data-field="requiredLockLabel"]').addEventListener("input", (event) => {
      choice.requiredLockLabel = event.target.value;
      handlers.onChange();
    });

    node.querySelector('[data-field="requiredItemId"]').addEventListener("change", (event) => {
      choice.requiredItemId = normalizeString(event.target.value) || "";
      if (choice.requiredItemId) {
        choice.requiredItemCategory = "";
        choice.requiredEffectId = "";
        node.querySelector('[data-field="requiredItemIdCustom"]').value = choice.requiredItemId;
        node.querySelector('[data-field="requiredItemCategory"]').value = "";
        node.querySelector('[data-field="requiredEffectId"]').value = "";
      }
      handlers.onChange();
    });

    node.querySelector('[data-field="requiredItemIdCustom"]').addEventListener("input", (event) => {
      choice.requiredItemId = normalizeString(event.target.value) || "";
      if (choice.requiredItemId) {
        choice.requiredItemCategory = "";
        choice.requiredEffectId = "";
        node.querySelector('[data-field="requiredItemCategory"]').value = "";
        node.querySelector('[data-field="requiredEffectId"]').value = "";
      }
      handlers.onChange();
    });

    node.querySelector('[data-field="requiredItemCategory"]').addEventListener("change", (event) => {
      choice.requiredItemCategory = normalizeString(event.target.value) || "";
      if (choice.requiredItemCategory) {
        choice.requiredItemId = "";
        node.querySelector('[data-field="requiredItemIdCustom"]').value = "";
        choice.requiredEffectId = "";
        node.querySelector('[data-field="requiredItemId"]').value = "";
        node.querySelector('[data-field="requiredEffectId"]').value = "";
      }
      handlers.onChange();
    });

    node.querySelector('[data-field="requiredEffectId"]').addEventListener("change", (event) => {
      choice.requiredEffectId = normalizeString(event.target.value) || "";
      if (choice.requiredEffectId) {
        choice.requiredItemId = "";
        choice.requiredItemCategory = "";
        node.querySelector('[data-field="requiredItemIdCustom"]').value = "";
        node.querySelector('[data-field="requiredItemId"]').value = "";
        node.querySelector('[data-field="requiredItemCategory"]').value = "";
      }
      handlers.onChange();
    });

    node.querySelector('[data-field="consumeOnUse"]').addEventListener("change", (event) => {
      choice.consumeOnUse = Boolean(event.target.checked);
      handlers.onChange();
    });

    node.querySelector('[data-field="checkAttribute"]').addEventListener("change", () => updateChoiceCheck(choice, node, handlers.onChange));
    node.querySelector('[data-field="checkDifficulty"]').addEventListener("input", () => updateChoiceCheck(choice, node, handlers.onChange));
    node.querySelector('[data-field="checkSuccess"]').addEventListener("change", () => updateChoiceCheck(choice, node, handlers.onChange));
    node.querySelector('[data-field="checkFailure"]').addEventListener("change", () => updateChoiceCheck(choice, node, handlers.onChange));

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
    wrapper.innerHTML = `
      <summary class="panel-summary compact-summary combat-group-summary">
        <span>${definition.title}</span>
        <small>${summaryMeta}</small>
      </summary>
      <label>Vai direttamente a evento<select data-role="outcome-target"></select></label>
      <p class="hint">${definition.hint}</p>
      <div class="subsection-header">
        <button type="button" data-action="add-outcome-choice">Aggiungi scelta di esito</button>
      </div>
      <div data-role="outcome-choice-list"></div>
    `;

    const targetSelect = wrapper.querySelector('[data-role="outcome-target"]');
    hydrateSceneTargetSelect(targetSelect, branch.targetSceneId || "");
    targetSelect.addEventListener("change", (event) => {
      setOutcomeTarget(scene, definition.key, event.target.value);
      renderOutcomeEditor(scene);
      refreshFlowCard(scene.id);
      scheduleFlowLinksRender();
      scheduleJsonRender();
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
  const attribute = normalizeString(node.querySelector('[data-field="checkAttribute"]').value);
  const success = normalizeString(node.querySelector('[data-field="checkSuccess"]').value);
  const failure = normalizeString(node.querySelector('[data-field="checkFailure"]').value);
  const difficulty = Number(node.querySelector('[data-field="checkDifficulty"]').value || 0);

  if (attribute && success && failure) {
    choice.skillCheck = {
      attribute,
      difficulty,
      successSceneId: success,
      failureSceneId: failure
    };
    choice.targetSceneId = null;
  } else {
    delete choice.skillCheck;
  }

  onChange();
}

function renderCombatGroups(scene) {
  els.combatGroupList.innerHTML = "";
  if (!scene.combatGroups?.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state compact-empty";
    empty.textContent = "Nessun mostro ancora aggiunto a questa scena.";
    els.combatGroupList.appendChild(empty);
    return;
  }
  (scene.combatGroups || []).forEach((group, index) => {
    const node = document.getElementById("combat-group-template").content.firstElementChild.cloneNode(true);
    const monsterSelect = node.querySelector('[data-field="monsterId"]');
    const title = node.querySelector('[data-role="group-title"]');
    const meta = node.querySelector('[data-role="group-meta"]');
    const tag = node.querySelector('[data-role="group-tag"]');
    const mode = node.querySelector('[data-role="group-mode"]');
    const lootAction = node.querySelector('[data-action="edit-loot-inline"]');
    const hint = node.querySelector(".monster-card-hint");
    const preview = node.querySelector('[data-role="preview"]');
    const inlineEditor = node.querySelector(".monster-inline-editor");
    const countField = node.querySelector('[data-field="count"]');
    hydrateMonsterSelect(monsterSelect, group.monsterId || "");
    countField.value = group.count ?? 1;

    const resolveMonster = () => state.adventure.encounters.find((entry) => entry.id === group.monsterId) || null;

    function updatePreview(monster) {
      preview.innerHTML = monster
        ? `<strong>${monster.name}</strong><span>HP ${monster.hitPoints} | ATK ${monster.attackBonus} | DEF ${monster.defense} | DMG ${monster.damageMin}-${monster.damageMax}</span><p>${monster.description || "Nessuna descrizione."}</p>`
        : "<strong>Nessun mostro selezionato</strong><span>Scegli un mostro esistente oppure crea un mostro nuovo direttamente da qui.</span>";
    }

    function updateGroupHeader() {
      const monster = resolveMonster();
      title.textContent = monster?.name || "Mostro della scena";
      meta.textContent = monster
        ? `Quantita ${group.count ?? 1} | HP ${monster.hitPoints} | Loot ${(monster.loot || []).length}`
        : `Quantita ${group.count ?? 1}`;
      tag.textContent = monster?.sourceType === "preset" ? "Preset" : "Custom";
      mode.textContent = node.open ? "Vista compatta" : "Modifica mostro";
      lootAction.textContent = monster ? "Modifica loot" : "Loot";
      lootAction.disabled = !monster;
      hint.textContent = node.open
        ? "Modifica i dettagli del mostro e richiudi la card quando hai finito."
        : "Card compatta. Clicca la testata per riaprire la modifica.";
      updatePreview(monster);
    }

    monsterSelect.addEventListener("change", (event) => {
      const nextValue = normalizeString(event.target.value);
      if (nextValue === CREATE_MONSTER_OPTION) {
        const monster = createMonsterForCombatScene(scene);
        group.monsterId = monster.id;
        state.selectedMonsterId = monster.id;
        group.expanded = true;
      } else if (nextValue.startsWith("__preset__:")) {
        const presetId = nextValue.replace("__preset__:", "");
        const preset = monsterPresetById(presetId);
        if (!preset) return;
        const created = createMonsterFromPresetData(preset, `monster_${state.adventure.encounters.length + 1}`);
        state.adventure.encounters.push(created);
        group.monsterId = created.id;
        state.selectedMonsterId = created.id;
        group.expanded = false;
      } else {
        group.monsterId = nextValue;
        if (group.monsterId) state.selectedMonsterId = group.monsterId;
        if (group.monsterId) group.expanded = false;
      }
      markSceneDirty();
      renderCombatGroups(scene);
      renderMonsterList();
      scheduleJsonRender(180);
    });
    countField.addEventListener("input", (event) => {
      group.count = Number(event.target.value || 1);
      markSceneDirty();
      updateGroupHeader();
      scheduleJsonRender();
    });
    node.querySelector('[data-action="remove-group"]').addEventListener("click", () => {
      scene.combatGroups.splice(index, 1);
      markSceneDirty();
      renderCombatGroups(scene);
      scheduleJsonRender();
    });

    const monster = resolveMonster();
    node.open = group.expanded === true || !monster;
    updateGroupHeader();
    node.addEventListener("toggle", () => {
      group.expanded = node.open;
      updateGroupHeader();
    });
    node.querySelector('[data-action="collapse-group"]').addEventListener("click", () => {
      group.expanded = false;
      renderCombatGroups(scene);
    });
    lootAction.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const monster = resolveMonster();
      if (!monster) return;
      group.expanded = true;
      node.open = true;
      updateGroupHeader();
      node.querySelector('[data-role="monster-loot-list"]')?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });

    inlineEditor.classList.toggle("hidden", !monster);
    if (monster) {
      const fields = {
        monsterName: "name",
        monsterDescription: "description",
        monsterHp: "hitPoints",
        monsterAttack: "attackBonus",
        monsterDefense: "defense",
        monsterGold: "goldReward",
        monsterDamageMin: "damageMin",
        monsterDamageMax: "damageMax"
      };
      Object.entries(fields).forEach(([fieldName, prop]) => {
        const field = node.querySelector(`[data-field="${fieldName}"]`);
        field.value = monster[prop] ?? "";
        field.addEventListener("input", (event) => {
          monster[prop] = ["name", "description"].includes(prop) ? event.target.value : Number(event.target.value || 0);
          markSceneDirty();
          updateGroupHeader();
          scheduleMonsterListRender();
          scheduleJsonRender();
        });
      });

      renderLootList(node.querySelector('[data-role="monster-loot-list"]'), monster.loot, {
        rerender: () => renderCombatGroups(scene),
        onChange: () => {
          markSceneDirty();
          updateGroupHeader();
          scheduleMonsterListRender();
          scheduleJsonRender();
        }
      });
      node.querySelector('[data-action="add-monster-loot-inline"]').addEventListener("click", () => {
        monster.loot.push(createLootFromPreset(els.lootPresetSelect.value));
        markSceneDirty();
        renderCombatGroups(scene);
        scheduleMonsterListRender();
        scheduleJsonRender(180);
      });
    }

    els.combatGroupList.appendChild(node);
  });
}

function renderMonsterList() {
  els.monsterList.innerHTML = "";
  state.adventure.encounters.forEach((monster) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${monster.name}</strong>
      <span>HP ${monster.hitPoints} | ATK ${monster.attackBonus} | DEF ${monster.defense} | DMG ${monster.damageMin}-${monster.damageMax}</span>
    `;
    if (monster.id === state.selectedMonsterId) li.classList.add("active");
    li.addEventListener("click", () => {
      state.selectedMonsterId = monster.id;
      renderMonsterEditor();
      renderMonsterList();
    });
    els.monsterList.appendChild(li);
  });
}

function renderMonsterEditor() {
  const monster = getSelectedMonster();
  const visible = Boolean(monster);
  els.monsterEmpty.classList.toggle("hidden", visible);
  els.monsterEditor.classList.toggle("hidden", !visible);
  if (!monster) return;

  hydrateMonsterPresetSelect(els.monsterEditorPresetSelect);
  els.monsterEditorPresetSelect.value = "custom";
  els.monsterName.value = monster.name;
  els.monsterDescription.value = monster.description;
  els.monsterHp.value = monster.hitPoints;
  els.monsterAttack.value = monster.attackBonus;
  els.monsterDefense.value = monster.defense;
  els.monsterGold.value = monster.goldReward;
  els.monsterDamageMin.value = monster.damageMin;
  els.monsterDamageMax.value = monster.damageMax;

  const abilityIds = monster.abilityIds || [];
  els.monsterAbilityCheckboxes.forEach((cb) => {
    if (!cb) return;
    cb.checked = abilityIds.includes(cb.value);
    cb.onchange = () => {
      const current = monster.abilityIds || [];
      monster.abilityIds = cb.checked
        ? [...current, cb.value]
        : current.filter((id) => id !== cb.value);
      scheduleJsonRender();
    };
  });
  if (els.monsterBerserkerPhase) {
    els.monsterBerserkerPhase.checked = Boolean(monster.hasBerserkerPhase);
    els.monsterBerserkerPhase.onchange = () => {
      monster.hasBerserkerPhase = els.monsterBerserkerPhase.checked;
      scheduleJsonRender();
    };
  }

  renderMonsterLootEditor(monster);
}

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
    const title = node.querySelector('[data-role="loot-title"]');
    const meta = node.querySelector('[data-role="loot-meta"]');
    const tag = node.querySelector('[data-role="loot-tag"]');
    const action = node.querySelector('[data-role="loot-action"]');
    const select = node.querySelector('[data-field="itemName"]');
    const customInput = node.querySelector('[data-field="customName"]');
    const selectedPreset = findLootPresetId(loot.itemId || loot.itemName);
    const categorySelect = node.querySelector('[data-field="category"]');
    const raritySelect = node.querySelector('[data-field="rarity"]');
    const effectSelect = node.querySelector('[data-field="effectId"]');
    const effectHelp = node.querySelector('[data-role="effect-help"]');
    const lockIdInput = node.querySelector('[data-field="lockId"]');
    const questItemInput = node.querySelector('[data-field="questItem"]');
    const customItemIdInput = node.querySelector('[data-field="customItemId"]');
    const familyField = node.querySelector('[data-field="effectFamily"]');
    const triggerField = node.querySelector('[data-field="effectTrigger"]');
    const quantityField = node.querySelector('[data-field="quantity"]');
    hydrateLootSelect(select, selectedPreset);
    hydrateCategorySelect(categorySelect, loot.category || "");
    hydrateRaritySelect(raritySelect, loot.rarity || "common");
    hydrateEffectSelect(effectSelect, loot.effectIds?.[0] || "", loot.category || "");
    customInput.value = selectedPreset === "custom" ? loot.itemName || "" : "";
    customInput.disabled = selectedPreset !== "custom";
    customItemIdInput.value = selectedPreset === "custom" ? (loot.itemId || slugify(loot.itemName || "custom_loot")) : (loot.itemId || "");
    customItemIdInput.disabled = selectedPreset !== "custom";
    lockIdInput.value = loot.lockId || "";
    questItemInput.checked = Boolean(loot.questItem);
    syncLootEffectMeta(effectSelect.value, familyField, triggerField);
    quantityField.value = loot.quantity ?? 1;

    function syncLootEffectUi() {
      if (!effectAllowedForCategory(loot.effectIds?.[0] || "", loot.category || "")) {
        loot.effectIds = [];
      }
      hydrateEffectSelect(effectSelect, loot.effectIds?.[0] || "", loot.category || "");
      syncLootEffectMeta(effectSelect.value, familyField, triggerField);
      effectHelp.textContent = effectHelpText(effectSelect.value, loot.category || "");
    }

    function updateLootHeader() {
      title.textContent = loot.itemName || "Loot personalizzato";
      meta.textContent = `Quantita ${loot.quantity ?? 1} | ${runtimeLootItemId(loot)}`;
      const rarityLabel = loot.rarity ? loot.rarity.charAt(0).toUpperCase() + loot.rarity.slice(1) : "Comune";
      tag.textContent = loot.questItem ? `Quest item • ${rarityLabel}` : rarityLabel;
      action.textContent = node.open ? "Approva loot" : "Modifica loot";
    }

    node.open = loot.expanded !== false;
    updateLootHeader();
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
      const nextLabel = lootLabelFromPreset(nextPreset);
      loot.itemId = preset?.id === "custom" ? "" : preset?.id || "";
      loot.itemName = nextLabel;
      loot.category = preset?.category || loot.category || "";
      loot.rarity = preset?.rarity || loot.rarity || "common";
      loot.effectIds = [...(preset?.effectIds || [])];
      hydrateCategorySelect(categorySelect, loot.category || "");
      hydrateRaritySelect(raritySelect, loot.rarity || "common");
      syncLootEffectUi();
      customInput.disabled = nextPreset !== "custom";
      customItemIdInput.disabled = nextPreset !== "custom";
      if (nextPreset !== "custom") {
        customInput.value = "";
        customItemIdInput.value = loot.itemId || "";
      } else if (!loot.itemName) {
        loot.itemName = "";
        customItemIdInput.value = loot.itemId || "";
      }
      updateLootHeader();
      onChange();
    });
    customInput.addEventListener("input", (event) => {
      if (select.value !== "custom") return;
      loot.itemName = event.target.value;
      if (!customItemIdInput.value.trim()) {
        const generatedId = slugify(event.target.value || "custom_loot");
        loot.itemId = generatedId;
        customItemIdInput.value = generatedId;
      }
      updateLootHeader();
      onChange();
    });
    customItemIdInput.addEventListener("input", (event) => {
      if (select.value !== "custom") return;
      loot.itemId = normalizeString(event.target.value) || "";
      updateLootHeader();
      onChange();
    });
    categorySelect.addEventListener("change", (event) => {
      loot.category = normalizeString(event.target.value) || "";
      syncLootEffectUi();
      onChange();
    });
    lockIdInput.addEventListener("input", (event) => {
      loot.lockId = normalizeString(event.target.value) || "";
      onChange();
    });
    questItemInput.addEventListener("change", (event) => {
      loot.questItem = Boolean(event.target.checked);
      updateLootHeader();
      onChange();
    });
    raritySelect.addEventListener("change", (event) => {
      loot.rarity = normalizeString(event.target.value) || "common";
      updateLootHeader();
      onChange();
    });
    effectSelect.addEventListener("change", (event) => {
      const effectId = normalizeString(event.target.value) || "";
      loot.effectIds = effectId ? [effectId] : [];
      syncLootEffectMeta(effectId, familyField, triggerField);
      effectHelp.textContent = effectHelpText(effectId, loot.category || "");
      onChange();
    });
    quantityField.addEventListener("input", (event) => {
      loot.quantity = Number(event.target.value || 1);
      updateLootHeader();
      onChange();
    });
    node.querySelector('[data-action="remove-loot"]').addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      items.splice(index, 1);
      onChange();
      rerender();
    });

    syncLootEffectUi();

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

function scheduleMonsterListRender(delay = 90) {
  if (state.ui.monsterListRenderTimer) {
    window.clearTimeout(state.ui.monsterListRenderTimer);
  }
  state.ui.monsterListRenderTimer = window.setTimeout(() => {
    state.ui.monsterListRenderTimer = null;
    renderMonsterList();
  }, delay);
}

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
    questItem: Boolean(loot.questItem),
    category: normalizeString(loot.category),
    rarity: normalizeString(loot.rarity),
    effectIds: (loot.effectIds || []).filter(Boolean)
  });
  const serializeChoice = (choice) => {
    const base = {
      id: choice.id,
      text: choice.text,
      requiredLockId: normalizeString(choice.requiredLockId),
      requiredLockLabel: normalizeString(choice.requiredLockLabel),
      requiredItemId: normalizeString(choice.requiredItemId),
      requiredItemName: choice.requiredItemId ? resolveRuntimeItemLabel(adventure, choice.requiredItemId) : null,
      requiredItemCategory: normalizeString(choice.requiredItemCategory),
      requiredEffectId: normalizeString(choice.requiredEffectId),
      requiredEffectLabel: choice.requiredEffectId ? effectPresetLabel(choice.requiredEffectId) : null,
      consumeOnUse: Boolean(choice.consumeOnUse)
    };
    const editorMeta = buildChoiceEditorMetadata(choice);
    if (editorMeta) base._editor = editorMeta;
    if (choice.skillCheck) base.skillCheck = choice.skillCheck;
    else base.nextSceneId = choice.targetSceneId;
    return pruneEmpty(base);
  };

  return {
    id: slugify(adventure.title || "new-adventure"),
    title: adventure.title,
    description: adventure.description,
    tags: normalizeAdventureTags(adventure.tags),
    adaptivePowerMultiplier: normalizeAdaptiveMultiplier(adventure.adaptivePowerMultiplier),
    startingSceneId: adventure.startingSceneId,
    allowCarryOverLoadout: Boolean(adventure.allowCarryOverLoadout),
    allowFreshStart: Boolean(adventure.allowFreshStart),
    starterKitItems: (adventure.starterKitItems || [])
      .filter((loot) => loot.itemName)
      .map(serializeLoot),
    scenes: (adventure.scenes || []).flatMap((scene) => {
      normalizeScene(scene);
      const output = {
        id: scene.id,
        title: scene.title,
        text: scene.openingText,
        image: scene.eventImage?.dataUrl || null,
        sceneLoot: scene.sceneLoot
          .filter((loot) => loot.itemName)
          .map(serializeLoot),
        choices: scene.kind === "description" ? scene.choices.map(serializeChoice) : []
      };

      const editorMeta = buildSceneEditorMetadata(scene);
      if (editorMeta) output._editor = editorMeta;

      const syntheticScenes = [];
      const outcomeTargetForExport = (key) => {
        const branch = getOutcomeBranch(scene, key);
        if (branch.choices.length) {
          const syntheticId = `${scene.id}__${key}`;
          syntheticScenes.push(pruneEmpty({
            id: syntheticId,
            title: `${scene.title} - ${outcomeShortLabel(key)}`,
            text: `${outcomeShortLabel(key)}. Scegli come procedere.`,
            choices: branch.choices.map(serializeChoice),
            _editor: {
              syntheticOutcomeOf: scene.id,
              syntheticOutcomeKey: key,
              generatedSyntheticScene: true
            }
          }));
          return syntheticId;
        }
        return normalizeString(branch.targetSceneId);
      };

      if (scene.kind === "check") {
        output.choices = [pruneEmpty({
          id: `${scene.id}__check_gate`,
          text: "Affronta la prova",
          skillCheck: {
            attribute: normalizeString(scene.checkConfig?.skill),
            difficulty: Number(scene.checkConfig?.difficulty || 0),
            successSceneId: outcomeTargetForExport("success"),
            failureSceneId: outcomeTargetForExport("failure")
          },
          _editor: {
            generatedCheckGate: true
          }
        })];
      } else if (scene.kind === "combat") {
        const combatGroups = (scene.combatGroups || []).filter((group) => group.monsterId);
        const firstGroup = combatGroups[0];
        if (firstGroup) output.encounterId = firstGroup.monsterId;
        output.victorySceneId = outcomeTargetForExport("victory");
        output.defeatSceneId = outcomeTargetForExport("defeat");
        output.retreatSceneId = outcomeTargetForExport("retreat");
      }

      return [pruneEmpty(output), ...syntheticScenes];
    }),
    encounters: adventure.encounters.map((monster) => pruneEmpty({
      id: monster.id,
      name: monster.name,
      description: monster.description,
      hitPoints: monster.hitPoints,
      attackBonus: monster.attackBonus,
      defense: monster.defense,
      damageMin: monster.damageMin,
      damageMax: monster.damageMax,
      goldReward: monster.goldReward,
      abilityIds: (monster.abilityIds || []).filter(Boolean),
      hasBerserkerPhase: Boolean(monster.hasBerserkerPhase) || undefined,
      loot: monster.loot
        .filter((loot) => loot.itemName)
        .map(serializeLoot)
    }))
  };
}

function normalizeScene(scene) {
  scene.sceneLoot = scene.sceneLoot || [];
  scene.choices = scene.choices || [];
  scene.outcomes = scene.outcomes || createEmptySceneOutcomes();
  scene.position = scene.position || { x: 40, y: 40 };
  scene.eventImage = scene.eventImage ? normalizeSceneImage(scene.eventImage) : null;
  scene.sceneLoot = scene.sceneLoot.map((loot) => normalizeLoot(loot));
  scene.choices = scene.choices.map((choice, index) => normalizeChoice(choice, index + 1));
  Object.keys(createEmptySceneOutcomes()).forEach((key) => {
    const branch = getOutcomeBranch(scene, key);
    branch.choices = (branch.choices || []).map((choice, index) => normalizeChoice(choice, index + 1));
  });
  if (scene.kind === "check") {
    scene.checkConfig = scene.checkConfig || { skill: "", difficulty: 10 };
  } else if (scene.kind === "combat") {
    scene.combatGroups = scene.combatGroups || [];
  } else {
    scene.checkConfig = scene.checkConfig || { skill: "", difficulty: 10 };
    scene.combatGroups = scene.combatGroups || [];
  }
}

function normalizeAdventureImport(adventure) {
  const syntheticScenes = new Map();
  const baseScenes = (adventure.scenes || []).filter((scene) => {
    const editor = scene._editor || {};
    if (editor.syntheticOutcomeOf && editor.syntheticOutcomeKey) {
      syntheticScenes.set(normalizeString(scene.id), scene);
      return false;
    }
    return true;
  });
  const scenes = baseScenes.map((scene, index) => normalizeImportedScene(scene, index));
  const encounters = (adventure.encounters || []).map((monster) => normalizeImportedEncounter(monster));
  const startingSceneId = normalizeString(adventure.startingSceneId) || scenes[0]?.id || "";
  const sceneById = new Map(scenes.map((scene) => [scene.id, scene]));

  syntheticScenes.forEach((syntheticScene) => {
    const editor = syntheticScene._editor || {};
    const parent = sceneById.get(normalizeString(editor.syntheticOutcomeOf));
    if (!parent) return;
    const key = normalizeString(editor.syntheticOutcomeKey);
    if (!key) return;
    const branch = getOutcomeBranch(parent, key);
    branch.choices = (syntheticScene.choices || []).map((choice, index) => normalizeImportedChoice(choice, index));
    if (branch.targetSceneId === syntheticScene.id) branch.targetSceneId = "";
  });

  return {
    id: normalizeString(adventure.id) || slugify(adventure.title || "new-adventure"),
    title: adventure.title || "Nuova Avventura",
    description: adventure.description || "",
    tags: normalizeAdventureTags(adventure.tags),
    adaptivePowerMultiplier: normalizeAdaptiveMultiplier(adventure.adaptivePowerMultiplier),
    startingSceneId,
    allowCarryOverLoadout: adventure.allowCarryOverLoadout !== false,
    allowFreshStart: adventure.allowFreshStart !== false,
    starterKitItems: (adventure.starterKitItems || []).map((loot) => normalizeLoot(loot)),
    scenes,
    encounters
  };
}

function normalizeImportedScene(scene, index) {
  const editor = scene._editor || {};
  const inferredKind = scene.kind
    || editor.kind
    || (scene.encounterId ? "combat" : inferCheckKind(scene) ? "check" : "description");
  const position = editor.position || { x: 40 + (index % 4) * 340, y: 40 + Math.floor(index / 4) * 240 };
  const normalized = {
    id: normalizeString(scene.id) || `scene_${index + 1}`,
    kind: inferredKind,
    title: scene.title || `Evento ${index + 1}`,
    openingText: editor.openingText || scene.openingText || scene.text || "",
    text: scene.text || scene.openingText || editor.openingText || "",
    eventImage: editor.eventImage || scene.eventImage || (scene.image ? { name: "Immagine evento", dataUrl: scene.image, sourceDataUrl: scene.image } : null),
    position,
    sceneLoot: (scene.sceneLoot || []).map((loot) => normalizeLoot(loot)),
    choices: (scene.choices || []).map((choice, choiceIndex) => normalizeImportedChoice(choice, choiceIndex)),
    combatGroups: editor.combatGroups || scene.combatGroups || buildFallbackCombatGroups(scene),
    checkConfig: editor.checkConfig || scene.checkConfig || buildFallbackCheckConfig(scene),
    outcomes: normalizeImportedOutcomes(editor.outcomes || scene.outcomes, scene)
  };
  normalizeScene(normalized);
  migrateLegacyCheckGate(normalized);
  return normalized;
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
      failureSceneId: normalizeString(choice.skillCheck.failureSceneId)
    } : null,
    requiredLockId: normalizeString(choice.requiredLockId),
    requiredLockLabel: normalizeString(choice.requiredLockLabel),
    requiredItemId: normalizeString(choice.requiredItemId),
    requiredItemCategory: normalizeString(choice.requiredItemCategory),
    requiredEffectId: normalizeString(choice.requiredEffectId),
    consumeOnUse: Boolean(choice.consumeOnUse),
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
      choices: (branch?.choices || []).map((choice, index) => normalizeImportedChoice(choice, index))
    };
  });

  if (scene.victorySceneId) normalized.victory.targetSceneId = normalizeString(scene.victorySceneId);
  if (scene.defeatSceneId) normalized.defeat.targetSceneId = normalizeString(scene.defeatSceneId);
  if (scene.retreatSceneId) normalized.retreat.targetSceneId = normalizeString(scene.retreatSceneId);

  return normalized;
}

function migrateLegacyCheckGate(scene) {
  if (scene.kind !== "check") return;
  const generatedGate = scene.choices.find((choice) => choice.generatedCheckGate && choice.skillCheck);
  const fallbackGate = generatedGate || (scene.choices.length === 1 && scene.choices[0].skillCheck ? scene.choices[0] : null);
  if (!fallbackGate?.skillCheck) return;

  scene.checkConfig = {
    skill: normalizeString(fallbackGate.skillCheck.attribute),
    difficulty: Number(fallbackGate.skillCheck.difficulty || 0)
  };
  getOutcomeBranch(scene, "success").targetSceneId = normalizeString(fallbackGate.skillCheck.successSceneId);
  getOutcomeBranch(scene, "failure").targetSceneId = normalizeString(fallbackGate.skillCheck.failureSceneId);
  scene.choices = scene.choices.filter((choice) => choice !== fallbackGate);
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
  select.innerHTML = "";
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "Nessun collegamento";
  select.appendChild(placeholder);
  state.adventure.scenes.forEach((scene, index) => {
    const option = document.createElement("option");
    option.value = scene.id;
    option.textContent = `${index + 1}. ${scene.title}`;
    if (scene.id === value) option.selected = true;
    select.appendChild(option);
  });
}

function hydrateSkillSelect(select, value = "") {
  select.innerHTML = "";
  SKILLS.forEach((skill) => {
    const option = document.createElement("option");
    option.value = skill.value;
    option.textContent = skill.label;
    if (skill.value === value) option.selected = true;
    select.appendChild(option);
  });
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

  state.adventure.encounters.forEach((monster) => {
    const option = document.createElement("option");
    option.value = monster.id;
    option.textContent = monster.name;
    if (monster.id === value) option.selected = true;
    select.appendChild(option);
  });
  if (value === CREATE_MONSTER_OPTION) createOption.selected = true;
}

function getSelectedScene() {
  return state.adventure.scenes.find((scene) => scene.id === state.selectedSceneId) || null;
}

function getSelectedMonster() {
  return state.adventure.encounters.find((monster) => monster.id === state.selectedMonsterId) || null;
}

function sceneTitleById(sceneId, fallback = "nessuna destinazione") {
  if (!sceneId) return fallback;
  const target = state.adventure.scenes.find((scene) => scene.id === sceneId);
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
  return {
    id: `choice_${index}`,
    text: "",
    endingText: "",
    targetSceneId: null,
    requiredLockId: "",
    requiredLockLabel: "",
    requiredItemId: "",
    requiredItemCategory: "",
    requiredEffectId: "",
    consumeOnUse: false
  };
}

function createEmptyOutcomeBranch() {
  return {
    targetSceneId: "",
    choices: []
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
  if (scene.kind === "check") return ["success", "failure"];
  if (scene.kind === "combat") return ["victory", "defeat", "retreat"];
  return [];
}

function outcomeDefinitionsForScene(scene) {
  if (scene.kind === "check") {
    return [
      { key: "success", title: "Se la prova riesce", hint: "Puoi andare a un evento diretto oppure aprire un bivio successivo." },
      { key: "failure", title: "Se la prova fallisce", hint: "Usa questo ramo per costo, deviazione o complicazione." }
    ];
  }
  if (scene.kind === "combat") {
    return [
      { key: "victory", title: "Se il combattimento finisce in vittoria", hint: "Premio, svolta o scelta successiva alla vittoria." },
      { key: "defeat", title: "Se il combattimento finisce in sconfitta", hint: "Caduta, cattura o ultima scelta prima del memoriale." },
      { key: "retreat", title: "Se il giocatore si ritira", hint: "Fuga, ripiego o bivio di emergenza. Se vuoto, il runtime ricade sulla sconfitta." }
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

function addLinkedTargetToScene(scene, targetSceneId) {
  normalizeScene(scene);
  if (scene.kind === "description") {
    scene.choices.push({
      ...createEmptyChoice(scene.choices.length + 1),
      text: `Scelta ${choiceLabel(scene.choices.length)}`,
      targetSceneId
    });
    return;
  }

  const definitions = outcomeDefinitionsForScene(scene);
  const firstOpenDefinition = definitions.find(({ key }) => !getOutcomeBranch(scene, key).targetSceneId && getOutcomeBranch(scene, key).choices.length === 0);
  const fallbackDefinition = definitions[0];
  const outcomeKey = firstOpenDefinition?.key || fallbackDefinition?.key;
  if (!outcomeKey) return;
  setOutcomeTarget(scene, outcomeKey, targetSceneId);
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
    ...(adventure.scenes || []).flatMap((scene) => scene.sceneLoot || []),
    ...(adventure.encounters || []).flatMap((encounter) => encounter.loot || [])
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

function uniqueMonsterName(baseName) {
  const existingNames = new Set(state.adventure.encounters.map((entry) => entry.name));
  if (!existingNames.has(baseName)) return baseName;

  let copyIndex = 2;
  while (existingNames.has(`${baseName} ${copyIndex}`)) {
    copyIndex += 1;
  }
  return `${baseName} ${copyIndex}`;
}

function uniqueSceneCopyTitle(baseName) {
  const normalizedBase = normalizeString(baseName) || "Evento";
  const existingTitles = new Set(state.adventure.scenes.map((entry) => entry.title));
  const initialCopyTitle = `${normalizedBase} copia`;
  if (!existingTitles.has(initialCopyTitle)) return initialCopyTitle;

  let copyIndex = 2;
  while (existingTitles.has(`${initialCopyTitle} ${copyIndex}`)) {
    copyIndex += 1;
  }
  return `${initialCopyTitle} ${copyIndex}`;
}

function createUniqueSceneId() {
  const existingIds = new Set(state.adventure.scenes.map((scene) => scene.id));
  let index = Math.max(1, state.adventure.scenes.length + 1);
  while (existingIds.has(createSceneId(index))) {
    index += 1;
  }
  return createSceneId(index);
}

function createUniqueMonsterId() {
  const existingIds = new Set(state.adventure.encounters.map((monster) => monster.id));
  let index = Math.max(1, state.adventure.encounters.length + 1);
  while (existingIds.has(`monster_${index}`)) {
    index += 1;
  }
  return `monster_${index}`;
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
  normalized.requiredItemId = snapshot.requiredItemId || defaults.requiredItemId;
  normalized.requiredItemCategory = snapshot.requiredItemCategory || defaults.requiredItemCategory;
  normalized.requiredEffectId = snapshot.requiredEffectId || defaults.requiredEffectId;
  normalized.consumeOnUse = Boolean(snapshot.consumeOnUse);
  if (snapshot.skillCheck) {
    normalized.skillCheck = {
      attribute: normalizeString(snapshot.skillCheck.attribute),
      difficulty: Number(snapshot.skillCheck.difficulty || 0),
      successSceneId: normalizeString(snapshot.skillCheck.successSceneId),
      failureSceneId: normalizeString(snapshot.skillCheck.failureSceneId)
    };
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
  const sceneIds = new Map();
  const encounterIds = new Map();
  const validCategories = new Set(ITEM_CATEGORIES.map((entry) => entry.value).filter(Boolean));
  const validRarities = new Set(ITEM_RARITIES.map((entry) => entry.value));
  const validEffects = new Set(EFFECT_PRESETS.map((entry) => entry.value).filter(Boolean));
  const knownLootIds = new Map();

  function pushWarning(message, { alphaBlocking = false } = {}) {
    if (strictAlpha && alphaBlocking) {
      errors.push(message);
      return;
    }
    warnings.push(message);
  }

  function registerLoot(loot, ownerLabel) {
    const itemId = runtimeLootItemId(loot);
    knownLootIds.set(itemId, loot.itemName || itemId);
    if (!loot.itemName?.trim()) {
      errors.push(`${ownerLabel}: loot senza itemName.`);
    }
    if (!Number.isFinite(Number(loot.quantity)) || Number(loot.quantity) < 1) {
      errors.push(`${ownerLabel}: il loot ${loot.itemName || itemId} deve avere quantita >= 1.`);
    }
    if (loot.category && !validCategories.has(loot.category)) {
      errors.push(`${ownerLabel}: il loot ${loot.itemName || itemId} usa una categoria non valida (${loot.category}).`);
    }
    if (loot.rarity && !validRarities.has(loot.rarity)) {
      errors.push(`${ownerLabel}: il loot ${loot.itemName || itemId} usa una rarita non valida (${loot.rarity}).`);
    }
    (loot.effectIds || []).forEach((effectId) => {
      if (!validEffects.has(effectId)) {
        errors.push(`${ownerLabel}: il loot ${loot.itemName || itemId} usa un effectId non valido (${effectId}).`);
        return;
      }
      if (!effectAllowedForCategory(effectId, loot.category)) {
        errors.push(
          `${ownerLabel}: il loot ${loot.itemName || itemId} usa l'effetto ${effectPresetLabel(effectId)} ` +
          `ma non e compatibile con la categoria ${loot.category || "non impostata"}.`
        );
      }
    });
    if (loot.category === "key" && !normalizeString(loot.lockId)) {
      errors.push(`${ownerLabel}: la chiave ${loot.itemName || itemId} deve avere un lockId.`);
    }
    if (normalizeString(loot.lockId) && loot.category !== "key") {
      warnings.push(`${ownerLabel}: il loot ${loot.itemName || itemId} ha lockId ma non e categorizzato come key.`);
    }
  }

  function validateChoiceCollection(sceneId, choices, ownerLabel) {
    (choices || []).forEach((choice) => {
      const requirementCount = [
        choice.requiredLockId,
        choice.requiredItemId,
        choice.requiredItemCategory,
        choice.requiredEffectId
      ].filter(Boolean).length;

      if (!choice.text?.trim()) {
        errors.push(`${ownerLabel} nella scena ${sceneId} ha una scelta senza testo.`);
      }
      if (requirementCount > 1) {
        errors.push(`${ownerLabel} nella scena ${sceneId} ha requirement multipli non supportati.`);
      }
      if (choice.consumeOnUse && requirementCount === 0) {
        warnings.push(`${ownerLabel} nella scena ${sceneId} consuma un requisito, ma nessun requisito e impostato.`);
      }
      if (choice.requiredLockLabel && !choice.requiredLockId) {
        pushWarning(`${ownerLabel} nella scena ${sceneId} ha un'etichetta lock senza lockId.`);
      }
      if (choice.requiredItemCategory && !validCategories.has(choice.requiredItemCategory)) {
        errors.push(`${ownerLabel} nella scena ${sceneId} usa una categoria requisito non valida (${choice.requiredItemCategory}).`);
      }
      if (choice.requiredEffectId && !validEffects.has(choice.requiredEffectId)) {
        errors.push(`${ownerLabel} nella scena ${sceneId} usa un effectId requisito non valido (${choice.requiredEffectId}).`);
      }
      if (choice.requiredItemId && !knownLootIds.has(choice.requiredItemId) && !lootPresetById(choice.requiredItemId)) {
        pushWarning(`${ownerLabel} nella scena ${sceneId} richiede itemId ${choice.requiredItemId}, ma nessun loot noto dell'avventura lo fornisce.`, { alphaBlocking: true });
      }
      if (choice.requiredLockId) {
        const matchingKey = [...knownLootIds.keys()].some((itemId) => {
          const allLoot = [
            ...(cleaned.starterKitItems || []),
            ...cleaned.scenes.flatMap((entry) => entry.sceneLoot || []),
            ...cleaned.encounters.flatMap((entry) => entry.loot || [])
          ];
          return allLoot.some((loot) => runtimeLootItemId(loot) === itemId && normalizeString(loot.lockId) === choice.requiredLockId);
        });
        if (!matchingKey) {
          pushWarning(`${ownerLabel} nella scena ${sceneId} richiede lockId ${choice.requiredLockId}, ma nessuna chiave nota dell'avventura lo fornisce.`, { alphaBlocking: true });
        }
      }

      if (choice.skillCheck) {
        if (!choice.skillCheck.attribute) {
          errors.push(`${ownerLabel} nella scena ${sceneId} ha una skill check senza attributo.`);
        }
        if (!choice.skillCheck.successSceneId || !sceneIds.has(choice.skillCheck.successSceneId)) {
          errors.push(`${ownerLabel} nella scena ${sceneId} ha un ramo successo non valido.`);
        }
        if (!choice.skillCheck.failureSceneId || !sceneIds.has(choice.skillCheck.failureSceneId)) {
          errors.push(`${ownerLabel} nella scena ${sceneId} ha un ramo fallimento non valido.`);
        }
      } else if (!choice.nextSceneId) {
        errors.push(`${ownerLabel} nella scena ${sceneId} non ha una destinazione valida.`);
      } else if (!sceneIds.has(choice.nextSceneId)) {
        errors.push(`${ownerLabel} nella scena ${sceneId} punta a una scena inesistente: ${choice.nextSceneId}.`);
      }
    });
  }

  if (!cleaned.title?.trim()) {
    pushWarning("L'avventura non ha ancora un titolo leggibile.", { alphaBlocking: true });
  }

  if ((cleaned.tags || []).length > 3) {
    errors.push("L'avventura puo avere massimo 3 tag grimorio.");
  }
  (cleaned.tags || []).forEach((tag) => {
    if (/\s/.test(tag)) {
      errors.push(`Il tag grimorio "${tag}" deve essere una sola parola.`);
    }
  });

  if (!cleaned.scenes.length) {
    errors.push("Aggiungi almeno un evento prima di esportare.");
  }

  cleaned.scenes.forEach((scene) => {
    if (sceneIds.has(scene.id)) {
      errors.push(`ID scena duplicato: ${scene.id}.`);
    } else {
      sceneIds.set(scene.id, scene);
    }
  });

  cleaned.encounters.forEach((encounter) => {
    if (encounterIds.has(encounter.id)) {
      errors.push(`ID mostro duplicato: ${encounter.id}.`);
    } else {
      encounterIds.set(encounter.id, encounter);
    }
    if ((encounter.damageMax ?? 0) < (encounter.damageMin ?? 0)) {
      errors.push(`Il mostro ${encounter.name || encounter.id} ha danni massimi inferiori ai minimi.`);
    }
  });

  if (!cleaned.startingSceneId) {
    errors.push("Imposta un evento iniziale valido.");
  } else if (!sceneIds.has(cleaned.startingSceneId)) {
    errors.push(`L'evento iniziale ${cleaned.startingSceneId} non esiste nel flusso.`);
  }

  (cleaned.starterKitItems || []).forEach((loot) => registerLoot(loot, "Starter kit"));
  cleaned.encounters.forEach((encounter) => {
    (encounter.loot || []).forEach((loot) => registerLoot(loot, `Mostro ${encounter.id}`));
  });

  cleaned.scenes.forEach((scene) => {
    const authoringScene = adventure.scenes.find((entry) => entry.id === scene.id);
    if (!scene.title?.trim()) {
      pushWarning(`La scena ${scene.id} non ha un titolo leggibile.`, { alphaBlocking: true });
    }
    if (!scene.text?.trim()) {
      pushWarning(`La scena ${scene.id} non ha ancora testo iniziale.`, { alphaBlocking: true });
    }

    const hasCombat = Boolean(scene.encounterId);
    if (hasCombat) {
      if (!encounterIds.has(scene.encounterId)) {
        errors.push(`La scena ${scene.id} punta a un incontro inesistente: ${scene.encounterId}.`);
      }
      if (!scene.victorySceneId || !sceneIds.has(scene.victorySceneId)) {
        errors.push(`La scena di combattimento ${scene.id} non ha un evento vittoria valido.`);
      }
      if (!scene.defeatSceneId || !sceneIds.has(scene.defeatSceneId)) {
        errors.push(`La scena di combattimento ${scene.id} non ha un evento sconfitta valido.`);
      }
      if (scene.retreatSceneId && !sceneIds.has(scene.retreatSceneId)) {
        errors.push(`La scena di combattimento ${scene.id} ha un evento ritirata non valido.`);
      }
      if (!scene.retreatSceneId) {
        pushWarning(`La scena di combattimento ${scene.id} non ha un evento ritirata dedicato: il runtime ripieghera sulla sconfitta.`);
      }
    }

    if (authoringScene?.kind === "combat" && !scene.encounterId) {
      errors.push(`La scena ${scene.id} e marcata come combattimento, ma non esporta un encounterId valido.`);
    }
    if (authoringScene?.kind === "check" && !authoringScene.checkConfig?.skill) {
      pushWarning(`La scena ${scene.id} e marcata come prova, ma non ha una skill predefinita nel metadata di authoring.`, { alphaBlocking: true });
    }
    if (authoringScene?.kind === "check") {
      if (authoringScene.choices?.length) {
        errors.push(`La scena ${scene.id} ha ancora scelte legacy fuori dagli esiti. Spostale nei rami di riuscita/fallimento prima di esportare.`);
      }
      ["success", "failure"].forEach((key) => {
        const branch = getOutcomeBranch(authoringScene, key);
        const label = key === "success" ? "riuscita" : "fallimento";
        if (!branch.targetSceneId && branch.choices.length === 0) {
          errors.push(`La scena ${scene.id} non definisce un esito ${label}: serve una destinazione diretta oppure almeno una scelta di esito.`);
        }
        if (branch.targetSceneId && !sceneIds.has(branch.targetSceneId)) {
          errors.push(`La scena ${scene.id} ha un esito ${label} che punta a una scena inesistente: ${branch.targetSceneId}.`);
        }
        validateChoiceCollection(scene.id, branch.choices, `Le scelte di ${label}`);
      });
    }
    if (authoringScene?.kind === "combat") {
      if (authoringScene.choices?.length) {
        errors.push(`La scena ${scene.id} ha ancora scelte legacy fuori dagli esiti. Spostale nei rami di vittoria/sconfitta/ritirata prima di esportare.`);
      }
      ["victory", "defeat", "retreat"].forEach((key) => {
        const branch = getOutcomeBranch(authoringScene, key);
        const label = outcomeShortLabel(key).toLowerCase();
        const required = key !== "retreat";
        if (required && !branch.targetSceneId && branch.choices.length === 0) {
          errors.push(`La scena ${scene.id} non definisce un esito ${label}: serve una destinazione diretta oppure almeno una scelta di esito.`);
        }
        if (branch.targetSceneId && !sceneIds.has(branch.targetSceneId)) {
          errors.push(`La scena ${scene.id} ha un esito ${label} che punta a una scena inesistente: ${branch.targetSceneId}.`);
        }
        if (!required && !branch.targetSceneId && branch.choices.length === 0) {
          pushWarning(`La scena ${scene.id} non definisce un esito ritirata dedicato: il runtime ripieghera sulla sconfitta.`);
        }
        validateChoiceCollection(scene.id, branch.choices, `Le scelte di ${label}`);
      });
    }

    (scene.sceneLoot || []).forEach((loot) => registerLoot(loot, `Scena ${scene.id}`));
    validateChoiceCollection(scene.id, scene.choices || [], "La scelta");
  });

  const reachable = new Set();
  if (sceneIds.has(cleaned.startingSceneId)) {
    const queue = [cleaned.startingSceneId];
    while (queue.length) {
      const nextId = queue.shift();
      if (!nextId || reachable.has(nextId)) continue;
      reachable.add(nextId);
      const scene = sceneIds.get(nextId);
      if (!scene) continue;
      (scene.choices || []).forEach((choice) => {
        if (choice.skillCheck) {
          queue.push(choice.skillCheck.successSceneId, choice.skillCheck.failureSceneId);
        } else if (choice.nextSceneId) {
          queue.push(choice.nextSceneId);
        }
      });
      if (scene.victorySceneId) queue.push(scene.victorySceneId);
      if (scene.defeatSceneId) queue.push(scene.defeatSceneId);
      if (scene.retreatSceneId) queue.push(scene.retreatSceneId);
    }
  }

  cleaned.scenes
    .filter((scene) => !reachable.has(scene.id))
    .forEach((scene) => pushWarning(`La scena ${scene.id} non e raggiungibile dall'evento iniziale.`, { alphaBlocking: true }));

  return { errors, warnings, strictAlpha };
}

function buildSceneEditorMetadata(scene) {
  const editor = {
    kind: scene.kind,
    openingText: scene.openingText,
    eventImage: scene.eventImage ? pruneEmpty({
      name: scene.eventImage.name,
      type: scene.eventImage.type,
      dataUrl: scene.eventImage.dataUrl,
      sourceDataUrl: scene.eventImage.sourceDataUrl,
      zoom: scene.eventImage.zoom,
      focusX: scene.eventImage.focusX,
      focusY: scene.eventImage.focusY
    }) : null,
    position: scene.position,
    checkConfig: scene.kind === "check" ? pruneEmpty(scene.checkConfig || {}) : null,
    outcomes: outcomeKeysForScene(scene).length
      ? pruneEmpty(Object.fromEntries(outcomeKeysForScene(scene).map((key) => {
          const branch = getOutcomeBranch(scene, key);
          return [key, pruneEmpty({
            targetSceneId: normalizeString(branch.targetSceneId),
            choices: (branch.choices || []).map((choice) => pruneEmpty({
              ...choice,
              skillCheck: choice.skillCheck ? pruneEmpty(choice.skillCheck) : null
            }))
          })];
        })))
      : null,
    combatGroups: scene.kind === "combat"
      ? (scene.combatGroups || []).filter((group) => group.monsterId)
      : null
  };
  const cleaned = pruneEmpty(editor);
  return Object.keys(cleaned).length ? cleaned : null;
}

function buildChoiceEditorMetadata(choice) {
  const editor = pruneEmpty({
    endingText: normalizeString(choice.endingText)
  });
  return Object.keys(editor).length ? editor : null;
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
