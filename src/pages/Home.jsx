import React from "react";
import { useState } from "react";
import Modal from "../components/Modal";
import Header from "../components/Header";
import Category from "../components/category/Category";
import ItemList from "../components/ItemList";
import Layout from "../components/common/Layout";
import Footer from "../components/common/Footer";

const Home = () => {
  const [select, setSelect] = useState("전체보기");
  console.log(select);
  return (
    <>
      <Header setSelect={setSelect} />
      <Layout>
        <ItemList select={select} />
      </Layout>
      <Footer />
    </>
  );
};

export default Home;
