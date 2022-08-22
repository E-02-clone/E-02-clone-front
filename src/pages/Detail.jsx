import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { _GetItems } from "../app/slice/ItemSlice";
import DetailTitle from "../components/DetailDetail/DetailTitle";
import DetailPicture from "../components/DetailDetail/DetailPicture";
import DetailDescLift from "../components/DetailDetail/DetailDescLeft";
import DetailDescRight from "../components/DetailDetail/DetailDescRight";

function Detail() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.ItemSlice.Items);
  const params = useParams();
  console.log(state);

  useEffect(() => {
    dispatch(_GetItems(params.id));
  }, []);

  return (
    <>
      <TopMainBox>
        <DetailTitle
          title={state?.title}
          star={state?.star}
          location={state?.location}
        />
        {state?.img?.length ? (
          <DetailPicture
            img1={state?.img[0]}
            img2={state?.img[1]}
            img3={state?.img[2]}
            img4={state?.img[3]}
            img5={state?.img[4]}
          />
        ) : null}
      </TopMainBox>
      <MiddleMainBox>
        <DetailDescLift
          auth={state?.auth}
          category={state?.category}
          content={state?.content}
          img2={state?.img?.length ? state?.img[1] : null}
        />
        <DetailDescRight price={state?.price} star={state?.star} />
      </MiddleMainBox>
      <hr style={{ marginTop: "60px" }} />
      <Comment>댓글창</Comment>
    </>
  );
}

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

const Comment = styled.div`
  background-color: #99d1aa;
  width: 100%;
  height: 500px;
`;
export default Detail;
