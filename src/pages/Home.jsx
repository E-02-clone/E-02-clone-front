import React from 'react';
import { useState } from "react";
import Modal from '../components/Modal';
import Header from '../components/Header';
import Category from '../components/category/Category';
import ItemList from '../components/ItemList';
import Layout from '../components/common/Layout';
import Footer from '../components/common/Footer';

const Home = () => {
    const [select, setSelect] = useState('전체보기');
    const [modal, setModal] = useState(false);
    return (
        <>
            <Header modal={modal} setModal={setModal} />
            <Category setSelect={setSelect} />
            <Layout>
                <ItemList select={select} modal={modal} setModal={setModal} />
            </Layout>
            <Footer />

        </>
    );
};

export default Home;
