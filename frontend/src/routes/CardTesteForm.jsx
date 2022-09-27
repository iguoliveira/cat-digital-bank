import { useState } from "react"
import { POST } from "../services/api"

export const CardTesteForm = () => {
    const [number, setNumber] = useState("")
    const [type, setType] = useState("")
    const [val, setVal] = useState("")
    const [code, setCode] = useState("")
    const [pass, setPass] = useState("")

    let data = {
        number: number,
        type: type,
        val: val,
        code: code,
        pass: pass,
    }

    const addCard = () => {
        event.preventDefault()
        POST("card/register", data)
    }
    return (
        <form onSubmit={addCard}>
            <input value={number} onChange={(evt) => setNumber(evt.target.value)} placeholder="Number" />
            <input value={type} onChange={(evt) => setType(evt.target.value)} placeholder="Type" />
            <input value={val} onChange={(evt) => setVal(evt.target.value)} placeholder="Validate" />
            <input value={code} onChange={(evt) => setCode(evt.target.value)} placeholder="Code" />
            <input value={pass} onChange={(evt) => setPass(evt.target.value)} placeholder="Password" />
            <button className="bg-black text-white p-1 rounded hover:bg-gray-800">Submit</button>
        </form>
    )
}