// if there is a duplicate in the array of a number return true.

let numbers = [0, 1, 2, 3, 4, 5, 2];

let findDuplicate = function (array) {

    let hash = new Map;

    for (const number of array) {
        if (hash.has(number)) {
            return [hash.get(number), true];
        } else {
            hash.set(number, number);
        }
    }

    return -1;

}

console.log(findDuplicate(numbers));