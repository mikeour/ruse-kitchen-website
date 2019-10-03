import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import useSlideshow from "../hooks/use-slideshow"
import { css } from "@emotion/core"

const Slideshow = () => {
  const { imageOne, imageTwo } = useStaticQuery(graphql`
    query {
      imageOne: file(relativePath: { eq: "slides/hmm.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1450, maxHeight: 700, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      imageTwo: file(relativePath: { eq: "slides/food.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1450, maxHeight: 700, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const { current, handleNext, handlePrevious } = useSlideshow([
    imageOne,
    imageTwo,
  ])

  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <Img fluid={current.sharp.fluid}></Img>
      <div>
        <div
          css={css`
            position: absolute;
            top: 48%;
            left: 3.5%;
            color: white;
            font-size: 3rem;
            opacity: 0.75;
            cursor: pointer;
            :hover {
              opacity: 1;
            }
          `}
          onClick={handlePrevious}
          role="button"
        >
          &larr;
        </div>

        <div
          css={css`
            position: absolute;
            top: 48%;
            right: 3.5%;
            color: white;
            font-size: 3rem;
            opacity: 0.75;
            cursor: pointer;
            :hover {
              opacity: 1;
            }
          `}
          onClick={handleNext}
          role="button"
        >
          &rarr;
        </div>
      </div>
    </div>
  )
}

export default Slideshow
