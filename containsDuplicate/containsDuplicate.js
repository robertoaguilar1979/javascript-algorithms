// if there is a duplicate in the array of a number return true.


let numbers = [0, 1, 2, 3, 4, 5, 2];

let findDuplicate = function (array) {

    let hash = {};

    for (const number of array) {
        if (number in hash) {
            return [true, number];
        } else {
            hash[number] = true;
        }
    }

    console.log(Object.keys(hash));
}

console.log(findDuplicate(numbers));