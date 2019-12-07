import React, { useState } from "react";
import Image from "gatsby-image";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";

import { ButtonLinkRedirect, ButtonLink } from "../shared";
import { mq, flexMixin } from "../../styles";
import { useIcons } from "../../hooks";

function Popup({ description, title, day, date, address, time, map_url }) {
  const [extended, setExtended] = useState(false);
  const toggleExtended = () => setExtended(prevState => !prevState);

  const { collapse, expand, google } = useIcons();

  return (
    <>
      <Header
        animate={{
          backgroundColor: extended ? "seagreen" : "white",
          color: extended ? "white" : "black"
        }}
        onClick={toggleExtended}
        whileHover={{
          backgroundColor: "seagreen",
          color: "white"
        }}
        transition={{ duration: 2 }}
      >
        <EventDayAndDate>
          <motion.div>{day}</motion.div>
          <motion.div>{date}</motion.div>
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
          <AnimatedSection
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
              <AddressGrid>
                Address: <motion.span>{address}</motion.span>
              </AddressGrid>
              <TimeGrid>
                From: <motion.span>{time}</motion.span>
              </TimeGrid>
              <DescriptionGrid>
                <motion.span>{description}</motion.span>
              </DescriptionGrid>
              <LinkGrid>
                <GoogleMapsLink
                  href={map_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GoogleIcon fixed={google.sharp.fixed} /> Google Maps
                </GoogleMapsLink>
              </LinkGrid>
            </AdditionalInfoWrapper>
          </AnimatedSection>
        )}
      </AnimatePresence>
    </>
  );
}

export default Popup;

// Styles

const Header = styled(motion.header)`
  padding: 2.5%;
  position: relative;
  z-index: 9;
  display: grid;
  align-items: center;
  grid-template-areas: "date place info";
  grid-template-columns: 1fr 1.5fr 1fr;
  grid-gap: 1rem;
  border-radius: 4px;
  width: 100%;
  cursor: pointer;
  background: white;

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
  flex-direction: column;
  grid-area: date;
  white-space: nowrap;
  text-align: center;

  div {
    margin: 0 1%;
  }

  ${mq("small")} {
    font-size: 1.25rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
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
`;

const MoreOrLessIcon = styled(Image)`
  filter: ${props =>
    props.extended
      ? "invert(91%) sepia(94%) saturate(34%) hue-rotate(250deg) brightness(106%) contrast(100%)"
      : "none"};
`;

const AnimatedSection = styled(motion.section)``;

const GoogleMapsLink = styled(ButtonLinkRedirect)`
  padding: 1rem;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  white-space: nowrap;
`;

const GoogleIcon = styled(Image)`
  filter: invert(91%) sepia(94%) saturate(34%) hue-rotate(250deg)
    brightness(106%) contrast(100%);
  margin-right: 1rem;
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
  padding: 3%;
  background: white;
  border-radius: 4px;
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-areas:
    "desc address"
    "desc time"
    "desc link";
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr 1fr auto;
  grid-gap: 1rem;
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

const AddressGrid = styled(motion.div)`
  grid-area: address;

  span {
    font-size: 1.25rem;
  }
`;

const TimeGrid = styled(motion.div)`
  grid-area: time;

  span {
    font-size: 1.25rem;
  }
`;

const DescriptionGrid = styled(motion.div)`
  grid-area: desc;
  text-align: left;

  span {
    font-size: 1.25rem;
  }
`;

const LinkGrid = styled(motion.div)`
  grid-area: link;
  margin: 0 auto;
`;
