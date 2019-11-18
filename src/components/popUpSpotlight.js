import React from "react"
import { mq } from "../styles"
import { ButtonLinkRedirect } from "./shared"
import { css } from "@emotion/core"

const PopUpSpotlight = ({ button }) => {
  return (
    <div
      css={css`
        flex-basis: 50%;
        padding: 1.5rem;
        margin: 1rem;
        display: grid;
        grid-template-areas:
          "headline headline"
          "text button"
          "description description";
        grid-template-columns: 1.5fr 1fr;
        grid-template-rows: 1fr 3fr auto;
        justify-content: center;
        text-align: center;
        align-items: center;
        border: 2px solid var(--nav);
        background: var(--section);
        border-radius: 10px;
        box-shadow: 10px 10px 20px -17px rgba(0, 0, 0, 0.7);

        ${mq("small")} {
          display: flex;
          flex-direction: column;
        }
      `}
    >
      <div
        css={css`
          grid-area: headline;
          padding: 1rem 2rem;
          font-size: 1.4rem;
          width: 100%;
          align-items: center;
          text-align: center;
          font-style: italic;
          font-weight: bold;
          word-spacing: 2px;
          letter-spacing: 2px;
          text-transform: uppercase;
          display: grid;
          grid-template-columns: minmax(20px, 1fr) auto minmax(20px, 1fr);
          grid-gap: 19px;

          ::before {
            content: "";
            border-top: 1px solid #444;
          }
          ::after {
            content: "";
            border-top: 1px solid #444;
          }
        `}
      >
        Pop-up Spotlight
      </div>
      <div
        css={css`
          grid-area: text;
          padding: 0.5rem 1.5rem;
          text-align: left;

          ${mq("small")} {
            padding: 1rem 2rem;
          }
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            height: 100%;
            > div {
              margin: 0.5rem;
              letter-spacing: 2px;
              text-align: center;
            }
          `}
        >
          <div
            css={css`
              font-size: 1.5rem;
              font-weight: bold;
              letter-spacing: 2px;
              text-decoration: underline;
              text-underline-position: under;
            `}
          >
            Friday, October 19
          </div>
          <div
            css={css`
              font-size: 1.25rem;
            `}
          >
            Floyd Lamb Park
          </div>
          <div>9200 Tule Springs Rd</div>
          <div
            css={css`
              font-style: italic;
              font-size: 0.9rem;
            `}
          >
            12-4pm
          </div>
        </div>
      </div>
      <div
        css={css`
          grid-area: button;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          > * {
            margin: 1rem 0;
          }
        `}
      >
        <ButtonLinkRedirect
          href="https://www.google.com/maps/search/?api=1&query=floyd+lamb+park"
          target="_blank"
          rel="noopener noreferrer"
        >
          {button}
        </ButtonLinkRedirect>
        <ButtonLinkRedirect
          href="https://www.google.com/maps/search/?api=1&query=floyd+lamb+park"
          target="_blank"
          rel="noopener noreferrer"
        >
          directions
        </ButtonLinkRedirect>
      </div>
      <div
        css={css`
          grid-area: description;
          padding: 0.5rem 2rem;
          letter-spacing: 2px;
          text-align: left;

          ${mq("small")} {
            padding: 1rem;
            margin: 2rem 1rem 1rem 1rem;
            text-align: left;
          }
        `}
      >
        Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi
        radish okra azuki bean corn fava bean mustard tigernut jícama green bean
        celtuce collard greens avocado quandong fennel gumbo black-eyed pea.
        Grape silver beet watercress potato tigernut corn groundnut.
      </div>
    </div>
  )
}

export default PopUpSpotlight
