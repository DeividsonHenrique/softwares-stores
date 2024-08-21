/* eslint-disable react-hooks/rules-of-hooks */
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "react-medium-image-zoom/dist/styles.css";
import Header from "../Header";
import Footer from "../Footer";
import Quantidade from "../Quantidade";
import { Fade, Zoom as RevealZoom } from "react-awesome-reveal";
import Zoom from "react-medium-image-zoom";
import { FaShoppingCart } from "react-icons/fa";
import {
  Details,
  ImageContainer,
  // ImageProduct,
  InfoContainer,
  Name,
  Version,
  Price,
  Description,
  Free,
  Platform,
  PlatformImg,
  Assess,
  Star,
  Payment,
  Buy,
  AddToCart,
  FormsPayment,
  Flags,
  InfoToPay,
  Line,
  LineProduct,
  About,
  AboutTitle,
  Caracters,
  CaractersTitle,
  CaractersUl,
  CaractersLi,
  EffectZoom,
  ImageTitle,
  Container,
  ImageExample,
  LoadingComponent,
  Loading,
} from "./styles";
// import ImageMagnifier from "../ImageMagnifier";
import ReactImageZoom from 'react-image-zoom';

// Imagens locais

import windowsImg from "/images/icons/windows.png";
import macImg from "/images/icons/macos.png";
import linuxImg from "/images/icons/linux.png";
import androidImg from "/images/icons/android.png";
import iosImg from "/images/icons/ios.png";

const imagensSistemaOperacional = {
  "windows.png": windowsImg,
  "macos.png": macImg,
  "linux.png": linuxImg,
  "android.png": androidImg,
  "ios.png": iosImg,
};

function ProdutoDetalhes() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    const buscarProduto = async () => {
      const response = await fetch("/data/Produtos.json");
      const data = await response.json();
      const produtoEncontrado = data.find((p) => p.id === parseInt(id));
      setProduto(produtoEncontrado);
    };

    buscarProduto();
  }, [id]);

  if (!produto) {
    return (
      <LoadingComponent>
        <Loading></Loading>
      </LoadingComponent>
    );
  }

  const zoomProps = { width: 400, height: 400, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9AbL2ho8S25hU5uzbfg_QgGdhwv2pDXxVdA&s", zoomPosition: 'original' };


  return (
    <>
      <Header />
      <Fade duration={750} cascade delay={300}>
        <Details key={produto.id}>
          <ImageContainer>

            {/* Renderiza a imagem com a funcionalidade de zoom */}
          <ReactImageZoom {...zoomProps} />
           
            
          </ImageContainer>
          <LineProduct />
          <InfoContainer>
            <Name>{produto.nome}</Name>
            <Version>{produto.versao}</Version>

            <Price>{produto.preco}</Price>

            <Description>{produto.descricao}</Description>

            <Free>
              Frete Gratis
              <img src="/images/compras/frete.png" alt="frete-gratis" />
            </Free>

            <Platform>
              Sistema operacional:
              {produto.sistema_operacional.map((imgName, index) => (
                <PlatformImg
                  key={index}
                  src={imagensSistemaOperacional[imgName]}
                  alt={`${produto.nome} - ${index}`}
                />
              ))}
            </Platform>

            <Assess>
              Avaliações:
              <Star />
              {produto.avaliacao}
            </Assess>

            <Payment>
              <Quantidade />
              <Buy to={produto.link_compra} target={"_blank"}>
                Comprar
              </Buy>
              <AddToCart>
                <FaShoppingCart />
              </AddToCart>
            </Payment>

            <FormsPayment>
              <h3>Formas de pagamento:</h3>

              <Flags>
                <img src="/images/compras/mercadoPago.svg" alt="mercado-pago" />
                <img src="/images/compras/visa.svg" alt="visa" />
                <img src="/images/compras/mastercard.svg" alt="mastercard" />
                <img src="/images/compras/amex.svg" alt="amex" />
                <img src="/images/compras/diners.svg" alt="eloDiners" />
                <img src="/images/compras/pix.svg" alt="pix" />
              </Flags>

              <ul>
                <InfoToPay>10x sem juros</InfoToPay>
                <InfoToPay>5% OFF a vista no pix</InfoToPay>
              </ul>
            </FormsPayment>
          </InfoContainer>
        </Details>
      </Fade>
      <RevealZoom duration={750} delay={250}>
        <Line />
      </RevealZoom>

      <About>
        <Fade duration={750} triggerOnce>
          <AboutTitle>Visão geral:</AboutTitle>
          <Description>{produto.descricao_geral}</Description>
        </Fade>
        <Caracters>
          <Fade duration={750} triggerOnce>
            <CaractersTitle>Características:</CaractersTitle>
          </Fade>
          <CaractersUl>
            <Fade duration={250} cascade direction="up">
              {Object.entries(produto.caracteristicas).map(
                ([key, value], index) => (
                  <CaractersLi key={key}>
                    {index + 1} - {value}
                  </CaractersLi>
                )
              )}
            </Fade>
          </CaractersUl>
        </Caracters>
        <EffectZoom duration={750}>
          <ImageTitle>Imagens exemplo:</ImageTitle>
          <Container>
            <Zoom>
              <ImageExample src={produto.imagens_exemplos[0]} alt="imagens" />
            </Zoom>

            <Zoom>
              <ImageExample src={produto.imagens_exemplos[1]} alt="imagens" />
            </Zoom>

            <Zoom>
              <ImageExample src={produto.imagens_exemplos[2]} alt="imagens" />
            </Zoom>
          </Container>
        </EffectZoom>
      </About>

      <Fade>
        <Footer />
      </Fade>
    </>
  );
}

export default ProdutoDetalhes;
