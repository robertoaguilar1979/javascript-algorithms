// print out steps with # within the number given in the function.

let printStep = function (step) {

    for (let row = 0; row < step; row++) {

        let stair = "";

        for (let column = 0; column < step; column++) {

            if (column <= row) {
                stair += "#";
            } else {
                stair += " ";
            }
        }
        console.log(stair);
    }

}

console.log(printStep(3));