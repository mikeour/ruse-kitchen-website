import React from "react";
import styled from "@emotion/styled";
import { mq } from "../../styles";

function BusinessWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default BusinessWrapper;

// Styles

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-areas:
    "form ."
    "form info"
    "form .";
  grid-template-columns: 1fr auto;
  grid-template-rows: 10rem auto 1fr;

  ${mq("medium")} {
    grid-template-areas:
      "form"
      "info";
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
`;
