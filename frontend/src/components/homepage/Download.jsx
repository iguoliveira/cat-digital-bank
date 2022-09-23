import { useState } from "react";
import Pointer from "/pointer-download.png";
import { Link } from "react-router-dom";
import { InputText } from "../input/InputText";

export const Download = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col items-start">
      <div className="bg-white text-3xl md:text-4xl font-bold flex-wrap p-8 w-96 space-y-5 rounded defaultShadow">
        <div className="uppercase text-3xl">
          Come for the realm of benefits!
        </div>
        <div>
          <InputText
            type="text"
            placeholder="Name"
            value={name}
            onchange={(evt) => setName(evt.target.value)}
          />
          <InputText
            type="email"
            placeholder="Email"
            value={email}
            onchange={(evt) => setEmail(evt.target.value)}
          />
        </div>
        <Link
          to="signup"
          className="bg-mainBrandColor-1000 hover:bg-mainBrandColor-500 w-full md:w-48 text-white flex justify-center text-2xl uppercase md:text-4xl py-3 font-bold shadow-md shadow-black"
        >
          Sign Up
        </Link>
      </div>
      <div className="relative bottom-16 md:bottom-8 left-64 md:left-36">
        <img className="w-20 md:w-28" src={Pointer} />
      </div>
    </div>
  );
};
