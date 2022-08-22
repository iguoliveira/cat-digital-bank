import { Logo } from "./logo/Logo";
import { LinkContainer } from "./link/LinkContainer";
import { Hamburguer } from "./hamburguer/Hamburguer";

export const Navbar = () => {

  return (
    <div className="bg-mainBrandColor w-screen py-4">
      <div className="flex items-center justify-between">
        <Logo />
        <nav>
          <Hamburguer />
          <LinkContainer />
        </nav>
      </div>
    </div>
  );
};
