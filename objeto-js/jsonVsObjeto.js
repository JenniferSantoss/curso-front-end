//JSON é um formato de dados 

const obj = {
    a: 1,
    b: 2, 
    c: 3,
    soma(){
        return a + b + c
    }
}
//Transformar objeto em JSON
console.log(JSON.stringify(obj))

//Transformar JSON em Objeto
console.log(JSON.parse('{"a": 1, "b": 2, "c":3}')) //atributos e strings devem ser delimitados por aspas("")

