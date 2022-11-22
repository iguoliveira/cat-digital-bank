import axios from "axios"
import { URL } from "../App"

export const postTransaction = async (data: any) => {
    axios.post(`${URL}/transaction-register`, data)
}

export const getUserTransactions = async ({ queryKey }: any) => {
    const [_, id] = queryKey
    const res = await axios.get(`${URL}/user/${id}/transactions`)
    return res.data.rows
}