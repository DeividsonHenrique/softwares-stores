import styled, { keyframes } from "styled-components";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Writing = keyframes`
    50% {
        border-color: white;
    }
`;

const Typing = keyframes`
    from {
        width: 0;
    }
`;

export const SectionProducts = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: 0 auto;

  @media (max-width: 1366px) {
    padding-top: 90px;
  }

  @media (max-width: 478px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 1.7rem;
  margin-bottom: 20px;
  text-align: center;
  animation: ${Typing} 2s, ${Writing} 3s;
  overflow: hidden;
  white-space: nowrap;
  width: 18ch;
  border-right: 3px solid transparent;

  @media (max: width: 1280px) {
    font-size: 1.5rem;
  }

  @media (max-width: 992px) {
    font-size: 1rem;
  }
`;

export const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

export const Card = styled(Fade)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const StyledButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 50px;
  background-color: #1fcc44;
  color: #fff;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  font-size: 1.125rem;
  font-weight: 500;
  margin-top: 50px;
  transition: 0.3s all;
  text-decoration: none;

  &:hover {
    background-color: darkgreen;
  }

  @media (max-width: 1280px) {
    margin-top: 10px;
    width: 200px;
    height: 40px;
    font-size: 1rem;
  }

  @media (max-width: 992px) {
    width: 180px;
    height: 35px;
  }

  @media (max-width: 478px) {
    width: 150px;
    height: 30px;
    font-size: 0.8rem;
  }
`;
