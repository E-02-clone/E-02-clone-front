import React from "react";
import styled from "styled-components";
import Gradation from "./components/Gradation";
import FrontBtn from "./components/FrontBtn";
import RearBtn from "./components/RearBtn";
import SaveAndExit from "./components/SaveAndExit";
import HelpBtn from "./components/Help";
import CompletedBar from "./components/CompletedBar";

function WritepageThree({ setSpace, space }) {
  const seletValue = (value) => {
    setSpace(value);
  };

  return (
    <>
      <Gradation />
      <LeftTitle>게스트가 머무르게 될 숙소의 종류가 무엇인가요?</LeftTitle>
      <RightBicBox>
        <SaveAndExit />
        <HelpBtn />
        <div>
          <SelectBoxes
            selected={space == "공간 전체" ? true : false}
            onClick={() => {
              seletValue("공간 전체");
            }}
          >
            공간 전체
          </SelectBoxes>
          <SelectBoxes
            selected={space == "개인실" ? true : false}
            onClick={() => {
              seletValue("개인실");
            }}
          >
            개인실
          </SelectBoxes>
          <SelectBoxes
            selected={space == "다인실" ? true : false}
            onClick={() => {
              seletValue("다인실");
            }}
          >
            다인실
          </SelectBoxes>
        </div>
        <CompletedBar comple={3}></CompletedBar>
        <RearBtn />
        <FrontBtn />
      </RightBicBox>
    </>
  );
}

const RightBicBox = styled.div`
  width: 50%;
  margin-left: 50%;
  margin-top: -13%;
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

const SelectBoxes = styled.button`
  display: flex;
  width: 50%;
  margin: 15px auto;
  padding: 3%;
  border-radius: 12px;
  font-weight: 600;
  background-color: white;
  :hover {
    border: 2px solid black;
  }
  border: ${(prop) =>
    prop.selected ? "2px solid black" : "2px solid lightgray"};
`;

export default WritepageThree;
