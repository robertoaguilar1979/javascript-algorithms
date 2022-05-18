let name = "robert";

let reverseString = function (string) {
  let newString = "";

  for (let i = 0; i < string.length; i++) {
    newString = string[i] + newString;
  }
  return newString;
};

console.log(reverseString(name));
