import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import copyURL from "../../utils/copyURL";

function MorePictures({ ModalShow, setModalShow, img }) {
  let forkey = [];
  const makekey = () => {
    img.map((value) => {
      const forpush = value.slice(76, 83);
      forkey.push(forpush);
      return forkey;
    });
  };

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

          <Btns
            onClick={() => {
              copyURL();
            }}
          >
            공유하기
          </Btns>
          <Btns>♡ 하트</Btns>
        </ThreeBtn>
        <ImagesBox>
          {img?.length &&
            img.map((value) => {
              return (
                <Images
                  src={`${value}`}
                  key={value[79] + value[81] + value[82]}
                />
              );
            })}
        </ImagesBox>
      </ModalContainer>
    </Background>
  );
}

const ThreeBtn = styled.div`
  position: fixed;
  margin-bottom: 50px;
  width: 95%;
`;

const Images = styled.img`
  width: 100%;
  height: 100%;
  margin-bottom: 15px;
`;

const Btns = styled.div`
  background-color: white;
  margin-left: 30px;
  margin-right: 10px;
  text-decoration: underline;
  float: right;
  cursor: pointer;
`;

const ImagesBox = styled.div`
  width: 50%;
  margin-left: auto;
  margin-right: auto;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0);
  z-index: 0;
  overflow-y: auto;
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
  padding: 20px;
  background: white;
  transition: all 300ms ease-in;
  animation: ${modalShowKF} 0.3s;
`;
export default MorePictures;
