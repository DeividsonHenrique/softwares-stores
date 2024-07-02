import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardContainer = styled.div`
  background-color: #333;
  height: 350px;
  width: 200px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  margin: 10px;
  box-shadow: 0px 0px 15px 1px #181818;

  @media (max-width: 1280px) {
    height: 270px;
    width: 140px;
  }

  @media (max-width: 992px) {
    height: 260px;
    width: 140px;
  }

  @media (max-width: 533px) {
    margin: 5px;
  }
`;

export const CardImage = styled.div`
  background-color: white;
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 150px;
    transition: 0.3s ease-in-out;
  }

  img:hover {
    transform: scale(1.03);
  }

  @media (max-width: 1280px) {
    height: 120px;

    img {
      height: 100px;
    }
  }

  @media (max-width: 992px) {
    height: 110px;

    img {
      height: 80px;
    }
  }
`;

export const CardTitle = styled.h5`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
  color: #fff;
  font-size: 1em;
  font-weight: 400;
  padding-block: 0.7rem;
  text-align: center;

  p {
    margin-inline: 5px;
    font-size: 0.8rem;
    font-weight: 300;
    color: aqua;
  }

  @media (max-width: 1280px) {
    font-size: 0.8rem;
    margin-bottom: -5px;

    p {
      font-size: 0.6rem;
    }
  }

  @media (max-width: 992px) {
    padding-block: 0.4rem;
  }
`;

export const Plataform = styled.div`
  text-align: center;
  color: aqua;
  font-size: 0.8rem;
  padding-bottom: 0.5rem;

  img {
    height: 20px;
    width: 20px;
    margin-inline: 1px;
    filter: brightness(0%) invert(80%);
  }

  @media (max-width: 1280px) {
    padding-bottom: 0.2rem;

    img {
      height: 15px;
      width: 15px;
    }
  }

  @media (max-width: 992px) {
    padding-block: 0.3rem;
  }
`;

export const Price = styled.p`
  text-align: center;
  color: lightgreen;

  @media (max-width: 1280px) {
    font-size: 0.8rem;
  }
`;

export const Assess = styled.p`
  position: absolute;
  width: 100%;
  height: 30px;
  top: 180px;
  left: 0;
  text-align: center;
  color: goldenrod;
  font-size: 1rem;
  padding-block: 0.5rem;
  background-color: #181818;

  @media (max-width: 1280px) {
    top: 120px;
  }

  @media (max-width: 992px) {
    top: 110px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.9rem;
  }
`;

export const StyledButton = styled(Link)`
  width: 80%;
  margin: 0 auto;
  height: 30px;
  font-size: 1.2rem;
  background-color: green;
  cursor: pointer;
  margin-top: 5px;
  border-radius: 10px;
  color: white;
  font-weight: 500;
  transition: 0.3s all;
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  text-decoration: none;
  text-align: center;
  line-height: 30px;

  &:hover {
    background-color: darkgreen;
  }

  @media (max-width: 1280px) {
    font-size: 1rem;
    height: 25px;
    line-height: 25px;
    width: 90%;
  }
`;
