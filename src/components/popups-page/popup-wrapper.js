import React from "react";
import styled from "@emotion/styled";
import { mq, flexMixin } from "../../styles";

function PopUpWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default PopUpWrapper;

const Wrapper = styled.div`
  /* border: 4px solid crimson; */
  width: 100%;
  display: grid;
  grid-template-areas:
    ". form"
    "info form"
    ". form";
  grid-template-columns: auto 1fr;
  grid-template-rows: 10rem auto 1fr;

  ${mq("medium")} {
    grid-template-areas:
      "form"
      "info";
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
`;
