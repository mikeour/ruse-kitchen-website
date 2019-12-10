import React from "react";
import styled from "@emotion/styled";
import { mq } from "@styles";

function ContactWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default ContactWrapper;

// Styles

const Wrapper = styled.div`
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
