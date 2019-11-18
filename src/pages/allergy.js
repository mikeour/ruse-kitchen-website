import React from "react"
import AllergyItem from "../components/allergy-item"
import { Slideshow } from "../components/shared"
import { css } from "@emotion/core"
import SectionContainer from "../components/sectionContainer"
import { mq } from "../styles"

const AllergyPage = () => {
  return (
    <>
      {/* <div
        css={css`
          height: 9rem;
          background: var(--nav);

          ${mq("small")} {
            height: 5rem;
          }
        `}
      ></div> */}
      <Slideshow caption="allergy information" />
      <SectionContainer>
        <div
          css={css`
            padding: 4rem 6rem;
            width: 100%;
            margin: 0 7rem;
            border-radius: 5px;
            background: white;

            ${mq("medium")} {
              padding: 4rem 2rem;
              margin: 0;
            }

            ${mq("small")} {
              padding: 1rem 0.5rem;
              margin: 0;
            }
          `}
        >
          <AllergyItem name="Lamb Gyro">
            <p>Contains gluten</p>
            <p>Tzatziki contains sesame seeds</p>
            <p>Contains soy (comes from soy sauce)</p>
            <p>Does not contain nuts</p>
          </AllergyItem>
          <AllergyItem name="Spicy Italian Sausage/Beef Chimichurri Taco">
            <p>Contains gluten</p>
            <p>Contains soy (comes from soy sauce)</p>
            <p>Does not contain nuts</p>
          </AllergyItem>
          <AllergyItem name="Falafel Burger">
            <p>Can be made gluten free by omitting the bun. </p>
            <p>Tzatziki contains sesame seeds</p>
            <p>Does not contain soy</p>
            <p>Does not contain nuts</p>
          </AllergyItem>
          <AllergyItem name="Tofu Satay Taco">
            <p>Contains soy</p>
            <p>Contains gluten</p>
            <p>Contains peanuts</p>
          </AllergyItem>
        </div>
      </SectionContainer>
    </>
  )
}

export default AllergyPage
