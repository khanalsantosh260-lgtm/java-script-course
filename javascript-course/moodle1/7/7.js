let rolls = Number(prompt("How many dice rolls?"));

let sum = 0;

for (let i = 0; i < rolls; i++) {
  let dice = Math.floor(Math.random() * 6) + 1;
  sum = sum + dice;
}

document.write("Sum of the dice rolls is " + sum + ".");