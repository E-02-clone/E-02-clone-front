import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import styled from "styled-components";
import S3 from "react-aws-s3";
import { useLocation, useNavigate } from "react-router-dom";

function WriteSecond({
  setArray,
  setShowpage,
  location_ref,
  price_ref,
  RememberSFage,
  PostItem,
}) {
  const Navigate = useNavigate();
  const location = useLocation();
  window.Buffer = window.Buffer || require("buffer").Buffer;
  const arr = []; // 사진이 담기는 임시 공간 다시 부모 컴퍼넌트의 array에 담아준다.

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

  const ToNextPage = () => {
    setShowpage(true);
  };

  const Submit = () => {
    RememberSFage(location_ref.current.value, price_ref.current.value);
  };

  const WriteDone = async () => {
    if (detailImgs.length < 5) {
      alert("사진은 최소 5개를 넣어주세요");
    } else {
      await PostItem();
      await Navigate("/");
    }
  };

  // input감지해 값 저장, 사진 보여주기
  const imageOnchange = (e) => {
    handleFileChange(e);
    handleGetURLs(e);
  };

  return (
    <Background>
      <LeftBicBox>
        <LeftText>이제 숙소 사진을 올릴 차례입니다.</LeftText>
        <LeftText>숙소 위치는 어디인가요?</LeftText>
        <LeftText>이제 요금을 설정하실 차례입니다.</LeftText>
      </LeftBicBox>
      <RightBicBox>
        <RightTextBox>
          <Image>
            <div style={{ display: "flex" }}>
              <div>IMAGE</div>
              <LeastFivePic>사진은 최소 5개를 넣어주세요</LeastFivePic>
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
            <ShowImges>
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
            </ShowImges>
          </Image>
        </RightTextBox>
        <RightTextBox>
          <Location>
            <div>LOCATION</div>
            <textarea
              maxLength="20"
              ref={location_ref}
              onChange={() => {
                Submit();
              }}
            />
          </Location>
        </RightTextBox>
        <RightTextBox>
          <Price>
            <div>PRICE</div>
            <input
              type="number"
              maxLength="10"
              ref={price_ref}
              onChange={() => {
                Submit();
              }}
            />
          </Price>
          <TwoBtnBox>
            <ToBeforePage
              onClick={() => {
                ToNextPage();
              }}
            >
              이전
            </ToBeforePage>
            <DoneBtn
              onClick={() => {
                WriteDone();
              }}
            >
              작성
            </DoneBtn>
          </TwoBtnBox>
        </RightTextBox>
      </RightBicBox>
    </Background>
  );
}

const Background = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const LeftBicBox = styled.div`
  width: 50%;
  background: linear-gradient(#de17a2, #2323c0);
`;

const LeftText = styled.div`
  width: 70%;
  color: white;
  font-size: 36px !important;
  line-height: 56px !important;
  margin: 60px auto;
  height: 28%;
`;

const LeastFivePic = styled.span`
  font-size: 14px;
  font-weight: 400;
  margin-top: 7px;
  margin-left: 30px;
`;

const RightBicBox = styled.div`
  width: 50%;
`;

const RightTextBox = styled.div`
  height: 34%;
`;

const Image = styled.div`
  margin: 20px 70px;
  font-weight: bold;
  font-size: 13px;
  div {
    font-size: 23px;
  }
  input {
    margin-top: 10px;
  }
`;

const ShowImges = styled.div`
  height: 350px;
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
`;

const Location = styled.div`
  float: left;
  margin-left: 70px;
  margin-top: 180px;
  font-weight: bold;
  font-size: 23px;
  textarea {
    height: 40px;
    width: 180%;
    margin-top: 10px;
    border: 1px solid black;
    border-radius: 5px;
    resize: none;
  }
`;

const Price = styled.div`
  margin-left: 70px;
  margin-top: 60px;
  font-weight: bold;
  font-size: 23px;
  input {
    font-size: 0.8em;
    width: 67%;
    height: 30px;
    border-radius: 5px;
    border: 1px solid black;
    resize: none;
  }
`;

const TwoBtnBox = styled.div`
  margin-top: 35px;
`;

const ToBeforePage = styled.div`
  float: left;
  margin-left: 40px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

const DoneBtn = styled.div`
  float: right;
  margin-right: 40px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

export default WriteSecond;
