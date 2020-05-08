import React from "react";
import Img from "gatsby-image";
import { motion } from "framer-motion";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { mq } from "@styles";

import {
  NavLink,
  NavLinkLogo,
  ExpandingNavLinkDesktop,
} from "@components/shared";

const links = [
  {
    to: null,
    name: "Find Us",
    additionalLinks: [
      {
        to: "/popups",
        name: "Pop-up Events",
      },
      {
        to: "/partners",
        name: "Partners",
      },
    ],
  },
  {
    to: null,
    name: "Contact",
    additionalLinks: [
      {
        to: "/contact",
        name: "General",
      },
      {
        to: "/business",
        name: "Business",
      },
    ],
  },
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
          return (
            <NavLink key={i} to={link.to}>
              {link.name}
            </NavLink>
          );
        } else {
          return (
            <ExpandingNavLinkDesktop
              key={i}
              name={link.name}
              additionalLinks={link.additionalLinks}
            />
          );
        }
      })}

      <a
        href="https://order-ruse.myshopify.com/"
        target="_blank"
        rel="noopener noreferrer"
        css={css`
          text-decoration: none;
          color: var(--navlink);
          position: relative;
          padding: 0.25rem 0.5rem;
          font-size: 1.5rem;
          background-image: none;
          text-shadow: none;
          text-transform: uppercase;
          font-weight: bold;
          letter-spacing: 2px;

          ${mq("small")} {
            margin: 1rem 0;
          }

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
        `}
      >
        Order
      </a>

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
