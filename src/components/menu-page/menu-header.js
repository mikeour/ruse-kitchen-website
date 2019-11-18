import React from "react"
import styled from "@emotion/styled"
import { mq, flexMixin } from "../../styles"

import { ButtonLink } from "../shared"

const Header = styled.div`
  ${flexMixin}
  width: 100%;
  background: white;
  padding: 2rem;

  p {
    font-size: 1.5rem;
    width: 100%;
    padding: 2rem 10%;
  }

  ${mq("medium")} {
    p {
      padding: 2rem 5%;
    }
  }

  ${mq("small")} {
    p {
      padding: 2rem 2.5%;
    }
  }
`

function MenuHeader() {
  return (
    <Header>
      <p>
        Below is our full menu which rotates based off each event and the
        season. Check our pop-up calendar to find what we will be serving next.
      </p>
      <ButtonLink to="/popups">Pop-Up Events</ButtonLink>
    </Header>
  )
}

export default MenuHeader
