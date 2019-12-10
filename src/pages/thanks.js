import React from "react";
import styled from "@emotion/styled";
import { mq, flexMixin } from "@styles";

import { ButtonLink, PageContainer } from "@components/shared";

const ThanksPage = () => {
  return (
    <PageContainer noSlideshow>
      <ThanksWrapper>
        <p>
          Thanks for reaching out to us here at Ruse! We'll get back to you as
          soon as we can!
        </p>
        <ButtonLink to="/">Home</ButtonLink>
      </ThanksWrapper>
    </PageContainer>
  );
};

export default ThanksPage;

// Styles

const ThanksWrapper = styled.div`
  ${flexMixin}
  padding: 10%;

  p {
    padding: 1rem 0;
  }
`;
