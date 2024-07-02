import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const styledIcon = css`
  padding-right: 5px;
`;

export const InstagramIcon = styled(FaInstagram)`
  ${styledIcon}
`;

export const LinkedinIcon = styled(FaLinkedin)`
  ${styledIcon}
`;

export const FacebookIcon = styled(FaFacebookSquare)`
  ${styledIcon}
`;

export const TwitterIcon = styled(FaXTwitter)`
  ${styledIcon}
`;

const FlexColumn = css`
  display: flex;
  align-items: start;
  flex-direction: column;
  align-items: center;
`;

const Text = css`
  text-decoration: none;

  &:hover {
    text-decoration: solid underline white 1px;
    text-underline-offset: 3px;
  }

  @media (max-width: 1280px) {
    font-size: 0.9rem;
  }
`;

export const StyledLinkCol2 = styled(Link)`
  color: #555;
  ${Text}
`;

export const StyledLinkCol3 = styled(Link)`
  ${Text}
`;

export const FooterSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background-color: black;
  color: white;
  width: 100%;
  height: auto;

  h1 {
    font-size: 1rem;
    margin-bottom: 10px;
  }

  @media (max-width: 1280px) {
    h1 {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 478px) {
    h1 {
      font-size: 0.6rem;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Col1 = styled.div`
  h2 {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  p {
    margin-block: 0.1rem;
  }

  ${FlexColumn}

  @media (max-width: 1280px) {
    h2 {
      font-size: 1rem;
    }

    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 0.9rem;
    }

    p {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 478px) {
    p {
      font-size: 0.7rem;
    }
  }
`;

export const Col2 = styled.div`
  h3 {
    font-size: 1.3rem;
    margin-bottom: 10px;
  }

  p {
    margin-block: 0.2rem;
    cursor: pointer;
  }

  ${FlexColumn}

  @media (max-width: 1280px) {
    h3 {
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 0.9rem;
    }

    p {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 478px) {
    p {
      font-size: 0.7rem;
    }
  }
`;

export const Col3 = styled.div`
  ${FlexColumn}
  align-items: start;
  h3 {
    font-size: 1.3rem;
    margin-bottom: 10px;
    width: 100%;
    text-align: center;
  }

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 5px;
    color: aqua;
    cursor: pointer;
  }

  @media (max-width: 1280px) {
    h3 {
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 0.9rem;
    }

    p {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 478px) {
    p {
      font-size: 0.7rem;
    }
  }
`;

export const Col4 = styled.div``;

export const Maps = styled.iframe`
  margin-top: 20px;
  border-radius: 10px;
  width: 300px;
  height: 200px;
  opacity: 0.7;
  transition: 0.3s all;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 1280px) {
    width: 250px;
    height: 150px;
  }

  @media (max-width: 992px) {
    width: 200px;
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 90px;
  }

  @media (max-width: 478px) {
    display: none;
  }
`;
