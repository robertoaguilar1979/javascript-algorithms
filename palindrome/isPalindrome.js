let name = "roberto";
let name2 = "dad";

let isPalindrome = function (string) {
  let reversedString = "";

  for (const char of string) {
    reversedString = char + reversedString;
  }

  return string.toLowerCase() === reversedString.toLowerCase();
};

console.log(isPalindrome(name));
console.log(isPalindrome(name2));
