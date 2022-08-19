import React from "react";
// import { useDispatch } from "react-redux";
import styled from "styled-components";
import S3 from "react-aws-s3";

function WriteSecond({
  setArray,
  setShowpage,
  title_ref,
  content_ref,
  RememberSFage,
  check,
}) {
  window.Buffer = window.Buffer || require("buffer").Buffer;
  // 사진이 담기는 임시 공간 다시 부모 컴퍼넌트의 array에 담아준다.
  const arr = [];

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

  const ToNextPage = async () => {
    setShowpage(true);
  };

  const Submit = () => {
    RememberSFage(title_ref.current.value, content_ref.current.value);
    // 제출하기 넣을 공간
  };

  const console = () => {
    check();
  };

  return (
    <Background>
      <LeftBicBox>
        <div>두번째 화면, 이미지는 s3, 위치는 선택으로, 가격은 작성으로</div>
      </LeftBicBox>
      <RightBicBox>
        <div>title</div>
        <input
          ref={title_ref}
          onChange={() => {
            Submit();
          }}
        />
        <div>content</div>
        <input
          ref={content_ref}
          onChange={() => {
            Submit();
          }}
        />
        <div>image</div>
        <input
          type="file"
          id="input"
          multiple="multiple"
          onChange={(e) => {
            handleFileChange(e);
          }}
        />
        <div>
          <DoneBtn
            onClick={() => {
              ToNextPage();
            }}
          >
            첫번쨰 페이지로
          </DoneBtn>
          <button
            onClick={() => {
              console();
            }}
          >
            콘솔찍히나
          </button>
        </div>
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

const RightBicBox = styled.div`
  width: 50%;
  margin: auto;
`;

const DoneBtn = styled.button`
  margin-top: 100px;
`;

export default WriteSecond;
