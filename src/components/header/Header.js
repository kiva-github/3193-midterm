import { useNavigate } from 'react-router-dom'

// assets
import cardIcon from '../../assets/system/card-icon.png'
import logo from '../../assets/system/card-vault-logo.png'
import pointIcon from '../../assets/system/point-icon.png'
import symbol from '../../assets/system/cardvault-symbol.png'

// components
import HeaderDataPill from './components/header-data-pill/HeaderDataPill'
import HeaderProfilePill from './components/header-profile-pill/HeaderProfilePill'
import TertiaryBtn from '../btns/tertiary-btn/TertiaryBtn'

// hooks
import { useLogout } from '../../hooks/useLogout'
import { useUserContext } from '../../hooks/useUserContext'

// styles
import './Header.scss'

export default function Header({ btnNav=false, navPath=false, acctStats=false, acctTab=false }) {
  const { cardCount, teamIndex } = useUserContext()
  const { logOut } = useLogout()
  const navigate = useNavigate()

  return (
    <header className='header-container'>
      <div className='left-content'>
        {btnNav && <TertiaryBtn title={'BACK'} route={btnNav}/>}
        {navPath ? <img src={symbol} alt='Cardvault logo' height='20px'/> : <img src={logo} alt='Cardvault logo' height='45px'/>}
        {navPath && <h1>{navPath}</h1>}
      </div>
      <div className='right-content'>
        {acctStats &&
          <div className='acct-stats-container'>
            <HeaderDataPill val={cardCount} img={cardIcon}/>
            <HeaderDataPill val={cardCount} img={pointIcon}/>
          </div>
        }
        {acctTab && teamIndex &&
            <div className='acct-tab-container'>
              <div onClick={() => navigate('/account')}>
                <HeaderProfilePill />
              </div>
            <div onClick={logOut}>
              <TertiaryBtn title={'LOG OUT'} route='' />
            </div>
          </div>
        }
      </div>
    </header>
  )
}