const arrOfNumbers = [2, 4, 5, 10, 15];

const dobbelNumbers = []; 
for (let index = 0; index < arrOfNumbers.length; index++) {
    dobbelNumbers.push(arrOfNumbers[index] * arrOfNumbers[index]);
}
console.log(dobbelNumbers);
