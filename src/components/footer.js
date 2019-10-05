import React from "react"
import { css } from "@emotion/core"
import Image from "gatsby-image"
import Button from "./button"
import useSocialMediaLogos from "../hooks/use-social-media-logos"
import { StyledA } from "./navLink"

const Footer = () => {
  const { instagram, facebook, yelp } = useSocialMediaLogos()
  return (
    <footer
      css={css`
        width: 100%;
        height: 5rem;
        padding: 0.5rem 3rem;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        background: var(--footer);
      `}
    >
      <form onSubmit={e => e.preventDefault()}>
        <label>Newsletter?</label>
        <input
          css={css`
            margin: 0 0.5rem;
            padding-left: 1rem;
            width: 450px;
            height: 35px;
          `}
          placeholder="Email..."
          type="text"
        ></input>
        <Button size="small">Add me!</Button>
      </form>

      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 1rem;
          padding: 0 1rem;
        `}
      >
        <StyledA
          href="https://www.instagram.com/rusevegankitchen/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image fixed={instagram.sharp.fixed} />
        </StyledA>

        <StyledA
          href="https://www.facebook.com/rusevegankitchen/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image fixed={facebook.sharp.fixed} />
        </StyledA>

        <StyledA
          href="https://www.yelp.com/biz/ruse-vegan-kitchen-las-vegas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image fixed={yelp.sharp.fixed} />
        </StyledA>
      </div>
    </footer>
  )
}

export default Footer
