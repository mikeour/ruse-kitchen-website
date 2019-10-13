import React, { useState, useEffect } from "react"
import { NavLink, StyledA } from "./navLink"
import useSocialMediaLogos from "../hooks/use-social-media-logos"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import mq from "../styles/media"
import { useStaticQuery, graphql } from "gatsby"

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
  height: 11rem;
  padding: 0.5rem 9rem;
  opacity: 0.85;
  position: fixed;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  top: 0;
  left: 0;
  background: var(--nav);
  z-index: 234234;
  transition: all 500ms ease-in;

  ${mq("small")} {
    height: 5rem;
    padding: 0.5rem 1rem;
  }
`

const initialNavState = {
  show: true,
  scrollPos: 0,
}

const Nav = () => {
  const [showNavState, setShowNavState] = useState(initialNavState)
  const [showSidebar, setShowSidebar] = useState(false)

  const handleScroll = () => {
    setShowNavState(prevState => {
      if (prevState.scrollPos === 0) {
        return {
          scrollPos: document.body.getBoundingClientRect().top,
          show: true,
        }
      } else {
        return {
          scrollPos: document.body.getBoundingClientRect().top,
          show: document.body.getBoundingClientRect().top > prevState.scrollPos,
        }
      }
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const { instagram, facebook, yelp, menu } = useSocialMediaLogos()

  const { logo, expand } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logos/ruse_circle_logo.png" }) {
        sharp: childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      expand: file(relativePath: { eq: "logos/expand.png" }) {
        sharp: childImageSharp {
          fixed(width: 18, height: 18) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Transition>
      <StyledNav className={showNavState.show ? "active" : "hidden"}>
        {/* Full View */}
        <div
          css={css`
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            width: 100%;

            ${mq("small")} {
              display: none;
            }
          `}
        >
          <NavLink to="/">
            <Img fixed={logo.sharp.fixed} />
          </NavLink>

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
                imgStyle={{ display: "inline-block" }}
                fixed={expand.sharp.fixed}
              />
            </NavLink>

            <div
              css={css`
                padding: 1.25rem;
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

          <NavLink to="/menu">Menu</NavLink>

          {/* <NavLink to="/where">Where</NavLink>

          <NavLink to="/calendar">Calendar</NavLink> */}

          <NavLink to="/contact">Contact</NavLink>

          <NavLink to="/about">About</NavLink>

          {/* <NavLink to="/about">Distribution</NavLink> */}

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
        </div>
        {/* Mobile View */}
        <div
          css={css`
            display: none;

            ${mq("small")} {
              display: flex;
              width: 100%;
              justify-content: flex-end;
              align-items: center;
              padding: 0 2rem;
            }
          `}
        >
          <div
            css={css``}
            onClick={() => setShowSidebar(prevState => !prevState)}
          >
            <Img fixed={menu.sharp.fixed} />
          </div>
        </div>

        {/* Sidebar */}
        {showSidebar && (
          <div
            css={css`
              display: none;
              ${mq("small")} {
                position: absolute;
                padding: 5rem 1rem;
                height: 100vh;
                top: 0;
                left: 0;
                width: 80vw;
                background: var(--nav);
                display: flex;
                flex-direction: column;
                animation: slideIn 500ms ease-in-out;

                > div {
                  margin: 1.5rem 0;
                }

                @keyframes slideIn {
                  from {
                    transform: translateX(-100%);
                    opacity: 0.3;
                  }
                  to {
                    transform: translateX(0);
                    opacity: 1;
                  }
                }
              }
            `}
          >
            <div>
              <NavLink to="/">Home</NavLink>
            </div>
            <div>
              <NavLink to="/menu">Menu</NavLink>
            </div>
            <div>
              <NavLink to="/where">Where</NavLink>
            </div>
            <div>
              <NavLink to="/calendar">Calendar</NavLink>
            </div>
            <div>
              <NavLink to="/contact">Contact</NavLink>
            </div>
            <div>
              <NavLink to="/about">About</NavLink>
            </div>
          </div>
        )}
      </StyledNav>
    </Transition>
  )
}

export default Nav
