import React from "react";
import styled from "@emotion/styled";
import { mq } from "../../styles";

function OrderInfo({ options }) {
  return (
    <Wrapper>
      <Text>
        <ul>
          {options.map(option => (
            <ItemWrapper>
              <ItemName>{option.value}</ItemName>
              <ItemDescription>{option.description}</ItemDescription>
              <ItemPrice>${option.price}</ItemPrice>
              {option.serves && <ItemServes>Serves {option.serves}</ItemServes>}
            </ItemWrapper>
          ))}
        </ul>
      </Text>
    </Wrapper>
  );
}

export default OrderInfo;

// Styles

const Wrapper = styled.div`
  grid-area: info;
  max-width: 500px;
  width: 100%;
  padding: 2.5rem 2.5rem 2.5rem 1rem;
  position: sticky;
  top: 15%;

  ${mq("small")} {
    padding: 2.5%;
  }
`;

const Text = styled.h1`
  width: 500px;
`;

const ItemWrapper = styled.div`
  padding: 1% 10%;
  width: 100%;
  margin-bottom: 1.5rem;
  * {
    margin: 1% 0;
  }
`;

const ItemName = styled.h3`
  width: 100%;
  font-size: 1rem;
  font-family: "Montserrat", serif;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: left;
`;

const ItemDescription = styled.p`
  font-size: 1rem;
  text-align: left;
`;

const ItemPrice = styled.p`
  font-size: 1rem;
  text-align: left;
  font-style: italic;
`;

const ItemServes = styled.p`
  font-size: 1rem;
  text-align: left;
  font-style: italic;
`;
