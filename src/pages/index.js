import React from "react"
import Layout from "../components/layout"
import Slideshow from "../components/slideshow"
import Insta from "../components/insta"
import { css } from "@emotion/core"

const Index = () => {
  return (
    <Layout>
      <div
        css={css`
          height: 3.5rem;
        `}
      ></div>
      <Slideshow />
      <Insta />
    </Layout>
  )
}

export default Index
