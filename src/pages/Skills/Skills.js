import "./Skills.css";
import { FaNode, FaReact } from "react-icons/fa";
import {
  SiRedux,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiAzuredevops,
  SiCsharp,
} from "react-icons/si";

export const Skills = () => {
  return (
    <div id="skills" className="skills">
      <div className="skills-container">
        <h1>Skills</h1>
        <ul className="skills-list">
          <li className="skills-item">
            <SiJavascript /> JavaScript
          </li>
          <li className="skills-item">
            <SiHtml5 /> HTML
          </li>
          <li className="skills-item">
            <SiCss3 /> CSS
          </li>
          <li className="skills-item">
            <FaReact /> React js
          </li>
          <li className="skills-item">
            <SiRedux /> Redux
          </li>
          <li className="skills-item">
            <SiRedux /> RTK Query
          </li>
          <li className="skills-item">
            <FaNode /> Node js
          </li>
          <li className="skills-item">
            <SiExpress /> Express js
          </li>
          {/* <li className="skills-item"> Mongoose </li> */}
          <li className="skills-item">
            <SiMongodb /> MongoDB
          </li>
          {/* <li className="skills-item">
            <DiMsqlServer /> SQL
          </li>
          <li className="skills-item">
            <SiAzuredevops /> Azure devops
          </li>
          <li className="skills-item">
            <SiCsharp /> C#
          </li> */}
        </ul>
      </div>
    </div>
  );
};
