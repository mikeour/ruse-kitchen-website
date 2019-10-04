import React, { useState, useEffect } from "react"
import { NavLink, StyledA } from "./navLink"
import useSocialMediaLogos from "../hooks/use-social-media-logos"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const Transition = styled.div`
  .active {
    visibility: visible;
    transition: all 400ms ease-in;
  }
  .hidden {
    visibility: hidden;
    transition: all 400ms ease-out;
    transform: translate(0, -100%);
  }
`

const StyledNav = styled.nav`
  width: 100%;
  height: 5rem;
  padding: 0.5rem 3rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background: var(--nav);
  z-index: 234234;
  transition: all 500ms ease-in;
`

const initialShowState = {
  show: true,
  scrollPos: 0,
}

const Nav = () => {
  const { instagram, facebook, yelp } = useSocialMediaLogos()
  const [showState, setShowState] = useState(initialShowState)

  const handleScroll = () => {
    setShowState(prevState => ({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > prevState.scrollPos,
    }))
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <Transition>
      <StyledNav className={showState.show ? "active" : "hidden"}>
        <NavLink to="/">Home</NavLink>

        <NavLink to="/menu">Menu</NavLink>

        <NavLink to="/where">Where</NavLink>

        <NavLink to="/calendar">Calendar</NavLink>

        <NavLink to="/contact">Contact</NavLink>

        <NavLink to="/about">About</NavLink>

        <div
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 1rem;
            padding: 0 1rem;
          `}
        >
          <StyledA
            href="https://www.instagram.com/rusevegankitchen/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img fixed={instagram.sharp.fixed} />
          </StyledA>

          <StyledA
            href="https://www.facebook.com/rusevegankitchen/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img fixed={facebook.sharp.fixed} />
          </StyledA>

          <StyledA
            href="https://www.yelp.com/biz/ruse-vegan-kitchen-las-vegas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img fixed={yelp.sharp.fixed} />
          </StyledA>
        </div>
      </StyledNav>
    </Transition>
  )
}

export default Nav
