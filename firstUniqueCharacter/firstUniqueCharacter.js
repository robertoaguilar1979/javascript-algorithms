let name = "zzhheellaas";

let findUniqueCharacter = function (string) {
    for (const char of string) {
        if (string.indexOf(char) === string.lastIndexOf(char)) {
            return char;
        }

    }

}


console.log(findUniqueCharacter(name));