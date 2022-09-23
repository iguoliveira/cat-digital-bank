import { useState } from "react";
import { AUTH } from "../services/api";
import { Link, useNavigate } from "react-router-dom";
import { InputText } from "../components/input/InputText";
import { Notify } from "notiflix";
import { Navbar } from "../components/navbar/Navbar";
import { Button } from "../components/input/Button";
import { FormCard } from "../components/FormCard";

export const Login = () => {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");

  const notifyStyle = {
    position:'left-top',
    timeout: 1500,
  }

  const navigate = useNavigate()

  const LoginUser = async (event) => {
    event.preventDefault();
    let user = await AUTH({username: cpf, password: password})
    if(user.ok){
      Notify.success(`Bem Vindo ${user.user.name}!`, notifyStyle);
      navigate('/')
    } else {
      Notify.failure("Credenciais Invalidas!", notifyStyle);
    }
  }

  return (
    <div className="h-screen bg-mainBrandColor-1000 overflow-hidden">
      <Navbar />
      <div className="h-[92%] flex flex-col justify-center items-center text-center">
        <FormCard title="LOGIN">
          <form
            className="flex flex-col items-center space-y-4 w-72"
            onSubmit={LoginUser}
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
            <Button>Login</Button>
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
