import Logo from '/cat-logo-colored.png'
import { Links } from './links/Links';

export const Navbar = () => {
  return (
    <div className="bg-white fixed inset-0 p-3">
      <div className="flex justify-between items-center mx-4">
        <div className="flex gap-8 text-lg">
          <img src={Logo} className="w-16" />

          <div className="flex items-center gap-5">
            <Links name="Homepage" />
            <Links name="About" />
            <Links name="Our Benefits" />
          </div>
        </div>

        <div>Assine ja!</div>
      </div>
    </div>
  );
};
