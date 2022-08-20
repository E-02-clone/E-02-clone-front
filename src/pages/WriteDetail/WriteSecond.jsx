import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import styled from "styled-components";
import S3 from "react-aws-s3";

function WriteSecond({
  setArray,
  setShowpage,
  title_ref,
  content_ref,
  RememberSFage,
  PostItem,
}) {
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
    RememberSFage(title_ref.current.value, content_ref.current.value);
  };

  const WriteDone = () => {
    PostItem();
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
        <LeftText>숙소 이름을 만들어 주세요.</LeftText>
        <LeftText>숙소에 대해서 설명해주세요.</LeftText>
      </LeftBicBox>
      <RightBicBox>
        <RightTextBox>
          <Image>
            <div>IMAGE</div>
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
          <Title>
            <div>TITLE</div>
            <input
              ref={title_ref}
              onChange={() => {
                Submit();
              }}
            />
          </Title>
        </RightTextBox>
        <RightTextBox>
          <Content>
            <div>CONTENT</div>
            <input
              ref={content_ref}
              onChange={() => {
                Submit();
              }}
            />
          </Content>
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

const RightBicBox = styled.div`
  width: 50%;
`;

const RightTextBox = styled.div`
  height: 34%;
`;

const Image = styled.div`
  margin: 20px 70px;
  font-weight: bold;
  font-size: 23px;
  input {
    margin-top: 10px;
  }
`;

const ShowImges = styled.div`
  height: 280px;
  overflow-y: auto;
`;

const DeleteImg = styled.button`
  margin-left: 10px;
  margin-bottom: 10px;
`;

const Title = styled.div`
  float: left;
  margin-left: 70px;
  margin-top: 100px;
  font-weight: bold;
  font-size: 23px;
  input {
    margin-top: 10px;
    height: 50px;
    width: 230%;
    border-radius: 5px;
    border: 1px solid black;
  }
`;

const Content = styled.div`
  margin-left: 70px;
  margin-top: -8px;
  font-weight: bold;
  font-size: 23px;
  input {
    margin-top: 10px;
    width: 70%;
    height: 100px;
    overflow-y: auto;
    border-radius: 5px;
    border: 1px solid black;
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
