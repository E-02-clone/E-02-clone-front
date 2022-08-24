import React from "react";
import styled from "styled-components";
import Gradation from "./components/Gradation";
import FrontBtn from "./components/FrontBtn";
import RearBtn from "./components/RearBtn";
import SaveAndExit from "./components/SaveAndExit";
import HelpBtn from "./components/Help";
import CompletedBar from "./components/CompletedBar";

function WritePageTwo({ setCategory, category }) {
  const seletValue = (value) => {
    setCategory(value);
  };

  const categories = [
    ["cat11", "기상천외한 숙소"],
    ["cat12", "국립공원"],
    ["cat13", "통나무집"],
    ["cat14", "섬"],
    ["cat15", "해변 근처"],
  ];

  return (
    <>
      <Gradation />
      <LeftTitle>다음 중 숙소를 가장 잘 설명하는 문구는 무엇인가요?</LeftTitle>
      <RightBicBox>
        <SaveAndExit />
        <HelpBtn />
        {categories?.map((value) => {
          return (
            <div key={value[0]}>
              <SelectBoxes
                selected={category == `${value[1]}` ? true : false}
                onClick={(e) => {
                  seletValue(e.target.innerText);
                }}
              >
                {value[1]}
              </SelectBoxes>
            </div>
          );
        })}
        <CompletedBar comple={2}></CompletedBar>
        <RearBtn />
        <FrontBtn />
      </RightBicBox>
    </>
  );
}

const RightBicBox = styled.div`
  width: 50%;
  margin-left: 50%;
  margin-top: -20%;
`;

const LeftTitle = styled.div`
  display: flex;
  color: white;
  font-size: 3em;
  width: 50%;
  margin-top: 22%;
  margin-left: 1%;
  font-weight: 600;
`;

const SelectBoxes = styled.button`
  display: flex;
  width: 50%;
  margin: 13px auto;
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

export default WritePageTwo;
