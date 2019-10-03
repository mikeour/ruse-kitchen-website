import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { css, Global } from "@emotion/core"
import styled from "@emotion/styled"

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  position: relative;
  padding: 0.25rem;
  font-size: 1.5rem;
  background-image: none;
  text-shadow: none;

  :visited {
    color: black;
  }

  :before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: black;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }

  :hover:before {
    visibility: visible;
    transform: scaleX(1);
  }

  :hover {
    color: black;
  }
`

const NavLink = props => (
  <StyledLink
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          color: isCurrent ? "seagreen" : "black",
          // background: isCurrent ? "1" : "0.75",
        },
      }
    }}
  />
)

const Layout = ({ children }) => {
  // const { image } = useStaticQuery(graphql`
  //   query {
  //     image: file(relativePath: { eq: "instagram-logo.png" }) {
  //       sharp: childImageSharp {
  //         fixed {
  //           ...GatsbyImageSharpFixed
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
      `}
    >
      <Global
        styles={css`
          *::after,
          *::before,
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            /* font-family: "Playfair Display", serif; */
          }

          /* body {
            background: url("../images/food.webp") no-repeat left top;
            background-size: cover;
          } */

          /* html,
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
          } */
        `}
      />
      <header
        css={css`
          z-index: 34;
        `}
      >
        <nav
          css={css`
            width: calc(100% - 16rem);
            margin: 0 8rem;
            padding: 0.5rem 6%;
            display: flex;
            justify-content: space-around;
          `}
        >
          <NavLink to="/">Home</NavLink>

          <NavLink to="/menu">Menu</NavLink>

          <NavLink to="/where">Where We Are</NavLink>

          <NavLink to="/contact">Contact</NavLink>

          {/* <Img
            css={css`
              color: black;
              position: relative;
              width: 50px;
            `}
            fixed={image.sharp.fixed}
          ></Img> */}
        </nav>
      </header>

      <main>{children}</main>
      <footer>
        <small>Website created by Mike Roeslein</small>
      </footer>
    </div>
  )
}

export default Layout
