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
    value: "Lamb Gyro",
    label: "Lamb Gyro",
    description:
      "Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo",
    position: 5
  },

  {
    value: "Falafel Burger",
    label: "Falafel Burger",
    description:
      "Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi",
    position: 4
  },
  {
    value: "Potato Tacos",
    label: "Potato Tacos",
    description:
      "Sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea",
    position: 6
  },
  {
    value: "Tofu Satay Taco",
    label: "Tofu Satay Taco",
    description: "Turnip greens yarrow ricebean rutabaga endive cauliflower",
    position: 1
  },
  {
    value: "Fattoush Salad",
    label: "Fattoush Salad",
    description: "Celery potato scallion desert raisin horseradish",
    position: 3
  },
  {
    value: "Thai Chili",
    label: "Thai Chili",
    description:
      "Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea.",
    position: 2
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
      <OrderFooter />
    </PageContainer>
  );
}

export default OrderPage;
