import { useState } from 'react'
import acesa from './assets/acesa.png'
import apagada from './assets/apagada.png'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Atividade01 from './components/atividade01'
import Atividadde02 from './components/atividade02'




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
      <div id="atividade01" className='d-none'> 
        <Atividade01 />
      </div>
      <div id="atividade02" className='d-none'>
        <Atividadde02 senhaCorreta="olamundo123" />
      </div>
    </>
  )
}

export default App
