import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Slideshow, PageContainer } from "../components/shared"
import { Menu, MenuHeader } from "../components/menu-page"

const MenuPage = () => {
  const { imageThree, imageFour, items, branch } = useStaticQuery(graphql`
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

      branch: file(relativePath: { eq: "logos/ruse_branch.png" }) {
        sharp: childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      items: allFile(
        filter: {
          sourceInstanceName: { regex: "/content/" }
          relativeDirectory: { eq: "menu-items" }
        }
      ) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                description
                title
              }
            }
          }
        }
      }
    }
  `)

  const menuItems = items.edges.map(
    item => item.node.childMarkdownRemark.frontmatter
  )

  return (
    <>
      <Slideshow slides={[imageFour, imageThree]} />
      <PageContainer>
        <MenuHeader />
        <Menu menuItems={menuItems} branch={branch} />
      </PageContainer>
    </>
  )
}

export default MenuPage
