import React, { useState } from "react";
import styled from "styled-components";
import S3 from "react-aws-s3";
import FrontBtn from "./components/FrontBtn";
import RearBtn from "./components/RearBtn";
import SaveAndExit from "./components/SaveAndExit";
import HelpBtn from "./components/Help";
import CompletedBar from "./components/CompletedBar";

window.Buffer = window.Buffer || require("buffer").Buffer;
function WritePageSeven({ GoFrontBtn, setArray, array }) {
  const arr = [];

  // base64로 인코딩된 데이터 담는곳
  const [detailImgs, setDetailImgs] = useState([]);

  // s3에 보내기 위한 개인 정보
  const config = {
    accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
    bucketName: process.env.REACT_APP_BUCKET_NAME,
    region: process.env.REACT_APP_REGION,
  };

  // onchange로 선택하면 바로 s3에 저장되고 url을 응답해줌.
  const handleFileChange = (e) => {
    const length = e.target.files.length;
    for (let i = 0; i < length; i++) {
      const ReactS3Client = new S3(config);
      ReactS3Client.uploadFile(e.target.files[i], e.target.files[i].name)
        .then((data) => {
          arr.push(data.location);
          setArray([...arr]);
        })
        .catch((err) => console.log(err));
    }
  };

  // 사진 미리보여주기
  const handleGetURLs = (e) => {
    const fileArr = e.target.files;
    const fileArrLength = fileArr.length > 6 ? 6 : fileArr.length;
    let fileURLs = []; // 임시배열
    for (let i = 0; i < fileArrLength; i++) {
      let file = fileArr[i];
      let reader = new FileReader();
      reader.onload = () => {
        fileURLs[i] = reader.result;
        setDetailImgs([...fileURLs]);
        setArray([...detailImgs]);
      };
      reader.readAsDataURL(file);
    }
  };

  const deleteImg = (url) => {
    const imgArr = detailImgs.filter((value) => {
      return url !== value;
    });
    setDetailImgs([...imgArr]);
    setArray([...imgArr]);
  };

  const WriteDone = async () => {
    console.log("실행됌", array.length);
    if (array.length < 5) {
      alert("사진은 최소 5개를 넣어주세요");
    } else if (array.length >= 5) {
      await GoFrontBtn();
    }
  };

  // input감지해 값 저장, 사진 보여주기
  const imageOnchange = (e) => {
    handleFileChange(e);
    handleGetURLs(e);
  };

  return (
    <>
      <Video autoPlay loop>
        <source
          src="https://a0.muscache.com/v/d6/12/d6120feb-75fc-52dd-b5bb-5755913fb756/d6120feb75fc52ddb5bb5755913fb756_4000k_1.mp4?imformat=h265"
          type="video/mp4; codecs=hevc"
        ></source>
        <source
          src="https://a0.muscache.com/v/d6/12/d6120feb-75fc-52dd-b5bb-5755913fb756/d6120feb75fc52ddb5bb5755913fb756_4000k_1.mp4"
          type="video/mp4"
        ></source>
      </Video>
      <LeftTitle>이제 숙소 사진을 올릴 차례입니다.</LeftTitle>
      <RightBicBox>
        <SaveAndExit />
        <HelpBtn />
        <ShowImage>
          <div style={{ display: "flex" }}>
            <Title>IMAGE</Title>
            <LeastFive>사진은 최소 5개를 넣어주세요</LeastFive>
          </div>
          <input
            name="imgFile"
            type="file"
            id="imgFile"
            multiple="multiple"
            accept="image/jpg,image/png,image/jpeg,image/gif"
            onChange={(e) => {
              imageOnchange(e);
            }}
          />
          {detailImgs?.map((url) => {
            return (
              <div key={url.slice(4)}>
                <img
                  src={url}
                  style={{ maxWidth: "450px", maxHeight: "450px" }}
                />
                <DeleteImg
                  onClick={() => {
                    deleteImg(url);
                  }}
                >
                  삭제
                </DeleteImg>
              </div>
            );
          })}
        </ShowImage>
        <CompletedBar comple={7}></CompletedBar>
        <RearBtn />
        <GoFront
          onClick={() => {
            WriteDone();
          }}
        >
          다음
        </GoFront>
      </RightBicBox>
    </>
  );
}

const RightBicBox = styled.div`
  margin-left: 50%;
  width: 50%;
  margin-top: -48%;
`;

const Video = styled.video`
  display: flex;
  width: 50%;
  z-index: -1;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const LeftTitle = styled.div`
  display: flex;
  color: white;
  font-size: 3em;
  width: 48%;
  margin-top: 44%;
  margin-left: 2%;
  font-weight: 600;
`;

const Title = styled.div`
  margin-bottom: 10px;
  font-size: 23px;
  font-weight: 600;
`;

const LeastFive = styled.span`
  margin-top: 1%;
  margin-left: 20px;
  font-weight: 400;
`;

const ShowImage = styled.div`
  width: 80%;
  height: 680px;
  margin-left: 15%;
  overflow-y: auto;
  img {
    margin-bottom: 10px;
  }
`;

const DeleteImg = styled.button`
  margin-left: 13px;
  margin-bottom: 10px;
  background-color: white;
  padding: 3px;
  border-radius: 5px;
  font-size: 0.7em;
  border: 2px solid darkgray;
  :hover {
    border: 2px solid black;
  }
`;

const GoFront = styled.button`
  position: fixed;
  top: 84%;
  right: 2%;
  padding: 4px;
  margin-top: 70px;
  border: 1px solid transparent;
  background-color: transparent;
`;

export default WritePageSeven;
