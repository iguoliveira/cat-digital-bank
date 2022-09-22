import { Logo } from "./Logo";
import { LinkContainer } from "./link/LinkContainer";
import { Hamburguer } from "./Hamburguer";

export const Navbar = () => {

  return (
    <header className="bg-white py-4 w-screen">
      <div className="flex items-center justify-between px-4">
        <Logo />
        <nav>
          <Hamburguer />
          <LinkContainer />
        </nav>
      </div>
    </header>
  );
};