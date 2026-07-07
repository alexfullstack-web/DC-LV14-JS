// 2 --Leitura e escrita de arquivos com o módulo fs
// crie 2 arquivos de texto:
// texto1.txt: com algum conteúdo de sua escolha
// texto2.txt: com algum conteúdo de sua escolha
// concatene o conteúdo dos dois arquivos em um terceiro arquivo chamado texto3.txt.

/*Dica: caso use a função readFile, lembre-se que ela é assíncrona, então você precisará 
fazer a leitura do segundo arquivo dentro do callback da leitura do primeiro arquivo.*/

/*Caso use a função readFileSync, você poderá fazer a leitura dos dois arquivos de forma 
síncrona, sem precisar de callbacks, apenas armazenando o conteúdo de cada arquivo em uma 
variável e depois concatenando essas variáveis para escrever no terceiro arquivo.*/

/* Importante tratar os erros de leitura e escrita dos arquivos, caso ocorra algum erro, 
exibir uma mensagem no console com o erro ocorrido, de forma clara para o usuário.*/

const fs = require("fs");

fs.readFile("texto1.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Erro ao ler o arquivo texto1.txt:", err.message);
    return;
  } else {
    console.log("Conteúdo do arquivo texto1.txt:");
    console.log(data);
  }

  fs.readFile("texto2.txt", "utf-8", (err, data2) => {
    if (err) {
      console.log("Erro ao ler o arquivo texto2.txt:", err.message);
      return;
    } else {
      console.log("Conteúdo do arquivo texto2.txt:");
      console.log(data2);
    }

    fs.writeFile("texto3.txt", data + data2, (err) => {
      if (err) {
        console.log("Erro ao escrever o arquivo texto3.txt:", err.message);
        return;
      }

      console.log("Arquivo texto3.txt criado com sucesso!");
    });
  });
});
