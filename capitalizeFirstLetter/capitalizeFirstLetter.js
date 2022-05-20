//capitalize first letter of each word in this sentence.

let string = "robert arciniega aguilar";

let capitalizeString = function (array) {
    let newString = [];
    for (const word of array.split(" ")) {
        newString.push(word.charAt(0).toUpperCase() + word.slice(1));
    }

    return newString.join(" ");
}


console.log(capitalizeString(string));