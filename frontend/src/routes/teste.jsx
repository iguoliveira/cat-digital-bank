import { useState } from "react";
import { AUTH, POST } from "../services/api";
import { Link, useNavigate } from "react-router-dom";
import { InputText } from "../components/input/InputText";
import { Notify } from "notiflix";
import { Navbar } from "../components/navbar/Navbar";
import { Button } from "../components/input/Button";
import { FormCard } from "../components/FormCard";
import { setSession, getSession } from "../services/session";
import { useEffect } from "react";
import { POSTIMAGE } from '../services/api'

export const Teste = () => {
  const [file, setSelectedFile] = useState(null);

  const testeImage = () => {
    event.preventDefault()
    POSTIMAGE('image/upload', { file:file })
  }

  return (
    <div className="h-screen bg-mainBrandColor-1000 overflow-hidden">
      <FormCard title="LOGIN">
        <form
          className="flex flex-col items-center space-y-4 w-72"
          onSubmit={testeImage}
        >
          <input
            type="file"
            onChange={(e) => setSelectedFile(e.target.files[0])}
          />

          <input type="submit" />
        </form>
      </FormCard>
    </div>
  );
};
