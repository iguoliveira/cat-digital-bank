import './input.scss'

export const Input = () => {
    return (
        <div className='input-content'>
            <span className='block'>Name</span>
            <input type='text' placeholder='Insert your name...' />
        </div>
    )
}