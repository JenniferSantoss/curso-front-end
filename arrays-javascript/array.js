let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3]= 'Paulo'  //pode ser usado para substituir elementos
aprovados.push('Abia')  //adicionar elemento no final
console.log(aprovados.length)

aprovados[9]= 'Rafael' // deixa 4 espaços vazios
console.log(aprovados)

aprovados.sort()
console.log(aprovados)

delete aprovados[1] //coloca undefined no indice 1
console.log(aprovados[1])
console.log(aprovados[2])


apaprovados = ['Bia', 'Carlos', 'Ana']
aprovados.slice(1, 1) //o primeiro parametro é o índice e o segundo é a quantidade de elemtos que vc quer excluir a partir daquele indice e depois vc coloca os elemetos que quer substituir
console.log(aprovados)

