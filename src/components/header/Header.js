import { useState } from 'react'

// hooks
import { useLogout } from '../../hooks/useLogout'

// styles
import './Header.scss'

// assets
import logo from '../../assets/system/card-vault-logo.png'
import SecondaryBtn from '../btns/secondary-btn/SecondaryBtn'
import { useAuthContext } from '../../hooks/useAuthContext'

export default function Header({ setAuthToggle }) {
  const [active, setActive] = useState('login')
  const { user } = useAuthContext()
  const { logOut } = useLogout()

  const handleClick = (t) => {
    setAuthToggle(t)
    setActive(t)
  }

  return (
    <header className='header-container'>
      <img src={logo} alt='Cardvault logo' height='45px'/>
      
      {!user && 
        <div className='auth-toggle'>
          <p className={active === 'signup' ? 'underline' : ''} onClick={() => handleClick('signup')}>SIGN UP</p>
          <p className={active === 'login' ? 'underline' : ''} onClick={() => handleClick('login')}>LOG IN</p>
        </div>
      }

      {user &&
        <div className='header-profile' onClick={logOut}>
          <h1>Hello, {user.displayName}</h1>

          <SecondaryBtn title={'LOG OUT'} />
        </div>
      }

    </header>
  )
}
