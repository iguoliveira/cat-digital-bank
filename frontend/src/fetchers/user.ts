import axios from "axios"
const URL = "http://localhost:8000"

export const postUser = async (data: any) => {
    axios.post(`${URL}/user-register`, data)
        .then((res) => console.log(res))
}