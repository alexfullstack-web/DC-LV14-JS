import { useState, useContext } from "react";
import { ProdutosContext } from "../contextos/ProdutosContext";

export default function CadastroProduto() {
  const { adicionarProduto } = useContext(ProdutosContext);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  function cadastrar(e) {
    e.preventDefault();

    const novoProduto = {
      id: Date.now(),
      name,
      price,
      description,
      image
    };

    adicionarProduto(novoProduto);

    setName("");
    setPrice("");
    setDescription("");
    setImage("");
  }

  return (
    <div>
      <h1>Cadastrar Produto</h1>

      <form onSubmit={cadastrar}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Preço"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <textarea
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="text"
          placeholder="URL da imagem"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button type="submit">
          Cadastrar
        </button>
      </form>
    </div>
  );
}