import React from "react";
import styled from "styled-components";

function BnbSupport() {
  const first = [
    "도움말 센터",
    "에어커버",
    "안전정보",
    "장애인 지원",
    "예약 취소 옵션",
    "에어비앤비의 코로나19 대응 방안",
    "이웃 민원 신고",
  ];

  const second = [
    "Airbnb.org: 재난 구호 숙소",
    "아프간 난민 지원",
    "차별 철폐를 위한 노력",
  ];

  const third = [
    "호스팅 시작하기",
    "호스트를 위한 에어커버",
    "호스팅 자료 둘러보기",
    "커뮤니티 포럼 방문하기",
    "책임감 있는 호스팅",
  ];

  const forth = [
    "뉴스룸",
    "새로운 기능에 대해 알아보기",
    "에어비앤비 공동창업자의 메시지",
    "채용정보",
    "투자자 정보",
  ];

  const AlertBtn = () => {
    alert("아직 미구현 입니다.");
  };

  return (
    <ForBack>
      <hr />
      <AllBox>
        <ThreeBox>
          <div>
            <TopTitle>에어비앤비 지원</TopTitle>
            {first?.map((value) => {
              return (
                <Content
                  onClick={() => {
                    AlertBtn();
                  }}
                >
                  {value}
                </Content>
              );
            })}
          </div>
          <div>
            <TopTitle>커뮤니티</TopTitle>
            {second?.map((value) => {
              return (
                <Content
                  onClick={() => {
                    AlertBtn();
                  }}
                >
                  {value}
                </Content>
              );
            })}
          </div>
          <div>
            <TopTitle>호스팅</TopTitle>
            {third?.map((value) => {
              return (
                <Content
                  onClick={() => {
                    AlertBtn();
                  }}
                >
                  {value}
                </Content>
              );
            })}
          </div>
          <div>
            <TopTitle>에어비앤비</TopTitle>
            {forth?.map((value) => {
              return (
                <Content
                  onClick={() => {
                    AlertBtn();
                  }}
                >
                  {value}
                </Content>
              );
            })}
          </div>
        </ThreeBox>
      </AllBox>
    </ForBack>
  );
}

const ForBack = styled.div`
  background-color: #e6e6e6;
`;

const AllBox = styled.div`
  width: 73%;
  margin: auto;
  margin-bottom: 10px;
`;

const ThreeBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TopTitle = styled.div`
  font-size: 1.1em;
  font-weight: 700;
  margin-bottom: 12px;
`;

const Content = styled.div`
  margin-bottom: 7px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

export default BnbSupport;
