import React from "react";
import styled from "@emotion/styled";
import { mq } from "@styles";

function OrderWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default OrderWrapper;

// Styles

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-areas:
    "info form"
    "info form"
    "info .";
  grid-template-columns: auto 1fr;
  grid-template-rows: 10rem auto 1fr;
  background: whitesmoke;
  border-radius: 10px;

  ${mq("small")} {
    grid-template-areas:
      "info"
      "form";
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
`;
