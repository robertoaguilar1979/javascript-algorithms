let stringVowels = "robertooo";

let findVowels = function (string) {
    let add = 0;
    for (const char of string) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            add++
        }

    }
    return add;
}


console.log(findVowels(stringVowels));