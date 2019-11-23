import React from "react";
import { navigate } from "gatsby";
import styled from "@emotion/styled";
import useForm from "react-hook-form";

import { mq, flexMixin } from "../../styles";

function BusinessForm() {
  const { handleSubmit, register, errors } = useForm();

  function onSubmit(values) {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "Business Form",
        ...values
      })
    })
      .then(() => navigate("/thanks"))
      .catch(error => alert(error));
  }

  return (
    <Wrapper>
      <p>
        We provide our plant-based gyro, steak and sausage meat as well as our
        composed dishes to restaurants and coffee shops throughout Las Vegas. We
        can adjust all of our dishes to fit the needs of any business! If your
        business is interested in incorporating Ruse into their menu, send us a
        message below!
      </p>

      <Form
        onSubmit={handleSubmit(onSubmit)}
        name="Business Form"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="Business Form" />

        <label htmlFor="name">Name of contact</label>
        <input
          name="name"
          placeholder="Enter your name"
          type="text"
          ref={register}
        />

        <label htmlFor="name">What is the name of your business?</label>
        <input
          name="business"
          placeholder="Enter your business name"
          type="text"
          ref={register}
        />

        <label htmlFor="email">Email Address</label>
        <input
          name="email"
          placeholder="Enter your email"
          type="text"
          ref={register({
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Invalid email address, please fix and submit again."
            }
          })}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

        <label htmlFor="name">What products are you interested in?</label>
        <input
          name="product"
          placeholder="Lamb Gyro, Falafel Burger, etc"
          type="text"
          ref={register}
        />

        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          placeholder="Anything else you'd like us to know"
          type="text"
          ref={register}
        />

        <ButtonWrapper>
          <SubmitButton type="submit">Submit</SubmitButton>
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
}

export default BusinessForm;

// Styles

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    padding: 0 20%;
    font-size: 1.25rem;
    margin-bottom: 2rem;

    ${mq("small")} {
      padding: 0 5%;
    }
  }
`;

const Form = styled.form`
  width: 60%;
  ${flexMixin}

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
    font-size: 1rem;
    width: 85%;
    border-radius: 4px;
    border: 1px solid #ccc;
    outline: none;
  }

  textarea {
    height: 250px;

    ${mq("medium")} {
      height: 200px;
    }

    ${mq("small")} {
      height: 150px;
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1rem;
`;
const SubmitButton = styled.button`
  padding: 0.5rem 2.3rem;
  border-radius: 5px;
  color: white;
  background: var(--button-outside);
  box-shadow: 10px 10px 20px -17px rgba(0, 0, 0, 0.7);
  transition: all 200ms ease-in-out;
  font-weight: bold;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  text-decoration: none;

  :hover {
    background: var(--button-outside-hover);
    cursor: pointer;
  }
`;

const ErrorMessage = styled.div`
  color: crimson;
  font-size: 1.5rem;
  padding: 1rem;
`;

// Utility

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}
