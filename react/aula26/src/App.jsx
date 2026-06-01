import { useState } from 'react'
import './App.css'
import acesa from './assets/acesa.png'
import apagada from './assets/apagada.png'

function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }



  return (
    <>
      <div id="aula26">
        <h1>aula 26</h1>
      </div>
      <div id="atividade01"> 
        <img src={count % 2 === 0 ? apagada : acesa} alt="Lâmpada" />
        <button onClick={handleClick}>{count % 2 === 0 ? 'Acender' : 'Apagar'}</button>
      </div>
    </>
  )
}

export default App
