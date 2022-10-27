import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// assets
import logo from '../../assets/system/card-vault-logo.png'

// components
import CardCount from '../card-count/CardCount'
import SecondaryBtn from '../btns/secondary-btn/SecondaryBtn'

// data
import { TEAM_LOGOS } from '../../data/team-logos'

// hooks
import { useAuthContext } from '../../hooks/useAuthContext'
import { useLogout } from '../../hooks/useLogout'
import { useUserContext } from '../../hooks/useUserContext'

// styles
import './Header.scss'

export default function Header({ setAuthToggle }) {
  const [active, setActive] = useState('login')
  const { user } = useAuthContext()
  const { cardCount, teamIndex } = useUserContext()
  const { logOut } = useLogout()
  const navigate = useNavigate()

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
        <div className='header-profile'>
          <div className='profile-info'>
            <h1>Hello, {user.displayName}</h1>
            <CardCount count={cardCount}/>            
          </div>
          {teamIndex && 
            <div onClick={() => navigate('/account')}>
              <img className='profile-img' src={ TEAM_LOGOS[teamIndex].logo } alt='profile img' />
            </div>
          }
          <div onClick={logOut}>
            <SecondaryBtn title={'LOG OUT'} route='' />
          </div>
          
        </div>
      }
      
    </header>
  )
}
