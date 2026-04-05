let numbers = [];

for (let i = 0; i < 5; i++) {
  let number = Number(prompt("Enter a number:"));
  numbers.push(number);
}

for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
}