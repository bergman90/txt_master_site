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

  function makeSceneSkeleton(id) {
    return {
      id,
      title: "",
      text: "",
      image: null,
      sceneLoot: [],
      choices: [],
      encounterId: null,
      encounterCount: 1,
      victorySceneId: null,
      defeatSceneId: null,
      retreatSceneId: null
    };
  }

  function sceneChoice(id, text, patch = {}) {
    return {
      id,
      text: normalizeString(text) || "Continua",
      ...patch
    };
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

  function composeSceneText(...parts) {
    return parts
      .map(nonEmpty)
      .filter(Boolean)
      .join("\n\n");
  }

  function createCompilerState(cleaned) {
    const descriptions = Array.isArray(cleaned.descriptions) ? cleaned.descriptions : [];
    const eventNodes = Array.isArray(cleaned.eventNodes) ? cleaned.eventNodes : [];
    const allIds = new Set([
      ...descriptions.map((desc) => desc.id),
      ...eventNodes.map((node) => node.id)
    ]);
    return {
      cleaned,
      descriptions,
      eventNodes,
      descriptionMap: new Map(descriptions.map((desc) => [desc.id, desc])),
      eventNodeMap: new Map(eventNodes.map((node) => [node.id, node])),
      runtimeScenes: [],
      runtimeSceneMap: new Map(),
      runtimeEncounters: [],
      runtimeEncounterIds: new Set(),
      warnings: [],
      errors: [],
      reservedIds: allIds
    };
  }

  function uniqueId(state, seed) {
    let candidate = slugifyFragment(seed);
    if (!state.reservedIds.has(candidate)) {
      state.reservedIds.add(candidate);
      return candidate;
    }
    let index = 2;
    while (state.reservedIds.has(`${candidate}_${index}`)) {
      index += 1;
    }
    const unique = `${candidate}_${index}`;
    state.reservedIds.add(unique);
    return unique;
  }

  function ensureRuntimeScene(state, id) {
    if (state.runtimeSceneMap.has(id)) return state.runtimeSceneMap.get(id);
    const scene = makeSceneSkeleton(id);
    state.runtimeSceneMap.set(id, scene);
    state.runtimeScenes.push(scene);
    return scene;
  }

  function finalizeScene(scene) {
    return {
      id: scene.id,
      title: scene.title || scene.id,
      text: scene.text || "",
      ...(scene.image ? { image: scene.image } : {}),
      ...(scene.sceneLoot.length ? { sceneLoot: scene.sceneLoot } : {}),
      ...(scene.choices.length ? { choices: scene.choices } : {}),
      ...(scene.encounterId ? { encounterId: scene.encounterId } : {}),
      ...(scene.encounterCount && scene.encounterCount > 1 ? { encounterCount: scene.encounterCount } : {}),
      ...(scene.victorySceneId ? { victorySceneId: scene.victorySceneId } : {}),
      ...(scene.defeatSceneId ? { defeatSceneId: scene.defeatSceneId } : {}),
      ...(scene.retreatSceneId ? { retreatSceneId: scene.retreatSceneId } : {})
    };
  }

  function resolveTargetId(state, targetId, contextLabel, allowedSentinels = []) {
    const normalized = normalizeString(targetId);
    if (!normalized) return null;
    if (isSentinel(normalized)) {
      if (allowedSentinels.includes(normalized)) return normalized;
      state.errors.push(`${contextLabel}: il sentinel ${normalized} non e supportato in questo contesto runtime.`);
      return null;
    }
    if (state.descriptionMap.has(normalized) || state.eventNodeMap.has(normalized)) return normalized;
    state.errors.push(`${contextLabel}: target runtime inesistente (${normalized}).`);
    return null;
  }

  function branchHasPayload(branch) {
    return Boolean(
      nonEmpty(branch?.text) ||
      (Array.isArray(branch?.loot) && branch.loot.length) ||
      nonEmpty(branch?.condition) ||
      nonEmpty(branch?.unlockChoiceId) ||
      branch?.burnAfterUse
    );
  }

  function pushBranchUnsupportedWarnings(state, branch, contextLabel) {
    if (!branch) return;
    if (nonEmpty(branch.condition)) {
      state.warnings.push(`${contextLabel}: condition non e ancora migrata nel runtime compilato e verra ignorata.`);
    }
  }

  function buildContinueChoice(sceneId, nextSceneId, text = "Continua") {
    if (!nextSceneId || isSentinel(nextSceneId)) return null;
    return sceneChoice(`${sceneId}__next`, text, { nextSceneId });
  }

  function compileBranchTarget(state, branch, seed, options = {}) {
    if (!branch) return null;
    const contextLabel = options.contextLabel || "Branch";
    const allowedSentinels = Array.isArray(options.allowedSentinels) ? options.allowedSentinels : [];
    const directTarget = resolveTargetId(state, branch.targetId, contextLabel, allowedSentinels);
    const hasPayload = branchHasPayload(branch);
    pushBranchUnsupportedWarnings(state, branch, contextLabel);

    if (branch.event && !hasPayload) {
      return compileInlineEventScene(state, branch.event, `${seed}__event`, {
        titleHint: options.titleHint || contextLabel
      });
    }

    if (!branch.event && !hasPayload) {
      return directTarget;
    }

    if (isSentinel(directTarget) && !branch.event) {
      state.warnings.push(`${contextLabel}: testo o loot del branch verso sentinel non sono supportati e verranno ignorati.`);
      return directTarget;
    }

    const sceneId = uniqueId(state, `${seed}__branch`);
    const scene = ensureRuntimeScene(state, sceneId);
    scene.title = options.sceneTitle || `${options.titleHint || "Esito"}`
      .trim();
    scene.text = nonEmpty(branch.text) || "";
    scene.sceneLoot = cloneLootList(branch.loot);
    const nextSceneId = branch.event
      ? compileInlineEventScene(state, branch.event, `${sceneId}__event`, {
          titleHint: options.titleHint || contextLabel
        })
      : directTarget;
    const continueChoice = buildContinueChoice(sceneId, nextSceneId, options.choiceText || "Continua");
    scene.choices = continueChoice ? [continueChoice] : [];
    return sceneId;
  }

  function compileCombatEncounter(state, sceneId, event, title) {
    const groups = Array.isArray(event.combatGroups) ? event.combatGroups : [];
    if (!groups.length) {
      state.errors.push(`${title}: evento combattimento senza gruppi mostro.`);
      return { encounterId: null, encounterCount: 1 };
    }
    const firstGroup = groups[0] || {};
    if (groups.length > 1) {
      state.warnings.push(`${title}: il runtime app supporta un solo profilo nemico per scena. Usero il primo gruppo come profilo di combattimento e manterro il resto come warning di authoring.`);
    }
    const encounterId = uniqueId(state, `enc_${sceneId}`);
    const mergedLoot = groups.flatMap((group) => cloneLootList(group.loot));
    const mergedGold = groups.reduce((sum, group) => sum + Number(group?.goldReward || 0), 0);
    const encounter = {
      id: encounterId,
      name: nonEmpty(firstGroup.name) || title,
      description: "",
      hitPoints: Number(firstGroup.hitPoints || 1),
      attackBonus: Number(firstGroup.attackBonus || 0),
      defense: Number(firstGroup.defense || 0),
      damageMin: Number(firstGroup.damageMin || 0),
      damageMax: Number(firstGroup.damageMax || 0),
      goldReward: mergedGold,
      abilityIds: Array.isArray(firstGroup.abilityIds) ? [...firstGroup.abilityIds] : [],
      loot: mergedLoot,
      hasBerserkerPhase: Boolean(firstGroup.hasBerserkerPhase)
    };
    if (!state.runtimeEncounterIds.has(encounterId)) {
      state.runtimeEncounterIds.add(encounterId);
      state.runtimeEncounters.push(encounter);
    }
    return {
      encounterId,
      encounterCount: Math.max(1, Number(firstGroup.count || 1))
    };
  }

  function compileSkillCheckBranch(state, branch, seed, contextLabel) {
    const directTarget = resolveTargetId(state, branch?.targetId, contextLabel, [STAY_SENTINEL, RETRY_SENTINEL]);
    pushBranchUnsupportedWarnings(state, branch, contextLabel);
    if (directTarget === STAY_SENTINEL && !branch?.event) {
      return {
        targetId: STAY_SENTINEL,
        text: nonEmpty(branch?.text) || undefined,
        loot: cloneLootList(branch?.loot),
        condition: nonEmpty(branch?.condition) || undefined,
        unlockChoiceId: nonEmpty(branch?.unlockChoiceId) || undefined,
        burnAfterUse: branch?.burnAfterUse || undefined
      };
    }
    const nextTarget = compileBranchTarget(state, branch, seed, {
      contextLabel,
      titleHint: contextLabel,
      allowedSentinels: [STAY_SENTINEL, RETRY_SENTINEL]
    });
    return {
      targetId: nextTarget
    };
  }

  function compileDialogueChoices(state, sceneId, event, contextLabel) {
    const responses = Array.isArray(event.root?.responses) ? event.root.responses : [];
    if (!responses.length) {
      const nextSceneId = compileBranchTarget(state, event.branch || event.root?.branch, `${sceneId}__dialogue_branch`, {
        contextLabel: `${contextLabel} | uscita lineare`,
        titleHint: `${contextLabel} | uscita`
      });
      const nextChoice = buildContinueChoice(sceneId, nextSceneId, "Continua");
      return nextChoice ? [nextChoice] : [];
    }
    return responses.map((response, index) => {
      const nextSceneId = resolveTargetId(
        state,
        response.targetId,
        `${contextLabel} | risposta ${index + 1}`,
        []
      );
      if (response.gateType && response.gateType !== "none") {
        state.warnings.push(`${contextLabel}: il gate "${response.gateType}" sulla risposta ${index + 1} resta metadata di authoring. In runtime conta il nodo collegato, non il badge.`);
      }
      if (response.once) {
        state.warnings.push(`${contextLabel}: l'opzione "una volta" sulla risposta ${index + 1} non e ancora migrata nel runtime compilato.`);
      }
      return sceneChoice(response.id || `${sceneId}__response_${index + 1}`, response.text || `Risposta ${index + 1}`, {
        ...(nextSceneId ? { nextSceneId } : {}),
        ...(response.hiddenUntilUnlocked ? { hidden: true } : {})
      });
    });
  }

  function compileEventIntoScene(state, scene, event, meta = {}) {
    const sceneTitle = nonEmpty(meta.titleHint) || eventLabel(event?.type);
    scene.title = scene.title || sceneTitle;
    scene.text = scene.text || "";
    scene.image = event?.image || scene.image || null;

    switch (event?.type) {
      case "transition": {
        scene.text = nonEmpty(event.text) || "";
        const nextSceneId = compileBranchTarget(state, event.branch, `${scene.id}__next`, {
          contextLabel: `${sceneTitle} | transizione`,
          titleHint: sceneTitle
        });
        const nextChoice = buildContinueChoice(scene.id, nextSceneId, meta.choiceText || meta.titleHint || "Continua");
        scene.choices = nextChoice ? [nextChoice] : [];
        return;
      }
      case "loot": {
        scene.text = nonEmpty(event.text) || "";
        scene.sceneLoot = cloneLootList(event.loot);
        const nextSceneId = compileBranchTarget(state, event.branch, `${scene.id}__next`, {
          contextLabel: `${sceneTitle} | loot`,
          titleHint: sceneTitle
        });
        const nextChoice = buildContinueChoice(scene.id, nextSceneId, meta.choiceText || "Continua");
        scene.choices = nextChoice ? [nextChoice] : [];
        return;
      }
      case "requirement": {
        scene.text = nonEmpty(event.text) || "";
        const metTarget = compileBranchTarget(state, event.metBranch, `${scene.id}__met`, {
          contextLabel: `${sceneTitle} | soddisfatto`,
          titleHint: `${sceneTitle} | soddisfatto`,
          allowedSentinels: [DEATH_SENTINEL, STAY_SENTINEL, RETRY_SENTINEL]
        });
        const unmetTarget = compileBranchTarget(state, event.unmetBranch, `${scene.id}__unmet`, {
          contextLabel: `${sceneTitle} | non soddisfatto`,
          titleHint: `${sceneTitle} | non soddisfatto`,
          allowedSentinels: [DEATH_SENTINEL, STAY_SENTINEL, RETRY_SENTINEL]
        });
        scene.choices = [
          sceneChoice(`${scene.id}__requirement`, meta.choiceText || meta.titleHint || "Verifica requisito", {
            event: {
              type: "requirement",
              ...(event.requirementMode ? { requirementMode: event.requirementMode } : {}),
              ...(event.itemId ? { itemId: event.itemId } : {}),
              ...(event.lockId ? { lockId: event.lockId } : {}),
              ...(event.questItemId ? { questItemId: event.questItemId } : {}),
              metBranch: { ...(metTarget ? { targetId: metTarget } : {}) },
              unmetBranch: { ...(unmetTarget ? { targetId: unmetTarget } : {}) }
            }
          })
        ];
        return;
      }
      case "skillcheck": {
        scene.text = nonEmpty(event.text) || "";
        const success = compileSkillCheckBranch(state, event.successBranch, `${scene.id}__success`, `${sceneTitle} | successo`);
        const failure = compileSkillCheckBranch(state, event.failureBranch, `${scene.id}__failure`, `${sceneTitle} | fallimento`);
        scene.choices = [
          sceneChoice(`${scene.id}__check`, meta.choiceText || meta.titleHint || "Affronta la prova", {
            skillCheck: {
              attribute: normalizeString(event.attribute) || "",
              difficulty: Number(event.difficulty || 12),
              successSceneId: success.targetId || STAY_SENTINEL,
              failureSceneId: failure.targetId || STAY_SENTINEL,
              ...(success.targetId === STAY_SENTINEL && success.loot.length ? { successLoot: success.loot } : {}),
              ...(success.targetId === STAY_SENTINEL && success.text ? { successText: success.text } : {}),
              ...(success.targetId === STAY_SENTINEL && success.condition ? { successCondition: success.condition } : {}),
              ...(success.targetId === STAY_SENTINEL && success.unlockChoiceId ? { successUnlockChoiceId: success.unlockChoiceId } : {}),
              ...(failure.targetId === STAY_SENTINEL && failure.loot.length ? { failureLoot: failure.loot } : {}),
              ...(failure.targetId === STAY_SENTINEL && failure.text ? { failureText: failure.text } : {}),
              ...(failure.targetId === STAY_SENTINEL && failure.condition ? { failureCondition: failure.condition } : {}),
              ...(failure.targetId === STAY_SENTINEL && failure.unlockChoiceId ? { failureUnlockChoiceId: failure.unlockChoiceId } : {}),
              ...(event.burnOnFailure || (failure.burnAfterUse && failure.targetId === STAY_SENTINEL) ? { burnOnFailure: true } : {})
            }
          })
        ];
        return;
      }
      case "combat": {
        scene.text = nonEmpty(event.text) || "";
        const encounter = compileCombatEncounter(state, scene.id, event, sceneTitle);
        scene.encounterId = encounter.encounterId;
        scene.encounterCount = encounter.encounterCount;
        scene.victorySceneId = compileBranchTarget(state, event.victoryBranch, `${scene.id}__victory`, {
          contextLabel: `${sceneTitle} | vittoria`,
          titleHint: `${sceneTitle} | vittoria`,
          allowedSentinels: []
        });
        scene.defeatSceneId = compileBranchTarget(state, event.defeatBranch, `${scene.id}__defeat`, {
          contextLabel: `${sceneTitle} | sconfitta`,
          titleHint: `${sceneTitle} | sconfitta`,
          allowedSentinels: [DEATH_SENTINEL]
        });
        if (event.retreatBranch) {
          scene.retreatSceneId = compileBranchTarget(state, event.retreatBranch, `${scene.id}__retreat`, {
            contextLabel: `${sceneTitle} | ritirata`,
            titleHint: `${sceneTitle} | ritirata`,
            allowedSentinels: [DEATH_SENTINEL, NO_ESCAPE_SENTINEL]
          });
        }
        scene.choices = [];
        return;
      }
      case "dialogue": {
        const npcLine = composeSceneText(nonEmpty(event.text), nonEmpty(event.root?.npcText));
        scene.text = npcLine || "";
        scene.choices = compileDialogueChoices(state, scene.id, event, sceneTitle);
        return;
      }
      case "condition": {
        scene.text = nonEmpty(event.text) || "";
        state.warnings.push(`${sceneTitle}: il nodo condition resta disattivato nel runtime compilato. Verra trattato come transizione narrativa semplice.`);
        const nextSceneId = compileBranchTarget(state, event.branch, `${scene.id}__condition`, {
          contextLabel: `${sceneTitle} | condizione`,
          titleHint: sceneTitle
        });
        const nextChoice = buildContinueChoice(scene.id, nextSceneId, meta.choiceText || "Continua");
        scene.choices = nextChoice ? [nextChoice] : [];
        return;
      }
      case "shop": {
        scene.text = nonEmpty(event.text) || "";
        state.warnings.push(`${sceneTitle}: il nodo shop non viene piu esportato come meccanica runtime. Il negozio globale dell'app resta separato.`);
        const nextSceneId = compileBranchTarget(state, event.branch, `${scene.id}__shop`, {
          contextLabel: `${sceneTitle} | shop`,
          titleHint: sceneTitle
        });
        const nextChoice = buildContinueChoice(scene.id, nextSceneId, meta.choiceText || "Continua");
        scene.choices = nextChoice ? [nextChoice] : [];
        return;
      }
      default: {
        state.warnings.push(`${sceneTitle}: tipo evento sconosciuto (${event?.type || "?"}). Sara esportato come transizione vuota.`);
        scene.choices = [];
      }
    }
  }

  function compileInlineEventScene(state, event, seed, meta = {}) {
    const sceneId = uniqueId(state, `rt_${seed}_${event?.type || "event"}`);
    const scene = ensureRuntimeScene(state, sceneId);
    compileEventIntoScene(state, scene, event, {
      titleHint: meta.titleHint || eventLabel(event?.type),
      choiceText: meta.choiceText || meta.titleHint || "Continua"
    });
    return sceneId;
  }

  function compileDescriptionScene(state, description) {
    const scene = ensureRuntimeScene(state, description.id);
    scene.title = description.title || description.id;
    scene.text = description.text || "";
    scene.image = description.image || null;
    scene.sceneLoot = [];
    scene.choices = (Array.isArray(description.choices) ? description.choices : []).map((choice, index) => {
      const choiceId = choice.id || `${description.id}__choice_${index + 1}`;
      const choiceText = choice.text || `Scelta ${index + 1}`;
      const baseFlags = {
        ...(choice?.hidden ? { hidden: true } : {}),
        ...(choice?.burnAfterUse ? { burnAfterUse: true } : {})
      };
      if (choice?.event) {
        const eventSceneId = compileInlineEventScene(state, choice.event, `${description.id}_${choice.id || index + 1}`, {
          titleHint: choice.text || eventLabel(choice.event.type),
          choiceText: choice.text || "Continua"
        });
        return sceneChoice(choiceId, choiceText, { nextSceneId: eventSceneId, ...baseFlags });
      }
      const nextSceneId = resolveTargetId(
        state,
        choice?.targetId,
        `Scena ${description.id}, scelta ${index + 1}`,
        []
      );
      return sceneChoice(choiceId, choiceText, {
        ...(nextSceneId ? { nextSceneId } : {}),
        ...baseFlags
      });
    });
  }

  function compileEventNodeScene(state, node) {
    const scene = ensureRuntimeScene(state, node.id);
    scene.title = nonEmpty(node.text) || eventLabel(node?.event?.type);
    compileEventIntoScene(state, scene, node.event, {
      titleHint: scene.title,
      choiceText: scene.title
    });
  }

  function compileAdventureGraphToRuntime(cleaned) {
    const state = createCompilerState(cleaned || {});

    state.descriptions.forEach((description) => compileDescriptionScene(state, description));
    state.eventNodes.forEach((node) => compileEventNodeScene(state, node));

    const startingSceneId = resolveTargetId(
      state,
      cleaned?.startingDescriptionId,
      "Descrizione iniziale",
      []
    ) || state.descriptions[0]?.id || "";

    const adventure = {
      id: normalizeString(cleaned?.id) || "adventure",
      title: cleaned?.title || "",
      description: cleaned?.description || "",
      tags: Array.isArray(cleaned?.tags) ? [...cleaned.tags] : [],
      adaptivePowerMultiplier: Number(cleaned?.adaptivePowerMultiplier || 0.12),
      startingSceneId,
      allowCarryOverLoadout: cleaned?.allowCarryOverLoadout !== false,
      allowFreshStart: cleaned?.allowFreshStart !== false,
      starterKitItems: cloneLootList(cleaned?.starterKitItems),
      scenes: state.runtimeScenes.map(finalizeScene),
      encounters: state.runtimeEncounters
    };

    return {
      adventure,
      warnings: state.warnings,
      errors: state.errors
    };
  }

  root.TxtMasterRuntimeCompiler = {
    compileAdventureGraphToRuntime
  };
})(typeof window !== "undefined" ? window : globalThis);
