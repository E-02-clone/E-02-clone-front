import React from "react";
import styled from "styled-components";

function CompletedBar(prop) {
  return <Line prop={prop?.comple}></Line>;
}

const Line = styled.div`
  position: fixed;
  width: 50%;
  top: 91%;
  border-top: 3px solid darkgray;
  color: transparent;
  z-index: -2;
  right: ${function (prop) {
    if (prop.prop === 1) {
      return "45%";
    } else if (prop.prop === 2) {
      return "40%";
    } else if (prop.prop === 3) {
      return "35%";
    } else if (prop.prop === 4) {
      return "30%";
    } else if (prop.prop === 5) {
      return "25%";
    } else if (prop.prop === 6) {
      return "20%";
    } else if (prop.prop === 7) {
      return "15%";
    } else if (prop.prop === 8) {
      return "10%";
    } else if (prop.prop === 9) {
      return "5%";
    } else {
      return "0%";
    }
  }};
`;

export default CompletedBar;
