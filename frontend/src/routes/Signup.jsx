import { InputText } from "../components/input/InputText";
import { Navbar } from "../components/navbar/Navbar";

export const Signup = () => {
  return (
    <div className="h-screen bg-mainBrandColor overflow-hidden">
      <Navbar />
      <div className="h-[92%] flex flex-col justify-center items-center">
        <div className="bg-white w-80 p-8 flex flex-col justify-center items-center rounded shadow-black shadow-md">
          <div className="mb-5 font-bold uppercase text-2xl">Sign Up</div>
          <div className="flex flex-col items-center space-y-4 w-72">
            <InputText type="text" placeholder="Name" />
            <InputText type="email" placeholder="Email" />
            <InputText type="number" placeholder="CPF" />
            <div className="flex space-x-4">
              <InputText type="password" placeholder="Password" />
              <InputText type="password" placeholder="Confirm Password" />
            </div>
            <InputText type="text" placeholder="Sex" />
            <InputText type="date" />
          </div>
        </div>
      </div>
    </div>
  );
};
