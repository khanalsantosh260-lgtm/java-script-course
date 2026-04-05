let numbers = [];
let num;

while (true) {
  num = Number(prompt("Enter number:"));

  if (numbers.includes(num)) {
    alert("Number already given");
    break;
  }

  numbers.push(num);
}

numbers.sort(function(a, b) {
  return a - b;
});

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}