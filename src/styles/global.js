import { css } from "@emotion/core"

export const globalStyles = css`
  *::after,
  *::before,
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Scope One", sans-serif;
    letter-spacing: 1px;
  }

  html {
    font-size: 16px;
  }

  body {
    background: var(--body);
    max-width: 100vw;
    min-height: 100vh;
  }

  :root {
    --nav: #f9f9f9;
    --footer: #96c5ab;
    --body: white;
    /* --body: #f3eeea; */
    /* --body: #efefef; */
    /* --section: #d5e7dd; */
    --section: white;
    --navlink: black;
    --navlink-hover: seagreen;
    --button-local: seagreen;
    --button-outside: #6e9bcc;

    --nav-height-large: 26vh;
    --nav-height-small: 12.5vh;
  }
`
