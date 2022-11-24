import axios from "axios";
import { URL } from "../App";

export const postUser = async (data: any) => {
  axios.post(`${URL}/user-register`, data).then((res) => console.log(res));
};

export const tryLogin = async ({ queryKey }: any) => {
  const [_, cpf, password] = queryKey;
  const res = await fetch(`${URL}/tryLogin/${cpf}/${password}`);
  return res.json();
};

export const findOneUser = async ({ queryKey }: any) => {
  const [_, id] = queryKey;
  const res = await fetch(`${URL}/user/${id}`);
  return res.json();
};
