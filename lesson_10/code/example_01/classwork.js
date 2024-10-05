function greet(name) {
    if (typeof name === 'string') {
        return `Hello, ${name}`;
    } else {
        return`Add the correct Name`
    }
}
console.log(greet('Artur'));

// решение
function greeting(name) {
    if (typeof name === "string") {
     return `Hello ${name}`
    } else {
     return `Введите корректное значение`
    }
    }
    console.log(greeting("John"));
    
    function greetingVoid(name) {
     if (typeof name === "string") {
     console.log(`Hello ${name}`)
     } else {
     console.log(`Введите корректное значение`)
     }
    }
    
    greetingVoid("Johnny Depp");