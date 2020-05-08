import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

import { NavLink, ExpandingNavLinkMobile } from "../shared";
import { useLockBodyScroll } from "../../hooks";
import { mq } from "../../styles";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.25,
      when: "beforeChildren",
      staggerChildren: 0.05,
      duration: 0.5,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

function Sidebar({ setShowSidebar }) {
  const handleClick = () => setShowSidebar((prevState) => !prevState);

  useLockBodyScroll();

  return (
    <SidebarWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1], x: ["-150%", "0%"] }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      exit={{ opacity: 0, x: ["0%", "-150%"] }}
    >
      <LinksWrapper variants={variants} initial="hidden" animate="show">
        {links.map(({ to, name, additionalLinks }, i) => {
          if (!additionalLinks) {
            return (
              <NavLinkWrapper variants={item} key={i}>
                <NavLink to={to} onClick={handleClick}>
                  {name}
                </NavLink>
              </NavLinkWrapper>
            );
          } else {
            return (
              <NavLinkWrapper variants={item} key={i}>
                <ExpandingNavLinkMobile
                  name={name}
                  additionalLinks={additionalLinks}
                  handleClick={handleClick}
                />
              </NavLinkWrapper>
            );
          }
        })}
        <NavLinkWrapper>
          <motion.a
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
          </motion.a>
        </NavLinkWrapper>
      </LinksWrapper>
    </SidebarWrapper>
  );
}

export default Sidebar;

// Styles

const SidebarWrapper = styled(motion.div)`
  display: none;

  ${mq("small")} {
    padding: 5rem 1rem;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    width: 80vw;
    z-index: 23445;
    background: var(--nav);
    display: block;
  }
`;
const LinksWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  text-align: left;

  > div {
    margin: 1.5rem 0;
  }
`;

const NavLinkWrapper = styled(motion.div)``;

const links = [
  {
    to: "/",
    name: "Home",
  },
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
