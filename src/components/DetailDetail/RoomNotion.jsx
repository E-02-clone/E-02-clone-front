import React from "react";
import styled from "styled-components";

function RoomNotion() {
  const MoreWantBtn = () => {
    alert("아직 미구현 입나다.");
  };
  return (
    <>
      <MainBox>
        <div style={{ fontWeight: "600", fontSize: "1.5em" }}>
          알아두어야 할 사항
        </div>
        <NotionBox>
          <div>
            <div>숙소 이용 규칙</div>
            <div>체크인: 오후 2:00 - 오후 5:00</div>
            <div>체크아웃 시간: 오전 11:00</div>
            <div>흡연 금지</div>
            <div>반려동물 동반 불가</div>
            <div>파티나 이벤트 금지</div>
            <MoreBtn
              onClick={() => {
                MoreWantBtn();
              }}
            >
              더보기
            </MoreBtn>
          </div>
          <div>
            <div>건강과 안전</div>
            <div>에어비앤비 코로나19 방역 수칙을 준수하셔야 합니다.</div>
            <div>일산화탄소 경보기 설치 여부 정보 없음</div>
            <div>화재경보기 설치 여부 정보 없음</div>
            <MoreBtn
              onClick={() => {
                MoreWantBtn();
              }}
            >
              더보기
            </MoreBtn>
          </div>
          <div>
            <div>환불 정책</div>
            <div>12월 8일 전까지 무료로 취소하실 수 있습니다.</div>
            <MoreBtn
              onClick={() => {
                MoreWantBtn();
              }}
            >
              더보기
            </MoreBtn>
          </div>
        </NotionBox>
      </MainBox>
    </>
  );
}

const MainBox = styled.div`
  width: 73%;
  margin: 0px auto 50px auto;
`;

const NotionBox = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

const MoreBtn = styled.div`
  font-weight: 600;
  text-decoration: underline;
  margin-top: 10px;
  cursor: pointer;
`;

export default RoomNotion;
