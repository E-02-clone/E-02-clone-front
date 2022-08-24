import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import copyURL from "../../utils/copyURL";
import { _DeleteItem } from "../../app/slice/ItemSlice";

function DetailTitle({ title, star, location }) {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = localStorage.getItem("jwtToken");

  const deleteitem = async () => {
    await dispatch(_DeleteItem([{ key: params.id }, { token }]));
    await navigate("/");
  };

  const editDetail = () => {
    navigate("/write/1", { state: { id: params.id, edit: true } });
  };

  return (
    <div>
      <TitleAlign>
        <TitleTop>{title}</TitleTop>
        <DeletePutBtn>
          <span
            onClick={() => {
              editDetail();
            }}
            style={{
              marginRight: "45px",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            수정
          </span>
          <span
            onClick={() => {
              deleteitem();
            }}
            style={{
              marginRight: "8px",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            삭제
          </span>
        </DeletePutBtn>
      </TitleAlign>
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

const TitleAlign = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DeletePutBtn = styled.div`
  margin-top: 12px;
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
