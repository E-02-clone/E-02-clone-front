import React from "react";
import styled from "styled-components";

function HelpBtn() {
  const NotYetFun = () => {
    alert("아직 미구현 입니다.");
  };

  return (
    <>
      <HelpBtns
        onClick={() => {
          NotYetFun();
        }}
      >
        도움말
      </HelpBtns>
    </>
  );
}

const HelpBtns = styled.div`
  cursor: pointer;
  position: fixed;
  top: 4%;
  right: 11%;
  font-size: 0.9em;
  font-weight: 600;
`;

export default HelpBtn;
