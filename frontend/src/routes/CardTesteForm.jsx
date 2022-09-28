import { useEffect } from "react"
import { useState } from "react"
import { POST } from "../services/api"
import { getSession } from "../services/session"

export const CardTesteForm = () => {
    const [number, setNumber] = useState("")
    const [type, setType] = useState("")
    const [val, setVal] = useState(new Date())
    const [code, setCode] = useState("")
    const [pass, setPass] = useState("")

    useEffect(() => {
        console.log(getSession().id)
        console.log(val)
    })

    let data = {
        user: getSession().id,
        number: number,
        type: type,
        validate: val,
        code: code,
        password: pass,
    }

    const addCard = () => {
        event.preventDefault()
        POST("card/register", data)
    }
    return (
        <form onSubmit={addCard}>
            <input value={number} onChange={(evt) => setNumber(evt.target.value)} placeholder="Number" />
            <input value={type} onChange={(evt) => setType(evt.target.value)} placeholder="Type" />
            <input type="date" value={val} onChange={(evt) => setVal(evt.target.value)} placeholder="Validate" />
            <input value={code} onChange={(evt) => setCode(evt.target.value)} placeholder="Code" />
            <input type="password" value={pass} onChange={(evt) => setPass(evt.target.value)} placeholder="Password" />
            <button className="bg-black text-white p-1 rounded hover:bg-gray-800">Submit</button>
        </form>
    )
}