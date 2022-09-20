console.log ('01)', '1' == 1)   // dois == e um operador relacional que compara a igualdade (o resultado e true pq e comparado só valores)
console.log ('02)', '1' === 1)   // o resultado é false pq compara valor e tipo
console.log('03', '3' != 3) // o resultado sera false pq estou comparando apenas o valor
console.log('04)', '3' !== 3) // o resultado e true pq nesse caso compara o tipo
console.log('05)', '3' < 2)
console.log('06)', '3' > 2)
console.log('07)', '3' <= 2)
console.log('08)', '3' >= 2)

const d1 = new Date (0)
const d2 = new Date (0)
console.log ('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime())

console.log('12)', undefined == null)
console.log('13', undefined === null) // === instritamente igual