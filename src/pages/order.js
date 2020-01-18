import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { PageContainer } from "@components/shared";
import {
  OrderForm,
  OrderInfo,
  OrderWrapper,
  OrderHeader,
  OrderFooter
} from "@components/order-page";

function OrderPage() {
  const { imageOne, imageTwo, items } = useStaticQuery(graphql`
    query {
      imageOne: file(relativePath: { eq: "slides/steak-pesto.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 350, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      imageTwo: file(relativePath: { eq: "slides/burrito.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 350, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      items: allFile(
        filter: {
          sourceInstanceName: { regex: "/content/" }
          relativeDirectory: { eq: "order-items" }
        }
      ) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                position
                description
                title
                serves
                price
              }
            }
          }
        }
      }
    }
  `);

  const orderItems = items.edges
    .map(item => item.node.childMarkdownRemark.frontmatter)
    .sort((a, b) => a.position - b.position);

  return (
    <PageContainer noSlideshow>
      <OrderHeader image={imageOne} image2={imageTwo} />
      <OrderWrapper>
        <OrderInfo options={orderItems} />
        <OrderForm options={orderItems} />
      </OrderWrapper>
      {/* <OrderFooter /> */}
    </PageContainer>
  );
}

export default OrderPage;
