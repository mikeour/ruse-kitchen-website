import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { PageContainer } from "@components/shared";
import {
  PartnersWrapper,
  PartnersHeader,
  PartnersContainer,
  Partner
} from "@components/partners-page";

function PartnersPage() {
  const { data } = useStaticQuery(graphql`
    query {
      data: allFile(
        filter: {
          sourceInstanceName: { regex: "/content/" }
          relativeDirectory: { eq: "partners" }
        }
      ) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                name
                address
                phone
                description
                url
              }
            }
          }
        }
      }
    }
  `);

  const partners = data.edges
    .map(item => item.node.childMarkdownRemark.frontmatter)
    .sort();

  return (
    <>
      <PageContainer noSlideshow>
        <PartnersWrapper>
          <PartnersHeader />
          <PartnersContainer>
            {partners.map(partner => (
              <Partner
                name={partner.name}
                address={partner.address}
                phone={partner.phone}
                description={partner.description}
                url={partner.url}
              />
            ))}
          </PartnersContainer>
        </PartnersWrapper>
      </PageContainer>
    </>
  );
}

export default PartnersPage;
