import { useState } from "react";
import Pointer from "/pointer-download.png";
import { FormCard } from "../FormCard";
import { InputText } from "../input/InputText";
import { Button } from "../input/Button";
import { useNavigate } from "react-router-dom";

export const Download = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const goToSignUpWithData = () => {
    event.preventDefault();
    navigate("/signup", { state: { nameValue:name, emailValue: email }});
  };

  return (
    <div className="flex flex-col items-start">
      <FormCard title="Come for the realm of benefits!">
        <form className="space-y-4" onSubmit={goToSignUpWithData}>
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
          <Button>Sign Up</Button>
        </form>
      </FormCard>
      <div className="relative bottom-20 md:bottom-8 left-64 md:left-36">
        <img className="w-20 md:w-28" src={Pointer} />
      </div>
    </div>
  );
};
