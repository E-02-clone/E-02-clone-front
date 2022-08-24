import React from "react";
import styled from "styled-components";

function SaveAndExit() {
  const NotYetFun = () => {
    alert("아직 미구현 입니다.");
  };

  return (
    <>
      <SaveExitBtn
        onClick={() => {
          NotYetFun();
        }}
      >
        저장 및 나가기
      </SaveExitBtn>
    </>
  );
}

const SaveExitBtn = styled.div`
  cursor: pointer;
  position: fixed;
  top: 4%;
  right: 3%;
  font-size: 0.9em;
  font-weight: 600;
`;

export default SaveAndExit;
