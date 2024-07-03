import styled, { keyframes } from "styled-components";

const Cursor = keyframes`
    50% {
        border-color: white;
    }
`;

const Typing = keyframes`
    from {
        width: 0;
    }
`;

const Floating = keyframes`
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(10px);
    }

    100% {
        transform: translateY(-10px);
    }
`;

export const Home1 = styled.section`
  min-height: 100vh;
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 95%;
  }

  @media (max-width: 478px) {
    padding-top: 50px;
  }

  @media (max-width: 390px) {
    padding-top: 100px;
  }
`;

export const Title = styled.h1`
  color: #fff;
  margin-bottom: 50px;
  font-size: 1.8rem;
  border-right: 3px solid transparent;
  width: 43ch;
  animation: ${Typing} 2s, ${Cursor} 3s;
  overflow: hidden;
  white-space: nowrap;

  @media (max-width: 1280px) {
    font-size: 1.5rem;
  }

  @media (max-width: 992px) {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 478px) {
    font-size: 0.8rem;
  }

  @media (max-width: 390px) {
    font-size: 0.9rem;
    animation: none;
    width: 100%;
    white-space: normal;
    text-align: center;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 478px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 360px;
  }

  @media (max-width: 390px) {
    height: 350px;
  }
`;

export const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 500px;
  height: 400px;
  border-radius: 5px;
  perspective: 1000px;
  animation: ${Floating} 5s alternate infinite;
  background-color: darkblue;

  img {
    height: auto;
  }

  @media (max-width: 1280px) {
    height: 250px;
    width: 350px;
  }

  @media (max-width: 992px) {
    height: 200px;
    width: 300px;
  }

  @media (max-width: 768px) {
    width: 200px;

    img {
      height: 200px;
    }
  }

  @media (max-width: 478px) {
    width: 300px;
    height: 200px;
    animation: none;

    img {
      height: 300px;
      border-radius: 20px;
    }
  }

  @media (max-width: 390px) {
    width: 250px;
    height: 150px;
    animation: none;

    img {
      height: 250px;
    }
  }
`;

export const Text = styled.span`
  height: 350px;
  width: 50%;
  color: #fff;
  font-size: 2em;
  font-weight: 200;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 1280px) {
    font-size: 1.4em;
    height: 250px;
  }

  @media (max-width: 992px) {
    font-size: 1em;
    height: 200px;
  }

  @media (max-width: 768px) {
    width: 50%;
    height: auto;
    font-size: 0.9rem;
    text-align: center;
  }

  @media (max-width: 478px) {
    height: 150px;
    width: 95%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  @media (max-width: 390px) {
    height: 200px;
    width: 95%;
    font-size: 0.8rem;
    text-align: center;
    line-height: 20px;
  }
`;
