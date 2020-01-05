import React from "react";
import styled from "@emotion/styled";
import { mq } from "@styles";

function PartnersContainer({ children }) {
  return (
    <PartnersContainer1>
      <PartnersContainer2>{children}</PartnersContainer2>
    </PartnersContainer1>
  );
}

export default PartnersContainer;

const PartnersContainer1 = styled.div`
  width: 100%;
  height: 100%;
  padding: 5% 0;
  grid-area: items;
`;

const PartnersContainer2 = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border-right: 3px solid seagreen;

  ${mq("medium")} {
    border-right: none;
    border-radius: 0;
  }
`;
