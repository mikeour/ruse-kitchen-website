import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout.js"
import Insta from "../components/Insta.js"

const Index = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "hmm.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <>
      <Layout>
        <Img fluid={image.sharp.fluid}>
          <h1>Here is some text!</h1>
        </Img>
        {/* <h1>Welcome to Ruse Vegan Kitchen</h1>
        <p>Look at all my content.</p>
        <Link to="/page-2">Go to Page 2</Link> */}
        <Insta />
      </Layout>
    </>
  )
}

export default Index
