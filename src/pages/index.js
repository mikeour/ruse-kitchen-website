import React from "react"
import Layout from "../components/layout"
import Slideshow from "../components/slideshow"
import Section from "../components/section"
import Button from "../components/button"
import Insta from "../components/insta"
import { css } from "@emotion/core"

const Index = () => {
  return (
    <Layout>
      <Slideshow />
      <Section title="Eat Well. Be Kind.">
        At Ruse's Kitchen we’re passionate about sourcing and serving the best
        food products & gifts possible - from fresh baked goods & prepared foods
        made in house to specialty homewares & hostess gifts from the island and
        beyond. We are here to enhance your Vineyard experience.
        <Button onClick={() => console.log("I've been clicked!")}>Email</Button>
      </Section>
      <Slideshow />
      <Section title="Eat Even Weller. Be Kinder-ish.">
        <p>
          At Ruse's Kitchen we’re even more passionate about sourcing and
          serving the best food products & gifts possible - from fresh baked
          goods & prepared foods made in house to specialty homewares & hostess
          gifts from the island and beyond. We are here to enhance your Vineyard
          experience.
        </p>
        <Button onClick={() => console.log("I've also been clicked!")}>
          Menu
        </Button>
      </Section>
      <Insta />
    </Layout>
  )
}

export default Index
