const trials = 50000000;
let chenged = 0;
let unchanged = 0;

const gates_generator = () => {
  let gate = [0, 0, 0];
  const winning_gate = Math.round(Math.random() * 2);
  gate[winning_gate] = 1;
  return gate;
};

const change_test = (gate) => {
  let firts_pick_gate = Math.round(Math.random() * 2);
  if (gate[firts_pick_gate] == 1) {
    return 0;
  }
  return 1;
};

const unchange_test = (gate) => {
  let firts_pick_gate = Math.round(Math.random() * 2);
  if (gate[firts_pick_gate] == 1) {
    return 1;
  }
  return 0;
};

for (let index = 0; index < trials; index++) {
  const gate = gates_generator();
  chenged += change_test(gate);
  unchanged += unchange_test(gate);
}

console.log((chenged / trials) * 100 + "%");
console.log((unchanged / trials) * 100 + "%");
