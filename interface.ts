// interfaces, pode user readonly para ser somente leitura e nao poder alterar
// o atributo

interface IUser {
  firstName: string
  nickName: string
}

const emailUser: IUser = {
  firstName: "Pedro",
  nickName: "Pedrim"
}

// interface with functions
interface MathFunc {
  (x: number, y:number): number
}

const sub: MathFunc = (x, y) => {
  return x - y
}

console.log(sub(3,1))