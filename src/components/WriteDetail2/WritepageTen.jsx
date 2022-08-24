import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CompletedBar from "./components/CompletedBar";
import HelpBtn from "./components/Help";
import RearBtn from "./components/RearBtn";
import SaveAndExit from "./components/SaveAndExit";

const WritepageTen = ({ setThePrice, WriteDone }) => {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    setThePrice(price);
  }, [price]);

  const WriteFinish = async () => {
    await WriteDone();
  };

  return (
    <>
      <Video autoPlay loop>
        <source
          src="https://a0.muscache.com/v/d6/12/d6120feb-75fc-52dd-b5bb-5755913fb756/d6120feb75fc52ddb5bb5755913fb756_4000k_1.mp4?imformat=h265"
          type="video/mp4; codecs=hevc"
        ></source>
        <source
          src="https://a0.muscache.com/v/9c/d4/9cd47434-c6bd-58ec-90b7-b50aa7dba461/9cd47434c6bd58ec90b7b50aa7dba461_4000k_1.mp4"
          type="video/mp4"
        ></source>
      </Video>
      <LeftTitle>이제 요금을 설정하실 차례입니다</LeftTitle>
      <SaveAndExit />
      <HelpBtn />
      <div
        style={{
          marginLeft: "50%",
          width: "50%",
          marginTop: "-35%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <PriceButton
            state={price <= 13426}
            onClick={() => {
              price - 1000 < 13426 ? setPrice(13426) : setPrice(price - 1000);
            }}
          >
            <div>-</div>
          </PriceButton>
          <div style={{ margin: "0 32px" }}>
            <PriceInput
              placeholder="₩00"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </div>
          <PriceButton
            onClick={() => {
              price < 13426 ? setPrice(13426) : setPrice(price + 1000);
            }}
          >
            <div>+</div>
          </PriceButton>
        </div>
        <div style={{ textAlign: "center" }}>/박</div>
        <div style={{ width: "100%" }}>
          <PriceRecommend>
            &nbsp;이와 비슷한 숙소의 요금은 보통 ₩35,156~₩58,593 사이입니다.
          </PriceRecommend>
        </div>
        <SaleButtonLabel>
          <div style={{ width: "430px" }}>
            첫 3명의 게스트에게 20% 할인 혜택을 제공하여 예약률을 높여보세요.{" "}
            <b>
              <u>자세히 알아보기</u>
            </b>
          </div>
          <SalePriceCheckBox type="checkbox" />
        </SaleButtonLabel>
        <CompletedBar comple={10}></CompletedBar>
        <RearBtn />
        <GoFront
          onClick={() => {
            WriteFinish();
          }}
        >
          작성 완료
        </GoFront>
      </div>
    </>
  );
};

export default WritepageTen;

const SaleButtonLabel = styled.label`
  width: 500px;
  display: flex;
  margin: 72px 0;
  border: 1px solid lightgray;
  padding: 20px 10px;
  border-radius: 20px;
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

const LeftTitle = styled.div`
  display: flex;
  color: white;
  font-size: 3em;
  width: 48%;
  margin-top: 44%;
  margin-left: 2%;
  font-weight: 600;
`;

const PriceRecommend = styled.p`
  width: 320px;
  font-size: 20px;
  margin: auto;
  padding-top: 32px;
`;

const PriceButton = styled.button`
  font-size: 24px;
  width: 48px;
  height: 48px;
  border-radius: 48px;
  color: black;
  border: 1px solid black;
  background-color: transparent;
  opacity: ${(prop) => (prop.state ? 0.2 : 0.5)};
  font-weight: bold;
  &:hover {
    opacity: ${(prop) => (prop.state ? 0.2 : 0.8)};
    cursor: ${(prop) => (prop.state ? "not-allowed" : "pointer")};
  }
  div {
    text-align: center;
    width: 36px;
    height: 40px;
    margin: auto;
  }
`;
const PriceInput = styled.input`
  text-align: center;
  height: 96px;
  width: 300px;
  margin: 8px 12px;
  border: 2px solid lightgray;
  border-radius: 5px;
  font-size: 64px;
  font-weight: bold;
`;

const SalePriceCheckBox = styled.input`
  width: 24px;
  margin-left: 24px;
  background-color: black;
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
