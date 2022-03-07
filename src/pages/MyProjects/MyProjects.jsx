import "./MyProjects.css";
import { SliderData } from "../../components/index";

export const MyProjects = () => {
  console.log(SliderData);
  return (
    <div className="myprojects" id="myprojects">
      <h1>My Projects</h1>

      <div className="img-card">
        {SliderData.map((data, index) => {
          return <img className="img" src={data.image} alt="img" />;
        })}
      </div>
      <a
        href="https://mern-task-list-application.herokuapp.com/"
        target={"_blank"}
        rel={"noreferrer"}
      >
        Task Application
      </a>
    </div>
  );
};
