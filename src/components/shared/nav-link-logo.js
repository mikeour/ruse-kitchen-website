import styled from "@emotion/styled"

const NavLinkLogo = styled.a`
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

export default NavLinkLogo
