import { Navbar } from "../components/navbar/Navbar"
import { Container } from "../components/homepage/Container"

export const Homepage = () => {
    // var jsonData = {
    //     'name': 'kmudo', 'sex': 's', 'email': 'sim@sim.com', 'birthDay': 23, 'cpf': '3132131', 'password': '3131232'
    // }

    const postData = () => {
        fetch("http://localhost:3000/user/register", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(jsonData)
        })
            .then((res) => res.json())
            .then(console.log("SIM"))
            .catch((err) => console.log(err))
    }

    return (
        <div className="h-screen w-screen overflow-auto bg-mainBrandColor">
            <Navbar />
            <Container />
        </div>
    )
}