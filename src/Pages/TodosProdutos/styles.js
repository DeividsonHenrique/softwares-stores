import styled from "styled-components";

export const SectionProducts = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
  padding-top: 120px;

  @media (max-width: 1280px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 1280px) {
    font-size: 1.2rem;
  }

  @media (max-width: 992px) {
    font-size: 1rem;
  }
`;

export const Search = styled.input`
  width: 25vw;
  height: 35px;
  border-radius: 20px;
  text-align: center;
  font-size: 1.075rem;
  font-weight: bold;
  box-shadow: 0px 0px 10px 1px #181818;
  margin-bottom: 20px;
  outline: none;
  border: none;

  &::placeholder {
    color: #555;
    letter-spacing: 2px;
  }

  @media (max-width: 1280px) {
    width: 300px;
    font-size: 0.9rem;
    height: 25px;
    border-radius: 10px;
  }

  @media (max-width: 992px) {
    width: 250px;
  }

  @media (max-width: 478px) {
    width: 200px;
    font-size: 0.7rem;
  }
`;

export const Results = styled.p`
  color: white;
  font-size: 1.175rem;
  margin-bottom: 20px;

  @media (max-width: 1280px) {
    font-size: 1rem;
  }

  @media (max-width: 992px) {
    font-size: 0.8rem;
  }
`;

export const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
