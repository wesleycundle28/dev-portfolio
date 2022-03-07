import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../components/index";

export const Layout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
