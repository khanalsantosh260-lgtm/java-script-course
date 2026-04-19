const target = document.getElementById("target");

// first item
const li1 = document.createElement("li");
li1.textContent = "First item";
target.appendChild(li1);

// second item
const li2 = document.createElement("li");
li2.textContent = "Second item";
li2.classList.add("my-item");
target.appendChild(li2);

// third item
const li3 = document.createElement("li");
li3.textContent = "Third item";
target.appendChild(li3);