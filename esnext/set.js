//não aceita repetição/nao indexada

const times = new Set()
times.add('Vasco')
times.add('Sao Paulo').add('Palmeiras').add("Corintians")

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))

