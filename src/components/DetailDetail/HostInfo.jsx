import React from "react";
import styled from "styled-components";

function HostInfo({ auth = "호스트", star }) {
  return (
    <>
      <HostBox>
        <HostName>호스트: {auth}님</HostName>
        <div style={{ fontWeight: "lighter" }}>회원가입일: 2022년 8월</div>
        <div>
          ★ 후기 {star * 2}개{" "}
          <Image src="https://forfiles.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2022-08-25+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+9.24.27.png" />{" "}
          본인 인증 완료{" "}
          <Image src="https://forfiles.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2022-08-25+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+9.24.51.png" />{" "}
          슈퍼 호스트{" "}
        </div>
        <div style={{ fontWeight: "600" }}>{auth}님은 슈퍼 호스트 입니다.</div>
        <div>
          슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하며 게스트가 숙소에서
          편안히 머무를 수 있도록 최선을 다하는 호스트입니다.
        </div>
        <div style={{ margin: "15px 0px" }}>응답률 100%</div>
        <div>응답 시간: 1시간 이내</div>
        <CallHost
          onClick={() => {
            alert("아직 미구현 입니다");
          }}
        >
          호스트에게 연락하기
        </CallHost>
      </HostBox>
    </>
  );
}

const HostBox = styled.div`
  width: 73%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
`;

const HostName = styled.div`
  font-size: 1.5em;
  font-weight: 600;
`;

const Image = styled.img`
  width: 27px;
  margin-bottom: 3px;
`;

const CallHost = styled.button`
  background-color: white;
  margin-top: 15px;
  padding: 9px;
  border-radius: 7px;
`;

export default HostInfo;
