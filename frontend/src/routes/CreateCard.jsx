import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputText } from "../components/input/InputText";
import { Notify } from "notiflix";
import { Navbar } from "../components/navbar/Navbar";
import { Button } from "../components/input/Button";
import { FormCard } from "../components/FormCard";
import { getSession } from "../services/session";
import { useEffect } from "react";
import { GET, POST } from "../services/api";

export const CreateCard = () => {
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  const [card, setCard] = useState([{}]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const notifyStyle = {
    position: "left-top",
    timeout: 1250,
  };

  useEffect(() => {
    let session = getSession();
    !session
      ? navigate("/")
      : (setUser(session),
        GET("card/all")
          .then((res) => setCard(res))
          .catch((error) => {
            throw new Error(error);
          })
          .finally(() => {
            setLoading(false);
          }));
  }, []);

  const RegisterCard = async (event) => {
    event.preventDefault();

    let data = {
      number:
        parseInt(Math.random() * (9999 - 1000 + 1) + 1000).toString() +
        " " +
        parseInt(Math.random() * (9999 - 1000 + 1) + 1000).toString() +
        " " +
        parseInt(Math.random() * (9999 - 1000 + 1) + 1000).toString() +
        " " +
        parseInt(Math.random() * (9999 - 1000 + 1) + 1000).toString(),
      expiration:
        parseInt(Math.random() * (12 - 1 + 1) + 1).toString() +
        "/" +
        parseInt(Math.random() * (34 - 28 + 1) + 28).toString(),
      code: parseInt(Math.random() * (999 - 100 + 1) + 100),
      type: "F",
      category: "P", //Silver, Gold, Platinum, Diamond, Black
      password: password,
      user: user,
    };
    POST("card/register", data);
    Notify.success(`Cartão criado!`, notifyStyle);
    navigate(`/user/id:${user.id}`);
  };

  return loading ? (
    <div>Loading...</div>
  ) : (
    card.map((item, index) => {
      return (
        item.user.id == user.id && (
          <div className="h-screen bg-mainBrandColor-1000 overflow-hidden">
            <Navbar />
            <div className="h-[92%] flex flex-col justify-center items-center text-center">
              <FormCard title="CREATE PASSWORD">
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
                  <Button isDisabled={item.user.id == user.id && true}>
                    Create Card
                  </Button>
                </form>
              </FormCard>
            </div>
          </div>
        )
      );
    })
  );
};
