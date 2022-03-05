//O(n) time | O(n) space
let numberList = [4, 7, 9, 12, 2, 1, 10];
let target = 8;

let findTwoSum = function (array, target) {
  let hash = {};

  for (const number of array) {
    let potential = target - number;

    if (potential in hash) {
      return [potential, number];
    } else {
      hash[number] = true;
    }
    console.log(Object.entries(hash));
  }
};

console.log(findTwoSum(numberList, target));
