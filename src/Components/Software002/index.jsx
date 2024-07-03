import styles from "./Software002.module.css";
import { Zoom, Fade } from "react-awesome-reveal";
import { Container, Title, Card, CardOl, CardLi, CardImg } from "./styles";

function Software002() {
  return (
    <>
      <Container className={styles.container}>
        <Fade duration={1000}>
          <Title>O que você encontrará aqui:</Title>
        </Fade>
        <Card className={styles.mais}>
          <CardOl>
            <Fade direction="up" duration={300} cascade delay={200}>
              <CardLi>
                <strong>Softwares de Produtividade:</strong> Melhore seu
                desempenho e eficiência com as melhores ferramentas de
                produtividade, desde suítes de escritório até aplicativos de
                gerenciamento de tempo.
              </CardLi>
              <CardLi>
                <strong>Edição e Design:</strong> Descubra softwares líderes em
                edição de imagem, vídeo e design gráfico, perfeitos para
                profissionais criativos e entusiastas.
              </CardLi>
              <CardLi>
                <strong>Comunicação e Colaboração:</strong> Facilite a
                comunicação e colaboração em sua equipe com plataformas de
                videoconferência, bate-papo e gerenciamento de projetos.
              </CardLi>
              <CardLi>
                <strong>Engenharia e Arquitetura:</strong> Ferramentas CAD e
                softwares de engenharia para ajudar na criação de projetos
                detalhados e precisos.
              </CardLi>
              <CardLi>
                <strong>CRM e Vendas:</strong> Otimize o gerenciamento de
                relacionamento com clientes e aumente suas vendas com soluções
                CRM robustas e eficazes.
              </CardLi>
            </Fade>
          </CardOl>
          <Zoom delay={200} duration={500}>
            <CardImg
              src="/images/container/engineer.svg" alt="Engineer"
            />
          </Zoom>
        </Card>
      </Container>
    </>
  );
}

export default Software002;
