// rest parameters
// normal form, without rest parameters

const sumNumbers = (numbers: number[]) => {
  return numbers.reduce((previosValue, currentValue) =>  previosValue + currentValue )
}

console.log(sumNumbers([20, 30]))

// with rest parameters

const sumNumbers2 = (...numbers: number[]) => {
  return numbers.reduce((previosValue, currentValue) =>  previosValue + currentValue )
}

console.log(sumNumbers2(60, 30))