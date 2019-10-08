import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import mq from "../styles/media"

const StyledH3 = styled.h3`
  margin: 0;
`

const menuItem = ({ name, price, children }) => (
  <div
    css={css`
      padding: 1rem 2rem;
      width: 100%;
      /* border-left: 1.5px solid seagreen; */
      /* border-right: 1.5px solid seagreen; */
      margin-bottom: 1.5rem;

      ${mq("small")} {
        padding: 0.5rem;
        border-left: 0;
        border-right: 0;
      }
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
          letter-spacing: 2px;
          text-transform: uppercase;

          ${mq("small")} {
            padding: 0.5rem 0;
            border-left: 0;
            border-right: 0;
          }
        `}
      >
        {name}
      </StyledH3>
      <span
        css={css`
          color: seagreen;
          font-size: 1.4rem;
          font-style: italic;
        `}
      >
        ${price}
      </span>
    </div>
    <p
      css={css`
        text-align: left;
        padding: 1rem 3rem;

        ${mq("small")} {
          padding: 0.5rem 1.5rem;
        }
      `}
    >
      {children}
    </p>
  </div>
)

export default menuItem
