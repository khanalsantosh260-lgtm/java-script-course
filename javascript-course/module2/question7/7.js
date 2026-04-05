function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

let sides = Number(prompt("Enter sides:"));
let result = 0;

document.write("<ul>");

while (result !== sides) {
  result = rollDice(sides);
  document.write("<li>" + result + "</li>");
}

document.write("</ul>");