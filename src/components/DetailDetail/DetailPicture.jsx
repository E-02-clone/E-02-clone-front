import React from "react";
import styled from "styled-components";

function DetailPicture({ img1, img2, img3, img4, img5, showModal }) {
  return (
    <div>
      {img1?.length ? (
        <AllPictures>
          <PictureBicBox
            src={`${img1}`}
            onClick={() => {
              showModal("");
            }}
          />
          <PictureSmallBox>
            <SmallPictureOne
              src={`${img2}`}
              onClick={() => {
                showModal("");
              }}
            />
            <SmallPictureTwo
              src={`${img3}`}
              onClick={() => {
                showModal("");
              }}
            />
            <SmallPictureThree
              src={`${img4}`}
              onClick={() => {
                showModal("");
              }}
            />
            <SmallPictrueFour
              src={`${img5}`}
              onClick={() => {
                showModal("");
              }}
            />
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
  margin-right: 0.5vh;
  height: 60vh;
  background-color: #e09f27;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  cursor: pointer;
  :hover {
    filter: brightness(86%);
  }
`;

const PictureSmallBox = styled.div`
  display: flex;
  width: 49%;
  margin-left: 1vh;
  height: 62vh;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  flex-wrap: wrap;
`;

const SmallPictureOne = styled.img`
  margin: auto;
  width: 48.5%;
  height: 47%;
  margin-top: 3px;
  cursor: pointer;
  :hover {
    filter: brightness(86%);
  }
`;

const SmallPictureTwo = styled.img`
  margin: auto;
  width: 48.5%;
  height: 47%;
  margin-top: 3px;
  border-top-right-radius: 10px;
  cursor: pointer;
  :hover {
    filter: brightness(86%);
  }
`;

const SmallPictureThree = styled.img`
  margin: auto;
  width: 48.5%;
  height: 47%;
  margin-top: -7px;
  cursor: pointer;
  :hover {
    filter: brightness(86%);
  }
`;

const SmallPictrueFour = styled.img`
  margin: auto;
  width: 48.5%;
  height: 47%;
  margin-top: -7px;
  border-bottom-right-radius: 10px;
  cursor: pointer;
  :hover {
    filter: brightness(86%);
  }
`;

export default DetailPicture;
