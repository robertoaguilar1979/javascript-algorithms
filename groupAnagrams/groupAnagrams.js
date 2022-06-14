let anagrams = ["eat", "tea", "tan", "ate", "nat", "bat"];

let groupAnagrams = function (array) {
  let hash = {};

  for (const word of array) {
    let sortedWord = word.split("").sort().join("");

    if (sortedWord in hash) {
      hash[sortedWord].push(word);
    } else {
      hash[sortedWord] = [word];
    }
  }

  return Object.values(hash);
};

console.log(groupAnagrams(anagrams));
