import React, { useState } from "react";
import styled from "styled-components";
import AmenityButton from "./AmenityButton";
import Gradation from "./components/Gradation";
import FrontBtn from "./components/FrontBtn";
import RearBtn from "./components/RearBtn";
import HelpBtn from "./components/Help";
import SaveAndExit from "./components/SaveAndExit";
import CompletedBar from "./components/CompletedBar";

const Amenity = ({ setConvenient }) => {
  // 클릭한 모든 시설이 담긴 배열
  const [amenity, setAmenity] = useState([]);
  setConvenient(amenity);

  const amenitySpecialList = [
    {
      img: "https://cdn-icons-png.flaticon.com/512/157/157839.png",
      title: "수영장",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/5016/5016618.png",
      title: "자쿠지",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/6165/6165222.png",
      title: "파티오",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/3732/3732114.png",
      title: "바베큐",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/1900/1900599.png",
      title: "화로",
    },
    {
      img: "https://cdn-icons.flaticon.com/png/128/4295/premium/4295376.png?token=exp=1661229632~hmac=0a107f4448358fc9c8010310e4d75af2",
      title: "당구대",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/7306/7306008.png",
      title: "실내 벽난로",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/6990/6990769.png",
      title: "야외 식사 공간",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/7045/7045778.png",
      title: "운동기구",
    },
  ];
  const amenityPopularList = [
    {
      img: "https://cdn-icons.flaticon.com/png/128/3562/premium/3562383.png?token=exp=1661230446~hmac=44747f90b6275c4af3d6caf99f388bf9",
      title: "무선 인터넷",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/1878/1878984.png",
      title: "TV",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/810/810224.png",
      title: "주방",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/4116/4116976.png",
      title: "세탁기",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/7761/7761169.png",
      title: "건물 내 무료 주차",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/1505/1505577.png",
      title: "건물 내 유료 주차",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/3758/3758241.png",
      title: "에어컨",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/8289/8289888.png",
      title: "업무 전용 공간",
    },
    {
      img: "https://cdn-icons.flaticon.com/png/128/4540/premium/4540188.png?token=exp=1661230540~hmac=8f52998198a59c5569c86ede767cd8fd",
      title: "야외 샤워 시설",
    },
  ];
  const safeyList = [
    {
      img: "https://cdn-icons-png.flaticon.com/128/578/578268.png",
      title: "화재경보기",
    },
    {
      img: "https://cdn-icons.flaticon.com/png/128/3479/premium/3479094.png?token=exp=1661230851~hmac=e0ab39cea69b042655c8631bcc0b0bff",
      title: "구급상자",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/445/445957.png",
      title: "일산화탄소 경보기",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/4151/4151448.png",
      title: "침실문 잠금장치",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/150/150225.png",
      title: "소화기",
    },
  ];
  return (
    <>
      <Gradation />
      <LeftTitle>숙소 편의시설 정보를 추가해 주세요.</LeftTitle>
      <div>
        <HelpBtn />
        <SaveAndExit />
        <div
          style={{
            width: "46%",
            marginLeft: "53%",
            marginTop: "3%",
            marginBottom: "10%",
          }}
        >
          <h3>특별히 내세울 만한 편의시설이 있나요?</h3>
          {amenitySpecialList.map((item) => {
            return (
              <AmenityButton
                item={item}
                amenity={amenity}
                setAmenity={setAmenity}
              />
            );
          })}

          <h3>다음 인기 편의시설이 있나요?</h3>
          {amenityPopularList.map((item) => {
            return (
              <AmenityButton
                item={item}
                amenity={amenity}
                setAmenity={setAmenity}
              />
            );
          })}

          <h3>다음 안전물품이 있나요?</h3>
          {safeyList.map((item) => {
            return (
              <AmenityButton
                item={item}
                amenity={amenity}
                setAmenity={setAmenity}
              />
            );
          })}
        </div>
      </div>
      <CompletedBar comple={6}></CompletedBar>
      <FrontBtn />
      <RearBtn />
    </>
  );
};

const LeftTitle = styled.div`
  position: fixed;
  top: 4%;
  display: flex;
  color: white;
  font-size: 3em;
  width: 48%;
  margin-top: 23%;
  margin-left: 1%;
  font-weight: 600;
`;

export default Amenity;
