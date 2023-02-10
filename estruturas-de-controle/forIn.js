const notas = [5, 7, 9, 8, 9]

for (let i in notas) {
    console.log(notas[i])
}

const pessoa = {
    nome: 'Jenny',
    sobrenome: 'Santos',
    idade: 24,
    peso: 70,
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}