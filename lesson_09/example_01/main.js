const arrA = [1, 3, 5, "abcd", true, null, undefined, [10, 100], {a: 67}];

const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const firstElemOfB = b[6];
console.log(firstElemOfB);
console.log(b.length);


const resultOfPush = b.push("new last element");
console.log(b);
console.log(resultOfPush);
const resultOfPop = b.pop();
console.log(b);
console.log(resultOfPop);


b.unshift("new FRIST ELEMENT");
console.log(b);
b.shift();
console.log(b);

