/*
1st flower 75% chance flower, 25% none
2nd flower 25% chance flower, 75% none

flower can be red or blue
when either red or no flower is planted, stop

input: number of experiments
output: possible outcomes for experiments
constraints: stop when none occurs or a red flower is bloomed
edge case: 0 experiments = 0 flowers

first experiment:
  => create a random integer
  => if equal or less than .75, a flower is planted
    => if flower is planted, create a random integer and
        first half will be blue, else it will be red
  => else no flower is planted


iterate through number of experiments
check if a flower is planted
if planted, check for the color,
if red, push into current experiment, and push into flowers result
if not red, continue and create a new ra 
*/

const isFlower = (experiment) => {
  let possibility = Math.random();
  if (!experiment && possibility <= 0.75) {
    return true;
  } else if (experiment && possibility <= 0.25) {
    return true;
  } else {
    return false;
  }
}

const colorOfFlower = () => {
  let possibility = Math.random();
  if (possibility <= 0.5) {
    return 'blue'
  } else {
    return 'red';
  }
}

const flowersPlanted = (experiments) => {
  let flowers = [];
  for (let i = 0; i < experiments; i++) {
    let eachExperiment = [];
    let count = 0;
    let flower = isFlower(count);
    let color = colorOfFlower();
    while (flower && color !== 'red') {
      eachExperiment.push(color);
      count++;
      flower = isFlower(count);
      color = colorOfFlower();
    }
    if (flower) {
      eachExperiment.push(color);
    } 
    flowers.push(eachExperiment);
  }
  return flowers;
}

console.log(flowersPlanted(100))