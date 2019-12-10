import React from "react";
import { css } from "@emotion/core";
import Image from "gatsby-image";

import { useInstagram } from "@hooks";

import FullSection from "./fullSection";
import Button from "./button";

const Insta = () => {
  const instaPhotos = useInstagram();
  const { username } = instaPhotos[0];

  return (
    <FullSection title="What's new with us?">
      <p
        css={css`
          padding: 1rem;
        `}
      >
        Check out our latest posts and make sure to follow us on Instagram
        @rusekitchen.
      </p>
      <div
        css={css`
          /* margin: 5rem 10rem;
          width: calc(100% - 20rem); */
        `}
      >
        <div
          css={css`
            /* border: 1px solid red; */
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            width: 100%;
            justify-content: space-evenly;
            overflow-x: scroll;
          `}
        >
          {instaPhotos.map(photo => (
            <a
              key={photo.id}
              href={`https://instagram.com/p/${photo.id}/`}
              css={css`
                box-shadow: 0;
                margin: 1rem;
                /* max-width: calc(33% - 1rem); */
                background-image: none;
                width: 300px;
                transition: 200ms box-shadow linear;
                :focus,
                :hover {
                  box-shadow: 0 2px 14px #22222244;
                  z-index: 10;
                }
              `}
            >
              <Image
                key={photo.id}
                css={css`
                  width: 100%;
                  * {
                    margin-top: 0;
                  }
                `}
                fluid={photo.fluid}
                alt={photo.caption}
              />
            </a>
          ))}
        </div>
        <Button>See more on Instagram &rarr;</Button>
      </div>
    </FullSection>
  );
};

export default Insta;
