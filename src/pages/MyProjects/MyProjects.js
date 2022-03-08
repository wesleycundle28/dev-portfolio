import "./MyProjects.css";
import { Carousel } from "../../components/index";
import { Images } from "../../helpers/CarouselData";
import { useState } from "react";

export const MyProjects = () => {
  const [curr, setCurr] = useState(0);
  const decrease = () => {
    curr > 0 && setCurr(curr - 1);
  };
  const increase = () => {
    curr < Images.length - 1 && setCurr(curr + 1);
  };

  return (
    <div className="myprojects" id="myprojects">
      <div className="myprojects-container">
        <h1 className="title">My Projects</h1>
        <Carousel
          url={Images[curr].image}
          git="https://github.com/wesleycundle28/Mern-Task-List-App"
          app="https://mern-task-list-application.herokuapp.com/"
          decrease={decrease}
          increase={increase}
        />
      </div>
    </div>
  );
};
