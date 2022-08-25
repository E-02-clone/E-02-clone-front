import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faArrowLeft, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Category = ({ setSelect }) => {

    const categoryList = [
        {
            img: "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
            title: "기상천외한 숙소"
        },
        {
            img: "https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg",
            title: "국립공원"
        },
        {
            img: "https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg",
            title: "통나무집"
        },
        {
            img: "https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg",
            title: "섬"
        },
        {
            img: "https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg",
            title: "해변근처"
        },
        {
            img: "https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg",
            title: "초소형 주택"
        },
        {
            img: "https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg",
            title: "디자인"
        },
        {
            img: "https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg",
            title: "캠핑장"
        },
        {
            img: "https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg",
            title: "A자형 주택"
        },
        {
            img: "https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg",
            title: "호숫가"
        },
        {
            img: "https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg",
            title: "북극"
        },
        {
            img: "https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg",
            title: "멋진 수영장"
        },
        {
            img: "https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg",
            title: "동굴"
        },
        {
            img: "https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg",
            title: "서핑"
        },
        {
            img: "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
            title: "최고의 전망"
        },
        {
            img: "https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg",
            title: "복토 주택"
        },
        {
            img: "https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg",
            title: "열대 지역"
        },
        {
            img: "https://a0.muscache.com/pictures/52c8d856-33d0-445a-a040-a162374de100.jpg",
            title: "셰어하우스"
        },
        {
            img: "https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg",
            title: "캐슬"
        },
        {
            img: "https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg",
            title: "한적한 시골"
        }

    ]

    const [categoryIndex, setCategoryIndex] = useState(0);
    console.log(categoryIndex)
    const [rightStop, setRightStop] = useState(false);
    const [leftStop, setLeftStop] = useState(false);


    return (
        <CategoryBottomLine>

            <CategoryMover className='left__button' onClick={() => {
                categoryIndex !== 0 && setCategoryIndex(categoryIndex + 1)
            }}>
                <FontAwesomeIcon icon={faAngleLeft} />
            </CategoryMover>

            <CategoryMover className='right__button' stop={rightStop} onClick={() => {
                categoryIndex !== -11 && setCategoryIndex(categoryIndex - 1)
            }}>
                <FontAwesomeIcon icon={faAngleRight} />
            </CategoryMover>

            <CategorySliderBox>
                <CategoryBox style={{ transform: `translateX(${categoryIndex * 100}px)` }}>
                    <CategoryBar>
                        {
                            categoryList.map((category, i) => {
                                return (
                                    <div className="category__img" key={i} onClick={() => {
                                        setSelect(category.title)
                                    }}>
                                        <img src={category.img} alt={category.title} />
                                        <span className="category__title">
                                            {category.title}
                                        </span>
                                    </div>
                                )
                            }
                            )
                        }

                    </CategoryBar>
                </CategoryBox>

            </CategorySliderBox>
        </CategoryBottomLine>
    );
};

export default Category;

const CategoryMover = styled.button`
    position: absolute;
    z-index: 5;
    width: 32px;
    height: 32px;
    border-radius:50%;
    border:1px solid lightgray;
    background-color: white;
`

const CategorySliderBox = styled.div`
    position: relative;
    width: 90vw;
    margin: 0 160px;
    overflow: hidden;
`
const CategoryBottomLine = styled.div`
    width: 100%;
    border-bottom:1px solid lightgray;
    display: flex;
    align-items: center;
    .right__button {
        right: 8vw;
    }
    .right__button:hover {
        box-shadow: 0 0 5px 0 lightgray;
    }
    .left__button {
        left: 7vw;
    }
    .left__button:hover {
        box-shadow: 0 0 5px 0 lightgray;
    }
 
`

const CategoryBox = styled.div`
    width: 148vw;
    overflow: hidden;
    position: sticky;
    top: 80px;
    z-index: 4;
    /* margin: 0 160px; */
    background-color: white;
    transition: 0.2s all;
`

const CategoryBar = styled.div`
    margin: 0;
    width: 100%;
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
        transition: 0.2s all;
    }

    .category__title {
        padding-bottom: 5px;
        transition: 0.2s all;
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