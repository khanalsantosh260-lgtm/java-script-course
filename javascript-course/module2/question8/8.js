function concat(arr) {
  let text = "";

  for (let i = 0; i < arr.length; i++) {
    text = text + arr[i];
  }

  return text;
}

let names = ["Johnny", "DeeDee", "Joey", "Marky"];

document.write(concat(names));