import React from "react";
import styled from "styled-components";

function DetailDescLift({ auth, category, content, img2 }) {
  return (
    <>
      <MiddleLeftBox>
        <DescribeTitle>
          {auth}님이 호스팅하는 {category}
        </DescribeTitle>
        <div>최대 인원 2명 ・ 침실 1개 ・ 침대 1개 ・ 욕실 1개</div>
        <hr />
        <div style={{ display: "flex" }}>
          <img
            src="/images/Medal.png"
            alt="medal"
            style={{ height: "100%", marginRight: "10px" }}
          />
          <div>
            <div>{auth}님은 슈퍼호스트입니다</div>
            <div>
              슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하며 게스트가 숙소에서
              편안히 머무를 수 있도록 최선을 다하는 호스트입니다.
            </div>
          </div>
        </div>
        <div style={{ display: "flex", marginTop: "20px" }}>
          <img
            src="/images/Map.png"
            alt="map"
            style={{ height: "100%", marginRight: "10px" }}
          />
          <div>
            <div>훌륭한 숙소 위치</div>
            <div>
              최근 숙박한 게스트 중 90%가 위치에 별점 5점을 준 숙소입니다.
            </div>
          </div>
        </div>
        <div style={{ display: "flex", marginTop: "20px" }}>
          <img src="/images/CalendarMini.png" alt="CalMini" />
          <div style={{ marginTop: "8px", marginLeft: "10px" }}>
            8월 26일 전까지 무료로 취소하실 수 있습니다.
          </div>
        </div>
        <hr />
        <div>
          <div>
            <span>일부 정보는 원어로 표시됩니다.</span>
            <span
              onClick={() => {
                alert("아직 미구현 입니다");
              }}
              style={{
                fontWeight: "600",
                textDecoration: "underline",
                marginLeft: "10px",
                cursor: "pointer",
              }}
            >
              번역
            </span>
          </div>
          <div
            style={{
              marginTop: "10px",
            }}
          >
            {content}
          </div>
        </div>
        <hr />
        <div
          style={{
            marginBottom: "10px",
          }}
        >
          숙박장소
        </div>
        {img2?.length ? (
          <SmallPictrueFour
            src={`${img2}`}
            style={{
              width: "70%",
              borderRadius: "10px",
            }}
          />
        ) : null}
        <hr />
        <img
          src="/images/Convenient.png"
          alt="convenient"
          style={{
            width: "95%",
          }}
        />
        <MoreConvenient
          onClick={() => {
            alert("아직 미구현 입니다");
          }}
        >
          편의시설 모두 보기
        </MoreConvenient>
        <img
          src="/images/Calendar.png"
          alt="Calender"
          style={{
            width: "90%",
          }}
        />
      </MiddleLeftBox>
    </>
  );
}

const SmallPictrueFour = styled.img`
  margin: auto;

  width: 48%;
  height: 46%;
  margin-top: 2px;
  border-bottom-right-radius: 10px;
`;

const MiddleLeftBox = styled.div`
  width: 63%;
  /* background-color: #e4dada; */
  height: 100%;
`;

const DescribeTitle = styled.div`
  font-weight: 500;
  font-size: 24px;
`;

const MoreConvenient = styled.button`
  padding: 11px;
  border: 1px solid black;
  background-color: white;
  border-radius: 9px;
  margin-bottom: 30px;
  width: 25%;
`;

export default DetailDescLift;
