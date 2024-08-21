import styled, { keyframes } from "styled-components";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Zoom } from "react-awesome-reveal";

const LoadingCircle = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

export const LoadingComponent = styled.div`
  font-size: 2rem;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const Loading = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 150px;
  width: 150px;
  background-color: black;
  border-radius: 50%;
  overflow: hidden;

  &::after,
  &::before {
    position: absolute;
    content: "";
    height: 300px;
    width: 100px;
    background: linear-gradient(90deg, transparent, red, transparent);
    animation: ${LoadingCircle} 0.5s linear infinite;
  }

  &::before {
    background: #242424;
    height: 140px;
    width: 140px;
    z-index: 1;
    animation: none;
    border-radius: 50%;
  }
`;

export const Details = styled.div`
  min-height: 100vh;
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1366px) {
    font-size: 0.8rem;
    margin-block: 10px 15px;
  }

  @media (max-width: 992px) {
    width: 95%;
    margin-block: 10px 15px;
  }

  @media (max-width: 540px) {
    width: 90%;
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 50px;
  // background-color: white;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 1px #181818;
  border: 1px solid salmon;

  @media (max-width: 1366px) {
    width: 350px;
    height: 350px;
  }

  @media (max-width: 992px) {
    width: 250px;
    height: 250px;
    margin-right: 20px;
  }

  @media (max-width: 540px) {
    margin: 0px;
  }

  @media (max-width: 400px) {
    width: 200px;
    height: 200px;
    margin: 0px;
  }
`;

export const ImageProduct = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
`;

export const InfoContainer = styled.div`
  width: 40%;

  @media (max-width: 1366px) {
    width: 50%;
  }

  @media (max-width: 540px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Name = styled.h1`
  color: white;
  text-align: center;
  display: inline-block;

  @media (max-width: 1366px) {
    font-size: 1.5rem;
  }

  @media (max-width: 650px) {
    font-size: 1rem;
  }
`;

export const Version = styled.p`
  color: aqua;
  text-align: center;
  display: inline-block;
  margin-left: 20px;

  @media (max-width: 1366px) {
    font-size: 0.8rem;
  }

  @media (max-width: 650px) {
    font-size: 0.5rem;
  }

  @media (max-width: 540px) {
    font-size: 0.5rem;
    margin-block: 5px 0px;
  }
`;

export const Price = styled.p`
  color: lightgreen;
  font-size: 2rem;
  margin-block: 20px;

  @media (max-width: 1366px) {
    font-size: 1.5rem;
  }

  @media (max-width: 650px) {
    font-size: 1rem;
    margin-block: 5px 0px;
  }

  @media (max-width: 400px) {
    font-size: 0.8rem;
  }
`;

export const Description = styled.p`
  color: white;
  text-align: start;
  margin-block: 20px;

  &:last-child {
    text-indent: 20px;
  }

  @media (max-width: 992px) {
    font-size: 0.7rem;
  }

  @media (max-width: 650px) {
    font-size: 0.7rem;
  }

  @media (max-width: 540px) {
    text-align: center;
  }

  @media (max-width: 400px) {
    margin-block: 10px;
  }
`;

export const Free = styled.p`
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: green;

  @media (max-width: 992px) {
    img {
      width: 40px;
      height: 40px;
    }
  }

  @media (max-width: 400px) {
    img {
      width: 30px;
      height: 30px;
      margin-left: -30px;
    }
  }
`;

export const Platform = styled.div`
  display: flex;
  align-items: center;
  color: red;
  margin-block: 20px;

  @media (max-width: 1366px) {
    margin-block: 10px 15px;
  }

  @media (max-width: 650px) {
    margin-block: 5px 5px;
  }
`;

export const PlatformImg = styled.img`
  height: 20px;
  width: 20px;
  margin-inline: 5px;
  filter: brightness(0%) invert(80%);

  &:first-child {
    margin-left: 10px;
  }

  @media (max-width: 650px) {
    width: 15px;
    height: 15px;
  }
`;

export const Assess = styled.p`
  color: gold;
`;

export const Star = styled(FaStar)`
  margin-left: 5px;
`;

export const Payment = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: start;
  align-items: center;

  @media (max-width: 540px) {
    justify-content: center;
  }

  @media (max-width: 400px) {
    height: 50px;
  }
`;

export const Buy = styled(Link)`
  background-color: green;
  text-decoration: none;
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 1.2rem;
  margin: 0px 5px;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: darkgreen;
  }

  @media (max-width: 1366px) {
    font-size: 1rem;
    padding: 10px 15px;
    margin: 0px 5px;
  }

  @media (max-width: 650px) {
    font-size: 0.8rem;
    padding: 8px 10px;
    margin: 0px 5px;
  }
`;

export const AddToCart = styled(Link)`
  background-color: green;
  color: white;
  padding: 12px 20px;
  border-radius: 10px;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: darkgreen;
  }

  @media (max-width: 1366px) {
    font-size: 1rem;
  }

  @media (max-width: 992px) {
    padding: 12px 15px;
    font-size: 1rem;
  }

  @media (max-width: 650px) {
    padding: 9px 15px;
    font-size: 0.8rem;
  }
`;

export const FormsPayment = styled.div`
  width: 50%;

  h3 {
    color: #ffffff;
    margin-bottom: 20px;
  }

  @media (max-width: 650px) {
    width: 100%;
  }

  @media (max-width: 540px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 400px) {
    font-size: 0.6rem;

    h3 {
      margin-bottom: 5px;
    }
  }
`;

export const Flags = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 992px) {
    img {
      width: 30px;
      height: 30px;
    }
  }

  @media (max-width: 540px) {
    img {
      margin-bottom: 5px;
    }
  }

  @media (max-width: 400px) {
    img {
      width: 20px;
      height: 20px;
      margin-bottom: 5px;
    }
  }
`;

export const InfoToPay = styled.li`
  list-style: none;
  margin-block: 10px;
  color: white;

  @media (max-width: 540px) {
    display: inline;

    &:first-child {
      margin-right: 10px;
    }
  }
`;

export const LineProduct = styled.div`
  @media (max-width: 540px) {
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, #fff, transparent);
    margin: 10px 0px;
  }
`;

export const Line = styled.hr`
  width: 90%;
  margin: 0 auto;
  height: 3px;
  border: none;
  background-image: linear-gradient(90deg, transparent, red, transparent);
  margin-bottom: 50px;
`;

export const About = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const AboutTitle = styled.h3`
  color: #ffffff;
  text-align: center;
  width: 100%;
  font-size: 1.25rem;

  @media (max-width: 992px) {
    font-size: 1rem;
  }
`;

export const Caracters = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-bottom: 50px;

  @media (max-width: 992px) {
    width: 120%;
  }
`;

export const CaractersTitle = styled.h3`
  color: white;
  margin-block: 20px;

  @media (max-width: 992px) {
    text-align: center;
    font-size: 0.8rem;
  }
`;

export const CaractersUl = styled.ul`
  color: white;
  padding-left: 20px;
`;

export const CaractersLi = styled.li`
  margin-block: 15px;
  list-style: none;
  font-size: 0.9rem;
  font-weight: 300;

  @media (max-width: 992px) {
    font-size: 0.8rem;
  }
`;

export const EffectZoom = styled(Zoom)`
  width: 110%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageTitle = styled.h3`
  color: white;
  margin-bottom: 20px;

  @media (max-width: 992px) {
    text-align: center;
    font-size: 0.8rem;
  }
`;

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  max-width: 100%;
  min-height: 40vh;
`;

export const ImageExample = styled.img`
  width: 100%;
  max-width: 450px;
  height: 100%;
  object-fit: cover;
  margin: 0px 10px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5);
  border-radius: 10px;

  @media (max-width: 992px) {
    margin: 5px 0px;
  }
`;
