import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const StyledH3 = styled.h3`
  margin: 0;
`

const menuItem = ({ name, price, children }) => {
  return (
    <div
      css={css`
        padding: 0 2rem;
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
          `}
        >
          {name}
        </StyledH3>
        <span
          css={css`
            display: inline-block;
          `}
        >
          ${price}
        </span>
      </div>
      <p
        css={css`
          text-align: left;
          padding: 1rem;
        `}
      >
        {children}
      </p>
    </div>
  )
}

export default menuItem
