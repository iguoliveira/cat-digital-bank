import './profile.scss'
import Banner from '../assets/banner-wallpaper.jpg'
import ProfilePhoto from '../assets/user-profile-photo.png'
import Show from '../assets/visible-icon.png'
import Hide from '../assets/hide-icon.png'
import { useLoaderData, useNavigate } from "react-router-dom"
import { BankCardBack, BankCardFront } from "../components/BankCard"
import { useEffect, useState } from 'react'
import { useUserStore } from '../stores/user'

export const Profile = () => {
    document.title = 'User Profile'
    const [user] = useUserStore((state) => [state.user])
    const [visible, isVisible] = useState(false)
    const info: any = useLoaderData()
    const navigate = useNavigate()

    useEffect(() => {
        if (!user) navigate('/')
    }, [user])

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
                            <span className='data'>{info.accountNumber}</span>
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
                <article className='bank-card-container'>
                    <div>
                        <BankCardFront name={info.name} />
                        <BankCardBack number={info.cardNumber} expiration={info.expiration} plan={info.plan} ccv={info.ccv} />
                    </div>
                </article>
            </div>
        </section>
    )
}