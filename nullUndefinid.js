let valor   // nada atribuido a variavel
console.log (valor);  // undefined (nada definido)


valor = null;  // ausencia de valor, utilizado para zerar uma variavel declarada e que deseja nao atribuir mais nada a ela.
console.log(valor);
// console.log (valor.toString()) // erro!

// console.log (valor2);  // is not defined (nem foi declarado)

const produto = {};
console.log (produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined;  // evite atribuir undefined
console.log (!!produto.preco);
//delete produto.preco;
console.log(produto);

produto.preco = null // sem preço
console.log (!!produto.preco);
console.log(produto);




