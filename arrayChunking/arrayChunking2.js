let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayChunkingSize = 4;


let arrayChunk = function (array, size) {
    let newArray = [];
    let index = 0;
    while (index <= array.length) {
        newArray.push(array.slice(index, index + size));
        index += size;
    }


    return newArray;
}


console.log(arrayChunk(arrayNumbers, arrayChunkingSize));