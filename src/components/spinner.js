import React from "react"

import { css } from "@emotion/core"

const Spinner = () => {
  return (
    <div
      css={css`
        position: relative;
        padding: 0 4rem;
        width: 100%;
        height: 100%;
        text-indent: -9999em;
        border-top: 0.5rem solid rgba(255, 255, 255, 0.2);
        border-right: 0.5rem solid rgba(255, 255, 255, 0.2);
        border-bottom: 0.5rem solid rgba(255, 255, 255, 0.2);
        border-left: 0.5rem solid #ffffff;
        transform: translateZ(0);
        animation: load8 1.1s infinite linear;

        ::after {
          /* border-radius: 50%; */
          /* width: 10rem;
          height: 10rem; */
        }

        @keyframes load8 {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}
    >
      Loading...
    </div>
  )
}

export default Spinner
