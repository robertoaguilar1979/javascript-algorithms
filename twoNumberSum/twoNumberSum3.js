let numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 12;

let findTwoSum = function (array, target) {
  let hash = {};

  for (const number of array) {
    let potential = target - number;

    if (potential in hash) {
      return [potential, number];
    } else {
      hash[number] = potential;
    }
    //console.log(Object.entries(hash));
  }
};

console.log(findTwoSum(numberList, target));
