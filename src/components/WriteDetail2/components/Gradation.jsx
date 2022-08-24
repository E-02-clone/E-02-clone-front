import React from "react";
import styled from "styled-components";

function Gradation({ text }) {
  return <Background></Background>;
}

const Background = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  box-sizing: border-box;
  z-index: -1;
  background: linear-gradient(#de17a2, #2323c0);
  width: 50%;
`;

export default Gradation;
