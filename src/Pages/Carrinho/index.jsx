import Header from "../../Components/Header";
import styles from "./Carrinho.module.css";

function Carrinho() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h2>Shopping Cart</h2>
        <span>Em Construção....</span>
      </div>
    </>
  );
}

export default Carrinho;
