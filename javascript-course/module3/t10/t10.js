const form = document.querySelector("form");
const firstName = document.querySelector('input[name="firstname"]');
const lastName = document.querySelector('input[name="lastname"]');
const target = document.getElementById("target");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const first = firstName.value;
  const last = lastName.value;

  target.textContent = "Your name is " + first + " " + last;
});