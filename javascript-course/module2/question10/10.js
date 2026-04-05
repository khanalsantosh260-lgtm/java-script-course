let count = Number(prompt("Enter number of candidates:"));
let candidates = [];

for (let i = 0; i < count; i++) {
  let name = prompt("Name for candidate " + (i + 1));

  candidates.push({
    name: name,
    votes: 0
  });
}

let voters = Number(prompt("Enter number of voters:"));

for (let i = 0; i < voters; i++) {
  let vote = prompt("Enter candidate name:");

  if (vote !== "") {
    for (let j = 0; j < candidates.length; j++) {
      if (candidates[j].name === vote) {
        candidates[j].votes++;
      }
    }
  }
}

candidates.sort(function(a, b) {
  return b.votes - a.votes;
});

console.log("Winner is " + candidates[0].name + " with " + candidates[0].votes + " votes");

for (let i = 0; i < candidates.length; i++) {
  console.log(candidates[i].name + ": " + candidates[i].votes);
}