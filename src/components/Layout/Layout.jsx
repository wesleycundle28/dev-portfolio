import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

export const Layout = () => {
  return (
    <main>
      <nav className="navBar">
        <span>WESLEY CUNDLE</span>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/myprojects">My Projects</Link>
        <a href="https://github.com/wesleyCundle28" target={"_blank"}>
          Git
        </a>
        <a
          href="https://www.linkedin.com/in/wesley-cundle-19719b50/"
          target={"_blank"}
        >
          LinkedIn
        </a>
      </nav>
      <Outlet />
    </main>
  );
};

export default Layout;
