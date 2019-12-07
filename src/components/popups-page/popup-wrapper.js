import React from "react";
import styled from "@emotion/styled";
import { mq, flexMixin } from "../../styles";

function PopUpWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default PopUpWrapper;

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-areas:
    ". form"
    "info form"
    ". form";
  grid-template-columns: auto 1fr;
  grid-template-rows: 5rem auto 1fr;

  ${mq("medium")} {
    grid-template-areas:
      "info"
      "form";
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
`;
