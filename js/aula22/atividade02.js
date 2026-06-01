//crie um formulário que tenha os campos
//username
//email
//password
//confirme a senha
//Quando o formulario for submetido validade as senhas e caso não sejam iguais exiba um alerta com a mensagem "Senhas diferentes"
//Se as senhas passarem na validação faça uma chamada na API 'https://fakestoreapi.com/users' com o método POST e crie um novo usuário com os dados do formulário. Exiba um alerta com a mensagem "Usuário criado com sucesso" e limpe o formulário.

//dica! crie uma função assíncrona com await e use o fetch para fazer a chamada da api
//para o evento de submit do formulário use o preventDefault para evitar o comportamento padrão do formulário, faça a validação das senhas e se as senhas forem diferentes exiba um alerta com a mensagem "Senhas diferentes" caso contrário faça a chamada da api e exiba um alerta com a mensagem "Usuário criado com sucesso"

//CONCEITOS EXPLORADOS:
//eventos de formulários (preventDefault, addEventListener, submit, change)
//validação de formulários (validade de senhas iguais, validade de campos preenchidos)
//fetch (com url e objeto de configuração)
//await (funções assíncronas e armazenamento de dados assíncronos)
//try catch

const form = document.querySelector("form");
const userName = document.querySelector("#userName");
const userEmail = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");
const userConfirmPassword = document.querySelector("#userConfirmPassword");

async function cadastrarUarios() {
    try {
        const response = await fetch("https://fakestoreapi.com/users", {
            method: "POST",
            body: JSON.stringify({
                name: userName.value,
                email: userEmail.value,
                password: userPassword.value,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.ok) {
            alert("Usuário criado com sucesso");
            form.reset();
        } else {
            throw new Error("Erro ao criar usuário");
        }
    } catch (error) {
        alert(error.message);
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (userPassword.value !== userConfirmPassword.value) {
        alert("Senhas diferentes");
    } else {
        cadastrarUarios();
    }
});


