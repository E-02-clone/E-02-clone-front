import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import styled from 'styled-components';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { _GetItems } from '../app/slice/ItemSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setLike } from '../app/slice/mainSlice';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faArrowLeft, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Map from '../components/Map';

const Wish = () => {
    const item = useSelector(state => state.ItemSlice?.Items)


    const [nowIndex, setNowIndex] = useState(0)
    const params = useParams()
    console.log(params)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(_GetItems(params.id))
    }, [dispatch])
    const navigate = useNavigate()
    console.log(nowIndex)
    console.log(item)
    return (
        <div>
            <Header type="wish" />
            <div style={{ display: "flex" }}>
                <WishInfo>
                    <WishNavbar>
                        <button
                            className='back'
                            onClick={() => {
                                navigate(-1)
                            }}>
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                        <button onClick={() => {
                            const confirm = window.confirm("위시리스트에서 삭제하시겠습니까?");
                            if (confirm) {
                                dispatch(setLike(params.id))
                                navigate(-1)
                            }

                        }}>
                            <FontAwesomeIcon icon={faTrashCan} />
                        </button>
                    </WishNavbar>
                    <div style={{ display: "flex" }}>
                        <WishWrapper>
                            <MoveSlider className='left__button' onClick={() => {
                                nowIndex === 0 ? setNowIndex(item.img?.length - 1) : setNowIndex(nowIndex - 1)
                            }}><FontAwesomeIcon icon={faAngleLeft} /></MoveSlider>
                            <MoveSlider className='right__button' onClick={() => {
                                nowIndex === item.img?.length - 1 ? setNowIndex(0) : setNowIndex(nowIndex + 1)
                            }}><FontAwesomeIcon icon={faAngleRight} /></MoveSlider>
                            <WishBody nowIndex={nowIndex} style={{ display: "flex", transform: `translateX(-${nowIndex * 300}px)` }}>
                                {item.img?.map(img =>
                                    <Link to={`/detail/${params.id}`}>
                                        <ImageSlider>
                                            <img src={img} alt="" />
                                        </ImageSlider>
                                    </Link>
                                )}
                            </WishBody>
                        </WishWrapper>
                        <WishItemInfo>
                            <div>
                                <div className='itemSize'>
                                    {item.itemSize}
                                </div>
                                <WishTitle>
                                    {item.title}
                                </WishTitle>
                                <div className='gusetRoom'>
                                    최대 인원 {item.guestRoom?.guest}명 · 침실 {item.guestRoom?.guest} · 침대 {item.guestRoom?.bed} · 욕실 {item.guestRoom?.bathRoom}
                                </div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <div className='star'>
                                    ⭐{item.star}
                                </div>
                                <div className='price'>
                                    <b>&#8361;{item.price}</b>/박
                                </div>
                            </div>
                        </WishItemInfo>
                    </div>
                </WishInfo>
                <WishMap>
                    <Map></Map>
                </WishMap>

            </div>
        </div>
    );
};

export default Wish;
const WishMap = styled.div`
    width: 50%;
    height: 100vh;
    background-color: #c7c7ff;
`

const WishItemInfo = styled.div`
    margin: 24px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .itemSize {
        font-size: 14px;
        color: gray;
        padding-bottom: 5px;
    }
    .gusetRoom {
        font-size: 14px;
        color: gray;
        padding-bottom: 5px;
    }
    .star {
        font-size: 14px;
        font-weight: bold;
    }
    .price {
        font-size: 18px;
    }
`

const MoveSlider = styled.button`
    position: absolute;
    z-index: 5;
    top: 86px;
    opacity: 0;
    transition: 0.2s all;
    border: none;
    background-color: white;
    color: black;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    font-size: 16px;
    font-weight: lighter;
`
const WishTitle = styled.div`
    text-overflow: ellipsis;
    line-height: 1.2;
    width: 400px;
    height: 32px;
    white-space : nowrap;
    overflow : hidden;
    /* padding-bottom: 5px; */
`


const WishWrapper = styled.div`
    width: 300px;
    overflow: hidden;
    border-radius: 20px;
    /* padding: 24px; */
    position: relative;
    height: 200px;
    margin: 24px 24px 24px 0;
    .left__button {
        left: 24px;
    }
    .right__button {
        right: 24px;
    }
    &:hover ${MoveSlider} {
        opacity: 0.7;
    }
    
`
const WishBody = styled.div`
    position: relative;
    display:flex;
    height: 200px;
    width: 300px;
    transition: 0.5s all;
    button {
        position:absolute;
    }

    `

const ImageSlider = styled.div`
    height: 200px;
    width: 300px;
    img {
        width: 300px;
        height: 200px;
        object-fit: cover;
        
    }
`

const WishInfo = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid lightgray;
    margin: 0 24px;
`

const WishNavbar = styled.div`
    height: 66px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 0;
    button {
        margin-right: 24px;
        width: 32px;
        height: 32px;
        border: none;
        border-radius:50%;
        color: #313131;
        background-color: transparent
    }
    button:hover {
        background-color: #f7f7f7;
    }
`