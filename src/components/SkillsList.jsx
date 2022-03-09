import { DiJavascript, DiCss3, DiHtml5, DiNodejsSmall } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import {
  SkillList,
  SkillListItem,
  SkillsListContainer,
  SkillsListInnerContainer,
} from "../styles/SkillsList.style";

export const SkillsList = () => {
  return (
    <SkillsListContainer>
      <SkillsListInnerContainer>
        <SkillList>
          <h1>Skills</h1>
          <SkillListItem>
            <DiHtml5 />
            HTML
          </SkillListItem>
          <SkillListItem>
            <DiCss3 />
            CSS
          </SkillListItem>
          <SkillListItem>
            <DiJavascript /> JavaScript
          </SkillListItem>
          <SkillListItem>React.js</SkillListItem>
          <SkillListItem>Redux</SkillListItem>
          <SkillListItem>RTK Query</SkillListItem>
          <SkillListItem>
            <DiNodejsSmall /> Node.js
          </SkillListItem>
          <SkillListItem>
            <SiExpress /> Express.js
          </SkillListItem>
          <SkillListItem>Mongoose</SkillListItem>
          <SkillListItem>MongoDB</SkillListItem>
          <SkillListItem>Azure DevOps</SkillListItem>
          {/* <SkillListItem>SQL</SkillListItem>
        <SkillListItem>C#</SkillListItem> */}
        </SkillList>
      </SkillsListInnerContainer>
    </SkillsListContainer>
  );
};
