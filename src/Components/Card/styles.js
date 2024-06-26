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
    padding-block: .7rem;
    text-align: center;

    p {
        margin-inline: 5px;
        font-size: .8rem;
        font-weight: 300;
        color: aqua;

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
`;

export const Price = styled.p`
  text-align: center;
  color: lightgreen;
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
`;


export const Button = styled(Link)`
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
    transition: .3s all;
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    text-decoration: none;
    text-align: center;
    line-height: 30px;
` 