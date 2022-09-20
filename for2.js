const notas = [6.7, 7.4, 9.8, 8.1, 7.7] // for in nao vai te dar as notas mais os indices de cada elemento
for (let i in notas) {          // usar let para que o i tenha acesso apenas dentro do laço
    console.log(i, notas[i])
}

const pessoa = {  // percorrer todos os atributos de um objeto
    nome:"Ana",
    sobrenome: 'Silva',
    idade: 29,
    peso: 64,
}

for(let atributo in pessoa) {    // usar let para que o atributo tenha acesso apenas dentro do laço
    console.log(`${atributo} = ${pessoa[atributo]}`)

}