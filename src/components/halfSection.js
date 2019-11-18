import React from "react"
import { ButtonLink } from "./shared"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { css } from "@emotion/core"
import { mq } from "../styles"

const HalfSection = ({ title, button, children }) => {
  const { leaf } = useStaticQuery(graphql`
    query {
      leaf: file(relativePath: { eq: "logos/leaf.png" }) {
        sharp: childImageSharp {
          fixed(width: 25, height: 25) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div
      css={css`
        flex-basis: 50%;
        padding: 1.5rem;
        margin: 1rem;
        display: grid;
        grid-template-areas: "headline headline" "text button";
        grid-template-columns: 1.5fr 1fr;
        grid-template-rows: 80px auto;
        justify-content: center;
        text-align: center;
        align-items: center;
        border: 2px solid var(--nav);
        background: var(--section);
        border-radius: 10px;
        box-shadow: 10px 10px 20px -17px rgba(0, 0, 0, 0.7);

        ${mq("small")} {
          display: flex;
          flex-direction: column;
        }
      `}
    >
      <h1
        css={css`
          grid-area: headline;
          padding: 1rem 2rem;
          font-size: 1.4rem;
          width: 100%;
          align-items: center;
          text-align: center;
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
      {/* <div
        css={css`
          grid-area: leaf;
          padding: 0 1rem;
          display: flex;
          justify-content: space-around;
        `}
      >
        <Image fixed={leaf.sharp.fixed}></Image>
        <Image fixed={leaf.sharp.fixed}></Image>
        <Image fixed={leaf.sharp.fixed}></Image>
      </div> */}
      <p
        css={css`
          padding: 0.5rem 1.5rem;
          grid-area: text;
          text-align: left;

          ${mq("small")} {
            padding: 1rem 2rem;
          }
        `}
      >
        {children}
      </p>
      {button && (
        <div
          css={css`
            grid-area: button;

            ${mq("small")} {
              padding: 1rem 2rem;
            }
          `}
        >
          <ButtonLink to={`/${button.toLowerCase()}`}>{button}</ButtonLink>
        </div>
      )}
    </div>
  )
}

export default HalfSection
