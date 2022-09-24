import { useState, useEffect } from 'react'
import { GET } from '../services/api'
import { useParams } from "react-router-dom"

export const UserProfile = () => {
    const [apiresult, setApiresult] = useState([])
    let { id } = useParams()

    useEffect(() => {
        GET('user/all')
            .then(res => {
                setApiresult(res)
            })
    }, [])
    return (
        <div>
            {apiresult.map((item, index) => (
                id == item.id
                &&
                <div key={index}>{item.name}</div>
            ))}
        </div>
    )
}