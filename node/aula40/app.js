const express = require ('express');
const controllers = require('./controllers/usuariosControlls')
const app = express();

app.use(express.json());

app.get('/usuarios', controllers.getusuarios)

app.listen(3000,{
    message: 'Servidor rodando na porta 3000'
});