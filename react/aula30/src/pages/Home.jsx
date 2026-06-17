
import { TesteSyled } from "../components/TesteStyled";
import { ExemploStyled } from "../components/ExemploStyled";
import CardProduto from "../components/CardProdutos";

export default function Home() {
   


    return (
        <div>
            <h1>Pagina Principal</h1>
            {/* <TesteSyled texto='Olá mundo!'/> */}
            <ExemploStyled titulo='Exemplo 1' texto1='Estamos em intervalo' texto2='Voltaremos de 20:25'/>

            <CardProduto
                id='1'
                nome='O Senhor dos Aneis'
                autor='JRR Tolkien'
                categoria='Fantasia'
                preco='R$ 100,00'
                img='https://placehold.co/200x300'
            />
            <CardProduto
                id='2'
                nome='O Senhor dos Aneis'
                autor='JRR Tolkien'
                categoria='Fantasia'
                preco='R$ 100,00'
                img='https://placehold.co/200x300'
            />
            <CardProduto
                id='3'
                nome='O Senhor dos Aneis'
                autor='JRR Tolkien'
                categoria='Fantasia'
                preco='R$ 100,00'
                img='https://placehold.co/200x300'
            />
            
        </div>
    );
}