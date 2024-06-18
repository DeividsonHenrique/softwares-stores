import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./Components/Container";
import ProdutoDetalhes from "./Components/ProdutoDetalhes";
import Contato from "./Pages/Contato";
import TodosProdutos from "./Pages/TodosProdutos";
import Carrinho from "./Pages/Carrinho";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Container />} />
        <Route path="/produtos/:id" element={<ProdutoDetalhes />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/todos_produtos" element={<TodosProdutos />} />
        <Route path="/carrinho" element={<Carrinho />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
