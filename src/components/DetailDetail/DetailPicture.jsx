import React from "react";
import styled from "styled-components";

function DetailPicture({ img1, img2, img3, img4, img5, showModal }) {
  const morePicture = () => {
    alert("미구현입니다.");
  };

  return (
    <div>
      {img1?.length ? (
        <AllPictures>
          <PictureBicBox src={`${img1}`} />
          <PictureSmallBox>
            <SmallPictureOne src={`${img2}`} />
            <SmallPictureTwo src={`${img3}`} />
            <SmallPictureThree src={`${img4}`} />
            <SmallPictrueFour src={`${img5}`} />
            <MorePictureBtn
              onClick={() => {
                showModal("");
              }}
            >
              사진 모두 보기
            </MorePictureBtn>
          </PictureSmallBox>
        </AllPictures>
      ) : null}
    </div>
  );
}

const AllPictures = styled.div`
  display: flex;
  margin-top: 20px;
`;

const PictureBicBox = styled.img`
  width: 49%;
  margin-right: 0.5%;
  height: 480px;
  background-color: #e09f27;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const PictureSmallBox = styled.div`
  display: flex;
  width: 49%;
  margin-left: 0.5%;
  height: 498px;

  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  flex-wrap: wrap;
`;

const SmallPictureOne = styled.img`
  margin: auto;

  width: 49%;
  height: 46%;
  margin-top: 3px;
`;

const SmallPictureTwo = styled.img`
  margin: auto;

  width: 49%;
  height: 46%;
  margin-top: 3px;
  border-top-right-radius: 10px;
`;

const SmallPictureThree = styled.img`
  margin: auto;

  width: 49%;
  height: 46%;
  margin-top: 1px;
`;

const SmallPictrueFour = styled.img`
  margin: auto;

  width: 49%;
  height: 46%;
  margin-top: 1px;
  border-bottom-right-radius: 10px;
`;

const MorePictureBtn = styled.button`
  position: absolute;
  right: 16%;
  bottom: 27%;
  background-color: white;
  padding: 5px;
  border-radius: 10px;
  border: 1px solid black;
`;

export default DetailPicture;
