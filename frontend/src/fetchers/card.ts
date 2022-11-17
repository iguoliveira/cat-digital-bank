import axios from "axios"
import { URL } from "../App"

export const postCard = async (data: any) => {
    axios.post(`${URL}/card-register`, data)
        .then((res) => console.log(res))
}