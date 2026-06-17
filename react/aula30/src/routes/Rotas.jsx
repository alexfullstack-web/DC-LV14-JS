import {Route, Routes} from "react-router-dom";

import Home from "../pages/Home";
import DetalheLivro from "../pages/DetalheLivro";
import PaginaNaoEncontrada from "../pages/PaginaNaoEncontrada";

export default function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/livros/:id/:cor" element={<DetalheLivro />} />
            <Route path="*" element={<PaginaNaoEncontrada />} />
        </Routes>
    );
}