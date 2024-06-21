import styles from "./Secao_produtos.module.css";
import PrincipalCard from "../PrincipalCard";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

function Secao_produtos() {
  return (
    <>
      <div className={styles.secao_produtos}>
        <Fade duration={1500}>
          <h3 className={styles.titulo}>Produtos / softwares</h3>
        </Fade>

        <div className={styles.produtos}>
          <Fade
            cascade
            damping={0.1}
            delay={100}
            duration={300}
            direction="down"
            triggerOnce
            className={styles.card}
          >
            <PrincipalCard />
          </Fade>
        </div>

        <Fade duration={1500}>
          <Link to="/todos_produtos" className={styles.ver_todos}>
            Ver todos os produtos
          </Link>
        </Fade>
      </div>
    </>
  );
}

export default Secao_produtos;
