import { Logo } from "./logo/Logo";
import { LinkContainer } from "./link/LinkContainer";
import { Hamburguer } from "./hamburguer/Hamburguer";

export const Navbar = () => {

  return (
    <div className="bg-mainBrandColor py-4">
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
