import './pix.scss'
import Logo from '../assets/logo-png.png'
import { Link, useLoaderData, useNavigate } from 'react-router-dom'
import { Button, Input } from '../components/Input'
import { useEffect, useState } from 'react'
import { useUserStore } from '../stores/user'
import { useMutation, useQuery } from '@tanstack/react-query'
import { postTransaction } from '../fetchers/transaction'
import { accountIsValid, addInBalance, findMany, removeFromBalance } from '../fetchers/account'
import { Notify } from 'notiflix'

export const Pix = () => {
    const [user] = useUserStore((state) => [state.user])
    const info: any = useLoaderData()
    const navigate = useNavigate()

    const [inputs, setInputs] = useState({
        transactionValue: 1,
        transactionType: 'pix',
        accountSender: user?.userAccountNumberFk,
        accountReceiver: ''
    })

    const [errors, setErrors] = useState({
        accountNumber: '',
        transactionValue: '',
        transactionEqualOrBelowZero: ''
    })

    const { data: isValid } = useQuery(['accountIsValid', inputs.accountReceiver || '1'], accountIsValid)
    const { data: accounts, isLoading } = useQuery(['fetchAllAccounts', inputs.accountReceiver || '1111111', user?.userAccountNumberFk], findMany)

    const makeTransaction = useMutation(postTransaction)
    const removeBalance = useMutation(removeFromBalance)
    const addBalance = useMutation(addInBalance)

    useEffect(() => {
        if (!user) navigate('/')
    })

    function handleChange(event: any) {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value
        })
    }

    function autocompleteInsertion(data: string) {
        setInputs({
            ...inputs,
            accountReceiver: data
        })
    }

    function handleSubmit() {
        if (inputs.transactionValue > 0) {
            if (isValid.accountIsValid != 'invalid') {
                if (info.balance >= inputs.transactionValue) {
                    setErrors({
                        transactionValue: '',
                        accountNumber: '',
                        transactionEqualOrBelowZero: ''
                    })
                    makeTransaction.mutate(inputs)
                    removeBalance.mutate({ valueTransfer: inputs.transactionValue, accountId: user?.userAccountNumberFk })
                    addBalance.mutate({ valueTransfer: inputs.transactionValue, accountId: inputs.accountReceiver })
                } else {
                    event?.preventDefault()
                    setErrors({
                        transactionValue: 'NOT ENOUGH BALANCE',
                        accountNumber: '',
                        transactionEqualOrBelowZero: ''
                    })
                }
            } else {
                event?.preventDefault()
                setErrors({
                    transactionValue: '',
                    accountNumber: 'INVALID ACCOUNT NUMBER',
                    transactionEqualOrBelowZero: ''
                })
            }
        } else {
            event?.preventDefault()
            setErrors({
                transactionValue: '',
                accountNumber: '',
                transactionEqualOrBelowZero: "VALUE CANNOT BE EQUAL TO OR BELOW '0'"
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
                <Input type='number' spanName='Value' inputName='transactionValue' placeholder='Value' value={inputs.transactionValue} onChange={(event: any) => handleChange(event)} required={true} />
                <div className='account-autocomplete'>
                    <Input type='text' spanName='Receiver' inputName='accountReceiver' placeholder='Account number' value={inputs.accountReceiver} onChange={(event: any) => handleChange(event)} required={true} autoComplete={'off'} />
                    {!isLoading && inputs.accountReceiver.split('').length < 6 && accounts.map((item: any, index: any) => {
                        return <button key={index} className="accounts-items" onClick={() => { autocompleteInsertion(item.accountId) }}>{item.accountId}</button>
                    })}
                </div>
                <Button type={'submit'}>SEND</Button>
            </form>
            {errors.transactionValue && <div className='error'>{errors.transactionValue}</div>}
            {errors.accountNumber && <div className='error'>{errors.accountNumber}</div>}
            {errors.transactionEqualOrBelowZero && <div className='error'>{errors.transactionEqualOrBelowZero}</div>}
        </section>
    )
}