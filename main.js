// U can run test using node or just copy and paste the whole code to chrome console.

// define variables
const trials = 50000000;
let chenged = 0;
let unchanged = 0;

// generate a gate where digit '1' represents the winning gate.
const gates_generator = () => {
  let gate = [0, 0, 0];
  const winning_gate = Math.round(Math.random() * 2);
  gate[winning_gate] = 1;
  return gate;
};

// Runs a test where you change your first choice.
const change_test = (gate) => {
  let firts_pick_gate = Math.round(Math.random() * 2);
  if (gate[firts_pick_gate] == 1) {
    return 0;
  }
  return 1;
};

// Runs a test where you stick to your first choice.
const unchange_test = (gate) => {
  let firts_pick_gate = Math.round(Math.random() * 2);
  return gate[firts_pick_gate];
};

// Looping over a number of trials for the same gate, but every test draws its own gate.
for (let index = 0; index < trials; index++) {
  const gate = gates_generator();
  chenged += change_test(gate);
  unchanged += unchange_test(gate);
}

// Printing results.
console.log(`${chenged} wins for ${trials} trials when the gate was changed`);
console.log((chenged / trials) * 100 + "%");
console.log(
  `${unchanged} wins for ${trials} trials when computer sticks to fierst pick`
);
console.log((unchanged / trials) * 100 + "%");
