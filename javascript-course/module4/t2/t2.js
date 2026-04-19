const form = document.querySelector("form");
const input = document.getElementById("query");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const searchValue = input.value;

  fetch(`https://api.tvmaze.com/search/shows?q=${searchValue}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
});