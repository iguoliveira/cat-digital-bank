import { Navbar } from "../components/navbar/Navbar"
import HomepageImg from '/woman-homepage.jpg'
import { Card } from "../components/homepage/card/Card"

export const Homepage = () => {
    return (
        <div className="h-screen">
            <Navbar />
            <div className="pt-20 flex">
                <div className="w-1/2 flex justify-center items-center">
                    <Card />
                </div>
                <div>
                    <img src={HomepageImg} />
                </div>
            </div>
        </div>
    )
}