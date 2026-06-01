import acesa from '../assets/acesa.png'
import apagada from '../assets/apagada.png'
import { useState } from 'react'
function Atividade01() {
   const [lampada, setLampada] = useState(apagada)

   const bgApagada = 'bg-dark text-light min-vh-100 '
   const bgAcesa = 'bg-light text-dark min-vh-100 '

   return(
        <div className={lampada === apagada ? bgApagada : bgAcesa}>
            <h1>Atividade 01</h1>
            <img className='' src={lampada} alt="Lâmpada" />
            <button onClick={() => setLampada(lampada === apagada ? acesa : apagada)}> Acender lamapada </button>
            <button onClick={() => setLampada(apagada)}> Apagar lamapada </button>
        </div>
   )
   
      
   
}

export default Atividade01