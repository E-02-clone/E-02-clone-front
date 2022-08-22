import React from "react";
import styled from "styled-components";

function DetailPicture({ img1, img2, img3, img4, img5 }) {
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

  width: 48%;
  height: 46%;
  margin-top: 3px;
`;

const SmallPictureTwo = styled.img`
  margin: auto;

  width: 48%;
  height: 46%;
  margin-top: 3px;
  border-top-right-radius: 10px;
`;

const SmallPictureThree = styled.img`
  margin: auto;

  width: 48%;
  height: 46%;
  margin-top: 2px;
`;

const SmallPictrueFour = styled.img`
  margin: auto;

  width: 48%;
  height: 46%;
  margin-top: 2px;
  border-bottom-right-radius: 10px;
`;

export default DetailPicture;
