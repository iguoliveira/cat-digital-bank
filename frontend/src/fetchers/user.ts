import axios from "axios"
const URL = "http://localhost:8000"

export const postUser = async (data: any) => {
    axios.post(`${URL}/user-register`, data)
        .then((res) => console.log(res))
}

export const tryLogin = async ({ queryKey }: any) => {
    const [_, cpf, password] = queryKey
    const res = await fetch(`${URL}/tryLogin/${cpf}/${password}`);
    return res.json();
}