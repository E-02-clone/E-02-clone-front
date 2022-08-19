import React from "react";
import styled from "styled-components";

function WriteFirst({
  setShowpage,
  location_ref,
  price_ref,
  category_ref,
  RememberFFage,
}) {
  // 인풋값 기억, 가격 유효성 검사.
  const Remember = () => {
    if (false) {
      alert("숫자만 입력해주세요");
    } else {
      RememberFFage(
        category_ref.current.value,
        location_ref.current.value,
        price_ref.current.value
      );
    }
  };
  return (
    <Background>
      <LeftBicBox>
        <LeftText>호스팅할 숙소 유형을 알려주세요.</LeftText>
        <LeftText>숙소 위치는 어디인가요?</LeftText>
        <LeftText>이제 요금을 설정하실 차례입니다.</LeftText>
      </LeftBicBox>
      <RightBicBox>
        <RightTextBox>
          <Category name="category">
            <div>category</div>
            <select
              name="job"
              ref={category_ref}
              onChange={() => {
                Remember();
              }}
            >
              <option value="아파트" selected="selected">
                아파트
              </option>
              <option value="주택">주택</option>
              <option value="별채">별채</option>
              <option value="독특한 숙소">독특한 숙소</option>
              <option value="부티크호텔">부티크호텔</option>
              <option value="B&amp;B">B&amp;B</option>
            </select>
          </Category>
        </RightTextBox>
        <RightTextBox name="location">
          <Location>
            <div>location</div>
            <input
              ref={location_ref}
              onChange={() => {
                Remember();
              }}
            />
          </Location>
        </RightTextBox>
        <RightTextBox>
          <Price>
            <div>price</div>
            <input
              ref={price_ref}
              onChange={() => {
                Remember();
              }}
              type="number"
              step="1000"
            />
          </Price>
        </RightTextBox>
        <ToNextPage
          onClick={() => {
            setShowpage(false);
          }}
        >
          다음
        </ToNextPage>
      </RightBicBox>
    </Background>
  );
}

const Background = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const LeftBicBox = styled.div`
  width: 50%;
  background: linear-gradient(#de17a2, #2323c0);
`;

const LeftText = styled.div`
  width: 70%;
  color: white;
  font-size: 38px !important;
  line-height: 56px !important;
  margin: 60px auto;
  height: 28%;
`;

const RightBicBox = styled.div`
  width: 50%;
`;

const RightTextBox = styled.div`
  height: 31%;
`;

const Category = styled.div`
  float: left;
  padding: 55px 100px;
`;

const Location = styled.div`
  float: right;
  padding: 80px 100px;
`;

const Price = styled.div`
  float: left;
  padding: 120px 100px;
`;

const ToNextPage = styled.div`
  float: right;
  cursor: pointer;
  margin-right: 40px;
`;

export default WriteFirst;
