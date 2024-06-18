/* eslint-disable react-hooks/rules-of-hooks */
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./ProdutoDetalhes.module.css";
import Header from "../Header";
import { FaStar } from "react-icons/fa";
import Footer from "../Footer";
// import ReactImageMagnify from "react-image-magnify";
import Quantidade from "../Quantidade";
import { Fade, Zoom } from "react-awesome-reveal";
import ImageMagnifier from "../ImageMagnifier";


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
      const response = await fetch('/data/Produtos.json');
      const data = await response.json();
      const produtoEncontrado = data.find((p) => p.id === parseInt(id));
      setProduto(produtoEncontrado);
    };

    buscarProduto();
  }, [id]);

  if (!produto) {
    return (
      <div className={styles.carregando}>
        <p></p>
      </div>
    );
  }

  return (
    <>
    
    
    <Header/> 
      <Fade duration={750} cascade delay={300}>
      <div key={produto.id} className={styles.detalhes}>
        <div className={styles.quadro_1}>
        <ImageMagnifier src={produto.imagem}  />
          {/* <ReactImageMagnify
            {...{
              smallImage: {
                alt: produto.nome,
                isFluidWidth: true,
                src: produto.imagem,
              },
              largeImage: {
                src: produto.imagem,
                width: 800,
                height: 800,
              },
              enlargedImagePosition: "over",
              enlargedImageContainerDimensions: {
                width: 600,
                height: 600,
              },
            }}
          /> */}
          
        </div>
        <div className={styles.quadro_2}>
          <h1 className={styles.titulo}>{produto.nome}</h1>
          <p className={styles.versao}>{produto.versao}</p>

          <p className={styles.preco}>{produto.preco}</p>

          <p className={styles.descricao}>{produto.descricao}</p>

          <div className={styles.frete}>
            Frete Gratis
            <img
              src="/images/compras/frete.png"
              alt="frete-gratis"
            />
          </div>

          <div className={styles.plataforma}>
            Sistema operacional:
            {produto.sistema_operacional.map((imgName, index) => (
              <img
                key={index}
                src={imagensSistemaOperacional[imgName]}
                alt={`${produto.nome} - ${index}`}
              />
            ))}
          </div>

          <p className={styles.avaliacao}>
            Avaliações:
            <FaStar className={styles.star} />
            {produto.avaliacao}
          </p>

          <div className={styles.quadro_3}>
            <Quantidade />
            <Link
              to={produto.link_compra}
              target={"_blank"}
              className={styles.botao_comprar}
            >
              Comprar
            </Link>
            <Link className={styles.botao_comprar}>Adicionar ao carrinho</Link>
          </div>

          <div className={styles.pagamentos}>
            <h3>Formas de pagamento:</h3>

            <div className={styles.bandeiras}>
              <img
                src="/images/compras/mercadoPago.svg" alt="mercado-pago"
              />
              <img
                src="/images/compras/visa.svg" alt="visa"
              />
              <img
                src="/images/compras/mastercard.svg"
                alt="mastercard"
              />
              <img
                src="/images/compras/amex.svg"
                alt="amex"
              />
              <img
                src="/images/compras/diners.svg"
                alt="eloDiners"
              />
              <img
                src="/images/compras/pix.svg"
                alt="pix"
              />
            </div>

            <ul>
              <li>10x sem juros</li>
              <li>5% OFF a vista no pix</li>
            </ul>
          </div>
        </div>
        
      </div>
      
      </Fade>
      <Zoom duration={750} delay={250}>
      <hr className={styles.divisor} />
      </Zoom>

      <div className={styles.geral}>
        <Fade duration={750} triggerOnce>
        <p className={styles.titulo_geral}>Visão geral:</p>
        <p className={styles.descricao}>{produto.descricao_geral}</p>
        </Fade>
        <div className={styles.carateristicas}>
          <Fade duration={750} triggerOnce>
            <h3>Características:</h3>
          </Fade>
          <ul>
            <Fade duration={250} cascade direction="up">
            {Object.entries(produto.caracteristicas).map(
              ([key, value], index) => (
                <li key={key}>
                  {index + 1} - {value}
                </li>
              )
            )}
            </Fade>
          </ul>
        </div>
        <Fade duration={750} direction="left" className={styles.section}>
        <div className={styles.imagens_exemplos}>
          <div className={styles.imagem}>
          <ImageMagnifier src={produto.imagens_exemplos[0]}  />
            {/* <ReactImageMagnify
              {...{
                smallImage: {
                  alt: produto.nome,
                  isFluidWidth: true,
                  src: produto.imagens_exemplos[0],
                },
                largeImage: {
                  src: produto.imagens_exemplos[0],
                  width: 1000,
                  height: 750,
                },
                enlargedImagePosition: "over",
                enlargedImageContainerDimensions: {
                  width: 1000,
                  height: 750,
                },
              }}
            /> */}
          </div>
          <div className={styles.imagem}>
          <ImageMagnifier src={produto.imagens_exemplos[1]}  />
            {/* <ReactImageMagnify
              {...{
                smallImage: {
                  alt: produto.nome,
                  isFluidWidth: true,
                  src: produto.imagens_exemplos[1],
                },
                largeImage: {
                  src: produto.imagens_exemplos[1],
                  width: 1000,
                  height: 750,
                },
                enlargedImagePosition: "over",
                enlargedImageContainerDimensions: {
                  width: 1000,
                  height: 750,
                },
              }}
            /> */}
          </div>

          <div className={styles.imagem}>
            <ImageMagnifier src={produto.imagens_exemplos[2]}  />
          </div> 
        </div>
        </Fade>
      </div>
      
      <Fade>
      <Footer />
      </Fade>
      
      
      </>
  );
}

export default ProdutoDetalhes;
