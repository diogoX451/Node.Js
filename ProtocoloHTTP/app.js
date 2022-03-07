var http = require('http');

//abri um servidor
http.createServer(function(req, res) {
    res.end("Olá");
}).listen(9001);

console.log("iniciando server");

/*
 Observação 
 conseguir abri um servidor manter padrão http.createServer(function(req, res){})
 req = requisição... 
 res = de resposta
 .end = enviar


*/