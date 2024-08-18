import Header from "../../Components/Header";
import { Container } from "./styles";
import Quantidade from "../../Components/Quantidade";

function Carrinho() {
  return (
    <>
      <Header />
      <Container>
        <h2>Shopping Cart</h2>
        <span>Em Construção....</span>
        <div>
          <img src="" alt="" />
          <div>
            <p>Descripition</p>
            <Quantidade />
            <p>Preço</p>
            <p>Frete</p>
            
          </div>
          <button>Remover</button>
          <button>Salvar</button>
        </div>
      </Container>
    </>
  );
}

export default Carrinho;
