import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  position: relative;
  padding: 0.25rem;
  font-size: 1.2rem;
  background-image: none;
  text-shadow: none;

  :visited {
    color: black;
  }

  :before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: black;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }

  :hover:before {
    visibility: visible;
    transform: scaleX(1);
  }

  :hover {
    color: black;
  }
`

const NavLink = props => (
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

export default NavLink
