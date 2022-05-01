//this finds the max character in a string.


let name = "mmarriaiaii";

let maxChar = function (string) {

    let hash = {};
    let max = -Infinity;
    let maxChar = "";

    for (let char of string) {
        if (hash[char]) {
            hash[char]++;
        } else {
            hash[char] = 1;
        }
    }

    for (let char in hash) {
        if (hash[char] > max) {
            max = hash[char];
            maxChar = char;
        }

    }
    console.log(hash); //prints out what's stored in the hash map
    return `This is the highest occuring char: ${maxChar}`;

}

console.log(maxChar(name));