import React from "react";
import styled from "@emotion/styled";
import { mq } from "../../styles";

function OrderHeader() {
  return (
    <Wrapper>
      <Text>
        Order our meal kits and other delicious items delivered straight to your
        door. Choose any of the items below, include your address, delivery date
        and preferred delivery time and we will have your delivery out to you!
      </Text>
      <Text>
        All orders must be placed at least <em>three days</em> in advance of
        your desired delivery date.
      </Text>
      <Text>Pay upon delivery with cash or card.</Text>
    </Wrapper>
  );
}

export default OrderHeader;

// Styles

const Wrapper = styled.div`
  padding: 5% 15% 2.5% 15%;

  ${mq("small")} {
    padding: 2.5% 5%;
  }
`;

const Text = styled.p`
  text-align: left;
  font-size: 1.25rem;
  margin: 2.5% 0;
`;
