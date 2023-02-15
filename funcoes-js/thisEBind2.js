function Pessoa(){
    this.idade = 0

    setInterval(function(){
        this.idade++
        console.log(this.idade)

    }.bind(this), 1000) //essa função dispara uma outra função a paertir de um intervalo que voce passou

}
new Pessoa 