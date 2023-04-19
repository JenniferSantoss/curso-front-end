//Diferentes formas de criar objetos

//Usando a notação literal
const obj1 = {}
console.log(obj1)

//Object em Js - função constutora
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Criar suas proprias funções construtoras
function Produto(nome, preco, desc){
    this.nome = nome //quando eu coloco o this eu estou tornado esse atributo nome visivel/publico, os demais(preco e desc) estao encapsulados na funcao
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}
const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2990.00, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())


//Function Factory
function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Joao', 8000, 4)
const f2 = criarFuncionario('Maria', 10000, 1)
console.log(f1.getSalario(), f2.getSalario())

//Uma função famosa que retorna Objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)