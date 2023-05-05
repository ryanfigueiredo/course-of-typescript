// type guards
// typeof, in, instanceof

// typeof 
type AlphNumeric = string | number

function showType(a: AlphNumeric, b: AlphNumeric) {
  if(typeof a === 'number' && typeof b === 'number') {
    return a + b
  }

  if(typeof a === 'string' && typeof b === 'string') {
    return a.concat(b)
  }

  throw new Error('Invalid Arguments! Both arguments should be numbers or strings')
}

console.log(showType("Flip", "2"))
console.log(showType(10, 20))


// instanceof

class Car {
  name: string
  brand: string

  constructor(name: string, brand: string) {
    this.name = name
    this.brand = brand
  }
}

class Moto {
  name: string
  year: number

  constructor(name: string, year: number) {
    this.name = name
    this.year = year
  }
}

function VehicleDetail(vehicle: Car | Moto) {
  if(vehicle instanceof Car) {
    return `The name of car is: ${vehicle.name} with brand: ${vehicle.brand}`
  } else if (vehicle instanceof Moto) {
    return `The name of car is: ${vehicle.name} with year: ${vehicle.year}`
  }
}

const car = new Car('Gol', 'Volkswagem')
console.log(VehicleDetail(car))

const moto = new Moto('CBR', 2020)
console.log(VehicleDetail(moto))

// type guards: in 
interface IAnimal {
  group: string
}

class Fish implements IAnimal {
  group: string
  color: string

  constructor(group: string, color: string) {
    this.color = color
    this.group = group
  }
}

class Bird implements IAnimal {
  group: string
  featherColor: string

  constructor(group: string, featherColor: string) {
    this.featherColor = featherColor
    this.group = group
  }
}

function swim(group: string) {
  console.log(`The ${group} is swimming`)
}


function fly(group: string) {
  console.log(`The ${group} is flying`)
}

const move = (animal: IAnimal) => {
  if('color' in animal) {
    swim((animal as Fish).group)
  } else if('featherColor' in animal) {
    fly((animal as Bird).group)
  }
}

move(new Fish('Fish', 'Blue'))
move(new Bird('Bird', 'White'))

// como fazer um casting usando 'as', geralmente utilizado
// para 'force' do tipo de dado

const newValue: unknown = 'Hello world'
console.log((newValue as string).length)

const carCorolla = 'Corolla'
const stringLength: number = (<string>carCorolla).length
console.log(`the length of string is ${stringLength}`)

// type assertion vs type casting 
// The reason it's not called 'type casting' is that casting usually implies 
// some kind of runtime support. However, 'type assertions' are purely a 
// compile-time construct and a way to give the compiler hints about how 
// you want your code to be parsed.

function showFinalPrice(price: number, discount: number, format: boolean): number | string {
  const priceWithDiscount = price * (1 - discount)

  return format ? `R$ ${priceWithDiscount}` : priceWithDiscount
}

const finalDiscount = showFinalPrice(100, 0.05, true) as string
const finalDiscount2 = <number>showFinalPrice(100, 0.05, false)
console.log(finalDiscount)

type Human = {
  name: string
  age: number
  language: string
}

const human = {
  age: 31,
  language: 'Portuguese'
}

const human2 = human as Human
console.log(human2.name.toUpperCase()) // error, por que o human nao tem name

const human3: Human = human // aqui o typescript ja mostra o erro, informando que 
// Property 'name' is missing in type '{ age: number; language: string; }' but required in type 'Human'