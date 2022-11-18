import axios from "axios";
import { URL } from "../App";

export const postAccount = async (data: any) => {
    axios.post(`${URL}/account-register`, data).then((res) => console.log(res));
};