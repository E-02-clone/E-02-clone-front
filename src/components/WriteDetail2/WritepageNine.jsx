import React from "react";
import styled from "styled-components";
import CompletedBar from "./components/CompletedBar";
import FrontBtn from "./components/FrontBtn";
import HelpBtn from "./components/Help";
import RearBtn from "./components/RearBtn";
import SaveAndExit from "./components/SaveAndExit";

function WritepageNine({ content_ref, setContent }) {
  const seletValue = (value) => {
    setContent(value);
  };

  return (
    <>
      <Video autoPlay loop>
        <source
          src="https://a0.muscache.com/v/d6/12/d6120feb-75fc-52dd-b5bb-5755913fb756/d6120feb75fc52ddb5bb5755913fb756_4000k_1.mp4?imformat=h265"
          type="video/mp4; codecs=hevc"
        ></source>
        <source
          src="https://a0.muscache.com/v/55/86/558653ec-da4e-5148-b0e2-828b7a691e86/558653ecda4e5148b0e2828b7a691e86_4000k_1.mp4"
          type="video/mp4"
        ></source>
      </Video>
      <LeftTitle>숙소에 대해 설명해 주세요.</LeftTitle>
      <RightBicBox>
        <SaveAndExit />
        <HelpBtn />
        <Title>
          <div>숙소 설명 작성하기</div>
          <textarea
            maxLength="500"
            ref={content_ref}
            onChange={() => {
              seletValue(content_ref.current.value);
            }}
          />
        </Title>
        <CompletedBar comple={9}></CompletedBar>
        <FrontBtn />
        <RearBtn />
      </RightBicBox>
    </>
  );
}

const RightBicBox = styled.div`
  width: 50%;
  margin-left: 50%;
  margin-top: -32%;
`;

const LeftTitle = styled.div`
  display: flex;
  color: white;
  font-size: 3em;
  width: 48%;
  margin-top: 44%;
  margin-left: 2%;
  font-weight: 600;
`;

const Video = styled.video`
  display: flex;
  width: 50%;
  z-index: -1;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const Title = styled.div`
  float: left;
  font-weight: bold;
  font-size: 23px;
  margin-left: 120px;
  margin-top: 30px;
  textarea {
    font-size: 17px;
    height: 150px;
    width: 240%;
    margin-top: 10px;
    border: 1px solid black;
    border-radius: 5px;
    resize: none;
  }
`;

const BackBtn = styled.button`
  position: fixed;
  top: 84%;
  right: 45%;
  padding: 4px;
  margin-top: 70px;
  border: 1px solid transparent;
  background-color: transparent;
`;

const GoFront = styled.button`
  position: fixed;
  top: 84%;
  right: 2%;
  padding: 4px;
  margin-top: 70px;
  border: 1px solid transparent;
  background-color: transparent;
`;

export default WritepageNine;
