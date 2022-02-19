// find multiples of 3 and 5 from 1 to 1000



let sum = 0;
let i = 1;


while (i < 1000) {

    if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
    }
    i++;
}



console.log(sum);