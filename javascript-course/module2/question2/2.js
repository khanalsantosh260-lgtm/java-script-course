let count = Number(prompt("Enter number of participants:"));
let names = [];

for (let i = 0; i < count; i++) {
  let name = prompt("Enter name:");
  names.push(name);
}

names.sort();

document.write("<ol>");

for (let i = 0; i < names.length; i++) {
  document.write("<li>" + names[i] + "</li>");
}

document.write("</ol>");