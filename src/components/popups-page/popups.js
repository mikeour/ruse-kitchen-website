import React from "react";
import styled from "@emotion/styled";
import { mq, flexMixin } from "../../styles";

function PopUps({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}

export default PopUps;

// Styles

const Wrapper = styled.div`
  /* padding: 5%; */
  grid-area: form;
  ${flexMixin};
  width: 100%;

  ${mq("small")} {
    overflow: hidden;
  }
`;

const Content = styled.div`
  border-left: 4px solid seagreen;
  border-radius: 10px;
  /* padding: 5%; */
  width: 100%;
`;
