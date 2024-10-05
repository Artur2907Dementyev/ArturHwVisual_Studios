console.log("/// Task_1 ///")
let arr1 = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);
let min1 = arr1[0];
let max1 = arr1[0];

for (let i = 1; i < arr1.length; i++) {
    if (arr1[i] < min1) min1 = arr1[i];
    if (arr1[i] > max1) max1 = arr1[i];
}

console.log("Array:", arr1);
console.log("Minimum value:", min1);
console.log("Maximum value:", max1);


console.log("/// Task_2 ///")
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let firstElement = arr2.shift();
arr2.push(firstElement);

console.log("Modified array:", arr2);


console.log("/// Task_3 ///")
let arr3 = Array.from({ length: 10 }, () => Math.floor(Math.random() * 75) + 1);
let min3 = arr3[0];
let max3 = arr3[0];

for (let i = 1; i < arr3.length; i++) {
    if (arr3[i] < min3) min3 = arr3[i];
    if (arr3[i] > max3) max3 = arr3[i];
}

console.log("Array:", arr3);
console.log("Sum of minimum and maximum values:", min3 + max3);


console.log("/// Task_4 ///")
let arr4 = Array.from({ length: 10 }, () => Math.floor(Math.random() * 50) + 1);
let sum4 = arr4.reduce((acc, val) => acc + val, 0);

console.log("Array:", arr4);
console.log("Sum of all elements:", sum4);