for(let letras of 'Cod3r'){
    console.log(letras)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for(let i in assuntosEcma) {
    console.log(i)
}

for(let assunto in assuntosEcma) {
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', { abordado: true }] 
    ['Set', { abordado: true }] 
    ['Promise', { abordado: false}]
])

for (let assunto of assuntosMap){
    console.log(assunto)
}

for (let chave of assuntosMap.keys()){
    console.log(chave)
}

for (let valor of assuntosMap.values()){
    console.log(valor)
}

