import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import {
  HeaderDesktop,
  Logo,
  Nav,
  NavUlDesktop,
  NavLi,
  Cart,
  CartButton,
  MobileCart,
  MobileMenu,
  MobileNav,
  NavMobile,
  CloseBtn,
  NavUl,
  MobileLink,
} from "./styles";

function Header() {
  const navLink = ({ isActive }) => {
    const smallScreen = window.matchMedia("(max-width: 768px)");
    const mediumScreen = window.matchMedia("(max-width: 992px)");
    const largeScreen = window.matchMedia("(min-width: 1280px)");

    let padding;

    if (smallScreen.matches) {
      padding = "5px 0px";
    } else if (mediumScreen.matches) {
      padding = "5px 0px";
    } else if (largeScreen.matches) {
      padding = "10px 5px";
    }

    return {
      color: isActive ? "white" : "black",
      padding: padding,
      borderRadius: "20px",
      margin: "0px 2px",
      background: isActive ? "#333" : "#F5F5F5",
      fontWeight: "bold",
      transition: "all 0.3s ease",
    };
  };

  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <>
      <HeaderDesktop>
        <Logo to="/">Software Store</Logo>
        <Nav>
          <NavUlDesktop>
            <NavLink style={navLink} exact to="/">
              <NavLi>Início</NavLi>
            </NavLink>

            <NavLink style={navLink} to="/todos_produtos">
              <NavLi>Produtos</NavLi>
            </NavLink>

            <NavLink style={navLink} to="/contato">
              <NavLi>Contato</NavLi>
            </NavLink>
          </NavUlDesktop>
          <Link to="/carrinho">
            <Cart>
              <CartButton /> Carrinho
            </Cart>
            <MobileCart />
          </Link>
        </Nav>
      </HeaderDesktop>

      <MobileMenu onClick={toggleNav} />

      <MobileNav isNavVisible={isNavVisible} onClick={toggleNav}>
        <CloseBtn onClick={toggleNav} />
        <NavMobile>
          <NavUl>
            <MobileLink exact to="/">
              Início
            </MobileLink>

            <MobileLink to="/todos_produtos">Produtos</MobileLink>

            <MobileLink to="/contato">Contato</MobileLink>
          </NavUl>
        </NavMobile>
      </MobileNav>
    </>
  );
}

export default Header;
