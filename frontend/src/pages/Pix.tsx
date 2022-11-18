import './pix.scss'
import Logo from '../assets/logo-png.png'
import { Link } from 'react-router-dom'
import { Button, Input } from '../components/Input'
import { useState } from 'react'

export const Pix = () => {
    const [inputs, setInputs] = useState({
        value: 0,
    })

    function handleChange(event: any) {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit() {
        event?.preventDefault()
        console.log(inputs)
    }

    return (
        <section className="pix-transaction-content">
            <Link to='/'>
                <img src={Logo} />
            </Link>
            <form onSubmit={handleSubmit}>
                <h1 className="title">PIX</h1>
                <Input type='number' spanName='Value' inputName='value' placeholder='Value' value={inputs.value} onChange={(event: any) => handleChange(event)} required={true} />
                <Button type={'submit'}>SEND</Button>
            </form>
        </section>
    )
}