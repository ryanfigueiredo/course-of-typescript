// parametro default

function descontoCompra(preco: number, desconto = 0.08) {
  return preco * (1 - desconto)
}

console.log(descontoCompra(100))