import React from "react"
import { css } from "@emotion/core"
import Img from "gatsby-image"
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
      <form>
        <input type="text"></input>
        <button>Add me!</button>
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
          <Img fixed={instagram.sharp.fixed} />
        </StyledA>

        <StyledA
          href="https://www.facebook.com/rusevegankitchen/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img fixed={facebook.sharp.fixed} />
        </StyledA>

        <StyledA
          href="https://www.yelp.com/biz/ruse-vegan-kitchen-las-vegas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img fixed={yelp.sharp.fixed} />
        </StyledA>
      </div>
    </footer>
  )
}

export default Footer
