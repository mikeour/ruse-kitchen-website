import React, { useState } from "react";
import { navigate } from "gatsby";
import styled from "@emotion/styled";
import useForm from "react-hook-form";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { mq } from "@styles";

const animatedComponents = makeAnimated();

function OrderForm({ options }) {
  const { register, handleSubmit, setValue } = useForm();

  const [values, setReactSelect] = useState({ selectedOption: [] });

  function handleMultiChange(selectedOption) {
    setValue("items", formatItems(selectedOption));
    setReactSelect({ selectedOption });
  }

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

  return (
    <Wrapper>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        name="Order Form"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
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

        <label htmlFor="items">Items</label>
        <Dropdown
          components={animatedComponents}
          name="items"
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
          the Special Instructions! Thanks.
        </NoteText>

        <label htmlFor="special-instructions">Special Instructions</label>
        <textarea
          type="text"
          name="special-instructions"
          ref={register}
        ></textarea>

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
  padding: 5% 10%;
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

const Dropdown = styled(Select)`
  align-self: flex-start;
  margin-bottom: 1rem;
  width: 100%;
  outline: none;

  div {
    font-family: "Montserrat", sans-serif;
    font-size: 0.75rem;
    &:focus {
      outline: none;
      border: none;
    }
  }
`;

const NoteText = styled.p`
  font-style: italic;
  font-size: 0.75rem;
  margin-bottom: 1rem;
  width: 100%;
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

function formatItems(items) {
  let formattedItems = [];
  if (Array.isArray(items) && items.length > 0) {
    formattedItems = [...items].map(option => option.value).join(", ");
  }
  return formattedItems;
}
