import React from "react";
import styled from "styled-components";

const Layout = (props) => {

  return <StyledLayout>{props.children}</StyledLayout>;

};

const StyledLayout = styled.div`
  position: relative;
  align-items: center;

  padding: 0 160px;

  height: 100vh;
`;

export default Layout;
