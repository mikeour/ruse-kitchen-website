import React from "react";
import styled from "@emotion/styled";

import { mq, flexMixin } from "@styles";

function Partner({ name, address, phone, hours, description }) {
  return (
    <Wrapper>
      <h3>{name}</h3>
      <span>{address}</span>
      <span>{phone}</span>
      <span>{hours}</span>
      <p>{description}</p>
    </Wrapper>
  );
}

export default Partner;

// Styles

const Wrapper = styled.div`
  ${flexMixin}
  padding: 1rem;
  width: 100%;

  h3 {
    font-size: 2rem;
  }

  span {
    display: block;
  }

  p {
    padding: 1rem 10%;

    ${mq("small")} {
      padding: 1rem 5%;
    }
  }
`;
