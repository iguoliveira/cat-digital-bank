import "./navbar.scss";
import { Link } from "react-router-dom";
import Logo from "../assets/logo-png.png";

export const Navbar = () => {
  return (
    <nav>
      <img src={Logo} className="logo" />
      <div className="container-links">
        <Link to="/" className="links">Home</Link>
        <Link to="/" className="links">Login</Link>
        <Link to="/" className="sign-up">Sign up</Link>
      </div>
    </nav>
  );
};
