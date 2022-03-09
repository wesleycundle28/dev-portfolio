import { DiJavascript } from "react-icons/di";

import {
  SkillListItem,
  SkillsListContainer,
  SkillsListInnerContainer,
} from "../styles/SkillsList.style";

export const SkillsList = () => {
  return (
    <SkillsListContainer>
      <SkillsListInnerContainer>
        <h1>Skills</h1>
        <SkillListItem>HTML</SkillListItem>
        <SkillListItem>CSS</SkillListItem>
        <SkillListItem>
          <DiJavascript /> JavaScript
        </SkillListItem>
        <SkillListItem>React.js</SkillListItem>
        <SkillListItem>Redux</SkillListItem>
        <SkillListItem>RTK Query</SkillListItem>
        <SkillListItem>Node.js</SkillListItem>
        <SkillListItem>Express.js</SkillListItem>
        <SkillListItem>Mongoose</SkillListItem>
        <SkillListItem>MongoDB</SkillListItem>
        <SkillListItem>Azure DevOps</SkillListItem>
        {/* <SkillListItem>SQL</SkillListItem>
        <SkillListItem>C#</SkillListItem> */}
      </SkillsListInnerContainer>
    </SkillsListContainer>
  );
};
