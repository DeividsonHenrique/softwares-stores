import PrincipalCard from "../PrincipalCard";
import { Fade } from "react-awesome-reveal";
import { SectionProducts, Title, Products, Card, StyledButton } from "./styles";

function Secao_produtos() {
  return (
    <>
      <SectionProducts>
        <Fade duration={1500}>
          <Title>Produtos / softwares</Title>
        </Fade>

        <Products>
          <Card
            cascade
            damping={0.1}
            delay={100}
            duration={300}
            direction="down"
            triggerOnce
          >
            <PrincipalCard />
          </Card>
        </Products>

        <Fade duration={1500}>
          <StyledButton to="/todos_produtos">
            Ver todos os produtos
          </StyledButton>
        </Fade>
      </SectionProducts>
    </>
  );
}

export default Secao_produtos;
