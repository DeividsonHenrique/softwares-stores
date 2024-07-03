import styled, { css } from "styled-components";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialIcon = css`
  color: blue;
  margin-right: 2px;
`;

export const FacebookIcon = styled(FaFacebookSquare)`
  ${SocialIcon}
`;

export const InstagramIcon = styled(FaInstagram)`
  ${SocialIcon}
`;

export const LinkedinIcon = styled(FaLinkedin)`
  ${SocialIcon}
`;

export const TwitterIcon = styled(FaXTwitter)`
  ${SocialIcon}
`;

export const Container = styled.section`
  min-height: 100vh;
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
export const Contact = styled.div`
  padding: 20px;
  max-width: 600px;
  width: 100%;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1.5);
  overflow: hidden;

  @media (max-width: 992px) {
    max-width: 450px;
    width: 100%;
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 992px) {
    font-size: 1rem;
  }
`;

export const ContactInfo = styled.div`
  margin-bottom: 20px;
`;

export const InfoItem = styled.div`
  margin-bottom: 10px;

  @media (max-width: 992px) {
    h3 {
      font-size: 0.8rem;
    }

    p {
      font-size: 0.8rem;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;

  @media (max-width: 992px) {
    font-size: 0.8rem;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
  width: 100%;

  @media (max-width: 992px) {
    padding: 5px;
  }
`;

export const TextArea = styled.textarea`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
  max-height: 100px;
  min-height: 100px;
  min-width: 100%;
  max-width: 100%;

  @media (max-width: 992px) {
    max-height: 50px;
    min-height: 50px;
    min-width: 100%;
    max-width: 100%;
  }
`;

export const Button = styled.button`
  padding: 10px 15px;
  border-radius: 4px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
`;

export const SocialMedia = styled.div`
  margin-top: 20px;
  text-align: center;
`;

export const SocialList = styled.ul`
  list-style: none;
  padding: 10px 0px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;

  @media (max-width: 992px) {
    flex-wrap: wrap;
    font-size: 0.8rem;
    gap: 10px;
  }
`;

export const SocialLi = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0px 10px;
  text-align: center;

  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    background-color: darkblue;
    bottom: -2px;
    transform-origin: center;
    transform: scaleX(0);
    transition: 0.3s ease-in;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

export const SocialLink = styled.a`
  text-decoration: none;
  color: black;
`;
