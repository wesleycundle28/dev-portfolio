import {
  DiJavascript,
  DiCss3,
  DiHtml5,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";
import { SiExpress, SiRedux, SiMongodb, SiAzuredevops } from "react-icons/si";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { BiRadioCircle } from "react-icons/bi";
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
          <SkillListItem>
            <DiReact /> React
          </SkillListItem>
          <SkillListItem>
            <SiRedux /> Redux
          </SkillListItem>
          <SkillListItem>
            <SiRedux /> RTK Query
          </SkillListItem>
          <SkillListItem>
            <DiNodejsSmall /> Node
          </SkillListItem>
          <SkillListItem>
            <SiExpress /> Express
          </SkillListItem>
          <SkillListItem>
            <BiRadioCircle /> Mongoose
          </SkillListItem>
          <SkillListItem>
            <SiMongodb /> MongoDB
          </SkillListItem>
          <SkillListItem>
            <SiAzuredevops /> Azure DevOps
          </SkillListItem>
          {/* <SkillListItem>SQL</SkillListItem>
        <SkillListItem>C#</SkillListItem> */}
        </SkillList>
      </SkillsListInnerContainer>
    </SkillsListContainer>
  );
};
