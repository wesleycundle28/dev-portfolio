import { IoArrowUndo, IoArrowRedo } from "react-icons/io5";
import { GoLogoGithub } from "react-icons/go";
import {
  CarouselContainer,
  CarouselInnerContainer,
  CarouselLeft,
  CarouselRight,
  CarouselCenter,
  CarouselBottom,
  CarouselBottomLeft,
  CarouselBottomRight,
  CarouselTitle,
} from "../styles/Carousel.style";

export const Carousel = ({ git, url, app, decrease, increase }) => {
  return (
    <>
      <CarouselTitle>Mern Stack Task App</CarouselTitle>
      <CarouselContainer>
        <CarouselInnerContainer style={{ backgroundImage: `url(${url})` }}>
          <CarouselLeft onClick={decrease}>
            <IoArrowUndo />
          </CarouselLeft>
          <CarouselCenter />
          <CarouselRight onClick={increase}>
            <IoArrowRedo />
          </CarouselRight>
        </CarouselInnerContainer>
      </CarouselContainer>
      <CarouselBottom>
        <CarouselBottomLeft href={git}>
          <GoLogoGithub />
        </CarouselBottomLeft>
        <CarouselBottomRight href={app} target={"_blank"} rel={"noreferrer"}>
          Application
        </CarouselBottomRight>
      </CarouselBottom>
    </>
  );
};
