import React from "react"
import FullSection from "../components/fullSection"
import { css } from "@emotion/core"
import mq from "../styles/media"
import { ButtonLinkRedirect } from "../components/buttonLink"
import { navigate } from "gatsby"

const labelStyles = css`
  font-size: 1.1rem;
  letter-spacing: 2px;
  width: 100%;
  padding: 0 7rem;
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
      {/* <div
        css={css`
          height: 5rem;
        `}
      ></div> */}
      <div
        css={css`
          /* padding: 12rem 6rem 8rem 6rem; */
          padding: 12rem 12rem;

          ${mq("medium")} {
            padding: 4rem 2rem;
          }

          ${mq("small")} {
            padding: 5rem 0.5rem;
          }
        `}
      >
        <FullSection title="Contact us">
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
              Questions? Comments? Feel free to reach out to us here! We love to
              hear from everyone.
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
                Name
              </label>
              <input
                name="name"
                placeholder="Enter your name"
                type="text"
                onChange={handleChange}
                css={inputStyles}
              />

              <label css={labelStyles} htmlFor="email">
                Email
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
      </div>
    </>
  )
}

export default ContactPage
