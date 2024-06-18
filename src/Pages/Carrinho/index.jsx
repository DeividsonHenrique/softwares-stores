import Header from "../../Components/Header";
import styles from "./Carrinho.module.css";

function Carrinho() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h2>Shopping Cart</h2>
      </div>
    </>
  );
}

export default Carrinho;
