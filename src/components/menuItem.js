import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const StyledH3 = styled.h3`
  margin: 0;
`

const menuItem = ({ name, price, children }) => (
  <div
    css={css`
      padding: 0 2rem;
      width: 100%;
    `}
  >
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem 0.5rem 0 0.5rem;
      `}
    >
      <StyledH3
        css={css`
          display: inline-block;
          padding: 0 2rem;
          font-size: 1.25rem;
          font-family: "Montserrat", serif;
        `}
      >
        {name}
      </StyledH3>

      <span
        css={css`
          color: seagreen;
        `}
      >
        ${price}
      </span>
    </div>
    <p
      css={css`
        text-align: left;
        padding: 1rem 3rem;
      `}
    >
      {children}
    </p>
  </div>
)

export default menuItem
