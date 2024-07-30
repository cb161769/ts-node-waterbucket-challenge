export function solve(firstJug, secondJug, start = [0, 0], goal = [0, 0]) {
  if (JSON.stringify(start) === JSON.stringify(goal)) {
    return [start];
  }

  const visitedStates = new Set();
  const queue = [[['start with', start]]];

  while (queue.length > 0) {
    const path = queue.shift();
    const currentState = path[path.length - 1][1];
    const [firstLevel, secondLevel] = currentState;

    for (const [nextState, action] of getSuccessors(
      firstLevel,
      firstJug,
      secondLevel,
      secondJug,
    )) {
      if (!visitedStates.has(JSON.stringify(nextState))) {
        visitedStates.add(JSON.stringify(nextState));
        if (JSON.stringify(goal) === JSON.stringify(nextState)) {
          return path.concat([[action + ' **', nextState]]);
        } else {
          queue.push(path.concat([[action, nextState]]));
        }
      }
    }
  }
  return [];
}

function getSuccessors(firstLevel, maxLevelA, secondLevel, maxLevelB) {
  if (firstLevel <= maxLevelA && secondLevel <= maxLevelB) {
    // Here is a list of possible legal moves.
    return [
      [[maxLevelA, secondLevel], 'fill jug A'],
      [[firstLevel, maxLevelB], 'fill jug B'],
      [[0, secondLevel], 'empty jug A'],
      [[firstLevel, 0], 'empty jug B'],
      [
        firstLevel + secondLevel < maxLevelB
          ? [0, firstLevel + secondLevel]
          : [
              firstLevel - (maxLevelB - secondLevel),
              secondLevel + (maxLevelB - secondLevel),
            ],
        'pour A to B',
      ],
      [
        firstLevel + secondLevel < maxLevelA
          ? [firstLevel + secondLevel, 0]
          : [
              firstLevel + (maxLevelA - firstLevel),
              secondLevel - (maxLevelA - firstLevel),
            ],
        'pour B to A',
      ],
    ];
  } else {
    return [];
  }
}
