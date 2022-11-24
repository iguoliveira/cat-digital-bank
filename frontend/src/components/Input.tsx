import { ReactNode } from 'react'
import './input.scss'

interface InputProps {
    spanName: string
    inputName: string
    type: string
    placeholder: string
    value: any
    onChange: any
    maxlength?: any
    required?: boolean
    autoComplete?: string
}

interface SelectProps {
    children: ReactNode
    id: string
    onChange: any
    value: any
    inputName: string
}

interface ButtonProps {
    children: string
    onClick?: any
    type?: any
}

export const Input = ({ spanName, inputName, type, placeholder, value, onChange, maxlength, required, autoComplete }: InputProps) => {
    return (
        <div className='input-content'>
            <span className='block'>{spanName}</span>
            <input name={inputName} type={type} placeholder={`${placeholder}`} value={value} onChange={onChange} maxLength={maxlength} required={required} autoComplete={autoComplete} />
        </div>
    )
}

export const Select = ({ children, id, onChange, value, inputName }: SelectProps) => {
    return (
        <select className='select-content' id={id} name={inputName} onChange={onChange} value={value} >
            {children}
        </select>
    )
}

export const Button = ({ children, onClick, type }: ButtonProps) => {
    return (
        <button onClick={onClick} type={type} className="button-content">{children}</button>
    )
}