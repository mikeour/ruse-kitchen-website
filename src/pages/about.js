import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import SectionContainer from "@components/unused/sectionContainer";
import FullSection from "@components/unused/fullSection";
import Button from "@components/unused/button";
import { css } from "@emotion/core";
import { mq } from "@styles";

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { sourceInstanceName: { eq: "content" }, name: { eq: "about" } }
      ) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                text
                title
              }
            }
          }
        }
      }
    }
  `);

  const {
    title,
    text
  } = data.allFile.edges[0].node.childMarkdownRemark.frontmatter;

  return (
    <>
      <div
        css={css`
          height: 5rem;
        `}
      ></div>
      <div
        css={css`
          padding: 6rem;
          height: calc(100vh - 10rem);

          ${mq("medium")} {
            padding: 4rem 2rem;
          }

          ${mq("small")} {
            padding: 1rem 0.5rem;
          }
        `}
      >
        <SectionContainer>
          <FullSection title={title} button="menu">
            {text}
          </FullSection>
        </SectionContainer>
      </div>
    </>
  );
};

export default AboutPage;
