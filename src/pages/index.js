import React from "react"
import Slideshow from "../components/slideshow"
import SectionContainer from "../components/sectionContainer"
import FullSection from "../components/fullSection"
import Insta from "../components/insta"
import HalfSection from "../components/halfSection"
import { css } from "@emotion/core"
import mq from "../styles/media"
import PopUpSpotlight from "../components/popUpSpotlight"

const Index = () => {
  return (
    <>
      <div
        css={css`
          height: 9rem;
          background: var(--nav);
          transition: all 400ms ease-in-out;
          ${mq("small")} {
            height: 5rem;
          }
        `}
      ></div>
      <Slideshow caption="ruse vegan kitchen" />
      <SectionContainer>
        <FullSection title="Eat Well. Be Kind." button="menu">
          Beetroot water spinach okra water chestnut ricebean pea catsear
          courgette summer purslane. Water spinach arugula pea tatsoi aubergine
          spring onion bush tomato kale radicchio turnip chicory salsify pea
          sprouts fava bean. Dandelion zucchini burdock yarrow chickpea
          dandelion sorrel courgette turnip greens tigernut soybean radish
          artichoke wattle seed endive groundnut broccoli arugula. Soko
          radicchio bunya nuts gram dulse silver beet parsnip napa cabbage lotus
          root sea lettuce brussels sprout cabbage. Catsear cauliflower garbanzo
          yarrow salsify chicory garlic bell pepper napa cabbage lettuce tomato
          kale arugula melon sierra leone bologi rutabaga tigernut.
        </FullSection>
      </SectionContainer>
      <SectionContainer>
        <PopUpSpotlight button="map"></PopUpSpotlight>
        <HalfSection title="Who We Are" button="about">
          Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot
          courgette tatsoi pea sprouts fava bean collard greens dandelion okra
          wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
          Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi
          radish okra azuki bean corn fava bean mustard tigernut jícama green
          bean.
        </HalfSection>
      </SectionContainer>
      <Slideshow caption="about" />
      <SectionContainer>
        <FullSection title="Eat Even Weller. Be Kinder-ish." button="About">
          At Ruse's Kitchen we’re passionate about sourcing and serving the best
          food products & gifts possible - from fresh baked goods & prepared
          foods made in house to specialty homewares & hostess gifts from the
          island and beyond. We are here to enhance your Vineyard experience.
        </FullSection>
      </SectionContainer>
      <Slideshow caption="Instagram" />
      <SectionContainer>
        <Insta />
      </SectionContainer>
    </>
  )
}

export default Index
