const countSymbols = (text) => {
    const resultOfFunc = (typeof text === "string") ? text.length : 'No text';
    return resultOfFunc;
}

function countSymbolsFD(text) {
    const resultOfFunc = (typeof text === "string") ? text.length : 'No text';
    return resultOfFunc;
}


const resultOfArrowFunction = countSymbols("Hello!");
console.log(resultOfArrowFunction);

const resultOfFunctionDeclaration = countSymbolsFD("Hello!!!");
console.log(resultOfFunctionDeclaration);