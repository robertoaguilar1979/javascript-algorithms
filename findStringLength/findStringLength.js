//find the length of each string in the array.


let strings = ["robert", "angel", "nami", "karen"];


let findStringLength = function (array) {
    let newArray = [];

    for (const string of array) {
        newArray.push(string.length);
    }
    return newArray;

}


console.log(findStringLength(strings));