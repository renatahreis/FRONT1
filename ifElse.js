const imprimirResultado = function(nota) {
    if (nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}
imprimirResultado(9)
imprimirResultado(2)
imprimirResultado('Epa!') //cuidaddo!! linguagem fracamente tipada deixa passa e faz comparação
