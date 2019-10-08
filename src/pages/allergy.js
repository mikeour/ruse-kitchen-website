import React from "react"

import Slideshow from "../components/slideshow"
import { css } from "@emotion/core"

import mq from "../styles/media"

const AllergyPage = () => {
  return (
    <>
      <div
        css={css`
          height: 9rem;
          background: var(--nav);

          ${mq("small")} {
            height: 5rem;
          }
        `}
      ></div>
      <Slideshow caption="allergy" />

      <div
        css={css`
          padding: 6rem;

          ${mq("medium")} {
            padding: 4rem 2rem;
          }

          ${mq("small")} {
            padding: 1rem 0.5rem;
          }
        `}
      >
        <p
          css={css`
            font-size: 1.1rem;
            font-style: italic;
            margin: 1rem;
          `}
        >
          Here is our allergy information: enjoy!
        </p>
      </div>
    </>
  )
}

export default AllergyPage
