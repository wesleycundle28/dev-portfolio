import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 60%;
  height: 37.5vw;
  overflow: hidden;
`;

export const CarouselInnerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const CarouselLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 5%;
  font-size: xx-large;
  height: 100%;
  background: rgb(0, 0, 0, 0.4);

  :hover {
    color: blueviolet;
  }

  @media (max-width: 1000px) {
    font-size: large;
  }
`;

export const CarouselCenter = styled.div`
  flex: 80%;
  height: 100%;
`;

export const CarouselRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 5%;
  font-size: xx-large;
  height: 100%;
  background: rgb(0, 0, 0, 0.4);

  :hover {
    color: blueviolet;
  }

  @media (max-width: 1000px) {
    font-size: large;
  }
`;

export const CarouselBottom = styled.div`
  display: flex;
  height: 6.25vw;
  width: 60%;
`;

export const CarouselBottomLeft = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  font-size: 6rem;
`;

export const CarouselBottomRight = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  /* font-family:; */
  font-size: 2rem;
  font-weight: bold;
`;

export const CarouselTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vw;
  font-size: 2rem;
  width: 60%;
`;
