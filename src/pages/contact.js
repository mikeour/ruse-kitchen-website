import React from "react"
import Layout from "../components/layout"
import Section from "../components/section"

import { css } from "@emotion/core"

const ContactPage = () => {
  return (
    <Layout>
      <Section title="Contact us">
        <div
          css={css`
            padding: 5rem;
          `}
        >
          <form
            name="contact"
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            css={css``}
          >
            <input name="name" placeholder="Enter name..." type="text "></input>
            <input
              name="email"
              placeholder="Enter email..."
              type="text"
            ></input>
            <input
              name="message"
              placeholder="Enter message..."
              type="text"
            ></input>
            <input type="hidden" name="bot-field" />
            <button type="submit">Send</button>
          </form>
        </div>
      </Section>
    </Layout>
  )
}

export default ContactPage
