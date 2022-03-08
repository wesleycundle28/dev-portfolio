import { Link } from "react-router-dom";
import "./Missing.css";

export const Missing = () => {
  return (
    <div className="missing">
      <h1 className="pageNotFound">Page Not Found</h1>
      <Link to={"/"}>Home</Link>
    </div>
  );
};
