/*Crie um componente que permita que o usuário digite 3 campos: nome, email e cargo. Os campos devem ser exibidos na tela quando o usuário clicar no botão "Cadastrar Funcionário".
Dicas: Use o hook useState para armazenar os valores dos campos. Serão necessários 4 variáveis de estado controlado: nome, email, cargo e objFuncionario.

//Para nome, email e cargo usaremos inputs do type text e email, com o evento onChange
//Para o botão usaremos o evento onClick e irá atualizar o estado do objFuncionario com os valores digitados nos inputs
*/

import { useState } from "react";

export default function Funcionario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cargo, setCargo] = useState("");
  const [objFuncionario, setObjFuncionario] = useState({});

  function funcionario1() {
    if(nome == "" || email == "" || cargo == "") {
      alert("por favor preencha todos os campos")
    }
    else {
      setObjFuncionario({nome, email, cargo})
      // limpar os inputs
      setNome("")
      setEmail("")
      setCargo("")
    }

  }

  return (
    <>
      <div>
        <div>
          <input type="text" onChange={(e) => setNome(e.target.value)} />
          <br />
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
          <br />
          <input type="text" onChange={(e) => setCargo(e.target.value)} />
          <br />
          <button onClick={funcionario1}>
            Cadastrar Funcionario
          </button>
        </div>
        {objFuncionario && (
          <div>
            <p>Name: {objFuncionario.nome} </p>
            <p>Email: {objFuncionario.email} </p>
            <p>Cargo: {objFuncionario.cargo} </p>
          </div>
        )}
      </div>
    </>
  );
}
