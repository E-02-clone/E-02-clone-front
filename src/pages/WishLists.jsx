import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/common/Layout';
import Header from '../components/Header';
import { myLike } from '../app/slice/mainSlice';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const WishLists = () => {
    const dispatch = useDispatch()
    const items = useSelector(state => state.main.myLike)
    console.log(items)
    useEffect(() => {
        dispatch(myLike())
    }, [dispatch, items])

    return (
        <>
            <Header type="wish" />
            <Layout>
                <h2 style={{ fontWeight: "bold", padding: "50px 10px 0 10px", marginBottom: "36px" }}>위시리스트</h2>
                <WishSpace>
                    {items?.map((item) => {
                        return (
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <Link to={`/wishLists/${item.itemkey}`}>
                                    <WishBox>
                                        <img className="img main" src={item.img[0]} alt="" />
                                        <SubImage>
                                            <img className="img sub__above" src={item.img[1]} alt="" />
                                            <img className="img sub__below" src={item.img[2]} alt="" />
                                        </SubImage>
                                    </WishBox>

                                </Link>
                                <div style={{ width: "400px", margin: "0 10px", padding: " 12px 0 16px 0", height: "60px", fontSize: "24px", fontWeight: "bold" }}>
                                    {item.title}
                                </div>
                            </div>
                        )
                    })}
                </WishSpace>
            </Layout>
        </>
    );
};

export default WishLists;

const WishBox = styled.div`
    display: flex;
    width: 412px;
    justify-content: space-between;
    margin: 0 10px;
    .main {
        width: 280px;
        height: 216px;
        border-radius: 20px 0 0 20px;
    }
    img {
        width: 130px;
        height: 107px;
        object-fit: cover;
    }
    .sub__above {
        border-radius: 0 20px 0 0;
    }
    .sub__below {
        border-radius: 0 0 20px 0;
    }
`

const SubImage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const WishSpace = styled.div`
    display: flex;
`