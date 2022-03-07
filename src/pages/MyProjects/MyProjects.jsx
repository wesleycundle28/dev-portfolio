import "./MyProjects.css";
import { SliderData } from "../../components/index";

export const MyProjects = () => {
  console.log(SliderData);
  return (
    <div className="myprojects" id="myprojects">
      <div className="myprojects-container">
        <h1>My Projects</h1>

        <a
          href="https://mern-task-list-application.herokuapp.com/"
          target={"_blank"}
          rel={"noreferrer"}
        >
          Task Application
        </a>
      </div>
    </div>
  );
};
