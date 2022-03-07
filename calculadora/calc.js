var somaFunc = require("./soma");
var sub = require("./sub");
var  div = require("./div");
var multi = require("./multi");

console.log(somaFunc (10,5));
console.log(sub (10,5));
console.log(div (10,5));
console.log(multi(10,5));


// Observaçao
/*
Para dividir os arquivos e exporta para o codigo principal
ultilizar "module.exports = Nome da função ou variavel que vai ser exportada"

require(); = Chamar um modulo Obs: utilize uma declaração de variavel

*/ 