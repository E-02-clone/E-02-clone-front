import React, { useState } from "react";
import styled from "styled-components";
import CompletedBar from "./components/CompletedBar";
import Gradation from "./components/Gradation";
import HelpBtn from "./components/Help";
import RearBtn from "./components/RearBtn";
import SaveAndExit from "./components/SaveAndExit";

function WritepageFive({ GoFrontBtn, setRoomCount }) {
  const [guest, setGuest] = useState(0);
  const [bedCount, setBedCount] = useState(0);
  const [bedRoom, setBedRoom] = useState(0);
  const [bathroom, setBathroom] = useState(0);

  // 받은 4개의 자료를 WriteTwo에 저장해준다.
  const submit = async () => {
    setRoomCount({ guest, bed: bedCount, bedRoom, bathRoom: bathroom });
    await GoFrontBtn();
  };

  const PlusClick = (value, setValue) => {
    setValue(value + 1);
  };

  const MinusClick = (value, setValue) => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  const guestThings = [
    ["gue01", "게스트", guest, setGuest],
    ["gue02", "침대", bedCount, setBedCount],
    ["gue03", "침실", bedRoom, setBedRoom],
    ["gue04", "욕실", bathroom, setBathroom],
  ];

  return (
    <>
      <Gradation />
      <LeftTitle>숙소에서 맞이할 최대 인원수를 알려주세요.</LeftTitle>
      <RightBicBox>
        <SaveAndExit />
        <HelpBtn />
        {guestThings?.map((value) => {
          return (
            <SelectBox key={value[0]}>
              <Text>{value[1]}</Text>
              <div>
                <PlusMinusBtn
                  onClick={() => {
                    MinusClick(value[2], value[3]);
                  }}
                >
                  ⎻
                </PlusMinusBtn>
                <span>{value[2]}</span>
                <PlusMinusBtn
                  onClick={() => {
                    PlusClick(value[2], value[3]);
                  }}
                >
                  +
                </PlusMinusBtn>
              </div>
            </SelectBox>
          );
        })}
      </RightBicBox>
      <CompletedBar comple={5}></CompletedBar>
      <RearBtn />
      <GoFront
        onClick={() => {
          submit();
        }}
      >
        다음
      </GoFront>
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

const SelectBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 30px auto;
  span {
    font-size: 1.1em;
  }
`;

const Text = styled.div`
  font-size: 1.5em;
  font-weight: 600;
`;

const PlusMinusBtn = styled.button`
  width: 25px;
  margin-right: 12px;
  margin-left: 12px;
  background-color: white;
  border: 2px solid lightgray;
  border-radius: 50px;
  :hover {
    border: 2px solid black;
  }
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

export default WritepageFive;
