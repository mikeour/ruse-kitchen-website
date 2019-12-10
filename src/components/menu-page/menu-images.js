import React from "react";
import Image from "gatsby-image";
import styled from "@emotion/styled";
import { mq, flexMixin } from "@styles";

import { ButtonLink } from "@components/shared";

// function MenuHeader() {
//   return (
//     <Header>
//       <p>
//         Below is our full menu which rotates based off each event and the
//         season. Check our pop-up calendar to find what we will be serving next.
//       </p>
//       <ButtonLink to="/popups">Pop-Up Events</ButtonLink>
//     </Header>
//   );
// }

function MenuImages({ images }) {
  return (
    <Wrapper>
      {images.map((image, i) => (
        <ImageWrapper>
          <FoodImage key={i} fluid={image.sharp.fluid}></FoodImage>
        </ImageWrapper>
      ))}
    </Wrapper>
  );
}

export default MenuImages;

// Styles

const Wrapper = styled.div`
  grid-area: images;
  ${flexMixin}
  justify-content: space-around;
  max-width: 400px;
  width: 100%;
  height: 100%;
  background: white;
  padding: 5% 0;

  ${mq("medium")} {
    display: none;
  }
`;

const ImageWrapper = styled.div`
  width: 350px;
  height: 450px;
  border-radius: 10px;
`;

const FoodImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
