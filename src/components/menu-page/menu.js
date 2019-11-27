import React from "react";
import { Link } from "gatsby";
import Image from "gatsby-image";
import styled from "@emotion/styled";
import { mq } from "../../styles";

import MenuItem from "./menu-item";

function Menu({ menuItems, branch }) {
  return (
    <Wrapper>
      <WrapperTwo>
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
      </WrapperTwo>
    </Wrapper>
  );
}

export default Menu;

// Styles

const Wrapper = styled.div`
  grid-area: menu;
  padding: 5% 0;
  width: 100%;
`;

const WrapperTwo = styled.div`
  width: 100%;
  background: white;
  /* border-left: 3px solid seagreen; */
  border-radius: 10px;

  ${mq("medium")} {
    padding: 4rem 2rem;
    margin: 0;
  }

  ${mq("small")} {
    padding: 1rem 0.5rem;
    margin: 0;
  }
`;

const StyledLink = styled(Link)`
  color: black;
  padding: 0.5rem 0;

  :visited {
    color: black;
  }
`;

const ReversedBranch = styled(Image)`
  transform: scaleX(-1);
`;

const MenuTextHeader = styled.p`
  font-size: 1rem;
  font-style: italic;
  padding-bottom: 2rem;
`;

const AllergyWarning = styled.p`
  font-size: 1rem;
  font-style: italic;
`;
