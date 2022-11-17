import "./navbar.scss";
import { Link } from "react-router-dom";
import Logo from "../assets/logo-png.png";
import { useUserStore } from "../stores/user";
import { useEffect } from "react";

export const Navbar = () => {
  const [user] = useUserStore((state) => [state.user])

  useEffect(() => {
    console.log(user)
  })
  
  return (
    <nav className="navbar-content">
      <Link to='/'>
        <img src={Logo} className="logo" />
      </Link>
      <div className="container-links">
        <Link to="/" className="links">Home</Link>
        <Link to="/login" className="links">Login</Link>
        <Link to="/sign-up" className="sign-up">Sign up</Link>
      </div>
    </nav>
  );
};
