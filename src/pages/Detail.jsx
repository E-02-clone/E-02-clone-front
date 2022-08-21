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
            <div
              style={{
                textDecoration: "underline",
              }}
            >
              54개
            </div>
            <div
              style={{
                textDecoration: "underline",
              }}
            >
              슈퍼호스트
            </div>
            <div
              style={{
                textDecoration: "underline",
              }}
            >
              {state?.location}
            </div>
          </TitleBottomLeft>
          <TitleBottonRight>
            <div
              style={{
                textDecoration: "underline",
              }}
            >
              공유하기
            </div>
            <div
              style={{
                textDecoration: "underline",
              }}
            >
              ♡ 저장
            </div>
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
              </>
            ) : null}
            {state?.img?.length ? (
              <SmallPictureTwo src={`${state?.img[2]}`} />
            ) : null}
            {state?.img?.length ? (
              <SmallPictureThree src={`${state?.img[3]}`} />
            ) : null}
            {state?.img?.length ? (
              <SmallPictrueFour src={`${state?.img[4]}`} />
            ) : null}
          </PictureSmallBox>
        </AllPictures>
      </TopMainBox>
      <MiddleMainBox>
        <MiddleLeftBox>
          <DescribeTitle>
            {state?.auth}님이 호스팅하는 {state?.category}
          </DescribeTitle>
          <div>최대 인원 2명 ・ 침실 1개 ・ 침대 1개 ・ 욕실 1개</div>
          <hr />
          <div style={{ display: "flex" }}>
            <img
              src="/images/Medal.png"
              alt="medal"
              style={{ height: "100%", marginRight: "10px" }}
            />
            <div>
              <div>{state?.auth}님은 슈퍼호스트입니다</div>
              <div>
                슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하며 게스트가
                숙소에서 편안히 머무를 수 있도록 최선을 다하는 호스트입니다.
              </div>
            </div>
          </div>
          <div style={{ display: "flex", marginTop: "20px" }}>
            <img
              src="/images/Map.png"
              alt="map"
              style={{ height: "100%", marginRight: "10px" }}
            />
            <div>
              <div>훌륭한 숙소 위치</div>
              <div>
                최근 숙박한 게스트 중 90%가 위치에 별점 5점을 준 숙소입니다.
              </div>
            </div>
          </div>
          <div style={{ display: "flex", marginTop: "20px" }}>
            <img src="/images/CalendarMini.png" alt="CalMini" />
            <div style={{ marginTop: "8px", marginLeft: "10px" }}>
              8월 26일 전까지 무료로 취소하실 수 있습니다.
            </div>
          </div>
          <hr />
          <div>
            <div>
              <span>일부 정보는 원어로 표시됩니다.</span>
              <span
                onClick={() => {
                  alert("아직 미구현 입니다");
                }}
                style={{
                  fontWeight: "600",
                  textDecoration: "underline",
                  marginLeft: "10px",
                  cursor: "pointer",
                }}
              >
                번역
              </span>
            </div>
            <div
              style={{
                marginTop: "10px",
              }}
            >
              {state?.content}
            </div>
          </div>
          <hr />
          <div
            style={{
              marginBottom: "10px",
            }}
          >
            숙박장소
          </div>
          {state?.img?.length ? (
            <SmallPictrueFour
              src={`${state?.img[1]}`}
              style={{
                width: "70%",
                borderRadius: "10px",
              }}
            />
          ) : null}
          <hr />
          <img
            src="/images/Convenient.png"
            style={{
              width: "95%",
            }}
          />
          <MoreConvenient
            onClick={() => {
              alert("아직 미구현 입니다");
            }}
          >
            편의시설 모두 보기
          </MoreConvenient>
          <img
            src="/images/Calendar.png"
            alt="Calender"
            style={{
              width: "90%",
            }}
          />
        </MiddleLeftBox>
        <MiddleRightBox>
          <StickyTopBox>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <span style={{ fontWeight: "700", fontSize: "1.3em" }}>
                  ₩ {state?.price}
                </span>
                <span style={{ fontSize: "1.1em" }}> / 박</span>
              </div>
              <div style={{ marginTop: "5px" }}>
                <span>★ {state?.star} </span>
                <span>・ 후기 54개</span>
              </div>
            </div>
            <DayDecideBox>박스</DayDecideBox>
          </StickyTopBox>
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
  width: 73%;
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

// ㅡㅡㅡㅡㅡ사진ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ사진ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ사진ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

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

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ중간 설명부분 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

const MiddleMainBox = styled.div`
  display: flex;
  width: 73%;
  margin: 20px auto 0px auto;
`;

const MiddleLeftBox = styled.div`
  width: 63%;
  /* background-color: #e4dada; */
  height: 100%;
`;

const MiddleRightBox = styled.div`
  width: 35%;
  margin-left: 2%;
  height: 1500px;
`;

const DescribeTitle = styled.div`
  font-weight: 500;
  font-size: 24px;
`;

const MoreConvenient = styled.button`
  padding: 11px;
  border: 1px solid black;
  background-color: white;
  border-radius: 9px;
  margin-bottom: 30px;
  width: 25%;
`;

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ중간 설명 오른쪽부분ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
const StickyTopBox = styled.div`
  position: sticky;
  height: 460px;
  top: 30px;
  padding: 24px;

  border: 1px solid lightgray;
  border-radius: 10px;
`;

const DayDecideBox = styled.div`
  width: 99%;
  height: 100px;
  margin: 20px auto;
  padding: 5px;
  border: 1px solid #a5a5a5;
  border-radius: 10px;
`;

const Comment = styled.div`
  background-color: #6bbf84;
  width: 100%;
  height: 500px;
`;
export default Detail;
