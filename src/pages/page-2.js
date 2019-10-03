import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { css } from "@emotion/core"

const SecondPage = () => (
  <div>
    <Layout>
      <div
        css={css`
          padding: 5rem;
        `}
      >
        <h1>My second page</h1>
        <Link to="/">Go back to the homepage</Link>
      </div>
    </Layout>
  </div>
)

export default SecondPage
