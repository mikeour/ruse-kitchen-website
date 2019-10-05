import React from "react"
import Layout from "../components/layout"
import Section from "../components/section"
import Button from "../components/button"
import Transition from "../components/transition"
import { css } from "@emotion/core"

const WherePage = () => {
  return (
    <Layout>
      <div
        css={css`
          height: 5rem;
        `}
      ></div>

      <Section title="Where We Are">
        We are a local pop-up and travel all across Vegas setting up at various
        locations. We also sell our products across local businesses in the
        valley. Check out below to find us!
        <Button>Menu</Button>
      </Section>
    </Layout>
  )
}

export default WherePage
