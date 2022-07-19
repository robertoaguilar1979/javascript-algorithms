//first unique character

let string = "rroobeerrtttocd";


let firstUniqueChar = function (string) {
    //hash map object
    let hash = {};

    //loop to add characters to hash and count how many times each character shows up in the string.
    for (const i of string) {
        if (hash[i]) {
            hash[i]++;
        } else {
            hash[i] = 1;
        }
        debugger;
    }


    for (const j in hash) {
        if (hash[j] === 1) {
            return [j, string.indexOf(j)]
        }
    }
    return -1

}

console.log(firstUniqueChar(string));