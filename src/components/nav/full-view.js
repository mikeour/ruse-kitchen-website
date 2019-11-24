import React from "react";
import Img from "gatsby-image";
import { motion } from "framer-motion";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { mq } from "../../styles";

import { NavLink, NavLinkLogo, ExpandingNavLinkDesktop } from "../shared";

const links = [
  {
    to: "/menu",
    name: "Menu"
  },
  {
    to: null,
    name: "Find Us",
    additionalLinks: [
      {
        to: "/popups",
        name: "Pop-up Events"
      },
      {
        to: "/partners",
        name: "Partners"
      }
    ]
  },
  {
    to: null,
    name: "Contact",
    additionalLinks: [
      {
        to: "/contact",
        name: "General"
      },
      {
        to: "/business",
        name: "Business"
      }
    ]
  },
  {
    to: "/order",
    name: "Order"
  }
];

const FullViewWrapper = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;

  ${mq("small")} {
    display: none;
    visibility: hidden;
  }
`;

export default function FullView({ instagram, facebook, yelp, logo, expand }) {
  return (
    <FullViewWrapper>
      <NavLink to="/">
        <Img fixed={logo.sharp.fixed} />
      </NavLink>

      {links.map((link, i) => {
        if (link.to) {
          return <NavLink to={link.to}>{link.name}</NavLink>;
        } else {
          return (
            <ExpandingNavLinkDesktop
              name={link.name}
              additionalLinks={link.additionalLinks}
            />
          );
        }
      })}

      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 1rem;
          padding: 0 1rem;
        `}
      >
        <NavLinkLogo
          href="https://www.instagram.com/rusevegankitchen/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img fixed={instagram.sharp.fixed} />
        </NavLinkLogo>

        <NavLinkLogo
          href="https://www.facebook.com/rusevegankitchen/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img fixed={facebook.sharp.fixed} />
        </NavLinkLogo>

        <NavLinkLogo
          href="https://www.yelp.com/biz/ruse-vegan-kitchen-las-vegas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img fixed={yelp.sharp.fixed} />
        </NavLinkLogo>
      </div>
    </FullViewWrapper>
  );
}
