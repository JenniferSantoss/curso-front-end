const nums = [1, 2, 3, 4, 5]

// map é um for com propósito

let resultado = nums.map(function(e){
    return e * 2
})

console.log(resultado)

//Sintaxe do método map
// arr.map(function(elemento, índice, array){  }, this);