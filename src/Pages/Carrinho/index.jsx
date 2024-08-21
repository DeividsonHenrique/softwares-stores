import Header from "../../Components/Header";
import { Container } from "./styles";
import Quantidade from "../../Components/Quantidade";
import ReactImageZoom from 'react-image-zoom';
function Carrinho() {

 
  const zoomProps = {
    width: 200, // Largura da imagem no container
    img: '/images/container/logo.svg', // Caminho da imagem do produto
    zoomPosition: 'original', // A posição do zoom será sobre a imagem original
    offset: { vertical: 0, horizontal: 0 }
  };

  return (
    <>
      <Header />
      <Container>
        <h2>Shopping Cart</h2>
        <span>Em Construção....</span>
        <div>
        <ReactImageZoom {...zoomProps} />
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
