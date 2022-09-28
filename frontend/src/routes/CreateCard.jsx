import { useState } from "react";
import moment from "moment"
import { useNavigate } from "react-router-dom";
import { InputText } from "../components/input/InputText";
import { Notify } from "notiflix";
import { Navbar } from "../components/navbar/Navbar";
import { Button } from "../components/input/Button";
import { FormCard } from "../components/FormCard";
import { getSession } from "../services/session"
import { useEffect } from "react";

export const CreateCard = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  let session

  const notifyStyle = {
    position: 'left-top',
    timeout: 1000,
  }

  let data = {
    number: parseInt(Math.random() * (9999 - 1000 + 1) + 1000).toString()+ " " +parseInt(Math.random() * (9999 - 1000 + 1) + 1000).toString()+" "+parseInt(Math.random() * (9999 - 1000 + 1) + 1000).toString()+ " " +parseInt(Math.random() * (9999 - 1000 + 1) + 1000).toString(),
    validate: moment().format()
  }

  useEffect(() => {
    session = getSession()
    console.log(data)
  }, [])


  const RegisterCard = async (event) => {
    event.preventDefault()
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
