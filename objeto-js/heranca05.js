String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}

console.log('Jennifer Santos'.reverse())

Array.prototype.first = function(){
    return this[0]
}