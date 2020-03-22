import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { mq } from "@styles";
import { Add } from "@styled-icons/remix-fill/Add";
import { Subtract } from "@styled-icons/remix-fill/Subtract";

function OrderInfo({ options, cart, setCart }) {
  return (
    <Wrapper>
      <Text>
        {options.map(option => (
          <ItemContainer>
            <ItemWrapper key={option.title}>
              <ItemName>{option.title}</ItemName>
              <ItemDescription>{option.description}</ItemDescription>
              <ItemPrice>${option.price}</ItemPrice>
              {option.serves && <ItemServes>Serves {option.serves}</ItemServes>}
            </ItemWrapper>
            <CartOptionsContainer>
              <CartOptions>
                <IconContainer>
                  <AddIcon
                    onClick={() => {
                      const itemName = option.title
                        .replace(/\s+/g, "-")
                        .toLowerCase();
                      setCart(prevCart => ({
                        ...prevCart,
                        [itemName]: {
                          ...prevCart[itemName],
                          count: prevCart[itemName].count + 1
                        }
                      }));
                    }}
                  />
                </IconContainer>
                <CartItemTotal>
                  {cart &&
                    cart[option.title.replace(/\s+/g, "-").toLowerCase()].count}
                </CartItemTotal>
                <IconContainer>
                  <SubtractIcon
                    onClick={() => {
                      const itemName = option.title
                        .replace(/\s+/g, "-")
                        .toLowerCase();
                      setCart(prevCart => ({
                        ...prevCart,
                        [itemName]: {
                          ...prevCart[itemName],
                          count:
                            prevCart[itemName].count - 1 >= 0
                              ? prevCart[itemName].count - 1
                              : 0
                        }
                      }));
                    }}
                  />
                </IconContainer>
              </CartOptions>
            </CartOptionsContainer>
          </ItemContainer>
        ))}
      </Text>
    </Wrapper>
  );
}

export default OrderInfo;

// Styles

const Wrapper = styled.div`
  grid-area: info;
  max-width: 550px;
  width: 100%;
  padding: 2.5rem 2rem;

  ${mq("medium")} {
    padding: 2.5%;
  }

  ${mq("small")} {
    padding: 4% 6%;
    position: static;
    top: 0;
  }
`;

const Text = styled.h1`
  max-width: 500px;

  ${mq("medium")} {
    max-width: 100%;
  }
`;

const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: 4fr 0.5fr;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* border: 1px solid red; */
  margin: 1rem 0;
`;

const ItemWrapper = styled.div`
  padding: 1% 5%;
  width: 100%;
  /* margin-bottom: 1.5rem; */
  /* border: 1px solid green; */

  * {
    margin: 1% 0;
  }
`;

const ItemName = styled.h3`
  width: 100%;
  font-size: 1rem;
  font-family: "Montserrat", serif;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: left;
`;

const ItemDescription = styled.p`
  font-size: 1rem;
  text-align: left;
`;

const ItemPrice = styled.p`
  font-size: 1rem;
  text-align: left;
  font-style: italic;
`;

const ItemServes = styled.p`
  font-size: 1rem;
  text-align: left;
  font-style: italic;
`;

const CartOptionsContainer = styled.div`
  /* border: 1px solid blue; */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const CartOptions = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const CartItemTotal = styled.div`
  color: seagreen;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  margin: 0.25rem 0;
`;

const IconContainer = styled(motion.div).attrs({
  whileHover: { scale: 1.05 },
  whiileTap: { y: -2 }
})`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background: seagreen;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  user-select: none;
`;

const AddIcon = styled(Add)`
  color: white;
  width: 100%;
  height: 100%;
  display: block;
`;

const SubtractIcon = styled(Subtract)`
  color: white;
  width: 100%;
  height: 100%;
  display: block;
`;
