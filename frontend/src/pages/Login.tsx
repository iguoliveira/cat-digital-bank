import "./login.scss"
import Logo from "../assets/logo-png.png"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button, Input } from "../components/Input"
import { tryLogin } from "../fetchers/user"
import { useQuery } from "@tanstack/react-query"
import { useUserStore } from "../stores/user"
import { Notify } from "notiflix"

export const Login = () => {
    document.title = 'Login'
    const navigate = useNavigate()
    const [setUser] = useUserStore((state) => [state.setUser])
    const [inputs, setInputs] = useState({
        cpf: "",
        password: ""
    })
    const { data } = useQuery(['tryLogin', inputs.cpf || '1', inputs.password || '1'], tryLogin)

    function handleChange(event: any) {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit() {
        event?.preventDefault()
        if (data.tryLogin != 'invalid') {
            setUser(data.login[0])
            Notify.success("Usuario Logado!")
            navigate(`/user/id:${data.login[0].userAccountNumberFk}/create-card`)
        } else {
            Notify.failure('Credenciais de login invalidas!')
        }
    }

    return (
        <section className="login-content">
            <Link to='/'>
                <img src={Logo} />
            </Link>
            <form onSubmit={handleSubmit}>
                <h1 className="title">Login</h1>
                <Input spanName="CPF" inputName="cpf" type="text" placeholder="CPF" value={inputs.cpf} onChange={(event: any) => handleChange(event)} required={true} maxlength={'11'} />
                <Input spanName="Pass" inputName="password" type="password" placeholder="password" value={inputs.password} onChange={(event: any) => handleChange(event)} required={true} />
                <Button type={'submit'}>Login</Button>
            </form>
            <Link to={"/sign-up"} className="go-to-signup">Click here to Sign Up</Link>
        </section>
    )
}