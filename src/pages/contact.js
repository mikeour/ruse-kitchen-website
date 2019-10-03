import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

import { css } from "@emotion/core"

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <div
          css={css`
            padding: 5rem;
          `}
        >
          <h1>Contact</h1>
          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            css={css`
              display: flex;
              flex-direction: column;
            `}
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
            <button>Send</button>
          </form>
          <Link to="/">Go back to the homepage</Link>
        </div>
      </Layout>
    </div>
  )
}

export default ContactPage
