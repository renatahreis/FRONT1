function tratarErroELancar(erro) {
    //throw new Error("...")  // o throw e a mensagem que aparece no console apos erro 
    // throw "10"
   // throw "mensagem"
  // throw true
  throw {
    nome:erro.name,
    msg: erro.message,
    date: new Date
  }
   
}

function imprimirNomeGritando (obj) {
    try {
console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log ('final') // independente de erro vai chamar o finally

    }
}

const obj = { nome: 'Roberta'}

imprimirNomeGritando(obj)