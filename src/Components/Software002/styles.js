import styled from "styled-components";

export const Container = styled.section`
  min-height: 100vh;
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 992px) {
    width: 95%;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 1.7rem;
  z-index: 1;

  @media (max-width: 1280px) {
    font-size: 1.5rem;
  }

  @media (max-width: 992px) {
    font-size: 1.2rem;
  }

  @media (max-width: 478px) {
    font-size: 0.9rem;
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 700px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1280px) {
    height: 500px;
  }

  @media (max-width: 992px) {
    height: 400px;
  }

  @media (max-width: 768px) {
    height: 350px;
    width: 100%;
  }

  @media (max-width: 478px) {
    flex-direction: column-reverse;
    padding-top: 50px;
    height: auto;
  }

  @media (max-width: 390px) {
    flex-direction: column;
    padding-top: 20px;
  }
`;

export const CardOl = styled.ol`
  width: 50%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (max-width: 992px) {
    height: 250px;
  }

  @media (max-width: 768px) {
    width: 55%;
  }

  @media (max-width: 478px) {
    width: 100%;
    justify-content: space-evenly;
    height: 250px;
  }
`;

export const CardLi = styled.li`
  list-style: disc;
  color: #fff;
  font-size: 1.125rem;
  font-weight: 300;
  margin: 10px 0px;

  @media (max-width: 1280px) {
    font-size: 0.8rem;
    margin: 0px;
  }

  @media (max-width: 992px) {
    font-size: 0.7rem;
    margin: 0px;
  }

  @media (max-width: 768px) {
    font-size: 0.6rem;
    margin: 5px 0px;
    list-style: none;
  }

  @media (max-width: 478px) {
    font-size: 0.7rem;
    margin: 0px;
    text-align: center;
    justify-content: space-between;
  }

  @media (max-width: 390px) {
    font-size: 0.65rem;
    margin: 0px;
    text-align: center;
    justify-content: space-between;

    strong {
      font-size: 0.6rem;
    }
  }
`;

export const CardImg = styled.img`
  height: 350px;

  @media (max-width: 1280px) {
    height: 250px;
  }

  @media (max-width: 992px) {
    height: 200px;
  }

  @media (max-width: 768px) {
    height: auto;
    width: 200px;
    margin-left: 10px;
  }

  @media (max-width: 478px) {
    height: 120px;
  }

  @media (max-width: 390px) {
    height: 100px;
  }
`;
