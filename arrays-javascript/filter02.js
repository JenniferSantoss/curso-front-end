Array.prototype.filter2 = function(callback){
    const newArray = []
    for (let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}



const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad', preco: 4129, fragil: true},
    { nome: 'Copo de vidro', preco: 12.99, fragil: true},
    { nome: 'Copo de plastico', preco: 9.99, fragil: false}
]


const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))
