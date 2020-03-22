import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Slideshow, PageContainer } from "@components/shared";
import { PopUps, PopUpHeader, PopUpWrapper } from "@components/popups-page";

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
              }
            }
          }
        }
      }
    }
  `);

  const events = popups.edges
    .map(popup => popup.node.childMarkdownRemark.frontmatter)
    .sort((a, b) => (a.title < b.title ? -1 : 1));

  return (
    <>
      <Slideshow />
      <PageContainer>
        <PopUpWrapper>
          <PopUpHeader />
          <PopUps events={events} />
        </PopUpWrapper>
      </PageContainer>
    </>
  );
}

export default PopupsPage;
