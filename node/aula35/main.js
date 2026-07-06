const { abrirConta, depositar, sacar, extrato } = require("./atividade01");

let conta1 = abrirConta("João", "12345", "001", 1000);


depositar(conta1, 500);
sacar(conta1, 200);
extrato(conta1);

console.log(
    `Conta de ${conta1.nome} - Número: ${conta1.numeroConta}, Agência: ${conta1.agencia}, Saldo: R$ ${conta1.saldo.toFixed(2)}`
);

