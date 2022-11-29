import './profile.scss'
import Banner from '../assets/banner-wallpaper.jpg'
import ProfilePhoto from '../assets/user-profile-photo.png'
import Show from '../assets/visible-icon.png'
import Hide from '../assets/hide-icon.png'
import { useLoaderData, useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react'
import { useUserStore } from '../stores/user'
import { getUserTransactions } from '../fetchers/transaction'
import { useQuery } from '@tanstack/react-query'
import { Card } from 'react-pay-card'

export const Profile = () => {
    document.title = 'User Profile'
    const [user] = useUserStore((state) => [state.user])
    const [visible, isVisible] = useState(false)
    const [isCpfVisible, setCpfVisible] = useState(false)
    const info: any = useLoaderData()
    const navigate = useNavigate()


    useEffect(() => {
        if (!user) navigate('/')
    }, [user])

    const { data, isLoading } = useQuery(['transactions', user?.userAccountNumberFk], getUserTransactions)

    return (
        <section className='user-profile-content'>
            <div className='core-data'>
                <article className='user-photo-container'>
                    <img src={Banner} className="banner" />
                    <img src={ProfilePhoto} className="profile-photo" />
                </article>
                <article className='name-balance-container'>
                    <div className='user-name'><span>{info.name}</span></div>
                    <div className='balance'>
                        <div className='balance-data'>
                            <span className='title'>Balance</span>
                            <span className='balance-value'>R$ {visible ? info.balance : ('-'.repeat(info.balance.toString().split('').length))}</span>
                        </div>
                        <img className='is-show' src={!visible ? Show : Hide} onClick={() => isVisible(!visible)} />
                    </div>
                </article>
            </div>
            <article className='other-data'>
                <article className='user-data-container'>
                    <div className='data-box'>
                        <span className='title'>Email: </span>
                        <span className='data'>{info.email}</span>
                    </div>
                    <div className='data-box'>
                        <span className='title'>Account Number: </span>
                        <span className='clickable data'>{'*'.repeat(info.accountId.split("").length - 1) + info.accountId.split("").slice(-1)}</span>
                    </div>
                    <div className='data-box'>
                        <span className='title'>CPF: </span>
                        <span className='clickable data' onClick={() => setCpfVisible(!isCpfVisible)}>{isCpfVisible ? info.cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4") : '*'.repeat(info.cpf.split('').length - 2) + '-' + info.cpf.split('')[info.cpf.split('').length - 1] + info.cpf.split('')[info.cpf.split('').length - 2]}</span>
                    </div>
                    <div className='data-box'>
                        <span className='title'>Age: </span>
                        <span className='data'>{info.age}</span>
                    </div>
                    <div className='data-box'>
                        <span className='title'>Sex: </span>
                        <span className='data'>{info.sex}</span>
                    </div>
                </article>
                <div className='transactions-container'>
                    {!isLoading && (
                        data.map((item: any, index: any) => {
                            return (
                                <div className='transaction' key={index}>
                                    <div className='send-received'>{item.transactionType == 'pix' ? item.accountSender == user?.userAccountNumberFk ? `To ${item.accountReceiver}` : `From ${item.accountSender}` : `${user?.userAccountNumberFk}`}</div>
                                    <div className='value'>R$ {item.transactionValue}</div>
                                    <div className='verb'>{item.transactionType == 'pix' ? item.accountSender == user?.userAccountNumberFk ? (<span className='sent'>enviado</span>) : (<span className='received'>recebido</span>) : item.transactionType == 'deposit' ? (<span className='received'>depositado</span>) : (<span className='sent'>transferido</span>)}</div>
                                    <div className='type'>{item.transactionType}</div>
                                </div>
                            )
                        })
                    )}
                </div>
                <div className='card-container'>
                    <Card cardCvv={info.ccv} cardHolder={info.name} cardMonth={info.expirationMonth} cardNumber={info.cardNumber} cardYear={info.expirationYear} />
                </div>
            </article>
        </section>
    )
}