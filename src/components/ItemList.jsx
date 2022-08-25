import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getMainItems, getSubItems } from '../app/slice/mainSlice';
import ItemElement from './ItemElement';

const ItemList = ({ select, setModal, modal }) => {

    const items = useSelector(state => state.main.data?.data);
    console.log(items)
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    console.log(page)

    const handleScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;

        console.log('스크롤 이벤트 발생');

        if (scrollTop + clientHeight >= scrollHeight) {
            console.log('페이지 끝에 스크롤이 닿았음');
            setPage((prev) => prev + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        dispatch(getSubItems(page))
    }, [page])

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
