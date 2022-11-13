import { ReactNode } from 'react'
import './input.scss'

interface InputProps {
    spanName: string
    inputName: string
    type: string
    placeholder: string
    value: string
    onChange: any
}

interface SelectProps {
    children: ReactNode
}

interface ButtonProps {
    children: string
    onClick?: any
    type?: any
}

export const Input = ({ spanName, inputName, type, placeholder, value, onChange }: InputProps) => {
    return (
        <div className='input-content'>
            <span className='block'>{spanName}</span>
            <input name={inputName} type={type} placeholder={`Insert your ${placeholder}`} value={value} onChange={onChange} />
        </div>
    )
}

export const Select = ({ children }: SelectProps) => {
    return (
        <select className='select-content'>
            {children}
        </select>
    )
}

export const Button = ({ children, onClick, type }: ButtonProps) => {
    return (
        <button onClick={onClick} type={type} className="button-content">{children}</button>
    )
}