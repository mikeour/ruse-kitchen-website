import React from "react"
import { css } from "@emotion/core"
import { mq } from "../styles"
import { Slideshow } from "../components/shared"
import { useStaticQuery, graphql } from "gatsby"
import LocationCard from "../components/location"

const WherePage = () => {
  const { imageOne, imageTwo } = useStaticQuery(graphql`
    query {
      imageOne: file(relativePath: { eq: "slides/falafel-burger.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1450, maxHeight: 700, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      imageTwo: file(relativePath: { eq: "slides/tacos.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1450, maxHeight: 700, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const slides = [imageOne, imageTwo]

  return (
    <>
      {/* <div
        css={css`
          height: 9rem;

          ${mq("small")} {
            height: 5rem;
          }
        `}
      ></div> */}
      <Slideshow caption="where is ruse sold?" slides={slides} />
      <div
        css={css`
          padding: 10%;

          ${mq("medium")} {
            padding: 7.5%;
          }

          ${mq("small")} {
            padding: 5%;
          }
        `}
      >
        <h1
          css={css`
            font-size: 1.5rem;
            letter-spacing: 2.5px;
            text-align: left;
          `}
        >
          We are a local pop-up and travel all across Vegas setting up at
          various locations. We also sell our products across local businesses
          in the valley. Check out below to find us!
        </h1>
        <LocationCard title="location" button="where" />
      </div>
    </>
  )
}

export default WherePage
