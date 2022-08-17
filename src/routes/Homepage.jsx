import { Navbar } from "../components/navbar/Navbar"
import HomepageImg from '/woman-homepage.jpg'

// export const Homepage = () => {
//     return (
//         <div className="h-screen bg-[url('/bg-eva-homepage.jpg')]">
//             <Navbar />
//             <div className="pt-20">
//             </div>
//         </div>
//     )
// }

export const Homepage = () => {
    return(
        <div className="h-screen">
            <Navbar />
            <div className="pt-20">
                <div>
                    opa
                </div>
                <img src={HomepageImg} />
            </div>
        </div>
    )
}