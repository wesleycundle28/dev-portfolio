import { useState } from "react";
import { IoArrowUndo, IoArrowRedo } from "react-icons/io5";
import { Images } from "../helpers/CarouselData";
import {
  CarouselContainer,
  CarouselInnerContainer,
  CarouselLeft,
  CarouselRight,
  CarouselCenter,
} from "../styles/Carousel.style";

export const Carousel = () => {
  const [curr, setCurr] = useState(0);
  return (
    <>
      <CarouselContainer>
        <CarouselInnerContainer
          style={{ backgroundImage: `url(${Images[curr].image})` }}
        >
          <CarouselLeft
            onClick={() => {
              curr > 0 && setCurr(curr - 1);
            }}
          >
            <IoArrowUndo />
          </CarouselLeft>
          <CarouselCenter />
          <CarouselRight
            onClick={() => {
              curr < Images.length - 1 && setCurr(curr + 1);
            }}
          >
            <IoArrowRedo />
          </CarouselRight>
        </CarouselInnerContainer>
      </CarouselContainer>
    </>
  );
};
