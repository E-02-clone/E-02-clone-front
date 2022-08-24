import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Gradation from "./components/Gradation";
import FrontBtn from "./components/FrontBtn";
import SaveAndExit from "./components/SaveAndExit";
import HelpBtn from "./components/Help";
import CompletedBar from "./components/CompletedBar";

function WritePageOne({ setType, type, setGetLocation }) {
  const navigate = useNavigate();
  const location = useLocation();

  // 수정버튼으로 왔으면 location.state값을 가지고있음
  if (!isNaN(location?.state?.id)) {
    setGetLocation(location?.state?.id);
  }

  const GoHome = () => {
    navigate("/");
  };

  const seletValue = (value) => {
    setType(value);
  };

  const types = [
    ["typ01", "아파트"],
    ["typ02", "주택"],
    ["typ03", "별채"],
    ["typ04", "독특한 숙소"],
    ["typ05", "B&B"],
    ["typ06", "부티크 호텔"],
  ];

  return (
    <>
      <Gradation />
      <LeftTitle>호스팅할 숙소 유형을 알려주세요.</LeftTitle>
      <RightBicBox>
        <SaveAndExit />
        <HelpBtn />
        <div>
          {types?.map((value) => {
            return (
              <div key={value[0]}>
                <SelectBoxes
                  selected={type == `${value[1]}` ? true : false}
                  onClick={(e) => {
                    seletValue(e.target.innerText);
                  }}
                >
                  {value[1]}
                </SelectBoxes>
              </div>
            );
          })}
        </div>
        <CompletedBar comple={1}></CompletedBar>
        <BackBtn
          onClick={() => {
            GoHome();
          }}
        >
          홈으로
        </BackBtn>
        <FrontBtn />
      </RightBicBox>
    </>
  );
}

const RightBicBox = styled.div`
  margin-left: 50%;
  width: 50%;
  margin-top: -20%;
`;

const LeftTitle = styled.div`
  display: flex;
  color: white;
  font-size: 3em;
  width: 50%;
  margin-top: 23%;
  margin-left: 2%;
  font-weight: 600;
`;

const SelectBoxes = styled.button`
  display: flex;
  width: 50%;
  margin: 12px auto;
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

const BackBtn = styled.button`
  position: fixed;
  top: 84%;
  right: 45%;
  padding: 4px;
  margin-top: 70px;
  border: 1px solid transparent;
  background-color: transparent;
`;

export default WritePageOne;
