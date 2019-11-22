import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import styled from "@emotion/styled"
import { mq } from "../../styles"

import MenuItem from "./menu-item"

function Menu({ menuItems, branch }) {
  return (
    <Wrapper>
      <ReversedBranch fixed={branch.sharp.fixed} />
      <MenuTextHeader>Made in house and meticulously spiced</MenuTextHeader>

      {menuItems &&
        menuItems.map(item => (
          <MenuItem key={item.title} name={item.title}>
            {item.description}
          </MenuItem>
        ))}

      <AllergyWarning>
        For allergy information, click{" "}
        <StyledLink to="/allergy">here.</StyledLink>
      </AllergyWarning>
      <Image fixed={branch.sharp.fixed} />
    </Wrapper>
  )
}

export default Menu

// Styles

const Wrapper = styled.div`
  border-radius: 5px;
  width: 100%;
  background: white;
  padding: 4rem 0;

  ${mq("medium")} {
    padding: 4rem 2rem;
    margin: 0;
  }

  ${mq("small")} {
    padding: 1rem 0.5rem;
    margin: 0;
  }
`

const StyledLink = styled(Link)`
  color: black;
  padding: 0.5rem 0;

  :visited {
    color: black;
  }
`

const ReversedBranch = styled(Image)`
  transform: scaleX(-1);
`

const MenuTextHeader = styled.p`
  font-size: 1rem;
  font-style: italic;
`

const AllergyWarning = styled.p`
  font-size: 1rem;
  font-style: italic;
`
