import React from "react"
import Section from "../components/section"
import Layout from "../components/layout"
import { css } from "@emotion/core"

const CalendarPage = () => {
  return (
    <Layout>
      <div
        css={css`
          height: 5rem;
        `}
      ></div>
      <Section title="Calendar">Heres where we will be.</Section>
    </Layout>
  )
}

export default CalendarPage
