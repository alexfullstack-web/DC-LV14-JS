import { useContext } from "react";
import { ProdutosContext } from "../contextos/ProdutosContext";
import { Link } from "react-router-dom";


export default function Home() {
  
  return (
    <>
      <h1>Home</h1>
      <p>Página home do site, acessada na rota principal</p>
      import {Link} from "react-router-dom";
      <Link to="/">Home</Link>
      <Link to="/produtos">Produtos</Link>
      <Link to="/cadastro">Cadastro</Link>
    </>
  );
}
