import './profile.scss'
import Banner from '../assets/banner-wallpaper.jpg'
import ProfilePhoto from '../assets/user-profile-photo.png'
import Show from '../assets/visible-icon.png'
import Hide from '../assets/hide-icon.png'
import { useQuery } from "@tanstack/react-query"
import { useLoaderData } from "react-router-dom"
import { BankCardBack, BankCardFront } from "../components/BankCard"
import { findOneUser } from "../fetchers/user"
import { useEffect, useState } from 'react'

export const Profile = () => {
    document.title = 'User Profile'
    const [visible, isVisible] = useState(false)
    const info: any = useLoaderData()

    return (
        <section className='user-profile-content'>
            <article className='user-photo-container'>
                <img src={Banner} className="banner" />
                <img src={ProfilePhoto} className="profile-photo" />
            </article>
            <article className='user-data-container'>
                <span>{info.name}</span>
                <div>
                    <span>R$ {visible ? info.balance : '-------'}</span>
                    <img src={!visible ? Show : Hide} onClick={() => isVisible(!visible)} />
                </div>
            </article>
            <article className='bank-card-container'>
                <div>
                    <BankCardFront name={info.name} />
                    <BankCardBack number={info.cardNumber} expiration={info.expiration} plan={info.plan} ccv={info.ccv} />
                </div>
            </article>
        </section>
    )
}