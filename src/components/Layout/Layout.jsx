import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

export const Layout = () => {
  return (
    <main>
      <nav className="navBar">
        <Link to="/">Home</Link>
      </nav>
      <Outlet />
    </main>
  );
};

export default Layout;
