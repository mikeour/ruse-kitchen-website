import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import Image from "gatsby-image"
import { motion, AnimatePresence } from "framer-motion"

import NavLink from "./nav-link"
import { useIcons, useOnClickOutside } from "../../hooks"

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
  const [showExpanding, setExpanding] = React.useState(false)
  const toggleExpanding = React.useCallback(() =>
    setExpanding(prevState => !prevState)
  )
  const ref = React.useRef()

  const { expand } = useIcons()

  useOnClickOutside(ref, toggleExpanding)

  return (
    <Wrapper onClick={toggleExpanding}>
      <Text>
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
            ref={ref}
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
                  <motion.div key={link.to} variants={links} exit="closed">
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
