import './bankCard.scss'
import Mastercard from '../assets/mastercard.png'

interface BankCardFrontProps {
    name: string
}

interface BankCardBackProps {
    plan: string
    number: string
    expiration: string
    ccv: string
}

export const BankCardFront = ({ name }: BankCardFrontProps) => {
    return (
        <div className="bank-card-front-content">
            <div className="chip-name-container">
                <div className="chip-form">
                    <span className="normal-square-chip top-left-square-chip">&#8203;</span>
                    <span className="normal-square-chip">&#8203;</span>
                    <span className="normal-square-chip">&#8203;</span>
                    <span className="normal-square-chip">&#8203;</span>
                    <span className="normal-square-chip">&#8203;</span>
                    <span className="normal-square-chip">&#8203;</span>
                    <span className="normal-square-chip">&#8203;</span>
                    <span className="normal-square-chip bottom-right-square-chip">&#8203;</span>
                </div>
                <div className="name-space">
                    {name}
                </div>
            </div>
            <div className="mastercard-logo-container">
                <img src={Mastercard} className="mastercard-logo" />
            </div>
        </div>
    )
}

export const BankCardBack = ({ plan, ccv, expiration, number }: BankCardBackProps) => {
    return (
        <div className="bg-cardTheme-1000 rounded pb-4 text-white h-48 shadow-black shadow-sm w-[370px]">
            <span className="text-[5px] flex item-center ml-2">
                made by @CAT Bank
            </span>
            <div className="bg-cardTheme-500 py-2">&#8203;</div>
            <div className="px-4">
                <div className="w-16 flex flex-col items-center mt-2 space-y-1">
                    <div className="text-xs uppercase">{plan == "P" ? "Platinum" : plan == "G" ? "Gold" : "Silver"}</div>
                    <div className="bg-cardTheme-500 rounded-xl w-10 px-8 py-1">
                        &#8203;
                    </div>
                </div>
                <div className="flex space-x-2 text-lg mt-4 font-bold">{number}</div>
                <div className="flex items-center justify-between">
                    <div>
                        <div className="flex space-x-10">
                            <div className="flex items-center space-x-1">
                                <span className="text-[10px]">exp:</span>
                                <span>{expiration}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <span className="text-[10px]">ccv:</span>
                                <span>{ccv}</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={Mastercard} className="w-12" />
                    </div>
                </div>
            </div>
        </div>
    )
}