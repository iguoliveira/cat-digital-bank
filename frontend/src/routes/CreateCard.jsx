import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputText } from "../components/input/InputText";
import { Notify } from "notiflix";
import { Navbar } from "../components/navbar/Navbar";
import { Button } from "../components/input/Button";
import { FormCard } from "../components/FormCard";
import { getSession } from "../services/session"
import { useEffect } from "react";
import { POST } from "../services/api";

export const CreateCard = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  let session

  const notifyStyle = {
    position: 'left-top',
    timeout: 1000,
  }

  useEffect(() => {
    session = getSession()

    !session && navigate('/')
  })

  const RegisterCard = async (event) => {
    event.preventDefault()

    let data = {
      number: parseInt(Math.random() * (9999 - 1000 + 1) + 1000).toString()+ " " +parseInt(Math.random() * (9999 - 1000 + 1) + 1000).toString()+" "+parseInt(Math.random() * (9999 - 1000 + 1) + 1000).toString()+ " " +parseInt(Math.random() * (9999 - 1000 + 1) + 1000).toString(),
      expiration: parseInt(Math.random() * (12 - 1 + 1) + 1).toString() + "/" + parseInt(Math.random() * (34 - 28 + 1) + 28).toString(),
      code: parseInt(Math.random() * (999 - 100 + 1) + 100),
      type: "F",
      category:"P", //Silver, Gold, Platinum, Diamond, Black
      password: password,
      userId: session.id,
    }

    POST("card/register", data)
    navigate(`/user/id:${session.id}`)
  }

  return (
    <div className="h-screen bg-mainBrandColor-1000 overflow-hidden">
      <Navbar />
      <div className="h-[92%] flex flex-col justify-center items-center text-center">
        <FormCard title="CREATE PASSWORd">
          <form
            className="flex flex-col items-center space-y-4 w-72"
            onSubmit={RegisterCard}
          >
            <InputText
              type="password"
              placeholder="Password"
              value={password}
              onchange={(evt) => setPassword(evt.target.value)}
            />
            <Button>Create Card</Button>
          </form>
        </FormCard>
      </div>
    </div>
  );
};
