import styled from "styled-components";

export const SkillsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 100vh; */
  justify-content: center;
  align-items: center;
  margin: 100px 0 100px 0;
  /* width: 100vw; */
  scroll-margin-top: 100px;
`;

export const SkillsListInnerContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: x-large;
  width: 60%;

  @media (max-width: 700px) {
    width: 100vw;
    font-size: large;
  }
`;

export const SkillList = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const SkillListItem = styled.span`
  margin: 10px;
  padding: 10px;
`;
