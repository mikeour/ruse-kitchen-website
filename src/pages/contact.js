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

const ContactPage = () => {
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
            <Formik
              initialValues={{ email: "", name: "", message: "" }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2))
                  setSubmitting(false)
                  // navigate("/")
                }, 500)
              }}
              validationSchema={Yup.object().shape({
                email: Yup.string().email(),
                // .required("Required"),
                name: Yup.string().required("Required"),
                message: Yup.string().required("Required"),
              })}
            >
              {props => {
                const {
                  values,
                  touched,
                  errors,
                  dirty,
                  isSubmitting,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  handleReset,
                } = props
                return (
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
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                  >
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      placeholder="Enter your email"
                      type="text"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      css={inputStyles}
                    />
                    {errors.email && touched.email && (
                      <div
                        css={css`
                          color: red;
                        `}
                      >
                        {errors.email}
                      </div>
                    )}

                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      placeholder="Enter your name"
                      type="text"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      css={inputStyles}
                    />
                    {errors.name && touched.name && (
                      <div
                        css={css`
                          color: red;
                        `}
                      >
                        {errors.name}
                      </div>
                    )}

                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      placeholder="Enter your message"
                      type="text"
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      css={messageStyles}
                    />
                    {errors.message && touched.message && (
                      <div
                        css={css`
                          color: red;
                        `}
                      >
                        {errors.message}
                      </div>
                    )}
                    <input type="hidden" name="form-name" value="contact" />
                    <div
                      css={css`
                        display: flex;
                        justify-content: space-around;
                        padding: 1rem;
                      `}
                    >
                      <button
                        type="button"
                        onClick={handleReset}
                        disabled={!dirty || isSubmitting}
                      >
                        Reset
                      </button>
                      <button type="submit" disabled={isSubmitting}>
                        Submit
                      </button>
                    </div>
                  </form>
                )
              }}
            </Formik>
            {/*             
            <form
              name="contact"
              method="post"
              netlify-honeypot="bot-field"
              data-netlify="true"
              css={css``}
            >
              <input
                name="name"
                placeholder="Enter name..."
                type="text "
              ></input>
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
            </form> */}
          </div>
        </FullSection>
      </div>
    </>
  )
}

export default ContactPage
