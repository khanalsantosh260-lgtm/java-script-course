const input = document.getElementById("calculation");
const button = document.querySelector("button");
const result = document.getElementById("result");

button.addEventListener("click", function () {
  const value = input.value;
  let parts;
  let answer;

  if (value.includes("+")) {
    parts = value.split("+");
    answer = Number(parts[0]) + Number(parts[1]);
  } else if (value.includes("-")) {
    parts = value.split("-");
    answer = Number(parts[0]) - Number(parts[1]);
  } else if (value.includes("*")) {
    parts = value.split("*");
    answer = Number(parts[0]) * Number(parts[1]);
  } else if (value.includes("/")) {
    parts = value.split("/");
    answer = Number(parts[0]) / Number(parts[1]);
  }

  result.textContent = answer;
});