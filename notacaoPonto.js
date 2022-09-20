console.log (Math.ceil(6.1)) // ceil arredonda p cima e Math e um objeto

const obj1 = {}
obj1.nome = "Bola"  // atributo para o objeto
//obj1["nome"] = "Bola2"  // forma alternativa
console.log(obj1.nome)


function Obj(nome)  {
    this.nome = nome  // this faz ficar publico
   this.exec = function() {
    console.log ('Exec...')
}

}

const obj2 = new Obj("Cadeira")
const obj3 = new Obj("Mesa")
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()


