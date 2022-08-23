import { Navbar } from "../components/navbar/Navbar"
import { Container } from "../components/homepage/initial_content/container/Container"

export const Homepage = () => {
    return (
        <div className="h-screen">
            <Navbar />                
            <Container />
        </div>
    )
}