import React from "react"
import Nav from "./nav"
import Footer from "./footer"
import { css, Global } from "@emotion/core"
import { globalStyles } from "../styles/global"

const Layout = ({ children }) => {
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

      <Footer />
    </div>
  )
}

export default Layout
