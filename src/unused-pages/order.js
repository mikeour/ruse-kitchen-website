import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { PageContainer } from "@components/shared";
import {
  OrderForm,
  OrderInfo,
  OrderWrapper,
  OrderHeader
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
    .sort((a, b) => (a.title < b.title ? -1 : 1));

  function buildCart(items) {
    return items.reduce((acc, cur, index) => {
      const itemNameFormatted = cur.title.replace(/\s+/g, "-").toLowerCase();
      acc[itemNameFormatted] = {
        id: index + 1,
        count: 0,
        price: Number(cur.price)
      };
      return acc;
    }, {});
  }

  const initialCart = buildCart(orderItems);

  const [cart, setCart] = useState(initialCart);

  return (
    <PageContainer noSlideshow>
      <OrderHeader image={imageOne} image2={imageTwo} />
      <OrderWrapper>
        <OrderInfo options={orderItems} cart={cart} setCart={setCart} />
        <OrderForm cart={cart} />
      </OrderWrapper>
    </PageContainer>
  );
}

export default OrderPage;
