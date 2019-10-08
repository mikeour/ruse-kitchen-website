import React from "react"
import FullSection from "../components/fullSection"
import Slideshow from "../components/slideshow"
import { css } from "@emotion/core"
import PopUpSpotlight from "../components/popUpSpotlight"
import mq from "../styles/media"

const CalendarPage = () => {
  return (
    <>
      <div
        css={css`
          height: 9rem;
          background: var(--nav);

          ${mq("small")} {
            height: 5rem;
          }
        `}
      ></div>
      <Slideshow caption="calendar" />

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
        <p
          css={css`
            font-size: 1.1rem;
            font-style: italic;
            margin: 1rem;
          `}
        >
          We add new pop-ups every week, so check back often!
        </p>
        <h1
          css={css`
            font-size: 2.5rem;

            letter-spacing: 3px;
            text-transform: uppercase;
          `}
        >
          October
        </h1>
        <PopUpSpotlight button="map"></PopUpSpotlight>
        <PopUpSpotlight button="map"></PopUpSpotlight>
        <PopUpSpotlight button="map"></PopUpSpotlight>
        <h1
          css={css`
            font-size: 2rem;
            margin: 3rem 0;
            letter-spacing: 3px;
            text-transform: uppercase;
          `}
        >
          November
        </h1>
        <PopUpSpotlight button="map"></PopUpSpotlight>
        <PopUpSpotlight button="map"></PopUpSpotlight>
      </div>
    </>
  )
}

export default CalendarPage
