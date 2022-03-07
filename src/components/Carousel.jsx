import { useState } from "react";
import { Images } from "../helpers/CarouselData";
import {
  CarouselContainer,
  CarouselInnerContainer,
} from "../styles/Carousel.style";

export const Carousel = () => {
  const [curr, setCurr] = useState(0);
  return (
    <>
      <CarouselContainer>
        <CarouselInnerContainer
          style={{ backgroundImage: `url(${Images[curr].image})` }}
        ></CarouselInnerContainer>
      </CarouselContainer>
    </>
  );
};
