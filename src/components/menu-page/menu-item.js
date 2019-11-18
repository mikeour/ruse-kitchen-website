import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { mq } from "../../styles"

function MenuItem({ name, children }) {
  return (
    <div
      css={css`
        padding: 1% 15%;
        width: 100%;
        margin-bottom: 1.5rem;

        ${mq("medium")} {
          padding: 1% 5%;
        }

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
        <h3
          css={css`
            display: inline-block;
            padding: 0 2rem;
            font-size: 1rem;
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
}

export default MenuItem
