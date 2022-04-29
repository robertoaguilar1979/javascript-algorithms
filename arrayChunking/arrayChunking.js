//this will chunk an array in whatever size passed in the arrayChunking function in the size argument.

let arrayNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arraySize = 2;

let arrayChunking = function (array, size) {
    let chunk = [];
    let pointer = 0;

    while (pointer < array.length) {


        chunk.push(array.splice(pointer, size));


    }
    return chunk;
}

console.log(arrayChunking(arrayNumbers, arraySize));