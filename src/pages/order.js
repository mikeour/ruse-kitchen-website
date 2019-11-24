import React from "react";

import { PageContainer } from "../components/shared";
import { OrderForm } from "../components/order-page";

function OrderPage() {
  return (
    <PageContainer noSlideshow>
      <OrderForm />
    </PageContainer>
  );
}

export default OrderPage;
