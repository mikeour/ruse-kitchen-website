import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--navlink);
  position: relative;
  padding: 0.25rem 0.5rem;
  font-size: 1.25rem;
  background-image: none;
  text-shadow: none;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;

  :visited {
    color: var(--navlink);
  }

  :before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--navlink-hover);
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }

  :hover:before {
    visibility: visible;
    transform: scaleX(1);
  }

  :hover {
    color: var(--navlink-hover);
  }
`

export const StyledA = styled.a`
  text-decoration: none;
  color: var(--navlink);
  position: relative;
  padding: 0.25rem 0.5rem;
  font-size: 1.25rem;
  background-image: none;
  text-shadow: none;
  text-transform: uppercase;
  font-weight: bold;

  :visited {
    color: var(--navlink);
  }

  :before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--navlink-hover);
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }

  :hover:before {
    visibility: visible;
    transform: scaleX(1);
  }

  :hover {
    color: var(--navlink-hover);
  }
`

export const NavLink = props => (
  <StyledLink
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          color: isCurrent ? "seagreen" : "black",
          // background: isCurrent ? "1" : "0.75",
        },
      }
    }}
  />
)
