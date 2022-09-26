import { SearchBar } from "./searchbar/SearchBar";
import { LinkItem } from "./LinkItem";
import { IoLogOut } from "react-icons/io5";
import { Link } from "react-router-dom";

export const LinkContainer = ({ session }) => {
  return !session ? (
    <div className="DESKTOP-MENU hidden space-x-8 lg:flex">
      <SearchBar />
      <LinkItem name="Home" />
      <LinkItem name="Sign Up" />
      <LinkItem name="About" />
      <LinkItem name="Download" />
    </div>
  ) : (
    <div className="DESKTOP-MENU hidden space-x-8 lg:flex">
      <SearchBar />
      <LinkItem name="Home" />
      <LinkItem name="About" />
      <LinkItem name="Download" />
      <Link to="/">
        <IoLogOut size={"40"} />
      </Link>
    </div>
  );
};
