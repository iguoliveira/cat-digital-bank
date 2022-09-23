import { useState } from "react";
import Pointer from "/pointer-download.png";
import { Link } from "react-router-dom";
import { FormCard } from "../FormCard";
import { InputText } from "../input/InputText";

export const Download = () => {
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col items-start">
      <FormCard title="Come for the realm of benefits!">
        <InputText
          type="text"
          placeholder="Cpf"
          value={cpf}
          onchange={(evt) => setCpf(evt.target.value)}
          maxlength="11"
        />
        <InputText
          type="email"
          placeholder="Email"
          value={email}
          onchange={(evt) => setEmail(evt.target.value)}
        />
        <Link
          to="signup"
          className="bg-mainBrandColor-1000 hover:bg-mainBrandColor-500 w-full md:w-48 text-white flex justify-center text-2xl uppercase md:text-4xl py-3 font-bold shadow-md shadow-black"
        >
          Sign Up
        </Link>
      </FormCard>
      <div className="relative bottom-20 md:bottom-8 left-64 md:left-36">
        <img className="w-20 md:w-28" src={Pointer} />
      </div>
    </div>
  );
};
