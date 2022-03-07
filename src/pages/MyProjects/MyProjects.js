import "./MyProjects.css";
import { Carousel } from "../../components/index";

export const MyProjects = () => {
  return (
    <div className="myprojects" id="myprojects">
      <div className="myprojects-container">
        <h1>My Projects</h1>
        <Carousel />

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
