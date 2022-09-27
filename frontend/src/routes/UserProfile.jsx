import { useState, useEffect } from "react";
import { GET } from "../services/api";
import { useParams } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import { CardBack } from "../components/bankCard/CardBack";
import { CardFront } from "../components/bankCard/CardFront";

export const UserProfile = () => {
  const [apiresult, setApiresult] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    GET("user/all").then((res) => {
      setApiresult(res);
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
                  <CardFront name={item.name} />
                  <CardBack
                    type={"gold"}
                    number={"5612 6058 1504 0495"}
                    val={"05/25"}
                    cod={"561"}
                  />
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
};
