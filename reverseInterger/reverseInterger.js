//this reverses the interger and returns in back
let number = -12345;

let reverseNumbers = function (numbers) {
    //this turns numbers into a string, splits it into an array and it reverses the array then joins it back into a string.
    let reverseNum = numbers.toString().split("").reverse().join("");
    // this makes the reversed string into a interger then gives it checks to see if its positive or negative with the Math.sign method and returns it.
    return parseInt(reverseNum) * Math.sign(numbers);


}

console.log(reverseNumbers(number));