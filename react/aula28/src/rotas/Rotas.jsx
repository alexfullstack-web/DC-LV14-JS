import Home from "../paginas/Home";
import ListaProdutos from "../paginas/ListrasProdutos";
import PaginaNaoEncontrada from "../paginas/PaginasNaoEncontrada";
import CadastrarUsuario from "../paginas/ListrasProdutos";
import CadastrosProtudos from "../paginas/CadastrosProtudos";

//componentes do react-router-dom
import { Route, Routes } from "react-router-dom";

export default function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<ListaProdutos />} />
            <Route path="*" element={<PaginaNaoEncontrada />} />
            <Route path="/cadastro" element={<CadastrarUsuario />} />
            <Route path="/cadastro-produto" element={<CadastrosProtudos />} />
        </Routes>
    );
}