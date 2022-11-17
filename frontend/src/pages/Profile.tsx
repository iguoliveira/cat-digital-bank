import { useLoaderData } from "react-router-dom"

export const Profile = () => {
    const data = useLoaderData()

    function printLoader() {
        console.log(data)
    }

    return (
        <div>
            <button onClick={printLoader}>CLICK</button>
        </div>
    )
}