import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

function RearBtn() {
  const { id } = useParams();
  const navigate = useNavigate();

  // 이전 페이지로
  const GoBackBtn = () => {
    const target = Number(id) - 1;
    if (target === 0) {
      navigate("/");
    } else {
      navigate(`/write/${target}`);
    }
  };

  return (
    <BackBtn
      onClick={() => {
        GoBackBtn();
      }}
    >
      뒤로
    </BackBtn>
  );
}

const BackBtn = styled.button`
  position: fixed;
  top: 84%;
  right: 45%;
  padding: 4px;
  margin-top: 70px;
  border: 1px solid transparent;
  background-color: transparent;
`;

export default RearBtn;
