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

const data = [
  {
    value: "Gyro Kit",
    label: "Gyro Kit",
    description:
      "Plant based gyro with harissa, tzatiziki, marinated cucumbers, tomatoes and onions all on a folded pita",
    price: 25,
    serves: 3,
    position: 1
  },

  {
    value: "Steak Pesto Ciabatta Kit",
    label: "Steak Pesto Ciabatta Kit",
    description:
      "Charbroiled plant-based steak with sautéed peppers and onions and house made pesto with ciabatta rolls.",
    price: 25,
    serves: 3,
    position: 2
  },
  {
    value: "Spicy Italian Sausage",
    label: "Spicy Italian Sausage",
    description:
      "Plant-based sausage with hot and sweet peppers with a garlic mustard and served on a hoagie roll.",
    price: 18,
    position: 3
  }
];

const options = data.sort((a, b) => a.position - b.position);

function OrderPage() {
  const { imageOne, imageTwo } = useStaticQuery(graphql`
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
    }
  `);

  return (
    <PageContainer noSlideshow>
      <OrderHeader image={imageOne} image2={imageTwo} />
      <OrderWrapper>
        <OrderInfo options={options} />
        <OrderForm options={options} />
      </OrderWrapper>
      {/* <OrderFooter /> */}
    </PageContainer>
  );
}

export default OrderPage;
