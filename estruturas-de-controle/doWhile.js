function getInteiroAleatorio(min, max){
    const valor = Math.random() * (max -min) + min  //Math.ramdom -> fornece numeros aleatorios entre 0 e 1
    return Math.floor(valor) //Math.floor arredonda as coisas
}

let opcao 

do {
    opcao = getInteiroAleatorio(-1, 10)
    console.log(`A opção escolhida foi ${opcao}`)
} while (opcao != -1)

console.log('Pronto, acabou!')
