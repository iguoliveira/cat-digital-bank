import { Navbar } from "../components/navbar/Navbar"
import { Container } from "../components/homepage/Container"

export const Homepage = () => {
    return (
        <div className="h-screen w-screen overflow-auto bg-mainBrandColor">
            <Navbar />                
            <Container />
        </div>
    )
}