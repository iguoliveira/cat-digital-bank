import './signup.scss'
import Logo from '../assets/logo-png.png'
import { Button, Input, Select } from '../components/Input'
import { Link, useLoaderData, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { postUser } from '../fetchers/user'
import { postAccount } from '../fetchers/account'
import { Notify } from 'notiflix'
import { notifyStyle } from '../App'

export const Signup = () => {
    document.title = "Sign Up"
    const navigate = useNavigate()
    const num: any = useLoaderData()

    const account = {
        accountId: num,
        balance: 5000.00,
    }
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        cpf: "",
        age: 18,
        sex: "male",
        password: "",
        userAccountNumberFk: account.accountId
    })

    const accountMutation = useMutation(postAccount)
    const mutation = useMutation(postUser, {
        onSuccess: () => {
            Notify.success('Conta Criada', notifyStyle)
            navigate('/login')
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
        accountMutation.mutate(account)
        mutation.mutate(inputs)
    }

    return (
        <section className='signup-content'>
            <Link to='/'>
                <img src={Logo} />
            </Link>
            <form onSubmit={handleSubmit}>
                <h1 className='title'>Sign Up</h1>
                <Input spanName="Name" inputName="name" type='text' placeholder='name' value={inputs.name} onChange={(event: any) => handleChange(event)} required={true} />
                <Input spanName="Email" inputName="email" type='email' placeholder='email' value={inputs.email} onChange={(event: any) => handleChange(event)} required={true} />
                <Input spanName="Pass" inputName="password" type="password" placeholder="password" value={inputs.password} onChange={(event: any) => handleChange(event)} required={true} />
                <Input spanName="CPF" inputName="cpf" type='text' placeholder='CPF' value={inputs.cpf} onChange={(event: any) => handleChange(event)} required={true} maxlength='11' />
                <Input spanName="Age" inputName="age" type='number' placeholder='Age' value={inputs.age} onChange={(event: any) => handleChange(event)} required={true} />
                <Select id='sex' inputName="sex" value={inputs.sex} onChange={(event: any) => handleChange(event)}>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                </Select>
                <Button type={'submit'}>Sign Up</Button>
            </form>
            <Link to='/login' className='go-to-login'>Go to login</Link>
        </section>
    )
}