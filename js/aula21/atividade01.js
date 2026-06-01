let cep = '01001000'
let url = `https://viacep.com.br/ws/${cep}/json/`

fetch(url)
    .then(resposta => {
        if(resposta.status == 200){
            return resposta.json()
        }else if(resposta.status == 404){
            console.log('erro de requisição')
        }
    })
    .then(dados => {
        console.log(dados)
        console.log(`logradouro: ${dados.logradouro},
             bairro: ${dados.bairro}, 
             cidade: ${dados.localidade}, 
             estado: ${dados.uf}`)
    })
    .catch(erro => console.log(erro))