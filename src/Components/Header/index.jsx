import styles from "./Header.module.css";
import { NavLink, Link } from "react-router-dom";

function Header() {
  const navLink = ({ isActive }) => {
    const smallScreen = window.matchMedia("(max-width: 768px)");
    const mediumScreen = window.matchMedia("(max-width: 992px)");
    const largeScreen = window.matchMedia("(min-width: 1280px)");

    let padding;

    if (smallScreen.matches) {
      padding = "3px 1px";
    } else if (mediumScreen.matches) {
      padding = "10px 0px";
    } else if (largeScreen.matches) {
      padding = "10px 5px";
    }

    return {
      color: isActive ? "white" : "black",
      padding: padding,
      borderRadius: "20px",
      background: isActive ? "#333" : "#F5F5F5",
      fontWeight: "bold",
      transition: "all 0.3s ease",
    };
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
            <button className={styles.carrinho}>Carrinho</button>
          </Link>
        </nav>
      </section>
    </>
  );
}

export default Header;
