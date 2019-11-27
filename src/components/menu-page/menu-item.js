import React from "react";
import styled from "@emotion/styled";
import { mq } from "../../styles";

function MenuItem({ name, children }) {
  return (
    <Wrapper>
      <ItemName>{name}</ItemName>
      <ItemDescription>{children}</ItemDescription>
    </Wrapper>
  );
}

export default MenuItem;

// Styles

const Wrapper = styled.div`
  padding: 1% 10%;
  width: 100%;
  margin-bottom: 1.5rem;

  ${mq("medium")} {
    padding: 1% 5%;
  }

  ${mq("small")} {
    padding: 0.5rem;
    border-left: 0;
    border-right: 0;
  }
`;

const ItemName = styled.h3`
  width: 100%;
  font-size: 1rem;
  font-family: "Montserrat", serif;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: left;

  ${mq("small")} {
    padding: 0.5rem 0;
    border-left: 0;
    border-right: 0;
  }
`;

const ItemDescription = styled.p`
  text-align: left;

  ${mq("small")} {
    padding: 0.5rem 1.5rem;
  }
`;
