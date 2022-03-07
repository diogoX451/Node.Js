const express = require('express');
const bodyParser = require('body-parser');

//Importa uma rota
const usersRoute = require('../express/routes/usersRoute');
const app = express();
//declarando porta
const port = 3333;

// definir o body 
app.use(bodyParser.urlencoded({extended: false}))

// chamando o userRoute
usersRoute(app);

//criando rota
app.get('/', (req,res)=>{
    res.send("Projeto com Express : )");
});

// abrindo servidor
app.listen(port, () => console.log("Rodando na porta 3333"));


/*

* Observações 

=. chama a dependencia do express com "npm i express --save" ou com "yarn add express --save"
=> Declara como uma constancia
=> Declara a porta e monta o caminho da porta com .listen();
=> Cria caminhos com get dando a função de "req e res"

===============================================================================================

* Criação de um Endpoint
=> responsável por garantir que os acessos dos usuários não seja uma porta de entrada para um ataque cibernético

* Linha de raciocinio 
=> Lista de usuario com função .get
=> Criar usuario função .post
=> Modificar usuario com .put
=> Remover usario (DELETE)






*/ 