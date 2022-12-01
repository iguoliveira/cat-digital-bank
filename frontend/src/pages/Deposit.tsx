import './deposit.scss'
import Logo from '../assets/logo-png.png'
import { Link } from 'react-router-dom'
import { Button, Input } from '../components/Input'
import { useState } from 'react'
import { useUserStore } from '../stores/user'
import { useMutation } from '@tanstack/react-query'
import { postTransaction } from '../fetchers/transaction'
import { addInBalance } from '../fetchers/account'
import { Notify } from 'notiflix'

export const Deposit = () => {
    const [user] = useUserStore((state) => [state.user])

    const [inputs, setInputs] = useState({
        transactionValue: 1,
        transactionType: 'deposit',
        accountSender: user?.userAccountNumberFk,
        accountReceiver: user?.userAccountNumberFk
    })

    const makeTransaction = useMutation(postTransaction, {
        onSuccess: () => {
            Notify.success(`R$ ${inputs.transactionValue} depositado com sucesso`, { timeout: 2000 });
        }
    })
    const addBalance = useMutation(addInBalance)

    function handleChange(event: any) {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit() {
        event?.preventDefault()
        makeTransaction.mutate(inputs)
        addBalance.mutate({ valueTransfer: inputs.transactionValue, accountId: inputs.accountReceiver })
    }

    return (
        <section className="deposit-transaction-content">
            <Link to='/'>
                <img src={Logo} />
            </Link>
            <form onSubmit={handleSubmit}>
                <h1 className="title">DEPOSIT</h1>
                <Input type='number' spanName='Value' inputName='transactionValue' placeholder='Value' value={inputs.transactionValue} onChange={(event: any) => handleChange(event)} required={true} />
                <Button type={'submit'}>DO</Button>
            </form>
        </section>
    )
}