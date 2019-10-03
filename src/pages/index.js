import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout.js"
import Insta from "../components/insta.js"
import { css } from "@emotion/core"

const Index = () => {
  const { imageOne, imageTwo } = useStaticQuery(graphql`
    query {
      imageOne: file(relativePath: { eq: "hmm.jpg" }) {
        sharp: childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      imageTwo: file(relativePath: { eq: "food.jpg" }) {
        sharp: childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <>
      <Layout>
        <Img fluid={imageOne.sharp.fluid}></Img>
        <Img fluid={imageTwo.sharp.fluid}></Img>

        {/* <h1>Welcome to Ruse Vegan Kitchen</h1>
        <p>Look at all my content.</p>
        <Link to="/page-2">Go to Page 2</Link> */}
        <Insta />
      </Layout>
    </>
  )
}

export default Index
