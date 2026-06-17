import './App.css'
import { BrowserRouter, Link } from 'react-router-dom'
import Layout from './components/Layout'
import Rotas from './routes/rotas'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Rotas />
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
