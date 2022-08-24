import React, { useRef, useState } from 'react';
import AmenityButton from './AmenityButton';
import styled from 'styled-components';

const Test2 = () => {
    // 클릭한 모든 시설이 담긴 배열 
    const [currentIndex, setCurrentIndex] = useState(0);
    const amenitySpecialList = [
        {
            img: "https://cdn-icons-png.flaticon.com/512/157/157839.png",
            title: "수영장"
        },
        {
            img: "https://cdn-icons-png.flaticon.com/512/5016/5016618.png",
            title: "자쿠지"
        },
        {
            img: "https://cdn-icons-png.flaticon.com/512/6165/6165222.png",
            title: "파티오"
        },
        {
            img: "https://cdn-icons-png.flaticon.com/512/3732/3732114.png",
            title: "바베큐"
        },
        {
            img: "https://cdn-icons-png.flaticon.com/128/1900/1900599.png",
            title: "화로"
        },
        {
            img: "https://cdn-icons.flaticon.com/png/128/4295/premium/4295376.png?token=exp=1661229632~hmac=0a107f4448358fc9c8010310e4d75af2",
            title: "당구대"
        },
        {
            img: "https://cdn-icons-png.flaticon.com/128/7306/7306008.png",
            title: "실내 벽난로"
        },
        {
            img: "https://cdn-icons-png.flaticon.com/128/6990/6990769.png",
            title: "야외 식사 공간"
        },
        {
            img: "https://cdn-icons-png.flaticon.com/128/7045/7045778.png",
            title: "운동기구"
        }
    ]
    const amenityPopularList = [
        {
            img: "https://cdn-icons.flaticon.com/png/128/3562/premium/3562383.png?token=exp=1661230446~hmac=44747f90b6275c4af3d6caf99f388bf9",
            title: "무선 인터넷"
        },
        {
            img: "https://cdn-icons-png.flaticon.com/512/1878/1878984.png",
            title: "TV"
        },
        {
            img: "https://cdn-icons-png.flaticon.com/128/810/810224.png",
            title: "주방"
        },
        {
            img: "https://cdn-icons-png.flaticon.com/128/4116/4116976.png",
            title: "세탁기"
        },
        {
            img: "https://cdn-icons-png.flaticon.com/128/7761/7761169.png",
            title: "건물 내 무료 주차"
        },
        {
            img: "https://cdn-icons-png.flaticon.com/128/1505/1505577.png",
            title: "건물 내 유료 주차"
        },
        {
            img: "https://cdn-icons-png.flaticon.com/128/3758/3758241.png",
            title: "에어컨"
        },
        {
            img: "https://cdn-icons-png.flaticon.com/128/8289/8289888.png",
            title: "업무 전용 공간"
        },
        {
            img: "https://cdn-icons.flaticon.com/png/128/4540/premium/4540188.png?token=exp=1661230540~hmac=8f52998198a59c5569c86ede767cd8fd",
            title: "야외 샤워 시설"
        },
    ]
    const safeyList = [
        {
            img: "https://cdn-icons-png.flaticon.com/128/578/578268.png",
            title: "화재경보기"
        },
        {
            img: "https://cdn-icons.flaticon.com/png/128/3479/premium/3479094.png?token=exp=1661230851~hmac=e0ab39cea69b042655c8631bcc0b0bff",
            title: "구급상자"
        },
        {
            img: "https://cdn-icons-png.flaticon.com/128/445/445957.png",
            title: "일산화탄소 경보기"
        },
        {
            img: "https://cdn-icons-png.flaticon.com/128/4151/4151448.png",
            title: "침실문 잠금장치"
        },
        {
            img: "https://cdn-icons-png.flaticon.com/128/150/150225.png",
            title: "소화기"
        },
    ]
    return (
        <>
            <Wapper style={{ display: "flex", transform: `translateX(-${currentIndex * 200}px)` }}>

                {amenityPopularList.map((item) => {
                    return (
                        <img src={item.img} alt="" width="200px" />
                    )
                })}
            </Wapper>
            <button onClick={() => {
                setCurrentIndex(currentIndex + 1)
            }}>넘기기</button>
        </>
    );
};

export default Test2;

const Wapper = styled.div`
    transition: 0.1s all;
`
