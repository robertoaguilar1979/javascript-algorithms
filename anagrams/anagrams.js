let anagramArray = ["elbow", "below"];

let anagramFunction = function (string1, string2) {
  return cleanAnagrams(string1) === cleanAnagrams(string2);
};

let cleanAnagrams = function (string) {
  return string.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
};

console.log(anagramFunction("elbow", "below"));
