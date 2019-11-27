import React, { useState } from "react";
import styled from "@emotion/styled";
import useForm from "react-hook-form";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { mq, flexMixin } from "../../styles";

const animatedComponents = makeAnimated();

function OrderForm({ options }) {
  const { register, handleSubmit, setValue, errors } = useForm();

  const [values, setReactSelect] = useState({ selectedOption: [] });

  const handleMultiChange = selectedOption => {
    setValue("items", formatItems(selectedOption));
    setReactSelect({ selectedOption });
  };

  const onSubmit = data => console.log({ data: encode(data) });

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Order Form</Title>
        <InputDiv>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              ref={register}
              placeholder="Name"
            ></input>
          </div>

          <div>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              ref={register}
              placeholder="Delivery Address"
            ></input>
          </div>
        </InputDiv>

        <InputDiv>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              ref={register}
              placeholder="Your Email"
            ></input>
          </div>

          <div>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              name="phone"
              ref={register}
              placeholder="10-Digit Phone Number"
            ></input>
          </div>
        </InputDiv>

        <label htmlFor="items">Items</label>
        <Dropdown
          components={animatedComponents}
          name="items"
          placeholder="Items to purchase"
          value={values.selectedOption}
          options={options}
          onChange={handleMultiChange}
          ref={() =>
            register(
              { name: "items" },
              {
                validate: value => {
                  // need to validate if it is undefined or empty array
                  return Array.isArray(value) ? value.length > 0 : !!value;
                }
              }
            )
          }
          isMulti
        />
        <NoteText>
          NOTE: If you'd like to order more than one of an item, let us know in
          the message! Thanks.
        </NoteText>

        <label htmlFor="message">Message</label>
        <textarea
          type="text"
          name="message"
          ref={register}
          placeholder="(Optional)"
        ></textarea>

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
  padding: 5% 0;
  grid-area: form;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  width: 100%;
  padding: 5% 10%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border-left: 3px solid seagreen;

  ${mq("medium")} {
    border-left: none;
    border-radius: 0;
  }

  label {
    font-size: 1.5rem;
    letter-spacing: 2px;
    width: 100%;

    text-align: left;

    ${mq("medium")} {
    }

    ${mq("small")} {
      text-align: center;
    }
  }

  input,
  textarea {
    margin-bottom: 1rem;
    padding: 1rem;
    font-size: 1rem;
    width: 100%;
    border-radius: 4px;
    border: 1px solid #ccc;
    outline: none;
  }
`;

const Title = styled.h1`
  padding: 0 0 5% 0;
`;

const InputDiv = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    width: 47.5%;
    text-align: left;
  }
`;

const Dropdown = styled(Select)`
  align-self: flex-start;
  margin-bottom: 1rem;
  font-size: 1rem;
  width: 100%;
  outline: none;
`;

const NoteText = styled.p`
  font-style: italic;
  font-size: 0.75rem;
  margin-bottom: 1rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
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

function formatItems(items) {
  let formattedItems = [];
  if (Array.isArray(items) && items.length > 0) {
    formattedItems = [...items].map(option => option.value).join(", ");
  }
  return formattedItems;
}
