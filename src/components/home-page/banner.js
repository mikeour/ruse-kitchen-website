import React from "react";
import styled from "@emotion/styled";
import { mq, flexMixin } from "@styles";

import { ButtonLink } from "@components/shared";

const BannerWrapper = styled.div`
  position: absolute;
  top: 60vh;
  left: 0%;
  display: grid;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  padding: 3%;
  width: calc(100% - 10%);
  margin: 0 5%;
  grid-template-areas: "name text";
  grid-template-columns: 1fr 1fr;

  ${mq("medium")} {
    ${flexMixin}
  }

  ${mq("small")} {
    position: static;
    width: 100%;
    margin: 0;
    display: block;
    background: white;
  }
`;

const BannerName = styled.div`
  grid-area: name;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-right: 1px solid black;
  padding: 5% 10%;
  white-space: nowrap;

  /* opacity: 0.75; */

  h1 {
    font-size: 3rem;
  }

  ${mq("medium")} {
    border-right: none;
  }

  ${mq("small")} {
    padding: 2.5% 5%;

    h1 {
      font-size: 2rem;
    }
  }
`;

const BannerTagline = styled.div`
  grid-area: text;
  width: 100%;
  height: 100%;
  border-left: 1px solid black;
  padding: 2% 5%;
  ${flexMixin}

  p {
    font-size: 1.5rem;
    padding: 1rem 0;
    /* opacity: 0.75; */
  }

  ${mq("medium")} {
    border-left: none;
  }

  ${mq("small")} {
    padding: 1% 2.5%;
  }
`;

function Banner() {
  return (
    <BannerWrapper>
      <BannerName>
        <h1>Ruse Vegan Kitchen</h1>
      </BannerName>
      <BannerTagline>
        <p>
          A plant-based company providing thoughtfully made food all across Las
          Vegas.
        </p>
        <ButtonLink to="/popups">Find us</ButtonLink>
      </BannerTagline>
    </BannerWrapper>
  );
}

export default Banner;
