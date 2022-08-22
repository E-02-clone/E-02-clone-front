import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getMainItems } from '../app/slice/mainSlice';
import { Link } from 'react-router-dom'
const ItemList = ({ select }) => {
    const items = useSelector(state => state.main.data?.data)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMainItems())
    }, [dispatch])
    if (select === '전체보기') {
        return (
            <ItemListLayout>
                {items?.map((item) => {
                    return (
                        <Item key={item.itemkey}>
                            <Link to={`/detail/${item.itemkey}`}>
                                <img src={item.img[0]} alt="" />
                            </Link>
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
        );
    } else {
        return (
            <ItemListLayout>
                {items?.filter(item => item.category === select).map((item) => {
                    return (
                        <Item key={item.itemkey}>
                            <img src={item.img[0]} alt="" />
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
    /* margin-top: 2em; */
    display: flex;
    flex-flow: row wrap;
    /* margin: 2em; */
`

const Item = styled.div`
    height: 26vw;
    width: 17vw;
    margin: 0.5em;
    /* border: 1px solid black; */
    img{
        width: 100%;
        border-radius: 1.5em;
        height: 17vw;
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