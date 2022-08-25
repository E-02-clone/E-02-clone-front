import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

function FrontBtn() {
  const { id } = useParams();
  const navigate = useNavigate();

  // 다음 페이지
  const GoFrontBtn = () => {
    const target = Number(id) + 1;
    if (target > 11) {
      console.log("10페이지 초과");
    } else {
      navigate(`/write/${target}`);
    }
  };

  return (
    <GoFront
      onClick={() => {
        GoFrontBtn();
      }}
    >
      다음
    </GoFront>
  );
}
const GoFront = styled.button`
  position: fixed;
  top: 84%;
  right: 2%;
  padding: 4px;
  margin-top: 70px;
  border: 1px solid transparent;
  background-color: transparent;
`;

export default FrontBtn;
