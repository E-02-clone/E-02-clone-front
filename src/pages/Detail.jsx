import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { _GetItems } from "../app/slice/ItemSlice";

function Detail() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.ItemSlice.Items);
  const params = useParams();
  console.log(state);

  useEffect(() => {
    dispatch(_GetItems(params.id));
  }, []);

  return (
    <>
      <TopMainBox>
        <TitleTop>{state?.title}</TitleTop>
        <TitleBottom>
          <TitleBottomLeft>
            <div>★ {state?.star}</div>
            <div>54개</div>
            <div>슈퍼호스트</div>
            <div>{state?.location}</div>
          </TitleBottomLeft>
          <TitleBottonRight>
            <div>공유하기</div>
            <div>♡ 저장</div>
          </TitleBottonRight>
        </TitleBottom>
        <AllPictures>
          {state?.img?.length ? (
            <PictureBicBox src={`${state?.img[0]}`} />
          ) : null}
          <PictureSmallBox>
            {state?.img?.length ? (
              <>
                <SmallPictureOne src={`${state?.img[1]}`} />
                <SmallPictureTwo src={`${state?.img[2]}`} />
                <SmallPictureThree src={`${state?.img[3]}`} />
                <SmallPictrueFour src={`${state?.img[4]}`} />
              </>
            ) : null}
          </PictureSmallBox>
        </AllPictures>
      </TopMainBox>
      <MiddleMainBox>
        <MiddleLeftBox>
          {state?.auth}
          {state?.category}
          {state?.content}
        </MiddleLeftBox>
        <MiddleRightBox>
          <div>{state?.price}</div>
        </MiddleRightBox>
      </MiddleMainBox>
      <Comment>댓글창</Comment>
    </>
  );
}

const Head = styled.div`
  background-color: blue;
  height: 80px;
`;

const TopMainBox = styled.div`
  width: 80%;
  margin: 0px auto 0px auto;
`;

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

const AllPictures = styled.div`
  display: flex;
  margin-top: 20px;
`;

const PictureBicBox = styled.img`
  width: 49%;
  margin-right: 1%;
  height: 480px;
  background-color: #e09f27;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const PictureSmallBox = styled.div`
  display: flex;
  width: 49%;
  margin-left: 1%;
  height: 498px;

  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  flex-wrap: wrap;
`;

const SmallPictureOne = styled.img`
  margin: auto;
  background-color: #8d7e62;

  width: 48%;
  height: 46%;
  margin-top: 3px;
`;

const SmallPictureTwo = styled.img`
  margin: auto;
  background-color: #8d7e62;

  width: 48%;
  height: 46%;
  margin-top: 3px;
  border-top-right-radius: 10px;
`;

const SmallPictureThree = styled.img`
  margin: auto;
  background-color: #8d7e62;
  width: 48%;
  height: 46%;
  margin-top: 2px;
`;

const SmallPictrueFour = styled.img`
  margin: auto;
  background-color: #8d7e62;
  width: 48%;
  height: 46%;
  margin-top: 2px;
  border-bottom-right-radius: 10px;
`;

const MiddleMainBox = styled.div`
  display: flex;
  width: 80%;
  margin: 20px auto 0px auto;
`;

const MiddleLeftBox = styled.div`
  width: 63%;
  background-color: gray;
  height: 1000px;
`;

const MiddleRightBox = styled.div`
  width: 35%;
  margin-left: 2%;
  background-color: #c29c9c;
  height: 1000px;
  div {
    position: sticky;
    background-color: wheat;
    height: 100px;
    padding-top: 30px;
    top: 0;
  }
`;

const Comment = styled.div`
  background-color: black;
  width: 100%;
  height: 500px;
`;
export default Detail;
