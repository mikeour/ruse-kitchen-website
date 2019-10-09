import React from "react"
import MenuItem from "../components/menuItem"
import { css } from "@emotion/core"
import mq from "../styles/media"
import SectionContainer from "../components/sectionContainer"
import Slideshow from "../components/slideshow"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

const StyledLink = styled(Link)`
  color: black;
  padding: 0.5rem 0;

  :visited {
    color: black;
  }
`

const MenuPage = () => {
  const { imageThree, imageFour } = useStaticQuery(graphql`
    query {
      imageThree: file(relativePath: { eq: "slides/hmm.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1450, maxHeight: 700, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      imageFour: file(relativePath: { eq: "slides/plate.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1450, maxHeight: 700, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <>
      {/* <div
        css={css`
          height: 9rem;

          ${mq("small")} {
            height: 5rem;
          }
        `}
      ></div> */}
      <Slideshow caption="menu" slides={[imageFour, imageThree]} />
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
          <p
            css={css`
              font-size: 1.1rem;
              font-style: italic;
            `}
          >
            Made in house and meticulously spiced
          </p>
          <MenuItem name="Lamb Gyro" price="8">
            House made vegan lamb with marinated onion, cucumber and tomato.
            Topped with harissa and tahini tzatziki
          </MenuItem>
          <MenuItem name="Spicy Italian Sausage" price="7">
            House made vegan sausage, with balsamic onions and peppers and
            served with a garlic mustard
          </MenuItem>
          <MenuItem name="Falafel Burger" price="7">
            House made falafel burger. Served with marinated cucumber, onion,
            tomato, harissa and tahini tzatiziki
          </MenuItem>
          <MenuItem name="Tofu Satay Taco" price="3.75">
            Lemongrass marinated tofu. Served with a peanut sauce and a
            coriander slaw. Topped with pickled ginger carrots
          </MenuItem>
          <MenuItem name="Beef Chimichurri Taco" price="3.75">
            House made vegan beef. Served with cumin-blistered shishito peppers.
            Topped with pickled red onions
          </MenuItem>
          <MenuItem name="Mix and Match Two Tacos" price="7">
            Can't decide? Mix and match our two tacos
          </MenuItem>
          <MenuItem name="Steak Pesto Pita" price="9">
            Charbroiled steak sauteed with peppers and onions, topped with pesto
            and a red cabbage slaw
          </MenuItem>
          <MenuItem name="Fattoush Salad" price="7">
            Lebanese salad with parsley, mint, radish, tomato, and romaine
            lettuce, topped with pita croutons and a pomegranate vinaigrette.
          </MenuItem>
          <p
            css={css`
              font-size: 1.1rem;
              font-style: italic;
            `}
          >
            For allergy information, click{" "}
            <StyledLink to="/allergy">here.</StyledLink>
          </p>
        </div>
      </SectionContainer>
    </>
  )
}

export default MenuPage
