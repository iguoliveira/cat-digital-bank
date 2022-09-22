import { Logo } from "./Logo";
import { LinkContainer } from "./link/LinkContainer";
import { Hamburguer } from "./Hamburguer";

export const Navbar = () => {

  return (
    <div className="bg-white py-4 fixed  w-screen z-50">
      <div className="flex items-center justify-between px-4">
        <Logo />
        <nav>
          <Hamburguer />
          <LinkContainer />
        </nav>
      </div>
    </div>
  );
};