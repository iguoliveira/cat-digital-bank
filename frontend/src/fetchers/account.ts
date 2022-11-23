import axios from "axios";
import { URL } from "../App";

export const postAccount = async (data: any) => {
    axios.post(`${URL}/account-register`, data).then((res) => console.log(res));
};

export const accountIsValid = async ({ queryKey }: any) => {
    const [_, accountReceiver] = queryKey;
    const res = await fetch(`${URL}/accountIsValid/${accountReceiver}`);
    return res.json();
};

export const removeFromBalance = async (data: any) => {
    const res = await axios.patch(`${URL}/transaction/remove-from-balance`, data)
}

export const addInBalance = async (data: any) => {
    const res = await axios.patch(`${URL}/transaction/add-in-balance`, data)
}

export const findMany = async ({ queryKey }: any) => {
    const [_, accountReceiver] = queryKey
    const res = await axios.get(`${URL}/user/accounts/${accountReceiver}`)
    return res.data.rows
}