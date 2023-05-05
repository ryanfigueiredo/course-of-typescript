// getter / setter

class Squad {
  private _width = 6
  private _heigth = 12

  get calculateSquad() {
    return this._heigth * this._width
  }

  set width(width: number) {
    this._width = width
  }
}

const squad = new Squad().calculateSquad
console.log(squad)

const squad2 = new Squad()
squad2.width = 3
console.log(squad2.calculateSquad)

interface Animal {
  name: string
  age: number
  postage: string 
}

interface Dog extends Animal {
  race: string 
}

const dog: Dog = {
  name: 'Prince',
  age: 2,
  postage: 'Middle',
  race: 'Shitzu'
}

console.log(dog)

interface Cat {
  name: string
}

interface AnotherAnimal extends Dog, Cat {
  age: number
}

const anotherAnimal: AnotherAnimal = {
  name: 'Yellow',
  age: 5,
  race: 'Pug',
  postage: 'Big'
}

console.log(anotherAnimal)