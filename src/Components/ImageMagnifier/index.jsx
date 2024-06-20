/* eslint-disable react/prop-types */
//import styles from './ImageMagnifier.module.css'
import { useState, useRef } from "react";
import styled from "styled-components";

//styles

const MagnifierContainer = styled.div`
  position: relative;
  width: 350px;
  height: 350px;
  border: 1px solid #ddd;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 80%;
  height: 80%;
`;

const Lens = styled.div`
  position: absolute;
  border: 3px solid #000;
  width: 800px;
  height: 800px;
  background: rgba(255, 255, 255, 0.4);
  display: ${({ show }) => (show ? 'block' : 'none')};
  cursor: none;
  overflow: hidden;
  z-index: 1;
`;

const ZoomedImage = styled.img`
  position: absolute;
  width: 600px; /* 2x of the original size */
  height: 600px; /* 2x of the original size */
`;

//styles

//import imagem1 from "../../assets/images/exemplos/adobe/photoshop/imagem1.png"

function ImageMagnifier({ src }) {
  const [lensPosition, setLensPosition] = useState({ x: 0, y: 0 });
  const [showLens, setShowLens] = useState(false);
  const imgRef = useRef();

  const handleMouseMove = (e) => {
    const { left, top, width, height } = imgRef.current.getBoundingClientRect();
    const x = e.pageX - left - window.scrollX;
    const y = e.pageY - top - window.scrollY;

    if (x < 0 || y < 0 || x > width || y > height) {
      setShowLens(false);
    } else {
      setShowLens(true);
      setLensPosition({ x, y });
    }
  };

  return (
    <MagnifierContainer
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setShowLens(false)}
    >
      <Image ref={imgRef} src={src} alt="Magnifiable" />
      <Lens
        style={{
          top: lensPosition.y - 350,
          left: lensPosition.x - 350,
        }}
        show={showLens}
      >
        <ZoomedImage
          src={src}
          alt="Zoomed"
          style={{
            top: -(lensPosition.y * 2 - 350),
            left: -(lensPosition.x * 2 - 350),
          }}
        />
      </Lens>
    </MagnifierContainer>
  );
}


export default ImageMagnifier