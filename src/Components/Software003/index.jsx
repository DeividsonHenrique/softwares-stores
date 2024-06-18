import styles from "./Software003.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "../Carousel";
import { Fade } from "react-awesome-reveal";

function Software003() {
  return (
    <>
      <section className={styles.store}>
        <Fade>
          <h3>Por que escolher a Softwares Shop?</h3>
        </Fade>
        <ul>
          <Fade direction="down" duration={300} cascade>
            <li>
              <strong>Variedade e Qualidade:</strong> Selecionamos apenas os
              melhores produtos e softwares para garantir que você tenha acesso
              a soluções de alta qualidade.
            </li>
            <li>
              <strong>Informações Detalhadas:</strong> Cada produto inclui
              descrições detalhadas, avaliações de usuários e especificações
              para ajudá-lo a tomar decisões informadas.
            </li>
            <li>
              <strong>Facilidade de Compra:</strong> Com links diretos para
              compra e informações claras sobre compatibilidade, encontrar e
              adquirir o software certo nunca foi tão fácil.
            </li>
            <li>
              <strong>Suporte e Atualizações:</strong> Acompanhe as últimas
              versões e atualizações dos seus softwares preferidos, garantindo
              que você sempre tenha acesso às funcionalidades mais recentes.
            </li>
          </Fade>
        </ul>
        <Fade className={styles.teste} delay={400}>
          <div className={styles.imagens}>
            <Carousel>
              <div className={styles.carousel}>
                <img
                  src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
              <div className={styles.carousel}>
                <img
                  src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>

              <div className={styles.carousel}>
                <img
                  src="https://images.pexels.com/photos/7610531/pexels-photo-7610531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>

              <div className={styles.carousel}>
                <img
                  src="https://images.pexels.com/photos/8721318/pexels-photo-8721318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
            </Carousel>
          </div>
        </Fade>
      </section>
    </>
  );
}

export default Software003;
