import React from "react";
import styled from "@emotion/styled";

import { mq, flexMixin } from "@styles";

function Partner({ name, address, phone, description, url }) {
  return (
    <Wrapper>
      <h3>{name}</h3>
      <a href={`http://${url}`} target="_blank" rel="noopener noreferrer">
        {url}
      </a>
      <span>{address}</span>
      <span>{phone}</span>
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

  a,
  a:hover,
  a:visited {
    color: var(--button-outside);
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
