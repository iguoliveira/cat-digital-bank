import './signup.scss'
import Logo from '../assets/logo-png.png'
import { Input } from '../components/Input'
import { Link } from 'react-router-dom'

export const Signup = () => {
    return (
        <section className='signup-content'>
            <Link to='/'>
                <img src={Logo} />
            </Link>
            <form>
                <Input />
            </form>
        </section>
    )
}