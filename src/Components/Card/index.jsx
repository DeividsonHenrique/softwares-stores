/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
import windowsImg from "/images/icons/windows.png";
import macImg from "/images/icons/macos.png";
import linuxImg from "/images/icons/linux.png";
import androidImg from "/images/icons/android.png";
import iosImg from "/images/icons/ios.png";
import {CardContainer, CardImage, CardTitle, Plataform, Price, Assess, StyledButton} from "./styles"

const imagensSistemaOperacional = {
  "windows.png": windowsImg,
  "macos.png": macImg,
  "linux.png": linuxImg,
  "android.png": androidImg,
  "ios.png": iosImg,
};

function Card({ produto }) {
  return (
    <CardContainer key={produto.id}>
      <CardImage>
        <img src={produto.imagem} alt={produto.nome} />
      </CardImage>

      <CardTitle>
        {produto.nome} <p>{produto.versao}</p>
      </CardTitle>

      <Plataform>
        {produto.sistema_operacional.map((imgName, index) => (
          <img
            key={index}
            src={imagensSistemaOperacional[imgName]}
            alt={`${produto.nome} - ${index}`}
          />
        ))}
      </Plataform>

      <Price>{produto.preco}</Price>

      <Assess>
        <FaStar />
        {produto.avaliacao}
      </Assess>

      <StyledButton
        to={`/produtos/${produto.id} ${produto.nome}`}
      >
        Comprar
      </StyledButton>
    </CardContainer>
  );
}

export default Card;
