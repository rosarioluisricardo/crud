const express = require("express");
const app = express();

//testar conexão com o banco de dados
const db = require("./db/models");

//cria o middleware para receber os dados no corpo da requisição
app.use(express.json());



//incluir controllers
const users = require('./controllers/users');

//criar rotas
app.use('/', users);


app.listen(8080, () =>{
    console.log("servidor iniciado na porta 8080: http://localhost:8080 ")
})