const alunos = [
    { nome: 'Joao', nota: 7.9},
    { nome: 'Maria', nota: 8.9},
]

//Imperativo
let total1 = 0
for (let i = 0; i< alunos.length; i++){
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length) //media

//Declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma) //o reduce tem uma função de agregação
console.log(total2 / alunos.length)