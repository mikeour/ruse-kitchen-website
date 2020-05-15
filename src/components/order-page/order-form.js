import React, { useEffect } from "react";
import { navigate } from "gatsby";
import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";
import useForm from "react-hook-form";
import { mq } from "@styles";

function OrderForm({ cart }) {
  const { register, handleSubmit, setValue } = useForm();

  const cartSubtotal = Object.values(cart).reduce((acc, curr) => {
    if (curr.count > 0) acc += curr.count * curr.price;
    return acc;
  }, 0);

  function onSubmit(values) {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "Order Form",
        ...values
      })
    })
      .then(() => navigate("/thanks"))
      .catch(error => alert(error));
  }

  useEffect(() => {
    const items = formatCart(cart);

    setValue("items", items);
    setValue("subtotal", `${cartSubtotal} dollars`);
  }, [cart.length]);

  return (
    <Wrapper>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        name="Order Form"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <CartContainer>
          <CartHeader>
            Your Cart
            <span>
              (
              {Object.values(cart)
                .map(item => item.count)
                .reduce((a, c) => a + c, 0)}{" "}
              items)
            </span>
          </CartHeader>

          {cart &&
            Object.entries(cart).map(
              ([itemName, { id, count, price }], index) => {
                return (
                  <AnimatePresence key={id}>
                    {count > 0 && (
                      <ItemListingContainer
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        positionTransition
                      >
                        <ItemListingName>
                          {itemName.replace(/-/g, " ")}
                        </ItemListingName>
                        <AnimatePresence exitBeforeEnter>
                          <ItemListingCount
                            key={count}
                            initial={{ opacity: 0, y: -4 }}
                            animate={{
                              opacity: 1,
                              y: 0
                            }}
                            exit={{ opacity: 0, y: -4 }}
                          >
                            {count} <span>order{count >= 2 ? "s" : ""}</span>
                          </ItemListingCount>
                        </AnimatePresence>
                      </ItemListingContainer>
                    )}
                  </AnimatePresence>
                );
              }
            )}

          {cartSubtotal > 0 && (
            <CartFooter>
              Subtotal:{" "}
              <AnimatePresence exitBeforeEnter>
                <motion.span
                  key={cartSubtotal}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{
                    opacity: 1,
                    y: 0
                  }}
                  exit={{ opacity: 0, y: -4 }}
                >
                  ${cartSubtotal}.00
                </motion.span>
              </AnimatePresence>
            </CartFooter>
          )}
        </CartContainer>

        <InputDiv>
          <input type="hidden" name="form-name" value="Order Form" />

          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" ref={register}></input>
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" ref={register}></input>
          </div>
        </InputDiv>

        <InputDiv>
          <div>
            <label htmlFor="address">Address</label>
            <input type="text" name="address" ref={register}></input>
          </div>

          <div>
            <label htmlFor="phone">Phone Number</label>
            <input type="text" name="phone" ref={register}></input>
          </div>
        </InputDiv>

        <InputDiv>
          <div>
            <label htmlFor="delivery-day">Delivery Day</label>
            <input type="text" name="delivery-day" ref={register}></input>
          </div>

          <div>
            <label htmlFor="delivery-time">Delivery Time</label>
            <input type="text" name="delivery-time" ref={register}></input>
          </div>
        </InputDiv>

        <label htmlFor="special-instructions">Special Instructions</label>
        <textarea
          type="text"
          name="special-instructions"
          ref={register}
          placeholder="Anything else you'd like us to know?"
        ></textarea>

        <input type="hidden" name="items" ref={register} />

        <input type="hidden" name="subtotal" ref={register} />

        <ButtonWrapper>
          <SubmitButton type="submit">Submit Order</SubmitButton>
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
}

export default OrderForm;

// Styles

const Wrapper = styled.div`
  width: 100%;
  padding: 5% 0;
  position: sticky;
  top: 0;
  grid-area: form;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${mq("medium")} {
    padding: 2.5%;
  }

  ${mq("small")} {
    padding: 1%;
  }
`;

const Form = styled.form`
  width: 100%;
  padding: 5% 7.5%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border-left: 3px solid seagreen;

  ${mq("medium")} {
    border-left: none;
    border-radius: 0;
    padding: 4%;
  }

  ${mq("small")} {
    padding: 4% 6%;
  }

  label {
    font-size: 1rem;
    letter-spacing: 1.5px;
    width: 100%;
    font-family: "Montserrat", sans-serif;
    text-transform: uppercase;
    text-align: left;

    ${mq("medium")} {
    }

    ${mq("small")} {
      text-align: left;
    }
  }

  input,
  textarea {
    margin-bottom: 1rem;
    padding: 1rem;
    font-size: 0.75rem;
    width: 100%;
    border-radius: 4px;
    border: 1px solid #ccc;
    outline: none;
    font-family: "Montserrat", sans-serif;
  }
`;

const CartContainer = styled.div`
  width: 100%;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  flex-direction: center;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid seagreen;
  margin-bottom: 1rem;
`;

const CartHeader = styled.p`
  font-size: 1.25rem;
  letter-spacing: 1.5px;
  width: 100%;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  margin: 0 0 1rem 0;

  span {
    padding-left: 0.5rem;
    font-size: 1rem;
  }
`;

const CartFooter = styled.p`
  font-size: 1.25rem;
  letter-spacing: 1.5px;
  width: 100%;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  margin: 1rem 0;

  span {
    padding-left: 0.5rem;
    font-size: 1rem;
  }
`;

const ItemListingContainer = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  margin: 0.5rem 0;
`;

const ItemListingName = styled.div`
  font-size: 1rem;
  letter-spacing: 1px;
  width: 100%;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  text-align: left;
  padding: 0 1rem 0 0;
  margin-left: 0.25rem;
  text-indent: -0.25rem;
`;

const ItemListingCount = styled(motion.div)`
  font-size: 1.75rem;
  font-weight: 800;
  color: seagreen;

  span {
    font-size: 1rem;
    font-weight: 500;
  }
`;

const InputDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1% 0;

  div {
    width: 47.5%;
    text-align: left;
  }

  ${mq("small")} {
    flex-direction: column;

    div {
      width: 100%;
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 2.5%;
`;

const SubmitButton = styled.button`
  padding: 0.5rem 2.3rem;
  border-radius: 5px;
  color: white;
  background: var(--button-outside);
  box-shadow: 10px 10px 20px -17px rgba(0, 0, 0, 0.7);
  transition: all 200ms ease-in-out;
  font-weight: bold;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  text-decoration: none;

  :hover {
    background: var(--button-outside-hover);
    cursor: pointer;
  }
`;

// Utility

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

function formatCart(cartItems) {
  const formattedItems = Object.entries(cartItems)
    .reduce((acc, [itemName, { count }]) => {
      if (count > 0) {
        acc += `${itemName.replace(/-/g, " ")}, `.repeat(count);
      }
      return acc;
    }, "")
    .trim();

  return formattedItems;
}
