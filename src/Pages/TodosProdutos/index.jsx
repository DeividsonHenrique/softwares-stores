import styles from "./TodosProdutos.module.css";
import Card from "../../Components/Card";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";

function TodosProdutos() {
  const [searchTerm, setSearchTerm] = useState("");
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const buscarProdutos = async () => {
      const response = await fetch("../../public/data/Produtos.json");
      const data = await response.json();
      setProdutos(data);
    };
    buscarProdutos();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProdutos = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  let palavraAchada;
  if (searchTerm.length >= 1) {
    palavraAchada =
      filteredProdutos.length === 1
        ? "Produto encontrado"
        : "Produtos encontrados";
  } else {
    palavraAchada = "Produtos";
  }

useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <>
      <Header />
      <div className={styles.secao_produtos}>
        <Fade cascade delay={100} duration={500} direction="up">
          <h3>todos os Produtos e softwares</h3>
          <input
            type="text"
            placeholder="Pesquisar Produto..."
            value={searchTerm}
            onChange={handleSearch}
            className={styles.procurar}
          />

          {filteredProdutos.length > 0 ? (
            <p className={styles.resultado}>
              {`${filteredProdutos.length} ${palavraAchada}`}
            </p>
          ) : (
            <p className={styles.resultado}></p>
          )}
        </Fade>
        <div className={styles.produtos}>
          <Fade
            cascade
            damping={0.2}
            delay={100}
            duration={300}
            direction="down"
            triggerOnce
          >
            {filteredProdutos.length > 0 ? (
              filteredProdutos.map((produto) => (
                <Card key={produto.id} produto={produto} />
              ))
            ) : (
              <p className={styles.resultado}>Nenhum resultado encontrado</p>
            )}
          </Fade>
        </div>
      </div>
      <Fade>
        <Footer className={styles.footer} />
      </Fade>
    </>
  );
}

export default TodosProdutos;
