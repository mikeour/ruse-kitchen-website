import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { mq } from "../../styles"

import MenuItem from "./menu-item"

const StyledLink = styled(Link)`
  color: black;
  padding: 0.5rem 0;

  :visited {
    color: black;
  }
`

function renderMenuItems(items) {
  return (
    <>
      {items &&
        items.map(item => (
          <MenuItem key={item.title} name={item.title}>
            {item.description}
          </MenuItem>
        ))}
    </>
  )
}

function Menu() {
  const { branch, items } = useStaticQuery(graphql`
    query {
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
    <div
      css={css`
        border-radius: 5px;
        width: 100%;
        background: white;
        padding: 4rem 0;

        ${mq("medium")} {
          padding: 4rem 2rem;
          margin: 0;
        }

        ${mq("small")} {
          padding: 1rem 0.5rem;
          margin: 0;
        }
      `}
    >
      <Image
        css={css`
          transform: scaleX(-1);
        `}
        fixed={branch.sharp.fixed}
      />
      <p
        css={css`
          font-size: 1rem;
          font-style: italic;
        `}
      >
        Made in house and meticulously spiced
      </p>

      {renderMenuItems(menuItems)}

      <p
        css={css`
          font-size: 1rem;
          font-style: italic;
        `}
      >
        For allergy information, click{" "}
        <StyledLink to="/allergy">here.</StyledLink>
      </p>
      <Image fixed={branch.sharp.fixed} />
    </div>
  )
}

export default Menu
