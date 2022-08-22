import { Logo } from "./logo/Logo";
import { LinkContainer } from "./link/LinkContainer";

export const Navbar = () => {
  return (
    <div className="bg-mainBrandColor w-screen py-4">
      <div className="flex items-center justify-between px-5">
        <Logo />
        <LinkContainer />
      </div>
    </div>
  );
};
