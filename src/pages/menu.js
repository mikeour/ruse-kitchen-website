import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Slideshow, PageContainer } from "@components/shared";
import { Menu, MenuImages, MenuWrapper } from "@components/menu-page";

function MenuPage() {
  const {
    imageOne,
    imageTwo,
    imageThree,
    imageFour,
    items,
    branch
  } = useStaticQuery(graphql`
    query {
      imageOne: file(relativePath: { eq: "slides/waffle-3.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1450, maxHeight: 700, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      imageTwo: file(relativePath: { eq: "slides/thai-soup.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1800, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      imageThree: file(relativePath: { eq: "slides/burrito.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 350, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      imageFour: file(relativePath: { eq: "slides/tofu-satay.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 350, quality: 100) {
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
  `);

  const menuItems = items.edges.map(
    item => item.node.childMarkdownRemark.frontmatter
  );

  return (
    <>
      <Slideshow slides={[imageOne, imageTwo]} />
      <PageContainer>
        <MenuWrapper>
          <MenuImages images={[imageThree, imageFour]} />
          <Menu menuItems={menuItems} branch={branch} image={imageThree} />
        </MenuWrapper>
      </PageContainer>
    </>
  );
}

export default MenuPage;
