import React from "react";
import styled from "@emotion/styled";

function OrderFooter() {
  return (
    <Wrapper>
      <Text>
        Winter purslane fennel azuki bean earthnut pea sierra leone bologi leek
        soko chicory celtuce parsley jícama salsify.
        <br></br>
        <br></br>
        <span>
          Beet broccoli kombu beet greens fava bean potato quandong celery.
          Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens
          parsnip.
        </span>
      </Text>
    </Wrapper>
  );
}

export default OrderFooter;

const Wrapper = styled.div`
  padding: 5% 15% 2.5% 15%;
  width: 100%;
`;

const Text = styled.p`
  font-size: 1.25rem;

  span {
    font-size: 1rem;
    display: block;
  }
`;
