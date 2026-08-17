const commonSourceRules = [
  'Official Wiki, Steam, Xbox, and official Sandustry links are treated as high-confidence sources.',
  'YouTube smart summaries are used for workflow ideas only and should not be copied or treated as final facts.',
  'Demo or modded-map material must be labeled as Demo, pre-release, community, or modded content.',
];

const beginnerDos = [
  'Keep early production modules small enough that you can see every input and output.',
  'Add filters before scaling throughput.',
  'Separate water experiments from the main Gold loop.',
  'Record version-sensitive shortcuts and verify them in settings before publishing screenshots.',
];

const beginnerDonts = [
  'Do not call one player route the only correct route.',
  'Do not scale a clogged press line by feeding it more material.',
  'Do not mix Demo-only layouts into current Early Access instructions without a label.',
];

export const richContent = {
  '/guides/beginner-guide': {
    quickFacts: [
      ['Core loop', 'Sand + Water creates Wet Sand, which begins early Gold production.'],
      ['Progress resources', 'Gold, Fluxite, and Energy shape early progression.'],
      ['First logistics', 'Conveyor Belt, Launcher, Filter, Pump, Liquid Vent, and Pipe appear in beginner material.'],
      ['Main risk', 'Byproducts and water leaks become problems before raw input volume does.'],
    ],
    steps: [
      'Secure a local Sand and Water setup instead of immediately building a huge factory.',
      'Route Wet Sand into early processing and collect Gold reliably.',
      'Use the first research unlocks to improve navigation and routing.',
      'Introduce filters as soon as byproducts start mixing with useful output.',
      'Only scale the line once every material has a planned destination.',
    ],
    tables: [
      {
        title: 'Early priorities',
        columns: ['Priority', 'Why it matters', 'Risk if ignored'],
        rows: [
          ['Gold loop', 'Funds research and unlocks', 'Progress stalls'],
          ['Water control', 'Creates Wet Sand and Wet Seeds', 'Reservoir drains or factory floods'],
          ['Filters', 'Separates byproducts', 'Machines clog or wrong material reaches press'],
          ['Map', 'Helps navigation and objectives', 'Exploration becomes inefficient'],
        ],
      },
    ],
    dos: beginnerDos,
    donts: beginnerDonts,
    sourceNotes: commonSourceRules,
  },
  '/guides/tips': {
    quickFacts: [
      ['Build speed', 'Copy, paste, selection, and replace controls are useful for repeated structures.'],
      ['Best habit', 'Inspect bottlenecks before expanding inputs.'],
      ['Filters', 'Most useful when isolating byproducts on busy lines.'],
      ['Recovery', 'Use Unstuck for puzzle or ruin traps.'],
    ],
    steps: [
      'Use a test chamber for new reactions before connecting them to the main factory.',
      'Add overflow lanes where wrong material could reach machines.',
      'Keep hot, cold, liquid, and seed systems visually separated.',
      'Use labels/screenshots in your own notes for layouts that depend on height.',
      'Return to blocked ruins later rather than burning resources on a guess.',
    ],
    tables: [
      {
        title: 'Tip categories',
        columns: ['Category', 'Use it when', 'Confidence'],
        rows: [
          ['Shortcut tips', 'Repeating structures', 'Needs keybind verification'],
          ['Filter tips', 'Byproducts mix with output', 'High'],
          ['Water tips', 'Reservoir drains too fast', 'High'],
          ['Player-layout tips', 'You need a sample factory', 'Medium'],
        ],
      },
    ],
    dos: beginnerDos,
    donts: beginnerDonts,
    sourceNotes: commonSourceRules,
  },
  '/resources/water': {
    quickFacts: [
      ['Matter type', 'Liquid.'],
      ['Density', '100 in current material notes.'],
      ['Core uses', 'Wets Sand and Seeds.'],
      ['Known sources', 'Surface lakes, underground deposits, melting Ice, Steam/rain, and Lumlings.'],
      ['Blocks flow', 'Blocks, Conveyor Belt, Kinetic Slag Press, and Flux Emanator are noted as blockers.'],
    ],
    steps: [
      'Start with one controlled water source feeding one production module.',
      'Convert Sand into Wet Sand near the production input, not across the whole base.',
      'Keep an emergency overflow or drain path for leaked water.',
      'Test Steam/rain loops in a separate chamber before relying on them.',
      'Mark Snow and freezing systems as dangerous near conveyors until tested.',
    ],
    tables: [
      {
        title: 'Water interactions',
        columns: ['Interaction', 'Result', 'Use'],
        rows: [
          ['Water + Sand', 'Wet Sand', 'Early Gold chain'],
          ['Water + Seed', 'Wet Seed', 'Planter Box chain'],
          ['Heated Water', 'Steam', 'Rain loop / vapor handling'],
          ['Steam reaches sky', 'Rain', 'Infinite water concept'],
          ['Water + Lava', 'Steam', 'Useful but hazardous'],
        ],
      },
    ],
    dos: ['Keep water local to modules.', 'Use blockers and structure choices intentionally.', 'Label infinite-water layouts as verified only after testing.'],
    donts: ['Do not connect an experimental loop to the main reservoir.', 'Do not claim one infinite-water blueprint without current-build proof.', 'Do not ignore freezing side effects.'],
    sourceNotes: commonSourceRules,
  },
  '/resources/lava': {
    quickFacts: [
      ['Matter type', 'Liquid.'],
      ['Density', '75 in current material notes.'],
      ['Natural source', 'Deep Lava Cave areas.'],
      ['Transport method', 'Cinder process rather than ordinary pipe-style movement.'],
      ['Water interaction', 'Water becomes Steam while Lava is not reduced.'],
    ],
    steps: [
      'Find Lava in a controlled exploration area.',
      'Keep Water away before beginning transport.',
      'Freeze Lava into a solid form such as Scoria.',
      'Break the solid form into Cinders.',
      'Move Cinders by hand, conveyor, or launcher.',
      'Reignite at the destination with enough heat.',
    ],
    tables: [
      {
        title: 'Lava handling chain',
        columns: ['Stage', 'Material', 'Purpose'],
        rows: [
          ['Source', 'Lava', 'Heat and advanced reaction resource'],
          ['Freeze', 'Scoria', 'Safe solid intermediate'],
          ['Break', 'Cinders', 'Transportable form'],
          ['Reignite', 'Lava', 'Destination heat source'],
        ],
      },
    ],
    dos: ['Build containment first.', 'Move the solid/cinder form, not loose Lava.', 'Keep water interactions intentional.'],
    donts: ['Do not treat modded heat arrays as base-game instructions.', 'Do not pipe Lava unless the game gives you a direct tool for it.', 'Do not place Lava near uncontrolled seed or water systems.'],
    sourceNotes: commonSourceRules,
  },
  '/resources/copper': {
    quickFacts: [
      ['Material', 'Copper Ore is a Solid.'],
      ['Location', 'Small underground veins.'],
      ['Mining', 'Any digging tool can mine it, but it is harder than Dirt.'],
      ['Output', 'Digging Copper Ore produces Copper.'],
      ['Known use', 'Power bricks connect to copper molds filled with liquid copper.'],
    ],
    steps: [
      'Unlock or prepare enough digging capability for underground exploration.',
      'Find small Copper Ore veins below the surface.',
      'Mine Copper Ore with a digging tool.',
      'Store Copper separately from early Gold and residue lines.',
      'Wait to publish full liquid copper steps until the current processing chain is verified.',
    ],
    tables: [
      {
        title: 'Copper notes',
        columns: ['Question', 'Current answer', 'Status'],
        rows: [
          ['Where is Copper Ore?', 'Underground small veins', 'High'],
          ['Can Shovel mine it?', 'Any digging tool in notes', 'High'],
          ['Does it make Copper?', 'Yes, when dug', 'High'],
          ['How to make Liquid Copper?', 'Needs full chain confirmation', 'Needs verification'],
        ],
      },
    ],
    dos: ['Separate copper storage.', 'Verify smelting before writing diagrams.', 'Link Copper to Energy pages once written.'],
    donts: ['Do not invent a complete smelting line.', 'Do not describe Copper as the first resource priority.', 'Do not omit the underground source.'],
    sourceNotes: commonSourceRules,
  },
  '/resources/fluxite': {
    quickFacts: [
      ['Correct term', 'Fluxite.'],
      ['Search bridge', 'Players may search “flux”.'],
      ['Use', 'Upgrades tools, weapons, and drones.'],
      ['Sources', 'Natural world generation and later Flux Emanator production.'],
      ['Later chain', 'Voidbloom can feed Flux Emanator.'],
    ],
    steps: [
      'Use natural Fluxite sparingly for upgrades that reduce early friction.',
      'Avoid writing “flux” as if it is a separate confirmed resource.',
      'Unlock Flux Emanator later in the research path.',
      'Feed Voidbloom to the Flux Emanator only after verifying current input/output behavior.',
      'Document upgrade priorities from in-game cost screens before claiming an optimal path.',
    ],
    tables: [
      {
        title: 'Fluxite usage',
        columns: ['Use case', 'Why it matters', 'Confidence'],
        rows: [
          ['Tools', 'Improves interaction with world materials', 'High'],
          ['Weapons', 'Supports exploration and obstacles', 'High'],
          ['Drones', 'Improves automation helpers', 'High'],
          ['Flux Emanator production', 'Later renewable route', 'High mechanism, layout needs verification'],
        ],
      },
    ],
    dos: ['Use Fluxite as the page title.', 'Mention flux in body text for search intent.', 'Keep exact rates unclaimed.'],
    donts: ['Do not invent flux points terminology.', 'Do not publish upgrade rankings without costs.', 'Do not merge artifact facts into Fluxite facts.'],
    sourceNotes: commonSourceRules,
  },
  '/resources/artifacts': {
    quickFacts: [
      ['Theme', 'Ancient civilization rewards.'],
      ['Game role', 'Artifacts are powerful exploration rewards.'],
      ['Puzzles', 'Some ruin puzzles may require later tools or resources.'],
      ['Locator', 'Research notes include Locator and Voidjuice scanning.'],
      ['Missing data', 'Exact artifact list, rewards, and locations need verification.'],
    ],
    steps: [
      'Explore ruins after securing a stable production base.',
      'If a puzzle blocks progress, mark it and return later.',
      'Unlock Locator before attempting a systematic hidden-artifact route.',
      'Do not publish artifact coordinates from one video as universal.',
      'Separate default-world artifact notes from custom-map artifact notes.',
    ],
    tables: [
      {
        title: 'Artifact publishing rules',
        columns: ['Content type', 'Publish now?', 'Why'],
        rows: [
          ['What artifacts are', 'Yes', 'Officially described'],
          ['Locator concept', 'Yes', 'Research notes'],
          ['Exact rewards', 'No', 'Needs current verification'],
          ['Puzzle solutions', 'Later', 'Need screenshots/version checks'],
        ],
      },
    ],
    dos: ['Explain uncertainty plainly.', 'Link to map and Fluxite pages.', 'Use official terms for Locator and Voidjuice.'],
    donts: ['Do not spoil unverified puzzle solutions.', 'Do not treat Demo artifact routes as final.', 'Do not copy video walkthrough wording.'],
    sourceNotes: commonSourceRules,
  },
  '/buildings/kinetic-slag-press': {
    quickFacts: [
      ['Search aliases', 'Kinetic Press, Kinetic Slag Press.'],
      ['Known unlock', 'Early-to-mid research path; older notes list 500 Gold for Kinetic Press.'],
      ['Core rule', 'Burned material must fall from enough height.'],
      ['Height note', 'Plan around a 25+ block drop requirement.'],
      ['Common failure', 'Wrong material or low drop clogs the top.'],
    ],
    steps: [
      'Build the press below a measured drop shaft.',
      'Feed only the correct burned byproduct into the shaft.',
      'Keep wrong material out with filters.',
      'Add side launchers or cleanup paths above the press.',
      'Test one press before duplicating into a multi-press array.',
    ],
    tables: [
      {
        title: 'Press troubleshooting',
        columns: ['Symptom', 'Likely cause', 'Fix'],
        rows: [
          ['Material sits on top', 'Drop too low or wrong input', 'Increase height and filter input'],
          ['Press floods', 'Input too fast', 'Meter launchers or split flow'],
          ['No useful output', 'Byproduct not burned', 'Check thermal stage'],
          ['Water blocks line', 'Poor isolation', 'Separate liquid handling'],
        ],
      },
    ],
    dos: ['Use current Kinetic Slag Press wording.', 'Mention older Kinetic Press search term.', 'Include height and anti-jam warnings.'],
    donts: ['Do not publish a pixel-perfect layout without screenshot testing.', 'Do not ignore terminology drift.', 'Do not omit overflow handling.'],
    sourceNotes: commonSourceRules,
  },
  '/buildings/processing-line': {
    quickFacts: [
      ['SEO term', 'Processing Plant is player-facing, not confirmed official building.'],
      ['Actual concept', 'A production line/factory module.'],
      ['Core pieces', 'Water, Wet Sand, Shaker, filters, thermal stage, press, collection.'],
      ['Main risk', 'Byproducts clog machines if not isolated.'],
    ],
    steps: [
      'Create Wet Sand near a controlled water source.',
      'Feed Wet Sand into Shakers.',
      'Collect Gold separately from residue/slag outputs.',
      'Burn residue/slag only in a contained thermal module.',
      'Drop burned output into Kinetic Slag Press from sufficient height.',
      'Collect final output and route Seeds/Spores to planter systems when ready.',
    ],
    tables: [
      {
        title: 'Production module anatomy',
        columns: ['Part', 'Job', 'Failure mode'],
        rows: [
          ['Water feed', 'Creates Wet Sand', 'Leaks or drains reservoir'],
          ['Shaker', 'Processes Wet Sand', 'Byproduct pileup'],
          ['Filter wall', 'Separates outputs', 'Wrong material bypass'],
          ['Thermal stage', 'Burns byproduct', 'Overheats or underfeeds'],
          ['Press shaft', 'Converts burned output', 'Wrong height clogs'],
        ],
      },
    ],
    dos: ['State that Processing Plant is not an official building.', 'Use modular layouts.', 'Show future diagrams only after verification.'],
    donts: ['Do not claim a single best factory.', 'Do not copy YouTube layouts as text.', 'Do not mix custom-map infinite sources into default setup.'],
    sourceNotes: commonSourceRules,
  },
  '/buildings/slag-burner': {
    quickFacts: [
      ['Term status', 'Slag Burner is a player search phrase until the game names a building that way.'],
      ['Related terms', 'Residue, Burnt Residue/Burnt Slag, Flamethrower, Burner Belt, Thermal Buffer.'],
      ['Purpose', 'Burn byproducts into press-ready material.'],
      ['Risk', 'Thermal systems can ignite or vaporize unintended materials.'],
    ],
    steps: [
      'Treat “slag burner” as a search-intent page, not an item page.',
      'Identify the actual byproduct from your Shaker or processing line.',
      'Use an appropriate thermal source in a contained chamber.',
      'Filter burned output before it reaches the press shaft.',
      'Verify current material names in the Early Access build.',
    ],
    tables: [
      {
        title: 'Term mapping',
        columns: ['Player phrase', 'Safer wording', 'Status'],
        rows: [
          ['Slag Burner', 'Thermal byproduct burner setup', 'Needs terminology verification'],
          ['Slag', 'Residue/slag byproduct', 'Version-sensitive'],
          ['Burnt slag', 'Burned press input', 'Version-sensitive'],
          ['Burner Belt', 'Official-related thermal structure', 'High'],
        ],
      },
    ],
    dos: ['Correct terminology without shaming searchers.', 'Show the safer factory parts first.', 'Route readers to press and processing-line pages.'],
    donts: ['Do not invent an official item.', 'Do not hide uncertainty.', 'Do not recommend unsafe layouts without testing.'],
    sourceNotes: commonSourceRules,
  },
  '/buildings/planter-box': {
    quickFacts: [
      ['Official name', 'Planter Box.'],
      ['Input', 'Wet Seeds.'],
      ['Growth', 'Wet Seeds grow into Flowers.'],
      ['Outputs', 'Gold and Amethelis are linked to the planter chain.'],
      ['Pass-through', 'Gold and Amethelis can pass through Planter Box in local notes.'],
    ],
    steps: [
      'Unlock Planter Box after the early Gold loop can support the cost.',
      'Route Seeds or Spores from the press line into a water contact area.',
      'Create Wet Seeds before the Planter Box input.',
      'Let Wet Seeds grow into Flowers.',
      'Harvest or break Flowers with the current verified method.',
      'Collect Gold and Amethelis below or through the planter output path.',
    ],
    tables: [
      {
        title: 'Planter chain',
        columns: ['Stage', 'Material', 'Check'],
        rows: [
          ['Input', 'Seed / Spore term depends on version', 'Verify terminology'],
          ['Watering', 'Wet Seed', 'High'],
          ['Growth', 'Flower', 'High'],
          ['Harvest', 'Gold + Amethelis', 'High, method needs testing'],
        ],
      },
    ],
    dos: ['Use Planter Box in headings.', 'Mention Planter as a search alias.', 'Verify Amethelis spelling before final screenshots.'],
    donts: ['Do not call it simply Planter as official.', 'Do not publish harvest efficiency without testing.', 'Do not merge Demo flower chain details blindly.'],
    sourceNotes: commonSourceRules,
  },
  '/mechanics/infinite-water': {
    quickFacts: [
      ['Possible?', 'Yes in principle from official water/rain/snow notes.'],
      ['Core pieces', 'Steam, rain, Snow, Cryoblaster, heat.'],
      ['Alternative source', 'Lumlings can provide small constant water supply in notes.'],
      ['Publication status', 'Exact blueprint needs verification.'],
    ],
    steps: [
      'Build a sealed test chamber separate from your main factory.',
      'Use Cryoblaster or Snow generation to create a cold input.',
      'Melt or heat material so Water/Steam enters the loop.',
      'Give Steam a path upward so rain can form.',
      'Capture rainfall without letting it flood the base.',
      'Measure whether output exceeds losses before calling it infinite.',
    ],
    tables: [
      {
        title: 'Infinite water risk table',
        columns: ['Risk', 'Cause', 'Prevention'],
        rows: [
          ['No net gain', 'Steam escapes or rain misses collector', 'Seal and test chamber dimensions'],
          ['Frozen belts', 'Snow contacts transport line', 'Separate cold pixels from logistics'],
          ['Factory flood', 'Collector overflows', 'Add overflow and shutoff path'],
          ['Demo mismatch', 'Old behavior changed', 'Verify in Early Access'],
        ],
      },
    ],
    dos: ['State the official mechanism basis.', 'Keep blueprint language cautious.', 'Use screenshots once tested.'],
    donts: ['Do not call a Demo tutorial final.', 'Do not omit Lumlings.', 'Do not connect the first loop to main production.'],
    sourceNotes: commonSourceRules,
  },
  '/mechanics/how-to-move-lava': {
    quickFacts: [
      ['Method', 'Cinder process.'],
      ['Freeze tool', 'Snow/Cryoblaster interactions.'],
      ['Intermediate', 'Scoria then Cinders.'],
      ['Transport', 'Use Grabber, Conveyor Belts, or Launchers.'],
      ['Restore', 'Reignite Cinders into Lava.'],
    ],
    steps: [
      'Clear water and flammable clutter from the source area.',
      'Freeze Lava into Scoria with Snow or Cryoblaster.',
      'Break Scoria with a suitable weapon/tool to create Cinders.',
      'Move Cinders through a protected path.',
      'Place Cinders into the destination chamber.',
      'Apply enough heat to turn Cinders back into Lava.',
      'Seal the destination before connecting it to automation.',
    ],
    tables: [
      {
        title: 'Move Lava checklist',
        columns: ['Checkpoint', 'Pass condition', 'Why'],
        rows: [
          ['Source contained', 'No stray water nearby', 'Avoid accidental Steam'],
          ['Scoria created', 'Lava solidified', 'Safe to break'],
          ['Cinders routed', 'Transport path isolated', 'Avoid loss or ignition'],
          ['Destination sealed', 'Lava chamber ready', 'Prevents factory damage'],
        ],
      },
    ],
    dos: ['Move Cinders, not loose Lava.', 'Use a separate route.', 'Add safety notes for Water contact.'],
    donts: ['Do not promise pipe transport.', 'Do not skip reignition details.', 'Do not use modded-map setups as default.'],
    sourceNotes: commonSourceRules,
  },
  '/mechanics/how-to-break-crackstone': {
    quickFacts: [
      ['Material', 'Hard Solid.'],
      ['Source', 'Natural generation.'],
      ['Does not work', 'Shovel and Gun.'],
      ['Works', 'Other digging tools in official notes.'],
      ['Drops', 'Nothing remains after breaking.'],
    ],
    steps: [
      'Identify that the obstacle is Crackstone, not ordinary Dirt or Ore.',
      'Stop trying Shovel or Gun if they fail.',
      'Unlock or equip another digging tool.',
      'Destroy Crackstone with the stronger tool.',
      'Do not route collection under it expecting drops.',
    ],
    tables: [
      {
        title: 'Crackstone tool notes',
        columns: ['Tool type', 'Current status', 'Notes'],
        rows: [
          ['Shovel', 'Does not work', 'Official note'],
          ['Gun', 'Does not work', 'Official note'],
          ['Other digging tools', 'Works', 'Best option needs testing'],
          ['Drop collector', 'Not needed', 'Nothing remains'],
        ],
      },
    ],
    dos: ['Give a direct answer at top.', 'Tell players to return later if under-equipped.', 'Avoid fake drop tables.'],
    donts: ['Do not claim the best tool without testing.', 'Do not imply Crackstone is a resource.', 'Do not overcomplicate the page.'],
    sourceNotes: commonSourceRules,
  },
  '/mechanics/how-to-remove-haulers': {
    quickFacts: [
      ['Confirmed object', 'Hauler Drone.'],
      ['Research role', 'Automated material transport.'],
      ['Known cost', '3000 Gold in current notes.'],
      ['Removal method', 'Needs a current-build test.'],
      ['Page status', 'Troubleshooting checklist.'],
    ],
    steps: [
      'Check whether you are dealing with Hauler Drone or another logistics unit.',
      'Look for current UI options in the drone interface.',
      'Try safe repositioning before destructive experiments.',
      'Move unwanted haulers to an idle zone only if the current build allows it.',
      'Record the game version and exact input method before publishing a final guide.',
    ],
    tables: [
      {
        title: 'Hauler claims policy',
        columns: ['Claim', 'Publish status', 'Reason'],
        rows: [
          ['Hauler Drone exists', 'Yes', 'Drone category and research unlock'],
          ['Automated material transport', 'Yes', 'Research description'],
          ['Can remove directly', 'No final claim', 'Needs verification'],
          ['Move to idle area workaround', 'Medium only', 'YouTube summary, not official'],
        ],
      },
    ],
    dos: ['Keep the warning visible.', 'Invite version checks in future updates.', 'Avoid false certainty.'],
    donts: ['Do not say “impossible” without current testing.', 'Do not publish risky deletion steps.', 'Do not bury the uncertainty.'],
    sourceNotes: commonSourceRules,
  },
  '/platform/game-pass': {
    quickFacts: [
      ['Xbox page title', 'Sandustry Game Preview.'],
      ['Release date', '8/13/2026 on Xbox page.'],
      ['Play with', 'PC.'],
      ['Capabilities', 'Single player, Xbox achievements, Xbox cloud saves.'],
      ['Subscription', 'Game Pass availability appears for PC/Ultimate.'],
    ],
    steps: [
      'Use the Xbox page as the primary source for Game Pass status.',
      'State PC play support clearly.',
      'Avoid saying Xbox console until platform page says so.',
      'Compare Steam and Xbox app based on Workshop, achievements, cloud saves, and subscription access.',
      'Recheck after major platform updates.',
    ],
    tables: [
      {
        title: 'Platform comparison',
        columns: ['Platform', 'Current note', 'Best for'],
        rows: [
          ['Steam', 'Early Access, Workshop, achievements, cloud', 'Workshop and Steam users'],
          ['Xbox app / Microsoft Store', 'Game Preview, PC play', 'Game Pass PC users'],
          ['Xbox console', 'Not claimed from current page', 'Do not publish as supported yet'],
          ['GOG', 'Mentioned in local release FAQ notes', 'Needs direct page check before linking'],
        ],
      },
    ],
    dos: ['Use exact platform wording.', 'Mention Game Preview/Early Access.', 'Update after store changes.'],
    donts: ['Do not claim console support.', 'Do not use YouTube for platform status.', 'Do not write permanent availability claims.'],
    sourceNotes: commonSourceRules,
  },
  '/platform/multiplayer': {
    quickFacts: [
      ['Steam feature', 'Single-player.'],
      ['Xbox capability', 'Single player.'],
      ['Co-op', 'Not advertised in current official platform pages.'],
      ['Future status', 'Early Access means this can change.'],
    ],
    steps: [
      'Check Steam feature list.',
      'Check Xbox capabilities.',
      'Write the current answer without permanent language.',
      'Suggest sharing screenshots, save notes, or workshop content as alternatives.',
      'Recheck after major updates.',
    ],
    tables: [
      {
        title: 'Store listing signals',
        columns: ['Source', 'Current listing', 'Conclusion'],
        rows: [
          ['Steam', 'Single-player', 'No advertised multiplayer'],
          ['Xbox', 'Single player', 'No advertised co-op'],
          ['YouTube', 'Not needed', 'Do not use for this answer'],
          ['Future roadmap', 'Not confirmed here', 'Avoid speculation'],
        ],
      },
    ],
    dos: ['Answer directly.', 'Use current official listings.', 'Leave room for future updates.'],
    donts: ['Do not write “never”.', 'Do not infer co-op from community content.', 'Do not bury the answer below history.'],
    sourceNotes: commonSourceRules,
  },
  '/mods': {
    quickFacts: [
      ['Steam support', 'Steam Workshop is listed.'],
      ['Official positioning', 'Built with modding in mind.'],
      ['Mod scope', 'Visual tweaks, hand-crafted maps, new buildings, new processes.'],
      ['Safety', 'Prefer Steam Workshop and official communities.'],
      ['Old modloader', 'May be outdated in beginner notes.'],
    ],
    steps: [
      'Start at Steam Workshop or official Discord.',
      'Read mod version and dependency notes.',
      'Back up saves before testing heavy overhauls.',
      'Separate visual tweaks from gameplay-changing mods.',
      'Label YouTube modded-demo content as community/modded.',
    ],
    tables: [
      {
        title: 'Mod types',
        columns: ['Type', 'Examples from source framing', 'Publishing caution'],
        rows: [
          ['Visual tweaks', 'Texture or UI changes', 'Low risk but versioned'],
          ['Hand-crafted maps', 'Custom maps', 'Do not treat as default world'],
          ['New buildings', 'Modded production structures', 'Needs mod attribution'],
          ['New processes', 'Changed chains', 'Do not mix into vanilla guide'],
        ],
      },
    ],
    dos: ['Link official channels.', 'Warn about outdated modloader notes.', 'Keep modded and vanilla pages separate.'],
    donts: ['Do not mirror downloads.', 'Do not recommend unknown sources.', 'Do not write mod lists without refreshing Workshop.'],
    sourceNotes: commonSourceRules,
  },
  '/maps': {
    quickFacts: [
      ['Unlock', 'Map appears in Tier 1.'],
      ['Known cost', 'Local notes list 100 Gold.'],
      ['Minimap', 'Shows nearby world beyond the main screen.'],
      ['Objectives', 'Yellow arrows can point to goals.'],
      ['Custom maps', 'Community/modded content, not default.'],
    ],
    steps: [
      'Unlock the Map early for navigation.',
      'Use minimap objective arrows to avoid wandering blindly.',
      'Mark ruins that require later tools.',
      'When covering custom maps, name the map and source clearly.',
      'Do not merge Oasis/Asteroid map resources into vanilla resource pages.',
    ],
    tables: [
      {
        title: 'Map content boundaries',
        columns: ['Content', 'Can publish?', 'Label'],
        rows: [
          ['Map unlock', 'Yes', 'High confidence'],
          ['Minimap behavior', 'Yes', 'High confidence'],
          ['Full default map', 'Later', 'Needs official or game capture'],
          ['Oasis custom map', 'Yes as community note', 'Modded/custom'],
          ['Asteroid map', 'Yes as community note', 'Modded/custom'],
        ],
      },
    ],
    dos: ['Separate default from custom maps.', 'Use map pages to route artifact readers.', 'Keep custom-map claims labeled.'],
    donts: ['Do not publish unverified full maps.', 'Do not treat modded infinite resources as vanilla.', 'Do not copy video route text.'],
    sourceNotes: commonSourceRules,
  },
  '/wiki': {
    quickFacts: [
      ['Site status', 'Independent fan-made guide.'],
      ['Official categories', 'Materials, Tools, Buildings, Drones & Enemies in local official notes.'],
      ['Site categories', 'Start, Resources, Buildings, Mechanics, Community.'],
      ['Page behavior', 'Fast answers first, deeper routes after.'],
    ],
    steps: [
      'Start with beginner guide if new.',
      'Use Resources for material interactions.',
      'Use Buildings for production structures and terminology.',
      'Use Mechanics for problem-specific searches.',
      'Use Community for mods, maps, and version-sensitive content.',
    ],
    tables: [
      {
        title: 'Wiki index groups',
        columns: ['Group', 'Best pages', 'Purpose'],
        rows: [
          ['Start', 'Beginner Guide, Tips, Game Pass', 'First-session orientation'],
          ['Resources', 'Water, Lava, Fluxite', 'Material behavior'],
          ['Buildings', 'Kinetic Slag Press, Planter Box', 'Production structures'],
          ['Mechanics', 'Move Lava, Infinite Water', 'Problem solving'],
          ['Community', 'Mods, Maps', 'Non-vanilla or changing content'],
        ],
      },
    ],
    dos: ['Make fan-made status obvious.', 'Route players to the next useful guide.', 'Keep uncertain Early Access mechanics lightly marked.'],
    donts: ['Do not impersonate official Wiki.', 'Do not make pages feel like site-planning notes.', 'Do not let category pages become empty link farms.'],
    sourceNotes: commonSourceRules,
  },
};

for (const slug of [
  '/guides/beginner-guide',
  '/guides/tips',
  '/resources/water',
  '/resources/lava',
  '/resources/copper',
  '/resources/fluxite',
  '/resources/artifacts',
  '/buildings/kinetic-slag-press',
  '/buildings/processing-line',
  '/buildings/slag-burner',
  '/buildings/planter-box',
  '/mechanics/infinite-water',
  '/mechanics/how-to-move-lava',
  '/mechanics/how-to-break-crackstone',
  '/mechanics/how-to-remove-haulers',
  '/platform/game-pass',
  '/platform/multiplayer',
  '/mods',
  '/maps',
  '/wiki',
]) {
  if (!richContent[slug]) {
    throw new Error(`Missing rich content for ${slug}`);
  }
}
