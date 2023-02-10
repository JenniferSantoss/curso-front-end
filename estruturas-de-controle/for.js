let contador = 1     //declaração
while(contador <= 10) {      // Enquanto esta expressão for verdadeira, o laço continua rodando, quando for falsa, ele para.
    console.log(`contador = ${contador}`)  // Ess ${} é para chamar a variavel dentro de ""
    contador++    //incrmento
}  


// No while, nós temos uma declaração (variavel), expressão e um incremento

for(let i = 1; i <= 10; i++){
    console.log(`i = ${i}`)
}

const notas = [8, 9, 7, 10, 5]
for(let i = 0; i < notas.length; i++)  {
    console.log(`nota = ${notas[i]}`)

} //length é o tamanho do array