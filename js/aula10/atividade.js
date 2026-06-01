//peça as seguintes informações ao usuário: nome, idade, cidade, email e 
// profissão. Depois, exiba uma mensagem no console no seguinte formato:

/* nome : nomeDoUsuario
idade : idadeDoUsuario
cidade : cidadeDoUsuario
email : emailDoUsuario
profissão : profissaoDoUsuario 

Oi eu sou nomeDoUsuario, tenho idadeDoUsuario anos, moro 
em cidadeDoUsuario, meu contato é emailDoUsuario e minha profissão ;
é profissaoDoUsuario.

*/

//DICA: para ler as informações do usuário, utilize a função prompt() 
// e para exibir a mensagem no console, utilize a função console.log().

let nome = prompt("Digite seu nome:");
let idade = prompt("Digite sua idade:");
let cidade = prompt("Digite sua cidade:");
let email = prompt("Digite seu email:");
let profissao = prompt("Digite sua profissão:");

console.log('nome :' + nome
+ '\nidade :' + idade
+ '\ncidade :' + cidade
+ '\nemail :' + email
+ '\nprofissão :' + profissao
+ '\n\nOi eu sou ' + nome + ', tenho ' + idade + ' anos, moro em ' + cidade + ', meu contato é ' + email + ' e minha profissão é ' + profissao + '.');