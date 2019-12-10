import React from "react";
import styled from "@emotion/styled";

import { mq, flexMixin } from "@styles";
import { ButtonLink } from "@components/shared";

function PopUpHeader() {
  return (
    <Header>
      <h1>Here you'll find our upcoming pop-ups. Can't wait to see you!</h1>
      <br></br>
      <h3>
        Can't make it to an event? No problem, check our list of partners
        throughout the valley to find the closest distributors.
      </h3>
      <ButtonLink to="/partners">Partners</ButtonLink>
    </Header>
  );
}

export default PopUpHeader;

// Styles

const Header = styled.div`
  padding: 2.5rem 2.5rem 2.5rem 1rem;
  grid-area: info;
  ${flexMixin}
  max-width: 400px;
  width: 100%;
  background: white;
  position: sticky;
  top: 10%;

  h1 {
    font-size: 1.5rem;
    width: 100%;
  }

  a {
    margin-top: 1.5rem;
  }

  ${mq("medium")} {
    position: relative;
    top: 0;
    max-width: 100%;
    padding: 5%;
  }
`;
