import styles from "./Software001.module.css";
import Header from "../Header";
import { Fade, Zoom } from "react-awesome-reveal";
import {Home1, Title, Container, Image, Text} from "./styles"

function Software001() {
  return (
    <>
      <Header />
      <Home1 className={`${styles.home} ${styles.page}`}>
        <Zoom duration={750} >
        <Title>Encontre Todas as Variedades de Produtos/Softwares</Title>
        </Zoom>
        <Container className={styles.container}>
        <Fade duration={1000} direction="left" delay={100} >
          <Image className={styles.img_software}>
          
            <img
              src="/images/container/logo.svg"
              alt="Logo da Softwares Shop"
            />
            
          </Image>
          </Fade>
          <Text className={styles.text}>
          <Fade duration={1000} direction="right" delay={500}>
            Explore a melhor seleção de produtos e softwares disponíveis no
            mercado. Nós oferecemos uma ampla gama de soluções tecnológicas para
            atender às suas necessidades pessoais e profissionais. Navegue pelas
            nossas categorias e descubra ferramentas essenciais que podem
            transformar a forma como você trabalha e se diverte.
            </Fade>
          </Text>
          
        </Container>
      </Home1>
    </>
  );
}

export default Software001;
