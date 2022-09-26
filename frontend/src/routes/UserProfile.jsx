import { useState, useEffect } from "react";
import { GET } from "../services/api";
import { useParams } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import Mastercard from "/mastercard.png";

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
              <div className="mt-4">
                <div className="font-bold text-xl">{item.name}</div>
                <div>Sex: {item.sex == "M" ? "Male" : "Female"}</div>
                <div>
                  Birth Day: {item.birthDay.split("T")[0]},{" "}
                  {new Date().getFullYear() -
                    parseInt(item.birthDay.split("-")[0])}{" "}
                  y'o
                </div>
              </div>
              {/* Card */}
              <div className="bg-cardTheme-1000 rounded pb-4 text-white">
                <span className="text-[5px] flex item-center ml-2">
                  made by @CAT Bank
                </span>
                <div className="bg-cardTheme-500 py-2">&#8203;</div>
                <div className="px-4">
                  <div className="w-16  bg-pink-500 flex flex-col">
                    <div>platinum</div>
                    <div className="bg-cardTheme-500 rounded-xl w-10 px-6 py-1">
                      &#8203;
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <span>5023</span>
                    <span>9334</span>
                    <span>3764</span>
                    <span>9846</span>
                  </div>
                  <div className="flex items-center space-x-20">
                    <div>
                      <div className="flex space-x-10">
                        <div className="flex items-center space-x-1">
                          <span className="text-[10px]">val:</span>
                          <span>02/20</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <span className="text-[10px]">CCV:</span>
                          <span>113</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <img src={Mastercard} className="w-12" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
};
