import { Outlet } from "react-router-dom";
import { About, MyProjects, Skills } from "../../pages/index";
import "./Layout.css";

export const Layout = () => {
  return (
    <main>
      <nav className="nav-bar">
        <span>WESLEY CUNDLE</span>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#myprojects">My Projects</a>
        <a
          href="https://github.com/wesleyCundle28"
          target={"_blank"}
          rel={"noreferrer"}
        >
          Git
        </a>
        <a
          href="https://www.linkedin.com/in/wesley-cundle-19719b50/"
          target={"_blank"}
          rel={"noreferrer"}
        >
          LinkedIn
        </a>
      </nav>
      <About />
      <Skills />
      <MyProjects />

      <Outlet />
      <footer className="back-to-top">
        <a className="foot" href="#about">
          Back To Top
        </a>
      </footer>
    </main>
  );
};

export default Layout;
