import { css } from "@emotion/core"

export const globalStyles = css`
  *::after,
  *::before,
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Scope One", sans-serif;
    font-size: 18px;
    letter-spacing: 1px;
  }

  body {
    background: var(--body);
  }

  /* :root {
           --nav: honeydew;
           --footer: honeydew;
           --body: honeydew;
           --section: rgba(255, 251, 229, 1);
           --navlink: black;
           --navlink-hover: seagreen;
         } */

  :root {
    --nav: #96c5ab;
    --footer: #96c5ab;
    --body: #f3eeea;
    --section: #d5e7dd;
    --navlink: black;
    --navlink-hover: seagreen;
  }
`
