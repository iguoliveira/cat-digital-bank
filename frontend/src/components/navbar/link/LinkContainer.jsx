import { SearchBar } from "./searchbar/SearchBar";
import { LinkItem } from "./LinkItem";

export const LinkContainer = () => {
  return (
      <div className="DESKTOP-MENU hidden space-x-8 lg:flex">
        <SearchBar />
        <LinkItem name="Home" />
        <LinkItem name="About" />
        <LinkItem name="Download" />
      </div>
  );
};
