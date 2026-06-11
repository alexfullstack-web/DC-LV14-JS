import { useContext, useState } from "react";
import { UsuariosContexto } from "../contexto/UsuariosContexto.jsx";

export default function CadastroUsuario() {
  const { usuarios, postUsuario } = useContext(UsuariosContexto);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [cep, setCep] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const endereco = {
      logradouro,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
      cep,
    };

    if (!nome || !email || !senha || !confirmaSenha || !endereco) {
      alert("Preencha os campos");
      return;
    }

    if (senha === confirmaSenha) {
      alert("Senha não confere");
    }

    postUsuario(nome, email, senha, endereco);

    setNome("");
    setEmail("");
    setSenha("");
    setConfirmaSenha("");
    setLogradouro("");
    setNumero("");
    setComplemento("");
    setBairro("");
    setCidade("");
    setEstado("");
    setCep("");
  }

  return (
    <div>
      <h1>Cadastro de Usuário</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirme a Senha"
          value={confirmaSenha}
          onChange={(e) => setConfirmaSenha(e.target.value)}
        />

        <input
          type="text"
          placeholder="Logradouro"
          value={logradouro}
          onChange={(e) => setLogradouro(e.target.value)}
        />

        <input
          type="text"
          placeholder="Número"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />

        <input
          type="text"
          placeholder="Complemento"
          value={complemento}
          onChange={(e) => setComplemento(e.target.value)}
        />

        <input
          type="text"
          placeholder="Bairro"
          value={bairro}
          onChange={(e) => setBairro(e.target.value)}
        />

        <input
          type="text"
          placeholder="Cidade"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
        />

        <input
          type="text"
          placeholder="Estado"
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
        />

        <input
          type="text"
          placeholder="CEP"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </form>

      <ul>
        {usuarios?.map((usuario) => (
          <li key={usuario.id}>{usuario.nome}</li>
        ))}
      </ul>
    </div>
  );
}
