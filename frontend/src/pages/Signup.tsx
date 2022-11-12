import './signup.scss'
import Logo from '../assets/logo-png.png'
import { Input } from '../components/Input'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export const Signup = () => {
    document.title = "Sign Up"
    const [inputs, setInputs] = useState({
        name: ''
    })

    function handleChange(event: any) {
        setInputs({
            ...inputs,
            [event.target.name]: event?.target.value
        })
    }

    return (
        <section className='signup-content'>
            <Link to='/'>
                <img src={Logo} />
            </Link>
            <form>
                <Input spanName="Name" inputName="name" type='text' placeholder='name' value={inputs.name} onChange={(event: any) => handleChange(event)} />
            </form>
        </section>
    )
}