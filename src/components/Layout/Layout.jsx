import { Outlet } from "react-router-dom";
import "./Layout.css";
import { Navbar } from "../../components/Navbar";

export const Layout = () => {
  return (
    <main>
      <Navbar />
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
