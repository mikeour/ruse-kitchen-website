import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { css, Global } from "@emotion/core"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "food.webp" }) {
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
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          /* * + * {
            margin-top: 1rem;
          } */

          html,
          body {
            margin: 0;
            color: #555;
            font-size: 18px;
            line-height: 1.4;
          }

          > div {
            margin-top: 0;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: #222;
            line-height: 1.1;

            + * {
              margin-top: 0.5rem;
            }

            strong {
              color: #222;
            }

            li {
              margin-top: 0.25rem;
            }
          }
        `}
      />
      <header>
        <nav
          css={css`
            display: flex;
          `}
        >
          <ul>
            <Link to="/about">About</Link>
          </ul>
          <ul>
            <Link to="/contact">Contact</Link>
          </ul>
        </nav>
      </header>
      <Img fluid={data.image.sharp.fluid} />
      <main>{children}</main>
    </>
  )
}

export default Layout
