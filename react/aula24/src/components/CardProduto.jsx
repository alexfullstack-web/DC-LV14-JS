export default function CardProduto({
  imagem,
  nome,
  preco,
  descricao,
  promocao,
  desconto,
}) {
  return (
    <div>
      <img src={imagem} alt={nome} />
      <h2>{nome}</h2>
      {promocao && desconto > 0 && <p>{preco - (preco * desconto / 100)}</p>}
      {!promocao && <p>{preco}</p>}
      {promocao && desconto>0 ? <p>{preco -(preco * desconto / 100)}</p> : <p>{preco}</p>}
      <p>{descricao}</p>
    </div>
  );
}
