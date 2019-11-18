import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import Image from "gatsby-image"
import { motion, AnimatePresence, useCycle } from "framer-motion"

import NavLink from "./nav-link"
import { useLogos } from "../../hooks"

const Wrapper = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  white-space: nowrap;
`

const Text = styled(motion.div)`
  text-decoration: none;
  position: relative;
  font-size: 1.5rem;
  background-image: none;
  text-shadow: none;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;

  :visited {
    color: var(--navlink);
  }

  span {
    margin: 0 0.5rem;
  }
`

const NavLinkWrapper = styled(motion.div)`
  position: absolute;
  width: max-content;
  height: max-content;
  background: var(--nav);
  display: flex;
  flex-direction: column;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  transform-origin: top center;
`

const variants = {
  closed: {
    opacity: 0,
    scale: 0,
    y: "60%",
    transition: {
      duration: 0.1,
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
  open: {
    opacity: 1,
    scale: 1,
    y: "60%",
    transition: {
      duration: 0.1,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
}

const items = {
  closed: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.1,
      // when: "afterChildren",
      // staggerChildren: 0.25,
      // staggerDirection: -1,
    },
  },
  open: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.1,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
}

const links = {
  closed: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.1,
    },
  },
  open: {
    opacity: 1,
    scale: 1,
  },
}

function ExpandingNavLinkDesktop({ name, additionalLinks }) {
  const [showExpanding, toggleExpanding] = useCycle(false, true)
  const { expand } = useLogos()

  return (
    <Wrapper onClick={toggleExpanding}>
      <Text
        animate={{
          color: showExpanding ? "rgb(46,139,87)" : "rgb(0,0,0)",
        }}
      >
        <span>{name}</span>
        <span>
          <Image fixed={expand.sharp.fixed} />
        </span>
      </Text>

      <AnimatePresence>
        {showExpanding && (
          <NavLinkWrapper
            initial="closed"
            animate="open"
            variants={variants}
            exit="closed"
          >
            <motion.div
              css={css`
                padding: 1rem 2rem;

                div {
                  margin: 1rem 0;
                }
              `}
              variants={items}
              exit="closed"
            >
              {additionalLinks.map(link => {
                return (
                  <motion.div variants={links} exit="closed">
                    <NavLink to={link.to}>{link.name}</NavLink>
                  </motion.div>
                )
              })}
            </motion.div>
          </NavLinkWrapper>
        )}
      </AnimatePresence>
    </Wrapper>
  )
}

export default ExpandingNavLinkDesktop

/*



<NavLink to="/menu">Menu</NavLink>

      <div
        css={css`
          position: relative;
          width: max-content;
          white-space: nowrap;

          :hover {
            > div {
              display: flex;
              transition: all 1000ms ease-in-out;
            }
          }
        `}
      >
        <NavLink to="/find">
          Find Us{" "}
          <Img
            // imgStyle={{ display: "inline-block" }}
            fixed={expand.sharp.fixed}
          />
        </NavLink>

        <div
          css={css`
            padding: 1.25rem 2rem;
            display: none;
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translate(-50%, 0);
            flex-direction: column;
            justify-content: center;
            text-align: center;
            width: max-content;
            background: white;
            box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
            border-radius: 5px;
            animation: open 400ms ease-in-out;

            @keyframes open {
              0% {
                opacity: 0;
                visibility: hidden;
              }
              100% {
                opacity: 1;
                visibility: visible;
              }
            }

            > * {
              margin: 0.25rem 0;
            }
          `}
        >
          <NavLink
            css={css`
              font-size: 1.2rem;
            `}
            to="/popups"
          >
            Pop-Up events
          </NavLink>
          <NavLink
            css={css`
              font-size: 1.2rem;
            `}
            to="/partners"
          >
            Partners
          </NavLink>
        </div>
      </div>

      <div
        css={css`
          position: relative;
          width: max-content;
          white-space: nowrap;

          :hover {
            > div {
              display: flex;
              transition: all 1000ms ease-in-out;
            }
          }
        `}
      >
        <NavLink to="/contact">
          Contact us{" "}
          <Img
            // imgStyle={{ display: "inline-block" }}
            fixed={expand.sharp.fixed}
          />
        </NavLink>

        <div
          css={css`
            padding: 1.25rem 2rem;
            display: none;
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translate(-50%, 0);
            flex-direction: column;
            justify-content: center;
            text-align: center;
            width: max-content;
            background: white;
            box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
            border-radius: 5px;
            animation: open 400ms ease-in-out;

            @keyframes open {
              0% {
                opacity: 0;
                visibility: hidden;
              }
              100% {
                opacity: 1;
                visibility: visible;
              }
            }

            > * {
              margin: 0.25rem 0;
            }
          `}
        >
          <NavLink
            css={css`
              font-size: 1.2rem;
            `}
            to="/contact"
          >
            General
          </NavLink>
          <NavLink
            css={css`
              font-size: 1.2rem;
            `}
            to="/business"
          >
            Business
          </NavLink>
        </div>
      </div>

      <NavLink to="/about">About</NavLink>


      
*/
