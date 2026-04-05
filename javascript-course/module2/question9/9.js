function even(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }

  return result;
}

let original = [2, 7, 4];

let evenNumbers = even(original);

console.log("Original: " + original);
console.log("Even: " + evenNumbers);