import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 60%;
  height: 37.5vw;
  background-color: blueviolet;
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
`;
