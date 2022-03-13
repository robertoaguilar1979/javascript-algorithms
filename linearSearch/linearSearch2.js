//linear search using indexOf
let numbers = [5, 0, 34, 45, 5];

let findFirstIndex = 45;
let findLastIndex = 5;

let where = numbers.indexOf(findFirstIndex);
let lastIndex = numbers.lastIndexOf(findLastIndex);

console.log(`number:${findFirstIndex} is in index:${where}`);
console.log(`number:${findLastIndex} is in index:${lastIndex}`);
