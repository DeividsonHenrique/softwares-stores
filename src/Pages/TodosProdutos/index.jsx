import Card from "../../Components/Card";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { SectionProducts, Title, Search, Results, Products } from "./styles";

function TodosProdutos() {
  const [searchTerm, setSearchTerm] = useState("");
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const buscarProdutos = async () => {
      const response = await fetch("/data/Produtos.json");
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
      <SectionProducts>
        <Fade cascade delay={100} duration={500} direction="up">
          <Title>todos os Produtos e softwares</Title>
          <Search
            type="text"
            placeholder="Pesquisar Produto..."
            value={searchTerm}
            onChange={handleSearch}
          />

          {filteredProdutos.length > 0 ? (
            <Results>
              {`${filteredProdutos.length} ${palavraAchada}`}
            </Results>
          ) : (
            <Results></Results>
          )}
        </Fade>
        <Products>
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
              <p>Nenhum resultado encontrado</p>
            )}
          </Fade>
        </Products>
      </SectionProducts>
      <Fade>
        <Footer />
      </Fade>
    </>
  );
}

export default TodosProdutos;
