import React from "react";
import styled from "@emotion/styled";
import useForm from "react-hook-form";
import { mq, flexMixin } from "../../styles";

const food = [
  { value: "Lamb Gyro", name: "Lamb Gyro" },
  { value: "Falafel Burger", name: "Falafel Burger" },
  { value: "Potato Tacos", name: "Potato Tacos" }
];

function OrderForm() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          ref={register}
          placeholder="Your Name"
        ></input>

        <label htmlFor="items">Items</label>
        <select name="items" ref={register}>
          {food.map(item => (
            <option value={item.value}>{item.name}</option>
          ))}
        </select>

        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          ref={register}
          placeholder="Your Email"
        ></input>

        <ButtonWrapper>
          <SubmitButton type="submit">Submit</SubmitButton>
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
}

export default OrderForm;

// Styles

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  padding: 5% 0;
  width: 60%;
  ${flexMixin}

  ${mq("small")} {
    width: 100%;
  }

  label {
    font-size: 1.5rem;
    letter-spacing: 2px;
    width: 100%;
    padding: 0 5rem 0.5rem 5rem;
    text-align: left;

    ${mq("medium")} {
      padding: 0 5.5rem;
    }

    ${mq("small")} {
      text-align: center;
      padding: 0 4.5rem;
    }
  }

  input {
    margin-bottom: 1rem;
    padding: 1rem;
    font-size: 1rem;
    width: 85%;
    border-radius: 4px;
    border: 1px solid #ccc;
    outline: none;
  }

  select {
    align-self: flex-start;
    padding: 1rem;
    margin-left: 9%;
    margin-bottom: 1rem;
    font-size: 1rem;
    width: 25%;
    border-radius: 4px;
    border: 1px solid #ccc;
    outline: none;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1rem;
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
