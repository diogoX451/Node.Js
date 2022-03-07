const fs =  require('fs');
const path = require('path');
//Armazenar os dados
const filePath = path.join(__dirname, 'users.json')
//Rota dos users
function getUsers() {
    const data = fs.existsSync(filePath)
        ? fs.readFileSync(filePath)
        : [];
    try {
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}
// salvar os usuarios
 const saveUser = (users) => fs.writeFileSync(filePath, JSON.stringify(users, null, '\t'))

 // Rota do User

 const usersRoute = (app) => {
     app.route('/users/:id?')
        .get((re, res)=> {
            const users = getUsers()

            res.send({ users })
        })
        .post((req, res) => {
            const users = getUsers()

            //adicionar registros
            users.push(req.body);
            saveUser(users);
            res.sendStatus(201).send('OK')
        })
        //atualizar a rota
        .put((req,res)=>{
            const users = getUsers()
            // metodo para atualizar
            saveUser(users.map(user => {
                if(user.id === req.params.id){
                    return{
                        ...user,
                        ...req.body
                    }
                }
                return user;
            }))
            res.sendStatus(200).send('OK')
        })
        //Deletar ite,
        .delete((req, res)=>{
            const users = getUsers()

            //deletar
            saveUser(users.filter( user => user.id !== req.params.id))
            res.sendStatus(200).send('OK');

        })
 }

module.exports = usersRoute;


/*
* Observações
=> Lidar com pasta de arquivos chamar o fs
=> join para simular um banco de dados
=> fs.existsSync(); verificar a existencia do arquivo 
=> "?" corresponde ao "if" e o ":" ao "else"
=> "try para lidar com erros"
=> .parse (enviar os dados)
=> '\t' siginifica pular e deixar legivel
=> ':id?'= para adicionar ou remover...
=> corpo da requisição "req.body"







*/