import "./login.scss"
import Logo from "../assets/logo-png.png"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Button, Input } from "../components/Input"

export const Login = () => {
    const [inputs, setInputs] = useState({
        cpf: "",
        password: ""
    })

    function handleChange(event: any) {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value
        })
    }

    return (
        <section className="login-content">
            <Link to='/'>
                <img src={Logo} />
            </Link>
            <form>
                <h1 className="title">Login</h1>
                <Input spanName="CPF" inputName="cpf" type="text" placeholder="CPF" value={inputs.cpf} onChange={(event: any) => handleChange(event)} />
                <Input spanName="Pass" inputName="password" type="text" placeholder="password" value={inputs.password} onChange={(event: any) => handleChange(event)} />
                <Button type={'submit'}>Login</Button>
            </form>
            <Link to={"/sign-up"} className="go-to-signup">Click here to Sign Up</Link>
        </section>
    )
}