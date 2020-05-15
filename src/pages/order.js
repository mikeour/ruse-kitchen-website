import React, { useEffect } from "react";
import { Redirect } from "gatsby";

const OrderPage = () => {
  useEffect(() => {
    window.location.replace("https://order-ruse.myshopify.com");
  }, []);

  return null;
};

export default OrderPage;
