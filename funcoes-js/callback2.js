const notas = [7, 9, 6, 4, 3, 9]

//Sem Callback
let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//Com Callback

notasBaixas2 = notas.filter(function(nota) {
    return nota < 7
})

console.log(notasBaixas2)