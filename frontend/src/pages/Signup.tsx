import './signup.scss'
import Logo from '../assets/logo-png.png'
import { Button, Input, Select } from '../components/Input'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from "axios"

export const Signup = () => {
    document.title = "Sign Up"
    const client = useQueryClient()
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        cpf: "",
        birthDay: new Date(),
        sex: "F",
        password: ""
    })
    const mutation = useMutation((data: {}) => axios.post('http://localhost:3000/user/register', { data }).then((res) => console.log(res)), {
        onSuccess: () => {
            client.invalidateQueries()
        }
    })

    function handleChange(event: any) {
        setInputs({
            ...inputs,
            [event.target.name]: event?.target.value
        })
    }

    function handleSubmit() {
        event?.preventDefault()
        console.log(inputs)
        mutation.mutate(inputs)
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