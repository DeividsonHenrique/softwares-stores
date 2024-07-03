import { useState } from "react";
import styles from "./Quantidade.module.css";
import { Quantity, Button, Value } from "./styles";

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
            <Quantity className={styles.quantidade}>
              <Button className={styles.botao_quantidade} onClick={diminuirQuantidade}>-</Button>
              <Value type="text" value={quantidade} readOnly />
              <Button className={styles.botao_quantidade} onClick={incluirQuantidade}>+</Button>
            </Quantity>

        </>
    )
}

export default Quantidade