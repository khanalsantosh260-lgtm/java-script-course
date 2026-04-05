let dogs = [];

for (let i = 0; i < 6; i++) {
  let name = prompt("Enter dog name:");
  dogs.push(name);
}

dogs.sort();
dogs.reverse();

document.write("<ul>");

for (let i = 0; i < dogs.length; i++) {
  document.write("<li>" + dogs[i] + "</li>");
}

document.write("</ul>");