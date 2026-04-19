const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operation = document.getElementById("operation");
const button = document.getElementById("calculate");
const result = document.getElementById("result");

button.addEventListener("click", function () {
  const number1 = Number(num1.value);
  const number2 = Number(num2.value);
  let answer;

  if (operation.value === "add") {
    answer = number1 + number2;
  } else if (operation.value === "sub") {
    answer = number1 - number2;
  } else if (operation.value === "mul") {
    answer = number1 * number2;
  } else if (operation.value === "div") {
    answer = number1 / number2;
  }

  result.textContent = answer;
});