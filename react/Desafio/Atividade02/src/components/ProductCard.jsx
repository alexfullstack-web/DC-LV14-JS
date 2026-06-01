export default function ProductCard({
  product,
  addToCart
}) {
  return (
    <div>
      <img
        src={product.image}
        alt={product.name}
      />

      <h2>{product.name}</h2>

      <p>R$ {product.price}</p>

      <button
        onClick={() => addToCart(product)}
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
}