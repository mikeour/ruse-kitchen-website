import React from "react"
import { ButtonLink } from "./shared"
import { css } from "@emotion/core"
import { mq } from "../styles"

const FullSection = ({ title, button, children }) => {
  return (
    <section
      css={css`
        padding: 1rem 1.5rem 0 1.5rem;
        margin: 1rem;
        display: grid;
        grid-template-areas:
          "headline"
          "text"
          "button";
        grid-template-columns: 1fr;
        grid-template-rows: 1fr auto 1fr;
        justify-content: center;
        text-align: center;
        align-items: center;
        border: 2px solid var(--nav);
        background: var(--section);
        border-radius: 10px;
        box-shadow: 10px 10px 20px -17px rgba(0, 0, 0, 0.7);

        ${mq("small")} {
          margin: 1rem 1rem 3rem 1rem;
        }
      `}
    >
      <h1
        css={css`
          grid-area: headline;
          padding: 1.5rem;
          font-size: 2rem;
          width: 100%;
          align-items: center;
          text-align: center;
          /* font-family: "Montserrat", serif; */
          font-style: italic;
          word-spacing: 2px;
          letter-spacing: 2px;
          text-transform: uppercase;
          display: grid;
          grid-template-columns: minmax(20px, 1fr) auto minmax(20px, 1fr);
          grid-gap: 19px;

          ::before {
            content: "";
            border-top: 1px solid #444;
          }
          ::after {
            content: "";
            border-top: 1px solid #444;
          }
        `}
      >
        {title}
      </h1>

      <div
        css={css`
          grid-area: text;
          padding: 1rem 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          align-items: center;

          & > * {
            margin: 2rem 1rem;
          }

          ${mq("small")} {
            padding: 0.5rem;
            text-align: left;
          }
        `}
      >
        {children}
      </div>
      {button && (
        <div
          css={css`
            grid-area: button;
          `}
        >
          <ButtonLink to={`/${button.toLowerCase()}`}>{button}</ButtonLink>
        </div>
      )}
    </section>
  )
}

export default FullSection
