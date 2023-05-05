const { error } = require('console')
const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1234,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
})