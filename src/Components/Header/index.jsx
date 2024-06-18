import styles from "./Header.module.css";
import { NavLink, Link } from "react-router-dom";

function Header() {
  const navLink = ({ isActive }) => {
    return {
      color: isActive ? "white" : "black",
      padding: "11px 5px",
      margin: "0 10px",
      borderRadius: "20px",
      background: isActive ? "#333" : "#F5F5F5",
      fontWeight: "bold",
      boxShadow: isActive
        ? "0 0 10px rgba(0, 0, 0, 0.5)"
        : "0 0 10px rgba(0, 0, 0, 0.12)",
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
