import React from "react";
import Image from "gatsby-image";
import styled from "@emotion/styled";

import { mq } from "@styles";
import { ButtonLink } from "@components/shared";
import { useIcons } from "@hooks";

function ContactHeader() {
  const { business } = useIcons();

  return (
    <Wrapper>
      <Text>Would you like to stock Ruse in your store?</Text>
      <p>Use this form instead.</p>
      <StyledButtonLink to="/business">
        <Icon fixed={business.sharp.fixed} /> Business
      </StyledButtonLink>
    </Wrapper>
  );
}

export default ContactHeader;

// Styles

const Wrapper = styled.div`
  grid-area: info;
  max-width: 300px;
  width: 100%;
  padding: 2.5rem 2.5rem 2.5rem 1rem;
  position: sticky;
  top: 25%;
  background: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    padding: 0 0 1rem 0;
  }

  p {
    padding: 1rem 0;
  }

  ${mq("medium")} {
    position: relative;
    top: 0;
    max-width: 100%;
  }
`;

const Text = styled.h1`
  font-size: 1.5rem;
  letter-spacing: 1.5px;
  align-items: center;
  vertical-align: middle;
  display: inline-block;
`;

const StyledButtonLink = styled(ButtonLink)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`;

const Icon = styled(Image)`
  margin: 0 10px 0 0;
  width: 20px;
  height: 20px;
  filter: invert(91%) sepia(94%) saturate(34%) hue-rotate(250deg)
    brightness(106%) contrast(100%);
`;
