const escola = "Cod3r";

console.log (escola.charAt(4)) // charAt retorna a letra que esta dentro do indice 4 da const escola
console.log (escola.charCodeAt(3));
console.log(escola.indexOf(3));
console.log(escola.substring(1));
console.log(escola.substring(0, 3));

console.log("Escola ".concat(escola).concat("!"));
console.log (escola.replace(3, "e"));
console.log("Ana,Maria,Pedro".split(","));