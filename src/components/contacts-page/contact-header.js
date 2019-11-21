import React from "react"
import styled from "@emotion/styled"

import { mq } from "../../styles"
import { ButtonLink } from "../shared"

function ContactHeader() {
  return (
    <Wrapper>
      <Text>Have a business inquiry?</Text>

      <ButtonLink className="btn" to="/business">
        Business
      </ButtonLink>
    </Wrapper>
  )
}

export default ContactHeader

// Styles

const Wrapper = styled.div`
  padding: 2rem 4rem;
  margin: 0 1rem 1rem 1rem;
  position: relative;
  background: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  .btn {
    margin: 0 2rem;
  }

  ${mq("small")} {
    flex-direction: column;
  }
`

const Text = styled.h1`
  font-size: 1.5rem;
  letter-spacing: 1.5px;
  align-items: center;
  vertical-align: middle;
  display: inline-block;
`
