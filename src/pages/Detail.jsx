import React, { useEffect } from "react";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
import styled from "styled-components";
import CommentsLayout from "../components/commentsLayout"

function Detail() {
  // const dispatch = useDispatch()
  // const state = useSelector((state) => state);

  // useEffect(() => {
  //   dispatch(_GetItems())
  // }, [])

  return (
    <>
      <Head>대충 헤드</Head>
      <TopMainBox>
        <TitleTop>
          해당 게시글의 이름해당 게시글의 이름해당 게시글의 이름해당 게시글의
          이름
        </TitleTop>
        <TitleBottom>
          <div>별점, 후기 개수, 위치</div>
          <div>공유하기, 저장버튼</div>
        </TitleBottom>
        <AllPictures>
          <PictureBicBox>사진들</PictureBicBox>
          <PictureSmallBox>사진들</PictureSmallBox>
        </AllPictures>
      </TopMainBox>
      <MiddleMainBox>
        <MiddleLeftBox>왼쪽</MiddleLeftBox>
        <MiddleRightBox>얘는 이 공간 안에서 움직이게 처리해야함</MiddleRightBox>
      </MiddleMainBox>
      <CommentsLayout/>
    </>
  );
}

const Head = styled.div`
  background-color: blue;
  height: 80px;
`;

const TopMainBox = styled.div`
  width: 70%;
  margin: 0px auto 0px auto;
`;

const TitleTop = styled.div`
  background-color: #006d00;
  height: 50px;
  margin-top: 20px;
`;

const TitleBottom = styled.div`
  display: flex;
  justify-content: space-between;
  height: 30px;
  margin-top: 10px;

  background-color: yellow;
`;

const AllPictures = styled.div`
  display: flex;
  margin-top: 20px;
`;

const PictureBicBox = styled.div`
  width: 48%;
  margin-right: 2%;
  height: 300px;
  background-color: #e09f27;
`;

const PictureSmallBox = styled.div`
  width: 48%;
  margin-left: 2%;
  height: 300px;
  background-color: #8d7e62;
`;

const MiddleMainBox = styled.div`
  display: flex;
  width: 70%;
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
`;
export default Detail;
