import React from "react";
import styled from "@emotion/styled";
import { mq } from "../../styles";

function MenuWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default MenuWrapper;

// Styles

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-areas: "images menu";
  grid-template-columns: 400px 1fr;
  grid-template-rows: 1fr;

  ${mq("medium")} {
    grid-template-areas:
      "menu"
      "images";
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;
