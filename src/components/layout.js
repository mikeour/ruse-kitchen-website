import React from "react"
import Nav from "./nav"
import { css, Global } from "@emotion/core"
import { globalStyles } from "../styles/global"

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
      <Global styles={globalStyles} />
      <header>
        <Nav />
      </header>

      <main>{children}</main>
      <footer>
        <small>Website created by Mike Roeslein</small>
      </footer>
    </div>
  )
}

export default Layout
