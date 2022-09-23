import { useState } from "react";
import { POST } from "../services/api";
import { SignupValidation } from "../services/FormValidation";
import { Link } from "react-router-dom";
import { Notify } from "notiflix";
import { InputText } from "../components/input/InputText";
import { Navbar } from "../components/navbar/Navbar";
import { Button } from "../components/input/Button";
import { FormCard } from "../components/FormCard";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [birthday, setBirthday] = useState(new Date());
  const [sex, setSex] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  var data = {
    name: name,
    sex: sex,
    email: email,
    birthDay: birthday,
    cpf: cpf,
    password: password,
  };

  const SignupUser = () => {
    event.preventDefault();
    if (
      SignupValidation(
        name,
        email,
        cpf,
        password,
        confirmpassword,
        sex,
        birthday
      )
    ) {
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
        <FormCard title="SIGN UP">
          <form
            className="flex flex-col items-center space-y-4 w-72"
            onSubmit={SignupUser}
          >
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
            <InputText
              type="text"
              placeholder="CPF"
              value={cpf}
              onchange={(evt) => setCpf(evt.target.value)}
              maxlength="11"
            />
            <div className="flex space-x-4">
              <InputText
                type="password"
                placeholder="Password"
                value={password}
                onchange={(evt) => setPassword(evt.target.value)}
              />
              <InputText
                type="password"
                placeholder="Confirm Password"
                value={confirmpassword}
                onchange={(evt) => setConfirmpassword(evt.target.value)}
              />
            </div>
            <InputText
              type="text"
              placeholder="Sex"
              value={sex}
              onchange={(evt) => setSex(evt.target.value)}
            />
            <InputText
              type="date"
              value={birthday}
              onchange={(evt) => setBirthday(evt.target.value)}
            />
            <Button onclick={() => SubmitEvent}>Sign up</Button>
          </form>
          <Link
            to="/login"
            className="text-[10px] text-mainBrandColor-1000 hover:text-mainBrandColor-500"
          >
            Already Signed up? Click here to Login
          </Link>
        </FormCard>
      </div>
    </div>
  );
};
