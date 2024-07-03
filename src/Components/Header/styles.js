import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export const HeaderDesktop = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80px;
  background-color: white;
  color: black;
  z-index: 9999;
  position: absolute;
  top: 0;
  width: 100%;

  @media (max-width: 1280px) {
    height: 60px;
  }

  @media (max-width: 992px) {
    height: 50px;
  }

  @media (max-width: 768px) {
    height: 40px;
  }

  @media (max-width: 478px) {
    text-align: center;
    justify-content: center;
    align-items: center;
    position: fixed;
  }
`;

export const Logo = styled(NavLink)`
  font-size: 1.75rem;
  text-transform: uppercase;
  color: #1fcc44;
  font-weight: bold;
  text-decoration: none;

  @media (max-width: 1280px) {
    font-size: 1.25rem;
  }

  @media (max-width: 992px) {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavUlDesktop = styled.ul`
  @media (max-width: 478px) {
    display: none;
  }
`;

export const NavLi = styled.li`
  display: inline-block;
  list-style: none;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 1.125rem;
  font-weight: 500;
  margin: 10px;
  letter-spacing: 2px;
  text-decoration: none;

  @media (max-width: 1280px) {
    font-size: 1rem;
  }

  @media (max-width: 992px) {
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0px;
  }
`;

export const Cart = styled.button`
  padding: 10px 20px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #1fcc44;
  color: #fff;
  border-radius: 20px;
  transition: 0.3s ease-in;
  font-size: 1.125rem;
  font-weight: 300;
  text-align: center;

  &:hover {
    background-color: #008000;
  }

  @media (max-width: 1280px) {
    font-size: 1rem;
  }

  @media (max-width: 992px) {
    font-size: 0.9rem;
    padding: 5px 10px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const CartButton = styled(FaShoppingCart)`
  display: inline;
`;

/* menu nav */

export const MobileCart = styled(FaShoppingCart)`
  display: none;

  @media (max-width: 768px) {
    display: block;
    color: #1fcc44;
    margin-left: 10px;
  }

  @media (max-width: 478px) {
    position: absolute;
    right: 60px;
    top: 10px;
    font-size: 20px;
  }
`;

export const MobileMenu = styled(FaBars)`
  display: block;

  @media (max-width: 478px) {
    display: block;
    position: fixed;
    top: 10px;
    right: 20px;
    color: black;
    z-index: 9999;
    font-size: 20px;
  }
`;

export const CloseBtn = styled(IoClose)`
  font-size: 2rem;
  position: absolute;
  top: 20px;
  right: 35%;
  transform: translateX(50%);
  color: red;
`;

export const MobileNav = styled.div`
  position: fixed;
  top: 40px;
  right: 0;
  min-height: 100vh;
  background: transparent;
  width: 0%;
  z-index: 9999;
  transition: width 0.3s ease-in;
  overflow: hidden;
  display: flex;
  justify-content: end;
  display: none;

  ${(open) =>
    open.isNavVisible &&
    ` width: 100%;
      `}

  ${(open) =>
    !open.isNavVisible &&
    ` width: 0%;
      `}

    @media (max-width: 478px) {
    display: flex;
    min-height: 100vh;
  }
`;

export const NavMobile = styled.nav`
  width: 70%;
  display: flex;
  align-items: start;
  background-color: #1a1a3e;
`;

export const NavUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40%;
`;

export const MobileLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 1rem;
  padding: 10px;
  transition: 0.3s ease-in;
  font-weight: 300;
`;
