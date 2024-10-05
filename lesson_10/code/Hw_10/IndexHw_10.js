console.log("/// Task_1 ///")
function evenOrOdd(number) {
    number = Math.floor(number);
    if (number % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}
console.log(evenOrOdd(4));
console.log(evenOrOdd(7));
console.log(evenOrOdd(3.5));
console.log(evenOrOdd(-2));


console.log()
console.log("/// Task_2 ///")
const square = (number) => {
    number = Math.floor(number);

    return number * number;
}

console.log(square(4));
console.log(square(7));
console.log(square(3.5));
console.log(square(-2));


console.log()
console.log("/// Task_3 ///")
const sumEvenNumbers = (start, end) => {
    start = Math.floor(start);
    end = Math.floor(end);

    let sum = 0;

    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }

    return sum;
}

console.log(sumEvenNumbers(1, 10));
console.log(sumEvenNumbers(3, 7));
console.log(sumEvenNumbers(5.5, 11));
console.log(sumEvenNumbers(-4, 4));


console.log()
console.log("/// Task_4 ///")
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function getPrimesInRange(n) {
    let primes = [];
    for (let i = 1; i <= n; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

let n = 20;
console.log(getPrimesInRange(n));
