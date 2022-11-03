import { useNavigate } from 'react-router-dom'

// assets
import logo from '../../assets/system/card-vault-logo.png'
import cardIcon from '../../assets/system/card-icon.png'
import pointIcon from '../../assets/system/point-icon.png'

// components
import HeaderDataPill from './components/header-data-pill/HeaderDataPill'
import HeaderProfilePill from './components/header-profile-pill/HeaderProfilePill'
import SecondaryBtn from '../btns/secondary-btn/SecondaryBtn'

// data
import { TEAM_LOGOS } from '../../data/team-logos'

// hooks
import { useAuthContext } from '../../hooks/useAuthContext'
import { useLogout } from '../../hooks/useLogout'
import { useUserContext } from '../../hooks/useUserContext'

// styles
import './Header.scss'

export default function Header() {
  const { user } = useAuthContext()
  const { cardCount, teamIndex } = useUserContext()
  const { logOut } = useLogout()
  const navigate = useNavigate()

  return (
    <header className='header-container'>
      <img src={logo} alt='Cardvault logo' height='45px'/>
      {user &&
        <div className='header-profile'>
          <HeaderDataPill val={cardCount} img={cardIcon}/>
          <HeaderDataPill val={cardCount} img={pointIcon}/>
          {teamIndex && 
            <div onClick={() => navigate('/account')}>
              <HeaderProfilePill val={user.displayName} img={TEAM_LOGOS[teamIndex].logo} alt=''/>
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