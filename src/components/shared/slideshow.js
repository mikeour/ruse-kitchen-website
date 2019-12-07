import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { motion } from "framer-motion";

import { useSlideshow } from "../../hooks";
import { css } from "@emotion/core";
import { mq } from "../../styles";

function Slideshow({ caption, slides }) {
  const {
    imageOne,
    imageTwo,
    imageThree,
    imageFour,
    imageFive,
    imageSix,
    logo
  } = useStaticQuery(graphql`
    query {
      imageOne: file(relativePath: { eq: "slides/storefront.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1450, maxHeight: 700, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      imageTwo: file(relativePath: { eq: "slides/food.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1450, maxHeight: 700, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      imageThree: file(relativePath: { eq: "slides/hmm.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1450, maxHeight: 700, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      imageFour: file(relativePath: { eq: "slides/plate.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1450, maxHeight: 700, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      imageFive: file(relativePath: { eq: "slides/falafel-burger.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1450, maxHeight: 700, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      imageSix: file(relativePath: { eq: "slides/tacos.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1450, maxHeight: 700, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      logo: file(relativePath: { eq: "logos/ruse_circle_logo.png" }) {
        sharp: childImageSharp {
          fixed(width: 650, height: 650) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const defaultSlides = [imageFive, imageSix];

  const { current, handleNext, handlePrevious } = useSlideshow(
    slides || defaultSlides
  );

  return (
    <motion.div
      // initial={{ opacity: 0, scale: 0 }}
      // animate={{ opacity: 1, scale: 1 }}
      // transition={{ duration: 0.5 }}
      css={css`
        position: relative;
        background: var(--footer);
        height: 100vh;

        ${mq("small")} {
          height: 500px;
        }
      `}
    >
      <Img
        css={css`
          animation: fade 1000ms ease-in-out;
          height: 100%;
          @keyframes fade {
            from {
              opacity: 0.25;
            }
            to {
              opacity: 1;
            }
          }
        `}
        fluid={current.sharp.fluid}
      ></Img>
      {/* <div
        css={css`
          position: absolute;
          top: 50%;
          left: 50%;
          opacity: 0.5;
          transform: translate(-50%, -50%);
          filter: invert(97%) sepia(2%) saturate(2%) hue-rotate(265deg)
            brightness(116%) contrast(100%);
        `}
      >
        <Img fixed={logo.sharp.fixed} />
      </div> */}

      {/* <h1
        css={css`
          position: absolute;
          top: 65%;
          left: 50%;
          transform: translate(-50%, -35%);
          color: none;
          font-size: 4.5rem;
          width: fit-content;
          font-family: "Montserrat", serif;
          text-transform: uppercase;
          opacity: 0.4;
          font-style: italic;
          letter-spacing: 10px;
          text-decoration: underline;
          text-underline-position: under;
          background: white;
          border-top: 10px solid none;
          border-bottom: 10px solid none;
          border-radius: 5px;
          padding: 1.5rem;
          box-shadow: 10px 10px 20px -17px rgba(0, 0, 0, 0.7);

          ${mq("small")} {
            font-size: 3rem;
          }
        `}
      >
        {caption}
      </h1> */}
      {/* <div>
        <div
          css={css`
            position: absolute;
            top: 48%;
            left: 3.5%;
            color: white;
            font-size: 3rem;
            opacity: 0.75;
            cursor: pointer;
            :hover {
              opacity: 1;
            }
          `}
          onClick={handlePrevious}
          role="button"
        >
          &larr;
        </div>

        <div
          css={css`
            position: absolute;
            top: 48%;
            right: 3.5%;
            color: white;
            font-size: 3rem;
            opacity: 0.75;
            cursor: pointer;
            :hover {
              opacity: 1;
            }
          `}
          onClick={handleNext}
          role="button"
        >
          &rarr;
        </div>
      </div> */}
    </motion.div>
  );
}

export default Slideshow;
