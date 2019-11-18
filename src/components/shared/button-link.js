import { Link } from "gatsby"
import styled from "@emotion/styled"

const ButtonLink = styled(Link)`
  padding: 0.5rem 2rem;
  border: 2px solid var(--button-local);
  border-radius: 5px;
  color: white;
  background: var(--button-local);
  box-shadow: 10px 10px 20px -17px rgba(0, 0, 0, 0.7);
  transition: all 200ms ease-in-out;
  font-weight: bold;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  text-decoration: none;
  opacity: 1;
  /* background: white; */

  :hover {
    color: white;
    background: #1a9478;
    cursor: pointer;
  }
`

export default ButtonLink
