Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim
}

const mostrarNota = function (nota) {
    if (nota.entre(9, 10)){
        console.log('Quadro de Honra')
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado')
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperação')
    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado')
    } else {
        console.log('Nota Iválida')
    }
}

mostrarNota(10)
mostrarNota(7.5)
mostrarNota(4.3)
mostrarNota(2.5)
mostrarNota(11)
