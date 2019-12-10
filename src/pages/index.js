import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";

import { Slideshow } from "@components/shared";
import { Banner } from "@components/home-page";

const IndexWrapper = styled.div`
  position: relative;
`;

function IndexPage() {
  const { imageOne, imageTwo } = useStaticQuery(graphql`
    query {
      imageOne: file(relativePath: { eq: "slides/chili-1.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1450, maxHeight: 700, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      imageTwo: file(relativePath: { eq: "slides/burrito-2.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1800, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <IndexWrapper>
      <Slideshow slides={[imageOne, imageTwo]} />

      <Banner />
    </IndexWrapper>
  );
}

export default IndexPage;
