import './profile.scss'
import Banner from '../assets/banner-wallpaper.jpg'
import ProfilePhoto from '../assets/user-profile-photo.png'
import Show from '../assets/visible-icon.png'
import Hide from '../assets/hide-icon.png'
import { useQuery } from "@tanstack/react-query"
import { useLoaderData } from "react-router-dom"
import { BankCardBack, BankCardFront } from "../components/BankCard"
import { findOneUser } from "../fetchers/user"
import { useState } from 'react'

export const Profile = () => {
    document.title = 'User Profile'
    const [visible, isVisible] = useState(false)
    const card: any = useLoaderData()
    const { data, isLoading, error } = useQuery(['find-one-user', card.userFk], findOneUser)

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error in user's data GET!</div>;
    }

    return (
        <section className='user-profile-content'>
            <article className='user-photo-container'>
                <img src={Banner} className="banner" />
                <img src={ProfilePhoto} className="profile-photo" />
            </article>
            <article className='user-data-container'>
                <span>Igor Oliveira Rodrigues</span>
                <div>
                    <span>R$ {visible ? '2.500,50' : '--------'}</span>
                    <img src={!visible ? Show : Hide} onClick={() => isVisible(!visible)} />
                </div>
            </article>
            <article className='bank-card-container'>
                <div>
                    <BankCardFront name={data.name} />
                    <BankCardBack number={card.number} expiration={card.expiration} plan={card.plan} ccv={card.ccv} />
                </div>
            </article>
        </section>
    )
}