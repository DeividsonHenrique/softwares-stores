import styles from "./PrincipalCard.module.css";
import { FaStar } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
  "ios.png": iosImg
}

function PrincipalCard() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const buscarProdutos = async () => {
      const response = await fetch('/data/PrincipaisProdutos.json');
      const data = await response.json();
      setProdutos(data);
    };

    buscarProdutos();
  }, []);

  return produtos.map((produto) => (
    <> 
    <div className={styles.card} key={produto.id}>
      
      <div className={styles.imagem}><img src={produto.imagem} alt={produto.nome} /></div>

      <h5>
        {produto.nome} <p>{produto.versao}</p>{" "}
      </h5>

      <div className={styles.plataforma}>
            {produto.sistema_operacional.map((imgName, index) => (
              <img key={index} src={imagensSistemaOperacional[imgName]} alt={`${produto.nome} - ${index}`} />
            ))}
          </div>

      <p className={styles.preco}>{produto.preco}</p>

      <p className={styles.avaliacao}>
        <FaStar />
        {produto.avaliacao}
      </p>

      <Link to={`/produtos/${produto.id} ${produto.nome}`} className={styles.btn}>
        Comprar
      </Link>
      
    </div>
    </>
  ));
}

export default PrincipalCard;
