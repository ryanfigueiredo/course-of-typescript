// generics, when use?, talvez quando for para funcoes que recebe/retorna 
// valores dinamicos

const returnValue = <T>(value: T) => value
const message = returnValue<string>("Hello word")
const count = returnValue<number>(2)

console.log(count)

// generic com promisses

const returnPromise = async (): Promise<string> => {
  return "7"
}

// classes com generic

class GenericNumber<T> {
  zeroValue: T
  sum: (x: T, z: T) => T

  constructor(zerovalue: T, sum: (x: T, z: T) => T) {
    this.zeroValue = zerovalue,
    this.sum = sum
  }
}

const myGenericNumber = new GenericNumber<number>(0, (x: number, z: number) => {
  return x + z
})

// more about generics 
// exemplo para retornar numeros randomicos pelo array de numbers
function returnNumbersRandomics(items: number[]): number {
  let numberRandomic = Math.floor(Math.random() * items.length)
  return items[numberRandomic]
}

let numbers = [1,2,3,4,5,6,7,8,9,10]

console.log(returnNumbersRandomics(numbers))

// caso precisemos ter uma mesma funcao para retornar 'strings' randomicas, teriamos
// que copiar toda a function alterando o tipo de dado recebido/retornado
function returnCountriesRandomics(items: string[]): string {
  let itemRandomic = Math.floor(Math.random() * items.length)
  return items[itemRandomic]
}

let countries = ['Brazil', 'USA', 'Japan', 'China']

console.log(returnCountriesRandomics(countries))

// Nesse caso podemos usar generics.
function returnElementsRandomics<T>(items: T[]): T {
  let itemRandomic = Math.floor(Math.random() * items.length)
  return items[itemRandomic]
}

let numberRandomicGeneric = returnElementsRandomics<number>(numbers)
let countriesRandomicGeneric = returnElementsRandomics<string>(countries)

console.log(numberRandomicGeneric)
console.log(countriesRandomicGeneric)

// Generic Constraints
// geralmente serve para restrigir algo, ou tipo de dado quando is generic

function returnJoinObjects<T, V>(object1: T, object2: V) {
  return {
    ...object1,
    ...object2
  }
}

// aqui o typescript nao aponta o 'erro' pois 36 deveria talvez ser um objeto, porem o tipo
// is generic entao ele nao sabe do erro, mas se quisermos constrains (restringir isso)
// fazemos como esta no peopleDog2
const pepopleDog = returnJoinObjects2(
  { name: 'Lis' },
  36
)

console.log(pepopleDog)

function returnJoinObjects2<T extends object, V extends object>(object1: T, object2: V) {
  return {
    ...object1,
    ...object2
  }
}

const pepopleDog2 = returnJoinObjects2(
  { name: 'Lis' },
  { age: 36 }  // 36
)

console.log(pepopleDog2)

// com parametro do tipo chave keyof
// aqui ja assinala erro pois o parametro key tem que ser uma keyof de T
function prop<T, K>(object1: T, key: K) {
  return object1[key] 
}

//resolvendo o code acima... 
function prop2<T, K extends keyof T>(object1: T, key: K) {
  return object1[key]
}

// aqui, se utilizarmos outra key que nao seja name, o typescript acusara erro
const people2 = prop2(
  { name: 'Bil' },
  'name'
)

// generic classes 

class Student<T, U> {
  private id: T
  private name: U

  setValue(id: T, name: U): void {
    this.id = id
    this.name = name
  }

  returnValue(): void {
    console.log(`Id of student is: ${this.id}, name of student is: ${this.name}`)
  }
}

const student = new Student<number, string>()
const student2 = new Student<string, string>()

student.setValue(1, 'Kevin')
student2.setValue('2', 'Kevin')

student.returnValue()
student2.returnValue()

// generic interface

interface FetchResponse<T> {
  data: T
  status: number
  statusText: string
  headers: Record<string, string>
}

async function fetchJson<T>(url: string): Promise<FetchResponse<T>> {
  const response = await fetch(url)
  const headers: Record<string, string> = {}

  response.headers.forEach((value, key) => {
    headers[key] = value
  })

  const data = await response.json()

  return {
    data: data as T,
    status: response.status,
    statusText: response.statusText,
    headers
  }
}

(async () => {
  const response = await fetchJson<{ title: string }>("https://jsonplaceholder.typicode.com/todos/1")
  console.log(response.data.title)
})()