// import styles from "./Container.module.css";
import Footer from "../Footer";
import Software002 from "../Software002";
import Secao_produtos from "../Secao_produtos";
import Software003 from "../Software003";
import Software001 from "../Software001";
import { Fade } from "react-awesome-reveal";
import { useEffect } from "react";

function Container() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Secao_produtos />
      <Software001 />
      <Software002 />
      <Software003 />
      <Fade duration={1000}>
        <Footer />
      </Fade>
    </>
  );
}

export default Container;
