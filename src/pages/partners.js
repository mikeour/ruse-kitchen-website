import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { PageContainer } from "@components/shared";
import {
  PartnersWrapper,
  PartnersHeader,
  PartnersContainer,
  Partner
} from "@components/partners-page";

const data = [
  {
    name: "Pure Health Foods",
    address: "7575 W. Washington #129 Las Vegas, NV 89128",
    phone: "702-366-9297",
    hours: "Monday - Saturday 9:00 am to 7:00 pm Closed Sunday",
    description:
      "Pure Health Foods is a local health food store where you can purchase our pre-packaged meat. Here, we sell our plant-based gyro, spicy Italian sausage and our charbroiled steak to take home!"
  },
  {
    name: "Grouchy John's Coffee Shop",
    address: "8520 S. Maryland Pkwy",
    description:
      "Grouchy John's sells our plant-based steak and pesto wrap! Filled with charbroiled steak, sauteed peppers and onions and a zesty pesto sauce."
  },
  {
    name: "Pure Health Foods",
    address: "7575 W. Washington #129 Las Vegas, NV 89128",
    phone: "702-366-9297",
    hours: "Monday - Saturday 9:00 am to 7:00 pm Closed Sunday",
    description:
      "Pure Health Foods is a local health food store where you can purchase our pre-packaged meat. Here, we sell our plant-based gyro, spicy Italian sausage and our charbroiled steak to take home!"
  },
  {
    name: "Grouchy John's Coffee Shop",
    address: "8520 S. Maryland Pkwy",
    description:
      "Grouchy John's sells our plant-based steak and pesto wrap! Filled with charbroiled steak, sauteed peppers and onions and a zesty pesto sauce."
  }
];

function PartnersPage() {
  // const { data } = useStaticQuery(graphql`
  //   query {
  //     data: allFile(
  //       filter: {
  //         sourceInstanceName: { regex: "/content/" }
  //         relativeDirectory: { eq: "partners" }
  //       }
  //     ) {
  //       edges {
  //         node {
  //           childMarkdownRemark {
  //             frontmatter {
  //               name
  //               address
  //               phone
  //               hours
  //               description
  //               position
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);

  // const partners = data.edges
  //   .map(item => item.node.childMarkdownRemark.frontmatter)
  //   .sort((a, b) => a.position - b.position);

  return (
    <>
      <PageContainer noSlideshow>
        <PartnersWrapper>
          <PartnersHeader />
          <PartnersContainer>
            {data.map(partner => (
              <Partner
                name={partner.name}
                address={partner.address}
                phone={partner.phone}
                hours={partner.hours}
                description={partner.description}
              />
            ))}
          </PartnersContainer>
        </PartnersWrapper>
      </PageContainer>
    </>
  );
}

export default PartnersPage;
