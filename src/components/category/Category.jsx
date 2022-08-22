import React from 'react';
import styled from 'styled-components';

const Category = ({ setSelect }) => {

    return (
        <CategoryBox>
            <CategoryBar>
                <div className='category__img' onClick={() => {
                    setSelect('기상천외한 숙소')
                }}><img src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg" alt="기상천외한 숙소" /><span className="category__title">기상천외한 숙소</span></div>
                <div className='category__img' onClick={() => {
                    setSelect('국립공원')
                }}><img src="https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg" alt="국립공원" /><span className="category__title">국립공원</span></div>
                <div className='category__img' onClick={() => {
                    setSelect('통나무집')
                }}><img src="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg" alt="통나무집" /><span className="category__title">통나무집</span></div>
                <div className='category__img' onClick={() => {
                    setSelect('섬')
                }}><img src="https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg" alt="섬" /><span className="category__title">섬</span></div>
                <div className='category__img' onClick={() => {
                    setSelect('해변근처')
                }}><img src="https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg" alt="해변근처" /><span className="category__title">해변근처</span></div>
                <div className='category__img' onClick={() => {
                    alert('아직 미구현')
                }}><img src="https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg" alt="초소형 주택" /><span className="category__title">초소형 주택</span></div>
                <div className='category__img' onClick={() => {
                    alert('아직 미구현')
                }}><img src="https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg" alt="디자인" /><span className="category__title">디자인</span></div>
                <div className='category__img' onClick={() => {
                    alert('아직 미구현')
                }}><img src="https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg" alt="캠핑장" /><span className="category__title">캠핑장</span></div>
                <div className='category__img' onClick={() => {
                    alert('아직 미구현')
                }}><img src="https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg" alt="A자형 주택" /><span className="category__title">A자형 주택</span></div>
                <div className='category__img' onClick={() => {
                    alert('아직 미구현')
                }}><img src="https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg" alt="호숫가" /><span className="category__title">호숫가</span></div>
                <div className='category__img' onClick={() => {
                    alert('아직 미구현')
                }}><img src="https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg" alt="북극" /><span className="category__title">북극</span></div>
                <div className='category__img' onClick={() => {
                    alert('아직 미구현')
                }}><img src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg" alt="멋진 수영장" /><span className="category__title">멋진 수영장</span></div>
                <div className='category__img' onClick={() => {
                    alert('아직 미구현')
                }}><img src="https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg" alt="동굴" /><span className="category__title">동굴</span></div>
                <div className='category__img' onClick={() => {
                    alert('아직 미구현')
                }}><img src="https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg" alt="서핑" /><span className="category__title">서핑</span></div>
                <div className='category__img' onClick={() => {
                    alert('아직 미구현')
                }}><img src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg" alt="최고의 전망" /><span className="category__title">최고의 전망</span></div>
                <div className='category__img' onClick={() => {
                    alert('아직 미구현')
                }}><img src="https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg" alt="복토 주택" /><span className="category__title">복토 주택</span></div>
                <div className='category__img' onClick={() => {
                    alert('아직 미구현')
                }}><img src="https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg" alt="열대 지역" /><span className="category__title">열대 지역</span></div>
                <div className='category__img' onClick={() => {
                    alert('아직 미구현')
                }}><img src="https://a0.muscache.com/pictures/52c8d856-33d0-445a-a040-a162374de100.jpg" alt="셰어하우스" /><span className="category__title">셰어하우스</span></div>
                <div className='category__img' onClick={() => {
                    alert('아직 미구현')
                }}><img src="https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg" alt="캐슬" /><span className="category__title">캐슬</span></div>
                <div className='category__img' onClick={() => {
                    alert('아직 미구현')
                }}><img src="https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg" alt="한적한 시골" /><span className="category__title">한적한 시골</span></div>
            </CategoryBar>
        </CategoryBox>
    );
};

export default Category;


const CategoryBox = styled.div`
    width: 100%;
    overflow: hidden;
    position: sticky;
    top: 80px;
    z-index: 4;
    border-bottom:1px solid lightgray;
    padding: 0 160px;
    background-color: white;
`

const CategoryBar = styled.div`
    margin: 0;
    width: 100%;
    overflow: hidden;
    top: 90px;
    background-color: white;
    height: 80px;
    display: flex;

    align-items: center;
    justify-content: space-between;
    .category__img {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
        height: 54px;
        margin-top: 12px;
        opacity: 0.6;
        transition: 0.2s ease-in;
    }

    .category__title {
        padding-bottom: 5px;
        transition: 0.2s ease-in;
    }

    .category__img:hover {
        opacity: 1; 
    }

    .category__img:hover .category__title {
        border-bottom: 2px solid black;
    }

    div > img {
        width: 24px;
        
    }
    div > span {
        font-size: 12px;
        font-weight: bold;
    }
    
`