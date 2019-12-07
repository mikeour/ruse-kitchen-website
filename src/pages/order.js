import React from "react";

import { PageContainer } from "../components/shared";
import {
  OrderForm,
  OrderInfo,
  OrderWrapper,
  OrderHeader,
  OrderFooter
} from "../components/order-page";

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
  return (
    <PageContainer noSlideshow>
      <OrderHeader />
      <OrderWrapper>
        <OrderForm options={options} />
        <OrderInfo options={options} />
      </OrderWrapper>
      {/* <OrderFooter /> */}
    </PageContainer>
  );
}

export default OrderPage;
