// tipos primitivos

let firstName: string = "Jhon"
let age: number = 31
let isAdmin: boolean = true

// tipo object

let car: {
  name: string
  age: number
  price: number
}

// tipos array
const myNumbers: number[] = [3, 2, 3]
console.log(myNumbers)
console.log(myNumbers.length)

//tuplas, molde de como o array tem que ficar
let myTuple: [number, string, string[]]
myTuple = [5, "test", ["a", "b"]]

// inferencia x annotation

// inferencia, onde voce nao diz o tipo, mas pelo dado o editor/typescript, sabe qual seria
let y = 12
// y = "teste" // nao pode pois y seria number

// annotation, quando voce declara o tipo explicitamente

let number: number = 100.