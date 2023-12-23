// Componente Botones
import React from "react";
import { FaFilePdf, FaImage, FaYoutube } from "react-icons/fa";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 320px;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #fff;
  text-align: center;
  padding: 8px;
  border-radius: 8px;
  background-color: #333;
  margin: 0 8px;

  &:hover {
    background-color: #2e7d32;
  }

  span {
    margin-top: 2px;
    display: block;
    font-size: 12px; /* Ajusta este valor para cambiar el tamaño del texto */
  }
`;

function Botones() {
  return (
    <StyledContainer>
      <StyledLink
        href="https://firebasestorage.googleapis.com/v0/b/girasol-lu.appspot.com/o/pdf%2Fescrito_lu%2FEscritoLu.pdf?alt=media&token=3e9a1832-a9a6-453a-a313-66ff855164e1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFilePdf size={30} />
        <span>Escrito en PDF</span>
      </StyledLink>
      <StyledLink
        href="https://firebasestorage.googleapis.com/v0/b/girasol-lu.appspot.com/o/imagenes%2Fescrito_lu%2FEscritoLu.jpg?alt=media&token=3871bb2e-d906-43c2-8b75-8e1935bed601"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaImage size={30} />
        <span>Escrito en Imagen</span>
      </StyledLink>
      <StyledLink
        href="https://youtube.com/playlist?list=PLCqXUYpKflkPUnEqGvgAXMDtqZmfkypGu&si=gUtg1IUHeOGVTqZV"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaYoutube size={30} />
        <span>Música</span>
      </StyledLink>
    </StyledContainer>
  );
}

export default Botones;
