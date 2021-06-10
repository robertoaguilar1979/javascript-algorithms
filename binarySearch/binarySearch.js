let numbers = [-55, -7, 0, 5, 10, 24, 45, 50, 75, 100];
let target = 10;

let binarySearch = function (array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {

    let middle = Math.floor((left + right) / 2);
    let potential = array[middle];


    if (potential === target) {
      return `the index is:${middle} and the value found in the array is: ${potential}`;
    }
    else if (target < potential) {
      right = middle - 1;

    }
    else {
      left = middle + 1;
    }



    return -1;

  }
}
console.log(binarySearch(numbers, target));