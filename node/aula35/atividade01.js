//Produção do módulo bancário

//criação das funções do módulo bancário: abrir conta, depositar, sacar e extrato

/*função para abrir conta: receberá como parâmetro o nome do cliente, numero da conta, 
agencia e o saldo inicial da conta, retornando um objeto com as informações da conta. 
Caso o saldo inicial não seja informado, o valor padrão será 0. (utilizar valor padrão para 
    variável da função)*/

/*função para depositar: receberá como parâmetro o objeto da conta e o valor a ser 
depositado, retornando o novo saldo da conta e mostrando uma mensagem de sucesso no console. 
Caso o valor do depósito seja negativo, retornar uma mensagem de erro.*/

/*função para sacar: receberá como parâmetro o objeto da conta e o valor a ser sacado, 
retornando o novo saldo da conta e mostrando uma mensagem de sucesso no console. Caso o 
valor do saque seja negativo ou maior que o saldo da conta, retornar uma mensagem de erro.*/

/*função para extrato: receberá como parâmetro o objeto da conta, retornando o saldo atual 
da conta e mostrando uma mensagem no console com o saldo atual.*/

function abrirConta(nome, numeroConta, agencia, saldoInicial = 0) {
    return {
        nome: nome,
        numeroConta: numeroConta,
        agencia: agencia,
        saldo: saldoInicial
    };
}

function depositar(conta, valor) {
    if (valor > 0) {
        conta.saldo += valor;
        console.log(`Depósito realizado com sucesso. Novo saldo: R$ ${conta.saldo.toFixed(2)}`);
    } else {
        console.log("Valor do depósito inválido.");
    }
}

function sacar(conta, valor) {  
    if (valor > 0 && valor <= conta.saldo) {
        conta.saldo -= valor;
        console.log(`Saque realizado com sucesso. Novo saldo: R$ ${conta.saldo.toFixed(2)}`);
    } else {
        console.log("Valor do saque inválido.");
    }
}

function extrato(conta) {
    console.log(`Saldo atual da conta: R$ ${conta.saldo.toFixed(2)}`);
    return conta.saldo;
}

module.exports = {
    abrirConta,
    depositar,
    sacar,
    extrato
};