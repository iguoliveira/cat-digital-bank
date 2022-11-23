import './profile.scss'
import Banner from '../assets/banner-wallpaper.jpg'
import ProfilePhoto from '../assets/user-profile-photo.png'
import Show from '../assets/visible-icon.png'
import Hide from '../assets/hide-icon.png'
import { useLoaderData, useNavigate } from "react-router-dom"
import { BankCardBack, BankCardFront } from "../components/BankCard"
import { useEffect, useState } from 'react'
import { useUserStore } from '../stores/user'
import { getUserTransactions } from '../fetchers/transaction'
import { useQuery } from '@tanstack/react-query'
import { Card } from 'react-pay-card'

export const Profile = () => {
    document.title = 'User Profile'
    const [user] = useUserStore((state) => [state.user])
    const [visible, isVisible] = useState(false)
    const info: any = useLoaderData()
    const navigate = useNavigate()


    useEffect(() => {
        if (!user) navigate('/')
    }, [user])

    const { data, isLoading } = useQuery(['transactions', user?.userAccountNumberFk], getUserTransactions)

    return (
        <section className='user-profile-content'>
            <article className='user-photo-container'>
                <img src={Banner} className="banner" />
                <img src={ProfilePhoto} className="profile-photo" />
            </article>
            <div>
                <article className='user-data-container'>
                    <div className='name-balance-data'>
                        <span>{info.name}</span>
                        <div className='balance'>
                            <span>R$ {visible ? info.balance : ('-'.repeat(info.balance.toString().split('').length))}</span>
                            <img src={!visible ? Show : Hide} onClick={() => isVisible(!visible)} />
                        </div>
                    </div>
                    <div className='user-data'>
                        <div>
                            <span className='title'>Email: </span>
                            <span className='data'>{info.email}</span>
                        </div>
                        <div>
                            <span className='title'>Account Number: </span>
                            <span className='data'>{info.accountId}</span>
                        </div>
                        <div>
                            <span className='title'>CPF: </span>
                            <span className='data'>{info.cpf}</span>
                        </div>
                        <div>
                            <span className='title'>Age: </span>
                            <span className='data'>{info.age}</span>
                        </div>
                        <div>
                            <span className='title'>Sex: </span>
                            <span className='data'>{info.sex}</span>
                        </div>
                    </div>
                </article>
                <article className='bank-card-transactions-container'>
                    <div className='card-container'>
                        <Card cardCvv={info.ccv} cardHolder={info.name} cardMonth={info.expirationMonth} cardNumber={info.cardNumber} cardYear={info.expirationYear} />
                    </div>
                    <div className='transactions-container'>
                        {!isLoading && (
                            data.map((item: any, index: any) => {
                                return (
                                    <div className='transaction' key={index}>
                                        <div className='send-received'>{item.accountSender == user?.userAccountNumberFk ? `To ${item.accountReceiver}` : `From ${item.accountSender}`}</div>
                                        <div className='value'>R$ {item.transactionValue}</div>
                                        <div className='verb'>{item.accountSender == user?.userAccountNumberFk ? (<span className='sent'>enviado</span>) : (<span className='received'>recebido</span>)}</div>
                                    </div>
                                )
                            })
                        )}
                    </div>
                </article>
            </div>
        </section>
    )
}