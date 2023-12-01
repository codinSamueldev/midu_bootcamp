// basic js sintax. Remeber, in JS for better practise use camelCase.
console.log("Holiiii")

let name = "Samuel"
const lastName = 7
var isDeveloper = true

console.log(name)
name = "Pedro"
console.log(name)

/* 
    Tipos de datos
*/

2
String
true
false
null
undefined
BigInt
Symbol

/*
    Tipos de mutables e inmutables.
*/

const firstName = "Andres"
console.log(firstName.toUpperCase())

//Arrays-Lists
const list = []
const secondList = list.concat(1)
console.log(list[0])
console.log(secondList[0])

//Dictionaries
const samuel = {
    name: 'Samuel',
    github: 'codinSamuelDev',
    age: 20,
    isProgrammer: true,
    links: ['link1', 'link2']
}

const field = 'github'

console.log(samuel.links[0])
//Dinamic way to access a dict.
console.log(samuel[field])

/* 
    Functions.
*/

//Function expression.
const sumar = (a, b) => {
    console.log(a)
    console.log(b)
    return a + b
}

console.log(`Resultado suma -> ${sumar(2, 2)}`)

//Function declaration
function restar(a, b) {
    return a - b
}
console.log(`Resultado resta -> ${restar(2, 2)}`)