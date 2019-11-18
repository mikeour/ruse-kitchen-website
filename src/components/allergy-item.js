import React from "react"
import { css } from "@emotion/core"
import { mq } from "../styles"

function AllergyItem({ name, children }) {
  return (
    <div
      css={css`
        padding: 1rem 2rem;
        width: 100%;
        margin-bottom: 1.5rem;
        text-align: left;

        ${mq("small")} {
          padding: 1rem;
          border-left: 0;
          border-right: 0;
        }
      `}
    >
      <div
        css={css`
          > p {
            margin: 1rem;
            text-align: left;
          }
        `}
      >
        <h3
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
        </h3>
        {children}
      </div>
    </div>
  )
}

export default AllergyItem
