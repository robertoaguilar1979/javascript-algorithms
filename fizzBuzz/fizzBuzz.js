let fizzBuzz = function (size) {
    for (let i = 1; i <= size; i++) {
        let string = "";

        if (i % 3 === 0) {
            string += "fizz";
        }
        if (i % 5 === 0) {
            string += "Buzz";
        }
        if (string === "") {
            string += i;
        }
        console.log(string);
    }

}


fizzBuzz(50);