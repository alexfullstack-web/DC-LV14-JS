// const { abrirConta, depositar, sacar, extrato } = require("./atividade01");

// let conta1 = abrirConta("João", "12345", "001", 1000);


// depositar(conta1, 500);
// sacar(conta1, 200);
// extrato(conta1);

// console.log(
//     `Conta de ${conta1.nome} - Número: ${conta1.numeroConta}, Agência: ${conta1.agencia}, Saldo: R$ ${conta1.saldo.toFixed(2)}`
// );

const{ lerArquivoJson, escreverArquivoJson, buscarObjeto } = require("./atividade03");

const caminhoArquivo = "banco.json";

const frutas = lerArquivoJson(caminhoArquivo);

frutas.frutas.push({ id: 10, nome: "Pera", preco: 2.5 });
frutas.frutas.push({ id: 20, nome: "Uva", preco: 1.5 });

escreverArquivoJson(caminhoArquivo, frutas);

const objeto = buscarObjeto(caminhoArquivo, "frutas", 10);
console.log(objeto);

const objeto2 = buscarObjeto(caminhoArquivo, "frutas", 20);
console.log(objeto2);


