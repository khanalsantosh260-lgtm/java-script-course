let number = Number(prompt("Enter an integer:"));

let primeNumber = true;

if (number < 2) {
  primeNumber = false;
} else {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      primeNumber = false;
    }
  }
}

if (primeNumber) {
  document.write(number + " is a prime number.");
} else {
  document.write(number + " is not a prime number.");
}