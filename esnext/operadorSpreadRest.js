// Operador ... rest(juntar)/spread(espalhar)
//usar rest com parametro de funcao

//usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12345.00}
const clone = { ativo: true, ...funcionario}
console.log(clone)

//Usar spread com array
const grupoA = ['Joao', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)