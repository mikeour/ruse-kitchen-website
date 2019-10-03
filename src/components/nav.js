import React from "react"
import NavLink from "./navLink"
import { css } from "@emotion/core"

const Nav = () => {
  return (
    <nav
      css={css`
        width: calc(100% - 16rem);
        margin: 0 8rem;
        padding: 0.5rem 6%;
        display: flex;
        justify-content: flex-end;
      `}
    >
      <NavLink to="/">Home</NavLink>

      <NavLink to="/menu">Menu</NavLink>

      <NavLink to="/where">Where We Are</NavLink>

      <NavLink to="/contact">Contact</NavLink>
    </nav>
  )
}

export default Nav
