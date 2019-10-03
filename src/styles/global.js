import { css } from "@emotion/core"

export const globalStyles = css`
  *::after,
  *::before,
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    /* font-family: "Playfair Display", serif; */
  }

  /* body {
            background: url("../images/food.webp") no-repeat left top;
            background-size: cover;
          } */

  /* html,
          body {
            margin: 0;
            color: #555;
            font-size: 18px;
            line-height: 1.4;
          }

          

          > div {
            margin-top: 0;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: #222;
            line-height: 1.1;

            + * {
              margin-top: 0.5rem;
            }

            strong {
              color: #222;
            }

            li {
              margin-top: 0.25rem;
            }
          } */
`
