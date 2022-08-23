import React from 'react';
import { Link } from 'react-router-dom'
import Slider from 'react-slick';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidFaHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { setLike } from '../app/slice/mainSlice';
import { useDispatch, useSelector } from 'react-redux';
import './css/slick.css';
import './css/slick-theme.css';

const ItemElement = ({ item, setModal }) => {

    const like = useSelector(state => state.main.data?.likes)

    const dispatch = useDispatch()

    const loginConfirm = () => {
        const confirm = window.confirm("로그인 후 이용 가능합니다. 로그인 하시겠습니까?");
        if (confirm) {
            setModal(true);
        }
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Item key={item.itemkey}>
            <Link to={`/detail/${item.itemkey}`}>
                <Slider {...settings}>
                    {item.img.map((img, i) => {
                        return (
                            <img src={img} alt="" key={`${item.itemkey} ${i}`} />
                        )
                    })}
                </Slider>
            </Link>
            <LikeBox onClick={() => {
                localStorage.getItem("jwtToken") === null
                    ?
                    loginConfirm()
                    :
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
    );
};

export default ItemElement;

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
    z-index: 2;
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