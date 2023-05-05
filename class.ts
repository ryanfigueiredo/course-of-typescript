// modificadores: readonly, protected, private
// protected acessivel na classe e subclass
// private acessivel apenas na class

interface IPerson {
  id: number
  name: string
  age: number
  sayMyName(): string
}

class Person implements IPerson {
  id: number
  name: string
  age: number

  constructor(id: number, name: string, age:number) {
    this.id = id
    this.name = name
    this.age = age
  }

  sayMyName(): string {
    return this.name
  }
}

// short code class refactory

class PersonRefactor {
  constructor(
    id: number, 
    name: string, 
    age: number
  ) {}
}

// example of subclasse 

class Employee extends Person {
  constructor(id: number, name: string, age:number) {
    super(id, name, age)
  }

  whoAmI() {
    return this.age
  }
}

const person = new Person(1, "My name", 22)
console.log(person)