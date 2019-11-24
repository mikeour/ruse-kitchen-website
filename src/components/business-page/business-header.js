import React from "react";
import styled from "@emotion/styled";

import { mq } from "../../styles/";
import { ButtonLink } from "../shared";

function BusinessHeader() {
  return (
    <Wrapper>
      <Text>Have a general inquiry?</Text>
      <p>Use this form instead.</p>

      <ButtonLink className="btn" to="/contact">
        General
      </ButtonLink>
    </Wrapper>
  );
}

export default BusinessHeader;

// Styles

const Wrapper = styled.div`
  grid-area: info;
  width: 100%;
  max-width: 300px;
  padding: 2.5rem 1rem 2.5rem 2.5rem;
  position: sticky;
  top: 25%;
  background: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    padding: 0 0 1rem 0;
  }

  p {
    padding: 1rem 0;
  }

  .btn {
    margin: 0 2rem;
  }

  ${mq("small")} {
    flex-direction: column;
  }
`;

const Text = styled.h1`
  font-size: 1.5rem;
  letter-spacing: 1.5px;
  align-items: center;
  vertical-align: middle;
  display: inline-block;
`;
