import React from "react";
import styled from "styled-components";
import CompletedBar from "./components/CompletedBar";
import FrontBtn from "./components/FrontBtn";
import HelpBtn from "./components/Help";
import RearBtn from "./components/RearBtn";
import SaveAndExit from "./components/SaveAndExit";

function WritepageEight({ setTitle, title_ref }) {
  const seletValue = (value) => {
    setTitle(value);
  };

  return (
    <>
      <Video autoPlay loop>
        <source
          src="https://a0.muscache.com/v/d6/12/d6120feb-75fc-52dd-b5bb-5755913fb756/d6120feb75fc52ddb5bb5755913fb756_4000k_1.mp4?imformat=h265"
          type="video/mp4; codecs=hevc"
        ></source>
        <source
          src="https://a0.muscache.com/v/33/20/3320c65c-5167-5999-ad8b-89c6c0c27b53/3320c65c51675999ad8b89c6c0c27b53_4000k_1.mp4"
          type="video/mp4"
        ></source>
      </Video>
      <LeftTitle>숙소 이름을 만들어주세요.</LeftTitle>
      <RightBicBox>
        <SaveAndExit />
        <HelpBtn />
        <Title>
          <div>숙소 이름 정하기</div>
          <textarea
            maxLength="50"
            ref={title_ref}
            onChange={() => {
              seletValue(title_ref.current.value);
            }}
          />
        </Title>
        <CompletedBar comple={8}></CompletedBar>
        <FrontBtn />
        <RearBtn />
      </RightBicBox>
    </>
  );
}

const RightBicBox = styled.div`
  width: 50%;
  margin-left: 50%;
  margin-top: -33%;
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
  margin-top: 50px;
  textarea {
    font-size: 18px;
    height: 80px;
    width: 190%;
    margin-top: 10px;
    border: 1px solid black;
    border-radius: 5px;
    resize: none;
  }
`;
export default WritepageEight;
