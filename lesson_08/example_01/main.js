// console.log("Hello world");

let a = "a";
console.log(typeof a);
a = 5;
console.log(typeof a);


const b = "abc";
//b = 565

const c = a;
console.log("c = " + c)
a = 10;
console.log("c = " + c)

let objA = {a: 1};
let objB = objA
objA.a = 5;
console.log(objB);