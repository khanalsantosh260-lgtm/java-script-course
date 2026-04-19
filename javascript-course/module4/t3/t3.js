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

      // clear old results
      results.innerHTML = "";

      // loop through data
      for (let i = 0; i < data.length; i++) {

        const show = data[i].show;

        // create article
        const article = document.createElement("article");

        // create title
        const title = document.createElement("h2");
        title.textContent = show.name;

        // create link
        const link = document.createElement("a");
        link.href = show.url;
        link.target = "_blank";
        link.textContent = "More info";

        // create image
        const img = document.createElement("img");

        if (show.image) {
          img.src = show.image.medium;
        }

        img.alt = show.name;

        // create summary
        const summary = document.createElement("div");
        summary.innerHTML = show.summary;

        // add everything to article
        article.appendChild(title);
        article.appendChild(link);
        article.appendChild(img);
        article.appendChild(summary);

        // add article to page
        results.appendChild(article);
      }
    });
});