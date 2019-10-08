import React from "react"
import FullSection from "../components/fullSection"
import { css } from "@emotion/core"
import mq from "../styles/media"
import { Formik } from "formik"
import * as Yup from "yup"
import { ButtonLinkRedirect } from "../components/buttonLink"
import { navigate } from "gatsby"

const inputStyles = css`
  padding: 1rem;
  width: 80%;
  border-radius: 4px;
  border: 1px solid #ccc;
`
const messageStyles = css`
  ${inputStyles};
  height: 400px;
`

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactPage = () => {
  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }
  return (
    <>
      <div
        css={css`
          height: 5rem;
        `}
      ></div>
      <div
        css={css`
          padding: 6rem;

          ${mq("medium")} {
            padding: 4rem 2rem;
          }

          ${mq("small")} {
            padding: 1rem 0.5rem;
          }
        `}
      >
        <FullSection title="Contact us">
          <div
            css={css`
              padding: 5rem;
              width: 100%;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              height: 100%;
            `}
          >
            <p>Questions? Feel free to reach out to us here!</p>

            <form
              css={css`
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;

                > * {
                  margin: 1rem 0;
                }
              `}
              onSubmit={handleSubmit}
              name="contact"
              method="post"
              action="/menu"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <label htmlFor="email">Email</label>
              <input
                name="email"
                placeholder="Enter your email"
                type="text"
                onChange={handleChange}
                css={inputStyles}
              />

              <label htmlFor="name">Name</label>
              <input
                name="name"
                placeholder="Enter your name"
                type="text"
                onChange={handleChange}
                css={inputStyles}
              />

              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                placeholder="Enter your message"
                type="text"
                onChange={handleChange}
                css={messageStyles}
              />

              <div
                css={css`
                  display: flex;
                  justify-content: space-around;
                  padding: 1rem;
                `}
              >
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </FullSection>
      </div>
    </>
  )
}

export default ContactPage
