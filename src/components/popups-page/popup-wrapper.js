import React from "react";
import styled from "@emotion/styled";
import { mq, flexMixin } from "../../styles";

const Wrapper = styled.div`
  ${flexMixin};
  width: 100%;
  margin: 1rem 5rem 7rem 5rem;

  ${mq("small")} {
    overflow: hidden;
  }
`;

function PopUpWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default PopUpWrapper;
