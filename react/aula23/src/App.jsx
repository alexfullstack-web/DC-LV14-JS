import { useState } from 'react'
import './App.css'
import MeuPrimeiroComponente from './components/MeuPrimeiroComponente'
import InfoUsuario from './components/InfoUsuario'
import Soma from './components/Soma'
import ComponenteComProps from './components/ComponenteComProps'
import ExemploSecao from './components/ExemploSecao'
import{ ExemploSecao2 } from './components/ExemploSecao'
import { ExemploComponenteComPropsDesestruturado } from './componentes/ComponenteComProps'
import InfoUsuarioProps from './components/InfoUsuarioProps'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id='Exemplos'>
        <MeuPrimeiroComponente/>
        <h1>Outro Título</h1>

        <Soma/>
        <Soma/>


        <ComponenteComProps titulo="Primeiro Componente" subtitulo="Subtítulo do primeiro componente" texto="Texto do primeiro componente em seu subtítulo"/>

        <ComponenteComProps titulo="Teste 2" subtitulo="Subtítulo do segundo componente" texto="Texto do segundo componente em seu subtítulo no segundo teste"/>

        <ExemploComponenteComPropsDesestruturado
        titulo="Teste 2" subtitulo="Subtítulo do segundo componente" texto="Texto do segundo componente em seu subtítulo no segundo teste"/>

      </div>

      <div id='Atividade1'>
        <InfoUsuario/>
        <InfoUsuario/>
      </div>


      <div id='Atividade2'>

        <InfoUsuarioProps nome="João" idade="30" profissao="Engenheiro de Software" email="5KXfH@example.com"/>
        <InfoUsuarioProps nome="Maria" idade="25" profissao="Desenvolvedora Front-End" email="5KXfH@example.com"/>
        <InfoUsuarioProps nome="Pedro" idade="35" profissao="Desenvolvedor Back-End" email="5KXfH@example.com"/>
      </div>


      <div id='ExemploSecao'>
        <ExemploSecao titulo="Primeira seção" cor='azul' > 

        <p>Primeira tag filho</p>
        <p>Segunda tag filho</p>
        <p>Terceira tag filho</p>

        </ExemploSecao>


        <ExemploSecao2 titulo="Segunda seção" cor='azul' >

        <p>Primeira tag filho</p>
        <p>Segunda tag filho</p>
        <p>Terceira tag filho</p>

        </ExemploSecao2>
      </div>

      

      




    </>
  )
}

export default App