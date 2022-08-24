import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getMainItems } from '../app/slice/mainSlice';
import ItemElement from './ItemElement';

const ItemList = ({ select, setModal, modal }) => {
    const items = useSelector(state => state.main.data?.data)
    console.log(items)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMainItems())
    }, [dispatch])

    if (select === '전체보기') {
        return (
            <ItemListLayout>
                {items?.map((item) => {
                    return (
                        <ItemElement key={item.itemkey} item={item} setModal={setModal} />
                    )
                })}
            </ItemListLayout>
        );
    } else {
        return (
            <ItemListLayout>
                {items?.filter(item => item.category === select).map((item) => {
                    return (
                        <ItemElement key={item.itemkey} item={item} setModal={setModal} />
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
