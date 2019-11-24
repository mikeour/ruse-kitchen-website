import React from "react"
import Image from "gatsby-image"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { motion, AnimatePresence } from "framer-motion"
import { mq } from "../../styles"

import { useIcons, useOnClickOutside } from "../../hooks"
import NavLink from "./nav-link"

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const Text = styled(motion.span)`
  text-decoration: none;
  position: relative;
  padding: 0.25rem 0.5rem;
  font-size: 1.5rem;
  background-image: none;
  text-shadow: none;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;
  cursor: pointer;

  ${mq("small")} {
    /* margin: 1rem 0; */
  }

  :visited {
    color: var(--navlink);
  }
`

const variants = {
  closed: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.1,
      when: "afterChildren",
      staggerChildren: 0.25,
    },
  },
  open: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.25,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
}

const items = {
  closed: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.1,
      when: "afterChildren",
      staggerChildren: 0.25,
      staggerDirection: -1,
    },
  },
  open: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.25,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
}

const links = {
  closed: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.25,
    },
  },
  open: {
    opacity: 1,
    scale: 1,
  },
}

function ExpandingNavLinkMobile({ name, additionalLinks, handleClick }) {
  const [showExpanding, setExpanding] = React.useState(false)
  const toggleExpanding = React.useCallback(() =>
    setExpanding(prevState => !prevState)
  )
  const ref = React.useRef()

  const { expand } = useIcons()

  useOnClickOutside(ref, toggleExpanding)

  return (
    <>
      <Wrapper onClick={toggleExpanding}>
        <Text
          initial={{ color: "var(--navlink)" }}
          animate={{ color: showExpanding ? "seagreen" : "var(--navlink)" }}
          transition={{ duration: 2 }}
        >
          {name} <Image fixed={expand.sharp.fixed} />
        </Text>
      </Wrapper>
      <AnimatePresence>
        {showExpanding && (
          <motion.section
            initial="closed"
            animate="open"
            exit="closed"
            variants={{
              open: { opacity: 1, height: "auto" },
              closed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            ref={ref}
          >
            <motion.ul
              initial="closed"
              animate="open"
              variants={variants}
              exit="closed"
              css={css`
                padding: 0 0 0 5%;
                display: flex;
                flex-direction: column;
                text-align: left;
                transform-origin: top center;
              `}
            >
              <motion.div variants={items} exit="closed">
                {additionalLinks.map(({ to, name }, i) => (
                  <motion.div
                    css={css`
                      margin: 0.5rem 0;
                    `}
                    key={i}
                    variants={links}
                    exit="closed"
                  >
                    <NavLink to={to} onClick={handleClick}>
                      {name}
                    </NavLink>
                  </motion.div>
                ))}
              </motion.div>
            </motion.ul>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  )
}

export default ExpandingNavLinkMobile
