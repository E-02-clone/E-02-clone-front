import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getMainItems, setLike } from '../app/slice/mainSlice';
import { Link } from 'react-router-dom'
import Slider from 'react-slick';
import './css/slick.css';
import './css/slick-theme.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidFaHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const ItemList = ({ select }) => {
    const items = useSelector(state => state.main.data?.data)
    const like = useSelector(state => state.main.data?.likes)

    const dispatch = useDispatch()

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    console.log(items)

    useEffect(() => {
        dispatch(getMainItems())
    }, [dispatch])


    if (select === '전체보기') {
        return (
            <ItemListLayout>
                {items?.map((item) => {
                    return (
                        <Item key={item.itemkey}>
                            <Slider {...settings}>
                                {item.img.map((item) => {
                                    return (
                                        <Link to={`/detail/${item.itemkey}`}>
                                            <img src={item} alt="" />
                                        </Link>
                                    )
                                })}
                            </Slider>
                            <LikeBox onClick={() => {
                                dispatch(setLike(item.itemkey))
                            }}>
                                <LikeLine>
                                    <FontAwesomeIcon icon={faHeart} />
                                </LikeLine>
                                {like.includes(item.itemkey) ?
                                    <LikeButton type="solid">
                                        <FontAwesomeIcon icon={solidFaHeart} />
                                    </LikeButton>
                                    :
                                    <LikeButton type="empty">
                                        <FontAwesomeIcon icon={solidFaHeart} />
                                    </LikeButton>
                                }

                            </LikeBox>
                            <div className='item__info'>
                                <div className='title'>
                                    <div className="item__title">
                                        {item.title}, {item.location}
                                    </div>
                                    <div> ⭐{item.star.map(v => v.star).reduce((a, b) => a + b / item.star.length, 0).toFixed(2)}</div>
                                </div>
                                <div className='item__price'>
                                    <b>\{item.price}</b>/박
                                </div>
                            </div>
                        </Item>
                    )
                })}
            </ItemListLayout>
        );
    } else {
        return (
            <ItemListLayout>
                {items?.filter(item => item.category === select).map((item) => {
                    return (
                        <Item key={item.itemkey}>
                            <Slider {...settings}>
                                {item.img.map((item) => {
                                    return (
                                        <Link to={`/detail/${item.itemkey}`}>
                                            <img src={item} alt="" />
                                        </Link>
                                    )
                                })}
                            </Slider>
                            <LikeBox onClick={() => {
                                dispatch(setLike(item.itemkey))
                            }}>
                                <LikeLine>
                                    <FontAwesomeIcon icon={faHeart} />
                                </LikeLine>
                                {like.includes(item.itemkey) ?
                                    <LikeButton type="solid">
                                        <FontAwesomeIcon icon={solidFaHeart} />
                                    </LikeButton>
                                    :
                                    <LikeButton type="empty">
                                        <FontAwesomeIcon icon={solidFaHeart} />
                                    </LikeButton>
                                }

                            </LikeBox>
                            <div className='item__info'>
                                <div className='title'>
                                    <div className="item__title">
                                        {item.title}, {item.location}
                                    </div>
                                    <div> ⭐5.0</div>
                                </div>
                                <div className='item__price'>
                                    <b>\{item.price}</b>/박
                                </div>
                            </div>
                        </Item>
                    )
                })}
            </ItemListLayout>
        )
    }
};

export default ItemList;

const ItemListLayout = styled.div`
    display: flex;
    flex-flow: row wrap;
    margin: 0 0.45em;
`

const LikeButton = styled.button`
    position: absolute;
    top: 10px;
    right: 20px;
    border: none;
    background-color: transparent;
    color: ${prop => prop.type === "solid" ? "red" : "black"};
    font-size: 24px;
    opacity: ${prop => prop.type === "solid" ? 1 : 0.4};
`
const LikeLine = styled.div`
    position: absolute;
    top: 10px;
    right: 20px;
    border: none;
    background-color: transparent;
    color: white;
    font-size: 24px;
    z-index: 3;
`
const LikeBox = styled.div`
    cursor: pointer;

`

const Item = styled.div`
    height: 20vw;
    width: 15vw;
    margin: 0.8em;
    position: relative;
    img{
        width: 100%;
        border-radius: 1.5em;
        height: 15vw;
        object-fit: cover
    }
    .item__title {
        font-weight:bolder;
    }
    .item__price {
        margin-top: 0.7em;
    }
    .title {
        margin-top: 8px;
        display: flex;
        justify-content: space-between
    }
    .item__info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`