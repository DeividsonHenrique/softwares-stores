import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

export const Store = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
`;

export const Title = styled.h1`
  margin-bottom: 30px;
  font-size: 1.5rem;
  color: #fff;

  @media (max-width: 1280px) {
    font-size: 1.2rem;
  }

  @media (max-width: 992px) {
    font-size: 1rem;
  }

  @media (max-width: 478px) {
    font-size: 0.9rem;
  }
`;

export const StoreUl = styled.ul`
  list-style: none;
`;

export const StoreLi = styled.li`
  color: #fff;
  font-size: 1rem;
  margin-bottom: 10px;
  text-align: center;
  width: 100%;
  font-weight: 300;
  padding-block: 0.25rem;

  @media (max-width: 1280px) {
    font-size: 0.8rem;
  }

  @media (max-width: 992px) {
    margin-bottom: 5px;
    font-size: 0.7rem;
  }

  @media (max-width: 390px) {
    font-size: 0.65rem;
  }
`;

export const Strong = styled.strong`
  text-transform: uppercase;
  font-weight: 900;

  @media (max-width: 992px) {
    font-size: 0.7rem;
  }

  @media (max-width: 478px) {
    font-size: 0.6rem;
  }
`;

export const Carousels = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 10px;
  user-select: none;
`;

export const CarouselImg = styled.img`
  height: auto;
  width: 97%;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 1px #181818;
  user-select: none;

  @media (max-width: 390px) {
    width: 98%;
    border-radius: 5px;
  }
`;

export const Rolling = styled(Fade)`
  position: relative;
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  padding: 10px 0px;
  overflow: hidden;

  &::after {
    position: absolute;
    content: "";
    background: linear-gradient(90deg, #181818, transparent);
    opacity: 1;
    width: 10%;
    height: 100%;
    z-index: 1222;
    top: 0;
    left: -1px;
  }

  &::before {
    position: absolute;
    content: "";
    background: linear-gradient(90deg, transparent, #181818);
    opacity: 1;
    width: 10%;
    height: 100%;
    z-index: 1222;
    top: 0;
    right: -1px;
  }

  @media (max-width: 390px) {
    width: 100%;
  }
`;
