let diceCount = Number(prompt("Enter the number of dice:"));
let targetSum = Number(prompt("Enter the sum of the eye numbers:"));

let repeats = 10000;
let successfulResults = 0;

for (let i = 0; i < repeats; i++) {
  let sum = 0;

  for (let j = 0; j < diceCount; j++) {
    let dice = Math.floor(Math.random() * 6) + 1;
    sum = sum + dice;
  }

  if (sum === targetSum) {
    successfulResults = successfulResults + 1;
  }
}

let probability = successfulResults / repeats * 100;

document.write(
  "Probability to get sum " +
  targetSum +
  " with " +
  diceCount +
  " dice is " +
  probability.toFixed(2) +
  "%"
);