console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === module.exports)
    console.log(this === global)
}

// Dentro de uma função o this aponta para global
// Dentro do modulo ele aponta para module.exports(algo publico fora do modulo)