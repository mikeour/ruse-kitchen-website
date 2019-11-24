import React, { useState } from "react";
import Image from "gatsby-image";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";

import { ButtonLinkRedirect } from "../shared";
import { mq, flexMixin } from "../../styles";
import { useIcons } from "../../hooks";

function Popup({ description, title, day, date, address, time, map_url }) {
  const [extended, setExtended] = useState(false);
  const toggleExtended = () => setExtended(prevState => !prevState);

  const { collapse, expand } = useIcons();

  return (
    <>
      <Header
        animate={{
          backgroundColor: extended ? "seagreen" : "white",
          color: extended ? "white" : "black"
        }}
        onClick={toggleExtended}
      >
        <EventDayAndDate>
          <motion.span>{day}</motion.span>
          <motion.span>{date}</motion.span>
        </EventDayAndDate>

        <EventTitle>{title}</EventTitle>

        <EventMoreOrLess>
          <MoreOrLessIcon
            extended={extended}
            fixed={extended ? collapse.sharp.fixed : expand.sharp.fixed}
          />
          <MoreOrLessText>{extended ? "Less" : "More"}</MoreOrLessText>
        </EventMoreOrLess>
      </Header>
      <AnimatePresence>
        {extended && (
          <motion.section
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <AdditionalInfoWrapper
              variants={{
                collapsed: { y: -75 },
                open: { y: 0 }
              }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                css={css`
                  grid-area: address;
                `}
              >
                Address:{" "}
                <motion.span
                  css={css`
                    font-size: 1.25rem;
                  `}
                >
                  {address}
                </motion.span>
              </motion.div>
              <motion.div
                css={css`
                  grid-area: time;
                `}
              >
                From:{" "}
                <motion.span
                  css={css`
                    font-size: 1.25rem;
                  `}
                >
                  {time}
                </motion.span>
              </motion.div>
              <motion.div
                css={css`
                  grid-area: desc;
                `}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.25 }}
                  exit={{ opacity: 0 }}
                  css={css`
                    font-size: 1.25rem;
                  `}
                >
                  {description}
                </motion.span>
              </motion.div>
              <motion.div
                css={css`
                  grid-area: link;
                `}
              >
                <ButtonLinkRedirect
                  href={map_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Maps
                </ButtonLinkRedirect>
              </motion.div>
            </AdditionalInfoWrapper>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}

export default Popup;

// Styles

const Header = styled(motion.header)`
  padding: 1rem 10%;
  z-index: 9;
  display: grid;
  align-items: center;
  grid-template-areas: "date place info";
  grid-template-columns: 1fr 1.5fr auto;
  grid-gap: 1rem;
  border-radius: 4px;
  width: 100%;
  cursor: pointer;

  :hover {
    background: seagreen;
    color: white;
  }

  ${mq("small")} {
    padding: 1rem 5%;
    grid-template-columns: 1fr 2fr auto;
  }
`;

const EventDayAndDate = styled(motion.div)`
  font-size: 1.25rem;
  display: flex;
  grid-area: date;
  white-space: nowrap;
  text-align: right;
  align-items: right;
  align-content: right;
  align-self: right;
  justify-content: right;
  justify-items: right;
  justify-self: right;

  span {
    margin: 0 1%;
  }

  ${mq("small")} {
    font-size: 1.25rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    span {
      display: block;
      width: 100%;
    }
  }
`;

const EventTitle = styled(motion.span)`
  font-size: 1.5rem;
  padding: 0 1rem;
  grid-area: place;
  justify-content: center;
  text-align: center;
  align-items: center;

  ${mq("small")} {
    padding: 0;
    font-size: 1.25rem;
    align-items: center;
    text-align: center;
  }
`;

const EventMoreOrLess = styled(motion.div)`
  grid-area: info;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;

  ${mq("small")} {
    justify-content: center;
    text-align: center;
    align-items: center;
  }
`;

const MoreOrLessIcon = styled(Image)`
  filter: ${props =>
    props.extended
      ? "invert(91%) sepia(94%) saturate(34%) hue-rotate(250deg) brightness(106%) contrast(100%)"
      : "none"};
`;

const MoreOrLessText = styled(motion.span)`
  letter-spacing: 2px;
  font-size: 1.1rem;
  padding: 0 1rem;
  text-transform: uppercase;

  ${mq("small")} {
    display: none;
  }
`;

const AdditionalInfoWrapper = styled(motion.div)`
  padding: 2rem 4rem;
  background: white;
  border-radius: 4px;
  margin: 1rem;
  display: grid;
  grid-template-areas:
    "desc address"
    "desc time"
    "desc link";
  grid-template-columns: 1.5fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 2rem;
  justify-content: center;
  text-align: center;
  align-items: center;
  transform-origin: top center;

  ${mq("small")} {
    padding: 1rem 5%;
    grid-template-areas:
      "address"
      "time"
      "desc"
      "link";
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;
