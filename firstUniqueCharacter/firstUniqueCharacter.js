//this finds the first unique character using a for of loop
// O(n^2) time | O(1) space
let name = "zzhheellaas";

let findUniqueCharacter = function (string) {
  for (const char of string) {
    if (string.indexOf(char) === string.lastIndexOf(char)) {
      return char;
    }
  }
};

console.log(findUniqueCharacter(name));