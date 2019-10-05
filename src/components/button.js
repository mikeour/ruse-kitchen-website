import React from "react"
import { css } from "@emotion/core"

const Button = ({ onClick, size = "medium", children }) => (
  <button
    onClick={onClick}
    css={css`
      padding: ${size === "small" ? "0.25rem 0.75rem" : "0.5rem 1.3rem"};
      border: 2px solid seagreen;
      border-radius: 2px;
      color: seagreen;

      :hover {
        color: white;
        background: seagreen;
      }
    `}
  >
    <span
      css={css`
        font-weight: bold;
        font-weight: 700;
        font-style: italic;
        font-size: ${size === "small" ? "0.65rem" : "0.9rem"};
        text-transform: uppercase;
        letter-spacing: 2.5px;
      `}
    >
      {children}
    </span>
  </button>
)

export default Button
