import React from "react";
import { navigate } from "gatsby";
import Image from "gatsby-image";
import styled from "@emotion/styled";
import useForm from "react-hook-form";

import { mq, flexMixin } from "../../styles";
import { useIcons } from "../../hooks";

function BusinessForm() {
  const { handleSubmit, register, errors } = useForm();
  const { send } = useIcons();

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
      <Form
        onSubmit={handleSubmit(onSubmit)}
        name="Business Form"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="Business Form" />

        <p>
          We provide our plant-based gyro, steak and sausage meat as well as our
          composed dishes to restaurants and coffee shops throughout Las Vegas.
          <br />
          <br />
          We can adjust all of our dishes to fit the needs of any business! If
          your business is interested in incorporating Ruse into their menu,
          send us a message below!
        </p>

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
          <SubmitButton type="submit">
            <Icon fixed={send.sharp.fixed} />
            Send
          </SubmitButton>
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
}

export default BusinessForm;

// Styles

const Wrapper = styled.div`
  width: 100%;
  padding: 5% 0;
  grid-area: form;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  width: 100%;
  ${flexMixin}
  border-radius: 10px;
  border-right: 3px solid seagreen;

  ${mq("medium")} {
    border-right: none;
    border-radius: 0;
  }

  p {
    font-size: 1.25rem;
    padding: 2.5% 10%;
    margin-bottom: 3rem;
   
  }

  label {
    font-size: 1.15rem;
    letter-spacing: 2px;
    width: 80%;
    padding: 0 5rem 0.5rem 5rem;
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
    margin-bottom: 1rem;
    padding: 1rem;
    font-size: 1rem;
    width: 70%;
    border-radius: 4px;
    border: 1px solid #ccc;
    outline: none;

    ${mq("medium")} {
      width: 75%;
    }

    ${mq("small")} {
      width: 85%;
    }
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
  padding: 1rem;
`;

const Icon = styled(Image)`
  margin: 0 10px 0 0;
  width: 20px;
  height: 20px;
  filter: invert(91%) sepia(94%) saturate(34%) hue-rotate(250deg)
    brightness(106%) contrast(100%);
`;

const SubmitButton = styled.button`
  padding: 0.5rem 2rem;
  border-radius: 5px;
  color: white;
  background: var(--button-outside);
  box-shadow: 10px 10px 20px -17px rgba(0, 0, 0, 0.7);
  transition: all 200ms ease-in-out;
  font-weight: bold;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  text-decoration: none;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  opacity: 1;

  :hover {
    color: white;
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
