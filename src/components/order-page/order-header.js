import React from "react";
import styled from "@emotion/styled";

function OrderHeader() {
  return (
    <Wrapper>
      <Text>
        Nori grape silver beet broccoli kombu beet greens fava bean potato
        quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil
        turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant
        winter purslane fennel azuki bean earthnut pea sierra leone bologi leek
        soko chicory celtuce parsley jícama salsify.
      </Text>
    </Wrapper>
  );
}

export default OrderHeader;

// Styles

const Wrapper = styled.div`
  padding: 5% 15% 2.5% 15%;
`;

const Text = styled.p`
  font-size: 1.25rem;
`;
