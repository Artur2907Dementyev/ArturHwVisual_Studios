function doubleNumber(n = 1) {
    const res = n * n;
    return res;
};

console.log(doubleNumber(50));

console.log(doubleNumber(25, 30));

console.log(doubleNumber());

const doubleNumberExpression = function(n = 1000) {
    return n * 2;
}

console.log(doubleNumberExpression(75));

const doubleNumberArrow =  (n) => {
    return n * 2;
}
console.log(doubleNumberArrow(275));
