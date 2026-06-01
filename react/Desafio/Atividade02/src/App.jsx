import { useState } from 'react'
import './App.css'
import ProductCard from './components/ProductCard'

function App() {
  const [count, setCount] = useState(0)
const products = [
    {
      id: 1,
      name: "Notebook Gamer",
      price: 4500,
      image: "https://placehold.co/300x200?text=Notebook",
    },
    {
      id: 2,
      name: "Mouse RGB",
      price: 150,
      image: "https://placehold.co/300x200?text=Mouse",
    },
    {
      id: 3,
      name: "Teclado Mecânico",
      price: 350,
      image: "https://placehold.co/300x200?text=Teclado",
    },
    {
      id: 4,
      name: "Monitor Ultrawide",
      price: 1800,
      image: "https://placehold.co/300x200?text=Monitor",
    },
  ];

  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  return (
    <>
    <div id="desafio02">
            <h1>Itens no carrinho: {cart.length}</h1>
    
            {cart.length === 0 ? (
              <p>Carrinho vazio</p>
            ) : (
              <p>Você possui itens no carrinho</p>
            )}
    
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>
    </>
  )
}

export default App
