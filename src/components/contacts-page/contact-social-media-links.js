import React from "react";
import Image from "gatsby-image";
import styled from "@emotion/styled";
import { mq, flexMixin } from "@styles";

import { useIcons } from "@hooks";

function ContactSocialMediaLinks() {
  const { instagram, facebook } = useIcons();

  return (
    <Wrapper>
      <Text>You can follow us on social media at these links:</Text>
      <LinksWrapper>
        <ButtonLink
          href="https://www.instagram.com/rusevegankitchen/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Logo fixed={instagram.sharp.fixed} />
          Instagram
        </ButtonLink>
        <ButtonLink
          href="https://www.facebook.com/rusevegankitchen/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Logo fixed={facebook.sharp.fixed} />
          Facebook
        </ButtonLink>
      </LinksWrapper>
    </Wrapper>
  );
}

export default ContactSocialMediaLinks;

// Styles

const Wrapper = styled.div`
  ${flexMixin}
  width: 100%;
  padding: 0 0 2.5% 0;
`;

const Text = styled.p`
  width: 100%;
  font-size: 1.25rem;
  padding: 2.5% 10%;
`;

const LinksWrapper = styled.div`
  width: 100%;
  padding: 0 25%;
  display: flex;
  justify-content: space-around;

  ${mq("small")} {
    padding: 0 5%;
  }
`;

const ButtonLink = styled.a`
  padding: 0.5rem 2rem;
  border-radius: 5px;
  color: white;
  background: var(--button-outside);
  box-shadow: 10px 10px 20px -17px rgba(0, 0, 0, 0.7);
  transition: all 200ms ease-in-out;
  font-weight: bold;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  text-decoration: none;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  opacity: 1;

  :hover {
    color: white;
    background: var(--button-outside-hover);
    cursor: pointer;
  }
`;

const Logo = styled(Image)`
  margin: 0 10px 0 0;
  width: 20px;
  height: 20px;
  filter: invert(91%) sepia(94%) saturate(34%) hue-rotate(250deg)
    brightness(106%) contrast(100%);
`;
