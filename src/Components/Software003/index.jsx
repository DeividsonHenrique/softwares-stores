import styles from "./Software003.module.css";
import Carousel from "../Carousel";
import { Fade } from "react-awesome-reveal";
import { Store, Title, StoreUl, StoreLi, Strong, Carousels, CarouselImg, Rolling } from "./styles"

function Software003() {
  return (
    <>
      <Store className={styles.store}>
        <Fade>
          <Title>Por que escolher a Softwares Shop?</Title>
        </Fade>
        <StoreUl>
          <Fade direction="down" duration={300} cascade>
            <StoreLi>
              <Strong>Variedade e Qualidade:</Strong> Selecionamos apenas os
              melhores produtos e softwares para garantir que você tenha acesso
              a soluções de alta qualidade.
            </StoreLi>
            <StoreLi>
              <Strong>Informações Detalhadas:</Strong> Cada produto inclui
              descrições detalhadas, avaliações de usuários e especificações
              para ajudá-lo a tomar decisões informadas.
            </StoreLi>
            <StoreLi>
              <Strong>Facilidade de Compra:</Strong> Com links diretos para
              compra e informações claras sobre compatibilidade, encontrar e
              adquirir o software certo nunca foi tão fácil.
            </StoreLi>
            <StoreLi>
              <Strong>Suporte e Atualizações:</Strong> Acompanhe as últimas
              versões e atualizações dos seus softwares preferidos, garantindo
              que você sempre tenha acesso às funcionalidades mais recentes.
            </StoreLi>
          </Fade>
        </StoreUl>
        <Rolling className={styles.teste} delay={400}>
          
            <Carousel>
              <Carousels className={styles.carousel}>
                <CarouselImg
                  src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </Carousels>
              <Carousels className={styles.carousel}>
                <CarouselImg
                  src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </Carousels>

              <Carousels className={styles.carousel}>
                <CarouselImg
                  src="https://images.pexels.com/photos/7610531/pexels-photo-7610531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </Carousels>

              <Carousels className={styles.carousel}>
                <CarouselImg
                  src="https://images.pexels.com/photos/8721318/pexels-photo-8721318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </Carousels>
            </Carousel>
          
        </Rolling>
      </Store>
    </>
  );
}

export default Software003;
