import "./MyProjects.css";
import { Carousel } from "../../components/index";

export const MyProjects = () => {
  return (
    <div className="myprojects" id="myprojects">
      <div className="myprojects-container">
        <h1 className="title">My Projects</h1>
        <Carousel />

        <a
          className="project-anchor"
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
