let name = "robert";

let reverseString = function (string) {
  let makeArray = string.split("");
  let leftIndex = 0;
  let rightIndex = makeArray.length - 1;

  while (leftIndex < rightIndex) {
    [makeArray[leftIndex], makeArray[rightIndex]] = [
      makeArray[rightIndex],
      makeArray[leftIndex],
    ];
    leftIndex++;
    rightIndex--;
  }

  return makeArray.join("");
};

console.log(reverseString(name));
