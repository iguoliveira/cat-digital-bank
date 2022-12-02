import './createCard.scss'
import Logo from '../assets/logo-png.png'
import { useMutation } from '@tanstack/react-query'
import { Notify } from 'notiflix'
import { useEffect, useState } from 'react'
import { Link, useLoaderData, useNavigate } from 'react-router-dom'
import { Button, Input } from '../components/Input'
import { postCard } from '../fetchers/card'
import { useUserStore } from '../stores/user'
import { notifyStyle } from '../App'

export const CreateCard = () => {
    const data: any = useLoaderData()
    const navigate = useNavigate()
    const [user] = useUserStore((state) => [state.user])

    const [inputs, setInputs] = useState({
        cardNumber:
            parseInt((Math.random() * (9999 - 1000 + 1) + 1000).toString()).toString() +
            " " +
            parseInt((Math.random() * (9999 - 1000 + 1) + 1000).toString()).toString() +
            " " +
            parseInt((Math.random() * (9999 - 1000 + 1) + 1000).toString()).toString() +
            " " +
            parseInt((Math.random() * (9999 - 1000 + 1) + 1000).toString()).toString(),
        ccv: parseInt((Math.random() * (999 - 100 + 1) + 100).toString()).toString(),
        expirationMonth: parseInt((Math.random() * (12 - 1 + 1) + 1).toString()).toString(),
        expirationYear: parseInt((Math.random() * (32 - 28 + 1) + 28).toString()).toString(),
        plan: 'platinum',
        type: 'credit',
        cardPassword: '',
        cardAccountNumberFk: user?.userAccountNumberFk
    })
    const mutation = useMutation(postCard, {
        onSuccess: () => {
            Notify.success('Card Created!', notifyStyle)
            navigate("/")
        }
    })

    useEffect(() => {
        if (data.card.length > 0) {
            navigate(`/user/id:${data.params.id}/profile`)
        }
    }, [])

    function handleChange(event: any) {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit() {
        event?.preventDefault()
        mutation.mutate(inputs)
    }

    return (
        <section className="create-card-content">
            <Link to='/'>
                <img src={Logo} />
            </Link>
            <form onSubmit={handleSubmit}>
                <h1 className="title">Create Card</h1>
                <Input spanName="Pass" inputName="cardPassword" type="text" placeholder="card password" value={inputs.cardPassword} onChange={(event: any) => handleChange(event)} required={true} />
                <Button type={'submit'}>Create Card</Button>
            </form>
        </section>
    )
}