import styled from "styled-components";

export const MagnifierContainer = styled.div`
  position: relative;
  width: 350px;
  height: 350px;
  border: 1px solid #ddd;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 80%;
  height: 80%;
`;

export const Lens = styled.div`
  position: absolute;
  border: 3px solid #000;
  width: 800px;
  height: 800px;
  background: rgba(255, 255, 255, 0.4);
  display: ${({ show }) => (show ? "block" : "none")};
  cursor: none;
  overflow: hidden;
  z-index: 1;
`;

export const ZoomedImage = styled.img`
  position: absolute;
  width: 600px; /* 2x of the original size */
  height: 600px; /* 2x of the original size */
`;
