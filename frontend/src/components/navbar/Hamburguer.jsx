import { useState } from "react";
import { Link } from "react-router-dom";
import { LinkItem } from "./link/LinkItem";
import { IoLogOut } from "react-icons/io5";

export const Hamburguer = ({ user, logout }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <section className="MOBILE-MENU flex lg:hidden z-50">
      <div
        className="HAMBURGER-ICON space-y-2 cursor-pointer"
        onClick={() => setIsNavOpen((prev) => !prev)}
      >
        <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
        <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
        <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
      </div>

      <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
        <div
          className="absolute top-0 right-0 px-8 py-8 cursor-pointer"
          onClick={() => setIsNavOpen(false)}
        >
          <svg
            className="h-8 w-8 text-black"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
        <ul className="flex flex-col items-center justify-between min-h-[250px]">
          <li className="border-b border-gray-400 my-8 uppercase">
            <Link to="/">
              <LinkItem name="Home" />
            </Link>
          </li>
          {!user ? (
            <>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/login">
                  <LinkItem name="Login" />
                </Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/signup">
                  <LinkItem name="Sign Up" />
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/signup">
                  <LinkItem name="Profile" />
                </Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to={`/user/id:${user && user.id}/registerCard`}>
                  <LinkItem name="Card" />
                </Link>
              </li>
            </>
          )}
          {user && (
            <li className="my-8 uppercase">
              <Link to="/" onClick={logout}>
                <IoLogOut size={"40"} />
              </Link>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
};
