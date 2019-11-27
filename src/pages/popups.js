import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Slideshow, PageContainer } from "../components/shared";
import {
  PopUp,
  PopUps,
  PopUpHeader,
  PopUpWrapper
} from "../components/popups-page";

function renderPopups(popups) {
  return (
    <>
      {popups &&
        popups.map(eventInfo => (
          <PopUp key={eventInfo.map_url} {...eventInfo} />
        ))}
    </>
  );
}

function PopupsPage() {
  const { popups } = useStaticQuery(graphql`
    query {
      popups: allFile(
        filter: {
          sourceInstanceName: { regex: "/content/" }
          relativeDirectory: { eq: "pop-up-events" }
        }
      ) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                description
                title
                day
                date
                address
                time
                map_url
                position
              }
            }
          }
        }
      }
    }
  `);

  const events = popups.edges
    .map(popup => popup.node.childMarkdownRemark.frontmatter)
    .sort((a, b) => a.position - b.position);

  return (
    <>
      <Slideshow />
      <PageContainer>
        <PopUpWrapper>
          <PopUpHeader />
          <PopUps>{renderPopups(events)}</PopUps>
        </PopUpWrapper>
      </PageContainer>
    </>
  );
}

export default PopupsPage;
