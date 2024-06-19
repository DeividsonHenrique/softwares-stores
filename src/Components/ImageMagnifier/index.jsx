/* eslint-disable react/prop-types */
//import styles from './ImageMagnifier.module.css'
import { useState, useRef } from "react";
import styled from "styled-components";

//styles

const MagnifierContainer = styled.div`
  position: relative;
  width: 1000px;
  height: 750px;
  border: 1px solid #ddd;
  overflow: hidden;
`;

const Image = styled.img`
  width: 1000px;
  height: 750px;
`;

const Lens = styled.div`
  position: absolute;
  width: 1000px;
  height: 750px;
  background: rgba(255, 255, 255, 0.4);
  display: ${({ show }) => (show ? 'block' : 'none')};
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 1s ease-in-out;
`;

const ZoomedImage = styled.img`
  position: absolute;
  width: 1000px; /* 2x of the original size */
  height: 1000px; /* 2x of the original size */
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
          top: lensPosition.y - 375,
          left: lensPosition.x - 500,
        }}
        show={showLens}
      >
        <ZoomedImage
          src={src}
          alt="Zoomed"
          style={{
            top: -(lensPosition.y * 2 - 375),
            left: -(lensPosition.x * 2 - 500),
          }}
        />
      </Lens>
    </MagnifierContainer>
  );
}

export default ImageMagnifier