// this algorithm will return a string with the char that occurs the most times.

let myString = "mumaaururiiuaau";


let findMaxChar = function (string) {

    let hash = new Map;
    let maxNumber = -Infinity;
    let maxChar = "";

    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (hash.has(char)) {
            let one = hash.get(char);
            hash.set(char, one + 1);
        } else {
            hash.set(char, 1);
        }

    }

    for (const [key, value] of hash) {
        if (value >= maxNumber) {
            maxNumber = value;
            maxChar = key;
        }
    }

    console.log(hash); // logs out the hash map to see what char's have the max value.

    return maxChar; // returns the max char.
}

console.log(`this is the highest occuring char: ${findMaxChar(myString)}`); // returns the character with the most time it occurs. 