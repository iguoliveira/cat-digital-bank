import { useState } from "react";
import { POST } from "../services/api";
import { SignupValidation } from "../services/FormValidation";
import { Link } from "react-router-dom";
import { Notify } from "notiflix";
import { InputText } from "../components/input/InputText";
import { Navbar } from "../components/navbar/Navbar";
import { Button } from "../components/input/Button";
import { FormCard } from "../components/FormCard";

export const Login = () => {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");

  var data = {
    cpf: cpf,
    password: password,
  };

  const SignupUser = () => {
    event.preventDefault();
    if (SignupValidation(cpf, password)) {
      Notify.success("Sucesso no registro do Usuario!");
      POST(data);
    } else {
      Notify.failure("Erro no registro!");
    }
  };

  return (
    <div className="h-screen bg-mainBrandColor-1000 overflow-hidden">
      <Navbar />
      <div className="h-[92%] flex flex-col justify-center items-center text-center">
        <FormCard title="LOGIN">
          <form
            className="flex flex-col items-center space-y-4 w-72"
            onSubmit={SignupUser}
          >
            <InputText
              type="text"
              placeholder="CPF"
              value={cpf}
              onchange={(evt) => setCpf(evt.target.value)}
              maxlength="11"
            />
            <InputText
              type="password"
              placeholder="Password"
              value={password}
              onchange={(evt) => setPassword(evt.target.value)}
            />
            <Button onclick={() => SubmitEvent}>Login</Button>
          </form>
          <Link
            to="/signup"
            className="text-[10px] text-mainBrandColor-1000 hover:text-mainBrandColor-500"
          >
            Doesn't have an account? Click here to Sign Up
          </Link>
        </FormCard>
      </div>
    </div>
  );
};
