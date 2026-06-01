// CRIE UMA PÁGINA DE COTAÇÃO DE MOEDAS 
//https://brasilapi.com.br/docs#tag/CAMBIO/paths/~1cambio~1v1~1moedas/get
//Usando a api acima faça uma requisição e mostre a conversão do valor inserido pelo usuário em real para dolar, euro e libra esterlina.

const inputMoeda = document.querySelector('#inputMoeda');
const btnMoeda = document.querySelector('#btnMoeda');
const resultado = document.getElementById('resultado');
btnMoeda.addEventListener('click', () => {

    const valor = Number(inputMoeda.value);

    fetch('https://brasilapi.com.br/api/cambio/v1/moedas')
        .then(resposta => {

            if (resposta.status === 200) {
                return resposta.json();
            } else {
                throw new Error('Erro na requisição');
            }

        })
        .then(dados => {

            console.log(dados);

            // exemplo fictício
            const dolar = valor / dados.USDBRL.buy;
            const euro = valor / dados.EURBRL.buy;
            const libra = valor / dados.GBPBRL.buy;

            resultado.innerHTML = `
                <p>Dólar: ${dolar.toFixed(2)}</p>
                <p>Euro: ${euro.toFixed(2)}</p>
                <p>Libra: ${libra.toFixed(2)}</p>
            `;

        })
        .catch(erro => console.log(erro));

});

//faça uma validação de CNPJ: https://brasilapi.com.br/docs#tag/CNPJ
//consuma a api e mostre as informações do CNPJ inserido pelo usuário. Em caso de erro ou cnpj invalido, mostre uma mensagem de erro. Valide ser foram inseridos a quantidade de digitos corretos. 
const inputCnpj = document.querySelector('#inputCnpj');
const btnCnpj = document.querySelector('#btnCnpj');
const resultadoCnpj = document.getElementById('resultadoCnpj');
btnCnpj.addEventListener('click', () => {

    const cnpj = inputCnpj.value;

    fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`)
        .then(resposta => {

            if (resposta.status === 200) {
                return resposta.json();
            } else {
                throw new Error('Erro na requisição');
            }

        })
        .then(dados => {

            console.log(dados);

            resultadoCnpj.innerHTML = `
                <p>Nome: ${dados.nome}</p>
                <p>Telefone: ${dados.telefone}</p>
                <p>Endereço: ${dados.endereco}</p>
            `;

        })
        .catch(erro => console.log(erro));

});
//MOSTRE TODOS OS PRODUTOS EM CARDs (use componentes do bootstrap)
//https://fakestoreapi.com/docs#tag/Products/operation/getAllProducts

const resultadoProdutos = document.getElementById('resultadoProdutos');
fetch('https://fakestoreapi.com/products')
    .then(resposta => {

        if (resposta.status === 200) {
            return resposta.json();
        } else {
            throw new Error('Erro na requisição');
        }

    })
    .then(dados => {

        console.log(dados);

        dados.forEach(produto => {
            resultadoProdutos.innerHTML += `
                <div class="card" style="width: 18rem;">
                    <img src="${produto.image}" class="card-img-top" alt="${produto.title}">
                    <div class="card-body">
                        <h5 class="card-title">${produto.title}</h5>
                        <p class="card-text">${produto.description}</p>
                        <p class="card-text">Preço: ${produto.price}</p>
                    </div>
                </div>
            `;
        });

    })
    .catch(erro => console.log(erro));