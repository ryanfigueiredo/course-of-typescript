//unions, forma para juntar os parametros de um type com outro

type Author = {
  books: string[]
}

const author: Author & User = {
  age: 22,
  lastName: "Kevin",
  firstName: "Hart",
  books: ["a"],
  orders: [{price: 2.99, productId: '1'}]
}
