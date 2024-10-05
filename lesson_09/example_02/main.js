const b = ["a", 2, 3, 4, 5, 6, 7, 8, 9, "end"];

for (let i = 1; i < b.length; i++) {
    //console.log("this data is work " + i);
    //console.log(b[i]);
    allElementsOfArray = allElementsOfArray + " " +b[i];
}
console.log(allElementsOfArray);


let j = 0;
while(j < b.length) {
    allElementsOfArray = allElementsOfArray + " " + b[j];
    j++;
}

const arrC = [];

for(let i = 5; i <=9; i++) {
    arrC.push(i + 5);
}

let x = 5;
while(x < 10) {
    arrC.push(x);
    x++;
}

console.log(arrC);