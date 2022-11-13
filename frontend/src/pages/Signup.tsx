import './signup.scss'
import Logo from '../assets/logo-png.png'
import { Button, Input, Select } from '../components/Input'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export const Signup = () => {
    document.title = "Sign Up"
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
        cpf: "",
        birthDay: "",
        sex: ""
    })

    function handleChange(event: any) {
        setInputs({
            ...inputs,
            [event.target.name]: event?.target.value
        })
    }

    function handleSubmit() {
        event?.preventDefault()
    }

    return (
        <section className='signup-content'>
            <Link to='/'>
                <img src={Logo} />
            </Link>
            <form onSubmit={handleSubmit}>
                <h1 className='title'>Sign Up</h1>
                <Input spanName="Name" inputName="name" type='text' placeholder='name' value={inputs.name} onChange={(event: any) => handleChange(event)} />
                <Input spanName="Email" inputName="email" type='email' placeholder='email' value={inputs.email} onChange={(event: any) => handleChange(event)} />
                <Input spanName="Pass" inputName="password" type="password" placeholder="password" value={inputs.password} onChange={(event: any) => handleChange(event)} />
                <Input spanName="CPF" inputName="cpf" type='text' placeholder='CPF' value={inputs.cpf} onChange={(event: any) => handleChange(event)} />
                <Input spanName="Birth" inputName="birthDay" type='date' placeholder='Birth Day' value={inputs.birthDay} onChange={(event: any) => handleChange(event)} />
                <Select>
                    <option>Male</option>
                    <option>Female</option>
                </Select>
                <Button type={'submit'}>Sign Up</Button>
            </form>
            <Link to='/login' className='go-to-login'>Go to login</Link>
        </section>
    )
}