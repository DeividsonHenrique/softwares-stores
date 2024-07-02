/* eslint-disable react/prop-types */
import styles from "./Card.module.css";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

import windowsImg from "/images/icons/windows.png";
import macImg from "/images/icons/macos.png";
import linuxImg from "/images/icons/linux.png";
import androidImg from "/images/icons/android.png";
import iosImg from "/images/icons/ios.png";
import {CardContainer, CardImage, CardTitle, Plataform, Price, Assess} from "./styles"

const imagensSistemaOperacional = {
  "windows.png": windowsImg,
  "macos.png": macImg,
  "linux.png": linuxImg,
  "android.png": androidImg,
  "ios.png": iosImg,
};

function Card({ produto }) {
  return (
    <CardContainer className={styles.card} key={produto.id}>
      <CardImage className={styles.imagem}>
        <img src={produto.imagem} alt={produto.nome} />
      </CardImage>

      <CardTitle>
        {produto.nome} <p>{produto.versao}</p>
      </CardTitle>

      <Plataform className={styles.plataforma}>
        {produto.sistema_operacional.map((imgName, index) => (
          <img
            key={index}
            src={imagensSistemaOperacional[imgName]}
            alt={`${produto.nome} - ${index}`}
          />
        ))}
      </Plataform>

      <Price className={styles.preco}>{produto.preco}</Price>

      <Assess className={styles.avaliacao}>
        <FaStar />
        {produto.avaliacao}
      </Assess>

      <Link
        to={`/produtos/${produto.id} ${produto.nome}`}
        className={styles.btn}
      >
        Comprar
      </Link>
    </CardContainer>
  );
}

export default Card;
