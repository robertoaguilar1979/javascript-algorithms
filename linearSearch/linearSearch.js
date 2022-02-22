// O(n) time | O(1)space

let numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];
let myValue = 7;

let linearSearch = function (array, target) {
  let findValue = target;

  for (let i = 0; i <= array.length; i++) {
    if (findValue === array[i]) {
      return `this is the index: ${i} the value: ${array[i]}`;
    }
  }
  return -1;
};

console.log(linearSearch(numbers, myValue));
