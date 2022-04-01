// this is finding a first unique character in a string using the traditional for loop

let string = "rroobbeerrt";

let findChar = function (array) {

    for (let i = 0; i < array.length; i++) {
        let char = array[i];
        if (array.indexOf(char) === array.lastIndexOf(char)) {
            return `index: ${i} and value: ${char}`;
        }
    }


}

console.log(findChar(string));