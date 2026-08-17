const defaultManual = {
  useWhen: [
    'You need a direct answer before reading the full Wiki-style detail.',
    'You want to know which parts are official facts and which parts need a current-build test.',
    'You are connecting this topic to a larger factory route and need safe next links.',
  ],
  preChecks: [
    'Read the short answer first, then use the checklist before changing your main factory.',
    'Keep custom-map or player-video ideas in a test chamber before using them in a normal save.',
    'Test layout-dependent advice in an isolated chamber before scaling it.',
  ],
  mistakes: [
    'Treating one creator layout as the only correct route.',
    'Copying exact rates, tile counts, or shortcuts before checking them in your current build.',
    'Mixing modded-map resources into default Early Access guidance.',
  ],
};

export const fieldManual = {
  '/guides/beginner-guide': {
    useWhen: [
      'You are starting a new save and need a safe first route.',
      'Your factory has Gold production but no clear research priority.',
      'You want to understand why water, filters, and byproducts matter early.',
    ],
    preChecks: [
      'Locate Sand and a controllable Water source before building a large module.',
      'Confirm Gold output is collected separately from residue.',
      'Unlock or plan for Filter before multiplying the first production line.',
    ],
    mistakes: [
      'Scaling Wet Sand input before residue has a destination.',
      'Building water contact across the whole base instead of one controlled point.',
      'Following a Demo route without checking current Early Access terminology.',
    ],
  },
  '/resources/water': {
    useWhen: [
      'Water leaks, freezes, evaporates, or fails to keep Wet Sand production stable.',
      'You are planning Wet Sand, Wet Seeds, Steam, rain, Snow, or Lumling support.',
      'You want to decide whether an infinite-water idea is safe to connect.',
    ],
    preChecks: [
      'Identify whether the problem is supply, containment, freezing, evaporation, or routing.',
      'Keep the first loop isolated from the main Gold line.',
      'Add overflow before testing Steam/rain behavior.',
    ],
    mistakes: [
      'Assuming all structures stop Water flow.',
      'Letting Snow or Ice interact with conveyors before testing side effects.',
      'Calling a loop infinite before measuring losses.',
    ],
  },
  '/resources/lava': {
    useWhen: [
      'You found Lava Cave material and need to move it safely.',
      'Water contact is creating Steam where you did not expect it.',
      'You are separating official Lava facts from custom-map heat setups.',
    ],
    preChecks: [
      'Build the destination chamber before transporting Cinders.',
      'Remove uncontrolled Water from the source and destination.',
      'Prepare a heat source for reignition and a cleanup path for failed Cinders.',
    ],
    mistakes: [
      'Trying to pipe loose Lava as if it were Water.',
      'Using modded-map heat arrays as vanilla instructions.',
      'Reigniting Lava before the destination is sealed.',
    ],
  },
  '/buildings/kinetic-slag-press': {
    useWhen: [
      'Burned byproduct sits on top of the press or refuses to convert.',
      'You are designing the first press shaft or scaling to multiple presses.',
      'You need to understand why height, filtering, and top cleanup matter.',
    ],
    preChecks: [
      'Confirm the input is the correct burned byproduct for the current build.',
      'Measure the drop height before blaming the machine.',
      'Place cleanup or angled launchers above the press, not only after output.',
    ],
    mistakes: [
      'Feeding mixed residue into the drop shaft.',
      'Duplicating a multi-press layout before one shaft works.',
      'Ignoring terminology drift between Kinetic Press and Kinetic Slag Press notes.',
    ],
  },
  '/buildings/processing-line': {
    useWhen: [
      'You want a complete early factory route rather than one building page.',
      'Wet Sand, Gold, residue, burned byproduct, and press output are mixing together.',
      'You are planning a modular production line that can be copied safely.',
    ],
    preChecks: [
      'Give each material lane a clear job: input, useful output, byproduct, burn path, or drop shaft.',
      'Use filters before the next machine, not only after something jams.',
      'Keep the advanced flower/Voidbloom chain labeled until rates are verified.',
    ],
    mistakes: [
      'Calling Processing Plant an official building.',
      'Building one huge pile of material instead of repeatable modules.',
      'Letting water and thermal systems share a cleanup lane.',
    ],
  },
  '/buildings/planter-box': {
    useWhen: [
      'You are ready to turn seed output into a flower/resource loop.',
      'Wet Seeds reach the planter but collection or harvest behavior is unclear.',
      'You need the boundary between official Planter Box facts and Demo harvest ideas.',
    ],
    preChecks: [
      'Keep the seed-watering contact point small and readable.',
      'Separate planter water from the main factory reservoir.',
      'Verify current harvest behavior before writing efficiency notes.',
    ],
    mistakes: [
      'Calling the official building simply Planter in headings.',
      'Assuming large planter arrays from custom maps apply to vanilla starts.',
      'Publishing Amethelis/Amethyst spelling without in-game confirmation.',
    ],
  },
  '/mechanics/infinite-water': {
    useWhen: [
      'You need to know whether infinite water is possible in principle.',
      'You want a safe test process for Steam, rain, Snow, Cryoblaster, or Lumlings.',
      'You are separating official water-cycle facts from Demo layouts.',
    ],
    preChecks: [
      'Build a sealed test chamber before connecting production.',
      'Measure whether captured water exceeds losses.',
      'Watch for freezing, missed rain, escaped Steam, and overflow.',
    ],
    mistakes: [
      'Treating a Demo blueprint as final Early Access advice.',
      'Ignoring Lumlings as a small constant-source option.',
      'Connecting an unproven loop to the main reservoir.',
    ],
  },
  '/mechanics/how-to-move-lava': {
    useWhen: [
      'You need Lava somewhere else and ordinary liquid movement does not apply.',
      'You want the exact concept behind Scoria and Cinders.',
      'You are planning a safe heat chamber for automation.',
    ],
    preChecks: [
      'Clear Water from the route and destination.',
      'Prepare transport for Cinders, not loose Lava.',
      'Set up the destination before reigniting anything.',
    ],
    mistakes: [
      'Skipping the Cinder process.',
      'Breaking Scoria without an isolated transport path.',
      'Turning Cinders back into Lava before containment is ready.',
    ],
  },
  '/mechanics/how-to-remove-haulers': {
    useWhen: [
      'You placed or unlocked Hauler Drone and need removal/repositioning guidance.',
      'You want the safe facts before trying risky workarounds.',
      'You can contribute a current-version test result later.',
    ],
    preChecks: [
      'Record the game version before testing removal behavior.',
      'Check the drone interface and keybinds before trying destructive approaches.',
      'Use an idle-zone workaround only as an unverified temporary practice.',
    ],
    mistakes: [
      'Claiming haulers can or cannot be removed before testing the current build.',
      'Publishing risky deletion instructions from one Demo summary.',
      'Hiding the uncertainty below the fold.',
    ],
  },
  '/platform/game-pass': {
    useWhen: [
      'You need the current Game Pass answer quickly.',
      'You are choosing between Steam and the Xbox app on PC.',
      'You want to avoid mistaken Xbox console claims.',
    ],
    preChecks: [
      'Recheck Xbox and Steam store pages after major updates.',
      'Check whether the store page says PC, console, or both before choosing a platform.',
      'Keep subscription language date-sensitive.',
    ],
    mistakes: [
      'Saying Xbox console support exists from the current page.',
      'Using YouTube to answer platform availability.',
      'Writing “always included” for subscription access.',
    ],
  },
  '/mods': {
    useWhen: [
      'You want to know whether Sandustry supports mods and Workshop content.',
      'You need safe boundaries for custom maps, new buildings, and new processes.',
      'You are deciding where future mod directory pages should live.',
    ],
    preChecks: [
      'Start from Steam Workshop or official community links.',
      'Check mod version notes and dependencies.',
      'Keep vanilla guides separate from modded mechanics.',
    ],
    mistakes: [
      'Mirroring downloads from unknown sources.',
      'Treating a modded custom map as the default world.',
      'Publishing a mod list without a refresh date.',
    ],
  },
  '/maps': {
    useWhen: [
      'You need map unlock, minimap, objective, or exploration guidance.',
      'You are comparing vanilla exploration with community custom maps.',
      'You want to avoid false default-world resource claims.',
    ],
    preChecks: [
      'Unlock Map early if navigation is slowing progress.',
      'Label custom maps by name and source.',
      'Do not publish full maps or artifact positions from one run.',
    ],
    mistakes: [
      'Merging Oasis/Asteroid custom-map resources into vanilla pages.',
      'Spoiling artifact locations from one player route.',
      'Forgetting that map content can change with mods and updates.',
    ],
  },
};

export function getManual(slug) {
  return fieldManual[slug] ?? defaultManual;
}
