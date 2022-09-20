{{{{  var sera = 'Sera???'  // variavel vai p escopo global, por isso ela e lida dentro ou fora do bloco {}




}}}}
console.log(sera)

function teste ()  {
    var local = 123   // variavel dentro do escopo da function ela fica apenas dentro do bloco
}

teste()
 console.log(local)