import { Link } from "react-router-dom";
import "./Missing.css";

export const Missing = () => {
  return (
    <>
      <h1 className="pageNotFound">Page Not Found</h1>
      <Link to={"/"}>Home</Link>
    </>
  );
};
