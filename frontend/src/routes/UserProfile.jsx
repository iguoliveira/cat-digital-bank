import { useState, useEffect } from "react";
import { GET } from "../services/api";
import { getSession } from "../services/session";
import { useParams } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import { CardBack } from "../components/bankCard/CardBack";
import { CardFront } from "../components/bankCard/CardFront";

export const UserProfile = () => {
  const [apiresult, setApiresult] = useState([]);
  const [cardresult, setCardresult] = useState([]);
  let { id } = useParams();
  let session;

  useEffect(() => {
    session = getSession();

    GET("user/all").then((res) => {
      setApiresult(res);
    }),
      GET("card/all").then((res) => {
        setCardresult(res);
      });
  }, []);

  return (
    <div>
      <Navbar />
      {apiresult.map(
        (item, index) =>
          id == item.id && (
            <div key={index} className="px-4">
              <div className="bg-black h-60 relative">
                <div className="bg-pink-100 absolute bottom-0 h-24 w-24">
                  FOTO
                </div>
              </div>
              <div className="mt-4 mb-20">
                <div className="font-bold text-xl">{item.name}</div>
                <div>Sex: {item.sex == "M" ? "Male" : "Female"}</div>
                <div>
                  Birth Day: {item.birthDay.split("T")[0]},{" "}
                  {new Date().getFullYear() -
                    parseInt(item.birthDay.split("-")[0])}{" "}
                  y'o
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="space-y-4 sm:bg-white sm:shadow-inner sm:shadow-black sm:w-[500px] flex flex-col items-center justify-center sm:p-8">
                  {cardresult.map((card, key) => (
                    <div key={key}>
                      {console.log(card.user.name)}
                      <CardFront name={item.name} />
                      <CardBack
                        category={card.category}
                        number={card.number}
                        exp={card.validate}
                        cod={card.code}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
};
