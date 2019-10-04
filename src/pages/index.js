import React from "react"
import Layout from "../components/layout"
import Slideshow from "../components/slideshow"
import Section from "../components/section"
import Insta from "../components/insta"
import { css } from "@emotion/core"

const Index = () => {
  return (
    <Layout>
      <div
        css={css`
          height: 5rem;
        `}
      ></div>
      <Slideshow />
      <Section title="Eat Well. Be Kind.">
        At Ruse's Kitchen we’re passionate about sourcing and serving the best
        food products & gifts possible - from fresh baked goods & prepared foods
        made in house to specialty homewares & hostess gifts from the island and
        beyond. We are here to enhance your Vineyard experience.
      </Section>
      <Slideshow />
      <Section title="Eat Even Weller. Be Kinder-ish.">
        At Ruse's Kitchen we’re even more passionate about sourcing and serving
        the best food products & gifts possible - from fresh baked goods &
        prepared foods made in house to specialty homewares & hostess gifts from
        the island and beyond. We are here to enhance your Vineyard experience.
      </Section>
      <Insta />
    </Layout>
  )
}

export default Index
