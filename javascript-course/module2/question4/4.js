let numbers = [];
let num;

do {
  num = Number(prompt("Enter number (0 to stop):"));

  if (num !== 0) {
    numbers.push(num);
  }

} while (num !== 0);

numbers.sort(function(a, b) {
  return b - a;
});

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}