import styles from "./Secao_produtos.module.css";
import PrincipalCard from "../PrincipalCard";
import { Fade } from "react-awesome-reveal";
import {SectionProducts, Title, Products, Card, StyledButton} from "./styles"

function Secao_produtos() {
  return (
    <>
      <SectionProducts className={styles.secao_produtos}>
        <Fade duration={1500}>
          <Title className={styles.titulo}>Produtos / softwares</Title>
        </Fade>

        <Products className={styles.produtos}>
          <Card
            cascade
            damping={0.1}
            delay={100}
            duration={300}
            direction="down"
            triggerOnce
            className={styles.card}
          >
            <PrincipalCard />
          </Card>
        </Products>

        <Fade duration={1500}>
          <StyledButton to="/todos_produtos" className={styles.ver_todos}>
            Ver todos os produtos
          </StyledButton>
        </Fade>
      </SectionProducts>
    </>
  );
}

export default Secao_produtos;
