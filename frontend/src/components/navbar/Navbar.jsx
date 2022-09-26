import { Logo } from "./Logo";
import { LinkContainer } from "./link/LinkContainer";
import { getSession, removeSession } from "../../services/session"
import { Hamburguer } from "./Hamburguer";
import { useEffect } from "react";
import { useState } from "react";

export const Navbar = () => {
  const [session, setSession] = useState(false);

  useEffect(() => {
    let userSession = getSession();
    userSession && setSession(true);
  });

  return (
    <header className="bg-white py-4 w-screen">
      <div className="flex items-center justify-between px-4">
        <Logo />
        <nav>
          <Hamburguer session={session} logout={removeSession} />
          <LinkContainer session={session}/>
        </nav>
      </div>
    </header>
  );
};