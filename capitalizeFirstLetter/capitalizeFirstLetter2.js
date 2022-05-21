//capitalize first letter of each word in this sentence.

let string = "robert arciniega aguilar";


let splitString = function (string) {

    return string.split(" ");

}

let capitalizeFirst = function (string) {

    let newArray = splitString(string);
    let newString = [];

    for (const word of newArray) {
        newString.push(word[0].toUpperCase() + word.slice(1));
    }

    return newString.join(" ");

}

console.log(capitalizeFirst(string));