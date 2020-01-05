import React from "react";
import styled from "@emotion/styled";
import { mq } from "@styles";

function PartnersWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default PartnersWrapper;

// Styles

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-areas:
    "items ."
    "items info"
    "items .";
  grid-template-columns: 1fr 400px;
  grid-template-rows: 10rem auto 1fr;

  ${mq("medium")} {
    grid-template-areas:
      "info"
      "items";
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
`;
