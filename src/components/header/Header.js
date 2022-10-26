import { useState } from 'react'

// styles
import './Header.scss'

// assets
import logo from '../../assets/system/card-vault-logo.png'

export default function Header({ setAuthToggle }) {
  const [active, setActive] = useState('signin')

  const handleClick = (t) => {
    console.log(t)
    setAuthToggle(t)
    setActive(t)
  }

  return (
    <header className='header-container'>
      <img src={logo} alt='Cardvault logo' height='45px'/>
      <div className='auth-toggle'>
        <p className={active === 'signup' ? 'underline' : ''} onClick={() => handleClick('signup')}>SIGN UP</p>
        <p className={active === 'signin' ? 'underline' : ''} onClick={() => handleClick('login')}>LOG IN</p>
      </div>
    </header>
  )
}
