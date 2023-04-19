// Um objeto é uma coleção dinâmica de pares chave/valor

const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['marca do produto']
console.log(produto)


const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 25
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome:'Ana',
        idade:30
    }

],

    calcularValorSeguro: function(){
        //...
    }
}

carro.proprietario = 'Joao'
console.log(carro)

delete carro.proprietario.condutores
console.log(carro.condutores)

