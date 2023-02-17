// 18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
// switch. Crie um case default que escreva ‘Número fora do intervalo.’

function escreverNumero (numero) {
    switch (numero){
        case 1: 
            console.log("um") 
        break
        case 2:
            console.log("dois")
        break
        case 3:
            console.log("tres")
        break
        case 4:
            console.log("quarto")
        break
        case 5:
            console.log("cinco")
        break  
        case 6:
            console.log("seis")    
        break
        case 7:
            console.log("sete")    
        break
        case 8:
            console.log("oito")
        break
        case 9:
            console.log("nove")    
        break
        case 10:
            console.log("dez")          
        break   
        default:
            console.log("Número fora do intervalo")
    }

}

escreverNumero(1)
escreverNumero(5)
escreverNumero(7)
escreverNumero(9)
escreverNumero(11)