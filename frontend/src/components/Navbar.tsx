import "./navbar.scss";
import { Link } from "react-router-dom";
import Logo from "../assets/logo-png.png";

export const Navbar = () => {
  return (
    <nav>
      <img src={Logo} className="logo" />
      <div className="container-links">
        <Link to="/">Home</Link>
        <Link to="/">Login</Link>
        <Link to="/">Sign up</Link>
      </div>
    </nav>
  );
};
