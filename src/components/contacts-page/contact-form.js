import React from "react"
import { navigate } from "gatsby"
import styled from "@emotion/styled"
import useForm from "react-hook-form"

import { mq } from "../../styles"

function ContactForm() {
  const [state, setState] = React.useState({})
  const { handleSubmit: formHandler, register, errors } = useForm()

  function handleChange(e) {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
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
      .then(() => navigate("/thanks"))
      .catch(error => alert(error))
  }

  return (
    <Wrapper>
      <p>
        Feel free to send us your questions, comments or suggestions. We love to
        hear from everyone!
      </p>

      <Form
        onSubmit={formHandler(handleSubmit)}
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />

        <label htmlFor="name">Name</label>
        <input
          name="name"
          placeholder="Enter your name"
          type="text"
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          name="email"
          placeholder="Enter your email"
          type="text"
          onChange={handleChange}
          ref={register({
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Invalid email address, please fix and submit again.",
            },
          })}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          placeholder="Enter your message"
          type="text"
          onChange={handleChange}
        />

        <ButtonWrapper>
          <SubmitButton type="submit">Submit</SubmitButton>
        </ButtonWrapper>
      </Form>
    </Wrapper>
  )
}

export default ContactForm

// Styles

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin-bottom: 2rem;
  }
`

const Form = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;

  > * {
    margin: 1rem 0;
  }

  ${mq("small")} {
    width: 100%;
  }

  label {
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
  }

  input,
  textarea {
    padding: 1rem;
    width: 85%;
    border-radius: 4px;
    border: 1px solid #ccc;
    outline: none;
  }

  textarea {
    height: 400px;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1rem;
`
const SubmitButton = styled.button`
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
`

const ErrorMessage = styled.div`
  color: crimson;
  font-size: 1.5rem;
  padding: 1rem;
`

// Utility

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}
