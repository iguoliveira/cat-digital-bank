import { useLoaderData } from "react-router-dom"
import { BankCardBack, BankCardFront } from "../components/BankCard"

export const Profile = () => {
    const data: any = useLoaderData()

    function printLoader() {
        console.log(data[0])
    }

    return (
        <div>
            <button onClick={printLoader}>CLICK</button>
            <BankCardFront name={'Igor Oliveira Rodrigues'} />
            <BankCardBack number={data[0].number} expiration={data[0].expiration} plan={data[0].plan} ccv={data[0].ccv} />
        </div>
    )
}