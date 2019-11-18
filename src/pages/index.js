import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

import { Slideshow } from "../components/shared"
import { Banner } from "../components/home-page"

const IndexWrapper = styled.div`
  position: relative;
`

function IndexPage() {
  const {
    imageOne,
    imageTwo,
    imageThree,
    imageFour,
    imageFive,
    imageSix,
    imageSeven,
  } = useStaticQuery(graphql`
    query {
      imageOne: file(relativePath: { eq: "slides/chili-1.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1450, maxHeight: 700, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      imageTwo: file(relativePath: { eq: "slides/burrito-2.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1800, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      imageThree: file(relativePath: { eq: "slides/waffle-3.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1450, maxHeight: 700, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      imageFour: file(relativePath: { eq: "slides/thai-soup.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1800, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      imageFive: file(relativePath: { eq: "slides/chili-7.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1450, maxHeight: 700, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      imageSix: file(relativePath: { eq: "slides/chili-5.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1450, maxHeight: 700, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      imageSeven: file(relativePath: { eq: "slides/burrito.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <IndexWrapper>
      <Slideshow
        slides={[
          imageThree,
          // imageSix,
          // imageFive,
          // imageOne,
          // imageTwo,
          // imageFour,
        ]}
      />

      <Banner />
    </IndexWrapper>
  )
}

export default IndexPage
