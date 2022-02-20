// get Nth of Fibonacci
// O(2^n) time | O(n) space

let findFibonacciNth = function (n) {
    if (n === 2) {
        return 1;
    } else if (n === 1) {
        return 0;
    } else {
        return findFibonacciNth(n - 1) + findFibonacciNth(n - 2);
    }
}


console.log(findFibonacciNth(15));