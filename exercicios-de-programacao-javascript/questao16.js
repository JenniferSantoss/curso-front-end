// Crie uma função que receba um array com uma quantidade indeterminada
// de números e retorne a média simples desses números

function media(numeros){
    const quantidadeDeNumeros = numeros.length

    let somaTotal = 0

    for(numero of numeros) {
    somaTotal += numero
}
    return somaTotal / quantidadeDeNumeros
}

console.log(media([1, 2, 3, 4, 5]))