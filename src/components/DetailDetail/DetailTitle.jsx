import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import jwt_decode from "jwt-decode";
import copyURL from "../../utils/copyURL";
import { _DeleteItem } from "../../app/slice/ItemSlice";
import { setLike } from "../../app/slice/mainSlice";

function DetailTitle({ title, star, location, nickname, itemkey }) {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let likeArr = [];
  likeArr = useSelector((state) => state?.main?.data?.likes);
  const state = useSelector((state) => state?.writeSlice?.data);
  const token = localStorage.getItem("jwtToken");

  const deleteitem = async () => {
    await dispatch(_DeleteItem([{ key: params.id }, { token }]));
    await navigate("/");
  };

  const editDetail = () => {
    navigate("/write/1", { state: { id: params.id, edit: true } });
  };

  let getedNickname = null;
  try {
    getedNickname = jwt_decode(token);
  } catch (error) {}

  const TakeLike = (key) => {
    dispatch(setLike(key));
  };

  return (
    <div>
      <TitleAlign>
        <TitleTop>{title}</TitleTop>
        {getedNickname?.nickname === nickname ? (
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
        ) : null}
      </TitleAlign>
      <TitleBottom>
        <TitleBottomLeft>
          <div>★ {star}</div>
          <div
            style={{
              textDecoration: "underline",
            }}
          >
            {state.length}개
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
          {likeArr?.includes(itemkey) ? (
            <div
              onClick={() => {
                TakeLike(itemkey);
              }}
              style={{
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              ♥︎ 완료
            </div>
          ) : (
            <div
              onClick={() => {
                TakeLike(itemkey);
              }}
              style={{
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              ♡ 저장
            </div>
          )}
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
