//count vowels using regular expressions and the test method using a function with for of loop.
let stringVowels = "robertooo";

let findVowels = function (array) {
    let add = 0;

    for (const char of array) {
        if (/[aeiou]/.test(char)) {
            add++
        }
    }
    return add;
}

console.log(findVowels(stringVowels));