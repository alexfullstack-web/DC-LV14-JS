import { useState } from "react";
import "./App.css";
import UserCard from "./components/UserCard";
import Header from "../../Atividade03/src/components/Header";
import FilterButtons from "../../Atividade03/src/components/FilterButtons";
import MovieCard from "../../Atividade03/src/components/MovieCard";

function App() {
  const [count, setCount] = useState(0);

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
      <div id="desafio01">
        <h2>Card de Perfil de Usuário</h2>
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
    </>
  );
}

export default App;
