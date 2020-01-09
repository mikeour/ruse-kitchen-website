import React from "react";
import Image from "gatsby-image";
import styled from "@emotion/styled";
import { mq } from "@styles";

function OrderHeader({ image, image2 }) {
  return (
    <Wrapper>
      <ImageWrapper1>
        <StyledImage fluid={image.sharp.fluid} />
        <span>Steak Pesto</span>
      </ImageWrapper1>
      <TextWrapper>
        <Title>We Deliver!</Title>
        <Text>
          Order our meal kits and other delicious items straight to your door.
          Choose any of the items below, include your address, delivery date and
          preferred delivery time and we will have your delivery out to you!
        </Text>
        <Text>
          &#8226; All orders must be placed at least <em>three days</em> in
          advance of your desired delivery date.
        </Text>
        <Text>&#8226; Pay upon delivery with cash or card.</Text>
      </TextWrapper>
      <ImageWrapper2>
        <StyledImage fluid={image2.sharp.fluid} />
        <span>Breakfast Burrito</span>
      </ImageWrapper2>
    </Wrapper>
  );
}

export default OrderHeader;

// Styles

const Wrapper = styled.div`
  padding: 2.5% 0;
  margin: 2.5% 0;
  display: grid;
  grid-template-areas: "image1 text image2";
  grid-template-columns: minmax(200px, 350px) minmax(450px, 1fr) minmax(
      200px,
      350px
    );
  grid-template-rows: 1fr;

  ${mq("medium")} {
    grid-template-areas:
      "text text"
      "image1 image2";
    grid-template-columns: auto;
    grid-template-rows: auto minmax(200px, 350px);
    grid-gap: 2.5%;
  }

  ${mq("small")} {
    grid-template-areas: "text";
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    padding: 2.5% 0;
  }
`;

const ImageWrapper1 = styled.div`
  grid-area: image1;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  position: relative;

  span {
    position: absolute;
    font-size: 1.25rem;
    font-family: "Montserrat", serif;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    bottom: 5%;
    right: 7.5%;
    color: white;
  }

  ${mq("small")} {
    display: none;
  }
`;

const ImageWrapper2 = styled.div`
  grid-area: image2;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  position: relative;

  span {
    position: absolute;
    font-size: 1.25rem;
    font-family: "Montserrat", serif;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    bottom: 5%;
    right: 7.5%;
    color: white;
  }

  ${mq("small")} {
    display: none;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const TextWrapper = styled.div`
  grid-area: text;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 0 7.5%;

  ${mq("small")} {
    padding: 0 2.5%;
  }
`;

const Title = styled.p`
  text-align: center;
  text-transform: uppercase;
  font-size: 2rem;
  letter-spacing: 2.5px;
  margin: 2.5% 1%;
  font-family: "Montserrat", serif;
`;

const Text = styled.p`
  text-align: left;
  font-size: 1.25rem;
  margin: 1.5% 2%;
  padding: 1.5% 2%;
`;
