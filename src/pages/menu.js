import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Slideshow, PageContainer } from "../components/shared"
import { Menu, MenuHeader } from "../components/menu-page"

const MenuPage = () => {
  const { imageThree, imageFour } = useStaticQuery(graphql`
    query {
      imageThree: file(relativePath: { eq: "slides/hmm.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1450, maxHeight: 700, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      imageFour: file(relativePath: { eq: "slides/plate.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1450, maxHeight: 700, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <>
      <Slideshow slides={[imageFour, imageThree]} />
      <PageContainer>
        <MenuHeader />
        <Menu />
      </PageContainer>
    </>
  )
}

export default MenuPage
