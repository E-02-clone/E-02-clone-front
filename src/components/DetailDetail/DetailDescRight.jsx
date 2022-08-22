import React from "react";
import styled from "styled-components";

function DetailDescRight({ price, star }) {
  return (
    <>
      <MiddleRightBox>
        <StickyTopBox>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <span style={{ fontWeight: "700", fontSize: "1.3em" }}>
                ₩ {price}
              </span>
              <span style={{ fontSize: "1.1em" }}> / 박</span>
            </div>
            <div style={{ marginTop: "5px" }}>
              <span>★ {star} </span>
              <span>・ 후기 54개</span>
            </div>
          </div>
          <DayDecideBox>박스</DayDecideBox>
        </StickyTopBox>
      </MiddleRightBox>
    </>
  );
}

const MiddleRightBox = styled.div`
  width: 35%;
  margin-left: 2%;
  height: 1500px;
`;

const StickyTopBox = styled.div`
  position: sticky;
  height: 460px;
  top: 30px;
  padding: 24px;

  border: 1px solid lightgray;
  border-radius: 10px;
`;

const DayDecideBox = styled.div`
  width: 99%;
  height: 100px;
  margin: 20px auto;
  padding: 5px;
  border: 1px solid #a5a5a5;
  border-radius: 10px;
`;

export default DetailDescRight;
