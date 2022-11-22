import './pix.scss'
import Logo from '../assets/logo-png.png'
import { Link, useLoaderData } from 'react-router-dom'
import { Button, Input } from '../components/Input'
import { useState } from 'react'
import { useUserStore } from '../stores/user'
import { useMutation, useQuery } from '@tanstack/react-query'
import { postTransaction } from '../fetchers/transaction'
import { accountIsValid, addInBalance, removeFromBalance } from '../fetchers/account'
import { Notify } from 'notiflix'

export const Pix = () => {
    const [user] = useUserStore((state) => [state.user])
    const info: any = useLoaderData()

    const [inputs, setInputs] = useState({
        transactionValue: 1,
        accountSender: user?.userAccountNumberFk,
        accountReceiver: ''
    })
    const [errors, setErrors] = useState({
        accountNumber: '',
        transactionValue: ''
    })
    const { data } = useQuery(['accountIsValid', inputs.accountReceiver || '1'], accountIsValid)

    const makeTransaction = useMutation(postTransaction)
    const removeBalance = useMutation(removeFromBalance)
    const addBalance = useMutation(addInBalance, {
        onSuccess: () => {
            Notify.success('PIX Feito', { clickToClose: true, timeout: 2000 })
        }
    })

    function handleChange(event: any) {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit() {
        if (data.accountIsValid != 'invalid') {
            if (info.balance >= inputs.transactionValue) {
                setErrors({
                    transactionValue: '',
                    accountNumber: ''
                })
                makeTransaction.mutate(inputs)
                removeBalance.mutate({ valueTransfer: inputs.transactionValue, accountId: user?.userAccountNumberFk })
                addBalance.mutate({ valueTransfer: inputs.transactionValue, accountId: inputs.accountReceiver })
            } else {
                event?.preventDefault()
                setErrors({
                    transactionValue: 'NOT ENOUGH BALANCE',
                    accountNumber: ''
                })
            }
        } else {
            event?.preventDefault()
            setErrors({
                transactionValue: '',
                accountNumber: 'INVALID ACCOUNT NUMBER'
            })
        }
    }

    return (
        <section className="pix-transaction-content">
            <Link to='/'>
                <img src={Logo} />
            </Link>
            <form onSubmit={handleSubmit}>
                <h1 className="title">PIX</h1>
                <Input type='text' spanName='Receiver' inputName='accountReceiver' placeholder='Account number' value={inputs.accountReceiver} onChange={(event: any) => handleChange(event)} required={true} />
                <Input type='number' spanName='Value' inputName='transactionValue' placeholder='Value' value={inputs.transactionValue} onChange={(event: any) => handleChange(event)} required={true} />
                <Button type={'submit'}>SEND</Button>
            </form>
            {errors.transactionValue && <div className='error'>{errors.transactionValue}</div>}
            {errors.accountNumber && <div className='error'>{errors.accountNumber}</div>}
        </section>
    )
}