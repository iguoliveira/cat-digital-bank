import axios from "axios"
import { URL } from "../App"

export const postTransaction = async (data: any) => {
    axios.post(`${URL}/transaction-register`, data)
}