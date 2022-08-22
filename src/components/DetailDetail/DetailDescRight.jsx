import React from "react";
import styled from "styled-components";

function DetailDescRight({ price, star }) {
  const plusPrice = 0;

  return (
    <>
      <MiddleRightBox>
        <StickyTopBox>
          <StickyTitle>
            <div>
              <span style={{ fontWeight: "700", fontSize: "1.3em" }}>
                ₩ {price}
              </span>
              <span style={{ fontSize: "1.1em" }}> / 박</span>
            </div>
            <div style={{ marginTop: "5px" }}>
              <span>★ {star} </span>
              <span>・ 후기 54개</span>
            </div>
          </StickyTitle>
          <div style={{ display: "flex", marginTop: "13px", flexWrap: "wrap" }}>
            <DeciedeOne>
              <CheckText>체크인</CheckText>
              <DayAndPerson>2022.09.07</DayAndPerson>
            </DeciedeOne>
            <DecideTwo>
              <CheckText>체크아웃</CheckText>
              <DayAndPerson>2022.09.11</DayAndPerson>
            </DecideTwo>
            <DecideThree>
              <CheckText>인원</CheckText>
              <DayAndPerson>게스트 1명</DayAndPerson>
            </DecideThree>
          </div>
          <BookBtn
            onClick={() => {
              alert("아직 미구현 입니다.");
            }}
          >
            예약하기
          </BookBtn>
          <NotionText>예약 확정 전에는 요금이 청구되지 않습니다.</NotionText>
          <FinalInfo>
            <div style={{ textDecoration: "underline" }}>₩{price} x 3박</div>
            <div>₩{price * 3}</div>
          </FinalInfo>
          <FinalInfo>
            <div style={{ textDecoration: "underline", marginTop: "10px" }}>
              서비스 수수료
            </div>
            <div style={{ marginTop: "10px" }}>₩{plusPrice}</div>
          </FinalInfo>
          <hr />
          <FinalInfo2>
            <div>총합계</div>
            <div>₩{price * 3 + plusPrice}</div>
          </FinalInfo2>
        </StickyTopBox>
        <ReportBtn
          onClick={() => {
            alert("아직 미구현 입니다.");
          }}
        >
          숙소 신고하기
        </ReportBtn>
      </MiddleRightBox>
    </>
  );
}

const MiddleRightBox = styled.div`
  width: 35%;
  margin-left: 2%;
  height: 1500px;
`;

const StickyTopBox = styled.div`
  position: sticky;
  height: 440px;
  top: 30px;
  padding: 24px;

  border: 1px solid lightgray;
  border-radius: 10px;
`;

const StickyTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DeciedeOne = styled.div`
  border-top: 1px solid #a5a5a5;
  border-left: 1px solid #a5a5a5;
  border-top-left-radius: 10px;
  width: 50%;
  height: 55px;
`;

const DecideTwo = styled.div`
  width: 50%;
  border-top: 1px solid #a5a5a5;
  border-right: 1px solid #a5a5a5;
  border-left: 1px solid #a5a5a5;

  border-top-right-radius: 10px;
  height: 55px;
`;

const DecideThree = styled.div`
  width: 100%;
  border: 1px solid #a5a5a5;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 55px;
`;

const CheckText = styled.div`
  margin-top: 6px;
  margin-left: 7px;
  font-size: 0.8em;
  font-weight: 700;
`;

const DayAndPerson = styled.div`
  font-size: 0.9em;
  margin-left: 7px;
`;

const BookBtn = styled.div`
  width: 90%;
  height: 50px;
  margin: auto;
  background-color: #ff385c;
  color: white;
  margin-top: 15px;
  border-radius: 7px;
  text-align: center;
  padding-top: 11px;
  font-size: 1.1em;
  cursor: pointer;
`;

const NotionText = styled.div`
  margin: 10px auto;
  width: 85%;
`;

const FinalInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FinalInfo2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
  div {
    font-size: 1.1em;
    font-weight: 600;
  }
`;

const ReportBtn = styled.div`
  width: 25%;
  margin: 10px auto;
  font-weight: 300;
  cursor: pointer;
`;

export default DetailDescRight;
