import { SearchBar } from "./searchbar/SearchBar";
import { Link } from "./Link";

export const LinkContainer = () => {
  return (
      <div className="DESKTOP-MENU hidden space-x-8 lg:flex">
        <SearchBar />
        <Link name="Home" />
        <Link name="About" />
        <Link name="Download" />
      </div>
  );
};
