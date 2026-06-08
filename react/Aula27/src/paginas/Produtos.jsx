import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProdutosContext } from "../contextos/ProdutosContext";

export default function Produtos() {
  const { produtos } = useContext(ProdutosContext);

  return (
    <>
      <h1>Produtos</h1>

      <div className="cards">
        {produtos.map((produto) => (
          <div key={produto.id} className="card">

            <img
              src={produto.image}
              alt={produto.name}
              width="200"
            />

            <h3>
              <Link to={`/produtos/${produto.id}`}>
                {produto.name}
              </Link>
            </h3>

            <p>R$ {produto.price}</p>

          </div>
        ))}
      </div>
    </>
  );
}