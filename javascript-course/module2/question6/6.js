function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

let result = 0;

document.write("<ul>");

while (result !== 6) {
  result = rollDice();
  document.write("<li>" + result + "</li>");
}

document.write("</ul>");
