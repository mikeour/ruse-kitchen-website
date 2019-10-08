import React from "react"
import Nav from "../components/nav"
import Footer from "../components/footer"
import Transition from "../components/transition"
import { css, Global } from "@emotion/core"
import { globalStyles } from "../styles/global"

const Layout = ({ children, location }) => (
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

    <Transition location={location}>
      <main>{children}</main>
    </Transition>

    <Footer />
  </div>
)

export default Layout
