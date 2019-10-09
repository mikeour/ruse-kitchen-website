import React from "react"
import AllergyItem from "../components/allergyItem"
import Slideshow from "../components/slideshow"
import { css } from "@emotion/core"
import SectionContainer from "../components/sectionContainer"
import mq from "../styles/media"

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
            padding: 6rem;

            ${mq("medium")} {
              padding: 4rem 2rem;
            }

            ${mq("small")} {
              padding: 1rem 0.5rem;
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
