import './input.scss'

interface InputProps {
    spanName: string
    inputName: string
    type: string
    placeholder: string
    value: string
    onChange: any
}

export const Input = ({ spanName, inputName, type, placeholder, value, onChange }: InputProps) => {
    return (
        <div className='input-content'>
            <span className='block'>{spanName}</span>
            <input name={inputName} type={type} placeholder={`Insert your ${placeholder}...`} value={value} onChange={onChange} />
        </div>
    )
}