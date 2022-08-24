import React from "react";
import styled from "styled-components";
import Gradation from "./components/Gradation";
import FrontBtn from "./components/FrontBtn";
import RearBtn from "./components/RearBtn";
import SaveAndExit from "./components/SaveAndExit";
import HelpBtn from "./components/Help";
import CompletedBar from "./components/CompletedBar";

function WritepageFour({ location_ref, setLocation }) {
  const seletValue = (value) => {
    setLocation(value);
  };

  return (
    <>
      <Gradation />
      <LeftTitle>숙소 위치는 어디인가요?</LeftTitle>
      <RightBicBox>
        <SaveAndExit />
        <HelpBtn />
        <Location>
          <TextBox>
            <div>LOCATION</div>
            <LocationName>지역명을 입력해주세요.</LocationName>
          </TextBox>
          <textarea
            onChange={() => {
              seletValue(location_ref.current.value);
            }}
            ref={location_ref}
            maxLength="20"
          />
        </Location>
        <CompletedBar comple={4}></CompletedBar>
        <RearBtn />
        <FrontBtn />
      </RightBicBox>
    </>
  );
}

const RightBicBox = styled.div`
  width: 50%;
  margin-left: 50%;
  margin-top: -8%;
`;

const TextBox = styled.div`
  display: flex;
`;

const LocationName = styled.div`
  margin-left: 30px;
  font-size: 0.8em;
  margin-top: 3px;
`;

const LeftTitle = styled.div`
  display: flex;
  color: white;
  font-size: 3em;
  width: 48%;
  margin-top: 22%;
  margin-left: 1%;
  font-weight: 600;
`;

const Location = styled.div`
  float: left;
  font-weight: bold;
  font-size: 23px;
  margin-left: 120px;
  margin-top: 50px;
  textarea {
    height: 40px;
    width: 130%;
    margin-top: 10px;
    border: 1px solid black;
    border-radius: 5px;
    resize: none;
  }
`;

export default WritepageFour;
