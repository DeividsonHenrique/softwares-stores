import styles from "./Contato.module.css";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { Slide, Fade, Zoom } from "react-awesome-reveal";
import { useEffect } from "react";
import {
  Container,
  Contact,
  Title,
  InfoItem,
  ContactInfo,
  Form,
  FormGroup,
  Label,
  Input,
  TextArea,
  Button,
  SocialMedia,
  SocialList,
  SocialLi,
  SocialLink,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "./styles";

function Contato() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Zoom triggerOnce delay={200} duration={500}>
        <Container className={styles.container}>
          <Contact id="contact" className={styles.contato}>
            <Title className={styles.header}>Contato</Title>

            <ContactInfo className={styles.contactInfo}>
              <InfoItem className={styles.infoItem}>
                <h3>Endereço:</h3>
                <p>Rua Exemplo, 123, Bairro, Cidade, Estado, CEP</p>
              </InfoItem>
              <InfoItem className={styles.infoItem}>
                <h3>Telefone:</h3>
                <p>(11) 1234-5678</p>
              </InfoItem>
              <InfoItem className={styles.infoItem}>
                <h3>Email:</h3>
                <p>contato@example.com</p>
              </InfoItem>
            </ContactInfo>

            <Form className={styles.form}>
              <FormGroup className={styles.formGroup}>
                <Label htmlFor="name" className={styles.label}>
                  Nome:
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  className={styles.input}
                  required
                />
              </FormGroup>
              <FormGroup className={styles.formGroup}>
                <Label htmlFor="email" className={styles.label}>
                  Email:
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.input}
                  required
                />
              </FormGroup>
              <FormGroup className={styles.formGroup}>
                <Label htmlFor="subject" className={styles.label}>
                  Assunto:
                </Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  className={styles.input}
                  required
                />
              </FormGroup>
              <FormGroup className={styles.formGroup}>
                <Label htmlFor="message" className={styles.label}>
                  Mensagem:
                </Label>
                <TextArea
                  id="message"
                  name="message"
                  className={styles.textarea}
                  required
                ></TextArea>
              </FormGroup>
              <Button type="submit" className={styles.button}>
                Enviar
              </Button>
            </Form>
            <Slide triggerOnce delay={400} duration={1250} direction="up">
              <SocialMedia className={styles.socialMedia}>
                <h3>Siga-nos:</h3>
                <SocialList className={styles.socialList}>
                  <SocialLi className={styles.socialLi}>
                    <FacebookIcon className={styles.socialIcon} />
                    <SocialLink
                      href="https://facebook.com" target="_blank"
                      className={styles.socialLink}
                    >
                      Facebook
                    </SocialLink>
                  </SocialLi>

                  <SocialLi className={styles.socialLi}>
                    <TwitterIcon className={styles.socialIcon} />
                    <SocialLink
                      href="https://twitter.com" target="_blank"
                      className={styles.socialLink}
                    >
                      Twitter
                    </SocialLink>
                  </SocialLi>

                  <SocialLi className={styles.socialLi}>
                    <InstagramIcon className={styles.socialIcon} />
                    <SocialLink
                      href="https://instagram.com" target="_blank"
                      className={styles.socialLink}
                    >
                      Instagram
                    </SocialLink>
                  </SocialLi>

                  <SocialLi className={styles.socialLi}>
                    <LinkedinIcon className={styles.socialIcon} />
                    <SocialLink
                      href="https://linkedin.com" target="_blank"
                      className={styles.socialLink}
                    >
                      LinkedIn
                    </SocialLink>
                  </SocialLi>
                </SocialList>
              </SocialMedia>
            </Slide>
          </Contact>
        </Container>
      </Zoom>
      <Fade>
        <Footer />
      </Fade>
    </>
  );
}

export default Contato;
