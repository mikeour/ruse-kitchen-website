import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

import { css } from "@emotion/core"

const MenuPage = () => {
  return (
    <div>
      <Layout>
        <div
          css={css`
            padding: 5rem;
          `}
        >
          <h1>Menu</h1>
          <p>Heres what we serves.</p>
          <Link to="/">Go back to the homepage</Link>
        </div>
      </Layout>
    </div>
  )
}

export default MenuPage
