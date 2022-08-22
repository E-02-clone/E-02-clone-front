import React from "react";
import styled from "styled-components";
import copyURL from "../../utils/copyURL";

function DetailTitle({ title, star, location }) {
  return (
    <div>
      <TitleTop>{title}</TitleTop>
      <TitleBottom>
        <TitleBottomLeft>
          <div>★ {star}</div>
          <div
            style={{
              textDecoration: "underline",
            }}
          >
            54개
          </div>
          <div
            style={{
              textDecoration: "underline",
            }}
          >
            슈퍼호스트
          </div>
          <div
            style={{
              textDecoration: "underline",
            }}
          >
            {location}
          </div>
        </TitleBottomLeft>
        <TitleBottonRight>
          <div
            onClick={() => {
              copyURL();
            }}
            style={{
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            공유하기
          </div>
          <div
            onClick={() => {
              alert("아직 미구현 입니다.");
            }}
            style={{
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            ♡ 저장
          </div>
        </TitleBottonRight>
      </TitleBottom>
    </div>
  );
}

const TitleTop = styled.div`
  height: 50px;
  margin-top: 20px;

  font-size: 1.7em;
  font-weight: 600 !important;
  margin: 0px !important;
  display: inline !important;
`;

const TitleBottom = styled.div`
  display: flex;
  justify-content: space-between;
  height: 30px;
  margin-top: 10px;
`;

const TitleBottomLeft = styled.div`
  display: flex;
  div {
    margin-right: 20px;
  }
`;

const TitleBottonRight = styled.div`
  display: flex;
  div {
    margin-left: 20px;
  }
`;

export default DetailTitle;
