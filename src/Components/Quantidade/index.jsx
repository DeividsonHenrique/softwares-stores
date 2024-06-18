import { useState } from "react";
import styles from "./Quantidade.module.css";

function Quantidade() {
    const [quantidade, setQuantidade] = useState(1);

    const diminuirQuantidade = () => {
      if (quantidade > 1) {
        setQuantidade(quantidade - 1);
      }
    };
  
    const incluirQuantidade = () => {
      setQuantidade(quantidade + 1);
    };


    return(
        <>
            <div className={styles.quantidade}>
              <button className={styles.botao_quantidade} onClick={diminuirQuantidade}>-</button>
              <input type="text" value={quantidade} readOnly />
              <button className={styles.botao_quantidade} onClick={incluirQuantidade}>+</button>
            </div>

        </>
    )
}

export default Quantidade