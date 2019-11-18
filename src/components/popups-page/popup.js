import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { motion, AnimatePresence } from "framer-motion"

import { ButtonLinkRedirect } from "../shared"

const Header = styled(motion.header)`
  padding: 1rem 10%;
  z-index: 20;
  display: grid;
  align-items: center;
  grid-template-areas: "date place info";
  grid-template-columns: 1fr 1fr 0.5fr;
  grid-gap: 1rem;
  border-radius: 4px;
  width: 100%;
  cursor: pointer;

  :hover {
    background: seagreen;
    color: white;
  }
`

function Popup({ description, title, day, date, address, time, map_url }) {
  const [extended, setExtended] = useState(false)
  const toggleExtended = () => setExtended(prevState => !prevState)

  const { collapse, expand } = useStaticQuery(graphql`
    query {
      collapse: file(relativePath: { eq: "logos/collapse.png" }) {
        sharp: childImageSharp {
          fixed(width: 20, height: 20) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      expand: file(relativePath: { eq: "logos/expand.png" }) {
        sharp: childImageSharp {
          fixed(width: 20, height: 20) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <>
      <Header
        animate={{
          backgroundColor: extended ? "seagreen" : "white",
          color: extended ? "white" : "black",
        }}
        onClick={toggleExtended}
      >
        <motion.span
          css={css`
            font-size: 1.75rem;
            text-align: left;
            grid-area: date;
            white-space: nowrap;
          `}
        >
          {day} {date}
        </motion.span>

        <motion.span
          css={css`
            font-size: 1.25rem;
            padding: 0 1rem;
            grid-area: place;
            justify-content: center;
            text-align: left;
          `}
        >
          {title}
        </motion.span>

        <motion.div
          css={css`
            grid-area: info;
            display: flex;
            text-align: right;
            justify-content: right;
          `}
        >
          <Image
            css={
              extended
                ? css`
                    filter: invert(91%) sepia(94%) saturate(34%)
                      hue-rotate(250deg) brightness(106%) contrast(100%);
                  `
                : css`
                    filter: none;
                  `
            }
            fixed={extended ? collapse.sharp.fixed : expand.sharp.fixed}
          />
          <motion.span
            css={css`
              letter-spacing: 2px;
              font-size: 1.1rem;
              padding: 0 1rem;
              text-transform: uppercase;
            `}
          >
            {extended ? "Less" : "More"}
          </motion.span>
        </motion.div>
      </Header>
      <AnimatePresence>
        {extended && (
          <motion.section
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <motion.div
              variants={{
                collapsed: { y: -75 },
                open: { y: 0 },
              }}
              transition={{ duration: 0.8 }}
              css={css`
                padding: 2rem 4rem;
                background: white;
                border-radius: 4px;
                margin: 1rem;
                display: grid;
                grid-template-areas:
                  "desc address"
                  "desc time"
                  "desc link";
                grid-template-columns: 1.5fr 1fr;
                grid-template-rows: 1fr 1fr 1fr;
                grid-gap: 2rem;
                justify-content: center;
                text-align: center;
                align-items: center;
                transform-origin: top center;
              `}
            >
              <motion.div
                css={css`
                  grid-area: address;
                `}
              >
                Address:{" "}
                <motion.span
                  css={css`
                    font-size: 1.25rem;
                  `}
                >
                  {address}
                </motion.span>
              </motion.div>
              <motion.div
                css={css`
                  grid-area: time;
                `}
              >
                From:{" "}
                <motion.span
                  css={css`
                    font-size: 1.25rem;
                  `}
                >
                  {time}
                </motion.span>
              </motion.div>
              <motion.div
                css={css`
                  grid-area: desc;
                `}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.25 }}
                  exit={{ opacity: 0 }}
                  css={css`
                    font-size: 1.25rem;
                  `}
                >
                  {description}
                </motion.span>
              </motion.div>
              <motion.div
                css={css`
                  grid-area: link;
                `}
              >
                <ButtonLinkRedirect
                  href={map_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Maps
                </ButtonLinkRedirect>
              </motion.div>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  )
}

export default Popup
