//this finds the first unique character using a for of loop
// O(n^2) time | O(1) space
let name = "zzhheellaas";

let findUniqueCharacter = function (string) {
<<<<<<< HEAD
    for (const char of string) {
        if (string.indexOf(char) === string.lastIndexOf(char)) {
            return char;
        }

    }

}


console.log(findUniqueCharacter(name));
=======
  for (const char of string) {
    if (string.indexOf(char) === string.lastIndexOf(char)) {
      return char;
    }
  }
};

console.log(findUniqueCharacter(name));
>>>>>>> 3ee2d6b65ae01425bdb4e4d62626b58e5f76ae61
