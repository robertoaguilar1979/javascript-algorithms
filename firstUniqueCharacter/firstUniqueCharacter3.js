let maxCharacterString = "rroobeerrtttocd";


let maxChar = function (string) {

    let hash = new Map();
    // let iterator = hash.entries();

    for (const char of string) {
        if (hash.has(char)) {
            let add = hash.get(char);
            add++
            hash.set(char, add);
        } else {
            hash.set(char, 1);
        }

    }
    for (const [key, value] of hash) {
        if (value === 1) {
            return [key, value];
        }

    }
    return -1;

}

console.log(maxChar(maxCharacterString));