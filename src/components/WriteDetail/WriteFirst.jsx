import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

function WriteFirst({
  setShowpage,
  title_ref,
  content_ref,
  category_ref,
  RememberFFage,
}) {
  const navigate = useNavigate();
  const location = useLocation();
  // 인풋값 기억, 가격 유효성 검사.
  const Remember = () => {
    RememberFFage(
      category_ref.current.value,
      title_ref.current.value,
      content_ref.current.value
    );
  };

  return (
    <Background>
      <LeftBicBox>
        <LeftText>호스팅할 숙소 유형을 알려주세요.</LeftText>
        <LeftText>숙소 이름을 만들어 주세요.</LeftText>
        <LeftText>숙소에 대해서 설명해주세요.</LeftText>
      </LeftBicBox>
      <RightBicBox>
        <RightTextBox>
          <Category name="category">
            <div>category</div>
            <select
              className="form-select"
              aria-label="Default select example"
              ref={category_ref}
              onChange={() => {
                Remember();
              }}
            >
              <option value="기상천외한 숙소">기상천외한 숙소</option>
              <option value="국립공원">국립공원</option>
              <option value="통나무집">통나무집</option>
              <option value="섬">섬</option>
              <option value="해변 근처">해변 근처</option>
            </select>
            {/* <CategoryBox>
              <div>
                <div>
                  <CategoryBtn
                    id="ct1"
                    ref={category_ref}
                    onChange={() => {
                      Remember();
                    }}
                  >
                    기상천외한 숙소
                  </CategoryBtn>
                </div>
                <div>
                  <CategoryBtn
                    id="ct2"
                    ref={category_ref}
                    onChange={() => {
                      Remember();
                    }}
                  >
                    국립공원
                  </CategoryBtn>
                </div>
                <div>
                  <CategoryBtn
                    id="ct3"
                    ref={category_ref}
                    onChange={() => {
                      Remember();
                    }}
                  >
                    통나무집
                  </CategoryBtn>
                </div>
              </div>
              <div>
                <div>
                  <CategoryBtn
                    d="ct4"
                    ref={category_ref}
                    onChange={() => {
                      Remember();
                    }}
                  >
                    섬
                  </CategoryBtn>
                </div>
                <div>
                  <CategoryBtn
                    d="ct5"
                    ref={category_ref}
                    onChange={() => {
                      Remember();
                    }}
                  >
                    해변 근처
                  </CategoryBtn>
                </div>
              </div>
            </CategoryBox> */}
          </Category>
        </RightTextBox>
        <RightTextBox>
          <Title>
            <div>TITLE</div>
            <textarea
              maxLength="20"
              ref={title_ref}
              onChange={() => {
                Remember();
              }}
            />
          </Title>
        </RightTextBox>
        <RightTextBox>
          <Content>
            <div>CONTENT</div>
            <textarea
              maxLength="250"
              ref={content_ref}
              onChange={() => {
                Remember();
              }}
            />
          </Content>
        </RightTextBox>
        <ToHomeBtn
          onClick={() => {
            navigate("/");
          }}
        >
          홈으로
        </ToHomeBtn>
        <ToNextPage
          onClick={() => {
            setShowpage(false);
          }}
        >
          다음
        </ToNextPage>
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
  font-size: 38px !important;
  line-height: 56px !important;
  margin: 60px auto;
  height: 28%;
`;

const RightBicBox = styled.div`
  width: 50%;
`;

const RightTextBox = styled.div`
  height: 24%;
`;

const Category = styled.div`
  width: 80%;
  padding: 55px 70px;
  font-weight: bold;
  font-size: 23px;
  select {
    margin-top: 10px;
    border: 1px solid black;
  }
`;

// const CategoryBox = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;

// const CategoryBtn = styled.button`
//   padding: 15px 25px;
//   margin: 10px;
//   border-radius: 10px;
//   background-color: white;
//   border: 2px solid lightgray;
//   /* :focus-within {
//     border: 2px solid black;
//   } */
//   :focus {
//     border: 2px solid black;
//   }
// `;

const Title = styled.div`
  padding: 80px 70px;
  font-weight: bold;
  font-size: 23px;
  textarea {
    padding: 10px;
    margin-top: 10px;
    width: 75%;
    border-radius: 5px;
    border: 1px solid black;
    font-size: 17px;
    resize: none;
  }
`;

const Content = styled.div`
  padding: 105px 70px;
  font-weight: bold;
  font-size: 23px;
  textarea {
    padding: 10px;
    margin-top: 10px;
    height: 20vh;
    width: 75%;
    border-radius: 5px;
    border: 1px solid black;
    font-size: 16px;
    overflow: hidden;
    resize: none;
  }
`;
const ToNextPage = styled.div`
  float: right;
  cursor: pointer;
  margin-right: 40px;
  margin-top: 160px;
  :hover {
    text-decoration: underline;
  }
`;

const ToHomeBtn = styled.div`
  margin-left: 40px;
  cursor: pointer;
  float: left;
  margin-top: 160px;
  :hover {
    text-decoration: underline;
  }
`;

export default WriteFirst;
