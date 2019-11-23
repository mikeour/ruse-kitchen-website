import React from "react";
import styled from "@emotion/styled";

import { mq, flexMixin } from "../../styles";

const Wrapper = styled.div`
  ${flexMixin}
  padding: 1rem;
  width: 80%;

  ${mq("small")} {
    width: 90%;
  }

  h3 {
    font-size: 2rem;
  }

  span {
    display: block;
  }

  p {
    padding: 1rem 20%;

    ${mq("small")} {
      padding: 1rem 5%;
    }
  }
`;

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
