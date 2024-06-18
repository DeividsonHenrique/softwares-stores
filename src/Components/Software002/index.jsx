import styles from "./Software002.module.css";
import { Zoom, Fade } from "react-awesome-reveal";

function Software002() {
  return (
    <>
      <section className={styles.container}>
        <Fade duration={1000}>
          <h3>O que você encontrará aqui:</h3>
        </Fade>
        <div className={styles.mais}>
          <ol>
            <Fade direction="up" duration={300} cascade delay={200}>
              <li>
                <strong>Softwares de Produtividade:</strong> Melhore seu
                desempenho e eficiência com as melhores ferramentas de
                produtividade, desde suítes de escritório até aplicativos de
                gerenciamento de tempo.
              </li>
              <li>
                <strong>Edição e Design:</strong> Descubra softwares líderes em
                edição de imagem, vídeo e design gráfico, perfeitos para
                profissionais criativos e entusiastas.
              </li>
              <li>
                <strong>Comunicação e Colaboração:</strong> Facilite a
                comunicação e colaboração em sua equipe com plataformas de
                videoconferência, bate-papo e gerenciamento de projetos.
              </li>
              <li>
                <strong>Engenharia e Arquitetura:</strong> Ferramentas CAD e
                softwares de engenharia para ajudar na criação de projetos
                detalhados e precisos.
              </li>
              <li>
                <strong>CRM e Vendas:</strong> Otimize o gerenciamento de
                relacionamento com clientes e aumente suas vendas com soluções
                CRM robustas e eficazes.
              </li>
            </Fade>
          </ol>
          <Zoom delay={200} duration={500}>
            <img
              src="../../../public/images/imagens_container/software-engineer.svg"
              alt="software-engineer"
            />
          </Zoom>
        </div>
      </section>
    </>
  );
}

export default Software002;
