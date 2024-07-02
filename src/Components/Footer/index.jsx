import {
  FooterSection,
  Container,
  Col1,
  Col2,
  Col3,
  Col4,
  StyledLinkCol2,
  StyledLinkCol3,
  Maps,
  InstagramIcon,
  LinkedinIcon,
  FacebookIcon,
  TwitterIcon,
} from "./styles";

function Footer() {
  return (
    <FooterSection>
      <Container>
        <Col1>
          <h2>Software Store</h2>
          <p>Criando Possibilidades</p>
          <p>Para conectar com o mundo!</p>
        </Col1>

        <Col2>
          <h3>Explorar</h3>

          <StyledLinkCol2 to="/">
            <p>Home</p>
          </StyledLinkCol2>
          <StyledLinkCol2>
            <p>Sobre</p>
          </StyledLinkCol2>
          <StyledLinkCol2 to="/contato">
            <p>Contato</p>
          </StyledLinkCol2>
        </Col2>

        <Col3>
          <h3>Follow</h3>

          <StyledLinkCol3 to="https://www.instagram.com/" target="_blank">
            <p>
              <InstagramIcon /> Instagram
            </p>
          </StyledLinkCol3>

          <StyledLinkCol3 to="https://twitter.com/" target="_blank">
            <p>
              <TwitterIcon /> Twitter
            </p>
          </StyledLinkCol3>

          <StyledLinkCol3 to="https://www.facebook.com/" target="_blank">
            <p>
              <FacebookIcon /> Facebook
            </p>
          </StyledLinkCol3>

          <StyledLinkCol3 to="https://www.linkedin.com/" target="_blank">
            <p>
              <LinkedinIcon /> Linkedin
            </p>
          </StyledLinkCol3>
        </Col3>

        <Col4>
          <Maps
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1974904582203!2d-46.65906922391432!3d-23.56134956159323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1717024046274!5m2!1spt-BR!2sbr"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></Maps>
        </Col4>
      </Container>
      <h1> &copy; 2024 - Software Store. Todos os direitos reservados.</h1>
    </FooterSection>
  );
}

export default Footer;
