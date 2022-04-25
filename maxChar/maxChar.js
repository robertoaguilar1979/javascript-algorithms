//this finds the max character in a string.


let name = "mmarriaiaii";

let maxChar = function (string) {

    let hash = {};
    let max = -Infinity;
    let maxChar = "";

    for (const char of string) {
        if (hash[char]) {
            hash[char]++
        } else {
            hash[char] = 1;
        }
    }

    for (const char in hash) {
        if (hash[char] > max) {
            max = hash[char];
            maxChar = char;
        }

    }

    return maxChar;

}



console.log(maxChar(name));