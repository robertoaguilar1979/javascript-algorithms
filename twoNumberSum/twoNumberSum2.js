//O(n) time | O(n) space
let numbers = [];
for (let i = 0; i <= 100; i++) {
  numbers.push(i);
}

let value = 7;

let findTwoSum = function (array, target) {
  let hash = new Map();

  const iterator = hash.entries();

  for (let i = 0; i <= array.length; i++) {
    let currentNumber = array[i];
    let difference = target - currentNumber;

    if (hash.has(difference)) {
      return [hash.get(difference), i];
    } else {
      hash.set(currentNumber, currentNumber);
    }

    //console.log(iterator.next().value);
  }

  return -1;
};

console.log(findTwoSum(numbers, value));
