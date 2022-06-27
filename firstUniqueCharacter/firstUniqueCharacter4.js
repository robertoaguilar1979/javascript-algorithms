//first unique character

let string = "rroobeerrtttocd";


let firstUniqueChar = function (string) {

    let hash = {};

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