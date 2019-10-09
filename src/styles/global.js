import { css } from "@emotion/core"

export const globalStyles = css`
  *::after,
  *::before,
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Scope One", sans-serif;
    font-size: 16px;
    letter-spacing: 1px;
  }

  body {
    background: var(--body);
    min-height: 100vh;
  }

  :root {
    --nav: #f9f9f9;
    --footer: #96c5ab;
    /* --body: #f3eeea; */
    --body: #efefef;
    /* --section: #d5e7dd; */
    --section: white;
    --navlink: black;
    --navlink-hover: seagreen;
    --button-local: seagreen;
    --button-outside: #6e9bcc;
  }
`
