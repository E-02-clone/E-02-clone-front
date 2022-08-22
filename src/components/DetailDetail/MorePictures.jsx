import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

function MorePictures({ ModalShow, setModalShow }) {
  return (
    <Background style={{ display: `${ModalShow}` }}>
      <ModalContainer style={{ display: `${ModalShow}` }}>
        <ThreeBtn>
          <button
            style={{
              border: "1px solid white",
              backgroundColor: "white",
              width: "5%",
              height: "7%",
            }}
            onClick={() => {
              setModalShow("none");
            }}
          >
            〈
          </button>
          <div style={{ display: "flex" }}>
            <Btns>공유하기</Btns>
            <Btns>♡ 하트</Btns>
          </div>
        </ThreeBtn>
        <ImagesBox>
          <div>이미지들</div>
          <div>이미지들</div>
          <div>이미지들</div>
          <div>이미지들</div>
          <div>이미지들</div>
          <div>이미지들</div>
        </ImagesBox>
      </ModalContainer>
    </Background>
  );
}

const ThreeBtn = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const Btns = styled.div`
  background-color: white;
  margin-left: 30px;
  margin-right: 10px;
  text-decoration: underline;
`;

const ImagesBox = styled.div`
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  background-color: skyblue;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 0;
`;

const modalShowKF = keyframes`
    from {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
    }
    to {
        opacity: 1;
        transform: translateZ(0);
    }
`;

const ModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  padding: 20px;
  background: white;
  transition: all 300ms ease-in;
  animation: ${modalShowKF} 0.3s;
`;
export default MorePictures;
