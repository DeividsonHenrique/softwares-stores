import { useState } from "react";
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

  return (
    <>
      <Quantity>
        <Button onClick={diminuirQuantidade}>-</Button>
        <Value type="text" value={quantidade} readOnly />
        <Button onClick={incluirQuantidade}>+</Button>
      </Quantity>
    </>
  );
}

export default Quantidade;
