import React from "react"
import styled from "@emotion/styled"

import { mq, flexMixin } from "../../styles"
import { ButtonLink } from "../shared"

const Header = styled.div`
  ${flexMixin}
  width: 100%;
  background: white;
  padding: 2rem;

  h1 {
    font-size: 1.5rem;
    width: 100%;
    padding: 2rem 15%;
  }

  h3 {
    width: 100%;
    padding: 0 25%;
  }

  a {
    margin-top: 1.5rem;
  }

  ${mq("small")} {
    h1 {
      padding: 1rem 2.5%;
    }

    h3 {
      padding: 0 5%;
    }
  }
`

function PopUpHeader() {
  return (
    <Header>
      <h1>Below you'll find our upcoming pop-ups. Can't wait to see you!</h1>
      <h3>
        Can't make it to an event? No problem, check our list of partners
        throughout the valley to find the closest distributors.
      </h3>
      <ButtonLink to="/partners">Partners</ButtonLink>
    </Header>
  )
}

export default PopUpHeader
