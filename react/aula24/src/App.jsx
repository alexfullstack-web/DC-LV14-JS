import { use, useState } from "react";
import "./App.css";
import CardProduto from "./components/CardProduto";
import Tabuada from "./components/Tabuada";
import ListagemProdutos from "./components/listarProdutos";
import Funcionario from "./components/fucionario";
import { UserCard } from "./components/Usercard";

function App() {
  const [count, setCount] = useState(0);

  const produtos = [
    {
      imagem: "https://placehold.co/400x400",
      nome: "Produto 1",
      preco: 100,
      descricao: "Descrição do produto 1",
      promocao: true,
      desconto: 10,
    },
    {
      imagem: "https://placehold.co/400x400",
      nome: "Produto 2",
      preco: 200,
      descricao: "Descrição do produto 2",
      promocao: false,
      desconto: 0,
    },
    {
      imagem: "https://placehold.co/400x400",
      nome: "Produto 3",
      preco: 300,
      descricao: "Descrição do produto 3",
      promocao: true,
      desconto: 20,
    },
  ];

  const users = [
    {
      id: 1,
      name: "Carlos Henrique",
      profession: "Desenvolvedor Front-end",
      image: "https://placehold.co/200x200?text=Carlos",
      online: true,
    },
    {
      id: 2,
      name: "Marina Silva",
      profession: "UI Designer",
      image: "https://placehold.co/200x200?text=Marina",
      online: false,
    },
    {
      id: 3,
      name: "Lucas Almeida",
      profession: "Back-end Developer",
      image: "https://placehold.co/200x200?text=Lucas",
      online: true,
    },
  ];

  return (
    <>
      <h1>Aula24</h1>
      <div id="atividade03" className="oculta">
        <CardProduto
          imagem="https://placehold.co/400x400"
          nome="Produto 1"
          preco={10.0}
          descricao="Descrição do produto 1"
          promocao={true}
          desconto={10}
        />
        <CardProduto
            imagem="https://placehold.co/400x400"
            nome="Produto 2"
            preco={200}
            descricao="Descrição do produto 2"
            promocao={false}
          desconto={0}
        />
      </div>
      <div id="atividade01" className="oculta">
        <Tabuada />
      </div>

      <div id="atividade02" className="oculta">
        <ListagemProdutos categoria="Categoria 1" arrayProdutos={produtos} />
      </div>

      <div id="atividade03" className="oculta">
        <Funcionario />
      </div>

      <div id="desafio">
        <div id="desafio01">
          {users.map((user) => (
            <UserCard
              key={user.id}
              name={user.name}
              profession={user.profession}
              image={user.image}
              online={user.online}
            />
          ))}
        </div>
        <div id="desafio02"></div>
      </div>
    </>
  );
}

export default App;
