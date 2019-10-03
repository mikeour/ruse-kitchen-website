import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import WhereWeAre from "../components/WhereWeAre"

import { css } from "@emotion/core"

const WherePage = () => {
  return (
    <div>
      <Layout>
        <div
          css={css`
            padding: 5rem;
          `}
        >
          <WhereWeAre />
          <Link to="/">Go back to the homepage</Link>
        </div>
      </Layout>
    </div>
  )
}

export default WherePage
