(function (root) {
  const DEATH_SENTINEL = "__death__";
  const NO_ESCAPE_SENTINEL = "__no_escape__";
  const RETRY_SENTINEL = "__retry__";
  const STAY_SENTINEL = "__stay__";

  const EVENT_LABELS = {
    transition: "Transizione",
    combat: "Combattimento",
    skillcheck: "Prova",
    requirement: "Requisito",
    loot: "Loot",
    dialogue: "Dialogo",
    condition: "Condizione",
    shop: "Negozio"
  };

  function normalizeString(value) {
    return typeof value === "string" ? value.trim() : "";
  }

  function slugifyFragment(value) {
    return normalizeString(value)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/^_+|_+$/g, "") || "node";
  }

  function cloneLootDrop(drop) {
    if (!drop || typeof drop !== "object") return null;
    return {
      ...drop,
      effectIds: Array.isArray(drop.effectIds) ? [...drop.effectIds] : []
    };
  }

  function cloneLootList(items) {
    return (Array.isArray(items) ? items : [])
      .map(cloneLootDrop)
      .filter(Boolean);
  }


  function nonEmpty(value) {
    const normalized = normalizeString(value);
    return normalized || null;
  }

  function isSentinel(targetId) {
    return [
      DEATH_SENTINEL,
      NO_ESCAPE_SENTINEL,
      RETRY_SENTINEL,
      STAY_SENTINEL
    ].includes(targetId);
  }

  function eventLabel(type) {
    return EVENT_LABELS[type] || "Evento";
  }

  function createCompilerState(cleaned) {
    const descriptions = Array.isArray(cleaned.descriptions) ? cleaned.descriptions : [];
    const eventNodes = Array.isArray(cleaned.eventNodes) ? cleaned.eventNodes : [];
    return {
      cleaned,
      descriptions,
      eventNodes,
      descriptionMap: new Map(descriptions.map((desc) => [desc.id, desc])),
      eventNodeMap: new Map(eventNodes.map((node) => [node.id, node])),
      warnings: [],
      errors: []
    };
  }

  // ─────────────────────────────────────────────────────────────────
  // V2 RUNTIME COMPILER — output: Adventure v2 (descriptions, inline
  // events).  Replaces the old v1 scene-flattening approach.
  // ─────────────────────────────────────────────────────────────────

  /**
   * Resolve a targetId to its type:
   *   "description" → the target is a Description node
   *   "event"       → the target is an Event node (to be embedded inline)
   *   "sentinel"    → __death__ / __stay__ / __retry__ / __no_escape__
   * Returns null if unknown.
   */
  function resolveV2Target(state, targetId, contextLabel) {
    const normalized = normalizeString(targetId);
    if (!normalized) return null;
    if (isSentinel(normalized)) return { type: "sentinel", id: normalized };
    if (state.descriptionMap.has(normalized)) return { type: "description", id: normalized };
    if (state.eventNodeMap.has(normalized)) return { type: "event", node: state.eventNodeMap.get(normalized) };
    if (contextLabel) state.errors.push(`${contextLabel}: target "${normalized}" non trovato.`);
    return null;
  }

  /** Compile a Branch from the graph into a v2 Branch runtime object. */
  function compileBranchV2(state, branch, seed, inProgress) {
    const base = {
      ...(nonEmpty(branch?.text) ? { text: branch.text } : {}),
      ...(Array.isArray(branch?.loot) && branch.loot.length ? { loot: cloneLootList(branch.loot) } : {}),
      ...(nonEmpty(branch?.condition) ? { condition: branch.condition } : {}),
      ...(nonEmpty(branch?.unlockChoiceId) ? { unlockChoiceId: branch.unlockChoiceId } : {}),
      ...(branch?.burnAfterUse ? { burnAfterUse: true } : {})
    };

    // Branch carries its own nested event
    if (branch?.event) {
      const nested = compileEventV2(state, branch.event, `${seed}_ev`, inProgress);
      if (nested) return { ...base, event: nested };
    }

    const target = resolveV2Target(state, branch?.targetId, `branch ${seed}`);
    if (!target) return { ...base };
    if (target.type === "sentinel" || target.type === "description") {
      return { ...base, targetId: target.id };
    }
    if (target.type === "event") {
      if (inProgress && inProgress.has(target.node.id)) {
        state.errors.push(`branch ${seed}: ciclo rilevato in "${target.node.id}". Branch trattato come __stay__.`);
        return { ...base, targetId: STAY_SENTINEL };
      }
      const nested = compileEventNodeV2(state, target.node, seed, inProgress);
      if (nested) return { ...base, event: nested };
    }
    return { ...base };
  }

  /** Compile a standalone Event node (from graph eventNodes[]) inline. */
  function compileEventNodeV2(state, node, seed, inProgress) {
    const nextProgress = new Set(inProgress || []);
    nextProgress.add(node.id);
    return compileEventV2(state, node.event, seed || node.id, nextProgress);
  }

  /** Dispatch-compile an event object by type. */
  function compileEventV2(state, event, seed, inProgress) {
    if (!event?.type) {
      state.warnings.push(`${seed}: evento senza tipo, ignorato.`);
      return null;
    }
    switch (event.type) {
      case "combat":      return compileCombatV2(state, event, seed, inProgress);
      case "skillcheck":  return compileSkillCheckV2(state, event, seed, inProgress);
      case "requirement": return compileRequirementV2(state, event, seed, inProgress);
      case "loot":        return compileLootV2(state, event, seed, inProgress);
      case "transition":  return compileTransitionV2(state, event, seed, inProgress);
      case "shop":        return compileShopV2(state, event, seed, inProgress);
      case "dialogue":    return compileDialogueV2(state, event, seed, inProgress);
      case "condition":   return compileConditionV2(state, event, seed, inProgress);
      default:
        state.warnings.push(`${seed}: tipo evento sconosciuto "${event.type}", ignorato.`);
        return null;
    }
  }

  function compileCombatGroupV2(group) {
    return {
      ...(nonEmpty(group?.monsterId) ? { monsterId: group.monsterId } : {}),
      count: Math.max(1, Number(group?.count || 1)),
      name: nonEmpty(group?.name) || "Nemico",
      ...(nonEmpty(group?.description) ? { description: group.description } : {}),
      hitPoints: Number(group?.hitPoints || 1),
      attackBonus: Number(group?.attackBonus || 0),
      defense: Number(group?.defense || 0),
      damageMin: Number(group?.damageMin || 0),
      damageMax: Number(group?.damageMax || 0),
      goldReward: Number(group?.goldReward || 0),
      abilityIds: Array.isArray(group?.abilityIds) ? [...group.abilityIds] : [],
      hasBerserkerPhase: group?.hasBerserkerPhase ? true : undefined,
      loot: cloneLootList(group?.loot || []),
      ...(nonEmpty(group?.image) ? { image: group.image } : {})
    };
  }

  function compileCombatV2(state, event, seed, inProgress) {
    const groups = (Array.isArray(event.combatGroups) ? event.combatGroups : []).map(compileCombatGroupV2);
    if (!groups.length) state.errors.push(`${seed}: combat senza gruppi mostro.`);
    return {
      type: "combat",
      ...(nonEmpty(event.text) ? { text: event.text } : {}),
      ...(nonEmpty(event.image) ? { image: event.image } : {}),
      combatGroups: groups,
      victoryBranch: compileBranchV2(state, event.victoryBranch, `${seed}_v`, inProgress),
      defeatBranch:  compileBranchV2(state, event.defeatBranch || { targetId: DEATH_SENTINEL }, `${seed}_d`, inProgress),
      ...(event.retreatBranch
        ? { retreatBranch: compileBranchV2(state, event.retreatBranch, `${seed}_r`, inProgress) }
        : {})
    };
  }

  function compileSkillCheckV2(state, event, seed, inProgress) {
    return {
      type: "skillcheck",
      ...(nonEmpty(event.text) ? { text: event.text } : {}),
      attribute: normalizeString(event.attribute) || "strength",
      difficulty: Number(event.difficulty || 12),
      successBranch: compileBranchV2(state, event.successBranch, `${seed}_s`, inProgress),
      failureBranch: compileBranchV2(state, event.failureBranch, `${seed}_f`, inProgress),
      ...(event.burnOnFailure ? { burnOnFailure: true } : {})
    };
  }

  function compileRequirementV2(state, event, seed, inProgress) {
    return {
      type: "requirement",
      ...(nonEmpty(event.text) ? { text: event.text } : {}),
      ...(nonEmpty(event.itemId) ? { itemId: event.itemId } : {}),
      ...(nonEmpty(event.itemCategory) ? { itemCategory: event.itemCategory } : {}),
      ...(nonEmpty(event.effectId) ? { effectId: event.effectId } : {}),
      ...(event.consumeOnMet ? { consumeOnMet: true } : {}),
      metBranch:   compileBranchV2(state, event.metBranch,   `${seed}_met`,   inProgress),
      unmetBranch: compileBranchV2(state, event.unmetBranch, `${seed}_unmet`, inProgress)
    };
  }

  function compileLootV2(state, event, seed, inProgress) {
    return {
      type: "loot",
      ...(nonEmpty(event.text) ? { text: event.text } : {}),
      ...(nonEmpty(event.image) ? { image: event.image } : {}),
      loot:   cloneLootList(event.loot || []),
      branch: compileBranchV2(state, event.branch, `${seed}_next`, inProgress)
    };
  }

  function compileTransitionV2(state, event, seed, inProgress) {
    return {
      type: "transition",
      text:   nonEmpty(event.text) || "",
      ...(nonEmpty(event.image) ? { image: event.image } : {}),
      branch: compileBranchV2(state, event.branch, `${seed}_next`, inProgress)
    };
  }

  function compileShopItemV2(item) {
    return {
      itemId:      normalizeString(item?.itemId) || "",
      price:       Number(item?.price || 0),
      ...(item?.limitedStock ? { limitedStock: true }                          : {}),
      ...(Number(item?.stockCount) > 0 ? { stockCount: Number(item.stockCount) } : {})
    };
  }

  function compileShopV2(state, event, seed, inProgress) {
    return {
      type: "shop",
      ...(nonEmpty(event.text) ? { text: event.text } : {}),
      ...(nonEmpty(event.image) ? { image: event.image } : {}),
      items:  Array.isArray(event.items) ? event.items.map(compileShopItemV2) : [],
      branch: compileBranchV2(state, event.branch, `${seed}_next`, inProgress)
    };
  }

  function compileConditionV2(state, event, seed, inProgress) {
    return {
      type: "condition",
      ...(nonEmpty(event.text) ? { text: event.text } : {}),
      conditionId: normalizeString(event.conditionId) || "",
      branch: compileBranchV2(state, event.branch, `${seed}_next`, inProgress)
    };
  }

  function compileDialogueNodeV2(state, node, seed, inProgress) {
    if (!node) return { npcText: "" };
    const responses = Array.isArray(node.responses) ? node.responses : [];
    if (responses.length) {
      return {
        npcText:   normalizeString(node.npcText) || "",
        responses: responses.map((r, i) => compileDialogueResponseV2(state, r, `${seed}_r${i}`, inProgress))
      };
    }
    return {
      npcText: normalizeString(node.npcText) || "",
      branch:  compileBranchV2(state, node.branch, `${seed}_end`, inProgress)
    };
  }

  function compileDialogueResponseV2(state, response, seed, inProgress) {
    const id   = nonEmpty(response?.id)   || seed;
    const text = normalizeString(response?.text) || "";
    if (response?.gateType && response.gateType !== "none") {
      state.warnings.push(`${seed}: gate "${response.gateType}" sulla risposta dialogo e solo metadata di authoring.`);
    }
    if (response?.once) {
      state.warnings.push(`${seed}: l'opzione "una volta" sulla risposta dialogo non e ancora supportata nel runtime v2.`);
    }
    if (response?.hiddenUntilUnlocked) {
      state.warnings.push(`${seed}: hiddenUntilUnlocked sulla risposta dialogo non e ancora supportato nel runtime v2.`);
    }
    // Responses always exit the dialogue: compile as branch
    const branchSrc = response?.branch || (response?.targetId ? { targetId: response.targetId } : null);
    if (branchSrc) {
      return { id, text, branch: compileBranchV2(state, branchSrc, seed, inProgress) };
    }
    // No explicit exit: stay
    return { id, text, branch: { targetId: STAY_SENTINEL } };
  }

  function compileDialogueV2(state, event, seed, inProgress) {
    return {
      type:     "dialogue",
      ...(nonEmpty(event.text)     ? { text:     event.text }     : {}),
      npcName:  normalizeString(event.npcName) || "NPC",
      ...(nonEmpty(event.npcImage) ? { npcImage: event.npcImage } : {}),
      root: compileDialogueNodeV2(state, event.root, seed, inProgress)
    };
  }

  /** Compile a single Choice from a Description node. */
  function compileChoiceV2(state, choice, descId, index) {
    const id   = nonEmpty(choice?.id)   || `${descId}__choice_${index + 1}`;
    const text = normalizeString(choice?.text) || `Scelta ${index + 1}`;
    const flags = {
      ...(choice?.hidden       ? { hidden:       true } : {}),
      ...(choice?.burnAfterUse ? { burnAfterUse: true } : {})
    };
    const seed = `${descId}_${id}`;

    // Inline event already embedded in the choice
    if (choice?.event) {
      const compiled = compileEventV2(state, choice.event, seed, new Set());
      if (compiled) return { id, text, event: compiled, ...flags };
    }

    if (choice?.targetId) {
      const target = resolveV2Target(state, choice.targetId, `${descId} scelta ${index + 1}`);
      if (!target) return { id, text, ...flags };
      if (target.type === "sentinel" || target.type === "description") {
        return { id, text, targetId: target.id, ...flags };
      }
      if (target.type === "event") {
        const compiled = compileEventNodeV2(state, target.node, seed, new Set());
        if (compiled) return { id, text, event: compiled, ...flags };
      }
    }

    return { id, text, ...flags };
  }

  /** Compile a Description node into a v2 runtime Description object. */
  function compileDescriptionV2(state, description) {
    return {
      id: description.id,
      ...(nonEmpty(description.title) ? { title: description.title } : {}),
      text:  normalizeString(description.text) || "",
      ...(nonEmpty(description.image)   ? { image:    description.image }   : {}),
      ...(description.isEnding          ? { isEnding: true }                : {}),
      choices: (Array.isArray(description.choices) ? description.choices : [])
        .map((choice, i) => compileChoiceV2(state, choice, description.id, i))
    };
  }

  function compileAdventureGraphToRuntime(cleaned) {
    const state = createCompilerState(cleaned || {});

    const descriptions = state.descriptions.map((desc) => compileDescriptionV2(state, desc));

    const startingDescriptionId = (() => {
      const id = normalizeString(cleaned?.startingDescriptionId);
      if (id && state.descriptionMap.has(id)) return id;
      return state.descriptions[0]?.id || "";
    })();

    const adventure = {
      id:                       normalizeString(cleaned?.id) || "adventure",
      version:                  2,
      title:                    cleaned?.title || "",
      description:              cleaned?.description || "",
      tags:                     Array.isArray(cleaned?.tags) ? [...cleaned.tags] : [],
      adaptivePowerMultiplier:  Number(cleaned?.adaptivePowerMultiplier || 0.12),
      startingDescriptionId,
      allowCarryOverLoadout:    cleaned?.allowCarryOverLoadout !== false,
      allowFreshStart:          cleaned?.allowFreshStart !== false,
      ...(cleaned?.forceLoadout       ? { forceLoadout:       true } : {}),
      ...(cleaned?.restoreLoadoutOnEnd ? { restoreLoadoutOnEnd: true } : {}),
      starterKitItems:          cloneLootList(cleaned?.starterKitItems),
      descriptions
    };

    return {
      adventure,
      warnings: state.warnings,
      errors:   state.errors
    };
  }

  root.TxtMasterRuntimeCompiler = {
    compileAdventureGraphToRuntime
  };
})(typeof window !== "undefined" ? window : globalThis);
