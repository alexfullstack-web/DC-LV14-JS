// para os serviços de usuarios crie os controladores :

//Atividade 1 : Crie o controlador getUsuarios
/* Se o objeto retornado pela função buscarUsuarios da camada de serviços tiver o atributo dados, configure a seguinte resposta:

//status:200
//dados: retorno dados do serviço
//mensagem: usuarios selecionados com sucesso

Se o objeto tiver o atributo erro:

//status: 500
erro: erro ao selecionar usuarios


//Importante: faça a instalação do express e no arquivo app crie a rota get para a url '/usuarios'.*/

const usuarios = require('../services/usariosServices')

async function getusuarios(req, res){
    const retornadadosservico = await usuarios.buscarUsuarios()

    if(retornadadosservico.erro){
        res.status(400)
        res.json({
            status: 400,
            message: messagem.erro
        })
    }else{
        res.status(200)
        res.json({
            status: 200,
            dados: retornadadosservico.dados,
            message: 'usuarios selecionados com sucesso'
        })
    }
}

//crie uma função postUsuario (controlador) que a partir dos dados recebidos no corpo da requisição, executar o serviço. Esse controlador deverá retornar o seguinte objeto:
        // sucesso: 200 {status: 200, info: 'usuário criado com sucesso', dados: retorno do serviço}
        //os erros:
            //se retornoServico.erro == 'email ja cadastrado'
            // erro: 400 {status: 400, info: 'emails devem ser unicos. email ja cadastrado no sistema', erro: 'email ja cadastrado'}

            //se retornoServico.erro == 'campos obrigatórios'
            // erro: 400 {status: 400, info: 'campos obrigatórios: nome, username, email, senha', erro: 'campos obrigatórios'}

        // erro: 500 {status: 500, info: 'não foi possivel criar o usuário', erro: erro.message}

async function postUsuario(req, res){
    const retornoServico = await usuarios.criarUsuario(req.body.nome, req.body.username, req.body.email, req.body.senha)
    if(retornoServico.erro){
        res.status(400)
        res.json({
            status: 400,
            info: 'emails devem ser unicos. email ja cadastrado no sistema',
            erro: 'email ja cadastrado'
        })
    }else{
        res.status(200)
        res.json({
            status: 200,
            info: 'usuário criado com sucesso',
            dados: retornoServico.dados
        })
    }
}

module.exports = {
    getusuarios,
    postUsuario
}