// functions

const sum = (x: number, y: number) => {
  return x + y
}

// : number | string =>, tipo de retorno
const sum2 = (x: number, y: number): number | string => {
  return x + y
}

const value = sum(2,3)
console.log(value)

const value2 = sum2(2,3)
console.log(value2)

// other examples 
type Order = {
  productId: string,
  price: number
}

type User= {
  firstName: string,
  lastName: string,
  age: number
  password?: string,
  orders: Order[]
}

const user: User = {
  age: 1,
  firstName: "Jhon",
  lastName: "Doe",
  orders: [{price: 2.99, productId: '1'}]
}

const printLog = (message: string) => {}
// user.password!, colocando esse bang(!), ele afirma pro typescript
// que o parametro password sera realmente uma string e nao string | undefined
printLog(user.password!)

// optional parameter function
const printLog2 = (message?: string) => {}
printLog2(user.password)