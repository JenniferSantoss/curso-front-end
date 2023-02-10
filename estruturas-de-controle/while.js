function getInteiroAleatorio(min, max){
    const valor = Math.random() * (max -min) + min  //Math.ramdom -> fornece numeros aleatorios entre 0 e 1
    return Math.floor(valor) //Math.floor arredonda as coisas
}

let opcao = 0 

while (opcao != -1) {
    opcao = getInteiroAleatorio(-1, 10)
    console.log(`A opção escolhida foi ${opcao}`)
}

console.log('Pronto, acabou!')
