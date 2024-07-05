import { useState, useRef } from "react";
import { MagnifierContainer, Image, Lens, ZoomedImage } from "./styles";

// eslint-disable-next-line react/prop-types
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
          top: lensPosition.y - 400,
          left: lensPosition.x - 400,
        }}
        show={showLens}
      >
        <ZoomedImage
          src={src}
          alt="Zoomed"
          style={{
            top: -(lensPosition.y * 2 - 400),
            left: -(lensPosition.x * 2 - 400),
          }}
        />
      </Lens>
    </MagnifierContainer>
  );
}

export default ImageMagnifier;
