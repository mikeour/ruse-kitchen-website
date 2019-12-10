import React from "react";
import { navigate } from "gatsby";
import { css } from "@emotion/core";
import addToMailchimp from "gatsby-plugin-mailchimp";
import { mq } from "@styles";

import { ButtonLink } from "@components/shared";

function Footer() {
  const [email, setEmail] = React.useState("");
  const [subscribeMsg, setSubscribeMsg] = React.useState("Subscribe");

  const handleSubmit = e => {
    e.preventDefault();

    addToMailchimp(email)
      .then(data => {
        setSubscribeMsg("Subscribed");
        navigate("/thanks");
      })
      .catch(error => {
        // Errors in here are client side
        // Mailchimp always returns a 200
        alert("Error! ", error);
      });
  };

  const handleEmailChange = e => {
    setEmail(e.currentTarget.value);
  };

  return (
    <footer
      css={css`
        width: 100%;
        height: max-content;
        padding: 2rem 5rem;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        background: var(--footer);

        ${mq("small")} {
          padding: 0 1rem;
          flex-direction: column;
        }
      `}
    >
      <form
        css={css`
          width: 100%;
          text-align: left;
          align-items: left;

          ${mq("small")} {
            padding: 1rem 1rem;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            align-items: center;

            > * {
              margin: 1rem 0;
            }
          }
        `}
        onSubmit={handleSubmit}
      >
        <input
          css={css`
            margin: 0 0.5rem;
            /* padding-left: 1rem; */
            padding: 0.5rem 1rem;
            width: 450px;
            height: 40px;
            font-size: 1rem;
            outline-color: var(--nav);

            ${mq("small")} {
              width: 100%;
            }
          `}
          placeholder="Email..."
          name="email"
          type="text"
          onChange={handleEmailChange}
        ></input>
        <button
          css={css`
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
            border: none;

            :hover {
              cursor: pointer;
              background: var(--button-outside-hover);
            }
          `}
          type="submit"
        >
          {subscribeMsg}
        </button>
      </form>

      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 1rem;
          padding: 0 1rem;

          ${mq("small")} {
            padding: 1rem 1rem;
            flex-direction: column;
          }
        `}
      >
        <p
          css={css`
            padding: 0.5rem 1rem;
            width: max-content;
          `}
        >
          Questions? Get in touch!
        </p>
        <ButtonLink to="/contact">Contact</ButtonLink>
      </div>
    </footer>
  );
}

export default Footer;
