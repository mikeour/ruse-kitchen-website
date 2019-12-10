import React from "react";
import { css } from "@emotion/core";
import { mq } from "@styles";

const SectionContainer = ({ children, marginTop }) => {
  return (
    <div
      css={
        marginTop
          ? css`
              margin: 0rem 3rem 2rem 3rem;
              display: flex;

              ${mq("small")} {
                margin: 1rem 0.1rem;
                flex-direction: column;
              }
            `
          : css`
              margin: 2rem 3rem;
              display: flex;

              ${mq("small")} {
                margin: 1rem 0.1rem;
                flex-direction: column;
              }
            `
      }
    >
      {children}
    </div>
  );
};

export default SectionContainer;
