import React from "react"
import Image from "gatsby-image"
import Section from "./section"
import { css } from "@emotion/core"
import useInstagram from "../hooks/use-instagram"

const Insta = () => {
  const instaPhotos = useInstagram()
  const { username } = instaPhotos[0]

  return (
    <Section title="What's new with us?">
      <div
        css={css`
          /* margin: 5rem 10rem;
          width: calc(100% - 20rem); */
        `}
      >
        <div
          css={css`
            /* border: 1px solid red; */
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            width: 100%;
            justify-content: space-evenly;
            overflow-x: scroll;
          `}
        >
          {instaPhotos.map(photo => (
            <a
              key={photo.id}
              href={`https://instagram.com/p/${photo.id}/`}
              css={css`
                box-shadow: 0;
                margin: 1rem;
                /* max-width: calc(33% - 1rem); */
                background-image: none;

                width: 400px;

                transition: 200ms box-shadow linear;

                :focus,
                :hover {
                  box-shadow: 0 2px 14px #22222244;
                  z-index: 10;
                }
              `}
            >
              <Image
                key={photo.id}
                css={css`
                  width: 100%;

                  * {
                    margin-top: 0;
                  }
                `}
                fluid={photo.fluid}
                alt={photo.caption}
              />
            </a>
          ))}
        </div>
        <a href={`https://instagram.com/${username}`}>
          See more on Instagram &rarr;
        </a>
      </div>
    </Section>
  )
}

export default Insta
