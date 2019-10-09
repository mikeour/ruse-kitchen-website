import React from "react"
import ButtonLink from "../components/buttonLink"
import { css } from "@emotion/core"
import PopUpSpotlight from "../components/popUpSpotlight"
import mq from "../styles/media"

const ThanksPage = () => {
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

            margin: 1rem;
          `}
        >
          Thanks for reaching out to us here at Ruse! We'll get back to you as
          soon as we can!
        </p>
        <ButtonLink to="/">Home</ButtonLink>
      </div>
    </>
  )
}

export default ThanksPage
