import React from "react";
import styled from "@emotion/styled";
import { mq, flexMixin } from "@styles";

const Container = styled.div`
  ${flexMixin};
  padding: 0 5% 5% 5%;
  height: 100%;
  width: 100%;

  ${mq("medium")} {
    padding: 0;
  }

  ${mq("small")} {
    padding: 0;
  }
`;

const SlideshowFiller = styled.div`
  height: var(--nav-height-large);
  width: 100%;

  ${mq("small")} {
    height: var(--nav-height-small);
  }
`;

function PageContainer({ noSlideshow, children }) {
  return (
    <Container>
      {noSlideshow && <SlideshowFiller />}
      {children}
    </Container>
  );
}

export default PageContainer;
