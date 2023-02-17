// 21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
//considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 
//1) crianças com menos de 10 anos pagam R$80; 
//2) conveniados com idade entre 10 e 30 anos pagam R$50; 
//3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95; e 
//4) conveniados acima de 60 anos pagam R$130


function calcularValor (idadeDoConveniado) {
    if (idadeDoConveniado < 10) {
        return 100 + 80
    } else if (idadeDoConveniado >= 10 && idadeDoConveniado < 30){
        return 100 + 50 
    } else if (idadeDoConveniado >= 30 && idadeDoConveniado < 60) {
        return 100 + 95
    } else {
            return 100 + 130
    }
}

console.log(calcularValor(35))
console.log(calcularValor(9))
console.log(calcularValor(10))
console.log(calcularValor(30))
console.log(calcularValor(60))

