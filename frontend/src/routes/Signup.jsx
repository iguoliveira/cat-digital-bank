import { useState } from "react";
import { InputText } from "../components/input/InputText";
import { Navbar } from "../components/navbar/Navbar";
import { Button } from "../components/input/Button";

export const Signup = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [cpf, setCpf] = useState("")
  const [birthday, setBirthday] = useState(new Date)
  const [sex, setSex] = useState("")
  const [password, setPassword] = useState("")
  const [confirmpassword, setConfirmpassword] = useState("")

  var jsonData = {
    'name': name, 'sex': sex, 'email': email, 'birthDay': birthday, 'cpf': cpf, 'password': password
  }

  const postData = () => {
    fetch("http://localhost:3000/user/register", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(jsonData)
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
  }

  return (
    <div className="h-screen bg-mainBrandColor-1000 overflow-hidden">
      <Navbar />
      <div className="h-[92%] flex flex-col justify-center items-center">
        <div className="bg-white w-80 p-8 flex flex-col justify-center items-center rounded shadow-black shadow-md space-y-5">
          <div className="font-bold uppercase text-2xl">Sign Up</div>
          <form className="flex flex-col items-center space-y-4 w-72" onSubmit={() => postData()}>
            <InputText type="text" placeholder="Name" value={name} onchange={(evt) => setName(evt.target.value)} />
            <InputText type="email" placeholder="Email" value={email} onchange={(evt) => setEmail(evt.target.value)} />
            <InputText type="text" placeholder="CPF" value={cpf} onchange={(evt) => setCpf(evt.target.value)} maxlength="11" />
            <div className="flex space-x-4">
              <InputText type="password" placeholder="Password" value={password} onchange={(evt) => setPassword(evt.target.value)} />
              <InputText type="password" placeholder="Confirm Password" value={confirmpassword} onchange={(evt) => setConfirmpassword(evt.target.value)} />
            </div>
            <InputText type="text" placeholder="Sex" value={sex} onchange={(evt) => setSex(evt.target.value)} />
            <InputText type="date" value={birthday} onchange={(evt) => setBirthday(evt.target.value)} />
            <Button onclick={() => SubmitEvent}>Sign up</Button>
          </form>
        </div>
      </div>
    </div>
  );
};
