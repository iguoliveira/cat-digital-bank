import "./navbar.scss";
import { Link } from "react-router-dom";
import Logo from "../assets/logo-png.png";
import { useUserStore } from "../stores/user";

export const Navbar = () => {
  const [user, removeUser] = useUserStore((state) => [state.user, state.removeUser])

  return (
    <nav className="navbar-content">
      <Link to='/'>
        <img src={Logo} className="logo" />
      </Link>
      <div className="container-links">
        <Link to="/" className="links">Home</Link>
        {!user ?
          (
            <>
              <Link to="/login" className="links">Login</Link>
              <Link to="/sign-up" className="sign-up">Sign up</Link>
            </>
          )
          :
          (
            <>
              <Link to={`/transactions/id:${user.userAccountNumberFk}/pix`} className="links">Pix</Link>
              <Link to={`/user/id:${user.userAccountNumberFk}/profile`} className="links">Profile</Link>
              <button className="logout" onClick={removeUser}>Logout</button>
            </>
          )}
      </div>
    </nav>
  );
};
