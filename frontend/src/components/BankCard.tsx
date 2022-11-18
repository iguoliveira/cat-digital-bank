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
        <div className="bank-card-back-content">
            <span className="copyright-content">
                made by @CAT Bank
            </span>
            <div className="colorful-line">&#8203;</div>
            <div className="card-content-container">
                <div className="card-plan-container">
                    <div className="plan-content">{plan}</div>
                    <div className="plan-square">
                        &#8203;
                    </div>
                </div>
                <div className="card-number-space">{number}</div>
                <div className="crucial-data-container">
                    <div>
                        <div className="expiration-ccv-container">
                            <div className="data">
                                <span className="title">exp:</span>
                                <span>{expiration}</span>
                            </div>
                            <div className="data">
                                <span className="title">ccv:</span>
                                <span>{ccv}</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={Mastercard} className="mastercard-logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}