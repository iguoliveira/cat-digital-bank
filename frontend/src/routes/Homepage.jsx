import { useState } from "react";
import { Navbar } from "../components/navbar/Navbar";
import { Download } from "../components/homepage/Download";
import { Card } from "../components/homepage/Card";
import DataSecurity from "/data-security.png";
import Time from "/time.png";
import Verification from "/verification.png";
import { useEffect } from "react";
import { getSession } from "../services/session";

export const Homepage = () => {
  const [session, setSession] = useState();

  useEffect(() => {
    let user = getSession();
    user && setSession(getSession());
  }, []);

  return (
    <div className="h-screen w-screen overflow-auto bg-mainBrandColor-1000">
      <Navbar />
      <div className="flex flex-col justify-between">
        <div className="h-screen flex items-center justify-center">
          {!session && <Download />}
        </div>
        <div className="flex flex-wrap justify-around gap-24 py-32">
          <Card
            image={DataSecurity}
            title="Data Security"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          />
          <Card
            image={Time}
            title="Anywhere Any Time"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          />
          <Card
            image={Verification}
            title="Certification"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          />
        </div>
      </div>
    </div>
  );
};
