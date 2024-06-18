import styles from "./Software001.module.css";
import Header from "../Header";
import { Fade, Zoom } from "react-awesome-reveal";


function Software001() {
  return (
    <>
      <Header />
      <section className={`${styles.home} ${styles.page}`}>
        <Zoom duration={750} >
        <h1>Encontre Todas as Variedades de Produtos/Softwares</h1>
        </Zoom>
        <div className={styles.container}>
        <Fade duration={1000} direction="left" delay={100} >
          <div className={styles.img_software}>
          
            <img
              src="https://raw.githubusercontent.com/DeividsonHenrique/softwares-stores/main/src/assets/Logo.svg"
              alt=""
            />
            
          </div>
          </Fade>
          <span className={styles.text}>
          <Fade duration={1000} direction="right" delay={500}>
            Explore a melhor seleção de produtos e softwares disponíveis no
            mercado. Nós oferecemos uma ampla gama de soluções tecnológicas para
            atender às suas necessidades pessoais e profissionais. Navegue pelas
            nossas categorias e descubra ferramentas essenciais que podem
            transformar a forma como você trabalha e se diverte.
            </Fade>
          </span>
          
        </div>
      </section>
    </>
  );
}

export default Software001;
