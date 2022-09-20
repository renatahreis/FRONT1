const funcs = []

for (var i = 0; i < 10; i++) {  // var nao tem escopo de funcao
    funcs.push(function() {
        console.log (i)
    })
}

funcs[2]()
funcs[8]()