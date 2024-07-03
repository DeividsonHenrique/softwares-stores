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
        <Container>
          <Contact id="contact">
            <Title>Contato</Title>

            <ContactInfo>
              <InfoItem>
                <h3>Endereço:</h3>
                <p>Rua ..., 123, Bairro, Cidade, Estado, CEP</p>
              </InfoItem>
              <InfoItem>
                <h3>Telefone:</h3>
                <p>(11) 1234-5678</p>
              </InfoItem>
              <InfoItem>
                <h3>Email:</h3>
                <p>contato@example.com</p>
              </InfoItem>
            </ContactInfo>

            <Form>
              <FormGroup>
                <Label htmlFor="name">Nome:</Label>
                <Input type="text" id="name" name="name" required />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="email">Email:</Label>
                <Input type="email" id="email" name="email" required />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="subject">Assunto:</Label>
                <Input type="text" id="subject" name="subject" required />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="message">Mensagem:</Label>
                <TextArea id="message" name="message" required></TextArea>
              </FormGroup>
              <Button type="submit">Enviar</Button>
            </Form>
            <Slide triggerOnce delay={400} duration={1250} direction="up">
              <SocialMedia>
                <h3>Siga-nos:</h3>
                <SocialList>
                  <SocialLi>
                    <FacebookIcon />
                    <SocialLink href="https://facebook.com" target="_blank">
                      Facebook
                    </SocialLink>
                  </SocialLi>

                  <SocialLi>
                    <TwitterIcon />
                    <SocialLink href="https://twitter.com" target="_blank">
                      Twitter
                    </SocialLink>
                  </SocialLi>

                  <SocialLi>
                    <InstagramIcon />
                    <SocialLink href="https://instagram.com" target="_blank">
                      Instagram
                    </SocialLink>
                  </SocialLi>

                  <SocialLi>
                    <LinkedinIcon />
                    <SocialLink href="https://linkedin.com" target="_blank">
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
