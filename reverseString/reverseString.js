let nameString = "robert";

let reverse = function (arrayString) {
  let reversedWord = "";

  for (let char of arrayString) {
    reversedWord = char + reversedWord;
  }
  return reversedWord;
};

console.log(reverse(nameString));
