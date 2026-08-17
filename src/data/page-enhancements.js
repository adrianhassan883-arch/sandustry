const official = 'Official / platform';
const community = 'Community / Demo';
const verify = 'Needs in-game verification';

export const pageEnhancements = {
  '/guides/beginner-guide': {
    notice:
      'This guide uses official progression facts for the main route and marks Demo/player route details as examples, not a single required build order.',
    diagram: {
      title: 'First Factory Spine',
      caption: 'A stable opening route should prove each material handoff before scaling the next module.',
      nodes: [
        ['Sand + Water', 'Wet Sand input', official],
        ['Shaker', 'Gold plus residue handling', official],
        ['Filters', 'Separate useful output from byproducts', official],
        ['Thermal stage', 'Prepare burned byproduct for press', community],
        ['Kinetic Press', 'Gold and seed progression', official],
      ],
    },
    deepSections: [
      {
        title: 'What a “good start” means',
        body: [
          'A good Sandustry opening is not the biggest possible sand machine. It is a small line where every pixel has a destination: water becomes Wet Sand near the input, Gold has a clean collection path, and residue is either stored, burned, or kept away from useful output.',
          'The strongest early habit is to pause after every unlock and ask what bottleneck it actually solves. Map improves navigation, Filter improves separation, thermal tools enable residue processing, and press/planter systems turn byproducts into later progression instead of garbage.',
        ],
      },
      {
        title: 'How to read player videos safely',
        body: [
          'Demo and creator routes are useful because they show pacing, failure points, and layout patterns. They should not be copied as permanent facts unless the same interaction is present in the current build.',
          'When a video shows a high-efficiency layout, treat it as a design pattern: compact input, controlled water, separated byproducts, measured drop height, and overflow cleanup. Those principles survive version changes better than exact tile placements.',
        ],
      },
    ],
    evidence: [
      [official, 'Steam, Xbox, and official Wiki material define the current factual base.'],
      [community, 'YouTube summaries help identify common beginner mistakes and practical routing ideas.'],
      [verify, 'Shortcut names, exact build order, and optimal ratios should be checked in the shipped build.'],
    ],
  },
  '/guides/tips': {
    notice:
      'Tips that depend on keybinds or UI behavior should be rechecked in settings before screenshots are published.',
    diagram: {
      title: 'Troubleshooting Order',
      caption: 'Most factory problems are easier to fix if you inspect the material path before adding more input.',
      nodes: [
        ['Stop scaling', 'Freeze the line in its current state', official],
        ['Find mixed material', 'Look for byproducts entering useful lanes', official],
        ['Add filters', 'Protect the next machine', official],
        ['Add overflow', 'Give wrong pixels a place to go', community],
      ],
    },
    deepSections: [
      {
        title: 'Tips that matter most',
        body: [
          'The most valuable tip is to build test chambers. Sandustry has many reactions that look harmless at one-pixel scale and become a base-wide cleanup job once they touch water, heat, snow, or an open conveyor line.',
          'Use copy/paste and replace controls for repeated modules, but only after one module has run long enough to show its real failure mode. Duplicating a bad layout is the fastest way to make a bigger bad layout.',
        ],
      },
    ],
    evidence: [
      [official, 'Official beginner notes support copy/paste, replace controls, filters, and unstuck recovery.'],
      [community, 'Player videos add useful observations about limiting inputs and cleaning press tops.'],
      [verify, 'Default keybinds and UI labels are version-sensitive.'],
    ],
  },
  '/resources/water': {
    notice:
      'Official sources support water, steam, rain, snow, ice, and Lumling interactions; exact infinite-water blueprints still need current-build testing.',
    diagram: {
      title: 'Water Cycle in a Factory',
      caption: 'Water is both input and system risk: it creates Wet Sand/Wet Seeds, but it also leaks, freezes, or becomes Steam.',
      nodes: [
        ['Water', 'Surface, underground, Ice, rain, Lumlings', official],
        ['Wet Sand', 'Main early production input', official],
        ['Steam', 'Heat or Lava interaction', official],
        ['Rain', 'Steam reaching sky returns water', official],
        ['Snow / Ice', 'Cold-side loop ingredient', official],
      ],
    },
    deepSections: [
      {
        title: 'Water is infrastructure',
        body: [
          'Water should be planned like a logistics lane, not a background resource. It can pass through many structures and can be blocked by specific structures, so your first water system needs visible boundaries and a way to recover from leaks.',
          'For early Gold production, bring Sand to a controlled water contact point rather than letting water roam across the factory. That keeps Wet Sand creation predictable and prevents the reservoir from being consumed by unrelated experiments.',
        ],
      },
      {
        title: 'Where infinite-water ideas fit',
        body: [
          'The official mechanic basis is strong: Steam can return as rain, Cryoblaster/Snow can participate in water generation, and Lumlings can provide a small constant supply. The uncertainty is not whether water loops exist in principle; it is which compact layout remains stable in the current build.',
        ],
      },
    ],
    evidence: [
      [official, 'Water type, density, sources, blockers, wetting behavior, and rain loop basis.'],
      [community, 'Demo and Early Access videos show practical water-loop and snow failure examples.'],
      [verify, 'Exact dimensions, net-positive loop rate, and best collector shape.'],
    ],
  },
  '/resources/lava': {
    notice:
      'Lava facts are based on official material notes; custom-map heat arrays are community examples and should stay labeled.',
    diagram: {
      title: 'Lava Transport Chain',
      caption: 'The safe transport form is not loose Lava. Move the solid/cinder intermediate, then restore Lava later.',
      nodes: [
        ['Lava', 'Deep Lava Cave resource', official],
        ['Snow / Cryoblaster', 'Solidify into Scoria', official],
        ['Scoria', 'Break into Cinders', official],
        ['Cinders', 'Move by Grabber, belt, or launcher', official],
        ['Heat', 'Reignite into Lava', official],
      ],
    },
    deepSections: [
      {
        title: 'Why Lava needs containment first',
        body: [
          'Lava is useful because it carries heat and ignition potential, but the same traits make it a poor neighbor for early water and seed lines. The destination chamber should exist before you move the first Cinder.',
          'Water contact turns into Steam, so accidental mixing can turn a lava project into a water/steam project. That interaction is useful only when the layout is designed around it.',
        ],
      },
    ],
    evidence: [
      [official, 'Lava source, density, Cinder process, Scoria/Cinders, and water interaction.'],
      [community, 'Oasis and custom-map videos can inspire heat management, not vanilla claims.'],
      [verify, 'Best ignition source and compact destination chamber layout.'],
    ],
  },
  '/resources/copper': {
    notice:
      'Copper Ore facts are reliable, but the full Liquid Copper and power-brick chain needs a dedicated verification pass.',
    diagram: {
      title: 'Copper Progression Boundary',
      caption: 'This page keeps confirmed ore facts separate from mid-game processing claims.',
      nodes: [
        ['Copper Ore', 'Small underground veins', official],
        ['Digging tool', 'Any digging tool listed for Copper Ore', official],
        ['Copper', 'Produced when ore is dug', official],
        ['Liquid Copper', 'Processing chain not yet complete here', verify],
        ['Power Bricks', 'Copper molds with liquid copper', official],
      ],
    },
    deepSections: [
      {
        title: 'Why this page stays conservative',
        body: [
          'Copper has enough confirmed information for a useful resource page: where to find the ore, how it behaves as a material, and what it connects to later. The missing part is the complete current-version processing route from Copper to Liquid Copper.',
          'Until that chain is verified, the page should help players identify and store Copper cleanly while linking forward to future Energy and Power Brick pages.',
        ],
      },
    ],
    evidence: [
      [official, 'Copper Ore location, mining, output, density, and power-brick connection.'],
      [verify, 'Exact smelting or mold workflow and current machine names.'],
    ],
  },
  '/resources/fluxite': {
    notice:
      'Use Fluxite as the canonical term; “flux” appears only as a search bridge for players.',
    diagram: {
      title: 'Fluxite Sources and Uses',
      caption: 'Fluxite is a progression resource, not just a loose ingredient.',
      nodes: [
        ['Natural Fluxite', 'Limited world source', official],
        ['Tool upgrades', 'Improve player capability', official],
        ['Drone upgrades', 'Automation progression', official],
        ['Voidbloom', 'Later conversion input', official],
        ['Flux Emanator', 'Converts Voidbloom to Fluxite', official],
      ],
    },
    deepSections: [
      {
        title: 'How to avoid terminology drift',
        body: [
          'Players may search “flux” because videos or UI shorthand can compress the name, but the site should standardize on Fluxite. That keeps titles aligned with official terminology while still capturing search intent in the body copy.',
          'Exact upgrade priority should come from current cost screens. Before that exists, the safe advice is to spend early Fluxite on upgrades that remove repeated manual work.',
        ],
      },
    ],
    evidence: [
      [official, 'Fluxite name, upgrade uses, natural source, Flux Emanator, Voidbloom conversion.'],
      [community, 'Videos mention fluxite automation and flux-like shorthand.'],
      [verify, 'Upgrade rankings, UI labels, and production rates.'],
    ],
  },
  '/resources/artifacts': {
    notice:
      'Artifact pages should avoid unverified coordinates, puzzle solutions, or reward lists until current-build evidence exists.',
    diagram: {
      title: 'Artifact Research Boundary',
      caption: 'Exploration facts are publishable now; exact spoilers need screenshots or official confirmation.',
      nodes: [
        ['Ancient ruins', 'Exploration hook', official],
        ['Puzzles', 'May require later tools', official],
        ['Artifacts', 'Powerful rewards', official],
        ['Locator', 'Scans when supplied with Voidjuice', official],
        ['Exact rewards', 'Hold for verification', verify],
      ],
    },
    deepSections: [
      {
        title: 'Spoiler discipline',
        body: [
          'Artifact pages can be useful without becoming unreliable spoiler lists. The current version should explain when to hunt, when to return later, and why the Locator/Voidjuice path matters.',
          'Exact puzzle solutions are the first place a fan wiki can become wrong after an update. Those should ship only when paired with version labels and visual evidence.',
        ],
      },
    ],
    evidence: [
      [official, 'Steam and official Wiki material establish artifacts, ruins, Locator, and Voidjuice.'],
      [community, 'Ancient relic videos show player interest and possible routes.'],
      [verify, 'Locations, rewards, puzzle solutions, and artifact tiering.'],
    ],
  },
  '/buildings/kinetic-slag-press': {
    notice:
      'Current page title uses Kinetic Slag Press for search clarity, while official/local notes also use Kinetic Press. Material names should be verified in-game before launch copy is locked.',
    diagram: {
      title: 'Press Drop Requirement',
      caption: 'The press is a height-sensitive machine; anti-jam routing belongs above the input, not after the output.',
      nodes: [
        ['Burned byproduct', 'Burnt Residue / Burnt Slag term check', verify],
        ['25+ block drop', 'Height requirement', official],
        ['Kinetic Press', 'Converts valid falling input', official],
        ['Gold + Seed', 'Known output in local notes', official],
        ['Top cleanup', 'Angled launchers or side path', official],
      ],
    },
    deepSections: [
      {
        title: 'Why the press jams',
        body: [
          'A jam is usually not a mystery. The material was not the expected burned byproduct, it did not fall far enough, or input volume exceeded what the top of the press could clear.',
          'The best anti-jam design protects the top of the press: filter before the drop, meter launcher input, and give stalled pixels a side exit before they become a pile.',
        ],
      },
      {
        title: 'Single press before arrays',
        body: [
          'A single working press teaches more than a copied multi-press array. Once one shaft runs without clogs, duplicate the measured height and cleanup path; do not duplicate the visual shape alone.',
        ],
      },
    ],
    evidence: [
      [official, 'Kinetic Press function, 25+ block drop, output, blockers, and anti-jam launcher tip.'],
      [community, 'Dual-press and limit-flow layouts are player examples.'],
      [verify, 'Current official material names and optimal press-array spacing.'],
    ],
  },
  '/buildings/processing-line': {
    notice:
      '“Processing Plant” is treated as a player search term for a factory module, not as an official building name.',
    diagram: {
      title: 'Early Processing Module',
      caption: 'A complete module separates Gold, residue, burned byproduct, press input, and seed/flower progression.',
      nodes: [
        ['Wet Sand', 'Watered input', official],
        ['Shaker', 'Gold plus residue', official],
        ['Filter wall', 'Separate outputs', official],
        ['Burn stage', 'Prepare press input', official],
        ['Press / Planter', 'Byproduct becomes progression', official],
      ],
    },
    deepSections: [
      {
        title: 'Factory layout as a set of lanes',
        body: [
          'The useful way to think about a processing line is not “one machine after another” but “one material lane per behavior.” Wet Sand needs a water boundary, Gold needs a clean fall path, residue needs a burn path, and burned residue needs a measured drop.',
          'If two materials share a lane, there should be a reason and a filter protecting the next machine. Otherwise the line is waiting to jam.',
        ],
      },
      {
        title: 'Advanced chain boundary',
        body: [
          'Demo notes describe an extended chain through seeds, flowers, purple resources, Voidbloom, and Fluxite. The site can describe this as an advanced route concept while keeping exact rates and tile layouts marked for current-build verification.',
        ],
      },
    ],
    evidence: [
      [official, 'Shaker, Filter, Kinetic Press, Planter Box, Gold research, and byproduct handling.'],
      [community, 'Creator videos show vertical shaker towers, burn arrays, and press layouts.'],
      [verify, 'Production ratios, exact rates, and best current layout.'],
    ],
  },
  '/buildings/slag-burner': {
    notice:
      'This is a search-intent correction page. It should not invent a Slag Burner item.',
    diagram: {
      title: 'Byproduct Burning Path',
      caption: 'The real topic is residue handling: burn it safely, then send only valid material to the press.',
      nodes: [
        ['Residue', 'Shaker byproduct', official],
        ['Flamethrower', 'Burns residue / melts ice / vaporizes water', official],
        ['Burner Belt', 'Ignites with Thermal Buffer heat', official],
        ['Burned material', 'Term is version-sensitive', verify],
        ['Kinetic Press', 'Needs valid falling input', official],
      ],
    },
    deepSections: [
      {
        title: 'Why the page exists',
        body: [
          'Players will search for “slag burner” because they are trying to solve a real problem: residue or slag-like byproducts filling their line. The page should meet that search, then translate it into official terminology.',
          'The safe content is process-based: isolate byproducts, burn them with confirmed thermal tools, filter the result, and feed the press from sufficient height.',
        ],
      },
    ],
    evidence: [
      [official, 'Residue, Burnt Residue, Flamethrower, Burner Belt, Thermal Buffer, Kinetic Press.'],
      [community, 'Large burner arrays appear in videos, especially modded/custom environments.'],
      [verify, 'Whether “slag” is current shipped terminology and exact burner setup.'],
    ],
  },
  '/buildings/planter-box': {
    notice:
      'Planter Box mechanics are publishable, but exact harvest method and Amethelis spelling should be verified in the current build.',
    diagram: {
      title: 'Planter Box Chain',
      caption: 'The Planter Box turns wet seed progression into flower output and later resource collection.',
      nodes: [
        ['Seed', 'Output term may vary by version', verify],
        ['Water contact', 'Creates Wet Seed', official],
        ['Planter Box', 'Wet Seed grows into Flower', official],
        ['Flower harvest', 'Method needs verification', verify],
        ['Gold + Amethelis', 'Known output path in notes', official],
      ],
    },
    deepSections: [
      {
        title: 'Why Planter Box belongs after the first factory',
        body: [
          'Planter Box is not just a decorative growth system. It extends early Gold production by giving seed-like output a purpose, but it also adds water control and harvest logistics.',
          'The planter loop should live near, but not inside, your main water system. A small watering contact point is easier to debug than a planter field that shares water with every other machine.',
        ],
      },
    ],
    evidence: [
      [official, 'Planter Box name, Wet Seeds, Flowers, pass-through solids, research cost, Gold/Amethelis output.'],
      [community, 'Player videos show auto-harvest ideas and large planter arrays.'],
      [verify, 'Current harvest method, output rate, and exact spelling.'],
    ],
  },
  '/mechanics/infinite-water': {
    notice:
      'Infinite water should be framed as an official mechanic basis plus a layout-testing problem, not as a guaranteed one-size blueprint.',
    diagram: {
      title: 'Infinite Water Test Chamber',
      caption: 'The question is whether captured output exceeds losses after leaks, freezing, and missed rain are accounted for.',
      nodes: [
        ['Snow / Cryoblaster', 'Cold input', official],
        ['Heat', 'Melt or vaporize into Steam', official],
        ['Sky path', 'Steam rises', official],
        ['Rain capture', 'Water returns', official],
        ['Loss audit', 'Prove net positive', verify],
      ],
    },
    deepSections: [
      {
        title: 'What is confirmed vs what is not',
        body: [
          'Confirmed: Sandustry has a water cycle where Steam can return as rain, Cryoblaster/Snow participates in water generation, and Lumlings can provide a small constant supply. Not confirmed for this site yet: the best compact, beginner-proof build.',
          'A good infinite-water article should therefore teach testing: isolate the chamber, run it long enough to observe losses, and only connect it to production after it proves stable.',
        ],
      },
    ],
    evidence: [
      [official, 'Steam-to-rain, Cryoblaster/Snow, water sources, Lumlings.'],
      [community, 'Infinite-water and ancient-relic videos show possible layouts.'],
      [verify, 'Blueprint dimensions, rate, and current-version reproducibility.'],
    ],
  },
  '/mechanics/how-to-move-lava': {
    notice:
      'This page can be direct because the Cinder process is official; exact safety layouts still need screenshots.',
    diagram: {
      title: 'Move Lava Without Moving Lava',
      caption: 'The trick is to change Lava into a transportable form, then change it back.',
      nodes: [
        ['Freeze Lava', 'Snow or Cryoblaster', official],
        ['Scoria', 'Solid intermediate', official],
        ['Break', 'Creates Cinders', official],
        ['Transport Cinders', 'Grabber, belts, launchers', official],
        ['Reignite', 'Restore Lava', official],
      ],
    },
    deepSections: [
      {
        title: 'Common mistakes',
        body: [
          'The common mistake is trying to treat Lava like water. Cinders are the transportable form, so pipe-style assumptions should be avoided unless the current build gives you a direct Lava transport tool.',
          'The second mistake is building the destination after moving Cinders. Build the destination first, keep water out, then move only the amount you can safely reignite.',
        ],
      },
    ],
    evidence: [
      [official, 'Cinder process, Scoria, Cinders, transport options, and reignition.'],
      [community, 'Videos add practical cave-search and containment ideas.'],
      [verify, 'Best ignition source and minimum safe chamber.'],
    ],
  },
  '/mechanics/how-to-break-crackstone': {
    notice:
      'This page is intentionally short and decisive because official facts answer the core search intent.',
    diagram: {
      title: 'Crackstone Tool Logic',
      caption: 'Do not mine Crackstone for drops; treat it as an obstacle.',
      nodes: [
        ['Crackstone', 'Hard solid', official],
        ['Shovel', 'Does not work', official],
        ['Gun', 'Does not work', official],
        ['Other digging tools', 'Destroy it', official],
        ['Drops', 'Nothing remains', official],
      ],
    },
    deepSections: [
      {
        title: 'When to come back later',
        body: [
          'If Shovel and Gun are all you have, Crackstone is a progression gate. Mark the area, continue researching stronger digging tools, and return when your toolkit has improved.',
          'Because it leaves nothing behind, the reward is access, not material collection. Do not build collectors under Crackstone unless another resource is nearby.',
        ],
      },
    ],
    evidence: [
      [official, 'Matter type, source, invalid tools, valid digging tools, and no drops.'],
      [verify, 'Best tool ranking by speed or cost.'],
    ],
  },
  '/mechanics/how-to-remove-haulers': {
    notice:
      'This page must stay visibly unresolved until an official page or current in-game test confirms a removal method.',
    diagram: {
      title: 'Hauler Safety Check',
      caption: 'The drone exists and its job is known; removal still needs a safe current-build test.',
      nodes: [
        ['Hauler Drone', 'Confirmed drone category', official],
        ['Research unlock', 'Automated transport', official],
        ['Removal UI', 'Not confirmed here', verify],
        ['Idle-zone workaround', 'Demo/player clue', community],
        ['Final answer', 'Needs test', verify],
      ],
    },
    deepSections: [
      {
        title: 'Better than a false answer',
        body: [
          'A bad guide would guess. A useful one tells players what to test: Hauler Drone exists, it is tied to automated material transport, and the remove/recycle action still needs a safe current-build check.',
          'Until that is settled, use the page as a playtest checklist: game version, drone UI, hotkeys, recycle option, replacement behavior, and whether moving to an idle zone is the safest workaround.',
        ],
      },
    ],
    evidence: [
      [official, 'Hauler Drone category and research role.'],
      [community, 'Demo summary mentions moving unwanted drones to an idle area.'],
      [verify, 'Direct remove/recycle method and whether it changed after Demo.'],
    ],
  },
  '/platform/game-pass': {
    notice:
      'Platform pages can change quickly; this answer should be periodically rechecked against Xbox, Steam, and official release FAQ pages.',
    diagram: {
      title: 'Current Platform Reading',
      caption: 'The Xbox listing supports PC Game Pass language, not Xbox console support claims.',
      nodes: [
        ['Xbox page', 'Sandustry Game Preview', official],
        ['Game Pass', 'PC / Ultimate subscription listing', official],
        ['Play with', 'PC', official],
        ['Capabilities', 'Single player, achievements, cloud saves', official],
        ['Console claim', 'Do not publish from current evidence', verify],
      ],
    },
    deepSections: [
      {
        title: 'Steam vs Xbox app choice',
        body: [
          'Steam is the natural choice for Workshop users and players already inside the Steam ecosystem. Xbox app/Game Pass is the practical route for PC subscribers who want to try Game Preview without buying separately.',
          'Because platform store pages are living documents, the site should show the checked date and avoid evergreen wording like “always included.”',
        ],
      },
    ],
    evidence: [
      [official, 'Xbox page, Steam page, and release FAQ/platform notes.'],
      [verify, 'Future console support or subscription changes.'],
    ],
  },
  '/platform/multiplayer': {
    notice:
      'The safe answer is current-state only: official platform listings show Single-player, and Early Access can change.',
    diagram: {
      title: 'Multiplayer Evidence',
      caption: 'Use store features for platform questions, not guesses from community activity.',
      nodes: [
        ['Steam', 'Single-player feature listing', official],
        ['Xbox', 'Single player capability', official],
        ['Co-op', 'Not advertised here', official],
        ['Future updates', 'Possible but unclaimed', verify],
      ],
    },
    deepSections: [
      {
        title: 'How to phrase it',
        body: [
          'Do not say “Sandustry will never have multiplayer.” Say “current official platform pages list Sandustry as Single-player.” That is precise, useful, and easy to update when store pages or patch notes change.',
        ],
      },
    ],
    evidence: [
      [official, 'Steam feature list and Xbox capability list.'],
      [verify, 'Roadmap or future patch notes if official sources add multiplayer language.'],
    ],
  },
  '/mods': {
    notice:
      'Mods and maps must never blur into vanilla guide pages; label Workshop/community content clearly.',
    diagram: {
      title: 'Mod Content Boundary',
      caption: 'The site can explain mod support now and add curated mod lists only after refreshing Workshop data.',
      nodes: [
        ['Steam Workshop', 'Supported feature', official],
        ['Modding tools', 'Official positioning', official],
        ['Visual tweaks', 'Supported mod type', official],
        ['Maps/buildings/processes', 'Supported mod scope', official],
        ['Specific mod lists', 'Refresh before publishing', verify],
      ],
    },
    deepSections: [
      {
        title: 'Safe mod guidance',
        body: [
          'The first mods page should be a safety and orientation page: use Steam Workshop, read version notes, keep vanilla saves separate, and do not download from unknown mirrors.',
          'Later, this page can become a living directory, but only if each mod entry has a source link, compatibility date, and clear label for gameplay-changing behavior.',
        ],
      },
    ],
    evidence: [
      [official, 'Steam Workshop support and official modding wording.'],
      [community, 'Oasis/Asteroid videos and mod examples show what players are exploring.'],
      [verify, 'Specific mod compatibility and install steps.'],
    ],
  },
  '/maps': {
    notice:
      'Default-world exploration and custom/community maps should be visually separated on the page.',
    diagram: {
      title: 'Map Content Split',
      caption: 'Map unlock and minimap behavior are vanilla notes; Oasis/Asteroid-style maps are community content.',
      nodes: [
        ['Map unlock', 'Tier 1 research in notes', official],
        ['Minimap', 'Shows nearby world', official],
        ['Objectives', 'Yellow arrows in notes', official],
        ['Ancient ruins', 'Return-later exploration', official],
        ['Custom maps', 'Workshop/community boundary', community],
      ],
    },
    deepSections: [
      {
        title: 'Why map pages need labels',
        body: [
          'Custom maps can change resource availability dramatically. A map built with infinite sand, water, or red-sand access is useful inspiration, but it should never be described as the default Early Access world.',
          'The map guide should help players unlock navigation first, then teach them how to record exploration findings without spoiling or inventing full-world maps.',
        ],
      },
    ],
    evidence: [
      [official, 'Map unlock, minimap, objective arrows, open-world exploration.'],
      [community, 'Oasis and Asteroid videos provide custom-map examples.'],
      [verify, 'Full default map, resource coordinates, artifact locations.'],
    ],
  },
  '/wiki': {
    notice:
      'This is a fan-made guide index, not an official Wiki mirror. It should route players by task and by the problem they are trying to solve.',
    diagram: {
      title: 'Wiki Navigation Model',
      caption: 'A player should be able to jump by problem: first session, resource, building, mechanic, or community content.',
      nodes: [
        ['Start', 'Beginner guide and tips', official],
        ['Resources', 'Water, Lava, Copper, Fluxite, Artifacts', official],
        ['Buildings', 'Press, processing, planter, thermal', official],
        ['Mechanics', 'Move Lava, infinite water, crackstone, haulers', 'Mixed'],
        ['Community', 'Mods and maps', community],
      ],
    },
    deepSections: [
      {
        title: 'Index philosophy',
        body: [
          'The index should be denser than a marketing homepage and clearer than a raw category dump. It should show the next page a player needs after reading the current answer.',
          'Pages should feel like practical guides first. Uncertain Early Access details can stay marked, but the main reading path should be the answer, route, and next useful link.',
        ],
      },
    ],
    evidence: [
      [official, 'Official Wiki category model and platform facts.'],
      [community, 'Search terms, player videos, and Steam community interests shape article priorities.'],
      [verify, 'Pages that depend on current build behavior.'],
    ],
  },
};

for (const [slug, enhancement] of Object.entries(pageEnhancements)) {
  if (!enhancement.diagram?.nodes?.length) {
    throw new Error(`Missing diagram nodes for ${slug}`);
  }
  if (!enhancement.deepSections?.length) {
    throw new Error(`Missing deep sections for ${slug}`);
  }
  if (!enhancement.evidence?.length) {
    throw new Error(`Missing evidence notes for ${slug}`);
  }
}
