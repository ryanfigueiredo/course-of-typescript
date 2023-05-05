// uso de Omit, serve para fazer replace do tipo de alguma propriedade

interface Employees {
  id: number
  name: string
  salary: number
}

interface Developer extends Omit<Employees, 'id'> {
  id: string
  programmingLanguage: string
}

const developer: Developer = {
  id: 'Ruby-10',
  name: 'Cloud',
  salary: 125000,
  programmingLanguage: 'Ruby'
}

console.log(developer)

// outra forma de resolver o caso de uso para o Omit

interface Employee2 {
  id: number | string // here
}

interface Developer2 extends Employee2 {
  id: string
}

const developer2: Developer2 = {
  id: 'developer-2'
}

console.log(developer2)

// omit Readonly type 
interface Book {
  title: string
  author: string | null
  price: number
  numberPages: number
}

type Article = Omit<Book, 'numberPages'>
type ModelBook = Readonly<Book>

const book: ModelBook = {
  author: 'Uncle Bob',
  price: 89.99,
  title: "Clean Code",
  numberPages: 182 // se fosse type Article, o parametro seria opcional/omitido
}