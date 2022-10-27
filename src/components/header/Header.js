import { useState } from 'react'

// hooks
import { useAuthContext } from '../../hooks/useAuthContext'
import { useLogout } from '../../hooks/useLogout'
import { useUserContext } from '../../hooks/useUserContext'

// styles
import './Header.scss'

// assets
import logo from '../../assets/system/card-vault-logo.png'
import SecondaryBtn from '../btns/secondary-btn/SecondaryBtn'

// components
import CardCount from '../card-count/CardCount'

// data
import { TEAM_LOGOS } from '../../data/team-logos'


export default function Header({ setAuthToggle }) {
  const [active, setActive] = useState('login')
  const { user } = useAuthContext()
  const { cardCount, teamIndex } = useUserContext()
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
          <div className='profile-info'>
            <h1>Hello, {user.displayName}</h1>
            {cardCount && <CardCount count={cardCount}/>}
            
          </div>
          {teamIndex && 
          <img className='profile-img' src={ TEAM_LOGOS[teamIndex].logo } alt='profile img' />
          }
          <SecondaryBtn title={'LOG OUT'} />
        </div>
      }

    </header>
  )
}
