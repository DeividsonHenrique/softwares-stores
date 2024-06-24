import styles from "./Header.module.css";
import { NavLink, Link } from "react-router-dom";
import { FaShoppingCart, FaBars  } from "react-icons/fa";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

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
      <section className={styles.header}>
        <NavLink to="/" className={styles.link}>
          <h2>Software Store</h2>
        </NavLink>
        <nav>
          <ul>
            <NavLink style={navLink} exact to="/">
              <li className={styles.lista}>Início</li>
            </NavLink>

            <NavLink style={navLink} to="/todos_produtos">
              <li className={styles.lista}>Produtos</li>
            </NavLink>

            <NavLink style={navLink} to="/contato">
              <li className={styles.lista}>Contato</li>
            </NavLink>
          </ul>
          <Link to="/carrinho">
            <button className={styles.carrinho}><FaShoppingCart /> Carrinho</button>
            <FaShoppingCart className={styles.iconCart} />
          </Link>
        </nav>
      </section>

      <FaBars className={styles.iconBars} onClick={toggleNav} />
      <div className={`${styles.nav_header} ${isNavVisible ? styles.visible : ""} `} onClick={toggleNav}>
      <IoClose className={styles.iconClose} onClick={toggleNav} />
        <nav>
          <ul>
            <NavLink className={styles.navLink} exact to="/">
              Início
            </NavLink>

            <NavLink className={styles.navLink} to="/todos_produtos">
              Produtos
            </NavLink>

            <NavLink className={styles.navLink} to="/contato">
              Contato
            </NavLink>
          </ul>
          
        </nav>
      </div>
    </>
  );
}

export default Header;
