import { useQuery } from "@tanstack/react-query"
import { useLoaderData } from "react-router-dom"
import { BankCardBack, BankCardFront } from "../components/BankCard"
import { findOneUser } from "../fetchers/user"

export const Profile = () => {
    document.title = 'User Profile'
    const card: any = useLoaderData()
    const { data, isLoading, error } = useQuery(['find-one-user', card.userFk], findOneUser)

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error in user's data GET!</div>;
    }

    return (
        <div>
            <BankCardFront name={data.name} />
            <BankCardBack number={card.number} expiration={card.expiration} plan={card.plan} ccv={card.ccv} />
        </div>
    )
}