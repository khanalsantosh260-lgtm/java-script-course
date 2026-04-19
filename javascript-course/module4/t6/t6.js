const form = document.querySelector("form");
const input = document.getElementById("query");
const results = document.getElementById("results");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const value = input.value;

  fetch("https://api.chucknorris.io/jokes/search?query=" + value)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      results.innerHTML = "";

      for (let i = 0; i < data.result.length; i++) {

        const article = document.createElement("article");

        const p = document.createElement("p");
        p.textContent = data.result[i].value;

        article.appendChild(p);

        results.appendChild(article);
      }
    });
});