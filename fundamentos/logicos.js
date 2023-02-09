function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2 // OR - basta apenas 1 destes ser true
    const comprarTv50 = trabalho1 && trabalho2 // AND - os dois devem ser true
    const comprarTv32 = trabalho1 != trabalho2 //OU exclusivo
    const manterSaudavel = !comprarSorvete //operador unitario

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}

}

console.log(compras(true, true))
console.log(compras(true,false))
