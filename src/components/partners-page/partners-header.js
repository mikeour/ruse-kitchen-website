import React from "react";
import styled from "@emotion/styled";

import { ButtonLink } from "@components/shared";
import { mq, flexMixin } from "@styles";

function PartnersHeader() {
  return (
    <Header>
      <h1>Looking to take some Ruse home with you?</h1>
      <h3>Here are our partners whom stock Ruse products daily!</h3>
      <br />
      <h3>
        Check our list of upcoming Pop-ups for all your chances to enjoy Ruse
      </h3>
      <ButtonLink to="/popups">Pop-ups</ButtonLink>
    </Header>
  );
}

export default PartnersHeader;

// Styles

const Header = styled.div`
  ${flexMixin}
  width: 100%;
  background: white;
  padding: 1rem;
  grid-area: info;
  position: sticky;
  top: 25%;

  h1 {
    font-size: 1.5rem;
    width: 100%;
    padding: 2rem 15%;
  }

  h3 {
    width: 100%;
    padding: 0 10%;
  }

  a {
    margin-top: 1.5rem;
  }

  ${mq("medium")} {
    position: relative;
    top: 0;
    max-width: 100%;
  }

  ${mq("small")} {
    h1 {
      padding: 1rem 2.5%;
    }

    h3 {
      padding: 0 5%;
    }
  }
`;
