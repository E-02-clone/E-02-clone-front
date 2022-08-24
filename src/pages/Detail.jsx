import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CommentsLayout from "../components/commentsLayout";
import { _GetItems } from "../app/slice/ItemSlice";
import DetailTitle from "../components/DetailDetail/DetailTitle";
import DetailPicture from "../components/DetailDetail/DetailPicture";
import DetailDescLift from "../components/DetailDetail/DetailDescLeft";
import DetailDescRight from "../components/DetailDetail/DetailDescRight";
import MorePictures from "../components/DetailDetail/MorePictures";
import Header from "../components/Header";

function Detail() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.ItemSlice.Items);
  const params = useParams();
  const [ModalShow, setModalShow] = useState("none");
  // console.log(state);

  useEffect(() => {
    dispatch(_GetItems(params.id));
  }, []);

  const showModal = () => {
    setModalShow("");
  };

  return (
    <AllBox>
      <Header />
      <TopMainBox>
        <DetailTitle
          title={state?.title}
          star={state?.star}
          location={state?.location}
          nickname={state?.auth}
        />
        {state?.img?.length ? (
          <DetailPicture
            img1={state?.img[0]}
            img2={state?.img[1]}
            img3={state?.img[2]}
            img4={state?.img[3]}
            img5={state?.img[4]}
            showModal={showModal}
          />
        ) : null}
      </TopMainBox>
      <MiddleMainBox>
        <DetailDescLift
          auth={state?.auth}
          category={state?.category}
          content={state?.content}
          convenience={state?.convenience}
          img2={state?.img?.length ? state?.img[1] : null}
        />
        <DetailDescRight price={state?.price} star={state?.star} />
      </MiddleMainBox>

      <CommetLine />
      <MorePictures
        ModalShow={ModalShow}
        setModalShow={setModalShow}
        img={state?.img}
      />
      <CommentsLayout />
    </AllBox>
  );
}

const AllBox = styled.div``;

const TopMainBox = styled.div`
  width: 73%;
  min-width: 600px;
  margin: 0px auto 0px auto;
`;

const MiddleMainBox = styled.div`
  display: flex;
  width: 73%;
  min-width: 600px;
  margin: 20px auto 0px auto;
`;

const MorePictureBtn = styled.button`
  background-color: white;
  padding: 5px;
  border-radius: 10px;
  border: 1px solid black;
  position: absolute;
  top: 74.5%;
  left: 77.5%;
  z-index: 3;
`;

const CommetLine = styled.hr`
  margin-top: 70px;
  width: 73%;
  margin-left: auto;
  margin-right: auto;
`;
export default Detail;
