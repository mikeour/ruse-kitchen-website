import React from "react"
import { css } from "@emotion/core"
import mq from "../styles/media"

const SectionContainer = ({ children }) => {
  return (
    <div
      css={css`
        margin: 2rem 3rem;
        display: flex;

        ${mq("small")} {
          margin: 1rem 0.5rem;
          flex-direction: column;
        }
      `}
    >
      {children}
    </div>
  )
}

export default SectionContainer
