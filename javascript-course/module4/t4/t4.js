const form = document.querySelector("form");
const input = document.getElementById("query");
const results = document.getElementById("results");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const value = input.value;

  fetch("https://api.tvmaze.com/search/shows?q=" + value)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      results.innerHTML = "";

      for (let i = 0; i < data.length; i++) {
        const show = data[i].show;

        const article = document.createElement("article");

        const title = document.createElement("h2");
        title.textContent = show.name;

        const link = document.createElement("a");
        link.href = show.url;
        link.target = "_blank";
        link.textContent = "More info";

        const img = document.createElement("img");

        if (show.image) {
          img.src = show.image.medium;
        } else {
          img.src = "https://placehold.co/210x295?text=Not%20Found";
        }

        img.alt = show.name;

        const summary = document.createElement("div");
        summary.innerHTML = show.summary;

        article.appendChild(title);
        article.appendChild(link);
        article.appendChild(img);
        article.appendChild(summary);

        results.appendChild(article);
      }
    });
});