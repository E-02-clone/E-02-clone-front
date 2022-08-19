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
        <div>첫번째 화면 소개, 카테고리 선택형, 타이틀과 컨텐츠는 작성</div>
      </LeftBicBox>
      <RightBicBox>
        <div>category</div>
        <input
          ref={category_ref}
          onChange={() => {
            Remember();
          }}
        />
        <div>location</div>
        <input
          ref={location_ref}
          onChange={() => {
            Remember();
          }}
        />
        <div>price</div>
        <input
          ref={price_ref}
          onChange={() => {
            Remember();
          }}
        />
        <div>
          <button
            onClick={() => {
              setShowpage(false);
            }}
          >
            다음
          </button>
        </div>
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

const RightBicBox = styled.div`
  width: 50%;
  margin: auto;
`;

export default WriteFirst;
