// 10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
// ou false.

function verificarNumeroDivisivelPorTres (numero){
    if (numero % 3 > 0) {
        return "False"
    } else {
        return "True"
    }
}

console.log("Esse número é divisivel por 3: ", verificarNumeroDivisivelPorTres(6))
console.log("Esse número é divisivel por 3: ", verificarNumeroDivisivelPorTres(10))
console.log("Esse número é divisivel por 3: ", verificarNumeroDivisivelPorTres(12))