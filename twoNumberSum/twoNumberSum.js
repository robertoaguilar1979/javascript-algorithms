// O(n^2) time | O(1) Space

let numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 12;

let findTwoSum = function (array, target) {
  for (let i = 0; i < array.length; i++) {
    let firstNumber = array[i];

    for (let j = i + 1; j < array.length; j++) {
      let secondNumber = array[j];

      if (firstNumber + secondNumber === target) {
        return [firstNumber, secondNumber];
      }
    }
  }
  return false;
};

console.log(findTwoSum(numberList, target));
