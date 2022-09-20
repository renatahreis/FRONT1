function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) // Math.floor para arredondar
}

let opcao = -1

do  {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opçãoo escolhida foi ${opcao}.`)
} while(opcao != -1)

console.log('Até a próxima!')