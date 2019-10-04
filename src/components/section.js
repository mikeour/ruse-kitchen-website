import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

const Section = ({ title, link, children }) => {
  return (
    <div
      css={css`
        padding: 2rem;
        margin: 7rem 10rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* border: 2px solid seagreen; */
        background: var(--section);
        border-radius: 10px;
      `}
    >
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fffbe5"
          fill-opacity="1"
          d="M0,96L60,122.7C120,149,240,203,360,197.3C480,192,600,128,720,138.7C840,149,960,235,1080,261.3C1200,288,1320,256,1380,240L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg> */}
      <div
        css={css`
          background: var(--section);
          padding: 1rem 3rem;
        `}
      >
        <h1
          css={css`
            padding: 1.5rem;
            font-family: "Montserrat", serif;
            font-size: 2rem;
          `}
        >
          {title}
        </h1>
        <div
          css={css`
            padding: 0.5rem 3rem;
          `}
        >
          {children}
        </div>
        {link ? <Link to="/">Go back to the homepage</Link> : null}
      </div>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fffbe5"
          fill-opacity="1"
          d="M0,288L80,293.3C160,299,320,309,480,293.3C640,277,800,235,960,213.3C1120,192,1280,192,1360,192L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg> */}
    </div>
  )
}

export default Section
