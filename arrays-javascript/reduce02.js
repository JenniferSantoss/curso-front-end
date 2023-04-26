const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: false},
    { nome: 'Maria', nota: 9.3, bolsista: true},
    { nome: 'Pedro', nota: 7.8, bolsista: false},
    { nome: 'Ana', nota: 8.3, bolsista: true},
]

// Desafio 1: Todos os alunos são bolsistas?

const todosBolsistas = (resultado, bolsista) => resultado && bolsista  //resultado é o acumulador da callback anterior (acumuador, atual)
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))



//Desafio 2: Algum aluno é bolsista?

const algumBolsistas = (resultado, bolsista) => resultado || bolsista  
console.log(alunos.map(a => a.bolsista).reduce(algumBolsistas))

