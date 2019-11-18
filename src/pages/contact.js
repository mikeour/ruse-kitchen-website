import React from "react"
import { navigate } from "gatsby"
import { motion } from "framer-motion"
import { css } from "@emotion/core"
import { mq } from "../styles"

import FullSection from "../components/fullSection"
import { ButtonLink } from "../components/shared"

const labelStyles = css`
  font-size: 1.5rem;
  letter-spacing: 2px;
  width: 100%;
  padding: 0 5rem;
  text-align: left;

  ${mq("medium")} {
    padding: 0 5.5rem;
  }

  ${mq("small")} {
    text-align: center;
    padding: 0 4.5rem;
  }
`

const inputStyles = css`
  padding: 1rem;
  width: 80%;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline: none;
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

function ContactPage() {
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
      <motion.div
        key="contact"
        css={css`
          /* padding: 12rem 6rem 8rem 6rem; */
          padding: 12rem 12rem 0 12rem;

          ${mq("medium")} {
            padding: 4rem 2rem;
          }

          ${mq("small")} {
            padding: 5rem 0.5rem;
          }
        `}
      >
        <div
          css={css`
            padding: 2rem 4rem;
            margin: 0 1rem 1rem 1rem;
            position: relative;
            background: white;
            border-radius: 10px;
            box-shadow: 10px 10px 20px -17px rgba(0, 0, 0, 0.7);

            .btn {
              margin: 0 2rem;
            }
          `}
        >
          <h1
            css={css`
              font-size: 1.5rem;
              letter-spacing: 1.5px;
              align-items: center;
              vertical-align: middle;
              display: inline-block;
            `}
          >
            Have a business inquiry?
          </h1>

          <ButtonLink className="btn" to="/business">
            Business
          </ButtonLink>
        </div>
        <FullSection title="Contact Ruse">
          <div
            css={css`
              /* padding: 5rem; */
              width: 100%;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              /* border: 3px solid red; */
              > p {
                margin-bottom: 2rem;
              }
            `}
          >
            <p>
              Feel free to send us your questions, comments or suggestions. We
              love to hear from everyone!
            </p>

            <form
              css={css`
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                text-align: center;
                align-items: center;

                > * {
                  margin: 1rem 0;
                }

                input,
                textarea {
                  outline: 2px solid var(--footer);
                }
              `}
              onSubmit={handleSubmit}
              name="contact"
              method="post"
              action="/thanks"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />

              <label css={labelStyles} htmlFor="name">
                Name{" "}
                <span
                  css={css`
                    font-size: 0.75rem;
                  `}
                >
                  (whatever you'd like to be called!)
                </span>
              </label>
              <input
                name="name"
                placeholder="Enter your name"
                type="text"
                onChange={handleChange}
                css={inputStyles}
              />

              <label css={labelStyles} htmlFor="email">
                Email{" "}
                <span
                  css={css`
                    font-size: 0.75rem;
                  `}
                >
                  (so we can get back to you!)
                </span>
              </label>
              <input
                name="email"
                placeholder="Enter your email"
                type="text"
                onChange={handleChange}
                css={inputStyles}
              />

              <label css={labelStyles} htmlFor="message">
                Message
              </label>
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
                <button
                  css={css`
                    padding: 0.5rem 2.3rem;
                    border: 2px solid var(--button-outside);
                    border-radius: 5px;
                    color: var(--button-outside);
                    box-shadow: 10px 10px 20px -17px rgba(0, 0, 0, 0.7);
                    transition: all 200ms ease-in-out;
                    font-weight: bold;
                    font-size: 1.1rem;
                    text-transform: uppercase;
                    letter-spacing: 2.5px;
                    text-decoration: none;

                    :hover {
                      color: white;
                      background: var(--button-outside);
                      cursor: pointer;
                    }
                  `}
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </FullSection>
      </motion.div>
    </>
  )
}

export default ContactPage
