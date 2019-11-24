import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import styled from "@emotion/styled"
import { mq } from "../../styles"

import FullView from "./full-view"
import MobileView from "./mobile-view"
import { useIcons, useWindowSize } from "../../hooks"

const NavBarWrapper = styled(motion.nav)`
  width: 100%;
  height: var(--nav-height-large);
  padding: 0.5rem 5%;
  opacity: 0.85;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: var(--nav);
  z-index: 10;

  ${mq("small")} {
    height: var(--nav-height-small);
    padding: 5%;
  }
`

const initialNavState = {
  show: true,
  scrollPos: 0,
}

const animations = {
  open: { y: "0" },
  closed: { y: "-100%" },
}

function Nav({ showSidebar, setShowSidebar }) {
  const [showNavState, setShowNavState] = useState(initialNavState)

  useEffect(() => {
    const handleScroll = () => {
      setShowNavState(prevState => {
        const { top } = document.body.getBoundingClientRect()
        const isTopOfPage = prevState.scrollPos === 0
        const hasScrolledDown = top > prevState.scrollPos

        if (isTopOfPage) {
          return {
            scrollPos: top,
            show: true,
          }
        } else {
          return {
            scrollPos: top,
            show: hasScrolledDown,
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const { instagram, facebook, yelp, logo } = useIcons()

  const size = useWindowSize()

  function renderNav() {
    if (size.width > 768) {
      return (
        <FullView
          instagram={instagram}
          facebook={facebook}
          yelp={yelp}
          logo={logo}
        />
      )
    } else if (size.width <= 768) {
      return (
        <MobileView showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      )
    }
  }

  return (
    <NavBarWrapper
      initial="open"
      animate={showNavState.show ? "open" : "closed"}
      transition={{ duration: 0.5 }}
      variants={animations}
    >
      {renderNav()}
    </NavBarWrapper>
  )
}

export default Nav
