import React from "react"
import { css } from "@emotion/core"

const Button = ({ onClick, size = "medium", children }) => (
  <button
    onClick={onClick}
    css={css`
      padding: ${size === "small" ? "0.25rem 1rem" : "0.5rem 2.3rem"};
      border: 2px solid seagreen;
      border-radius: 2px;
      color: seagreen;
      box-shadow: 10px 10px 20px -17px rgba(0, 0, 0, 0.7);
      transition: all 200ms ease-in-out;

      :hover {
        color: white;
        background: seagreen;
        cursor: pointer;
      }
    `}
  >
    <span
      css={css`
        font-weight: bold;
        font-size: ${size === "small" ? "0.75rem" : "1.1rem"};
        text-transform: uppercase;
        letter-spacing: 2.5px;
      `}
    >
      {children}
    </span>
  </button>
)

export default Button
