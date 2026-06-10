import { useState } from "react";

export default function CadastrosProtudos() {
    const [produtos, setProdutos] = useState("");
    const [descricao, setImagem] = useState("");
    const [categoria, setDescricao] = useState("");
    const [url, setUrl] = useState("");
    const [preco, setPreco] = useState("");

    async function cadastrarProduto(produto) {
        const response = await fetch("https://fakestoreapi.com/products", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(produto),
        });

        if (response.status === 201) {
            const dados = await response.json();
            console.log(dados);
            setProdutos("");
            setImagem("");
            setDescricao("");
            setUrl("");
            setPreco("");
        }

        if (response.status === 400) {
            const dados = await response.json();
            console.log(dados);
        }

    }
    return(
        <>
        <form action="" onSubmit={cadastrarProduto}>
            <input type="text" placeholder="Nome do produto" value={setProdutos} onChange={(e) => setProdutos(e.target.value)}  />
            <input type="text" placeholder="Descricao do produto" value={setImagem} onChange={(e) => setImagem(e.target.value)} />
            <input type="text" placeholder="Categoria do produto" value={setDescricao} onChange={(e) => setDescricao(e.target.value)} />
            <input type="url" placeholder="Url do produto" value={setUrl} onChange={(e) => setUrl(e.target.value)} />
            <input type="number" placeholder="Preco do produto" value={setPreco} onChange={(e) => setPreco(e.target.value)} />
            <button type="submit">Cadastrar</button>
        </form>
        </>
    )
}