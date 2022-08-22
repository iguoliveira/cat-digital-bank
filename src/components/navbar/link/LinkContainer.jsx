import { SearchBar } from "./searchbar/SearchBar";
import { Link } from "./Link";

export const LinkContainer = () => {
  return (
    <div className="flex gap-5">
      <SearchBar />
      <Link name="Home" />
      <Link name="About" />
      <Link name="Download" />
    </div>
  );
};
