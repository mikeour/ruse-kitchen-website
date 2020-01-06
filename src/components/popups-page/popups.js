import React from "react";
import styled from "@emotion/styled";
import { mq } from "@styles";
import PopUp from "./popup";

import { ButtonLink } from "@components/shared";

function renderPopUps(popups) {
  return popups.map(popup => <PopUp {...popup} />);
}

function PopUps({ events }) {
  const arePopups = events.length > 0;

  return (
    <Wrapper>
      <Content>
        {!arePopups ? (
          renderPopUps(events)
        ) : (
          <Empty>
            <Text>No pop-ups currently scheduled. Stay tuned for updates!</Text>

            <ButtonLink to="/">Home</ButtonLink>
          </Empty>
        )}
      </Content>
    </Wrapper>
  );
}

export default PopUps;

// Styles

const Wrapper = styled.div`
  padding: 5% 0;
  grid-area: form;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;

  ${mq("medium")} {
    padding: 0;
  }
`;

const Content = styled.div`
  border-left: 4px solid seagreen;
  border-radius: 10px;
  padding: 5%;
  width: 100%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${mq("medium")} {
    border: none;
    border-radius: 0;
    padding: 2.5%;
  }
`;

const Empty = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Text = styled.h1`
  font-size: 1.5rem;
  letter-spacing: 1.5px;
  align-items: center;
  vertical-align: middle;
  display: inline-block;
  margin: 5% 0;
`;
