let answer = confirm("Should I calculate the square root?");

if (answer === true) {
  let number = Number(prompt("Enter a number:"));

  if (number < 0) {
    document.write("The square root of a negative number is not defined.");
  } else {
    let result = Math.sqrt(number);
    document.write("Square root is: " + result);
  }
} else {
  document.write("The square root is not calculated.");
}