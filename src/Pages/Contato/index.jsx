import styles from "./Contato.module.css";
import Header from "../../Components/Header";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Footer from "../../Components/Footer";
import { Slide, Fade, Zoom } from "react-awesome-reveal";
import { useEffect } from "react";

function Contato() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Zoom triggerOnce delay={200} duration={500}>
        <div className={styles.container}>
          <div id="contact" className={styles.contato}>
            <h2 className={styles.header}>Contato</h2>

            <div className={styles.contactInfo}>
              <div className={styles.infoItem}>
                <h3>Endereço:</h3>
                <p>Rua Exemplo, 123, Bairro, Cidade, Estado, CEP</p>
              </div>
              <div className={styles.infoItem}>
                <h3>Telefone:</h3>
                <p>(11) 1234-5678</p>
              </div>
              <div className={styles.infoItem}>
                <h3>Email:</h3>
                <p>contato@example.com</p>
              </div>
            </div>

            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Nome:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.label}>
                  Assunto:
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Mensagem:
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={styles.textarea}
                  required
                ></textarea>
              </div>
              <button type="submit" className={styles.button}>
                Enviar
              </button>
            </form>
            <Slide triggerOnce delay={400} duration={1250} direction="up">
              <div className={styles.socialMedia}>
                <h3>Siga-nos:</h3>
                <ul className={styles.socialList}>
                  <li className={styles.socialLi}>
                    <FaFacebookSquare className={styles.socialIcon} />
                    <a
                      href="https://facebook.com"
                      className={styles.socialLink}
                    >
                      Facebook
                    </a>
                  </li>

                  <li className={styles.socialLi}>
                    <FaXTwitter className={styles.socialIcon} />
                    <a href="https://twitter.com" className={styles.socialLink}>
                      Twitter
                    </a>
                  </li>

                  <li className={styles.socialLi}>
                    <FaInstagram className={styles.socialIcon} />
                    <a
                      href="https://instagram.com"
                      className={styles.socialLink}
                    >
                      Instagram
                    </a>
                  </li>

                  <li className={styles.socialLi}>
                    <FaLinkedin className={styles.socialIcon} />
                    <a
                      href="https://linkedin.com"
                      className={styles.socialLink}
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </Slide>
          </div>
        </div>
      </Zoom>
      <Fade>
        <Footer />
      </Fade>
    </>
  );
}

export default Contato;
